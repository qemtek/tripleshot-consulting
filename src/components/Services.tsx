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
      description: 'Save time and reduce paperwork by digitizing your core business processes.',
      features: [
        'Replace paper forms with digital workflows',
        'Automate repetitive tasks',
        'Automate invoices, follow-ups, stock level alerts, etc.'
      ],
      icon: <FiLayers className="w-6 h-6" />,
      phase: 'Phase 1: Getting Digital'
    },
    {
      title: 'Digital Branding',
      description: 'Establish a professional online presence that attracts and engages customers.',
      features: [
        'Develop a modern, responsive website',
        'Create consistent branding across platforms',
        'Integrate your website with CRM systems'
      ],
      icon: <FiGlobe className="w-6 h-6" />,
      phase: 'Phase 1: Getting Digital'
    },
    {
      title: 'Online Marketing',
      description: 'Get in front of your ideal customers at the right time.',
      features: [
        'Analyze customer behavior and preferences',
        'Track key performance indicators',
        'Identify the marketing channels that work best for your business'
      ],
      icon: <FiTrendingUp className="w-6 h-6" />,
      phase: 'Phase 1: Getting Digital'
    },
    {
      title: 'Analytics',
      description: 'Gain insights from your business data to make better decisions.',
      features: [
        'Set up dashboards to track key metrics',
        'Analyze trends and patterns in your data',
        'Create interactive dashboards for real-time monitoring'
      ],
      icon: <FiBarChart2 className="w-6 h-6" />,
      phase: 'Phase 2: Unlocking Value'
    },
    {
      title: 'Customer Base Analysis',
      description: 'Understand your customers better to increase sales and retention.',
      features: [
        'Segment customers based on behavior',
        'Track customer journey and touchpoints',
        'Learn how to appeal to each customer segment'
      ],
      icon: <FiUsers className="w-6 h-6" />,
      phase: 'Phase 2: Unlocking Value'
    },
    {
      title: 'Generative AI',
      description: 'Leverage AI to enhance communication and engagement with your customers.',
      features: [
        'Implement AI-powered chatbots',
        'Create personalized marketing campaigns',
        'Create emails, social media posts, brochures, FAQs'
      ],
      icon: <FiCpu className="w-6 h-6" />,
      phase: 'Phase 2: Unlocking Value'
    },
    {
      title: 'Predictive Modelling',
      description: 'Use advanced analytics to predict future outcomes and behaviors.',
      features: [
        'Churn - Predict which customers are likely to leave',
        'Cross-sell - Predict which products customers will buy next',
        'Lifetime Value - Predict which customers will spend the most'
      ],
      icon: <FiActivity className="w-6 h-6" />,
      phase: 'Phase 3: Getting Ahead'
    },
    {
      title: 'Optimisation',
      description: 'Optimize your business processes and resource allocation.',
      features: [
        'Optimize inventory levels to minimize costs',
        'Route optimization for delivery and service teams',
        'Find prices that balance sales volume and profit margins'
      ],
      icon: <FiZap className="w-6 h-6" />,
      phase: 'Phase 3: Getting Ahead'
    },
    {
      title: 'Forecasting',
      description: 'Predict future trends and demand to stay ahead of the market.',
      features: [
        'Forecast sales and demand for better inventory management',
        'Predict seasonal trends and plan accordingly',
        'Predict when a customer will need a new product'
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
                src="/images/logo_white.png" 
                alt="Tripleshot Logo" 
                className="h-12" 
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brown-500 mb-6">
            How We Can Help
          </h2>
          <p className="text-lg text-brown-500 max-w-3xl mx-auto mb-12">
            Here are some examples of the types of projects we work on at each phase of your digital journey. Click the buttons to learn more about each project.
          </p>
        </div>

        {/* Main Content Area - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Service Buttons - Left Column */}
          <div className="lg:w-1/2">
            <div className="sticky top-8 space-y-4">
              {['Phase 1: Getting Digital', 'Phase 2: Unlocking Value', 'Phase 3: Getting Ahead'].map((phase) => (
                <div key={phase} className="flex gap-2">
                  {services.filter(s => s.phase === phase).map((service) => {
                    const index = services.findIndex(s => s.title === service.title);
                    const isSelected = selectedService === index;
                    const color = phaseColors[phase];
                    return (
                      <button
                        key={service.title}
                        onClick={() => setSelectedService(index)}
                        className={`flex items-center p-2.5 rounded-full transition-all duration-300 hover:scale-[1.03] cursor-pointer text-left ${isSelected ? 'shadow-md' : 'shadow-sm'}`}
                        style={{
                          border: `2px solid ${color}80`,
                          backgroundColor: isSelected ? `${color}10` : 'transparent',
                        }}
                      >
                        <>
                          {service.icon}
                          <span className="ml-2 text-brown-500">{service.title}</span>
                        </>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Service Details Panel - Right Column */}
          <div className="lg:w-1/2">
            <div 
              key={`service-panel-${selectedService}`}
              className="rounded-3xl shadow-md p-6 mb-8 transition-all duration-300 w-full bg-white"
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
                  <h3 className="text-3xl font-bold text-brown-500 mb-2">{currentService.title}</h3>
                  <p className="text-brown-500 opacity-70 text-lg">{currentService.phase}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/5">
                  <h4 className="text-lg font-semibold text-brown-500 mb-4">Introduction:</h4>
                  <p className="text-gray-600 max-w-prose">{currentService.description}</p>
                </div>
                
                <div className="md:w-3/5">
                  <h4 className="text-lg font-semibold text-brown-500 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {currentService.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span 
                          className="inline-flex items-center justify-center h-5 w-5 rounded-full mr-3 mt-0.5 flex-shrink-0" 
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
                        <span className="text-brown-500">{feature}</span>
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