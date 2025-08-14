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
      title: "small group of professionals",
      description: "We're a small group of professionals with decades of combined experience in high-performing businesses.",
      bgColor: "from-white to-white"
    },
    {
      title: "serious positive impact",
      description: "Being a small team, we only take on clients if we think we can create a serious positive impact on their performance.",
      bgColor: "from-white to-white"
    },
    {
      title: "continuous training and support",
      description: "We provide continuous training and assistance, ensuring businesses have the tools they need to thrive in today's competitive environment.",
      bgColor: "from-white to-white"
    }
  ];

  return (
    <section id="who-we-are" className="py-24 bg-white relative overflow-hidden">
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-logo rounded-full mb-8 relative">
            <Users className="h-10 w-10 text-white" />
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
              <CardContent className={`p-8 bg-gradient-to-br ${feature.bgColor} h-full flex flex-col justify-center`}>
                <h3 className={`font-jakarta text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[0.9] tracking-normal lowercase text-left ${
                  index === 0 ? 'text-brand-green' : 
                  index === 1 ? 'text-brand-orange' : 
                  'text-brand-secondary'
                }`}>
                  {index === 0 ? (
                    <>
                      small<br />
                      group of<br />
                      professionals
                    </>
                  ) : (
                    feature.title
                  )}
                </h3>
                
                <p className="text-warm-600 leading-relaxed text-left">
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
            <Card 
              key={index} 
              hover
              className={`group border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 ${
                statsAnimation.visibleItems.has(index)
                  ? 'opacity-100 transform translate-y-0 scale-100'
                  : 'opacity-0 transform translate-y-4 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              variant="elevated"
            >
              <CardContent className="text-center p-6 bg-gradient-to-br from-white to-white h-full">
                <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-warm-700">{stat.label}</div>
                <div className="text-xs text-warm-500">{stat.subtitle}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}