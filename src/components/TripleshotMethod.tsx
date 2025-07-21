import React, { useState } from 'react';
import { Database, Megaphone, Zap, CheckCircle, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export default function TripleshotMethod() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Lay your Digital Foundations",
      icon: Database,
      description: "Get your business organized with modern digital tools",
      items: [
        "Digitise records and eliminate paperwork",
        "Automate manual processes like quote generation and invoicing to save 15+ hours/week", 
        "Build dashboards to track what matters most"
      ],
      color: "from-brand-primary to-blue-600",
      bgColor: "from-brand-primary/5 to-blue-50"
    },
    {
      id: 1,
      title: "Build your Lead Magnet",
      icon: Megaphone,
      description: "Turn your marketing from money pit into lead generation machine",
      items: [
        "Create a website and brand that actually draws customers in",
        "Build an authentic presence on the platforms that matter",
        "Maximize search rankings and optimize every marketing dollar"
      ],
      color: "from-brand-secondary to-purple-600",
      bgColor: "from-brand-secondary/5 to-purple-50"
    },
    {
      id: 2,
      title: "Supercharge Performance", 
      icon: Zap,
      description: "Use AI and analytics to scale without the growing pains",
      items: [
        "AI-powered pricing to maximize every sale",
        "Predict customer behavior before they do",
        "Forecast growth and plan ahead with confidence",
        "Automate support so your team focuses on growth",
        "Optimize operations for maximum efficiency"
      ],
      color: "from-brand-accent to-orange-600",
      bgColor: "from-brand-accent/5 to-orange-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-warm-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl mb-8 relative">
            <Sparkles className="h-10 w-10 text-white" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-brand-accent rounded-full animate-ping"></div>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
            The Tripleshot Method
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-warm-600 max-w-4xl mx-auto leading-relaxed">
            Our proven three-step approach that turns technology overwhelm into competitive advantage
          </p>
        </div>


        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <Card key={step.id} hover className="group relative h-full">
                <CardContent className={`p-8 bg-gradient-to-br ${step.bgColor} h-full`}>
                  
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium mb-4`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-warm-900 mb-4 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-warm-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start group/item">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/20 flex items-center justify-center mr-3 mt-0.5">
                          <CheckCircle className="h-3 w-3 text-brand-success" />
                        </div>
                        <span className="text-warm-700 leading-relaxed text-sm group-hover/item:text-warm-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Interactive */}
        <div className="lg:hidden">
          <div className="flex justify-center mb-8 px-4">
            <div className="flex space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-warm-200 w-full max-w-sm">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  aria-label={`View step ${step.number}: ${step.title}`}
                  className={`relative flex-1 h-12 sm:h-14 rounded-xl flex items-center justify-center font-bold transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white shadow-medium transform scale-105`
                      : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                  }`}
                >
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  {activeStep === index && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-brand-accent rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <Card variant="elevated" className={`bg-gradient-to-br ${steps[activeStep].bgColor} animate-fade-in`}>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center mr-4`}>
                  {React.createElement(steps[activeStep].icon, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-warm-900">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>
              
              <p className="text-warm-600 mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>
              
              <ul className="space-y-3">
                {steps[activeStep].items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-success/20 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-brand-success" />
                    </div>
                    <span className="text-warm-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}