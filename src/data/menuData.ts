import type { Category, MenuItem } from '../types';

export const categories: Category[] = [
  {
    id: 'cat-pica',
    name: 'Pica',
    slug: 'pica',
    display_order: 1,
    is_active: true,
    image_url: '/pice/margarita pica.jpg',
    created_at: new Date().toISOString()
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 'pizza-margarita',
    category_id: 'cat-pica',
    name: 'Margarita',
    description: 'Paradajz sos, mocarela, bosiljak',
    price: 450,
    image_url: '/pice/margarita pica.jpg',
    is_available: true,
    is_featured: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-margarita-small',
        menu_item_id: 'pizza-margarita',
        size_name: 'Mala (25cm)',
        price: 450,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-margarita-medium',
        menu_item_id: 'pizza-margarita',
        size_name: 'Srednja (32cm)',
        price: 650,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-margarita-large',
        menu_item_id: 'pizza-margarita',
        size_name: 'Velika (42cm)',
        price: 850,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-capricciosa',
    category_id: 'cat-pica',
    name: 'Kapricoza',
    description: 'Paradajz sos, mocarela, šunka, pečurke',
    price: 550,
    image_url: '/pice/kapricoza.jpg',
    is_available: true,
    is_featured: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-capricciosa-small',
        menu_item_id: 'pizza-capricciosa',
        size_name: 'Mala (25cm)',
        price: 550,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-capricciosa-medium',
        menu_item_id: 'pizza-capricciosa',
        size_name: 'Srednja (32cm)',
        price: 750,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-capricciosa-large',
        menu_item_id: 'pizza-capricciosa',
        size_name: 'Velika (42cm)',
        price: 950,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-quattro-formagi',
    category_id: 'cat-pica',
    name: 'Quattro Formagi',
    description: 'Četiri vrste sira: mocarela, gorgonzola, parmezan, ementel',
    price: 600,
    image_url: '/pice/quattro formagi pica.jpg',
    is_available: true,
    is_featured: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-quattro-small',
        menu_item_id: 'pizza-quattro-formagi',
        size_name: 'Mala (25cm)',
        price: 600,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-quattro-medium',
        menu_item_id: 'pizza-quattro-formagi',
        size_name: 'Srednja (32cm)',
        price: 800,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-quattro-large',
        menu_item_id: 'pizza-quattro-formagi',
        size_name: 'Velika (42cm)',
        price: 1000,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-quattro-stagioni',
    category_id: 'cat-pica',
    name: 'Quattro Stagioni',
    description: 'Paradajz sos, mocarela, šunka, pečurke, masline, artičoke',
    price: 650,
    image_url: '/pice/quattro staggioni pica.jpg',
    is_available: true,
    is_featured: true,
    display_order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-stagioni-small',
        menu_item_id: 'pizza-quattro-stagioni',
        size_name: 'Mala (25cm)',
        price: 650,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-stagioni-medium',
        menu_item_id: 'pizza-quattro-stagioni',
        size_name: 'Srednja (32cm)',
        price: 850,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-stagioni-large',
        menu_item_id: 'pizza-quattro-stagioni',
        size_name: 'Velika (42cm)',
        price: 1050,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-diavola',
    category_id: 'cat-pica',
    name: 'Diavola',
    description: 'Paradajz sos, mocarela, ljuta salama, feferoni',
    price: 580,
    image_url: '/pice/diavola pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-diavola-small',
        menu_item_id: 'pizza-diavola',
        size_name: 'Mala (25cm)',
        price: 580,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-diavola-medium',
        menu_item_id: 'pizza-diavola',
        size_name: 'Srednja (32cm)',
        price: 780,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-diavola-large',
        menu_item_id: 'pizza-diavola',
        size_name: 'Velika (42cm)',
        price: 980,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-prosciutto',
    category_id: 'cat-pica',
    name: 'Prosciutto',
    description: 'Paradajz sos, mocarela, pršut',
    price: 700,
    image_url: '/pice/prosciutto pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 6,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-prosciutto-small',
        menu_item_id: 'pizza-prosciutto',
        size_name: 'Mala (25cm)',
        price: 700,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-prosciutto-medium',
        menu_item_id: 'pizza-prosciutto',
        size_name: 'Srednja (32cm)',
        price: 900,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-prosciutto-large',
        menu_item_id: 'pizza-prosciutto',
        size_name: 'Velika (42cm)',
        price: 1100,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-fungi',
    category_id: 'cat-pica',
    name: 'Fungi',
    description: 'Paradajz sos, mocarela, različite vrste pečuraka',
    price: 520,
    image_url: '/pice/fungi pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 7,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-fungi-small',
        menu_item_id: 'pizza-fungi',
        size_name: 'Mala (25cm)',
        price: 520,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-fungi-medium',
        menu_item_id: 'pizza-fungi',
        size_name: 'Srednja (32cm)',
        price: 720,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-fungi-large',
        menu_item_id: 'pizza-fungi',
        size_name: 'Velika (42cm)',
        price: 920,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-vegetariana',
    category_id: 'cat-pica',
    name: 'Vegetarijana',
    description: 'Paradajz sos, mocarela, paprіka, tikvіce, pečurke, luk',
    price: 500,
    image_url: '/pice/vegetarijana pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 8,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-vege-small',
        menu_item_id: 'pizza-vegetariana',
        size_name: 'Mala (25cm)',
        price: 500,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-vege-medium',
        menu_item_id: 'pizza-vegetariana',
        size_name: 'Srednja (32cm)',
        price: 700,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-vege-large',
        menu_item_id: 'pizza-vegetariana',
        size_name: 'Velika (42cm)',
        price: 900,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-hawaii',
    category_id: 'cat-pica',
    name: 'Hawaii',
    description: 'Paradajz sos, mocarela, šunka, ananas',
    price: 570,
    image_url: '/pice/hawaii pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 9,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-hawaii-small',
        menu_item_id: 'pizza-hawaii',
        size_name: 'Mala (25cm)',
        price: 570,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-hawaii-medium',
        menu_item_id: 'pizza-hawaii',
        size_name: 'Srednja (32cm)',
        price: 770,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-hawaii-large',
        menu_item_id: 'pizza-hawaii',
        size_name: 'Velika (42cm)',
        price: 970,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-marinara',
    category_id: 'cat-pica',
    name: 'Marinara',
    description: 'Paradajz sos, beli luk, origano, maslinovo ulje',
    price: 400,
    image_url: '/pice/marinara pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-marinara-small',
        menu_item_id: 'pizza-marinara',
        size_name: 'Mala (25cm)',
        price: 400,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-marinara-medium',
        menu_item_id: 'pizza-marinara',
        size_name: 'Srednja (32cm)',
        price: 600,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-marinara-large',
        menu_item_id: 'pizza-marinara',
        size_name: 'Velika (42cm)',
        price: 800,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-napoletana',
    category_id: 'cat-pica',
    name: 'Napoletana',
    description: 'Paradajz sos, mocarela, inćuni, masline, kapar',
    price: 590,
    image_url: '/pice/napoletana pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 11,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-napoletana-small',
        menu_item_id: 'pizza-napoletana',
        size_name: 'Mala (25cm)',
        price: 590,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-napoletana-medium',
        menu_item_id: 'pizza-napoletana',
        size_name: 'Srednja (32cm)',
        price: 790,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-napoletana-large',
        menu_item_id: 'pizza-napoletana',
        size_name: 'Velika (42cm)',
        price: 990,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-tono',
    category_id: 'cat-pica',
    name: 'Tono',
    description: 'Paradajz sos, mocarela, tunjevina, luk',
    price: 600,
    image_url: '/pice/tono pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 12,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-tono-small',
        menu_item_id: 'pizza-tono',
        size_name: 'Mala (25cm)',
        price: 600,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-tono-medium',
        menu_item_id: 'pizza-tono',
        size_name: 'Srednja (32cm)',
        price: 800,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-tono-large',
        menu_item_id: 'pizza-tono',
        size_name: 'Velika (42cm)',
        price: 1000,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-speciale',
    category_id: 'cat-pica',
    name: 'Speciale',
    description: 'Paradajz sos, mocarela, šunka, pečurke, paprika, masline',
    price: 620,
    image_url: '/pice/speciale pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 13,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-speciale-small',
        menu_item_id: 'pizza-speciale',
        size_name: 'Mala (25cm)',
        price: 620,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-speciale-medium',
        menu_item_id: 'pizza-speciale',
        size_name: 'Srednja (32cm)',
        price: 820,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-speciale-large',
        menu_item_id: 'pizza-speciale',
        size_name: 'Velika (42cm)',
        price: 1020,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-spinaci',
    category_id: 'cat-pica',
    name: 'Spinaci',
    description: 'Paradajz sos, mocarela, spanaћ, feta sir',
    price: 580,
    image_url: '/pice/spinacci.jpg',
    is_available: true,
    is_featured: false,
    display_order: 14,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-spinaci-small',
        menu_item_id: 'pizza-spinaci',
        size_name: 'Mala (25cm)',
        price: 580,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-spinaci-medium',
        menu_item_id: 'pizza-spinaci',
        size_name: 'Srednja (32cm)',
        price: 780,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-spinaci-large',
        menu_item_id: 'pizza-spinaci',
        size_name: 'Velika (42cm)',
        price: 980,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-buffalo',
    category_id: 'cat-pica',
    name: 'Buffalo',
    description: 'Paradajz sos, buffalo mocarela, svež bosiljak, cherry paradajz',
    price: 750,
    image_url: '/pice/buffalo pica.png',
    is_available: true,
    is_featured: false,
    display_order: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-buffalo-small',
        menu_item_id: 'pizza-buffalo',
        size_name: 'Mala (25cm)',
        price: 750,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-buffalo-medium',
        menu_item_id: 'pizza-buffalo',
        size_name: 'Srednja (32cm)',
        price: 950,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-buffalo-large',
        menu_item_id: 'pizza-buffalo',
        size_name: 'Velika (42cm)',
        price: 1150,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-carska',
    category_id: 'cat-pica',
    name: 'Carska',
    description: 'Paradajz sos, mocarela, pršut, rukola, parmezan',
    price: 720,
    image_url: '/pice/carska pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 16,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-carska-small',
        menu_item_id: 'pizza-carska',
        size_name: 'Mala (25cm)',
        price: 720,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-carska-medium',
        menu_item_id: 'pizza-carska',
        size_name: 'Srednja (32cm)',
        price: 920,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-carska-large',
        menu_item_id: 'pizza-carska',
        size_name: 'Velika (42cm)',
        price: 1120,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-cezar',
    category_id: 'cat-pica',
    name: 'Cezar',
    description: 'Paradajz sos, mocarela, piletina, cezar dressing, salata',
    price: 680,
    image_url: '/pice/cezar pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 17,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-cezar-small',
        menu_item_id: 'pizza-cezar',
        size_name: 'Mala (25cm)',
        price: 680,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-cezar-medium',
        menu_item_id: 'pizza-cezar',
        size_name: 'Srednja (32cm)',
        price: 880,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-cezar-large',
        menu_item_id: 'pizza-cezar',
        size_name: 'Velika (42cm)',
        price: 1080,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-galija',
    category_id: 'cat-pica',
    name: 'Galija',
    description: 'Paradajz sos, mocarela, kajmak, šunka, pečurke',
    price: 650,
    image_url: '/pice/galija pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 18,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-galija-small',
        menu_item_id: 'pizza-galija',
        size_name: 'Mala (25cm)',
        price: 650,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-galija-medium',
        menu_item_id: 'pizza-galija',
        size_name: 'Srednja (32cm)',
        price: 850,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-galija-large',
        menu_item_id: 'pizza-galija',
        size_name: 'Velika (42cm)',
        price: 1050,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-kalcone',
    category_id: 'cat-pica',
    name: 'Kalcone',
    description: 'Savijen pica hleb, punjena mocarelom, šunkom i pečurkama',
    price: 600,
    image_url: '/pice/kalcone pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 19,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-kalcone-small',
        menu_item_id: 'pizza-kalcone',
        size_name: 'Mala',
        price: 600,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-kalcone-medium',
        menu_item_id: 'pizza-kalcone',
        size_name: 'Srednja',
        price: 800,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-kraljevska',
    category_id: 'cat-pica',
    name: 'Kraljevska',
    description: 'Paradajz sos, mocarela, pršut, rukola, pesto',
    price: 750,
    image_url: '/pice/kraljevska pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-kraljevska-small',
        menu_item_id: 'pizza-kraljevska',
        size_name: 'Mala (25cm)',
        price: 750,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-kraljevska-medium',
        menu_item_id: 'pizza-kraljevska',
        size_name: 'Srednja (32cm)',
        price: 950,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-kraljevska-large',
        menu_item_id: 'pizza-kraljevska',
        size_name: 'Velika (42cm)',
        price: 1150,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-napoli',
    category_id: 'cat-pica',
    name: 'Napoli',
    description: 'Paradajz sos, mocarela, inćuni, kapar, masline',
    price: 570,
    image_url: '/pice/napoli pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 21,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-napoli-small',
        menu_item_id: 'pizza-napoli',
        size_name: 'Mala (25cm)',
        price: 570,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-napoli-medium',
        menu_item_id: 'pizza-napoli',
        size_name: 'Srednja (32cm)',
        price: 770,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-napoli-large',
        menu_item_id: 'pizza-napoli',
        size_name: 'Velika (42cm)',
        price: 970,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-paragina',
    category_id: 'cat-pica',
    name: 'Paragina',
    description: 'Beli sos, mocarela, spanaћ, šunka',
    price: 590,
    image_url: '/pice/paragina pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 22,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-paragina-small',
        menu_item_id: 'pizza-paragina',
        size_name: 'Mala (25cm)',
        price: 590,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-paragina-medium',
        menu_item_id: 'pizza-paragina',
        size_name: 'Srednja (32cm)',
        price: 790,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-paragina-large',
        menu_item_id: 'pizza-paragina',
        size_name: 'Velika (42cm)',
        price: 990,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-sicilijana',
    category_id: 'cat-pica',
    name: 'Sicilijana',
    description: 'Paradajz sos, mocarela, kapar, inćuni, masline',
    price: 610,
    image_url: '/pice/sicilijana pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 23,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-sicilijana-small',
        menu_item_id: 'pizza-sicilijana',
        size_name: 'Mala (25cm)',
        price: 610,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-sicilijana-medium',
        menu_item_id: 'pizza-sicilijana',
        size_name: 'Srednja (32cm)',
        price: 810,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-sicilijana-large',
        menu_item_id: 'pizza-sicilijana',
        size_name: 'Velika (42cm)',
        price: 1010,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-srpska',
    category_id: 'cat-pica',
    name: 'Srpska',
    description: 'Paradajz sos, mocarela, kajmak, kulen, ajvar',
    price: 670,
    image_url: '/pice/srpska pica.png',
    is_available: true,
    is_featured: false,
    display_order: 24,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-srpska-small',
        menu_item_id: 'pizza-srpska',
        size_name: 'Mala (25cm)',
        price: 670,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-srpska-medium',
        menu_item_id: 'pizza-srpska',
        size_name: 'Srednja (32cm)',
        price: 870,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-srpska-large',
        menu_item_id: 'pizza-srpska',
        size_name: 'Velika (42cm)',
        price: 1070,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-susam',
    category_id: 'cat-pica',
    name: 'Susam',
    description: 'Beli sos, mocarela, piletina, susam, teriyaki sos',
    price: 690,
    image_url: '/pice/susam pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 25,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-susam-small',
        menu_item_id: 'pizza-susam',
        size_name: 'Mala (25cm)',
        price: 690,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-susam-medium',
        menu_item_id: 'pizza-susam',
        size_name: 'Srednja (32cm)',
        price: 890,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-susam-large',
        menu_item_id: 'pizza-susam',
        size_name: 'Velika (42cm)',
        price: 1090,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-vezuvio',
    category_id: 'cat-pica',
    name: 'Vezuvio',
    description: 'Paradajz sos, mocarela, ljuta salama, paprike, luk',
    price: 620,
    image_url: '/pice/vezuvio pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 26,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-vezuvio-small',
        menu_item_id: 'pizza-vezuvio',
        size_name: 'Mala (25cm)',
        price: 620,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-vezuvio-medium',
        menu_item_id: 'pizza-vezuvio',
        size_name: 'Srednja (32cm)',
        price: 820,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-vezuvio-large',
        menu_item_id: 'pizza-vezuvio',
        size_name: 'Velika (42cm)',
        price: 1020,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  },
  {
    id: 'pizza-vocna',
    category_id: 'cat-pica',
    name: 'Voćna',
    description: 'Beli sos, mocarela, sezonsko voće, med',
    price: 650,
    image_url: '/pice/vocna pica.jpg',
    is_available: true,
    is_featured: false,
    display_order: 27,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sizes: [
      {
        id: 'size-vocna-small',
        menu_item_id: 'pizza-vocna',
        size_name: 'Mala (25cm)',
        price: 650,
        is_available: true,
        display_order: 1,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-vocna-medium',
        menu_item_id: 'pizza-vocna',
        size_name: 'Srednja (32cm)',
        price: 850,
        is_available: true,
        display_order: 2,
        created_at: new Date().toISOString()
      },
      {
        id: 'size-vocna-large',
        menu_item_id: 'pizza-vocna',
        size_name: 'Velika (42cm)',
        price: 1050,
        is_available: true,
        display_order: 3,
        created_at: new Date().toISOString()
      }
    ]
  }
];
