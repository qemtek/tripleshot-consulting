import React from 'react';
import DetailedCaseStudies from '../components/DetailedCaseStudies';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage() {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-warm-50 to-white py-16 relative overflow-hidden">
        {/* Background elements - using radial gradients instead of blur for performance */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute top-10 left-1/4 w-64 h-64"
            style={{ background: 'radial-gradient(circle, var(--color-brand-primary, #00D4FF) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-10 right-1/4 w-80 h-80"
            style={{ background: 'radial-gradient(circle, var(--color-brand-accent, #8B5CF6) 0%, transparent 70%)' }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
              Case Studies
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
              Explore our success stories and see how we've helped businesses transform their operations through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
      
      <DetailedCaseStudies />
    </main>
  );
}