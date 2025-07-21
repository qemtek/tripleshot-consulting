import React from 'react';
import CaseStudies from '../components/CaseStudies';

export default function ArticlesPage() {
  return (
    <main className="pt-16">
      <div className="bg-gradient-to-b from-warm-50 to-white py-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6">
              Articles & Insights
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends in technology, business optimization, and digital transformation.
            </p>
          </div>
        </div>
      </div>
      
      <CaseStudies />
    </main>
  );
}