import React, { useState } from 'react';
import { Database, Megaphone, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function TripleshotMethod() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      number: "01",
      title: "Lay your Digital Foundations",
      icon: Database,
      description: "Establish the core infrastructure for digital transformation",
      items: [
        "Digitise records",
        "Automate manual processes", 
        "Build dashboards to track key performance indicators"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 1,
      number: "02", 
      title: "Build your Lead Magnet",
      icon: Megaphone,
      description: "Create compelling brand presence and customer attraction",
      items: [
        "Focus on building a solid brand identity and website that draws customers in",
        "Build a brand presence on social media platforms",
        "Maximise search engine ranking (SEO) and optimise your marketing spend"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      number: "03",
      title: "Supercharge Performance", 
      icon: Zap,
      description: "Leverage AI and advanced analytics for exponential growth",
      items: [
        "Use AI to optimise prices",
        "Predict customer behaviour",
        "Forecast future growth",
        "Automate support with chat bots",
        "Optimise logistical networks"
      ],
      color: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Tripleshot Method
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven three-step approach to digital transformation and business growth
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className="group relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Step number */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {step.number}
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Connecting arrow */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white`
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center mr-4`}>
                {React.createElement(steps[activeStep].icon, { className: "h-6 w-6 text-white" })}
              </div>
              <div>
                <div className="text-sm text-gray-500">Step {steps[activeStep].number}</div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {steps[activeStep].title}
                </h3>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              {steps[activeStep].description}
            </p>
            
            <ul className="space-y-3">
              {steps[activeStep].items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}