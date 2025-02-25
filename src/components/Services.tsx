import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Customer Service & Support',
      description: 'Streamline customer support, handle FAQs, and schedule appointments effortlessly with the right tools.',
      features: ['24/7 Customer Support', 'Appointment Scheduling', 'Customer Feedback Analysis'],
    },
    {
      title: 'Marketing & Sales',
      description: 'Boost your marketing efforts with practical automation and personalized campaigns that get results.',
      features: ['Email Automation', 'Social Media Management', 'Lead Generation'],
    },
    {
      title: 'Financial Management',
      description: 'Take control of your business finances with clear visibility and better decision-making tools.',
      features: ['Financial Clarity', 'Cash Flow Management', 'Revenue Optimization'],
    },
    {
      title: 'Business Operations',
      description: 'Streamline day-to-day operations to save time and reduce errors in your business processes.',
      features: ['Process Automation', 'Resource Optimization', 'Workflow Improvement'],
    },
    {
      title: 'Data Analysis & Insights',
      description: 'Transform your raw data into actionable insights with practical analytics tools.',
      features: ['Business Intelligence', 'Performance Tracking', 'Custom Reporting'],
    },
    {
      title: 'Technology Skills Training',
      description: 'Learn how to leverage modern technology tools with our comprehensive training programs.',
      features: ['Video Tutorials', 'Live Workshops', 'Resource Library'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical solutions designed to help your business grow and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;