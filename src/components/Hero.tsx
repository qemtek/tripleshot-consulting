import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            AI Solutions for{' '}
            <span className="text-indigo-600">Small Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Empower your business with affordable AI tools for customer service,
            marketing, and analytics. No technical expertise required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 transition-colors text-lg">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;