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
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Solutions',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The AI-powered customer service solution has transformed our support team. We\'ve seen a 70% reduction in response times and significantly improved customer satisfaction.',
    rating: 5
  },
  {
    id: '2',
    name: 'Mark Thompson',
    role: 'Marketing Director',
    company: 'Growth Dynamics',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Their SEO optimization tools helped us achieve first-page rankings for our key terms within months. The ROI has been exceptional.',
    rating: 5
  },
  {
    id: '3',
    name: 'Lisa Chen',
    role: 'Operations Manager',
    company: 'Retail Plus',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The dynamic pricing system has been a game-changer for our retail business. We\'ve seen a 25% increase in profit margins since implementation.',
    rating: 5
  }
];