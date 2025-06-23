export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'James Mitchell',
    role: 'Operations Director',
    company: 'Freight Hitch',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Tripleshot\'s smart routing system revolutionized our logistics operations. We scaled from 500 to 5000 weekly deliveries without expanding our planning team. The system was transformational.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Williams',
    role: 'Managing Director',
    company: 'Meridian Services Ltd',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Going through their 3-phase approach was exactly what we needed. We went from paper-based data entry to fully automated processes. The team really made complex technology feel accessible.',
    rating: 5
  },
  {
    id: '3',
    name: 'David Clarke',
    role: 'Founder',
    company: 'Clarke & Associates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The predictive analytics they implemented helped us identify which clients were at risk months in advance. We\'ve reduced churn by 40% and can now focus our efforts where they matter most.',
    rating: 5
  },
  {
    id: '4',
    name: 'Emma Thompson',
    role: 'Operations Manager',
    company: 'Bristol Manufacturing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'What impressed me most was how they understood our business first, then applied the technology. The workflow automation saved us 15 hours per week and eliminated costly manual errors.',
    rating: 5
  }
];