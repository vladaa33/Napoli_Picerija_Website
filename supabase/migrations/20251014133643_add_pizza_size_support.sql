/*
  # Add Pizza Size Support

  ## Overview
  Modifies the menu_items table to support multiple sizes and prices for pizzas.
  Adds size variants table to handle different sizes (28cm, 32cm, 42cm, 50cm) with different prices.

  ## Changes
  1. New Tables
     - `menu_item_sizes` - Stores size variants for menu items
       - `id` (uuid, primary key)
       - `menu_item_id` (uuid, foreign key to menu_items)
       - `size_name` (text) - e.g., "28 cm", "32 cm", "42 cm", "50 cm"
       - `price` (decimal) - Price for this size
       - `is_available` (boolean) - Whether this size is available
       - `display_order` (integer) - Order to display sizes
       - `created_at` (timestamp)
  
  2. Security
     - Enable RLS on menu_item_sizes table
     - Add policy for public read access
     - Add policy for authenticated admin write access
*/

-- Create menu_item_sizes table
CREATE TABLE IF NOT EXISTS menu_item_sizes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  menu_item_id uuid REFERENCES menu_items(id) ON DELETE CASCADE NOT NULL,
  size_name text NOT NULL,
  price decimal(10, 2) NOT NULL,
  is_available boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE menu_item_sizes ENABLE ROW LEVEL SECURITY;

-- Public can read available sizes
CREATE POLICY "Anyone can view available menu item sizes"
  ON menu_item_sizes FOR SELECT
  USING (is_available = true);

-- Authenticated users can manage sizes (for admin)
CREATE POLICY "Authenticated users can insert menu item sizes"
  ON menu_item_sizes FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update menu item sizes"
  ON menu_item_sizes FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete menu item sizes"
  ON menu_item_sizes FOR DELETE
  TO authenticated
  USING (true);