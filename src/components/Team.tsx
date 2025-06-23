import React, { useState } from 'react';
import { Brain, Code, TrendingUp, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import TeamMember from './TeamMember';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const team = [
    {
      name: 'Christopher Collins',
      role: 'CEO/Technology Lead',
      image: '/images/team/chris-collins.jpg',
      bio: 'Machine Learning Expert with 10+ years experience making AI accessible to businesses.',
      Icon: Brain,
    },
    {
      name: 'John Primavesi',
      role: 'Lead Developer',
      image: '/images/team/john-primavesi.jpg',
      bio: 'Full-stack developer specializing in AI integration and automation solutions.',
      Icon: Code,
    },
    {
      name: 'Harry Godwin',
      role: 'Infrastructure Lead',
      image: '/images/team/harry-godwin.jpg',
      bio: 'Dedicated to ensuring businesses get the most from their AI tools.',
      Icon: Users,
    },
    {
      name: 'Maria Benitez',
      role: 'Branding & Design Specialist',
      image: '/images/team/maria-benitez.png',
      bio: 'Expert in helping businesses find their identity through branding and design.',
      Icon: TrendingUp,
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);
  };

  return (
    <section id="team" className="py-16 bg-white">
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
              Meet Our Team
            </h2>
            <p className="text-xl text-brown-500 max-w-2xl mx-auto">
              Experts dedicated to making AI accessible and effective for your business
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {team.map((member) => (
                  <div key={member.name} className="w-full flex-shrink-0 px-4">
                    <TeamMember {...member} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6 text-brown-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6 text-brown-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brown-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;