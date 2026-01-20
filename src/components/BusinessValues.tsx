import React from 'react';
import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function BusinessValues() {
  const quoteAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern - using radial gradients instead of blur for performance */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-32 h-32"
          style={{ background: 'radial-gradient(circle, var(--color-brand-secondary, #10B981) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-10 right-10 w-40 h-40"
          style={{ background: 'radial-gradient(circle, var(--color-brand-primary, #00D4FF) 0%, transparent 70%)' }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Personal statement section */}
        <div 
          ref={quoteAnimation.elementRef}
          className={`relative mb-16 transition-all duration-700 ${
            quoteAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <Card variant="bordered" className="bg-gradient-to-r from-brand-primary/5 via-white to-brand-accent/5 border-brand-primary/20">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 bg-brand-green rounded-full border-4 border-white shadow-medium"></div>
                  <div className="w-12 h-12 bg-brand-orange rounded-full border-4 border-white shadow-medium"></div>
                  <div className="w-12 h-12 bg-brand-secondary rounded-full border-4 border-white shadow-medium"></div>
                  <div className="w-12 h-12 bg-brand-logo rounded-full border-4 border-white shadow-medium flex items-center justify-center">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-warm-700 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                "Our combined industry experience means your business is always in safe hands. 
                We don't just deliver solutions – we build lasting partnerships that drive sustainable growth."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}