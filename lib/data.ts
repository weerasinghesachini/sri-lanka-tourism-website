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
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    province: 'Central Province',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 320,
    bestTime: 'Jan - Apr',
    duration: '1-2 Days',
    travelStyle: 'Culture & History',
    averageBudget: '$50 - $100',
    image: '/images/sigiriya.jpeg',
    gallery: [
      '/images/sigiriya rock.jpeg',
      '/images/sigiriya1.jpeg',
      '/images/sigiriya rock1.jpeg'
    ],
    description: 'The ancient rock fortress of Sigiriya (Lion Rock) is a 5th-century UNESCO World Heritage Site in Central Sri Lanka, featuring ancient frescoes, water gardens, and panoramic views.',
    topThingsToDo: [
      'Climb the 1,200 steps to the summit lion palace',
      'Examine the world-famous Sigiriya Maiden Frescoes',
      'Marvel at the ancient Mirror Wall inscriptions',
      'Watch golden sunset over Pidurangala Rock'
    ],
    pricePerPerson: 85,
    featured: true
  },
  {
    id: 'ella',
    name: 'Ella & Nine Arch Bridge',
    province: 'Central Province',
    category: 'Mountain',
    rating: 4.9,
    reviewsCount: 450,
    bestTime: 'Dec - Apr',
    duration: '2-3 Days',
    travelStyle: 'Nature & Trekking',
    averageBudget: '$40 - $90',
    image: '/images/ella nine arch.jpeg',
    gallery: [
      '/images/nine arch.jpeg',
      '/images/ella1.jpeg',
      '/images/nine arch 2.jpeg'
    ],
    description: 'Nestled deep in the misty hill country of Sri Lanka, Ella offers world-famous blue train rides, Nine Arch Bridge photography, tea plantations, and scenic peak hikes.',
    topThingsToDo: [
      'Photograph the iconic blue train on Nine Arch Bridge',
      'Hike up Little Adam\'s Peak for sunrise views',
      'Trek Ella Rock and visit Ravana Waterfall',
      'Sample authentic Ceylon black tea at local factories'
    ],
    pricePerPerson: 75,
    featured: true
  },
  {
    id: 'mirissa',
    name: 'Mirissa & Coconut Tree Hill',
    province: 'Southern Province',
    category: 'Beach',
    rating: 4.8,
    reviewsCount: 290,
    bestTime: 'Nov - Apr',
    duration: '2-3 Days',
    travelStyle: 'Coastal & Wildlife',
    averageBudget: '$45 - $95',
    image: '/images/mirissa cocount hill.jpeg',
    gallery: [
      '/images/mirissa.jpeg',
      '/images/mirissa1.jpeg',
      '/images/mirissa coconut hill1.jpeg'
    ],
    description: 'Tropical southern coastal paradise famous for blue whale watching expeditions, Coconut Tree Hill palm headland, and turquoise beach bays.',
    topThingsToDo: [
      'Embark on a sunrise Blue Whale & Dolphin boat safari',
      'Take photos at the famous Coconut Tree Hill',
      'Relax on Mirissa secret beach and sample fresh seafood',
      'Surfing lessons at Weligama bay nearby'
    ],
    pricePerPerson: 65,
    featured: true
  },
  {
    id: 'kandy',
    name: 'Kandy Temple of Tooth',
    province: 'Central Province',
    category: 'Cultural',
    rating: 4.8,
    reviewsCount: 380,
    bestTime: 'Dec - Apr',
    duration: '2 Days',
    travelStyle: 'Heritage & Pilgrimage',
    averageBudget: '$50 - $110',
    image: '/images/kandy.jpeg',
    gallery: [
      '/images/kandy1.jpeg',
      '/images/kandy2.jpeg',
      '/images/kandy3.jpeg'
    ],
    description: 'The sacred hill capital of Sri Lanka, home to Sri Dalada Maligawa (Temple of the Sacred Tooth Relic), traditional Kandyan dancers, and Peradeniya Botanical Gardens.',
    topThingsToDo: [
      'Pay respects at Temple of the Sacred Tooth Relic',
      'Stroll around Peradeniya Royal Botanical Gardens',
      'Watch traditional Kandyan drum & fire dancing',
      'Walk around Kandy Lake scenic loop'
    ],
    pricePerPerson: 70,
    featured: true
  },
  {
    id: 'galle',
    name: 'Galle Fort & Lighthouse',
    province: 'Southern Province',
    category: 'Heritage',
    rating: 4.9,
    reviewsCount: 410,
    bestTime: 'Dec - Apr',
    duration: '1-2 Days',
    travelStyle: 'Colonial Architecture',
    averageBudget: '$60 - $120',
    image: '/images/galle light house.jpeg',
    gallery: [
      '/images/galle.jpeg',
      '/images/galle1.jpeg',
      '/images/galle light house1.jpeg'
    ],
    description: 'A 16th-century Portuguese and Dutch colonial fort city on Sri Lanka\'s southern tip with cobblestone alleys, lighthouse views, and vibrant artisan boutiques.',
    topThingsToDo: [
      'Walk along Galle Fort rampart walls at sunset',
      'Photograph Galle Dutch Lighthouse & Flag Rock',
      'Shop at heritage jewelry stores and gelato cafes',
      'Visit Maritime Museum & Dutch Reformed Church'
    ],
    pricePerPerson: 80
  },
  {
    id: 'yala',
    name: 'Yala National Park Safari',
    province: 'Southern Province',
    category: 'Wildlife',
    rating: 4.9,
    reviewsCount: 310,
    bestTime: 'Feb - Jul',
    duration: '1-2 Days',
    travelStyle: 'Leopard & Wildlife Safari',
    averageBudget: '$80 - $160',
    image: '/images/yala safari.jpeg',
    gallery: [
      '/images/yala.jpeg',
      '/images/yala1.jpeg',
      '/images/yala safari2.jpeg'
    ],
    description: 'Sri Lanka\'s most celebrated national park, boasting the highest density of wild leopards in the world alongside Asian elephants, sloth bears, and crocodiles.',
    topThingsToDo: [
      'Early morning 4x4 open-top jeep safari',
      'Spot wild Sri Lankan Leopards & Elephants',
      'Bird watching at Palatupana lagoons',
      'Luxury glamping under southern stars'
    ],
    pricePerPerson: 110
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya (Little England)',
    province: 'Central Province',
    category: 'Mountain',
    rating: 4.7,
    reviewsCount: 270,
    bestTime: 'Mar - May',
    duration: '2 Days',
    travelStyle: 'Highland Charm & Tea',
    averageBudget: '$55 - $115',
    image: '/images/nuwaraeliya.jpeg',
    gallery: [
      '/images/nuwaraeliya1.jpeg',
      '/images/tea.jpeg',
      '/images/mistymountant.jpeg'
    ],
    description: 'Known as "Little England", famous for cool climate, colonial Tudor mansions, Gregory Lake boat rides, strawberry farms, and tea plantations.',
    topThingsToDo: [
      'Tour Pedro Tea Estate & taste fresh Ceylon Tea',
      'Swan pedal boat ride on Gregory Lake',
      'Hike Horton Plains to World\'s End drop-off',
      'Stroll through Victoria Park flowers'
    ],
    pricePerPerson: 75
  },
  {
    id: 'arugam-bay',
    name: 'Arugam Bay Surf Haven',
    province: 'Eastern Province',
    category: 'Beach',
    rating: 4.8,
    reviewsCount: 220,
    bestTime: 'May - Sep',
    duration: '3-5 Days',
    travelStyle: 'Surfing & Beach Vibe',
    averageBudget: '$40 - $85',
    image: '/images/mirisa5.jpeg',
    gallery: [
      '/images/mirissa6.jpeg',
      '/images/mirissa7.jpeg'
    ],
    description: 'World-class surfing destination on Sri Lanka\'s east coast featuring famous point breaks, lagoon safaris, and bohemian beach cafes.',
    topThingsToDo: [
      'Surf Main Point, Peanut Farm, and Elephant Rock',
      'Kottukal Lagoon boat safari for crocodiles',
      'Sunset yoga and beachfront dinners',
      'Visit Elephant Rock for sunset panorama'
    ],
    pricePerPerson: 60
  }
];

export const CATEGORIES = [
  { id: 'beach', name: 'Beach Escapes', count: '12 Beaches', icon: 'Sun', image: '/images/mirissa8.jpeg' },
  { id: 'wildlife', name: 'Wildlife Safaris', count: '8 Parks', icon: 'Compass', image: '/images/yalasafari1.jpeg' },
  { id: 'mountain', name: 'Misty Mountains', count: '15 Trails', icon: 'Mountain', image: '/images/mistymountant1.jpeg' },
  { id: 'cultural', name: 'UNESCO Heritage', count: '10 Kingdoms', icon: 'Landmark', image: '/images/unesco heritage.jpeg' },
  { id: 'food', name: 'Ceylon Food Tours', count: '20+ Tours', icon: 'Utensils', image: '/images/food.jpeg' },
  { id: 'romantic', name: 'Honeymoon Resorts', count: '14 Vistas', icon: 'Heart', image: '/images/honeymoon resort.jpeg' },
];

export const POPULAR_PACKAGES: PackageItem[] = [
  {
    id: 'ella-escape',
    title: 'Magical Ella & Tea Country',
    days: 4,
    nights: 3,
    price: 319,
    rating: 4.9,
    image: '/images/ninearch1.jpeg',
    destinations: ['Ella Train', 'Nine Arch Bridge', 'Little Adam\'s Peak']
  },
  {
    id: 'southern-beach',
    title: 'Southern Coast & Whales',
    days: 6,
    nights: 5,
    price: 489,
    rating: 4.8,
    image: '/images/mirissa9.jpeg',
    destinations: ['Mirissa Beach', 'Galle Fort', 'Coconut Hill', 'Unawatuna']
  },
  {
    id: 'cultural-triangle',
    title: 'Sigiriya & Cultural Triangle',
    days: 5,
    nights: 4,
    price: 399,
    rating: 4.9,
    image: '/images/anuradapura.jpeg',
    destinations: ['Sigiriya Rock', 'Dambulla Caves', 'Kandy Temple']
  },
  {
    id: 'wild-sri-lanka',
    title: 'Yala Safari & Wildlife Tour',
    days: 5,
    nights: 4,
    price: 439,
    rating: 4.9,
    image: '/images/yala3.jpeg',
    destinations: ['Yala Leopards', 'Udawalawe Elephants', 'Mirissa Safari']
  }
];

export const SERVICES: ServiceItem[] = [
  { id: 's1', iconName: 'Compass', title: 'Curated Tour Packages', description: 'Handcrafted itineraries designed for seamless travel across Sri Lanka.' },
  { id: 's2', iconName: 'Hotel', title: 'Luxury Hotel Bookings', description: 'Handpicked boutique villas, beach resorts, and mountain tea bungalows.' },
  { id: 's3', iconName: 'Plane', title: 'Airport Transfers', description: 'Safe, air-conditioned private luxury transfers directly from BIA Colombo.' },
  { id: 's4', iconName: 'MapPin', title: 'Local Guided Tours', description: 'Expert local English-speaking guides for ancient fortresses and safaris.' },
  { id: 's5', iconName: 'Car', title: 'Chauffeur Vehicle Rental', description: 'Private luxury sedans, SUVs, and vans with dedicated professional drivers.' },
  { id: 's6', iconName: 'Sliders', title: 'Custom Itinerary Design', description: 'Custom-tailored trips designed around your exact timeline and budget.' },
  { id: 's7', iconName: 'Zap', title: 'Adventure & Surfing', description: 'Thrilling mountain trekking, white water rafting, and surfing packages.' },
  { id: 's8', iconName: 'Headphones', title: '24/7 Travel Assistance', description: 'Dedicated travel manager available around the clock during your trip.' }
];

export const TEAM_MEMBERS = [
  { name: 'Maya Perera', role: 'Founder & Travel Director', image: '/images/girl1.jpeg' },
  { name: 'Daniel Fernando', role: 'Senior Tour Specialist', image: '/images/boy1.jpeg' },
  { name: 'Naluni Silva', role: 'Head of Operations', image: '/images/girl2.jpeg' },
  { name: 'Kasun Jayasinghe', role: 'Experience & Safari Guide', image: '/images/boy2.jpeg' },
];

export const TESTIMONIALS = [
  {
    quote: 'LankaVista made our Sri Lanka trip unforgettable! From Sigiriya rock to Ella train and Yala leopard safari, everything was perfectly organized.',
    name: 'Sarah Johnson',
    country: 'United Kingdom',
    avatar: '/images/girl1.jpeg',
    rating: 5,
  },
  {
    quote: 'The trip planner tool on the website let us customize every detail, and our private chauffeur driver was incredibly friendly and punctual!',
    name: 'James Miller',
    country: 'Australia',
    avatar: '/images/boy1.jpeg',
    rating: 5,
  },
  {
    quote: 'Galle Fort and Mirissa whale watching exceeded all expectations. LankaVista handles luxury hotel bookings effortlessly.',
    name: 'Priya Sharma',
    country: 'India',
    avatar: '/images/girl2.jpeg',
    rating: 5,
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'What type of adventure excites you most in Sri Lanka?',
    options: [
      { text: 'Relaxing on Mirissa & Arugam Bay golden beaches', value: 'beach', icon: 'Sun' },
      { text: 'Trekking mist-covered mountains & Ella train rides', value: 'mountain', icon: 'Mountain' },
      { text: 'Yala leopard safaris & wild elephant encounters', value: 'wildlife', icon: 'Compass' },
      { text: 'Exploring Sigiriya Fortress & Kandy Tooth Temple', value: 'cultural', icon: 'Landmark' },
      { text: 'Savoring authentic spicy Ceylon food & tea tasting', value: 'food', icon: 'Utensils' }
    ]
  },
  {
    id: 2,
    question: 'What is your preferred travel pace?',
    options: [
      { text: 'Fast-paced (See highlights across Sri Lanka in 5-7 days)', value: 'fast', icon: 'Zap' },
      { text: 'Balanced (Mix of sightseeing & relaxed afternoons)', value: 'balanced', icon: 'Compass' },
      { text: 'Slow & Leisurely (Soak in 1 or 2 coastal/mountain regions)', value: 'slow', icon: 'Heart' }
    ]
  },
  {
    id: 3,
    question: 'Who are you traveling with?',
    options: [
      { text: 'Solo Explorer', value: 'solo', icon: 'User' },
      { text: 'Couple / Honeymoon Retreat', value: 'couple', icon: 'Heart' },
      { text: 'Family with kids', value: 'family', icon: 'Users' },
      { text: 'Group of Friends', value: 'friends', icon: 'Smile' }
    ]
  }
];
