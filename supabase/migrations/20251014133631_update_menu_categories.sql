/*
  # Update Menu Categories

  ## Overview
  Updates the categories table with the complete list of menu categories for Napoli restaurant.
  Adds image_url field to categories table to support visual category cards.

  ## Changes
  1. Schema Changes
     - Add `image_url` column to categories table for category images
  
  2. Data Changes
     - Remove old categories
     - Insert new comprehensive category list:
       - Pice (Pizzas)
       - Doručak (Breakfast)
       - Italijanski specijaliteti (Italian Specialties)
       - Jela po porudžbini (Made-to-Order Dishes)
       - Pasta
       - Riba (Fish)
       - Čorbe (Soups)
       - Kuvana jela (Cooked Dishes)
       - Rižoto (Risotto)
       - Salate (Salads)
       - Sendviči (Sandwiches)
       - Tortilje (Tortillas)
       - Deserti (Desserts)
       - Slane palačinke (Savory Pancakes)
       - Slatke palačinke (Sweet Pancakes)
       - Pića (Beverages)
*/

-- Add image_url column to categories if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'categories' AND column_name = 'image_url'
  ) THEN
    ALTER TABLE categories ADD COLUMN image_url text DEFAULT '';
  END IF;
END $$;

-- Delete existing categories
DELETE FROM categories;

-- Insert new categories with proper ordering
INSERT INTO categories (name, slug, display_order, image_url, is_active) VALUES
  ('Pice', 'pice', 1, '', true),
  ('Doručak', 'dorucak', 2, '', true),
  ('Italijanski specijaliteti', 'italijanski-specijaliteti', 3, '', true),
  ('Jela po porudžbini', 'jela-po-porudzbini', 4, '', true),
  ('Pasta', 'pasta', 5, '', true),
  ('Riba', 'riba', 6, '', true),
  ('Čorbe', 'corbe', 7, '', true),
  ('Kuvana jela', 'kuvana-jela', 8, '', true),
  ('Rižoto', 'rizoto', 9, '', true),
  ('Salate', 'salate', 10, '', true),
  ('Sendviči', 'sendvici', 11, '', true),
  ('Tortilje', 'tortilje', 12, '', true),
  ('Deserti', 'deserti', 13, '', true),
  ('Slane palačinke', 'slane-palacinke', 14, '', true),
  ('Slatke palačinke', 'slatke-palacinke', 15, '', true),
  ('Pića', 'pica-napici', 16, '', true);