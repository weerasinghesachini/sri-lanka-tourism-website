export interface Destination {
  id: string;
  name: string;
  province: string;
  category: 'Beach' | 'Mountain' | 'Wildlife' | 'Heritage' | 'City' | 'Nature' | 'Cultural';
  rating: number;
  reviewsCount: number;
  bestTime: string;
  duration: string;
  travelStyle: string;
  averageBudget: string;
  image: string;
  gallery: string[];
  description: string;
  topThingsToDo: string[];
  pricePerPerson: number;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PackageItem {
  id: string;
  title: string;
  days: number;
  nights: number;
  price: number;
  rating: number;
  image: string;
  destinations: string[];
  summary: string;
}

export const BRAND = {
  name: 'ARALIYA CEYLON',
  tagline: 'Travel Sri Lanka with a local touch.',
  phone: '+94 77 123 4567',
  landline: '+94 11 234 5678',
  email: 'hello@araliyaceylon.com',
  address: '42 Galle Road, Colombo 03, Sri Lanka',
  rating: '4.9',
  reviewsCount: '520+',
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'ella',
    name: 'Ella & Hill Country',
    province: 'Uva Province',
    category: 'Mountain',
    rating: 4.9,
    reviewsCount: 480,
    bestTime: 'Dec - Apr',
    duration: '2-3 Days',
    travelStyle: 'Highland Trails & Scenic Rail',
    averageBudget: '$45 - $90',
    image: '/images/hero_ella_hd.png',
    gallery: [
      '/images/hero_ella_hd.png',
      '/images/nine arch 2.jpeg',
      '/images/nine arch 3.jpeg',
      '/images/ella1.jpeg',
      '/images/ella2.jpeg',
    ],
    description: 'Set amidst tea plantations and pine-clad hills, Ella is a quiet mountain town known for the blue train journey, Nine Arch Bridge, and sunrise walks up Little Adam\'s Peak.',
    topThingsToDo: [
      'Take the morning train across the Nine Arch Bridge',
      'Walk through tea gardens to Little Adam\'s Peak for sunrise',
      'Trek Ella Rock for views over the Southern Plains',
      'Sample freshly brewed Ceylon tea at a highland factory'
    ],
    pricePerPerson: 75,
    featured: true
  },
  {
    id: 'sigiriya',
    name: 'Sigiriya Ancient Citadel',
    province: 'Central Province',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 390,
    bestTime: 'Jan - Apr',
    duration: '1-2 Days',
    travelStyle: 'Ancient Architecture & History',
    averageBudget: '$50 - $100',
    image: '/images/hero_sigiriya_hd.png',
    gallery: [
      '/images/hero_sigiriya_hd.png',
      '/images/sigiriya1.jpeg',
      '/images/sigiriya2.jpeg',
      '/images/sigiriya rock.jpeg',
      '/images/sigiriya rock1.jpeg',
    ],
    description: 'A 5th-century rock fortress rising 200 metres above the central plains, featuring ancient water gardens, hand-painted frescoes, and sweeping forest views.',
    topThingsToDo: [
      'Climb the lion stairways to the rock summit palace',
      'Examine the ancient painted frescoes preserved on the cliffside',
      'Walk through the oldest landscaped water gardens in Asia',
      'Watch sunset over Sigiriya from neighboring Pidurangala Rock'
    ],
    pricePerPerson: 85,
    featured: true
  },
  {
    id: 'galle',
    name: 'Galle Fort & Lighthouse',
    province: 'Southern Province',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 420,
    bestTime: 'Dec - Apr',
    duration: '1-2 Days',
    travelStyle: 'Colonial Architecture & Ocean Walk',
    averageBudget: '$60 - $120',
    image: '/images/hero_galle_hd.png',
    gallery: [
      '/images/hero_galle_hd.png',
      '/images/galle3.jpeg',
      '/images/galle light house.jpeg',
      '/images/galle light house2.jpeg',
      '/images/galle1.jpeg',
    ],
    description: 'A living 17th-century seaside fortress with narrow stone streets, Dutch-colonial houses, artisan craft shops, and sunset views from the rampart walls.',
    topThingsToDo: [
      'Walk the perimeter ramparts at sunset',
      'Photograph the white Dutch lighthouse and flag rock',
      'Explore quiet cobblestone lanes and craft workshops',
      'Visit local spice gardens and heritage tea cafes nearby'
    ],
    pricePerPerson: 80,
    featured: true
  },
  {
    id: 'mirissa',
    name: 'Mirissa & Coconut Hill',
    province: 'Southern Province',
    category: 'Beach',
    rating: 4.8,
    reviewsCount: 310,
    bestTime: 'Nov - Apr',
    duration: '2-3 Days',
    travelStyle: 'Coastal Bays & Ocean Safaris',
    averageBudget: '$45 - $95',
    image: '/images/hero_mirissa_hd.png',
    gallery: [
      '/images/hero_mirissa_hd.png',
      '/images/mirissa4.jpeg',
      '/images/mirissa2.jpeg',
      '/images/mirissa3.jpeg',
      '/images/mirissa cocount hill.jpeg',
    ],
    description: 'A relaxed crescent-shaped bay on the southern coast, ideal for watching blue whales off the continental shelf, quiet morning swims, and fresh seafood by the water.',
    topThingsToDo: [
      'Join an early morning boat trip to spot blue whales in deep waters',
      'Walk up to Coconut Tree Hill headland at golden hour',
      'Swim at Secret Beach and watch fishermen along the reef',
      'Take surf lessons in the gentle waves of Weligama Bay'
    ],
    pricePerPerson: 65,
    featured: true
  },
  {
    id: 'kandy',
    name: 'Kandy Sacred City',
    province: 'Central Province',
    category: 'Cultural',
    rating: 4.8,
    reviewsCount: 400,
    bestTime: 'Dec - Apr',
    duration: '2 Days',
    travelStyle: 'Temple Heritage & Gardens',
    averageBudget: '$50 - $110',
    image: '/images/kandy_hd.png',
    gallery: [
      '/images/kandy_hd.png',
      '/images/kandy1.jpeg',
      '/images/kandy4.jpeg',
      '/images/kandy7.jpeg',
      '/images/kandy3.jpeg',
    ],
    description: 'Sri Lanka\'s cultural capital nestled around a quiet lake, famous for the Temple of the Sacred Tooth Relic, Kandyan drumming traditions, and royal botanical gardens.',
    topThingsToDo: [
      'Attend evening prayer ceremonies at the Temple of the Tooth',
      'Stroll through the shaded avenues of Peradeniya Botanical Gardens',
      'Walk around Kandy Lake as the evening fog rolls down the hills',
      'Experience traditional Kandyan drum and dance performances'
    ],
    pricePerPerson: 70,
    featured: true
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    province: 'Southern Province',
    category: 'Wildlife',
    rating: 4.9,
    reviewsCount: 350,
    bestTime: 'Feb - Jul',
    duration: '1-2 Days',
    travelStyle: 'Wildlife Jeep Safari',
    averageBudget: '$80 - $160',
    image: '/images/hero_yala_hd.png',
    gallery: [
      '/images/hero_yala_hd.png',
      '/images/yalasfari1.jpeg',
      '/images/yala1.jpeg',
      '/images/yala3.jpeg',
      '/images/yala5.jpeg',
    ],
    description: 'A coastal wilderness park of dry thorn scrub, lagoons, and rocky outcrops, home to wild Asian elephants, sloth bears, sea turtles, and wild leopards.',
    topThingsToDo: [
      'Join a morning open-jeep safari through Block 1',
      'Spot wild elephants drinking at coastal lagoons',
      'Look out for leopards resting on granite boulders',
      'Watch migratory water birds around Palatupana saline tanks'
    ],
    pricePerPerson: 110,
    featured: true
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya Highlands',
    province: 'Central Province',
    category: 'Mountain',
    rating: 4.7,
    reviewsCount: 290,
    bestTime: 'Mar - May',
    duration: '2 Days',
    travelStyle: 'Highland Cool Air & Tea Estate Walks',
    averageBudget: '$55 - $115',
    image: '/images/nuwaraeliya.jpeg',
    gallery: [
      '/images/nuwaraeliya.jpeg',
      '/images/nuwaraeliya1.jpeg',
      '/images/tea.jpeg',
      '/images/tea1.jpeg',
      '/images/tea2.jpeg',
    ],
    description: 'Situated at 1,868 metres elevation, Nuwara Eliya is Sri Lanka\'s highest town, known for cool highland weather, manicured gardens, tea factories, and lake walks.',
    topThingsToDo: [
      'Take a guided walk through Pedro Tea Estate and sample single-origin teas',
      'Rent a wooden rowboat on quiet Lake Gregory',
      'Hike across Horton Plains to World\'s End cliff drop-off',
      'Walk through Victoria Park when highland flowers bloom'
    ],
    pricePerPerson: 75
  },
  {
    id: 'trincomalee',
    name: 'Trincomalee & Nilaveli',
    province: 'Eastern Province',
    category: 'Beach',
    rating: 4.8,
    reviewsCount: 210,
    bestTime: 'May - Sep',
    duration: '2-3 Days',
    travelStyle: 'Quiet Eastern Beaches & Marine Life',
    averageBudget: '$45 - $90',
    image: '/images/srilanka1.jpeg',
    gallery: [
      '/images/srilanka1.jpeg',
      '/images/srilanka2.jpeg',
      '/images/view3.jpeg',
      '/images/view1.jpeg',
    ],
    description: 'Famous for quiet white-sand beaches, Pigeon Island coral reef snorkeling, and the cliffside Koneswaram Hindu Temple overlooking Swami Rock harbor.',
    topThingsToDo: [
      'Snorkel with reef sharks and sea turtles at Pigeon Island',
      'Visit Koneswaram Temple perched on Swami Rock cliff',
      'Relax on quiet Nilaveli Beach far from busy resort towns',
      'Take a boat out to watch blue whales off the east coast'
    ],
    pricePerPerson: 70
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura Sacred Kingdom',
    province: 'North Central Province',
    category: 'Heritage',
    rating: 4.8,
    reviewsCount: 240,
    bestTime: 'May - Sep',
    duration: '1-2 Days',
    travelStyle: 'Ancient Capitals & Sacred Stupas',
    averageBudget: '$45 - $85',
    image: '/images/anuradapura2.jpeg',
    gallery: [
      '/images/anuradapura2.jpeg',
      '/images/anuradapura1.jpeg',
      '/images/anuradapura.jpeg',
      '/images/unesco heritage.jpeg',
    ],
    description: 'Sri Lanka\'s first ancient capital, featuring monumental white brick stupas, ancient stone pools, and Jaya Sri Maha Bodhi — one of the oldest human-planted trees in the world.',
    topThingsToDo: [
      'Cycle through the ancient ruins and sacred stupa complexes',
      'Pay respects at the ancient Jaya Sri Maha Bodhi tree',
      'Marvel at Ruwanwelisaya and Jetavanaramaya stupas',
      'Explore Kuttam Pokuna ancient twin ponds'
    ],
    pricePerPerson: 65
  },
  {
    id: 'jaffna',
    name: 'Jaffna & Northern Peninsula',
    province: 'Northern Province',
    category: 'Cultural',
    rating: 4.7,
    reviewsCount: 180,
    bestTime: 'May - Sep',
    duration: '2-3 Days',
    travelStyle: 'Tamil Culture, Islands & Local Flavors',
    averageBudget: '$40 - $80',
    image: '/images/srilanka4.jpeg',
    gallery: [
      '/images/srilanka4.jpeg',
      '/images/srilanka3.jpeg',
      '/images/view7.jpeg',
      '/images/view4.jpeg',
    ],
    description: 'A vibrant northern city with a distinct Tamil cultural identity, colorful Nallur Kandaswamy Kovil, Dutch Fort, quiet island causeways, and rich local seafood curries.',
    topThingsToDo: [
      'Visit the golden towers of Nallur Kandaswamy Kovil',
      'Take a local ferry across to Nainativu Island temples',
      'Walk along the historic Jaffna Dutch Fort walls',
      'Try authentic Jaffna crab curry at a family eating spot'
    ],
    pricePerPerson: 60
  }
];

export const CATEGORIES = [
  {
    id: 'beach',
    name: 'Beach Holidays',
    count: '10 Coastlines',
    icon: 'Sun',
    image: '/images/mirissa3.jpeg',
    desc: 'Calm ocean bays, palm-lined sands, and quiet coastal retreats.'
  },
  {
    id: 'mountain',
    name: 'Mountain & Tea Country',
    count: '12 Highlands',
    icon: 'Mountain',
    image: '/images/tea3.jpeg',
    desc: 'Tea plantation walks, cool air, and scenic hill country rail journeys.'
  },
  {
    id: 'wildlife',
    name: 'Wildlife Safaris',
    count: '8 Sanctuaries',
    icon: 'Compass',
    image: '/images/yala1.jpeg',
    desc: 'Open-jeep elephant and leopard tracking in protected national parks.'
  },
  {
    id: 'heritage',
    name: 'Cultural & Heritage',
    count: '9 Ancient Sites',
    icon: 'Landmark',
    image: '/images/sigiriya rock1.jpeg',
    desc: 'Ancient rock kingdoms, sacred temples, and historic fortress walks.'
  },
  {
    id: 'food',
    name: 'Sri Lankan Food Trails',
    count: 'Local Spots',
    icon: 'Utensils',
    image: '/images/food1.jpeg',
    desc: 'Home-cooked village meals, fresh seafood, and spice garden visits.'
  },
  {
    id: 'nature',
    name: 'Nature & Hikes',
    count: '15 Forest Trails',
    icon: 'Heart',
    image: '/images/mistymountant.jpeg',
    desc: 'Misty peak climbs, waterfall trails, and quiet nature sanctuaries.'
  },
];

export const POPULAR_PACKAGES: PackageItem[] = [
  {
    id: 'ella-tea-country',
    title: 'Highland Rail & Tea Estates',
    days: 4,
    nights: 3,
    price: 320,
    rating: 4.9,
    image: '/images/hero_ella_hd.png',
    destinations: ["Ella Train", "Nine Arch Bridge", "Little Adam's Peak"],
    summary: 'Travel through the misty hill country by train, explore tea estates, and enjoy quiet mountain walks.'
  },
  {
    id: 'southern-coast-whales',
    title: 'Southern Bays & Ocean Safaris',
    days: 6,
    nights: 5,
    price: 490,
    rating: 4.8,
    image: '/images/hero_mirissa_hd.png',
    destinations: ['Mirissa Beach', 'Galle Fort', 'Coconut Tree Hill'],
    summary: 'Relaxed days on southern beaches paired with sunrise whale watching and Galle Fort sunset walks.'
  },
  {
    id: 'cultural-triangle-sigiriya',
    title: 'Sigiriya & Sacred Kingdoms',
    days: 5,
    nights: 4,
    price: 410,
    rating: 4.9,
    image: '/images/hero_sigiriya_hd.png',
    destinations: ['Sigiriya Rock', 'Dambulla Caves', 'Kandy Sacred Temple'],
    summary: "Discover central Sri Lanka's ancient rock fortresses, cave temples, and sacred hill city heritage."
  },
  {
    id: 'yala-wildlife-expedition',
    title: 'Yala Wildlife & Elephant Trail',
    days: 5,
    nights: 4,
    price: 450,
    rating: 4.9,
    image: '/images/hero_yala_hd.png',
    destinations: ['Yala Leopards', 'Udawalawe Elephants', 'Mirissa Coast'],
    summary: 'Guided open-top jeep safaris through wild national parks, combined with quiet coastal evenings.'
  }
];

export const SERVICES: ServiceItem[] = [
  { id: 's1', iconName: 'Compass', title: 'Personalised Itineraries', description: 'Handcrafted travel plans tailored to your pace, travel dates, and preferred destinations.' },
  { id: 's2', iconName: 'Hotel', title: 'Boutique Stay Bookings', description: 'Handpicked family-run guesthouses, tea bungalows, and quiet beach villas across the island.' },
  { id: 's3', iconName: 'Plane', title: 'Airport Transfers', description: 'Reliable, air-conditioned private vehicle transfers directly from Colombo BIA International Airport.' },
  { id: 's4', iconName: 'MapPin', title: 'Local Guided Tours', description: 'Knowledgeable Sri Lankan guides for ancient heritage sites, city walks, and nature trails.' },
  { id: 's5', iconName: 'Car', title: 'Private Vehicle & Chauffeur', description: 'Dedicated air-conditioned cars and vans with friendly, professional local driver-guides.' },
  { id: 's6', iconName: 'Sliders', title: 'Custom Travel Adjustments', description: 'Flexible trip customization before and during your travel so you never feel rushed.' },
  { id: 's7', iconName: 'Zap', title: 'Trekking & Ocean Excursions', description: 'Whale watching safaris, train ticket reservations, hiking guides, and water activities.' },
  { id: 's8', iconName: 'Headphones', title: 'On-Trip Assistance', description: 'Direct phone support with your personal travel coordinator throughout your stay in Sri Lanka.' }
];

export const TEAM_MEMBERS = [
  { name: 'Sahan Perera', role: 'Founder & Local Travel Director', image: '/images/boy1.jpeg' },
  { name: 'Dilini Fernando', role: 'Senior Tour Coordinator', image: '/images/girl1.jpeg' },
  { name: 'Kavinda Silva', role: 'Highland & Safari Specialist', image: '/images/boy2.jpeg' },
  { name: 'Nirosha Wickramasinghe', role: 'Guest Relations Manager', image: '/images/girl2.jpeg' },
];

export const TESTIMONIALS = [
  {
    quote: 'We spent ten days exploring Ella and the southern coast with Araliya Ceylon. The morning train ride through tea estates and quiet sunset walks in Galle Fort were unforgettable.',
    name: 'Sarah & Mark',
    country: 'United Kingdom',
    avatar: '/images/girl1.jpeg',
    rating: 5,
  },
  {
    quote: 'Our driver Nirosh was wonderful — so patient and knowledgeable about local food stops. Araliya Ceylon arranged everything smoothly without making us feel like hurried tourists.',
    name: 'David Miller',
    country: 'Australia',
    avatar: '/images/boy1.jpeg',
    rating: 5,
  },
  {
    quote: 'Climbing Sigiriya early in the morning before the crowds arrived was a highlight. Araliya Ceylon made sure every stay was clean, comfortable, and truly Sri Lankan.',
    name: 'Elena Rostova',
    country: 'Germany',
    avatar: '/images/girl2.jpeg',
    rating: 5,
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What kind of Sri Lankan experience calls to you most?',
    options: [
      { text: 'Quiet golden beaches and listening to ocean waves', value: 'beach', icon: 'Sun' },
      { text: 'Misty mountain walks and scenic tea country trains', value: 'mountain', icon: 'Mountain' },
      { text: 'Wild elephant encounters and open jeep safaris', value: 'wildlife', icon: 'Compass' },
      { text: 'Ancient rock kingdoms, temples, and historic ruins', value: 'cultural', icon: 'Landmark' },
      { text: 'Savoring authentic home-cooked curries and tea estate walks', value: 'food', icon: 'Utensils' }
    ]
  },
  {
    id: 2,
    question: 'What pace feels right for your holiday?',
    options: [
      { text: 'Balanced (Mix of morning sightseeing and relaxed afternoons)', value: 'balanced', icon: 'Compass' },
      { text: 'Unhurried (Staying 3–4 days in a few special places)', value: 'slow', icon: 'Heart' },
      { text: 'Active (Covering multiple key regions across the island)', value: 'fast', icon: 'Zap' }
    ]
  },
  {
    id: 3,
    question: 'Who will be traveling with you?',
    options: [
      { text: 'Traveling Solo', value: 'solo', icon: 'User' },
      { text: 'Couple / Honeymoon', value: 'couple', icon: 'Heart' },
      { text: 'Family with children', value: 'family', icon: 'Users' },
      { text: 'Small group of friends', value: 'friends', icon: 'Smile' }
    ]
  }
];
