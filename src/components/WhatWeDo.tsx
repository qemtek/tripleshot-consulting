import React from 'react';
import { Brain, Palette, TrendingUp, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhatWeDo() {
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.2 });

  const services = [
    {
      icon: Brain,
      title: "AI & Data Science",
      description: "Custom machine learning systems, predictive analytics, and data-driven insights that turn your business data into competitive advantage.",
      bgClass: "bg-brand-green",
      bgColor: "from-white to-white"
    },
    {
      icon: TrendingUp,
      title: "Marketing & SEO",
      description: "Strategic digital marketing that generates qualified leads and improves search rankings. Turn your marketing budget into predictable growth.",
      bgClass: "bg-brand-orange",
      bgColor: "from-white to-white"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Scalable systems and custom applications that actually work. From APIs to full platforms, built for performance and reliability.",
      bgClass: "bg-brand-secondary",
      bgColor: "from-white to-white"
    },
    {
      icon: Palette,
      title: "Branding & Web Design",
      description: "Professional websites and visual identities that customers actually remember. From logos to full digital experiences.",
      bgClass: "bg-brand-logo", 
      bgColor: "from-white to-white"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerAnimation.elementRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-logo rounded-full mb-8 relative">
            <Code className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
            What We Do
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-primary mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
            We deliver practical solutions across four key areas
          </p>
        </div>

        <div 
          ref={servicesAnimation.elementRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <Card 
              key={index} 
              hover
              className={`group border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 ${
                servicesAnimation.isVisible
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              variant="elevated"
            >
              <CardContent className={`p-8 text-center bg-gradient-to-br ${service.bgColor} h-full`}>
                <div className="mb-8">
                  <div className={`w-20 h-20 ${service.bgClass} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-medium`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold text-warm-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-warm-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}