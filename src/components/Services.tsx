/** @jsx React.createElement */
import React from 'react';
import { FiUsers, FiBarChart2, FiDollarSign, FiSettings, FiDatabase, FiBook } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: 'Customer Service & Support',
      description: 'Streamline customer support, handle FAQs, and schedule appointments effortlessly with the right tools.',
      features: ['24/7 Customer Support', 'Appointment Scheduling', 'Customer Feedback Analysis'],
      icon: <FiUsers className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Marketing & Sales',
      description: 'Boost your marketing efforts with practical automation and personalized campaigns that get results.',
      features: ['Email Automation', 'Social Media Management', 'Lead Generation'],
      icon: <FiBarChart2 className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Financial Management',
      description: 'Take control of your business finances with clear visibility and better decision-making tools.',
      features: ['Financial Clarity', 'Cash Flow Management', 'Revenue Optimization'],
      icon: <FiDollarSign className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Business Operations',
      description: 'Streamline day-to-day operations to save time and reduce errors in your business processes.',
      features: ['Process Automation', 'Resource Optimization', 'Workflow Improvement'],
      icon: <FiSettings className="w-8 h-8 text-orange-500" />,
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Data Analysis & Insights',
      description: 'Transform your raw data into actionable insights with practical analytics tools.',
      features: ['Business Intelligence', 'Performance Tracking', 'Custom Reporting'],
      icon: <FiDatabase className="w-8 h-8 text-indigo-500" />,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Technology Skills Training',
      description: 'Learn how to leverage modern technology tools with our comprehensive training programs.',
      features: ['Video Tutorials', 'Live Workshops', 'Resource Library'],
      icon: <FiBook className="w-8 h-8 text-red-500" />,
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Solutions That Drive Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical solutions designed to help your business grow and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.color} mr-2`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;