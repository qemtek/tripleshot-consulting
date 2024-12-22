import { MessageSquare, Target, DollarSign, Search, TrendingUp } from 'lucide-react';
import type { CaseStudyProps } from './CaseStudyCard';

export const caseStudies: CaseStudyProps[] = [
  {
    title: 'AI Customer Support Integration',
    industry: 'E-commerce',
    challenge: 'Managing high volume of customer inquiries with a small support team',
    solution: 'Implementation of AI chatbot with natural language processing capabilities',
    scope: [
      'Custom chatbot development and training',
      'Integration with existing support systems',
      'Staff training and workflow optimization',
      'Performance monitoring dashboard'
    ],
    timeline: '8-12 weeks',
    investment: 'Starting from $15,000',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    Icon: MessageSquare
  },
  {
    title: 'Sales Pipeline Optimization',
    industry: 'B2B Software',
    challenge: 'Inefficient lead qualification and sales process management',
    solution: 'AI-driven lead scoring and sales automation system',
    scope: [
      'Lead scoring model development',
      'CRM integration and automation',
      'Sales team training program',
      'ROI tracking implementation'
    ],
    timeline: '10-14 weeks',
    investment: 'Starting from $20,000',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    Icon: Target
  },
  {
    title: 'Dynamic Pricing System',
    industry: 'Retail',
    challenge: 'Static pricing leading to missed revenue opportunities',
    solution: 'AI-powered pricing optimization system with market analysis',
    scope: [
      'Market analysis algorithm development',
      'Pricing strategy automation',
      'Competitor monitoring setup',
      'Revenue impact reporting'
    ],
    timeline: '12-16 weeks',
    investment: 'Starting from $25,000',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    Icon: DollarSign
  },
  {
    title: 'SEO Performance Enhancement',
    industry: 'Digital Services',
    challenge: 'Poor organic search visibility and content performance',
    solution: 'AI-driven content optimization and SEO automation',
    scope: [
      'Content analysis system setup',
      'Keyword optimization automation',
      'Performance tracking dashboard',
      'Content strategy development'
    ],
    timeline: '6-8 weeks',
    investment: 'Starting from $12,000',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
    Icon: Search
  },
  {
    title: 'Marketing Analytics Platform',
    industry: 'Marketing Agency',
    challenge: 'Inefficient marketing budget allocation and campaign tracking',
    solution: 'AI analytics platform for campaign optimization',
    scope: [
      'Analytics dashboard development',
      'Campaign automation setup',
      'ROI tracking implementation',
      'Team training program'
    ],
    timeline: '8-10 weeks',
    investment: 'Starting from $18,000',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    Icon: TrendingUp
  }
];