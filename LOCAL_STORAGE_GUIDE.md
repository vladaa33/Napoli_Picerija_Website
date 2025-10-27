# Local Storage Migration Guide

## Migration Overview

This website has been successfully migrated from Supabase to a fully local Bolt-based solution. All data is now stored locally using browser localStorage and local file system for images.

## What Changed

### Database Migration
- **Removed**: Supabase SQL database
- **Added**: Local data service (`src/lib/localDataService.ts`) with localStorage persistence
- **Data Source**: Static menu data in `src/data/menuData.ts`

### Photo Storage Migration
- **Removed**: Supabase photo storage
- **Added**: Local file system storage in `public/` directories
- **Pizza Images**: All 27 pizza images are connected and located in `public/pice/`

## File Structure

```
project/
├── public/
│   ├── pice/                    # Pizza images (27 pizzas)
│   │   ├── margarita pica.jpg
│   │   ├── kapricoza.jpg
│   │   ├── quattro formagi pica.jpg
│   │   └── ... (24 more)
│   └── images/                  # Other images
│
├── src/
│   ├── data/
│   │   └── menuData.ts         # Menu data with all pizzas
│   │
│   ├── lib/
│   │   └── localDataService.ts # Local data management
│   │
│   └── components/
│       ├── MenuSection.tsx      # Updated to use local data
│       ├── CategoryDetail.tsx   # Updated to use local data
│       ├── Admin.tsx            # Updated to use local data
│       └── Checkout.tsx         # Updated to use local data
```

## Current Menu Data

### Categories
- **Pica** (Pizza) - 27 items with images connected

### Pizza Items (All Connected with Images)
1. Margarita - `/pice/margarita pica.jpg`
2. Kapricoza - `/pice/kapricoza.jpg`
3. Quattro Formagi - `/pice/quattro formagi pica.jpg`
4. Quattro Stagioni - `/pice/quattro staggioni pica.jpg`
5. Diavola - `/pice/diavola pica.jpg`
6. Prosciutto - `/pice/prosciutto pica.jpg`
7. Fungi - `/pice/fungi pica.jpg`
8. Vegetarijana - `/pice/vegetarijana pica.jpg`
9. Hawaii - `/pice/hawaii pica.jpg`
10. Marinara - `/pice/marinara pica.jpg`
11. Napoletana - `/pice/napoletana pica.jpg`
12. Tono - `/pice/tono pica.jpg`
13. Speciale - `/pice/speciale pica.jpg`
14. Spinaci - `/pice/spinacci.jpg`
15. Buffalo - `/pice/buffalo pica.png`
16. Carska - `/pice/carska pica.jpg`
17. Cezar - `/pice/cezar pica.jpg`
18. Galija - `/pice/galija pica.jpg`
19. Kalcone - `/pice/kalcone pica.jpg`
20. Kraljevska - `/pice/kraljevska pica.jpg`
21. Napoli - `/pice/napoli pica.jpg`
22. Paragina - `/pice/paragina pica.jpg`
23. Sicilijana - `/pice/sicilijana pica.jpg`
24. Srpska - `/pice/srpska pica.png`
25. Susam - `/pice/susam pica.jpg`
26. Vezuvio - `/pice/vezuvio pica.jpg`
27. Voćna - `/pice/vocna pica.jpg`

All pizzas have 3 sizes: Mala (25cm), Srednja (32cm), Velika (42cm)

## How to Add New Menu Items

### Option 1: Using the Admin Panel
1. Click the "Admin" button at the bottom right of the website
2. Click "Dodaj stavku" (Add item)
3. Fill in the form:
   - Category: Select "Pica" or other category
   - Name: Item name
   - Description: Item description
   - Price: Base price
   - Image URL: Use format `/category-folder/image-name.jpg`
4. Click "Dodaj stavku" to save

### Option 2: Editing menuData.ts Directly
1. Add your new image to the appropriate folder in `public/`
2. Open `src/data/menuData.ts`
3. Add a new item to the `menuItems` array:

```typescript
{
  id: 'pizza-new-item',
  category_id: 'cat-pica',
  name: 'New Pizza Name',
  description: 'Pizza description',
  price: 500,
  image_url: '/pice/new-pizza.jpg',
  is_available: true,
  is_featured: false,
  display_order: 28,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  sizes: [
    {
      id: 'size-new-small',
      menu_item_id: 'pizza-new-item',
      size_name: 'Mala (25cm)',
      price: 500,
      is_available: true,
      display_order: 1,
      created_at: new Date().toISOString()
    },
    // Add more sizes as needed
  ]
}
```

## How to Add New Categories

### Option 1: Edit menuData.ts
1. Create a new folder in `public/` for category images
2. Open `src/data/menuData.ts`
3. Add a new category to the `categories` array:

```typescript
{
  id: 'cat-new-category',
  name: 'New Category Name',
  slug: 'new-category',
  display_order: 2,
  is_active: true,
  image_url: '/category-folder/category-image.jpg',
  created_at: new Date().toISOString()
}
```

4. Add menu items with `category_id: 'cat-new-category'`

## Adding More Photos

### Step 1: Organize Images
Create folders in `public/` for each category:
```
public/
├── pice/          # Pizzas (already done)
├── sendvici/      # Sandwiches
├── paste/         # Pasta
├── salate/        # Salads
└── ...
```

### Step 2: Connect Images to Items
In `src/data/menuData.ts`, update each menu item's `image_url`:
```typescript
image_url: '/category-folder/item-image.jpg'
```

### Step 3: Test
1. Save the changes
2. The images will automatically appear on the website
3. Use the Admin panel to verify all items display correctly

## Data Persistence

### How Data is Stored
- **Initial Data**: Loaded from `src/data/menuData.ts`
- **Runtime Changes**: Saved to browser localStorage
- **Orders**: Stored in localStorage as JSON

### LocalStorage Keys
- `menuItems`: Modified menu items
- `orders`: Customer orders
- `orderItems`: Order line items

### Clearing Data
To reset to initial state:
```javascript
localStorage.clear();
// Refresh the page
```

## Features Preserved

All original functionality is maintained:
- Menu browsing by category
- Add to cart with size selection
- Pizza topping customization
- Order checkout
- Admin panel for menu management
- Order tracking

## Benefits of Local Storage

1. **No External Dependencies**: No need for Supabase or other cloud services
2. **Faster Performance**: No network calls for menu data
3. **Offline Capable**: Menu loads instantly
4. **Easy Backup**: Simply copy the `src/data/menuData.ts` file
5. **Version Control**: Menu data can be tracked in git
6. **Simple Updates**: Edit one file to update all menu items

## Scaling Strategy

When you need to add items to other categories:

1. **Create image folders** for each category
2. **Upload images** to respective folders
3. **Update menuData.ts** with new items
4. **Use Admin panel** for ongoing changes

The system is designed to scale from 1 to 1000+ menu items without performance issues.

## Troubleshooting

### Images Not Showing
- Check that image path matches file location
- Verify image file exists in `public/` folder
- Check browser console for 404 errors

### Menu Items Not Appearing
- Verify `is_available: true` in menuData.ts
- Check `category_id` matches a valid category
- Clear localStorage and refresh

### Admin Changes Not Persisting
- Check browser localStorage is enabled
- Verify no browser extensions blocking localStorage
- Try in incognito mode to test

## Next Steps

To continue expanding your menu:

1. Add remaining category images to `public/`
2. Create entries in `menuData.ts` for each item
3. Connect images using the `/folder/filename.jpg` format
4. Use Admin panel to fine-tune prices and descriptions
5. Test ordering flow with new items

Your website is now fully independent and running locally!
