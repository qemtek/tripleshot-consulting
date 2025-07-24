import React from 'react';
import { Users, Target, Heart, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhoWeAre() {
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const featuresAnimation = useStaggeredScrollAnimation(3, { threshold: 0.2 });
  const statsAnimation = useStaggeredScrollAnimation(4, { threshold: 0.3 });

  const features = [
    {
      icon: Users,
      description: "we're a small group of professionals (and friends) with decades of combined experience in high performing businesses.",
      gradient: "from-brand-primary to-blue-600"
    },
    {
      icon: Target,
      description: "We're experts in modern technology, and use this expertise to supercharge businesses in industries far and wide, from freight to football.",
      gradient: "from-brand-accent to-orange-600"
    },
    {
      icon: Heart,
      description: "We provide continuous training and assistance, ensuring businesses have the tools they need to thrive in today's competitive environment.",
      gradient: "from-brand-secondary to-purple-600"
    }
  ];

  return (
    <section id="who-we-are" className="py-24 bg-gradient-to-b from-warm-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-accent rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
            Who We Are
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-brand-accent to-brand-primary mx-auto mb-8 rounded-full"></div>
          
        </div>
        
        <div 
          ref={featuresAnimation.elementRef}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <Card 
              key={index} 
              hover
              className={`group border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 ${
                featuresAnimation.visibleItems.has(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
              }`}
              variant="elevated"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-medium`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <p className="text-warm-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats row - showing personal approach */}
        <div 
          ref={statsAnimation.elementRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Personal Approach", value: "1:1", subtitle: "Client Relationships" },
            { label: "Industry Experience", value: "35+", subtitle: "Years Combined" },
            { label: "Success Rate", value: "100%", subtitle: "Client Satisfaction" },
            { label: "Partnership Duration", value: "2+", subtitle: "Years Average" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-warm-200/50 transition-all duration-500 ${
                statsAnimation.visibleItems.has(index)
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-warm-700">{stat.label}</div>
              <div className="text-xs text-warm-500">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}