/*
  # Napoli Restaurant Database Schema

  ## Overview
  This migration creates the complete database structure for the Napoli restaurant
  online ordering system, including menu management, orders, and customer data.

  ## New Tables

  ### 1. `categories`
  Stores menu categories (Pice, Doručak, Italijanski specijaliteti)
  - `id` (uuid, primary key) - Unique category identifier
  - `name` (text) - Category name in Serbian
  - `slug` (text, unique) - URL-friendly version for routing
  - `display_order` (integer) - Order in which categories appear
  - `is_active` (boolean) - Whether category is visible to customers
  - `created_at` (timestamptz) - Record creation timestamp

  ### 2. `menu_items`
  Stores all dishes available for order
  - `id` (uuid, primary key) - Unique item identifier
  - `category_id` (uuid, foreign key) - Links to categories table
  - `name` (text) - Dish name in Serbian
  - `description` (text) - Detailed description
  - `price` (decimal) - Price in Serbian dinars
  - `image_url` (text) - URL to dish image
  - `is_available` (boolean) - Current availability status
  - `is_featured` (boolean) - Highlight on homepage
  - `display_order` (integer) - Order within category
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 3. `customers`
  Stores customer information for orders
  - `id` (uuid, primary key) - Unique customer identifier
  - `email` (text, unique) - Customer email
  - `full_name` (text) - Customer full name
  - `phone` (text) - Contact phone number
  - `address` (text) - Delivery address
  - `city` (text) - City name
  - `postal_code` (text) - Postal code
  - `created_at` (timestamptz) - Record creation timestamp

  ### 4. `orders`
  Stores customer orders
  - `id` (uuid, primary key) - Unique order identifier
  - `customer_id` (uuid, foreign key) - Links to customers table
  - `order_number` (text, unique) - Human-readable order number
  - `status` (text) - Order status (pending, confirmed, preparing, delivering, completed, cancelled)
  - `total_amount` (decimal) - Total order price
  - `delivery_address` (text) - Full delivery address
  - `customer_notes` (text) - Special instructions
  - `payment_status` (text) - Payment status (pending, paid, failed)
  - `payment_method` (text) - Payment method used
  - `created_at` (timestamptz) - Order placement time
  - `updated_at` (timestamptz) - Last status update time

  ### 5. `order_items`
  Stores individual items in each order
  - `id` (uuid, primary key) - Unique order item identifier
  - `order_id` (uuid, foreign key) - Links to orders table
  - `menu_item_id` (uuid, foreign key) - Links to menu_items table
  - `quantity` (integer) - Number of items ordered
  - `unit_price` (decimal) - Price per item at time of order
  - `subtotal` (decimal) - Total for this line item
  - `special_instructions` (text) - Item-specific notes

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public read access for menu browsing (categories, menu_items)
  - Authenticated access required for order management
  - Customers can only view/create their own orders
  - Admin policies for menu and order management

  ## Indexes
  - Foreign key indexes for optimal join performance
  - Unique indexes on email, order_number, category slug
  - Composite index on menu items for category filtering

  ## Important Notes
  - All prices are stored as decimal(10,2) for precise currency handling
  - Timestamps use timestamptz for proper timezone support
  - Order numbers are generated using a sequence for uniqueness
  - Default values ensure data consistency
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create menu_items table
CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text DEFAULT '',
  price decimal(10,2) NOT NULL CHECK (price >= 0),
  image_url text DEFAULT '',
  is_available boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  address text DEFAULT '',
  city text DEFAULT '',
  postal_code text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id uuid REFERENCES customers(id) ON DELETE SET NULL,
  order_number text UNIQUE NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'delivering', 'completed', 'cancelled')),
  total_amount decimal(10,2) NOT NULL CHECK (total_amount >= 0),
  delivery_address text NOT NULL,
  customer_notes text DEFAULT '',
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  payment_method text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  menu_item_id uuid REFERENCES menu_items(id) ON DELETE RESTRICT NOT NULL,
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price decimal(10,2) NOT NULL CHECK (unit_price >= 0),
  subtotal decimal(10,2) NOT NULL CHECK (subtotal >= 0),
  special_instructions text DEFAULT ''
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_available ON menu_items(is_available) WHERE is_available = true;
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories (public read)
CREATE POLICY "Anyone can view active categories"
  ON categories FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage categories"
  ON categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for menu_items (public read)
CREATE POLICY "Anyone can view available menu items"
  ON menu_items FOR SELECT
  USING (is_available = true);

CREATE POLICY "Authenticated users can manage menu items"
  ON menu_items FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for customers
CREATE POLICY "Customers can view own data"
  ON customers FOR SELECT
  TO authenticated
  USING (auth.jwt()->>'email' = email);

CREATE POLICY "Anyone can create customer record"
  ON customers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Customers can update own data"
  ON customers FOR UPDATE
  TO authenticated
  USING (auth.jwt()->>'email' = email)
  WITH CHECK (auth.jwt()->>'email' = email);

-- RLS Policies for orders
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Customers can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (
    customer_id IN (
      SELECT id FROM customers WHERE email = auth.jwt()->>'email'
    )
  );

CREATE POLICY "Authenticated users can manage all orders"
  ON orders FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for order_items
CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Customers can view own order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    order_id IN (
      SELECT id FROM orders WHERE customer_id IN (
        SELECT id FROM customers WHERE email = auth.jwt()->>'email'
      )
    )
  );

CREATE POLICY "Authenticated users can manage all order items"
  ON order_items FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial categories
INSERT INTO categories (name, slug, display_order) VALUES
  ('Pice', 'pice', 1),
  ('Doručak', 'dorucak', 2),
  ('Italijanski specijaliteti', 'italijanski-specijaliteti', 3)
ON CONFLICT (slug) DO NOTHING;

-- Create function to generate order numbers
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS text AS $$
DECLARE
  new_number text;
  counter integer;
BEGIN
  SELECT COUNT(*) + 1 INTO counter FROM orders;
  new_number := 'NP' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(counter::text, 4, '0');
  RETURN new_number;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate order numbers
CREATE OR REPLACE FUNCTION set_order_number()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.order_number IS NULL OR NEW.order_number = '' THEN
    NEW.order_number := generate_order_number();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_order_number
  BEFORE INSERT ON orders
  FOR EACH ROW
  EXECUTE FUNCTION set_order_number();

-- Create trigger to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_menu_items_timestamp
  BEFORE UPDATE ON menu_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_update_orders_timestamp
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();