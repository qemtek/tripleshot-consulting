import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Palette, TrendingUp, Code, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from './ui/Button';

const teamMembers = [
  {
    name: 'Chris',
    role: 'AI & Data Science',
    personality: 'The Problem Solver',
    icon: Brain,
    image: '/images/team/chris-collins.jpg',
    color: 'emerald',
    experience: '10+ years building machine learning systems for Fortune 500 companies.',
    stats: [
      { name: 'Algorithm Mastery', value: 95 },
      { name: 'Problem Solving', value: 92 },
      { name: 'Machine Learning', value: 93 },
    ]
  },
  {
    name: 'John',
    role: 'Marketing & SEO',
    personality: 'The Growth Hacker',
    icon: TrendingUp,
    image: '/images/team/john-primavesi.jpg',
    color: 'purple',
    experience: '12+ years turning marketing into predictable revenue. Generated over $10M in qualified leads for clients.',
    stats: [
      { name: 'SEO Wizardry', value: 96 },
      { name: 'Lead Generation', value: 89 },
      { name: 'Analytics', value: 91 },
    ]
  },
  {
    name: 'Harry',
    role: 'Software Development',
    personality: 'The Code Architect',
    icon: Code,
    image: '/images/team/harry-godwin.jpg',
    color: 'cyan',
    experience: 'Master at building scalable systems. From fintech APIs handling millions of transactions to e-commerce platforms.',
    stats: [
      { name: 'Code Quality', value: 93 },
      { name: 'System Design', value: 88 },
      { name: 'API Development', value: 90 },
    ]
  },
  {
    name: 'Maria',
    role: 'Branding & Web Design',
    personality: 'The Creative Visionary',
    icon: Palette,
    image: '/images/team/maria-benitez.png',
    color: 'purple',
    experience: 'Expert in creating memorable brands. Designed visual identities for over 100 companies across diverse industries.',
    stats: [
      { name: 'Design Vision', value: 98 },
      { name: 'User Experience', value: 91 },
      { name: 'Brand Strategy', value: 87 },
    ]
  }
];

const colorConfig = {
  cyan: {
    iconBg: 'bg-accent/20',
    iconColor: 'text-accent',
    barColor: 'bg-accent',
    border: 'border-accent/20',
  },
  purple: {
    iconBg: 'bg-purple/20',
    iconColor: 'text-purple',
    barColor: 'bg-purple',
    border: 'border-purple/20',
  },
  emerald: {
    iconBg: 'bg-emerald/20',
    iconColor: 'text-emerald',
    barColor: 'bg-emerald',
    border: 'border-emerald/20',
  },
};

export default function MeetTheTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < teamMembers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : teamMembers.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < teamMembers.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="pt-0 pb-8 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Our Team</p>
          <h2 className="text-display-sm md:text-display-md font-bold text-gray-900 mb-6">
            Meet the people behind Tripleshot
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            A small team of senior professionals who love solving complex problems with simple solutions.
          </p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="relative mb-16">
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {teamMembers.map((member, index) => {
                  const config = colorConfig[member.color as keyof typeof colorConfig];
                  const Icon = member.icon;

                  return (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className={`bg-gray-50 rounded-3xl p-6 border ${config.border}`}>
                        {/* Profile */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="relative">
                            <img
                              src={member.image}
                              alt={member.name}
                              loading="lazy"
                              className="w-20 h-20 rounded-2xl object-cover"
                            />
                            <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-xl ${config.iconBg} flex items-center justify-center`}>
                              <Icon className={`h-4 w-4 ${config.iconColor}`} />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                            <p className={`text-sm ${config.iconColor}`}>{member.personality}</p>
                            <p className="text-xs text-gray-500">{member.role}</p>
                          </div>
                        </div>

                        {/* Experience */}
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          {member.experience}
                        </p>

                        {/* Stats */}
                        <div className="space-y-3">
                          {member.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-600">
                                {stat.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${config.barColor} rounded-full`}
                                    style={{ width: `${stat.value}%` }}
                                  />
                                </div>
                                <span className="text-xs font-bold text-gray-900 w-6 text-right">
                                  {stat.value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:text-accent transition-colors"
                aria-label="Previous team member"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 bg-accent'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to team member ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:text-accent transition-colors"
                aria-label="Next team member"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {teamMembers.map((member, index) => {
              const config = colorConfig[member.color as keyof typeof colorConfig];
              const Icon = member.icon;

              return (
                <div
                  key={index}
                  className={`group bg-gray-50 rounded-3xl p-6 border ${config.border} hover:border-opacity-40 transition-all duration-300 hover:-translate-y-2`}
                >
                  {/* Profile */}
                  <div className="text-center mb-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full rounded-2xl object-cover"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-xl ${config.iconBg} flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${config.iconColor}`} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className={`text-sm ${config.iconColor}`}>{member.personality}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>

                  {/* Experience */}
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {member.experience}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 border-t border-gray-200 pt-4">
                    {member.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-600">
                          {stat.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${config.barColor} rounded-full`}
                              style={{ width: `${stat.value}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-gray-900 w-6 text-right">
                            {stat.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
