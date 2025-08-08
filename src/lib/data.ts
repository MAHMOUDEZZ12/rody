

export type Addon = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  duration: number; // in minutes
  image: string;
  dataAiHint: string;
  category: string;
  professionals: string[]; // ids of professionals
  addons: Addon[];
};

export type Professional = {
  id: string;
  name: string;
  specialty: string;
  image: string;
  dataAiHint: string;
  experience: number; // in years
  bio: string;
  areasOfExcellence: string[];
};

export type Package = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  dataAiHint: string;
  services: string[];
}

export type Testimonial = {
  name: string;
  quote: string;
  service: string;
}

export const generalAddons: Addon[] = [
    { id: 'addon-foot', name: 'Foot Reflexology (15 min)', price: 50, description: 'Target pressure points in the feet for deep relaxation.' },
    { id: 'addon-head', name: 'Head Massage (15 min)', price: 50, description: 'Relieve tension in your head and scalp.' },
    { id: 'addon-neck-shoulder', name: 'Neck & Shoulder (15 min)', price: 50, description: 'Focus on releasing upper body tension.' },
];

export const facialAddons: Addon[] = [
      { id: 'addon-led', name: 'LED Mask', price: 100, description: 'Rejuvenate your complexion with targeted LED light therapy.' },
      { id: 'addon-high-freq', name: 'High Frequency', price: 100, description: 'Enhance skin condition for both scalp and face.' },
      { id: 'addon-gold-mask', name: '24K Gold Mask', price: 120, description: 'A luxurious, revitalizing gold-infused facial mask that increases firmness.' },
      { id: 'addon-diamond-mask', name: 'Diamond Mask', price: 90, description: 'Polishes the skin, boosts radiance, and smooths fine lines.' },
      { id: 'addon-vit-c', name: 'Vitamin C Boost', price: 70, description: 'Brightens and evens out skin tone.' },
      { id: 'addon-hyaluronic', name: 'Hyaluronic Acid Ampoule', price: 80, description: 'Deeply moisturizes and plumps fine lines.' },
]


export const services: Service[] = [
  // Nail Services
  {
    id: 'nail-classic-mani',
    name: 'Classic Mani',
    description: 'A timeless manicure for a clean and elegant look.',
    longDescription: 'Our classic manicure service includes expert shaping, cuticle care, a relaxing massage, and a flawless polish application. It leaves your hands looking perfectly groomed, clean, and elegant. A true staple of self-care.',
    price: 120,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'classic manicure',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-classic-pedi',
    name: 'Classic Pedi',
    description: 'A relaxing pedicure for perfectly polished toes.',
    longDescription: 'Our classic pedicure service includes expert shaping, cuticle care, a relaxing massage, and a flawless polish application. It leaves your feet looking perfectly groomed, clean, and elegant. A true staple of self-care.',
    price: 110,
    duration: 50,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'classic pedicure',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-combo',
    name: 'Combo Mani + Pedi',
    description: 'The ultimate nail care package for hands and feet.',
    longDescription: 'Indulge in the complete nail care experience with our combined Classic Manicure and Pedicure. This package offers all the benefits of both services at a special value, leaving your hands and feet feeling rejuvenated and looking immaculate. It\'s the perfect way to pamper yourself.',
    price: 199,
    originalPrice: 230,
    duration: 95,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'manicure pedicure',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-gel-overlay',
    name: 'Gel Overlay',
    description: 'Strengthening for your natural nails without added length.',
    longDescription: 'A Gel Overlay strengthens your natural nails without adding length. It provides a chip-free manicure that lasts for weeks and adds strength to natural nails, allowing for a durable and glossy finish.',
    price: 280,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gel nails',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-polygel-extensions',
    name: 'Polygel Extensions',
    description: 'Lightweight and strong nail extensions for a flawless look.',
    longDescription: 'Polygel Extensions are used to create beautiful, durable, and long-lasting nail enhancements. They provide a chip-free manicure that lasts for weeks, add strength, and allow for customized length and shape.',
    price: 350,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'nail extensions',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-refill-extensions',
    name: 'Refill Extensions',
    description: 'Maintain your beautiful extensions with a professional refill.',
    longDescription: 'Keep your Polygel or Acrylic extensions looking perfect with our refill service. We will fill in the growth at the base of your nails, rebalance the structure, and ensure they look as good as new.',
    price: 280,
    duration: 90,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'nail refill',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-removal-gel',
    name: 'Gel/Polygel Removal',
    description: 'Safe and gentle removal of your gel or polygel.',
    longDescription: 'Ensure the health of your natural nails with our professional removal service. We gently and safely remove your gel or polygel enhancements, followed by a light buffing and nail conditioning.',
    price: 150,
    duration: 30,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'nail care',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-natural',
    name: 'Acrylic Extensions - Natural',
    description: 'Classic, durable acrylic extensions for a natural finish.',
    longDescription: 'Acrylic extensions are used to create beautiful, durable, and long-lasting nail enhancements. They provide a chip-free manicure that lasts for weeks, add strength, and allow for customized length and shape.',
    price: 370,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'acrylic nails',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-french',
    name: 'Acrylic Extensions - French',
    description: 'Timeless French tip design with durable acrylics.',
    longDescription: 'The epitome of elegance, our French acrylic extensions provide a timeless, sophisticated look. We create a crisp, white tip on a natural pink base for a beautiful and classic finish.',
    price: 420,
    duration: 135,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'french manicure',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-removal',
    name: 'Acrylic Removal',
    description: 'Safe and professional removal of acrylic extensions.',
    longDescription: 'Protect your natural nails during removal. Our technicians will safely and gently remove your acrylic extensions, followed by nail shaping and conditioning to restore their health.',
    price: 105,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'healthy nails',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-ombre',
    name: 'Ombre (Gel or Acrylic)',
    description: 'A beautiful, blended two-tone nail design.',
    longDescription: 'Achieve a stunning, seamless gradient effect with our Ombre nail service, available in both gel and acrylic. This stylish design blends two complementary colors for a modern and eye-catching look.',
    price: 480,
    duration: 150,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'ombre nails',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  // Eyelash Services
  {
    id: 'lash-classic-full',
    name: 'Classic Full Set (Natural)',
    description: 'Enhance your natural beauty with a full set of classic lashes.',
    longDescription: 'Classic Lashes involve applying one extension to one natural lash for a beautiful, mascara-like effect. It eliminates the need for daily mascara and enhances your natural beauty for a perfect natural enhancement.',
    price: 350,
    duration: 90,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eyelash extensions',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-russian-full',
    name: 'Russian Full Set (Volume)',
    description: 'Achieve a dramatic and full look with Russian volume lashes.',
    longDescription: 'Russian Volume Lashes involve applying a handmade "fan" of multiple ultra-fine extensions to one natural lash for a fuller, fluffier look. Ideal for those who desire a more glamorous, high-impact look.',
    price: 420,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'volume lashes',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-classic-half',
    name: 'Classic Half Set',
    description: 'A subtle enhancement for the outer corners of your eyes.',
    longDescription: 'Perfect for a subtle, cat-eye effect, our Classic Half Set focuses on applying extensions to the outer corners of your eyes, gradually blending them into your natural lashes for a gentle lift and enhancement.',
    price: 250,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'natural lashes',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-russian-half',
    name: 'Russian Half Set',
    description: 'Add volume to the outer corners for a winged look.',
    longDescription: 'This service provides the glamorous, winged effect of volume lashes by concentrating lightweight fans on the outer half of your lash line. It creates a striking, voluminous finish that beautifully elongates the eyes.',
    price: 350,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'winged eyeliner',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-refill-classic',
    name: 'Classic Lash Refill',
    description: 'Maintain your classic lashes with a timely refill.',
    longDescription: 'Keep your classic lashes looking full and fresh. We recommend a refill every 2-3 weeks to replace any extensions that have naturally shed and to maintain the beautiful, full look of your initial set.',
    price: 200,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lash care',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-refill-russian',
    name: 'Russian Lash Refill',
    description: 'Keep your voluminous Russian lashes looking their best.',
    longDescription: 'Maintain the drama and fullness of your Russian volume set. This refill service, recommended every 2-3 weeks, involves applying new fans to new lash growth, ensuring your voluminous look remains flawless.',
    price: 250,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'glamorous eyes',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-lift',
    name: 'Lash Lift',
    description: 'Curl and lift your natural lashes for a wide-eyed look.',
    longDescription: 'A lash lift is a fantastic alternative to extensions. This treatment gives your natural lashes a beautiful, upward curl, creating the illusion of longer, fuller lashes. Results last for 6-8 weeks.',
    price: 175,
    duration: 50,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lash lift',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-lift-tint',
    name: 'Lash Lift + Tint',
    description: 'Lift and darken your natural lashes for stunning definition.',
    longDescription: 'Combine the benefits of a lash lift with a custom tint. This service curls your lashes from the root and adds a dark tint, providing dramatic definition and making your eyes pop without any makeup. The perfect low-maintenance solution.',
    price: 250,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'defined eyes',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-removal',
    name: 'Eyelash Removal',
    description: 'Safe and professional removal of lash extensions.',
    longDescription: 'Safely and gently remove your lash extensions with our professional service. We use a specially formulated remover that dissolves the adhesive without damaging your natural lashes, leaving them healthy and intact.',
    price: 100,
    duration: 30,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gentle skincare',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  // Massage Services
  {
    id: 'massage-sports',
    name: 'Sports Massage',
    description: 'Target muscle tension and improve flexibility.',
    longDescription: 'A dynamic massage tailored specifically for athletic individuals. It helps prevent injuries, enhances athletic performance, reduces recovery time after intense workouts, and increases flexibility and range of motion. Ideal for professional athletes, weekend warriors, and anyone who maintains a regular, active fitness routine.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'sports therapy',
    category: 'Massage',
    professionals: ['prof1'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-relaxation',
    name: 'Relaxation Massage',
    description: 'A gentle massage to soothe and de-stress.',
    longDescription: 'A classic, gentle-to-medium pressure massage that uses long, smooth, gliding strokes. This treatment is proven to reduce stress and anxiety, lower blood pressure, improve circulation, and promote a feeling of overall tranquility. It’s the perfect reset for a busy mind and body. Ideal for anyone new to massage or those experiencing high levels of stress.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'serene spa',
    category: 'Massage',
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-aromatherapy',
    name: 'Aromatherapy Massage',
    description: 'A soothing massage using essential oils.',
    longDescription: 'Enhance your massage experience with the power of scent. Our Aromatherapy Massage combines the benefits of a relaxation massage with carefully selected essential oils to address your specific needs, whether it\'s to calm, energize, or uplift your senses.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'essential oils',
    category: 'Massage',
    professionals: ['prof1'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'Release chronic muscle tension with firm pressure.',
    longDescription: 'A targeted massage that uses slow, firm strokes and deep pressure to reach the deeper layers of muscle and fascia. It provides significant relief from chronic muscle tension, breaks down painful knots, and increases mobility. Ideal for athletes or anyone suffering from chronic pain.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'muscle relief',
    category: 'Massage',
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-hot-stone',
    name: 'Hot Stone Massage',
    description: 'Melt away tension with heated basalt stones.',
    longDescription: 'A deeply soothing massage where smooth, heated basalt stones are placed on key points of the body. The heat from the stones penetrates deep into the muscles, melting away muscle tension, significantly improving circulation, and creating a sense of deep comfort and balance. Ideal for those who prefer a lighter massage pressure.',
    price: 330,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hot stones',
    category: 'Massage',
    professionals: ['prof1'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-couples-relaxation',
    name: 'Couples Relaxation Massage',
    description: 'Enjoy a relaxing massage experience side-by-side.',
    longDescription: 'A shared experience where two people receive massages simultaneously in the same room from two different therapists. It creates a unique bonding experience, allowing partners or friends to relax and rejuvenate together. Perfect for anniversaries or a unique date idea.',
    price: 499,
    originalPrice: 600,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'couples spa',
    category: 'Massage',
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [],
  },
   // Facials
  {
    id: 'facial-acne',
    name: 'Acne Treatment Facial',
    description: 'Targets acne and blemishes, reducing inflammation.',
    longDescription: 'A clarifying facial focused on treating and preventing acne. It involves deep cleansing, gentle extractions, and the application of anti-bacterial products to soothe the skin. It unclogs pores, reduces inflammation, and helps prevent future breakouts for a clearer, calmer complexion. Ideal for teenagers and adults struggling with congested skin.',
    price: 353,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'clear skin',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
  {
    id: 'facial-anti-aging',
    name: 'Anti-Aging Facial',
    description: 'Smooths fine lines and promotes a youthful complexion.',
    longDescription: 'A luxurious treatment designed to combat the signs of aging. It uses powerful ingredients to boost collagen production, smooth fine lines, and restore elasticity. It visibly reduces the appearance of wrinkles and firms sagging skin for a more youthful, radiant complexion.',
    price: 419,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'youthful skin',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
  {
    id: 'facial-deep-cleansing',
    name: 'Deep Cleansing Facial',
    description: 'Unclogs pores and removes impurities for clear skin.',
    longDescription: 'This essential facial is designed to deeply cleanse your skin, effectively unclogging pores and removing impurities. Through gentle exfoliation and extraction, it leaves your skin feeling exceptionally clean, refreshed, and clear.',
    price: 353,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial cleansing',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
  {
    id: 'facial-deep-hydrating',
    name: 'Deep Hydrating Facial',
    description: 'Replenishes moisture and rejuvenates dry, dehydrated skin.',
    longDescription: 'An intensely moisturizing facial that quenches thirsty skin. Using hydrating ingredients like Hyaluronic Acid, it replenishes moisture levels, alleviates dryness, and plumps up fine lines, imparting a healthy glow. Ideal for dry or dehydrated skin.',
    price: 364,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hydrated skin',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
   // Body Treatments
  {
    id: 'scrub-coffee',
    name: 'Arabica Coffee Scrub',
    description: 'Exfoliates and helps reduce the appearance of cellulite.',
    longDescription: 'An invigorating body scrub that uses the power of natural caffeine from Arabica coffee grounds. It provides excellent exfoliation, stimulates blood flow to reduce the appearance of cellulite, and leaves skin feeling incredibly smooth and firm. Ideal for improving skin texture and tone.',
    price: 650,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'coffee scrub',
    category: 'Body Treatments',
    professionals: ['prof1', 'prof2'],
    addons: [...generalAddons],
  },
  {
    id: 'scrub-himalayan',
    name: 'Himalayan Salt Scrub',
    description: 'Detoxifies and revitalizes the skin.',
    longDescription: 'A detoxifying scrub formulated with mineral-rich Himalayan salt. It deeply cleanses and purifies the skin, sloughs away dead cells, and revitalizes the body and mind. It\'s especially good for sensitive skin and those seeking a deep detoxification.',
    price: 650,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'salt scrub',
    category: 'Body Treatments',
    professionals: ['prof1', 'prof2'],
    addons: [...generalAddons],
  },
  {
    id: 'scrub-gold',
    name: '24k Gold Scrub',
    description: 'Creating a radiant, youthful complexion.',
    longDescription: 'The pinnacle of luxury skincare. Our 24K Gold Scrub infuses the skin with revitalizing gold to boost elasticity and radiance, imparting a radiant, youthful glow and increasing firmness.',
    price: 650,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gold treatment',
    category: 'Body Treatments',
    professionals: ['prof1', 'prof2'],
    addons: [...generalAddons],
  },
  {
    id: 'facial-addons-page',
    name: 'Facial Add-Ons & Masks',
    description: 'Customize your facial with our potent add-ons.',
    longDescription: 'Elevate your facial experience with our range of high-performance add-ons and masks. From the rejuvenating power of a 24K Gold Mask to the intense hydration of a Hyaluronic Acid ampoule, you can customize your treatment to target your specific skin concerns and achieve spectacular results.',
    price: 70, // Starting from price
    duration: 15,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial mask',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons],
  },
  {
    id: 'massage-addons-page',
    name: 'Add-On Massage',
    description: 'Extend your relaxation with a focused massage add-on.',
    longDescription: 'Enhance any massage or body treatment with one of our targeted add-ons. Whether you need extra attention on your feet with reflexology or want to relieve tension with a head massage, these additions allow you to customize your experience for maximum benefit.',
    price: 50, // Starting from price
    duration: 15,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'focused massage',
    category: 'Massage',
    professionals: ['prof1'],
    addons: [...generalAddons],
  },
];


export const professionals: Professional[] = [
  {
    id: 'prof1',
    name: 'Aisha Al Marzooqi',
    specialty: 'Lead Massage Therapist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional therapist portrait',
    experience: 12,
    bio: 'Aisha is a master of therapeutic touch with over a decade of experience in prestigious Dubai spas. She specializes in relieving chronic pain and promoting deep relaxation, believing that massage is essential for both physical and mental harmony. Her intuitive approach ensures every client receives a truly personalized and healing experience.',
    areasOfExcellence: ['Deep Tissue Massage', 'Sports Massage', 'Hot Stone Therapy', 'Pre-Natal Massage'],
  },
  {
    id: 'prof2',
    name: 'Fatima Al Jaber',
    specialty: 'Esthetician & Lash Artist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional esthetician portrait',
    experience: 8,
    bio: 'Fatima combines her passion for skincare science and artistry to deliver transformative results. She is an expert in advanced facial treatments and meticulous lash artistry. Fatima is dedicated to helping clients achieve their skin goals and enhance their natural beauty with flawless, elegant lash designs.',
    areasOfExcellence: ['Advanced Facials', 'Anti-Aging Treatments', 'Russian Volume Lashes', 'Lash Lifts'],
  },
  {
    id: 'prof4',
    name: 'Layla Al Shamsi',
    specialty: 'Holistic Skincare Specialist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional skincare expert portrait',
    experience: 7,
    bio: 'Layla believes that radiant skin is a reflection of overall well-being. She takes a holistic approach, specializing in treatments that nourish the skin from the inside out. Her expertise lies in creating customized facials that address specific concerns while promoting a sense of peace and balance.',
    areasOfExcellence: ['Hydrating Facials', 'Sensitive Skin Care', 'Natural Beauty', 'Classic Lash Extensions'],
  },
  {
    id: 'prof5',
    name: 'Noora Al Hashimi',
    specialty: 'Master Nail Technician',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional nail artist portrait',
    experience: 10,
    bio: 'Noora is a true artist in the world of nail care. With a decade of experience, she has perfected the art of creating durable, beautiful, and healthy nail enhancements. From flawless classic manicures to intricate nail art and extensions, Noora\'s precision and creativity are unmatched.',
    areasOfExcellence: ['Gel & Polygel Extensions', 'Acrylics', 'Manicures & Pedicures', 'Nail Health'],
  },
];

export const packages: Package[] = [
  {
    id: 'pkg-total-relaxation',
    name: 'Total Relaxation',
    description: 'Melt away stress with a full body massage and a rejuvenating facial.',
    price: 550,
    originalPrice: 664,
    dataAiHint: 'serene spa products',
    services: ['Relaxation Massage', 'Deep Hydrating Facial'],
  },
  {
    id: 'pkg-beauty-boost',
    name: 'Beauty Boost',
    description: 'Get ready for any occasion with our ultimate beauty combination.',
    price: 499,
    originalPrice: 560,
    dataAiHint: 'makeup brushes',
    services: ['Combo Mani + Pedi', 'Classic Full Set Lashes'],
  },
  {
    id: 'pkg-glow-up',
    name: 'The Glow Up',
    description: 'Reveal radiant skin from head to toe with this exfoliating package.',
    price: 900,
    originalPrice: 1069,
    dataAiHint: 'glowing skin',
    services: ['Arabica Coffee Scrub', 'Anti-Aging Facial'],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Amina K.',
    quote: 'The at-home massage was pure bliss. My therapist was so professional and created such a calming atmosphere. I\'ve never felt more relaxed.',
    service: 'Relaxation Massage',
  },
  {
    name: 'Sarah L.',
    quote: 'My nails have never looked better! The attention to detail was incredible. Having this level of quality at home is a game-changer.',
    service: 'Combo Mani + Pedi',
  },
  {
    name: 'Jessica M.',
    quote: 'Absolutely in love with my lashes. They look so natural yet full. Waking up like this is the best feeling. Highly recommend!',
    service: 'Russian Full Set Lashes',
  },
  {
    name: 'Yasmin A.',
    quote: 'My skin feels amazing after the hydrating facial. So plump and glowing! It was the perfect treat before my event.',
    service: 'Deep Hydrating Facial',
  },
  {
    name: 'Fatima R.',
    quote: 'The couples massage was the perfect anniversary gift. It was so special to share that experience. We both left feeling completely renewed.',
    service: 'Couples Relaxation Massage',
  },
];


export const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"];

    