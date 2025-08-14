import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, Truck, DollarSign, Users } from 'lucide-react';
import Button from './ui/Button';

interface DetailedCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  icon: React.ComponentType<any>;
  image: string;
}

const detailedCaseStudies: DetailedCaseStudy[] = [
  {
    id: 'smart-routing-logistics',
    title: 'Smart Routing Engine',
    subtitle: 'Scaling from 1K to 10K Weekly Deliveries with AI-Powered Route Optimization',
    industry: 'Logistics & Transportation',
    challenge: 'Manual route planning was consuming 3-4 hours daily and couldn\'t scale beyond 1,000 deliveries per week. The operations team was becoming a bottleneck to growth.',
    solution: 'Built an intelligent route optimization system using Google\'s OR-Tools, handling 50K+ delivery nodes in real-time. The system was designed for the future, with horizontal scaling capabilities (through AWS ECS) allowing it to handle millions of nodes. Analytics dashboards and slack integrations helped the operations team stay on top of changes.',
    results: [
      'Scaled from 1K to 10K weekly bookings with no team expansion',
      'Reduced route planning time from 4 hours to 5 minutes daily',
      'Reduced operational costs by 90% versus scaling the team linearly',
      'Efficient caching reduced API costs by 99%'
    ],
    technologies: ['Python', 'Google OR-Tools', 'Docker', 'AWS ECS', 'GraphHopper', 'Uber H3'],
    icon: Truck,
    image: '/images/case-studies/smart-routing-dashboard.jpg'
  },
  {
    id: 'dynamic-pricing-ai',
    title: 'AI-Driven Dynamic Pricing',
    subtitle: 'Increasing Profit Margins by 20% Through Machine Learning Price Optimization',
    industry: 'Transportation & Storage',
    challenge: 'Quote pricing was based on simple cost-plus formulas, missing opportunities for profit optimization. Different customer segments had varying price sensitivities that weren\'t being captured.',
    solution: 'Developed machine learning models to predict customer conversion probability at different price points. Built real-time pricing API that optimizes quotes based on customer behavior, market conditions, and competitive landscape.',
    results: [
      'Achieved 20% uplift in profit margins across all quotes',
      'Maintained competitive win rates while maximizing profitability',
      'Implemented real-time pricing recommendations via API',
      'Enabled quote-by-quote optimization for thousands of daily requests',
      'Reduced pricing inconsistencies across sales channels'
    ],
    technologies: ['Python', 'Scikit-learn', 'AWS Lambda', 'PostgreSQL', 'REST APIs', 'A/B Testing'],
    icon: DollarSign,
    image: '/images/case-studies/dynamic-pricing.jpg'
  },
  {
    id: 'customer-churn-prediction',
    title: 'Predictive Customer Churn Modeling',
    subtitle: 'Reducing Customer Loss by 40% Through Early Warning Systems',
    industry: 'Food Delivery',
    challenge: 'Customer churn was reactive - by the time patterns were noticed, valuable customers had already left. Marketing spend on retention was inefficient without targeting insights.',
    solution: 'Built predictive models analyzing customer behavior patterns, engagement metrics, and satisfaction indicators. Created automated early warning systems with 60-90 day advance notice of churn risk.',
    results: [
      'Reduced customer churn rates by 40% through early intervention',
      'Achieved 85%+ accuracy in churn predictions',
      'Increased customer lifetime value by 25%',
      'Enabled proactive retention campaigns with 5:1 ROI',
      'Transformed customer success from reactive to predictive'
    ],
    technologies: ['Python', 'XGBoost', 'Pandas', 'SQL', 'Automated Alerts', 'Customer Analytics'],
    icon: Users,
    image: '/images/case-studies/customer-service.png'
  }
];

export default function DetailedCaseStudies() {
  return (
    <section id="case-studies" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-20">
          {detailedCaseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div key={study.id} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 lg:h-full lg:min-h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="w-6 h-6" />
                        <span className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-6 flex flex-col justify-center">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-warm-900 mb-3 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-base sm:text-lg text-warm-600 font-medium mb-6 leading-relaxed">
                      {study.subtitle}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-warm-900 mb-3">The Challenge</h4>
                      <p className="text-warm-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-warm-900 mb-3">Our Solution</h4>
                      <p className="text-warm-700 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-warm-900 mb-3">Key Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-warm-700 leading-relaxed">
                            <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>


                  </div>

                  <div className="pt-4">
                    <Button
                      variant="cta"
                      onClick={() => window.location.href = `/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-white to-warm-50 rounded-2xl shadow-soft border border-warm-200/50 p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-warm-900 mb-4">
              Ready to Solve Your Complex Business Challenge?
            </h3>
            <p className="text-warm-600 mb-6 leading-relaxed">
              These case studies represent just a fraction of what's possible when you combine domain expertise with cutting-edge AI and data science techniques.
            </p>
            <Button 
              variant="cta"
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center gap-2"
            >
              Discuss Your Project
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 