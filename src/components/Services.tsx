import React from 'react';
import { MessageSquare, TrendingUp, DollarSign, Search, GraduationCap, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Customer Service & Support AI',
      description: 'Automate customer support with smart chatbots, handle FAQs, and schedule appointments effortlessly.',
      features: ['24/7 Customer Support', 'Appointment Scheduling', 'Sentiment Analysis'],
    },
    {
      icon: TrendingUp,
      title: 'Marketing & Sales AI',
      description: 'Boost your marketing efforts with AI-powered automation and personalized campaigns.',
      features: ['Email Automation', 'Social Media Management', 'Lead Generation'],
    },
    {
      icon: DollarSign,
      title: 'AI Driven Pricing',
      description: 'Optimize your pricing strategy with real-time market analysis and demand-based adjustments.',
      features: ['Dynamic Pricing', 'Competitor Analysis', 'Revenue Optimization'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Enhance your online visibility with AI-powered SEO tools and content optimization.',
      features: ['Keyword Analysis', 'Content Optimization', 'Ranking Improvement'],
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Insights',
      description: 'Transform your raw data into actionable insights with AI-powered analytics.',
      features: ['Business Intelligence', 'Predictive Analytics', 'Custom Reporting'],
    },
    {
      icon: GraduationCap,
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
            Comprehensive AI solutions designed specifically for small businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full mr-2" />
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