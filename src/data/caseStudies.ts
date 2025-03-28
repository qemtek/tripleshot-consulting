import { BarChart, Target, Zap } from 'lucide-react';
import type { CaseStudy } from '../types/CaseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: 'resource-optimization-business',
    title: 'Do More With Less: Streamline Your Business',
    industry: 'Business Operations',
    headline: 'Too Much Admin? Not Enough Growth?',
    summary: 'We can help you reclaim your time, reduce stress, and get back to focusing on what matters.',
    challenge: 'Are you juggling everything — from sales and customer service to accounting and inventory? If you\'re spending evenings and weekends buried in paperwork instead of growing your business or enjoying time off, we can help.',
    solution: 'We can streamline your time-consuming admin tasks using simple digital tools that don\'t require technical skills. Our focus: save you time, reduce friction, and create space for what matters most.',
    scope: [
      'Identify your routine tasks that can be automated',
      'Set up easy-to-use digital tools that work for you',
      'Train you and your team using plain, simple language',
      'Create schedules that maximize everyone\'s time'
    ],
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Icon: BarChart,
    detailedContext: {
      industryBackground: 'If you\'re like many business owners, you\'re wearing too many hats — handling operations, customer service, finances, and more. Your systems might not connect well, and important insights are probably buried in spreadsheets and paper forms.',
      keyPainPoints: [
        'Spending nights and weekends catching up on admin work',
        'Using multiple systems that don\'t work together',
        'Constantly putting out fires during busy periods',
        'Can\'t see clearly what\'s working and what isn\'t'
      ]
    },
    process: {
      steps: [
        {
          title: 'We analyze.',
          description: 'We\'ll look at your current processes and find opportunities to save time.'
        },
        {
          title: 'We simplify.',
          description: 'We\'ll recommend tools that make sense for your business and are easy to use.'
        },
        {
          title: 'We implement.',
          description: 'We\'ll set up systems that work together and make your life easier.'
        },
        {
          title: 'We train.',
          description: 'We\'ll show you and your team how to use everything, using language you understand.'
        }
      ],
      timeline: [
        {
          phase: 'Analysis',
          duration: '1–2 weeks',
          description: 'Understanding your business and where we can save you time.'
        },
        {
          phase: 'Setup',
          duration: '2–3 weeks',
          description: 'Getting your new tools and systems in place.'
        },
        {
          phase: 'Training',
          duration: '1–2 weeks',
          description: 'Making sure you\'re comfortable with your new systems.'
        }
      ],
      tools: [
        'Simple scheduling and calendar tools',
        'Easy-to-use accounting software',
        'Customer management systems',
        'Time-saving automation tools'
      ]
    },
    transformation: {
      before: [
        'Drowning in administrative tasks',
        'Working late nights and weekends',
        'Using systems that don\'t talk to each other'
      ],
      after: [
        'More time for growing your business',
        'Evenings and weekends back',
        'Everything working smoothly together'
      ]
    },
    results: {
      metrics: {
        '⏰ Time Back': 'Get your evenings and weekends back',
        '📊 Clear View': 'See how your business is doing at a glance',
        '🔄 Efficiency': 'Less time on admin, more time on growth',
        '😌 Peace of Mind': 'Systems that work while you sleep'
      },
      longTermImpact: 'Imagine running your business without the constant administrative headaches. With streamlined systems in place, you can focus on growth and actually enjoy being a business owner again.'
    },
    cta: {
      question: 'Want More Time For What Matters?',
      description: 'Let\'s talk about how we can help you streamline your business and get back to doing what you love.'
    }
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Attract More Customers Without Breaking the Bank',
    industry: 'Professional Services',
    headline: 'Marketing That Actually Works',
    summary: 'We can help you create a focused marketing approach that targets the right people with messages that resonate, using affordable digital tools.',
    challenge: 'Are you struggling to attract new customers consistently and wasting money on marketing that isn\'t working?',
    solution: 'We can help you identify and target ideal customer segments, create content that speaks directly to customer needs, and set up tracking systems to measure effectiveness.',
    scope: [
      'Identify and target ideal customer segments',
      'Create content that speaks directly to customer needs',
      'Set up tracking systems to measure effectiveness',
      'Optimize marketing budget allocation'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Icon: Target,
    detailedContext: {
      industryBackground: 'You\'re spending significant money on various marketing channels without clear returns. You\'ve tried everything from social media to local ads and flyers, but can\'t track what\'s bringing in business.',
      keyPainPoints: [
        'High marketing spend with low return on investment',
        'No clear way to track marketing effectiveness',
        'Difficulty standing out from larger competitors',
        'Limited time for content creation and social media'
      ]
    },
    process: {
      steps: [
        {
          title: 'We analyze.',
          description: 'We\'ll look at your customer data to identify the most profitable segments.'
        },
        {
          title: 'We target.',
          description: 'We\'ll craft messages that address specific customer needs.'
        },
        {
          title: 'We optimize.',
          description: 'We\'ll implement cost-effective channels to reach the target audience.'
        },
        {
          title: 'We measure.',
          description: 'We\'ll set up tracking systems to measure marketing ROI.'
        }
      ],
      timeline: [
        {
          phase: 'Customer Analysis',
          duration: '2-3 weeks',
          description: 'We\'ll analyze customer data and identify key market segments'
        },
        {
          phase: 'Strategy Development',
          duration: '2-3 weeks',
          description: 'We\'ll develop a targeted marketing strategy focused on ROI'
        },
        {
          phase: 'Implementation',
          duration: '4-6 weeks',
          description: 'We\'ll deploy new tools and train the team on their use'
        }
      ],
      tools: [
        'Website optimization tools',
        'Local search optimization',
        'Automated email marketing',
        'Social media management system'
      ]
    },
    transformation: {
      before: [
        'Wasting marketing budget',
        'No clear ROI tracking',
        'Inconsistent results'
      ],
      after: [
        '40% lower marketing costs',
        'Clear performance metrics',
        '2x customer growth'
      ]
    },
    results: {
      metrics: {
        'New Customers': '100% increase in qualified leads',
        'Marketing Costs': '40% reduction in marketing spend',
        'Conversion Rate': '65% improvement in lead-to-customer conversion',
        'Customer Value': '25% increase in average customer lifetime value'
      },
      longTermImpact: 'You\'ll now enjoy a steady stream of qualified leads at lower cost, with clear metrics to guide marketing decisions. Your local market presence will strengthen significantly.'
    },
    cta: {
      question: 'Ready to Make Your Marketing Work Harder?',
      description: 'Let\'s create a strategy that brings in the right customers at the right cost.'
    }
  },
  {
    id: 'financial-management-optimization',
    title: 'Take Control of Your Business Finances',
    industry: 'Financial Management',
    headline: 'From Financial Fog to Crystal Clear',
    summary: 'We can help you gain clarity on your finances and improve decision-making without needing advanced accounting skills.',
    challenge: 'You often lack clear visibility into your finances, making it difficult to confidently manage spending and plan for growth. Without financial clarity, decisions can become stressful and uncertain.',
    solution: 'We can set up simple, intuitive systems that provide clear financial insights, making informed decisions easier—no accounting expertise required.',
    scope: [
      'Organize financial information clearly',
      'Generate easy-to-understand financial reports',
      'Establish basic forecasting tools',
      'Create regular financial review routines'
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80',
    Icon: Zap,
    detailedContext: {
      industryBackground: 'Many business owners find financial management overwhelming, especially without a background in accounting. This often leads to stress, uncertainty, and decisions based more on gut feeling than clear data.',
      keyPainPoints: [
        'Unclear visibility into profitability',
        'Hours spent on bookkeeping and invoicing',
        'Concerns over cash flow and unexpected expenses',
        'Important decisions based on intuition rather than data'
      ]
    },
    process: {
      steps: [
        {
          title: 'We would organize.',
          description: 'Clearly structure existing financial information to simplify understanding and tracking.'
        },
        {
          title: 'We would simplify.',
          description: 'Implement intuitive systems that reduce manual data entry and minimize errors.'
        },
        {
          title: 'We would visualize.',
          description: 'Generate simple, visual financial reports for clearer business insights.'
        },
        {
          title: 'We would plan.',
          description: 'Establish consistent routines for financial reviews and strategic planning.'
        }
      ],
      timeline: [
        {
          phase: 'Financial Assessment',
          duration: '2–3 weeks',
          description: 'Review current financial processes to identify areas for simplification and clarity.'
        },
        {
          phase: 'System Setup',
          duration: '2–3 weeks',
          description: 'Deploy user-friendly financial tools and organize critical financial information.'
        },
        {
          phase: 'Training & Routine Development',
          duration: '4–6 weeks',
          description: 'Provide practical training on new systems and establish regular financial review routines.'
        }
      ],
      tools: [
        'Intuitive accounting software',
        'Automated expense tracking solutions',
        'Visual dashboards for financial insights',
        'Basic forecasting tools'
      ]
    },
    transformation: {
      before: [
        'Confusing financial picture',
        'Hours lost to bookkeeping',
        'Decisions based on guesswork'
      ],
      after: [
        'Clear, actionable financial insights',
        'Automated, simplified reporting',
        'Confident, data-driven decisions'
      ]
    },
    results: {
      metrics: {
        '⏱️ Time Saved': 'Significant reduction in weekly financial tasks',
        '⚡ Decision Speed': 'Much faster financial decision-making possible',
        '✅ Accuracy': 'Considerable reduction in data entry errors achievable',
        '💳 Cash Flow': 'Improved visibility, reducing surprises and stress'
      },
      longTermImpact: 'Improved financial clarity enables you to make confident, informed decisions about pricing, expenses, and growth. With reduced stress around finances and better visibility, you can proactively manage your financial health.'
    },
    cta: {
      question: 'Want to Take Control of Your Finances?',
      description: 'We can help you set up simple, intuitive systems to provide clarity—without needing to become an accounting expert.'
    }
  },
  {
    id: 'customer-service-automation',
    title: 'Delight Your Customers While Saving Time',
    industry: 'Customer Service',
    headline: 'Effortless Customer Service',
    summary: 'We can help you deliver outstanding customer service efficiently, even without extensive support resources.',
    challenge: 'You often find it challenging to maintain consistent customer service, especially during busy periods or growth spurts. Providing personalized support around the clock can quickly become overwhelming.',
    solution: 'We can set up straightforward systems that automatically handle common customer inquiries, allowing you to prioritize personal attention for more complex interactions.',
    scope: [
      'Identify frequently asked questions and common requests',
      'Develop helpful resources for quick self-service',
      'Implement automated responses for basic inquiries',
      'Create structured processes for handling complex issues'
    ],
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    Icon: Zap,
    detailedContext: {
      industryBackground: 'As your business grows, providing consistently excellent customer service becomes increasingly challenging. You struggle to maintain personal attention and quick response times as demands increase.',
      keyPainPoints: [
        'Feeling overwhelmed by repetitive customer inquiries',
        'Inconsistent response times during peak periods',
        'Repeatedly answering the same customer questions',
        'Difficulty supporting customers outside regular business hours'
      ]
    },
    process: {
      steps: [
        {
          title: 'We would analyze.',
          description: 'Identify patterns in customer interactions to find the most common questions and requests.'
        },
        {
          title: 'We would create.',
          description: 'Develop useful resources such as FAQs, guides, and tutorials for customers to access independently.'
        },
        {
          title: 'We would automate.',
          description: 'Set up automated systems to efficiently handle routine customer inquiries.'
        },
        {
          title: 'We would structure.',
          description: 'Establish clear processes to ensure timely handling of more complex customer needs.'
        }
      ],
      timeline: [
        {
          phase: 'Customer Interaction Analysis',
          duration: '2–3 weeks',
          description: 'Review current customer service patterns to identify common inquiries and opportunities for automation.'
        },
        {
          phase: 'Resource Development',
          duration: '3–4 weeks',
          description: 'Create comprehensive resources to address frequently asked questions.'
        },
        {
          phase: 'System Implementation',
          duration: '4–6 weeks',
          description: 'Implement streamlined communication tools and automated responses to improve customer service efficiency.'
        }
      ],
      tools: [
        'Intuitive customer communication platforms',
        'Enhanced website resources and self-service options',
        'Automated email templates and response systems',
        'Customer feedback collection tools'
      ]
    },
    transformation: {
      before: [
        'Overwhelmed by repetitive customer inquiries',
        'Inconsistent and delayed responses',
        'Repeatedly answering common questions'
      ],
      after: [
        'Automated handling of routine inquiries',
        'Improved speed and consistency of responses',
        'More capacity for meaningful customer interactions'
      ]
    },
    results: {
      metrics: {
        '⏳ Response Time': 'Faster and more consistent answers to customer inquiries',
        '⏱️ Time Saved': 'Significant reduction in repetitive customer communications',
        '✅ Service Consistency': 'Enhanced customer experience, even during busy periods',
        '😊 Customer Satisfaction': 'Potential for improved overall customer happiness and support'
      },
      longTermImpact: 'Implementing these streamlined customer service strategies enables you to maintain high-quality interactions efficiently. You can dedicate more attention to critical customer needs while routine tasks are handled effectively.'
    },
    cta: {
      question: 'Want to Provide Better Customer Service?',
      description: 'We can help you automate routine inquiries and focus your time on meaningful customer interactions.'
    }
  }
];

// Helper function to get case study by ID
export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};
