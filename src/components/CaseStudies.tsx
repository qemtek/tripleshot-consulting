import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CaseStudyCard } from './case-studies/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
import type { CaseStudy } from '../types/CaseStudy';

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section id="our-approach-in-action" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-white shadow-sm p-3">
                <img 
                  src="/images/logo-no-background.png" 
                  alt="Tripleshot Logo" 
                  className="h-12" 
                />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brown-500 mb-4">
              White Papers
            </h2>
          </div>
          
          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {caseStudies.map((study: CaseStudy) => (
                  <div key={study.id} className="w-full flex-shrink-0 px-4">
                    <CaseStudyCard study={study} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6 text-brown-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6 text-brown-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brown-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study: CaseStudy) => (
              <div key={study.id}>
                <CaseStudyCard study={study} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}