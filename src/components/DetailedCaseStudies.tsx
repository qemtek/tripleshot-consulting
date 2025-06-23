import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Truck, DollarSign, Users } from 'lucide-react';

interface DetailedCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  client: string;
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
    subtitle: 'Scaling from 1K to 50K Weekly Deliveries with AI-Powered Route Optimization',
    industry: 'Logistics & Transportation',
    client: 'London-Based Logistics Startup',
    challenge: 'Manual route planning was consuming 3-4 hours daily and couldn\'t scale beyond 1,000 deliveries per week. The operations team was becoming a bottleneck as the business grew exponentially.',
    solution: 'Built an intelligent route optimization system using Google OR-Tools, handling 100K+ delivery nodes with real-time adaptation. Implemented hexagon-based location clustering, self-hosted routing APIs, and divide-and-conquer algorithms for massive scale.',
    results: [
      'Scaled from 1K to 50K weekly bookings with no team expansion',
      'Reduced route planning time from 4 hours to 5 minutes daily',
      'Achieved 90%+ reduction in manual intervention (100% to ~10%)',
      'Enabled real-time route adaptation for changing conditions',
      'Reduced operational costs by 35% through optimization'
    ],
    technologies: ['Python', 'Google OR-Tools', 'Docker', 'AWS ECS', 'GraphHopper', 'Uber H3'],
    icon: Truck,
    image: '/images/case-studies/smart-routing.png'
  },
  {
    id: 'dynamic-pricing-ai',
    title: 'AI-Driven Dynamic Pricing',
    subtitle: 'Increasing Profit Margins by 20% Through Machine Learning Price Optimization',
    industry: 'Pricing Strategy',
    client: 'Comparison Platform for Moving Services',
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
    industry: 'Customer Retention',
    client: 'SaaS Platform with High Churn Risk',
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
    <section id="case-studies" className="py-40 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-white shadow-sm p-3">
              <img 
                src="/images/logo_white.png" 
                alt="Tripleshot Logo" 
                className="h-12" 
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brown-500 mb-6">
            Technical Case Studies
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            Deep dives into real-world AI and data science solutions that delivered measurable business impact
          </p>
        </div>

        <div className="space-y-20">
          {detailedCaseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div key={study.id} className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-80 object-cover"
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

                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-brown-500 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-lg text-brown-600 font-medium mb-4">
                      {study.subtitle}
                    </p>
                    <div className="text-sm text-gray-600 mb-6">
                      <span className="font-medium">Client:</span> {study.client}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-brown-500 mb-2">The Challenge</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brown-500 mb-2">Our Solution</h4>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brown-500 mb-2">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-tan-500 rounded-full mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brown-500 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-brown-100 text-brown-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 bg-brown-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brown-600 transition-colors duration-300"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brown-500 mb-4">
              Ready to Solve Your Complex Business Challenge?
            </h3>
            <p className="text-gray-600 mb-6">
              These case studies represent just a fraction of what's possible when you combine domain expertise with cutting-edge AI and data science techniques.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-tan-500 text-brown-700 px-8 py-4 rounded-lg font-semibold hover:bg-tan-600 transition-colors duration-300"
            >
              Discuss Your Project
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 