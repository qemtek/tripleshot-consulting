/** @jsx React.createElement */
import React from 'react';

interface Step {
  icon: string;
  title: string;
  description: string;
}

const Mission = () => {
  const steps: Step[] = [
    {
      icon: '☕',
      title: 'Discover',
      description: 'We take the time to understand how your business works, what slows you down, and where you\'re leaving value on the table. No tech talk—just real conversations about what matters to you.'
    },
    {
      icon: '☕',
      title: 'Design',
      description: 'Once we know what\'s needed, we design simple, practical solutions—often using AI or automation behind the scenes. Everything is built around your workflow, not the other way around.'
    },
    {
      icon: '☕',
      title: 'Deliver',
      description: 'We don\'t just hand you a report and disappear. We put the tools in your hands, train your team, and support you until it sticks. When you win, we win.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Tripleshot Method
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{step.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;