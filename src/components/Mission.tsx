import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Phase {
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phases: Phase[] = [
    {
      title: 'Phase 1\nGetting Digital',
      description: 'We lay the groundwork by replacing paper and oversized spreadsheets with digital tools. This includes setting up data infrastructure and defining your online brand presence.',
      color: '#2465B4', // Blue
      bgColor: 'rgba(36, 101, 180, 0.1)' // Light blue background
    },
    {
      title: 'Phase 2\nUnlocking Value',
      description: 'Once you\'re set up, we help you get real value from your digital tools — using analytics and AI to understand your customers better and improve how you work.',
      color: '#CB1789', // Magenta
      bgColor: 'rgba(203, 23, 137, 0.1)' // Light magenta background
    },
    {
      title: 'Phase 3\nGetting Ahead',
      description: 'With the right data and processes in place, we bring in advanced tools to help you spot opportunities, plan ahead, and stay one step ahead of the competition.',
      color: '#F39D2D', // Orange
      bgColor: 'rgba(243, 157, 45, 0.1)' // Light orange background
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % phases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + phases.length) % phases.length);
  };

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-white shadow-sm p-3">
                          <img 
              src="/images/logo-no-background.png" 
              alt="Tripleshot Logo" 
              className="h-12" 
            />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brown-500 mb-6">
            The Tripleshot Method
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our proven three-phase approach helps businesses transform digitally at their own pace. 
            Each phase builds on the previous one, creating sustainable growth.
          </p>
        </div>
        {/* Mobile Carousel */}
        <div className="md:hidden relative mt-20">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {phases.map((phase, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="rounded-xl shadow-sm overflow-hidden h-full relative">
                    {/* Semi-transparent background */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        backgroundColor: phase.bgColor,
                        opacity: 0.5
                      }}
                    ></div>
                    
                    {/* Content with full opacity */}
                    <div className="px-6 py-8 h-full flex flex-col relative z-10">
                      <div className="flex items-start mb-6">
                        <div 
                          className="mr-3 flex-shrink-0 p-2 rounded-full" 
                          style={{ backgroundColor: phase.bgColor }}
                        >
                          <img 
                            src="/images/coffee-cup.png" 
                            alt="Coffee Cup" 
                            className="h-10 w-10 object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-brown-500 pt-1">
                          <span className="font-normal text-base whitespace-pre-line">{phase.title.split('\n')[0]}</span>
                          <br />
                          {phase.title.split('\n')[1]}
                        </h3>
                      </div>
                      <p>{phase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Previous phase"
          >
            <ChevronLeft className="w-6 h-6 text-brown-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            aria-label="Next phase"
          >
            <ChevronRight className="w-6 h-6 text-brown-600" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brown-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to phase ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-7xl mx-auto">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="rounded-xl shadow-sm overflow-hidden h-full relative"
            >
              {/* Semi-transparent background */}
              <div 
                className="absolute inset-0"
                style={{ 
                  backgroundColor: phase.bgColor,
                  opacity: 0.5
                }}
              ></div>
              
              {/* Content with full opacity */}
              <div className="px-6 py-8 h-full flex flex-col relative z-10">
                <div className="flex items-start mb-6">
                  <div 
                    className="mr-3 flex-shrink-0 p-2 rounded-full" 
                    style={{ backgroundColor: phase.bgColor }}
                  >
                    <img 
                      src="/images/coffee-cup.png" 
                      alt="Coffee Cup" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brown-500 pt-1">
                    <span className="font-normal text-base whitespace-pre-line">{phase.title.split('\n')[0]}</span>
                    <br />
                    {phase.title.split('\n')[1]}
                  </h3>
                </div>
                <p>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;