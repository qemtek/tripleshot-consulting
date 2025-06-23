import React, { useState } from 'react';
import { 
  FiGlobe, 
  FiTrendingUp, 
  FiUsers, 
  FiCpu,
  FiLayers,
  FiBarChart2,
  FiActivity,
  FiZap,
} from 'react-icons/fi';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  phase: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number>(0); // Default to first service

  // Phase colors
  const phaseColors: Record<string, string> = {
    'Phase 1: Getting Digital': '#2465B4', // Blue
    'Phase 2: Unlocking Value': '#CB1789', // Magenta
    'Phase 3: Getting Ahead': '#F39D2D'  // Orange
  };

  // Brown color for icons
  const brownColor = '#3E2415';
  // Beige color for backgrounds
  const beigeColor = 'rgba(217, 196, 173, 0.5)';

  const services: Service[] = [
    {
      title: 'Workflow Automation',
      description: 'Transform your business operations by digitizing processes and eliminating manual work.',
      features: [
        'Process digitization and documentation',
        'Task automation and approval workflows',
        'Data migration from spreadsheets/paper systems',
        'Integration between different software tools',
        'Standard operating procedure creation',
        'Employee onboarding and training systems'
      ],
      icon: <FiLayers className="w-6 h-6" />,
      phase: 'Phase 1: Getting Digital'
    },
    {
      title: 'Digital Branding',
      description: 'Build a cohesive digital presence that reflects your business values and attracts ideal customers.',
      features: [
        'Brand identity and visual design systems',
        'Website development and optimization',
        'Social media presence establishment',
        'Digital asset management and consistency',
        'Online reputation setup and monitoring',
        'E-commerce platform development'
      ],
      icon: <FiGlobe className="w-6 h-6" />,
      phase: 'Phase 1: Getting Digital'
    },
    {
      title: 'Online Marketing',
      description: 'Create marketing systems that consistently generate qualified leads and grow your customer base.',
      features: [
        'Social media strategy and management',
        'Content marketing and SEO',
        'Email marketing automation',
        'Pay-per-click advertising management',
        'Marketing funnel optimization',
        'Lead generation and nurturing systems'
      ],
      icon: <FiTrendingUp className="w-6 h-6" />,
      phase: 'Phase 1: Getting Digital'
    },
    {
      title: 'Analytics',
      description: 'Transform your data into actionable insights that drive better business decisions.',
      features: [
        'Business intelligence dashboards',
        'Financial performance tracking',
        'Operational efficiency metrics',
        'Website and marketing analytics',
        'Employee productivity analysis',
        'Key performance indicator (KPI) frameworks'
      ],
      icon: <FiBarChart2 className="w-6 h-6" />,
      phase: 'Phase 2: Unlocking Value'
    },
    {
      title: 'Customer Base Analysis',
      description: 'Understand your customers deeply to improve retention, increase sales, and identify new opportunities.',
      features: [
        'Customer segmentation and profiling',
        'Buying behavior pattern analysis',
        'Customer lifetime value calculation',
        'Churn prediction and retention strategies',
        'Market research and surveys',
        'Competitive positioning analysis'
      ],
      icon: <FiUsers className="w-6 h-6" />,
      phase: 'Phase 2: Unlocking Value'
    },
    {
      title: 'Generative AI',
      description: 'Leverage AI to automate content creation and enhance customer interactions.',
      features: [
        'Content creation automation',
        'Customer service chatbots',
        'Personalized marketing materials',
        'Automated report generation',
        'Product description and copy writing',
        'Training material development'
      ],
      icon: <FiCpu className="w-6 h-6" />,
      phase: 'Phase 2: Unlocking Value'
    },
    {
      title: 'Predictive Modelling',
      description: 'Use advanced analytics to predict future outcomes and make data-driven strategic decisions.',
      features: [
        'Sales forecasting models',
        'Market trend analysis',
        'Risk assessment frameworks',
        'Customer behavior prediction',
        'Resource planning optimization',
        'Scenario planning and stress testing'
      ],
      icon: <FiActivity className="w-6 h-6" />,
      phase: 'Phase 3: Getting Ahead'
    },
    {
      title: 'Optimisation',
      description: 'Maximize efficiency and profitability across all aspects of your business operations.',
      features: [
        'Supply chain and inventory management',
        'Pricing strategy optimization',
        'Resource allocation improvement',
        'Process efficiency enhancement',
        'Cost reduction identification',
        'Performance bottleneck elimination'
      ],
      icon: <FiZap className="w-6 h-6" />,
      phase: 'Phase 3: Getting Ahead'
    },
    {
      title: 'Forecasting',
      description: 'Predict future trends and demands to stay ahead of market changes and plan strategically.',
      features: [
        'Financial planning and budgeting',
        'Demand forecasting',
        'Market expansion planning',
        'Cash flow prediction',
        'Seasonal trend analysis',
        'Strategic planning support'
      ],
      icon: <FiTrendingUp className="w-6 h-6" />,
      phase: 'Phase 3: Getting Ahead'
    },
  ];

  // Get the currently selected service
  const currentService = services[selectedService];
  const currentColor = phaseColors[currentService.phase];

  return (
    <section id="services" className="py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-white shadow-sm p-3">
              <img 
                src="/images/logo-no-background.png" 
                alt="Tripleshot Logo" 
                className="h-12" 
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-500 mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-brown-500 max-w-3xl mx-auto mb-12 leading-relaxed">
            Here are some examples of the types of projects we work on at each phase of your digital journey. Click the buttons to learn more about each project.
          </p>
        </div>

        {/* Main Content Area - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Service Buttons - Left Column */}
          <div className="lg:w-1/2">
            <div className="sticky top-8 space-y-6">
              {['Phase 1: Getting Digital', 'Phase 2: Unlocking Value', 'Phase 3: Getting Ahead'].map((phase) => (
                <div key={phase} className="space-y-3">
                  <h3 className="text-lg font-semibold text-brown-500 mb-3">{phase}</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {services.filter(s => s.phase === phase).map((service) => {
                      const index = services.findIndex(s => s.title === service.title);
                      const isSelected = selectedService === index;
                      const color = phaseColors[phase];
                      return (
                        <button
                          key={service.title}
                          onClick={() => setSelectedService(index)}
                          className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer text-left min-h-[56px] ${isSelected ? 'shadow-lg' : 'shadow-sm'}`}
                          style={{
                            border: `2px solid ${color}80`,
                            backgroundColor: isSelected ? `${color}15` : 'white',
                          }}
                        >
                          <>
                            <div className="flex-shrink-0 mr-3">
                              {service.icon}
                            </div>
                            <span className="text-brown-500 font-medium text-sm sm:text-base">{service.title}</span>
                          </>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Details Panel - Right Column */}
          <div className="lg:w-1/2">
            <div 
              key={`service-panel-${selectedService}`}
              className="rounded-3xl shadow-lg p-6 sm:p-8 mb-8 transition-all duration-300 w-full bg-white"
              style={{ 
                border: `2px solid ${currentColor}80`
              }}
            >
              <div className="relative mb-8">
                <div className="absolute right-0 top-0">
                  <div 
                    className="p-3 rounded-full" 
                    style={{ 
                      backgroundColor: beigeColor
                    }}
                  >
                    <div style={{ color: brownColor }}>
                      {currentService.icon}
                    </div>
                  </div>
                </div>
                
                <div className="pr-16">
                  <h3 className="text-2xl sm:text-3xl font-bold text-brown-500 mb-2 leading-tight">{currentService.title}</h3>
                  <p className="text-brown-500 opacity-70 text-base sm:text-lg">{currentService.phase}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-brown-500 mb-4">Introduction:</h4>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{currentService.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-brown-500 mb-4">Key Features:</h4>
                  <ul className="space-y-4">
                    {currentService.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span 
                          className="inline-flex items-center justify-center h-6 w-6 rounded-full mr-4 mt-0.5 flex-shrink-0" 
                          style={{ 
                            backgroundColor: beigeColor
                          }}
                        >
                          <svg 
                            className="h-3 w-3" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            style={{ color: brownColor }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-brown-500 text-base sm:text-lg leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;