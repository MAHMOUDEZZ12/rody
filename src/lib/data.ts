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
  {
    id: '1',
    name: 'Royal Oud Massage',
    description: 'An invigorating massage using luxurious oud oil.',
    longDescription: 'Experience deep relaxation with our signature Royal Oud Massage. This treatment combines traditional techniques with the exotic aroma of pure oud oil to soothe sore muscles, improve circulation, and calm your mind. A truly regal experience for the senses.',
    price: 450,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'massage therapy',
    category: 'Massage',
    professionals: ['prof1', 'prof3'],
    addons: [
      { id: 'addon1', name: 'Hot Stones', price: 75, description: 'Enhance relaxation with heated basalt stones.' },
      { id: 'addon2', name: 'Aromatherapy', price: 50, description: 'Choose a custom blend of essential oils.' },
    ],
  },
  {
    id: '2',
    name: 'Golden Glow Facial',
    description: 'A 24K gold-infused facial for radiant skin.',
    longDescription: 'Unveil a luminous complexion with our Golden Glow Facial. This opulent treatment uses a 24K gold-infused mask to lift, firm, and brighten the skin. It helps reduce fine lines, improve elasticity, and leave your skin with a radiant, youthful glow.',
    price: 600,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'facial treatment',
    category: 'Skincare',
    professionals: ['prof2', 'prof4'],
    addons: [
      { id: 'addon3', name: 'Collagen Eye Mask', price: 60, description: 'Reduce puffiness and dark circles.' },
      { id: 'addon4', name: 'LED Light Therapy', price: 100, description: 'Target acne, inflammation, or signs of aging.' },
    ],
  },
  {
    id: '3',
    name: 'Desert Pearl Manicure',
    description: 'A luxurious manicure with pearl powder.',
    longDescription: 'Treat your hands to our Desert Pearl Manicure. This service includes meticulous nail shaping, cuticle care, and a gentle exfoliation with fine pearl powder. A relaxing hand massage and your choice of premium polish complete this elegant experience.',
    price: 250,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'manicure hands',
    category: 'Nails',
    professionals: ['prof2'],
    addons: [
      { id: 'addon5', name: 'Paraffin Wax', price: 50, description: 'Deeply moisturizes and softens hands.' },
      { id: 'addon6', name: 'French Tips', price: 40, description: 'Classic and elegant french tip design.' },
    ],
  },
  {
    id: '4',
    name: 'Sultan’s Serenity Pedicure',
    description: 'Rejuvenating foot treatment fit for royalty.',
    longDescription: 'Relax and unwind with the Sultan\'s Serenity Pedicure. This luxurious treatment includes a warm aromatic foot soak, exfoliation with desert salts, callus removal, nail care, and an extended foot and calf massage. Your feet will feel soft, refreshed, and revitalized.',
    price: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pedicure spa',
    category: 'Nails',
    professionals: ['prof2', 'prof4'],
    addons: [
       { id: 'addon5', name: 'Paraffin Wax', price: 50, description: 'Deeply moisturizes and softens feet.' },
       { id: 'addon7', name: 'Gel Polish', price: 80, description: 'Long-lasting, high-shine gel polish.' },
    ]
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
    specialty: 'Skincare Specialist',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional woman',
  },
];

export const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"];
