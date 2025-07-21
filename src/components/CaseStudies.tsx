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
    <section id="articles" className="py-16 bg-gradient-to-b from-white via-warm-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-soft rounded-full p-2 hover:bg-warm-100 transition-all duration-200 hover:scale-110"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-6 h-6 text-warm-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-soft rounded-full p-2 hover:bg-warm-100 transition-all duration-200 hover:scale-110"
              aria-label="Next case study"
            >
              <ChevronRight className="w-6 h-6 text-warm-700" />
            </button>
            

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