
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
  // Massage Services
  {
    id: 'massage-relaxation',
    name: 'Relaxation Massage',
    description: 'A gentle massage to soothe and de-stress.',
    longDescription: 'A classic, gentle-to-medium pressure massage that uses long, smooth, gliding strokes. This treatment is proven to reduce stress and anxiety, lower blood pressure, improve circulation, and promote a feeling of overall tranquility. It’s the perfect reset for a busy mind and body. Ideal for anyone new to massage or those experiencing high levels of stress.',
    price: 270,
    originalPrice: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'serene spa',
    category: 'Massage',
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'Release chronic muscle tension with firm pressure.',
    longDescription: 'A targeted massage that uses slow, firm strokes and deep pressure to reach the deeper layers of muscle and fascia. It provides significant relief from chronic muscle tension, breaks down painful knots, and increases mobility. Ideal for athletes or anyone suffering from chronic pain.',
    price: 270,
    originalPrice: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'muscle relief',
    category: 'Massage',
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-sports',
    name: 'Sports Massage',
    description: 'Target muscle tension and improve flexibility.',
    longDescription: 'A dynamic massage tailored specifically for athletic individuals. It helps prevent injuries, enhances athletic performance, reduces recovery time after intense workouts, and increases flexibility and range of motion. Ideal for professional athletes, weekend warriors, and anyone who maintains a regular, active fitness routine.',
    price: 270,
    originalPrice: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'sports therapy',
    category: 'Massage',
    professionals: ['prof1'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-hot-stone',
    name: 'Hot Stone Massage',
    description: 'Melt away tension with heated basalt stones.',
    longDescription: 'This luxurious massage uses smooth, heated basalt stones placed on key points of the body. The gentle heat penetrates deep into the muscles, easing tension, improving circulation, and promoting a profound sense of calm and relaxation.',
    price: 320,
    originalPrice: 350,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hot stone massage',
    category: 'Massage',
    professionals: ['prof1', 'prof4'],
    addons: [],
  },
  {
    id: 'massage-lymphatic',
    name: 'Lymphatic Drainage',
    description: 'A gentle massage to reduce bloating and detoxify.',
    longDescription: 'A very light, rhythmic massage that encourages the natural drainage of the lymph, which carries waste products away from the tissues. It is highly effective for reducing swelling, bloating, and water retention, and boosting the immune system.',
    price: 300,
    originalPrice: 340,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'detox illustration',
    category: 'Massage',
    professionals: ['prof1', 'prof4'],
    addons: [],
  },
  {
    id: 'massage-prenatal',
    name: 'Pre-Post-Natal Massage',
    description: 'Safe and soothing massage for expectant mothers.',
    longDescription: 'A gentle, nurturing massage specifically designed for the needs of pregnant women. It helps relieve back pain, reduce swelling in the legs and feet, and provide emotional support during this special time. Safe for the second and third trimesters.',
    price: 290,
    originalPrice: 320,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pregnant woman relaxing',
    category: 'Massage',
    professionals: ['prof1'],
    addons: [],
  },

  // Body Treatments
  {
    id: 'body-coffee-scrub',
    name: 'Arabica Coffee Scrub',
    description: 'Exfoliate and energize with an invigorating coffee scrub.',
    longDescription: 'Awaken your senses and your skin with our Arabica Coffee Scrub. The natural caffeine and antioxidants in coffee help to stimulate circulation, reduce the appearance of cellulite, and slough away dead skin cells, revealing smooth, radiant, and energized skin.',
    price: 250,
    originalPrice: 280,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'coffee scrub texture',
    category: 'Body Treatments',
    professionals: ['prof4'],
    addons: [],
  },
  {
    id: 'body-gold-scrub',
    name: '24K Gold Scrub',
    description: 'A luxurious scrub for radiant, glowing skin.',
    longDescription: 'Indulge in the ultimate luxury with our 24K Gold Scrub. This opulent treatment gently exfoliates while imparting the anti-inflammatory and radiance-boosting benefits of gold. It helps to improve skin texture and leave you with a luminous, youthful glow.',
    price: 300,
    originalPrice: 340,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gold particles background',
    category: 'Body Treatments',
    professionals: ['prof4', 'prof2'],
    addons: [],
  },

  // Facial Services
  {
    id: 'facial-hydrating',
    name: 'Deep Hydrating Facial',
    description: 'Quench thirsty skin with an intense moisture boost.',
    longDescription: 'A deeply nourishing facial for dry or dehydrated skin. Using hyaluronic acid and other powerful humectants, this treatment restores the skin\'s moisture barrier, plumps up fine lines, and leaves your complexion looking dewy, supple, and refreshed.',
    price: 350,
    originalPrice: 390,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'water splash',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons],
  },
  {
    id: 'facial-anti-aging',
    name: 'Anti-Aging Facial',
    description: 'Smooths fine lines and promotes a youthful complexion.',
    longDescription: 'A luxurious treatment designed to combat the signs of aging. It uses powerful ingredients to boost collagen production, smooth fine lines, and restore elasticity. It visibly reduces the appearance of wrinkles and firms sagging skin for a more youthful, radiant complexion.',
    price: 380,
    originalPrice: 419,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'youthful skin',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
  {
    id: 'facial-glow',
    name: 'Rody Wellness Glow Facial',
    description: 'Our signature facial for a radiant, camera-ready glow.',
    longDescription: 'Our signature treatment combines gentle exfoliation, a vitamin-rich serum infusion, and a brightening mask to instantly revive dull skin. This facial is perfect before a special event, leaving your skin looking luminous, even-toned, and absolutely radiant.',
    price: 400,
    originalPrice: 450,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'glowing face',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons],
  },
  {
    id: 'facial-acne',
    name: 'Acne Treatment Facial',
    description: 'Targets acne and blemishes, reducing inflammation.',
    longDescription: 'A clarifying facial focused on treating and preventing acne. It involves deep cleansing, gentle extractions, and the application of anti-bacterial products to soothe the skin. It unclogs pores, reduces inflammation, and helps prevent future breakouts for a clearer, calmer complexion. Ideal for teenagers and adults struggling with congested skin.',
    price: 320,
    originalPrice: 353,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'clear skin',
    category: 'Facials',
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },

  // Nail Services
  {
    id: 'nail-classic-mani',
    name: 'Classic Manicure',
    description: 'A timeless manicure for a clean and elegant look.',
    longDescription: 'Our classic manicure service includes expert shaping, cuticle care, a relaxing massage, and a flawless polish application. It leaves your hands looking perfectly groomed, clean, and elegant. A true staple of self-care.',
    price: 99,
    originalPrice: 120,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'classic manicure',
    category: 'Nails',
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-classic-pedi',
    name: 'Classic Pedicure',
    description: 'A relaxing pedicure for perfectly polished toes.',
    longDescription: 'Our classic pedicure service includes expert shaping, cuticle care, a relaxing massage, and a flawless polish application. It leaves your feet looking perfectly groomed, clean, and elegant. A true staple of self-care.',
    price: 99,
    originalPrice: 110,
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
    price: 189,
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
    price: 250,
    originalPrice: 280,
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
    price: 320,
    originalPrice: 350,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'nail extensions',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-extensions',
    name: 'Acrylic Extensions (Natural)',
    description: 'Durable and long-lasting extensions for dramatic length.',
    longDescription: 'Acrylic extensions are the strongest and most durable option for adding significant length to your nails. They are perfect for creating bold shapes and are highly resistant to breakage, making them ideal for those who are hard on their hands.',
    price: 340,
    originalPrice: 370,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'acrylic nails',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-french',
    name: 'Acrylic Extensions (French)',
    description: 'Classic French tip design with the durability of acrylic.',
    longDescription: 'Get the timeless, elegant look of a French manicure with the superior strength and longevity of acrylic extensions. This service provides a flawless, chip-resistant finish that lasts for weeks.',
    price: 390,
    originalPrice: 420,
    duration: 135,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'french manicure',
    category: 'Nails',
    professionals: ['prof5'],
    addons: [],
  },

  // Eyelash Services
  {
    id: 'eyelash-classic',
    name: 'Classic Full Set',
    description: 'Enhance your natural lashes with a classic full set.',
    longDescription: 'The classic full set offers a timeless and elegant enhancement to your natural lashes. One individual extension is applied to each natural lash, adding length and curl for a flawless mascara-like effect that lasts for weeks.',
    price: 299,
    originalPrice: 350,
    duration: 90,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eyelash extensions',
    category: 'Eyelashes',
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-classic-refill',
    name: 'Classic Lash Refill',
    description: 'Maintain your classic lashes with a refill (2-3 weeks).',
    longDescription: 'Keep your classic lashes looking full and fresh. We recommend a refill every 2-3 weeks to replace any extensions that have naturally shed, maintaining the beautiful, seamless look of your full set.',
    price: 199,
    originalPrice: 220,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eyelash closeup',
    category: 'Eyelashes',
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-russian',
    name: 'Russian Volume Set',
    description: 'For a dramatic, full, and fluffy lash line.',
    longDescription: 'Achieve maximum glamour with our Russian Volume set. Our technicians create handmade fans of ultra-fine extensions to apply to each natural lash, resulting in a dense, dark, and fluffy lash line that is surprisingly lightweight and comfortable.',
    price: 399,
    originalPrice: 450,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'volume lashes',
    category: 'Eyelashes',
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-russian-refill',
    name: 'Russian Volume Refill',
    description: 'Maintain your voluminous lashes with a refill (2-3 weeks).',
    longDescription: 'Keep your Russian Volume lashes looking dense and dramatic. We recommend a refill every 2-3 weeks to replace any fans that have naturally shed, ensuring your lashes remain perfectly full and fluffy.',
    price: 250,
    originalPrice: 280,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dramatic eyelashes',
    category: 'Eyelashes',
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-lift',
    name: 'Lash Lift & Tint',
    description: 'Lift and curl your natural lashes for a wide-eyed look.',
    longDescription: 'A lash lift is a semi-permanent treatment that gives your natural lashes an illusion of being perfectly curled, longer, and darker. It\'s a fantastic alternative to eyelash extensions, with no aftercare required. Includes a tint to darken the lashes.',
    price: 250,
    originalPrice: 290,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lash lift',
    category: 'Eyelashes',
    professionals: ['prof2', 'prof4'],
    addons: [],
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
    specialty: 'Lead Esthetician & Lash Artist',
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
    price: 599,
    originalPrice: 690,
    dataAiHint: 'serene spa products',
    services: ['Relaxation Massage', 'Deep Hydrating Facial'],
  },
  {
    id: 'pkg-beauty-boost',
    name: 'Beauty Boost',
    description: 'Get ready for any occasion with our ultimate beauty combination.',
    price: 450,
    originalPrice: 529,
    dataAiHint: 'makeup brushes',
    services: ['Combo Mani + Pedi', 'Lash Lift & Tint'],
  },
  {
    id: 'pkg-glow-up',
    name: 'The Glow Up',
    description: 'Reveal radiant skin from head to toe with this exfoliating package.',
    price: 450,
    originalPrice: 530,
    dataAiHint: 'glowing skin',
    services: ['Arabica Coffee Scrub', 'Rody Wellness Glow Facial'],
  },
  {
    id: 'pkg-couples-retreat',
    name: 'Couple\'s Retreat',
    description: 'Share a serene experience with a massage and facial for two.',
    price: 850,
    originalPrice: 963,
    dataAiHint: 'romantic spa setting',
    services: ['Couples Relaxation Massage', 'Deep Hydrating Facial for Two'],
  }
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
    service: 'Russian Volume Set',
  },
  {
    name: 'Yasmin A.',
    quote: 'My skin feels amazing after the hydrating facial. So plump and glowing! It was the perfect treat before my event.',
    service: 'Anti-Aging Facial',
  },
  {
    name: 'Fatima R.',
    quote: 'The couples massage was the perfect anniversary gift. It was so special to share that experience. We both left feeling completely renewed.',
    service: 'Couple\'s Retreat Package',
  },
  {
    name: 'Noor S.',
    quote: 'The Sure by Rody card is genius. So easy to book and the offers are fantastic. I feel like a real VIP.',
    service: 'Sure by Rody Membership',
  },
  {
    name: 'Layla H.',
    quote: 'I booked the "Beauty Boost" package and felt like a new woman. The convenience of having everything done at home is unbeatable.',
    service: 'Beauty Boost Package',
  },
  {
    name: 'Mariam B.',
    quote: 'The sports massage was exactly what I needed after a tough week of workouts. The therapist really knew what she was doing.',
    service: 'Sports Massage',
  },
  {
    name: 'Hessa Al M.',
    quote: 'Professional, punctual, and perfect results. The gel overlay is flawless and has lasted for weeks without a single chip.',
    service: 'Gel Overlay',
  },
  {
    name: 'Rania G.',
    quote: 'The referral program is such a great idea! My friend got a discount and I got credit. Win-win!',
    service: 'Referral Program',
  },
  {
    name: 'Zainab F.',
    quote: 'I was hesitant about at-home services, but Rody Wellness exceeded all my expectations. The setup is so professional.',
    service: 'Deep Tissue Massage',
  },
  {
    name: 'Dana W.',
    quote: 'The lash lift and tint is my new favourite treatment. My eyes look so open and awake without any makeup.',
    service: 'Lash Lift & Tint',
  },
  {
    name: 'Sonia P.',
    quote: 'The booking process was so simple with just my WhatsApp number. Love how modern and easy this is.',
    service: 'Sure by Rody Booking',
  },
  {
    name: 'Farah I.',
    quote: 'The Anti-Aging facial left my skin looking brighter and firmer. I could see a difference immediately.',
    service: 'Anti-Aging Facial',
  },
  {
    name: 'Maya N.',
    quote: 'From the booking to the therapist arriving on time, the entire experience was seamless and luxurious. 10/10.',
    service: 'Relaxation Massage',
  },
  {
    name: 'Chloe T.',
    quote: 'My polygel extensions are stunning. So much lighter than acrylics but just as strong. I am obsessed!',
    service: 'Polygel Extensions',
  },
  {
    name: ' Aisha Q.',
    quote: 'Finally, a wellness service that fits into my busy schedule. The quality of the at-home service is just as good, if not better, than a hotel spa.',
    service: 'Combo Mani + Pedi',
  },
  {
    name: 'Gabriela C.',
    quote: 'The therapist was so kind and made me feel comfortable immediately. A truly five-star experience from start to finish.',
    service: 'Relaxation Massage',
  },
  {
    name: 'Hind A.',
    quote: 'I love that I can get all my beauty treatments done in one place, in the comfort of my own home. Rody Wellness is a lifesaver.',
    service: 'Classic Full Set',
  },
  {
    name: 'Reem K.',
    quote: 'The "Glow Up" package is my pre-vacation ritual. My skin has never looked better. Worth every dirham!',
    service: 'The Glow Up Package',
  },
];


export const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"];


    