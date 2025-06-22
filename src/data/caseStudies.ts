import { BarChart, Target, Zap, Palette } from 'lucide-react';
import type { CaseStudy } from '../types/CaseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'resource-optimization-business',
    title: 'From Drowning in Paperwork to Running on Autopilot',
    industry: 'Business Operations',
    headline: 'Tired of Working IN Your Business Instead of ON It?',
    summary: 'Discover how smart business owners are reclaiming 15+ hours per week by automating the boring stuff - without needing to become tech experts.',
    problem: {
      description: 'Picture this: It\'s 7 PM, you\'re still at the office, and instead of planning your next big move, you\'re buried under invoices, manually entering data, and chasing paperwork. Sound familiar? You\'re not alone. Most business owners spend 60% of their time on administrative tasks that could be automated.',
      painPoints: [
        'Drowning in repetitive paperwork and data entry',
        'Constantly chasing invoices and following up on quotes',
        'Manually tracking inventory, orders, and customer information',
        'Missing growth opportunities because you\'re stuck doing busy work',
        'Working evenings and weekends just to keep up with admin',
        'Worried about human errors in important business processes'
      ]
    },
    solution: {
      description: 'What if your business could handle the routine stuff automatically while you focus on what you do best? We help you set up smart systems that work behind the scenes - think of it as hiring a super-efficient virtual assistant that never takes a day off.',
      approach: [
        'We sit down with you to map out your current daily/weekly routines',
        'Identify the biggest time-wasters that can be automated (usually saves 10-20 hours per week)',
        'Set up simple, user-friendly systems that work the way you think',
        'Train you and your team - no technical degree required!',
        'Provide ongoing support so you\'re never stuck'
      ],
      tools: [
        'Invoice automation (no more chasing payments)',
        'Customer data management (everything in one place)',
        'Inventory tracking (know what you have, when to reorder)',
        'Quote and proposal generation (professional docs in minutes)',
        'Email sequences for follow-ups (nurture leads while you sleep)',
        'Reporting dashboards (see how your business is doing at a glance)'
      ]
    },
    expectedResults: {
      benefits: [
        'Reclaim 15+ hours per week for strategic work and growth',
        'Never miss a follow-up or forget an important task',
        'Reduce costly mistakes from manual data entry',
        'Impress customers with faster, more professional service',
        'Scale your business without drowning in more admin work',
        'Actually leave the office at a reasonable time'
      ],
      metrics: {
        '⏱️ Time Freedom': 'Get back 15-20 hours per week',
        '💰 Cost Savings': 'Reduce operational costs by 25-35%',
        '📈 Growth Capacity': 'Handle 2x more customers with same team',
        '🎯 Accuracy': 'Eliminate 95% of manual entry errors',
        '😌 Peace of Mind': 'Sleep better knowing nothing falls through cracks',
        '🚀 Response Time': 'Reply to customers 10x faster'
      },
      longTermImpact: 'Imagine running a business where the routine stuff just happens automatically. Where you can focus on serving customers, developing new products, or simply having a life outside work. That\'s what automation does - it gives you back control of your time and your business.'
    },
    image: '/images/case-studies/business-owner-freedom.png',
    Icon: BarChart,
    cta: {
      question: 'Ready to Stop Working So Hard and Start Working So Smart?',
      description: 'Let\'s chat about which of your daily tasks could be running on autopilot by next month.'
    }
  },
  {
    id: 'digital-marketing-strategy',
    title: 'From Marketing Guesswork to Lead Generation Machine',
    industry: 'Digital Marketing',
    headline: 'Tired of Marketing That Doesn\'t Bring in Customers?',
    summary: 'Discover how smart business owners are turning their marketing from a money pit into a predictable lead generation system - without needing a marketing degree.',
    problem: {
      description: 'You know you need marketing to grow your business, but every month feels like throwing money into a black hole. You try Facebook ads, Google ads, email campaigns, social media posts... but nothing seems to stick. Meanwhile, your competitors seem to effortlessly attract customers while you struggle to get noticed.',
      painPoints: [
        'Spending money on ads that don\'t bring in customers',
        'Getting website visitors but no phone calls or inquiries',
        'Posting on social media but nobody engages or responds',
        'Competing with businesses that seem to dominate online',
        'Not knowing which marketing efforts actually work',
        'Feeling overwhelmed by all the marketing options available'
      ]
    },
    solution: {
      description: 'What if you could have a marketing system that consistently brings in qualified leads while you focus on serving customers? We help you build a simple, effective marketing machine that works even when you\'re not thinking about it.',
      approach: [
        'We analyze your ideal customers and where they spend their time online',
        'Create a simple content strategy that positions you as the obvious choice',
        'Set up tracking so you know exactly what\'s working (and what\'s not)',
        'Build automated systems that nurture leads into customers',
        'Provide simple monthly reports that show your return on investment'
      ],
      tools: [
        'Customer research and targeting (know exactly who to reach)',
        'Professional website optimization (turn visitors into leads)',
        'Email marketing automation (nurture leads while you sleep)',
        'Social media strategy (build trust and credibility)',
        'Google and Facebook advertising (reach customers when they\'re ready)',
        'Analytics dashboard (see your results in plain English)'
      ]
    },
    expectedResults: {
      benefits: [
        'Generate consistent qualified leads without constant effort',
        'Know exactly where your best customers come from',
        'Stop wasting money on marketing that doesn\'t work',
        'Build a reputation as the go-to expert in your field',
        'Have customers find you instead of chasing them',
        'Scale your marketing without it taking over your life'
      ],
      metrics: {
        '📞 Quality Leads': 'Consistent stream of qualified inquiries',
        '💰 Marketing ROI': 'Clear return on your marketing investment',
        '🎯 Conversion Rate': 'Higher percentage of leads become customers',
        '📈 Growth': 'Predictable and sustainable business growth',
        '⏰ Time Saved': 'Marketing systems work automatically',
        '🏆 Market Position': 'Become the obvious choice in your area'
      },
      longTermImpact: 'Imagine never worrying about where your next customer will come from. Picture having so many qualified leads that you can be selective about who you work with. That\'s what happens when you stop guessing and start using a proven marketing system.'
    },
    image: '/images/case-studies/marketing-success.png',
    Icon: Target,
    cta: {
      question: 'Ready to Turn Your Marketing Into a Lead Generation Machine?',
      description: 'Let\'s discuss how to get qualified customers calling you instead of your competitors.'
    }
  },
  {
    id: 'financial-management-optimization',
    title: 'Take Control of Your Business Finances',
    industry: 'Financial Management',
    headline: 'From Financial Fog to Crystal Clear',
    summary: 'We help established businesses gain clarity and control over their finances with smart systems and real-time insights.',
    problem: {
      description: 'Many business owners struggle with financial visibility and spend too much time managing finances. Without clear insights, making confident decisions becomes difficult.',
      painPoints: [
        'Unclear financial position',
        'Time-consuming bookkeeping',
        'Delayed financial reports',
        'Cash flow uncertainty'
      ]
    },
    solution: {
      description: 'We implement modern financial systems that give you real-time insights and automate routine financial tasks.',
      approach: [
        'Streamline accounting processes',
        'Set up automated reporting',
        'Implement cash flow tracking',
        'Create financial dashboards'
      ],
      tools: [
        'Cloud accounting software',
        'Financial planning tools',
        'Automated reconciliation',
        'Custom reporting systems'
      ]
    },
    expectedResults: {
      benefits: [
        'Clear financial visibility',
        'Automated bookkeeping',
        'Real-time insights',
        'Better financial decisions'
      ],
      metrics: {
        '⚡ Time Saved': '10+ hours per month',
        '📊 Reporting': 'Real-time financial data',
        '💰 Cash Flow': 'Better predictions',
        '📈 Growth': 'Informed decisions'
      },
      longTermImpact: 'Take control of your business finances with clear insights and automated systems that help you make better decisions and grow with confidence.'
    },
    image: '/images/case-studies/financial-management.png',
    Icon: BarChart,
    cta: {
      question: 'Ready for Financial Clarity?',
      description: 'Let us help you take control of your business finances.'
    }
  },
  {
    id: 'customer-service-automation',
    title: 'How Businesses are Using Chat Bots to Save Time and Money',
    industry: 'Customer Service',
    headline: 'Effortless Customer Service',
    summary: 'We help established businesses provide exceptional customer service while reducing the time spent on routine inquiries.',
    problem: {
      description: 'Many businesses struggle to maintain high-quality customer service as they grow. Routine inquiries consume valuable time that could be spent on complex issues and growth.',
      painPoints: [
        'Overwhelmed by routine inquiries',
        'Slow response times',
        'Inconsistent service quality',
        'Limited staff resources'
      ]
    },
    solution: {
      description: 'We implement smart customer service systems that automate routine inquiries while maintaining a personal touch.',
      approach: [
        'Analyze common inquiries',
        'Create automated responses',
        'Set up self-service options',
        'Train staff on complex issues'
      ],
      tools: [
        'Customer service platform',
        'Automated response system',
        'Knowledge base software',
        'Analytics and tracking'
      ]
    },
    expectedResults: {
      benefits: [
        'Faster response times',
        'Consistent service quality',
        'More time for complex issues',
        'Scalable support system'
      ],
      metrics: {
        '⚡ Response Time': '< 5 minute average',
        '👥 Resolution Rate': '80% automated resolution',
        '😊 Satisfaction': '95% customer satisfaction',
        '💪 Capacity': '3x support capacity'
      },
      longTermImpact: 'Build a customer service system that scales with your business while maintaining the personal touch your customers expect.'
    },
    image: '/images/case-studies/customer-service.png',
    Icon: Zap,
    cta: {
      question: 'Ready to Scale Your Customer Service?',
      description: 'Let us help you automate routine inquiries and focus on meaningful customer interactions.'
    }
  },
  {
    id: 'price-optimisation',
    title: 'Using Quotes to Optimise Prices',
    industry: 'Price Optimisation',
    headline: 'Is Your Pricing Strategy Holding You Back?',
    summary: 'We help established businesses modernize their image while preserving their trusted reputation.',
    problem: {
      description: 'Many successful businesses have built their reputation through excellence, but their online presence hasn\'t kept pace. An outdated website can make even the most established firm appear behind the times.',
      painPoints: [
        'Website looks dated compared to competitors',
        'Inconsistent branding across materials',
        'Difficult to update website content',
        'Missing opportunities with first impressions'
      ]
    },
    solution: {
      description: 'We create a refined, professional web presence that reflects your expertise while staying true to your established values.',
      approach: [
        'Understand your values and what makes your business special',
        'Create a modern design that matches your professionalism',
        'Build an easy-to-manage website that grows with you',
        'Train your team on simple content updates'
      ],
      tools: [
        'Professional design software',
        'Modern web development tools',
        'User-friendly content management',
        'Search engine optimization'
      ]
    },
    expectedResults: {
      benefits: [
        'Professional online presence',
        'Consistent, refined brand identity',
        'Easy-to-update website',
        'Attracting ideal clients'
      ],
      metrics: {
        '👥 Client Inquiries': 'Significant increase in quality leads',
        '💼 Project Value': 'Attract higher-value opportunities',
        '⭐ First Impressions': 'Professional image matching your expertise',
        '⚡ Efficiency': 'Update your website in minutes, not days'
      },
      longTermImpact: 'A professional website is not just about looking good - it is about making the right first impression. Present yourself with the same level of professionalism online that you deliver in person.'
    },
    image: '/images/case-studies/pricing-strategy.png',
    Icon: Palette,
    cta: {
      question: 'Ready to Look as Professional Online As You Are in Person?',
      description: 'Let us discuss how we can refresh your brand and website to attract the clients you deserve.'
    }
  },
  {
    id: 'brand-identity-evolution',
    title: 'Building a Modern Brand Identity',
    industry: 'Brand Strategy',
    headline: 'Does Your Brand Tell Your Story?',
    summary: 'We help successful businesses develop a brand identity that communicates their expertise and values at first glance.',
    problem: {
      description: 'As businesses grow and evolve, their brand identity often fails to keep pace. When your brand has evolved organically over the years, it can become inconsistent and may not effectively communicate your current level of expertise.',
      painPoints: [
        'Brand does not reflect your current service level',
        'Inconsistent messaging across channels',
        'Marketing materials lack professional polish',
        'Missing opportunities to build trust quickly'
      ]
    },
    solution: {
      description: 'We develop a cohesive brand strategy and visual identity system that instantly communicates your professionalism and values across all touchpoints.',
      approach: [
        'Analyze your market position and competitive advantages',
        'Develop your unique brand positioning and messaging',
        'Create your visual identity system and guidelines',
        'Roll out your new brand across all touchpoints'
      ],
      tools: [
        'Market research and analysis',
        'Brand strategy workshop',
        'Professional design tools',
        'Brand management system'
      ]
    },
    expectedResults: {
      benefits: [
        'Professional, cohesive brand identity',
        'Clear market positioning',
        'Powerful marketing toolkit',
        'Strong first impressions'
      ],
      metrics: {
        '🎯 Brand Recognition': 'Instantly recognizable in your market',
        '💫 Market Position': 'Clear differentiation from competitors',
        '📈 Brand Value': 'Enhanced perceived value of services',
        '🤝 Trust': 'Faster trust-building with prospects'
      },
      longTermImpact: 'Your brand identity is often the first thing potential clients see. We help you make that first impression count by creating a brand that instantly communicates your professionalism and values.'
    },
    image: '/images/case-studies/brand-collateral.png',
    Icon: Palette,
    cta: {
      question: 'Ready to Build a Brand That Reflects Your Excellence?',
      description: 'Let us help you develop a brand identity that attracts opportunities and builds instant trust.'
    }
  }
];

// Helper function to get case study by ID
export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
