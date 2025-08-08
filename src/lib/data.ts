
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
};

export const services: Service[] = [
  // Nail Services
  {
    id: 'nail-1',
    name: 'Classic Mani',
    description: 'A timeless manicure for a clean and elegant look.',
    longDescription: 'Our Classic Manicure includes nail shaping, cuticle care, a relaxing hand massage, and a polish of your choice. Perfect for maintaining beautiful and healthy hands.',
    price: 120,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'manicure hands',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-2',
    name: 'Classic Pedi',
    description: 'A relaxing pedicure for perfectly polished toes.',
    longDescription: 'The Classic Pedicure involves a warm foot soak, nail shaping, cuticle grooming, callus smoothing, a soothing foot massage, and is finished with your favorite polish.',
    price: 110,
    duration: 50,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pedicure spa',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-3',
    name: 'Gel Overlay',
    description: 'Strengthening for your natural nails without added length.',
    longDescription: 'A Gel Overlay applies a layer of strengthening gel directly onto your natural nails, providing durability and a glossy finish without adding extensions.',
    price: 280,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gel nails',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-4',
    name: 'Polygel Extensions',
    description: 'Lightweight and strong nail extensions for a flawless look.',
    longDescription: 'Polygel Extensions offer the best of both acrylic and gel, providing a strong, flexible, and lightweight nail enhancement for beautiful, long-lasting results.',
    price: 350,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'nail extensions',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  // Eyelash Services
  {
    id: 'lash-1',
    name: 'Classic Full Set (Natural)',
    description: 'Enhance your natural beauty with a full set of classic lashes.',
    longDescription: 'The Classic Full Set applies one individual extension to each natural lash, creating a longer, thicker, and more curled lash line that looks effortlessly beautiful.',
    price: 350,
    duration: 90,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eyelash extensions',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-2',
    name: 'Russian Full Set (Volume)',
    description: 'Achieve a dramatic and full look with Russian volume lashes.',
    longDescription: 'Our Russian Full Set uses lightweight fans of multiple extensions applied to each natural lash, creating a dense, voluminous, and glamorous look.',
    price: 420,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'volume lashes',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  {
    id: 'lash-3',
    name: 'Lash Lift + Tint',
    description: 'Lift and darken your natural lashes for a stunning look.',
    longDescription: 'A Lash Lift & Tint curls your natural lashes from the root and adds a dark tint, making them appear longer and fuller without the need for extensions. The perfect low-maintenance solution.',
    price: 250,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lash lift',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
  // Massage Services
  {
    id: 'massage-1',
    name: 'Sports Massage',
    description: 'Target muscle tension and improve flexibility.',
    longDescription: 'Ideal for athletes or those with active lifestyles, our Sports Massage focuses on preventing and treating injuries, improving flexibility, and enhancing athletic performance.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'sports massage',
    category: 'Massage',
    professionals: ['prof1', 'prof3', 'prof6'],
    addons: [
       { id: 'addon-head', name: 'Head Massage (15 min)', price: 50, description: 'Relieve tension in your head and scalp.' },
       { id: 'addon-foot', name: 'Foot Reflexology (15 min)', price: 50, description: 'Target pressure points in the feet.' },
    ],
  },
  {
    id: 'massage-2',
    name: 'Deep Tissue Massage',
    description: 'Release chronic muscle tension with firm pressure.',
    longDescription: 'Our Deep Tissue Massage uses slow, firm strokes and deep pressure to target the inner layers of your muscles and connective tissues, relieving chronic aches and pains.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'deep tissue massage',
    category: 'Massage',
    professionals: ['prof1', 'prof3', 'prof6'],
    addons: [
       { id: 'addon-hot-stone', name: 'Hot Stone Therapy', price: 30, description: 'Add heated stones to deepen relaxation.' },
    ],
  },
  {
    id: 'massage-3',
    name: 'Hot Stone Massage',
    description: 'Melt away tension with heated basalt stones.',
    longDescription: 'This therapeutic massage uses smooth, heated stones placed on key points of the body to warm and relax muscles, allowing for a deeper and more restorative massage experience.',
    price: 330,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hot stone therapy',
    category: 'Massage',
    professionals: ['prof1', 'prof3'],
    addons: [],
  },
  {
    id: 'massage-4',
    name: 'Couples Relaxation Massage',
    description: 'Enjoy a relaxing massage experience side-by-side.',
    longDescription: 'Share a moment of tranquility with our Couples Relaxation Massage. Performed in the same room, this massage allows you and a partner to unwind and de-stress together.',
    price: 500,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'couple spa',
    category: 'Massage',
    professionals: ['prof1', 'prof3', 'prof6'],
    addons: [],
  },
  // Facial Services
  {
    id: 'facial-1',
    name: 'Anti-Aging Facial',
    description: 'Smooth fine lines and promote a youthful complexion.',
    longDescription: 'Our Anti-Aging Facial uses powerful ingredients and techniques to combat signs of aging, smoothing fine lines and wrinkles and promoting a firmer, more radiant complexion.',
    price: 419,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial treatment',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [
      { id: 'addon-led', name: 'LED Mask', price: 850, description: 'Rejuvenate your complexion with LED light therapy.' },
      { id: 'addon-gold', name: '24K Gold Mask', price: 750, description: 'A luxurious, revitalizing gold-infused facial.' },
    ],
  },
  {
    id: 'facial-2',
    name: 'Deep Cleansing Facial',
    description: 'Unclog pores and remove impurities for clear skin.',
    longDescription: 'This purifying treatment deeply cleanses the skin to unclog pores, remove impurities, and help prevent future breakouts, leaving your face feeling fresh and clear.',
    price: 353,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'skincare routine',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [
       { id: 'addon-vit-c', name: 'Vitamin C Boost', price: 350, description: 'Brightens and evens out skin tone.' },
    ],
  },
  {
    id: 'facial-3',
    name: 'Deep Hydrating Facial',
    description: 'Replenish moisture and rejuvenate dry, dehydrated skin.',
    longDescription: 'Ideal for dry or dehydrated skin, this facial replenishes moisture levels with intensely hydrating ingredients, leaving your skin soft, plump, and glowing.',
    price: 364,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hydrated skin',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [
      { id: 'addon-hyaluronic', name: 'Hyaluronic Acid Ampoule', price: 350, description: 'Deeply moisturizes and plumps fine lines.' },
    ],
  },
  // Body Scrubs
  {
    id: 'scrub-1',
    name: 'Arabica Coffee Scrub',
    description: 'Exfoliates and helps reduce the appearance of cellulite.',
    longDescription: 'Invigorate your skin with our Arabica Coffee Scrub. This treatment exfoliates away dead skin cells, boosts circulation, and helps to reduce the appearance of cellulite for a smoother, firmer look.',
    price: 650,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'body scrub',
    category: 'Body Treatments',
    professionals: ['prof1', 'prof2'],
    addons: [],
  },
  {
    id: 'scrub-2',
    name: 'Himalayan Salt Scrub',
    description: 'Detoxifies and revitalizes the skin with pure Himalayan salt.',
    longDescription: 'This detoxifying body scrub uses pure Himalayan salt to exfoliate the skin, draw out impurities, and replenish essential minerals, leaving your skin feeling soft and revitalized.',
    price: 650,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'spa treatment',
    category: 'Body Treatments',
    professionals: ['prof1', 'prof2'],
    addons: [],
  },
];


export const professionals: Professional[] = [
  {
    id: 'prof1',
    name: 'Aisha Al Marzooqi',
    specialty: 'Massage Therapist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
  },
  {
    id: 'prof2',
    name: 'Fatima Al Jaber',
    specialty: 'Esthetician & Nail Artist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'elegant woman',
  },
  {
    id: 'prof3',
    name: 'Saeed Al Maktoum',
    specialty: 'Holistic Massage Expert',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
  },
  {
    id: 'prof4',
    name: 'Layla Al Shamsi',
    specialty: 'Skincare & Lash Specialist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional woman',
  },
  {
    id: 'prof5',
    name: 'Noora Al Hashimi',
    specialty: 'Master Nail Technician',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman smiling',
  },
  {
    id: 'prof6',
    name: 'Khalid Al Balushi',
    specialty: 'Sports & Deep Tissue Therapist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional man',
  },
];

export const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"];
