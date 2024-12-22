import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize AI technology by making it accessible, affordable, and actionable for small businesses worldwide.',
    },
    {
      icon: Users,
      title: 'Our Approach',
      description: 'We combine cutting-edge AI with human expertise to deliver solutions that are practical, scalable, and easy to implement.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'A future where every small business can harness the power of AI to compete effectively in the digital economy.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-block p-4 bg-indigo-50 rounded-full mb-6">
                <value.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;