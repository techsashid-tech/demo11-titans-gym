export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  badge?: string;
  rating?: number;
}

export interface ProgramItem {
  id: string;
  title: string;
  duration: string;
  intensity: 'High' | 'Extreme' | 'Moderate';
  description: string;
  features: string[];
  image: string;
  trainer: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  image: string;
  icon: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  isPopular?: boolean;
  features: string[];
  highlight: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  role: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
