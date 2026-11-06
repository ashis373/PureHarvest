import { Product, Review } from '../types';

export const CATEGORIES_DATA = [
  {
    id: 'ghee-oil' as const,
    title: 'Pure Ghee & Cooking Oil',
    subtitle: 'Hand-churned A2 Vedic bilona cow ghee and cold wood-pressed unrefined cooking oils.',
    description: 'Prepared using age-old slow churning in earthen pots and traditional wooden expeller (kachi ghani). Rich in natural CLA, fat-soluble vitamins, and authentic nutty aroma.',
    highlights: [
      'Traditional Vedic Bilona Churning',
      'Cold Wood-Pressed (Lakdi Ghani)',
      'Zero Preservatives or Chemicals',
      'High Smoke Point & Nutty Aroma'
    ],
    image: '/src/assets/images/cat_ghee_cooking_oil_1793959949215.jpg',
    tagline: 'Pure liquid gold for daily wellness & authentic taste'
  },
  {
    id: 'spices' as const,
    title: 'Authentic Indian Spices',
    subtitle: 'Single-origin stone-ground spices retaining natural essential oils and vibrant colour.',
    description: 'Whole and freshly stone-milled spices sourced directly from native farms. High-curcumin Meghalaya turmeric, vibrant pungent Kashmiri chilli, and fragrant sun-dried cumin.',
    highlights: [
      'Slow Stone-Milled (Pound Method)',
      '100% Pure, No Artificial Colours',
      'Rich in Natural Volatile Oils',
      'Direct Sourced from Origin Farms'
    ],
    image: '/src/assets/images/cat_indian_spices_1793959950009.jpg',
    tagline: 'The soul of Indian cooking, freshly milled'
  },
  {
    id: 'vegetables' as const,
    title: 'Fresh Farm Vegetables',
    subtitle: 'Hand-picked daily harvest delivered crisp from soil to kitchen within hours.',
    description: 'Sun-ripened Indian kitchen staples grown with natural compost. Plump desi tomatoes, pungent Nashik onions, golden potatoes, crisp carrots, and hand-bundled dewy greens.',
    highlights: [
      'Dawn Harvest Every Single Day',
      'Zero Wax Coating or Chemical Polish',
      'Ozone-Cleaned & Packed with Care',
      'Daily Kitchen Staples in Prime Quality'
    ],
    image: '/src/assets/images/cat_fresh_vegetables_1793959950397.jpg',
    tagline: 'Harvested at sunrise, delivered to your door'
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  // Category 1: Pure Ghee & Cooking Oil
  {
    id: 'prod-ghee-1',
    name: 'Vedic A2 Gir Cow Bilona Ghee',
    hindiName: 'वैदिक ए2 बिलोना गाय का घी',
    category: 'ghee-oil',
    categoryName: 'Pure Ghee & Cooking Oil',
    unit: '500 ml Glass Jar',
    price: 780,
    originalPrice: 890,
    description: 'Hand-churned from curd of grass-fed Gir cows using traditional wooden bilona. Golden, grainy texture with celestial aroma.',
    inStock: true,
    image: '/src/assets/images/cat_ghee_cooking_oil_1793959949215.jpg',
    badge: 'Bestseller',
    purityHighlight: 'Curd-Churned • Grass-Fed A2'
  },
  {
    id: 'prod-ghee-2',
    name: 'Traditional Buffalo Danedar Ghee',
    hindiName: 'पारंपरिक दानेदार भैंस का घी',
    category: 'ghee-oil',
    categoryName: 'Pure Ghee & Cooking Oil',
    unit: '500 ml Glass Jar',
    price: 620,
    originalPrice: 690,
    description: 'Pure creamy white granular ghee with rich aroma, ideal for festive sweets, parathas, and high-heat Indian cooking.',
    inStock: true,
    image: '/src/assets/images/cat_ghee_cooking_oil_1793959949215.jpg',
    purityHighlight: 'Authentic Danedar Granules'
  },
  {
    id: 'prod-oil-1',
    name: 'Cold-Pressed Kachi Ghani Mustard Oil',
    hindiName: 'लकड़ी घाणी शुद्ध सरसों का तेल',
    category: 'ghee-oil',
    categoryName: 'Pure Ghee & Cooking Oil',
    unit: '1 Litre Dark Bottle',
    price: 210,
    originalPrice: 245,
    description: 'First press wooden expeller yellow mustard oil with intense natural pungency and uncompromised antioxidants.',
    inStock: true,
    image: '/src/assets/images/cat_ghee_cooking_oil_1793959949215.jpg',
    badge: 'Daily Essential',
    purityHighlight: 'First Wood-Press • Strong Aroma'
  },
  {
    id: 'prod-oil-2',
    name: 'Wood-Pressed White Sesame (Til) Oil',
    hindiName: 'शुद्ध तिल का तेल (घाणी निर्मित)',
    category: 'ghee-oil',
    categoryName: 'Pure Ghee & Cooking Oil',
    unit: '500 ml Dark Bottle',
    price: 295,
    originalPrice: 340,
    description: 'Gentle wood-pressed sesame oil extracted below 40°C. Perfect for daily tempering, dosas, and ayurvedic nutrition.',
    inStock: true,
    image: '/src/assets/images/cat_ghee_cooking_oil_1793959949215.jpg',
    purityHighlight: 'Cold Pressed <40°C'
  },

  // Category 2: Spices
  {
    id: 'prod-spice-1',
    name: 'Lakadong High-Curcumin Haldi Powder',
    hindiName: 'लकाडोंग शुद्ध हल्दी पाउडर (7%+ करक्यूमिन)',
    category: 'spices',
    categoryName: 'Spices',
    unit: '250 g Fresh Pouch',
    price: 145,
    originalPrice: 175,
    description: 'Prized Meghalaya Lakadong turmeric powder with natural >7% curcumin content. Deep golden colour and potent healing properties.',
    inStock: true,
    image: '/src/assets/images/cat_indian_spices_1793959950009.jpg',
    badge: 'High Curcumin',
    purityHighlight: '7.5% Curcumin • Stone Ground'
  },
  {
    id: 'prod-spice-2',
    name: 'Kashmiri Deggi Lal Mirch Powder',
    hindiName: 'कश्मीरी देगी लाल मिर्च पाउडर',
    category: 'spices',
    categoryName: 'Spices',
    unit: '200 g Fresh Pouch',
    price: 160,
    originalPrice: 190,
    description: 'Naturally stem-plucked sun-dried chillies yielding a rich fiery red gravy with balanced, gentle warmth and zero artificial colour.',
    inStock: true,
    image: '/src/assets/images/cat_indian_spices_1793959950009.jpg',
    purityHighlight: 'Natural Crimson • Mild Heat'
  },
  {
    id: 'prod-spice-3',
    name: 'Unpolished Whole Cumin Seeds (Jeera)',
    hindiName: 'बिना पॉलिश का देशी जीरा',
    category: 'spices',
    categoryName: 'Spices',
    unit: '200 g Aroma Pack',
    price: 130,
    originalPrice: 155,
    description: 'Cleaned, bold Rajasthani cumin seeds rich in natural thymol oil. Crackles with crisp aromatic fragrance upon hot oil tadka.',
    inStock: true,
    image: '/src/assets/images/cat_indian_spices_1793959950009.jpg',
    purityHighlight: 'High Essential Oil • Unpolished'
  },
  {
    id: 'prod-spice-4',
    name: 'Handpicked Whole Coriander (Sabut Dhaniya)',
    hindiName: 'साबुत देशी धनिया बीज',
    category: 'spices',
    categoryName: 'Spices',
    unit: '250 g Aroma Pack',
    price: 95,
    originalPrice: 120,
    description: 'Fragrant green-tinted coriander seeds roasted lightly or ground fresh for authentic curries and rasams.',
    inStock: true,
    image: '/src/assets/images/cat_indian_spices_1793959950009.jpg',
    purityHighlight: 'Sun-Dried • Fresh Crop'
  },

  // Category 3: Fresh Vegetables
  {
    id: 'prod-veg-1',
    name: 'Farm-Fresh Vine Desi Tomatoes',
    hindiName: 'खेत से ताजे देशी टमाटर',
    category: 'vegetables',
    categoryName: 'Fresh Vegetables',
    unit: '1 kg Basket Pack',
    price: 48,
    originalPrice: 60,
    description: 'Naturally tangy and juicy desi tomatoes picked at dawn. Firm skin, high pulp, ideal for thick gravies and daily dal.',
    inStock: true,
    image: '/src/assets/images/cat_fresh_vegetables_1793959950397.jpg',
    badge: 'Harvested Today',
    purityHighlight: 'Dawn Picked • No Chemical Wax'
  },
  {
    id: 'prod-veg-2',
    name: 'Premium Nashik Red Onions',
    hindiName: 'नासिक लाल प्याज (उत्तम गुणवत्ता)',
    category: 'vegetables',
    categoryName: 'Fresh Vegetables',
    unit: '1 kg Mesh Bag',
    price: 52,
    originalPrice: 65,
    description: 'Crisp, pungent medium-sized Nashik red onions with tight skins and sweet pungency that sautés to golden perfection.',
    inStock: true,
    image: '/src/assets/images/cat_fresh_vegetables_1793959950397.jpg',
    purityHighlight: 'Dry-Cured • Long Shelf Life'
  },
  {
    id: 'prod-veg-3',
    name: 'Pahadi Golden Baby Potatoes',
    hindiName: 'पहाड़ी छोटे आलू (दम आलू स्पेशल)',
    category: 'vegetables',
    categoryName: 'Fresh Vegetables',
    unit: '1 kg Pack',
    price: 38,
    originalPrice: 48,
    description: 'Clean mountain potatoes, thin skinned and naturally earthy. Perfect for jeera aloo, crispy roasts, or dum aloo curries.',
    inStock: true,
    image: '/src/assets/images/cat_fresh_vegetables_1793959950397.jpg',
    purityHighlight: 'Washed Earthy Spuds'
  },
  {
    id: 'prod-veg-4',
    name: 'Crisp Farm Carrots & Dewy Coriander Pack',
    hindiName: 'ताजी गाजर और हरा धनिया कॉम्बो',
    category: 'vegetables',
    categoryName: 'Fresh Vegetables',
    unit: '1 kg Combo Pack',
    price: 65,
    originalPrice: 80,
    description: 'Tender sweet orange field carrots paired with a generous fragrant bunch of roots-on desi coriander.',
    inStock: true,
    image: '/src/assets/images/cat_fresh_vegetables_1793959950397.jpg',
    badge: 'Kitchen Combo',
    purityHighlight: 'Naturally Sweet • Crisp Roots'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sunita Sharma',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    category: 'ghee-oil',
    comment: 'The aroma of Vedic Bilona Ghee when melted on hot rotis took me right back to our ancestral village kitchen. Truly pure, golden, and grainy danedar texture. Ordered on WhatsApp and received within 3 hours!',
    date: 'Yesterday',
    verifiedBuyer: true
  },
  {
    id: 'rev-2',
    author: 'Vikramaditya Roy',
    location: 'New Delhi, NCR',
    rating: 5,
    category: 'spices',
    comment: 'The Lakadong turmeric and Kashmiri chilli are worlds apart from packaged supermarket powder. The colour is completely natural with no artificial residues on the plate. Cleanest spices we have used.',
    date: '3 days ago',
    verifiedBuyer: true
  },
  {
    id: 'rev-3',
    author: 'Kavita Subramaniam',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    category: 'vegetables',
    comment: 'I was tired of limp store vegetables. VedicRasoi tomatoes and carrots actually smell and taste like fresh garden harvest. Crisp, clean, and delivered in sturdy compostable packaging.',
    date: '5 days ago',
    verifiedBuyer: true
  },
  {
    id: 'rev-4',
    author: 'Anand Kulkarni',
    location: 'Pune, Maharashtra',
    rating: 5,
    category: 'all',
    comment: 'Having our cooking oil, daily spices, and daily vegetables all from one honest brand makes kitchen stocking completely effortless. Ordering directly via WhatsApp is delightfully fast.',
    date: '1 week ago',
    verifiedBuyer: true
  }
];
