import { GalleryItem, ProgramItem, FacilityItem, ReviewItem, FaqItem } from '../types';

export const TITANS_PHOTOS_GALLERY_URL = "https://www.google.com/maps/place/Titans+Gym/@20.4535658,85.9138693,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDji4X9mAE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWnT7rJGNUhJKH9mljO_IAQKMoLA9oCIXUoXB-0pndTHo6tKyr2TJu2l8K7tm2JGin3EHBVscNEwx-kKoQuwmY_xsTOV9WeofTzc9dfyeXjNIeMqmH8c-JNKPAoJbaIk8ug3TRhC%3Dw397-h298-k-no!7i4032!8i3024!4m13!1m2!2m1!1sTitans+Gym+Unisex+Fitness+Arena!3m9!1s0x3a190df2b3bef01b:0xbe0dc4a3433369d9!8m2!3d20.4535658!4d85.9138693!10e5!14m1!1BCgIgAQ!15sCh9UaXRhbnMgR3ltIFVuaXNleCBGaXRuZXNzIEFyZW5hWiEiH3RpdGFucyBneW0gdW5pc2V4IGZpdG5lc3MgYXJlbmGSAQ5maXRuZXNzX2NlbnRlcuABAA!16s%2Fg%2F11n6qrflvm?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D";

export const TITANS_REVIEWS_URL = "https://www.google.com/maps/place/Titans+Gym/@20.46057,85.8352856,11z/data=!3m1!5s0x3a190d4122b0fb0d:0x6dadb2372ac6e324!4m12!1m2!2m1!1sTitans+Gym+Unisex+Fitness+Arena!3m8!1s0x3a190df2b3bef01b:0xbe0dc4a3433369d9!8m2!3d20.4535658!4d85.9138693!9m1!1b1!15sCh9UaXRhbnMgR3ltIFVuaXNleCBGaXRuZXNzIEFyZW5hWiEiH3RpdGFucyBneW0gdW5pc2V4IGZpdG5lc3MgYXJlbmGSAQ5maXRuZXNzX2NlbnRlcuABAA!16s%2Fg%2F11n6qrflvm?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D";

export const TITANS_DIRECTIONS_URL = "https://www.google.com/maps/place/Titans+Gym/@20.4535658,85.9112944,17z/data=!3m2!4b1!5s0x3a190d4122b0fb0d:0x6dadb2372ac6e324!4m6!3m5!1s0x3a190df2b3bef01b:0xbe0dc4a3433369d9!8m2!3d20.4535658!4d85.9138693!16s%2Fg%2F11n6qrflvm?entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D";

export const TITANS_PHONE = "+91 06372256060";
export const TITANS_PHONE_RAW = "06372256060";
export const TITANS_ALT_PHONE = "+91 77989 77519";
export const TITANS_ADDRESS = "2nd floor, Sri Sri Mandap building, near HDFC Bank, Gandhi Chhak, Naya Bazaar, Kataka, Odisha 753004";
export const TITANS_WHATSAPP_URL = "https://wa.me/916372256060?text=Hi%20Titans%20Gym%2C%20I%20want%20to%20know%20more%20about%20membership%20and%20facilities";

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Functional Turf & Battle Ropes',
    category: 'AGILITY TURF',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    description: 'High-intensity athletic conditioning arena designed for heavy sled pushes, battle ropes, and explosive agility drills.',
    badge: 'AGILITY TURF',
    rating: 4.9
  },
  {
    id: '2',
    title: 'Biomechanic Machine Suite',
    category: 'MACHINES',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    description: 'Ergonomically tuned resistance machines for pure mechanical tension, smooth convergent paths, and joint safety.',
    badge: 'MACHINES',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Aerobic & Kinetic Studio',
    category: 'STUDIO FITNESS',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    description: 'State-of-the-art cardio decks, HIIT studios, and endurance power stations with surround telemetry tracking.',
    badge: 'STUDIO FITNESS',
    rating: 4.8
  },
  {
    id: '4',
    title: 'Elite Coaching Mentorship',
    category: 'PERSONAL TRAINING',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    description: 'Certified master trainers guiding biomechanics, personalized nutrition regimens, and competition preparation.',
    badge: 'PERSONAL TRAINING',
    rating: 5.0
  },
  {
    id: '5',
    title: 'Dumbbell & Free Weights Arena',
    category: 'FREE WEIGHTS',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    description: 'Extensive dumbbell racks from 2.5 kg to 60 kg, calibrated Olympic barbells, and heavy-duty adjustable benches.',
    badge: 'FREE WEIGHTS',
    rating: 4.9
  },
  {
    id: '6',
    title: 'Atmosphere & Light Architecture',
    category: 'GYM ATMOSPHERE',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    description: 'Intense industrial arena ambiance, focused red glow lighting, and acoustically tuned motivational soundscapes.',
    badge: 'GYM ATMOSPHERE',
    rating: 4.9
  }
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'f1',
    title: 'Strength Training',
    subtitle: 'OLYMPIC STANDARD RACKS & PLATFORMS',
    description: 'Heavy-duty power cages, deadlift platforms, and calibrated cast-iron & bumper plates built for serious lifters.',
    specs: ['Calibrated Competition Iron', 'Olympic Spec Bar Path', 'Drop Cushioned Platforms', 'Chalk Stations Provided'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    icon: 'Dumbbell'
  },
  {
    id: 'f2',
    title: 'Cardio Zone',
    subtitle: 'HIGH-PERFORMANCE CONDITIONING',
    description: 'Commercial treadmills, stairmasters, air bikes, and rowing ergometers with heart-rate and wattage tracking.',
    specs: ['Advanced Biometric Metrics', 'Endurance Virtual Trails', 'High-Airflow Cooling', 'Heart-Rate Telemetry'],
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
    icon: 'Activity'
  },
  {
    id: 'f3',
    title: 'Free Weights Arena',
    subtitle: 'EXTENSIVE DUMBBELL & BARBELL RACKS',
    description: 'Dumbbells ranging from 2.5 kg to 60 kg, pre-loaded EZ bars, flat, incline, and military adjustable benches.',
    specs: ['Up to 60KG Pairs', 'Solid Cast Urethane Benches', 'Heavy-Duty Spotter Stands', 'Full Mirror Alignment'],
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
    icon: 'ShieldCheck'
  },
  {
    id: 'f4',
    title: 'Functional Training',
    subtitle: 'AGILITY, PLYO & TURF FLOOR',
    description: 'Sled turf track, battle ropes, kettlebells, medicine balls, plyometric boxes, and suspension rings for athletic power.',
    specs: ['30m Sled & Sprint Turf', 'Heavy Battle Ropes', 'Kettlebell Progression Deck', 'Plyometric Soft Boxes'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    icon: 'Zap'
  },
  {
    id: 'f5',
    title: 'Personal Training Zone',
    subtitle: '1-ON-1 DEDICATED COACHING',
    description: 'Private coaching suites with biomechanical posture analysis, body composition tracking, and customized transformation regimens.',
    specs: ['Certified Masters Coaches', 'Posture & Gait Screening', 'Dedicated Transformation Room', 'Form Video Analysis'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    icon: 'Flame'
  },
  {
    id: 'f6',
    title: 'Aerobics & Group Studio',
    subtitle: 'HIGH-ENERGY COLLECTIVE RHYTHM',
    description: 'Acoustically treated studio space for high-octane Zumba, HIIT, aerobic step, and endurance group classes.',
    specs: ['Dynamic Studio Sound', 'Sprung Hardwood Floor', 'Ambient Color Strobe', 'Certified Group Masters'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    icon: 'Flame'
  },
  {
    id: 'f7',
    title: 'Modern Biomechanical Machinery',
    subtitle: 'PRECISION PIN & PLATE-LOADED',
    description: 'Imported convergent and divergent resistance machines that track natural human movement planes and safeguard joints.',
    specs: ['Natural Diverging Resistance', 'Iso-Lateral Movement Arms', 'Smooth Counterbalanced Weights', 'Zero Pinch Points'],
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    icon: 'Dumbbell'
  },
  {
    id: 'f8',
    title: 'Recovery & Locker Amenities',
    subtitle: 'UNISEX PREMIUM AMENITIES',
    description: 'Dedicated separate male and female changing zones, hot pressurized showers, steam wellness room, and secure digital lockers.',
    specs: ['Clean Climate Controlled', 'Purified Hydration Station', 'Hot Pressure Showers', 'RFID Digital Lockers'],
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=800&q=80',
    icon: 'ShieldCheck'
  }
];

export interface ProgramProtocol {
  id: string;
  category: 'strength' | 'cardio' | 'weight-loss' | 'coaching';
  title: string;
  badgeLevel: string;
  durationTag: string;
  description: string;
  points: string[];
  image: string;
}

export const PROGRAM_PROTOCOLS: ProgramProtocol[] = [
  {
    id: 'pr-1',
    category: 'strength',
    title: 'Strength & Hypertrophy',
    badgeLevel: 'Advanced',
    durationTag: '12 Weeks Protocol',
    description: 'Progressive overload protocols focused on compound lifts, barbell mastery, and sculpting dense, functional muscle.',
    points: ['Squat/Bench/Deadlift Focus', 'Periodized Rep Schemes', 'Strength Testing Milestones'],
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr-2',
    category: 'cardio',
    title: 'Cardio Engine & Conditioning',
    badgeLevel: 'Intermediate',
    durationTag: '8 Weeks Cycle',
    description: 'Aerobic threshold training, VO2 max elevation, and interval endurance to build an unstoppable cardio engine.',
    points: ['HIIT & Aerobic Pacing', 'Stamina Metric Tracking', 'Metabolic Boost'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr-3',
    category: 'weight-loss',
    title: 'Weight Management & Fat Loss',
    badgeLevel: 'All Levels',
    durationTag: '16 Weeks Program',
    description: 'Targeted caloric expenditure protocols paired with lean mass retention and sustainable lifestyle conditioning.',
    points: ['Fat Oxidation Circuits', 'Body Composition Scans', 'Nutrition Guidance'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pr-4',
    category: 'coaching',
    title: '1-on-1 Transformation Mentorship',
    badgeLevel: 'Elite Tier',
    durationTag: 'Personalized Periodization',
    description: 'Dedicated senior coach guidance covering biomechanical form checks, individualized macro plans, and weekly check-ins.',
    points: ['Biomechanical Form Audit', 'Personalized Nutrition Blueprint', 'Direct WhatsApp Access to Coach'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
  }
];

export interface DetailedMembership {
  id: string;
  name: string;
  tagline: string;
  prices: {
    monthly: number;
    quarterly: number;
    annual: number;
  };
  originalPrices?: {
    monthly?: number;
    quarterly?: number;
    annual?: number;
  };
  isPopular?: boolean;
  features: string[];
}

export const DETAILED_MEMBERSHIPS: DetailedMembership[] = [
  {
    id: 'basic',
    name: 'BASIC',
    tagline: 'Foundational entry for consistent lifters',
    prices: {
      monthly: 1899,
      quarterly: 3899,
      annual: 11499
    },
    originalPrices: {
      monthly: 2200,
      quarterly: 4800,
      annual: 14500
    },
    features: [
      'Full Gym Floor & Equipment Access',
      'Locker & Shower Facility',
      'Free Fitness Induction & Form Audit',
      'Standard Mobile Access Pass',
      'Hydration & Stretch Station'
    ]
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tagline: 'The definitive complete fitness package',
    isPopular: true,
    prices: {
      monthly: 2499,
      quarterly: 5799,
      annual: 16999
    },
    originalPrices: {
      monthly: 3000,
      quarterly: 7200,
      annual: 21500
    },
    features: [
      'All Basic Plan Privileges',
      'Unisex Aerobics & HIIT Studio Access',
      'Monthly InBody Composition Scan',
      '2 Guest Passes per Month',
      'Customized Cardio & Workout Routine',
      'Priority Locker Selection'
    ]
  },
  {
    id: 'vip',
    name: 'TITAN VIP',
    tagline: 'Uncompromising performance & mentorship',
    prices: {
      monthly: 3899,
      quarterly: 8999,
      annual: 25999
    },
    originalPrices: {
      monthly: 4800,
      quarterly: 11200,
      annual: 32000
    },
    features: [
      'All Premium Tier Benefits',
      '4 Personal Training Sessions / Month',
      'Custom Bi-Weekly Nutrition Meal Plan',
      'Unlimited Guest Passes (Weekend)',
      'Titans Merchandise Athlete Kit',
      'VIP Recovery Lounge & Priority Towel Service'
    ]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Rajesh Mohanty',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    role: 'Member for 2 Years',
    comment: 'Hands down the best gym in Cuttack. The equipment selection is unmatched: heavy dumbbells, calibrated bars, and intense vibe. Lost 14kg in 6 months!',
    date: 'Verified Google Review',
    verified: true
  },
  {
    id: 'r2',
    name: 'Ananya Pattnaik',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    role: 'Cross-Training Enthusiast',
    comment: 'Super clean, respectful community, and trainers who actually pay attention to your form rather than trying to hard-sell. The 360 floor tour on Google Maps convinced me to join!',
    date: 'Verified Google Review',
    verified: true
  },
  {
    id: 'r3',
    name: 'Debasish Swain',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    rating: 5,
    role: 'Competitive Powerlifter',
    comment: 'Deadlift platforms and heavy dumbbells up to 60kg! You cannot find this level of true iron culture anywhere else in the twin cities. 5/5 stars.',
    date: 'Verified Google Review',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What are the gym operating hours?',
    answer: 'Titans Gym is open Monday through Saturday from 5:30 AM to 10:00 PM, and on Sundays from 6:00 AM to 1:00 PM. We offer early bird hours so you can easily train before work or after hours.',
    category: 'General'
  },
  {
    question: 'Is Titans Gym a unisex fitness arena?',
    answer: 'Yes! Titans Gym is a 100% unisex, welcoming, and empowering fitness environment designed with dedicated separate locker rooms, private showers, and equal guidance for everyone.',
    category: 'General'
  },
  {
    question: 'Do you offer personal training packages?',
    answer: 'Yes, we provide 1-on-1 personalized transformation coaching packages with certified master trainers who formulate customized periodization, form correction, and nutrition meal plans.',
    category: 'Training'
  },
  {
    question: 'Are there programs for complete beginners?',
    answer: 'Absolutely. Every new member receives a foundational fitness induction, body composition scan, machine orientation, and workout blueprint tailored to their starting experience level.',
    category: 'Programs'
  },
  {
    question: 'Can I book a complimentary free trial session?',
    answer: 'Yes! You can reserve a 1-Day Free Trial Pass online or via WhatsApp to test our machines, meet the coaches, and feel the energetic atmosphere before registering.',
    category: 'Membership'
  },
  {
    question: 'What should I bring for my workout?',
    answer: 'Please bring clean indoor athletic shoes, comfortable workout attire, a personal sweat towel, and your water bottle. We have filtered hydration stations on the floor.',
    category: 'Facility'
  },
  {
    question: 'What payment modes are accepted?',
    answer: 'We accept UPI (Google Pay, PhonePe, Paytm), all major credit and debit cards, net banking, and cash at the reception desk.',
    category: 'Payment'
  }
];
