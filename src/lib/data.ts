
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
  categories: string[]; // Changed from category: string
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
  image: string;
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
    description: 'A gentle, soothing massage designed to melt away stress and promote tranquility.',
    longDescription: 'Escape the demands of daily life with our classic Relaxation Massage. This treatment features gentle-to-medium pressure with long, smooth, gliding strokes, proven to reduce stress, lower blood pressure, and improve circulation. It is the perfect introduction to massage therapy and an essential reset for a busy mind and body, leaving you in a state of profound calm.',
    price: 270,
    originalPrice: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'serene spa massage',
    categories: ['Massage'],
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [...generalAddons],
  },
   {
    id: 'massage-couple',
    name: 'Couple Massage',
    description: 'Enjoy a relaxing massage experience together in the comfort of your own home.',
    longDescription: 'Share a moment of tranquility with your partner. Our Couple Massage allows you both to receive a personalized relaxation massage side-by-side. It is a wonderful way to reconnect, de-stress together, and create a shared memory of peace and wellness. Price is for two people.',
    price: 540,
    originalPrice: 600,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'couple massage serene',
    categories: ['Massage'],
    professionals: ['prof1', 'prof4'],
    addons: [],
  },
  {
    id: 'massage-deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'Firm, targeted pressure to release chronic muscle tension and knots.',
    longDescription: 'A therapeutic massage that uses slow, firm strokes and deep, focused pressure to reach the deeper layers of muscle and fascia. This treatment provides significant relief from chronic pain, breaks down stubborn knots, and restores mobility. It is ideal for athletes, those with physically demanding lifestyles, or anyone suffering from persistent muscle soreness.',
    price: 270,
    originalPrice: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'deep tissue muscle relief',
    categories: ['Massage', 'Treatment'],
    professionals: ['prof1', 'prof2', 'prof4', 'prof5'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-aromatherapy',
    name: 'Aromatherapy Massage',
    description: 'A calming journey combining gentle massage with therapeutic essential oils.',
    longDescription: 'A holistic healing experience that integrates the physical benefits of massage with the emotional harmony of scent. This gentle massage uses a custom blend of pure essential oils to reduce stress, elevate mood, and soothe the body. Let the aromatic botanicals transport you to a state of complete serenity.',
    price: 290,
    originalPrice: 320,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'aromatherapy oils flowers',
    categories: ['Massage'],
    professionals: ['prof1', 'prof4'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-sports',
    name: 'Sports Massage',
    description: 'For active individuals seeking to enhance performance and speed recovery.',
    longDescription: 'A dynamic massage tailored to the needs of athletic individuals. This treatment helps prevent injuries, boosts performance, reduces recovery time, and increases flexibility. It is ideal for professional athletes, weekend warriors, or anyone who maintains an active fitness routine and wants to keep their body in peak condition.',
    price: 270,
    originalPrice: 300,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'sports therapy athlete',
    categories: ['Massage', 'Treatment'],
    professionals: ['prof1'],
    addons: [...generalAddons],
  },
  {
    id: 'massage-maderotherapy',
    name: 'Maderotherapy (Wood Therapy)',
    description: 'An intensive body sculpting massage using specialized wooden tools.',
    longDescription: 'Experience the contouring power of Maderotherapy, also known as Wood Therapy. This effective, non-invasive treatment uses a set of specially designed wooden tools to sculpt the body, break down cellulite, and facilitate lymphatic drainage. It helps to tone, tighten, and define your figure while promoting overall well-being.',
    price: 350,
    originalPrice: 400,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'wooden massage tools',
    categories: ['Massage', 'Treatment'],
    professionals: ['prof1', 'prof5'],
    addons: [],
  },
  {
    id: 'massage-hot-stone',
    name: 'Hot Stone Massage',
    description: 'Melt away deep-seated tension with the gentle heat of basalt stones.',
    longDescription: 'This luxurious massage uses smooth, heated basalt stones placed on key points of the body. The gentle, radiating heat penetrates deep into the muscles, easing stiffness, improving circulation, and inducing a state of profound calm. It is a deeply grounding and restorative experience.',
    price: 320,
    originalPrice: 350,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'hot stones on back',
    categories: ['Massage'],
    professionals: ['prof1', 'prof4'],
    addons: [],
  },
  {
    id: 'massage-lymphatic',
    name: 'Lymphatic Drainage',
    description: 'A gentle, rhythmic massage to detoxify, reduce bloating, and boost immunity.',
    longDescription: 'A light, rhythmic massage that encourages the body\'s natural detoxification process by stimulating the lymphatic system. This treatment is highly effective for reducing swelling, water retention, and post-surgery recovery. It is a gentle path to feeling lighter, healthier, and more energized.',
    price: 300,
    originalPrice: 340,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'lymphatic drainage illustration',
    categories: ['Massage', 'Treatment'],
    professionals: ['prof1', 'prof4'],
    addons: [],
  },
  {
    id: 'massage-prenatal',
    name: 'Pre & Post-Natal Massage',
    description: 'A safe, soothing, and nurturing massage for expectant or new mothers.',
    longDescription: 'A nurturing massage specifically designed for the unique needs of expectant and new mothers. This gentle treatment helps relieve back pain, reduce swelling, and provide emotional support during this special time. Safe for the second and third trimesters, and beneficial for post-natal recovery.',
    price: 290,
    originalPrice: 320,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'pregnant woman relaxing spa',
    categories: ['Massage', 'Treatment'],
    professionals: ['prof1'],
    addons: [],
  },
  {
    id: 'massage-herbal-ball',
    name: 'Thai Herbal Ball Massage',
    description: 'A traditional Thai therapy using steamed herbal compresses to soothe muscles.',
    longDescription: 'This traditional Thai massage involves the use of steamed compresses filled with a blend of therapeutic herbs. The heated herbal balls are pressed along the body’s energy lines to relieve muscle soreness, reduce inflammation, and improve circulation. It’s a uniquely aromatic and deeply relaxing experience.',
    price: 340,
    originalPrice: 380,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'thai herbal compress balls',
    categories: ['Massage'],
    professionals: ['prof1', 'prof4'],
    addons: [],
  },

  // Body Treatments
  {
    id: 'body-coffee-scrub',
    name: 'Arabica Coffee Scrub',
    description: 'Exfoliate, energize, and reduce the appearance of cellulite.',
    longDescription: 'Awaken your senses and skin with our invigorating Arabica Coffee Scrub. The natural caffeine and antioxidants stimulate circulation and help reduce the appearance of cellulite, while finely ground coffee beans slough away dead cells to reveal smooth, radiant, and energized skin.',
    price: 250,
    originalPrice: 280,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'coffee scrub texture',
    categories: ['Body Treatments'],
    professionals: ['prof4'],
    addons: [],
  },
  {
    id: 'body-gold-scrub',
    name: '24K Gold Scrub',
    description: 'A luxurious, anti-inflammatory scrub for truly radiant, glowing skin.',
    longDescription: 'Indulge in the ultimate luxury with our 24K Gold Scrub. This opulent treatment gently exfoliates while imparting the anti-inflammatory and radiance-boosting benefits of pure gold. It helps to improve skin texture and leaves you with a luminous, youthful glow from head to toe.',
    price: 300,
    originalPrice: 340,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'gold particles background shimmer',
    categories: ['Body Treatments'],
    professionals: ['prof4', 'prof2'],
    addons: [],
  },
  {
    id: 'body-himalayan-salt-scrub',
    name: 'Himalayan Salt Scrub',
    description: 'Detoxify and mineralize your skin with pure, mineral-rich salt crystals.',
    longDescription: 'This detoxifying treatment uses pure Himalayan salt crystals to gently exfoliate, drawing out impurities and stimulating circulation. Rich in over 80 minerals and trace elements, this scrub helps to balance your body’s pH and leaves your skin feeling incredibly soft, smooth, and renewed.',
    price: 260,
    originalPrice: 290,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'himalayan salt pink',
    categories: ['Body Treatments'],
    professionals: ['prof4'],
    addons: [],
  },

  // Facial Services
  {
    id: 'facial-hydrating',
    name: 'Deep Hydrating Facial',
    description: 'Quench thirsty skin with an intense moisture boost for a dewy, plump look.',
    longDescription: 'A deeply nourishing facial for dry or dehydrated skin. Using hyaluronic acid and other powerful humectants, this treatment restores the skin\'s moisture barrier, plumps up fine lines, and leaves your complexion looking dewy, supple, and refreshed.',
    price: 350,
    originalPrice: 390,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'water splash face',
    categories: ['Facials', 'Treatment'],
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons],
  },
  {
    id: 'facial-anti-aging',
    name: 'Anti-Aging Facial',
    description: 'A powerful treatment to smooth fine lines and promote a youthful complexion.',
    longDescription: 'A luxurious treatment designed to combat the signs of aging. It uses powerful ingredients to boost collagen production, smooth fine lines, and restore elasticity. It visibly reduces the appearance of wrinkles and firms sagging skin for a more youthful, radiant complexion.',
    price: 380,
    originalPrice: 419,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'elegant woman face',
    categories: ['Facials', 'Treatment'],
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
  {
    id: 'facial-glow',
    name: 'Rody Wellness Glow Facial',
    description: 'Our signature facial for an immediate, camera-ready, luminous glow.',
    longDescription: 'Our signature treatment combines gentle exfoliation, a vitamin-rich serum infusion, and a brightening mask to instantly revive dull skin. This facial is perfect before a special event, leaving your skin looking luminous, even-toned, and absolutely radiant.',
    price: 400,
    originalPrice: 450,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'glowing face profile',
    categories: ['Facials'],
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons],
  },
  {
    id: 'facial-acne',
    name: 'Acne Treatment Facial',
    description: 'A deep-cleansing facial to target acne, reduce inflammation, and prevent breakouts.',
    longDescription: 'A clarifying facial focused on treating and preventing acne. It involves deep cleansing, gentle extractions, and the application of anti-bacterial products to soothe the skin. It unclogs pores, reduces inflammation, and helps prevent future breakouts for a clearer, calmer complexion. Ideal for teenagers and adults struggling with congested skin.',
    price: 320,
    originalPrice: 353,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'clear skin face',
    categories: ['Facials', 'Treatment'],
    professionals: ['prof2', 'prof4'],
    addons: [...facialAddons, ...generalAddons],
  },
  {
    id: 'facial-high-frequency',
    name: 'High Frequency for Scalp & Face',
    description: 'A versatile treatment to treat acne, reduce pores, and stimulate hair growth.',
    longDescription: 'A safe, non-invasive treatment that uses a mild electrical current to oxygenate the skin. On the face, it kills acne-causing bacteria and shrinks pores. On the scalp, it stimulates follicles to promote healthier hair growth. A true multi-tasker for skin and hair health.',
    price: 150,
    originalPrice: 180,
    duration: 20,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'high frequency wand',
    categories: ['Facials', 'Treatment'],
    professionals: ['prof2', 'prof4'],
    addons: [],
  },

  // Nail Services
  {
    id: 'nail-classic-mani',
    name: 'Classic Manicure',
    description: 'A timeless manicure for a clean, elegant, and perfectly groomed look.',
    longDescription: 'Our classic manicure service includes expert shaping, cuticle care, a relaxing massage, and a flawless polish application. It leaves your hands looking perfectly groomed, clean, and elegant. A true staple of self-care.',
    price: 99,
    originalPrice: 120,
    duration: 45,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'elegant manicure hands',
    categories: ['Nails'],
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-classic-pedi',
    name: 'Classic Pedicure',
    description: 'A relaxing pedicure for soft feet and perfectly polished toes.',
    longDescription: 'Our classic pedicure service includes expert shaping, cuticle care, a relaxing massage, and a flawless polish application. It leaves your feet looking perfectly groomed, clean, and elegant. A true staple of self-care.',
    price: 99,
    originalPrice: 110,
    duration: 50,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'relaxing pedicure feet',
    categories: ['Nails'],
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-combo',
    name: 'Combo Mani + Pedi',
    description: 'The ultimate nail care package for impeccably groomed hands and feet.',
    longDescription: 'Indulge in the complete nail care experience with our combined Classic Manicure and Pedicure. This package offers all the benefits of both services at a special value, leaving your hands and feet feeling rejuvenated and looking immaculate. It\'s the perfect way to pamper yourself.',
    price: 189,
    originalPrice: 230,
    duration: 95,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'woman receiving manicure pedicure',
    categories: ['Nails'],
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-gel-overlay',
    name: 'Gel Overlay',
    description: 'A long-lasting, chip-free gel application that strengthens natural nails.',
    longDescription: 'A Gel Overlay strengthens your natural nails without adding length. It provides a chip-free manicure that lasts for weeks and adds strength to natural nails, allowing for a durable and glossy finish.',
    price: 250,
    originalPrice: 280,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'glossy gel nails',
    categories: ['Nails'],
    professionals: ['prof2', 'prof5'],
    addons: [],
  },
  {
    id: 'nail-polygel-extensions',
    name: 'Polygel Extensions',
    description: 'The best of both worlds: lightweight, flexible, and strong nail extensions.',
    longDescription: 'Polygel Extensions are used to create beautiful, durable, and long-lasting nail enhancements. They provide a chip-free manicure that lasts for weeks, add strength, and allow for customized length and shape.',
    price: 320,
    originalPrice: 350,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'perfect nail extensions',
    categories: ['Nails'],
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-extensions',
    name: 'Acrylic Extensions (Natural)',
    description: 'The strongest, most durable extensions for dramatic length and shape.',
    longDescription: 'Acrylic extensions are the strongest and most durable option for adding significant length to your nails. They are perfect for creating bold shapes and are highly resistant to breakage, making them ideal for those who are hard on their hands.',
    price: 340,
    originalPrice: 370,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'long acrylic nails',
    categories: ['Nails'],
    professionals: ['prof5'],
    addons: [],
  },
  {
    id: 'nail-acrylic-french',
    name: 'Acrylic Extensions (French)',
    description: 'The timeless French tip design with the superior durability of acrylic.',
    longDescription: 'Get the timeless, elegant look of a French manicure with the superior strength and longevity of acrylic extensions. This service provides a flawless, chip-resistant finish that lasts for weeks.',
    price: 390,
    originalPrice: 420,
    duration: 135,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'classic french manicure',
    categories: ['Nails'],
    professionals: ['prof5'],
    addons: [],
  },

  // Eyelash Services
  {
    id: 'eyelash-classic',
    name: 'Classic Full Set',
    description: 'A timeless enhancement, adding length and curl for a natural mascara look.',
    longDescription: 'The classic full set offers a timeless and elegant enhancement to your natural lashes. One individual extension is applied to each natural lash, adding length and curl for a flawless mascara-like effect that lasts for weeks.',
    price: 299,
    originalPrice: 350,
    duration: 90,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'natural eyelash extensions',
    categories: ['Eyelashes'],
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-classic-refill',
    name: 'Classic Lash Refill',
    description: 'Maintain your flawless classic lashes. Recommended every 2-3 weeks.',
    longDescription: 'Keep your classic lashes looking full and fresh. We recommend a refill every 2-3 weeks to replace any extensions that have naturally shed, maintaining the beautiful, seamless look of your full set.',
    price: 199,
    originalPrice: 220,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eyelash macro',
    categories: ['Eyelashes'],
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-russian',
    name: 'Russian Volume Set',
    description: 'For a dramatic, full, and fluffy lash line that makes a statement.',
    longDescription: 'Achieve maximum glamour with our Russian Volume set. Our technicians create handmade fans of ultra-fine extensions to apply to each natural lash, resulting in a dense, dark, and fluffy lash line that is surprisingly lightweight and comfortable.',
    price: 399,
    originalPrice: 450,
    duration: 120,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fluffy volume lashes',
    categories: ['Eyelashes'],
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-russian-refill',
    name: 'Russian Volume Refill',
    description: 'Maintain your voluminous lashes. Recommended every 2-3 weeks.',
    longDescription: 'Keep your Russian Volume lashes looking dense and dramatic. We recommend a refill every 2-3 weeks to replace any fans that have naturally shed, ensuring your lashes remain perfectly full and fluffy.',
    price: 250,
    originalPrice: 280,
    duration: 75,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dramatic volume eyelashes',
    categories: ['Eyelashes'],
    professionals: ['prof2'],
    addons: [],
  },
  {
    id: 'eyelash-lift',
    name: 'Lash Lift & Tint',
    description: 'Lift, curl, and darken your natural lashes for a wide-eyed, low-maintenance look.',
    longDescription: 'A lash lift is a semi-permanent treatment that gives your natural lashes an illusion of being perfectly curled, longer, and darker. It\'s a fantastic alternative to eyelash extensions, with no aftercare required. Includes a tint to darken the lashes for extra definition.',
    price: 250,
    originalPrice: 290,
    duration: 60,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'eye with lash lift',
    categories: ['Eyelashes', 'Treatment'],
    professionals: ['prof2', 'prof4'],
    addons: [],
  },
];

export const professionals: Professional[] = [
  {
    id: 'prof1',
    name: 'Aisha Al Marzooqi',
    specialty: 'Lead Massage Therapist',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional therapist portrait',
    experience: 12,
    bio: 'Aisha is a master of therapeutic touch with over a decade of experience in prestigious Dubai spas. She specializes in relieving chronic pain and promoting deep relaxation, believing that massage is essential for both physical and mental harmony. Her intuitive approach ensures every client receives a truly personalized and healing experience.',
    areasOfExcellence: ['Deep Tissue Massage', 'Sports Massage', 'Hot Stone Therapy', 'Pre-Natal Massage'],
  },
  {
    id: 'prof2',
    name: 'Fatima Al Jaber',
    specialty: 'Lead Esthetician & Lash Artist',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional esthetician portrait',
    experience: 8,
    bio: 'Fatima combines her passion for skincare science and artistry to deliver transformative results. She is an expert in advanced facial treatments and meticulous lash artistry. Fatima is dedicated to helping clients achieve their skin goals and enhance their natural beauty with flawless, elegant lash designs.',
    areasOfExcellence: ['Advanced Facials', 'Anti-Aging Treatments', 'Russian Volume Lashes', 'Lash Lifts'],
  },
  {
    id: 'prof4',
    name: 'Layla Al Shamsi',
    specialty: 'Holistic Skincare Specialist',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional skincare expert portrait',
    experience: 7,
    bio: 'Layla believes that radiant skin is a reflection of overall well-being. She takes a holistic approach, specializing in treatments that nourish the skin from the inside out. Her expertise lies in creating customized facials that address specific concerns while promoting a sense of peace and balance.',
    areasOfExcellence: ['Hydrating Facials', 'Sensitive Skin Care', 'Natural Beauty', 'Classic Lash Extensions'],
  },
  {
    id: 'prof5',
    name: 'Noora Al Hashimi',
    specialty: 'Master Nail Technician',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'professional nail artist portrait',
    experience: 10,
    bio: 'Noora is a true artist in the world of nail care. With a decade of experience, she has perfected the art of creating durable, beautiful, and healthy nail enhancements. From flawless classic manicures to intricate nail art and extensions, Noora\'s precision and creativity are unmatched.',
    areasOfExcellence: ['Gel & Polygel Extensions', 'Acrylics', 'Manicures & Pedicures', 'Nail Health'],
  },
];

export const packages: Package[] = [
    {
        id: 'pkg-royal-glow',
        name: 'The Royal Glow',
        description: 'A complete rejuvenation package featuring a luxury massage, customized facial, and premium pedicure for ultimate relaxation and a radiant glow.',
        price: 1200,
        originalPrice: 1350,
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'royal spa treatment gold',
        services: [
          '90-min Luxury Full Body Massage (Your choice)',
          'Customized Luxury Facial with choice of mask',
          'Callus Removal + Luxury Pedicure + Foot Spa',
          'Free Hot Towel Foot Wrap',
          'Complimentary Scented Candle & Aromatherapy'
        ],
      },
      {
        id: 'pkg-queens-indulgence',
        name: 'The Queen’s Indulgence',
        description: 'Head-to-toe perfection with a therapeutic massage, luxury mani-pedi with paraffin treatment, and a signature facial.',
        price: 1500,
        originalPrice: 1700,
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'queen throne luxury spa',
        services: [
          '90-min Full Body Massage (Lymphatic or Deep Tissue)',
          'Luxury Manicure & Pedicure (Gel or Acrylic)',
          'Foot Paraffin Treatment + Jelly Foot Spa',
          'Luxury Facial with choice of Glow Mask',
          'Complimentary Herbal Tea Service'
        ],
      },
      {
        id: 'pkg-ultimate-bliss',
        name: 'The Ultimate Bliss Ritual',
        description: 'Our most comprehensive VIP spa experience. A 2-hour signature massage, anti-aging facial, luxury mani-pedi, and a nourishing hair treatment.',
        price: 1800,
        originalPrice: 2100,
        image: 'https://placehold.co/600x400.png',
        dataAiHint: 'ultimate bliss zen garden',
        services: [
          '120-min Full Body Signature Massage',
          'Anti-Aging Facial with Gold Mask & LED Therapy',
          'Callus Removal + Jelly Foot Spa + Foot Massage',
          'Luxury Manicure & Pedicure (Gel or Acrylic)',
          'Foot Paraffin Treatment',
          'Nourishing Hair Treatment with Scalp Massage',
          'VIP Touch: Freshly served Herbal Tea or Coffee'
        ],
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
    quote: 'I booked the "Royal Glow" package and felt like a new woman. The convenience of having everything done at home is unbeatable.',
    service: 'Royal Glow Package',
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
    quote: 'The Queen\'s Indulgence package is my pre-vacation ritual. My skin has never looked better. Worth every dirham!',
    service: 'Queen’s Indulgence Package',
  },
];


export const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM", "07:00 PM"];


    
