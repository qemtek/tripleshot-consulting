import { BarChart, Target, Users, Zap, Lightbulb, Settings } from 'lucide-react';
import type { CaseStudy } from '../types/CaseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'resource-optimization-business',
    title: 'Doing More With Less: Business Efficiency',
    industry: 'Business Operations',
    summary: 'How retail businesses can save time and money by streamlining their day-to-day operations.',
    challenge: 'Business owners often spend too much time on paperwork instead of focusing on customers and growth.',
    solution: 'Streamlining routine tasks through simple digital tools that don\'t require technical expertise.',
    scope: [
      'Finding time-consuming tasks that can be simplified',
      'Setting up easy-to-use digital tools',
      'Training staff on new, simpler ways of working',
      'Creating schedules that make the most of everyone\'s time'
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Icon: BarChart,
    detailedContext: {
      industryBackground: 'Business owners are often wearing multiple hats - from sales and customer service to accounting and inventory management. This leaves little time to focus on growth and can lead to burnout.',
      businessChallenges: [
        'Spending evenings and weekends catching up on paperwork',
        'Using multiple systems that don\'t talk to each other',
        'Struggling to keep up during busy periods',
        'Not having clear visibility into what\'s working and what\'s not'
      ]
    },
    implementation: {
      approach: [
        'We start by sitting down with you to understand your daily routines and biggest frustrations',
        'Together, we identify the tasks that take the most time but add the least value',
        'We recommend simple digital tools that can handle these tasks automatically',
        'We help set everything up and train your team in plain, non-technical language'
      ],
      technologies: [
        'User-friendly scheduling and task management tools',
        'Simple inventory tracking systems',
        'Easy-to-use customer management software',
        'Basic reporting dashboards that show what matters'
      ],
      timeline: [
        {
          phase: 'Understanding Your Business',
          duration: '2-3 weeks',
          description: 'We spend time in your business, observing how things work and identifying opportunities'
        },
        {
          phase: 'Setting Up Simple Solutions',
          duration: '3-4 weeks',
          description: 'We implement easy-to-use tools and make sure they work with your existing systems'
        },
        {
          phase: 'Training and Support',
          duration: '4-6 weeks',
          description: 'We train you and your team, and provide ongoing support until everyone is comfortable'
        }
      ]
    },
    results: {
      metrics: {
        'Time Saved': 'More hours in your day to focus on customers and growth',
        'Reduced Paperwork': 'Less time spent on manual data entry and filing',
        'Customer Experience': 'More consistent service, even during busy periods',
        'Work-Life Balance': 'Less need to catch up on admin during evenings and weekends'
      },
      longTermImpact: 'By streamlining your operations, you\'ll be able to focus more on growing your business and less on administrative tasks. Your team will have clearer responsibilities and more time to focus on what matters most - serving customers and developing new opportunities.'
    },
    lessonsLearned: {
      successFactors: [
        'Start small with changes that make the biggest difference',
        'Involve your team in the process - they often have the best insights',
        'Choose tools that are easy to use, not just packed with features',
        'Make changes gradually to avoid disrupting your business'
      ],
      challenges: [
        'Initial reluctance to change familiar ways of working',
        'Finding time for training during busy periods',
        'Ensuring new systems work with existing tools'
      ],
      bestPractices: [
        'Focus on solving real problems, not just adding technology',
        'Make sure new tools are simple enough for everyone to use',
        'Set aside dedicated time for learning new systems',
        'Regularly review what\'s working and what could be improved'
      ]
    }
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Attracting More Customers Without Breaking the Bank',
    industry: 'Professional Services',
    summary: 'How local service businesses can attract more of the right customers without wasting money on ineffective advertising.',
    challenge: 'Many businesses struggle to attract new customers consistently and waste money on marketing that doesn\'t work.',
    solution: 'Creating a focused marketing approach that targets the right people with messages that resonate, using affordable digital tools.',
    scope: [
      'Understanding who your ideal customers are',
      'Creating content that speaks directly to their needs',
      'Setting up simple ways to track what\'s working',
      'Making the most of your limited marketing budget'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Icon: Target,
    detailedContext: {
      industryBackground: 'For businesses, finding new customers can feel like throwing money into a black hole. Many owners try a bit of everything - social media, local ads, flyers - without knowing what actually brings in business.',
      businessChallenges: [
        'Spending money on marketing without seeing clear results',
        'Not knowing which marketing efforts are actually working',
        'Struggling to stand out from larger competitors',
        'Finding time to create regular content for social media and websites'
      ]
    },
    implementation: {
      approach: [
        'We help you identify exactly who your best customers are and what they care about',
        'We create simple messages that speak directly to their needs and concerns',
        'We set up affordable ways to reach these customers where they already spend time',
        'We implement basic tracking so you can see what\'s working and what\'s not'
      ],
      technologies: [
        'Simple website improvements that attract more visitors',
        'Local search optimization so people can find you easily',
        'Basic email marketing to stay in touch with customers',
        'Social media templates that save you time'
      ],
      timeline: [
        {
          phase: 'Understanding Your Customers',
          duration: '2-3 weeks',
          description: 'We research who your ideal customers are and what matters to them'
        },
        {
          phase: 'Creating Your Marketing Plan',
          duration: '2-3 weeks',
          description: 'We develop a simple marketing approach focused on what works for your business'
        },
        {
          phase: 'Implementation & Training',
          duration: '4-6 weeks',
          description: 'We set up the necessary tools and show you how to use them effectively'
        }
      ]
    },
    results: {
      metrics: {
        'New Customers': 'More inquiries from people who are a good fit for your business',
        'Marketing Costs': 'Less money wasted on ineffective advertising',
        'Conversion Rate': 'More inquiries turning into paying customers',
        'Customer Value': 'Longer-lasting customer relationships and more referrals'
      },
      longTermImpact: 'With a focused marketing approach, you\'ll attract more of the right customers without wasting money. You\'ll also build a stronger reputation in your local market and create a more predictable flow of new business.'
    },
    lessonsLearned: {
      successFactors: [
        'Focus on understanding your customers before spending on marketing',
        'Start with a few marketing channels and do them well',
        'Track results so you know what\'s working',
        'Be consistent rather than trying the latest trend'
      ],
      challenges: [
        'Finding time to create regular content',
        'Patience - good marketing takes time to show results',
        'Staying focused rather than trying everything'
      ],
      bestPractices: [
        'Create templates to make content creation easier',
        'Set aside specific times for marketing activities',
        'Focus on helping, not selling',
        'Use customer stories to demonstrate your value'
      ]
    }
  },
  {
    id: 'financial-management-optimization',
    title: 'Taking Control of Your Business Finances',
    industry: 'Financial Management',
    summary: 'How businesses can gain clarity on their finances and make better decisions without becoming accounting experts.',
    challenge: 'Many business owners lack clear visibility into their finances and struggle to make confident decisions about spending and growth.',
    solution: 'Setting up simple systems that provide clear financial insights without requiring advanced accounting knowledge.',
    scope: [
      'Organizing your financial information',
      'Creating easy-to-understand reports',
      'Setting up basic forecasting tools',
      'Establishing regular financial review routines'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
    Icon: Zap,
    detailedContext: {
      industryBackground: 'Many business owners started their business because they\'re passionate about their product or service - not because they love accounting. As a result, financial management often becomes a stressful afterthought.',
      businessChallenges: [
        'Not knowing exactly how profitable the business really is',
        'Spending hours on bookkeeping and invoicing',
        'Worrying about cash flow and unexpected expenses',
        'Making important decisions based on gut feeling rather than data'
      ]
    },
    implementation: {
      approach: [
        'We help organize your existing financial information in a way that makes sense',
        'We set up simple systems that reduce manual data entry and errors',
        'We create easy-to-understand reports that show what\'s really happening in your business',
        'We establish regular routines for reviewing finances and planning ahead'
      ],
      technologies: [
        'User-friendly accounting software',
        'Simple financial dashboards with visual reports',
        'Basic cash flow forecasting tools',
        'Invoice and expense management systems'
      ],
      timeline: [
        {
          phase: 'Financial Assessment',
          duration: '2-3 weeks',
          description: 'We review your current financial processes and identify opportunities for improvement'
        },
        {
          phase: 'System Setup',
          duration: '4-6 weeks',
          description: 'We implement user-friendly financial tools and organize your information'
        },
        {
          phase: 'Training & Routine Development',
          duration: '3-4 weeks',
          description: 'We train you on using the new systems and establish regular review routines'
        }
      ]
    },
    results: {
      metrics: {
        'Financial Clarity': 'Clear understanding of profitability and cash flow',
        'Time Saved': 'Less time spent on bookkeeping and financial admin',
        'Decision Confidence': 'More confidence in making financial decisions',
        'Cash Flow': 'Fewer cash flow surprises and better planning'
      },
      longTermImpact: 'With better financial visibility, you\'ll make more informed decisions about pricing, expenses, and growth opportunities. You\'ll also reduce stress around tax time and have more confidence in the financial health of your business.'
    },
    lessonsLearned: {
      successFactors: [
        'Focus on the financial metrics that actually matter for your business',
        'Create simple routines that are easy to maintain',
        'Use visual reports that make financial data easier to understand',
        'Start with the basics before adding complexity'
      ],
      challenges: [
        'Overcoming anxiety around financial matters',
        'Finding time for regular financial reviews',
        'Maintaining good data entry habits'
      ],
      bestPractices: [
        'Set aside dedicated time each week for financial management',
        'Create simple dashboards that show key metrics at a glance',
        'Establish clear processes for invoicing and expense tracking',
        'Review financial performance monthly, not just at tax time'
      ]
    }
  },
  {
    id: 'customer-service-automation',
    title: 'Delighting Customers While Saving Time',
    industry: 'Customer Service',
    summary: 'How businesses can provide excellent customer service without being available 24/7 or hiring a large support team.',
    challenge: 'Businesses often struggle to provide consistent customer service, especially as they grow or during busy periods.',
    solution: 'Setting up simple systems that handle common customer needs automatically while preserving the personal touch for important interactions.',
    scope: [
      'Identifying common customer questions and requests',
      'Creating helpful resources that answer frequent questions',
      'Setting up simple automated responses for basic inquiries',
      'Establishing clear processes for handling more complex issues'
    ],
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Icon: Lightbulb,
    detailedContext: {
      industryBackground: 'Business owners often pride themselves on personal service, but as the business grows, it becomes increasingly difficult to maintain that level of attention for every customer interaction.',
      businessChallenges: [
        'Feeling overwhelmed by customer questions and requests',
        'Inconsistent response times during busy periods',
        'Answering the same questions over and over',
        'Limited availability outside of business hours'
      ]
    },
    implementation: {
      approach: [
        'We analyze your most common customer interactions to identify patterns',
        'We create helpful resources like FAQs and guides that answer frequent questions',
        'We set up simple automated responses for basic inquiries',
        'We establish clear processes for handling more complex customer needs'
      ],
      technologies: [
        'Easy-to-use customer communication tools',
        'Simple website improvements with helpful information',
        'Basic email templates and automated responses',
        'Customer feedback collection systems'
      ],
      timeline: [
        {
          phase: 'Customer Interaction Analysis',
          duration: '2-3 weeks',
          description: 'We review your current customer service approach and identify common patterns'
        },
        {
          phase: 'Resource Development',
          duration: '3-4 weeks',
          description: 'We create helpful resources and templates to address common questions'
        },
        {
          phase: 'System Implementation',
          duration: '4-6 weeks',
          description: 'We set up tools to streamline customer communications and collect feedback'
        }
      ]
    },
    results: {
      metrics: {
        'Response Time': 'Faster answers to customer questions',
        'Owner Time Saved': 'Less time spent answering repetitive questions',
        'Service Consistency': 'More reliable customer experience, even during busy times',
        'Customer Satisfaction': 'Happier customers who feel well-supported'
      },
      longTermImpact: 'By streamlining your customer service approach, you\'ll be able to maintain high-quality support as your business grows. You\'ll also free up time to focus on the most important customer interactions while routine matters are handled efficiently.'
    },
    lessonsLearned: {
      successFactors: [
        'Finding the right balance between automation and personal touch',
        'Creating truly helpful resources that answer real customer questions',
        'Making it easy for customers to find information on their own',
        'Regularly updating resources based on new customer questions'
      ],
      challenges: [
        'Maintaining a personal connection while using automation',
        'Keeping help resources up-to-date',
        'Training team members on new processes'
      ],
      bestPractices: [
        'Start by documenting your most frequently asked questions',
        'Use a friendly, helpful tone in all automated communications',
        'Make it easy for customers to reach a real person when needed',
        'Regularly review customer feedback to improve your approach'
      ]
    }
  }
];

// Helper function to get case study by ID
export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
