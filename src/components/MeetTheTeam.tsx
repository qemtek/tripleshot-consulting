import React, { useState, useRef, useEffect } from 'react';
import { Brain, Palette, TrendingUp, Code, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Button from './ui/Button';

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Chris',
      role: 'AI & Data Science',
      personality: 'The Problem Solver',
      icon: Brain,
      image: '/images/team/chris-collins.jpg',
      color: 'from-brand-primary to-blue-600',
      bgColor: 'from-brand-primary/5 to-blue-50',
      experience: '10+ years building industry standard machine learning systems for Fortune 500 companies. Has built teams from the ground up and led AI implementations that increased margins by 20%.',
      stats: [
        { name: 'Algorithm Mastery', value: 95 },
        { name: 'Problem Solving', value: 92 },
        { name: 'Data Analysis', value: 89 },
        { name: 'Machine Learning', value: 93 },
        { name: 'Baking Bread', value: 78 },
        { name: 'Cat Whispering', value: 95 }
      ]
    },
    {
      name: 'Maria',
      role: 'Branding & Web Design',
      personality: 'The Creative Visionary',
      icon: Palette,
      image: '/images/team/maria-benitez.png',
      color: 'from-brand-secondary to-purple-600',
      bgColor: 'from-brand-secondary/5 to-purple-50',
      experience: 'Expert in creating brands that customers actually remember. From startup logos to enterprise rebrands, she\'s designed visual identities for over 100 companies across diverse industries.',
      stats: [
        { name: 'Design Vision', value: 98 },
        { name: 'Color Theory', value: 94 },
        { name: 'User Experience', value: 91 },
        { name: 'Brand Strategy', value: 87 },
        { name: 'Yoga', value: 89 },
        { name: 'Cycling', value: 9 }
      ]
    },
    {
      name: 'John',
      role: 'Marketing & SEO',
      personality: 'The Growth Hacker',
      icon: TrendingUp,
      image: '/images/team/john-primavesi.jpg',
      color: 'from-brand-success to-green-600',
      bgColor: 'from-brand-success/5 to-green-50',
      experience: '12+ years turning marketing budgets into predictable revenue streams. Specialized in organic growth strategies that have generated over $10M in qualified leads for clients.',
      stats: [
        { name: 'SEO Wizardry', value: 96 },
        { name: 'Lead Generation', value: 89 },
        { name: 'Content Strategy', value: 84 },
        { name: 'Analytics', value: 91 },
        { name: 'Planning Holidays', value: 32 },
        { name: 'Being on Holiday', value: 85 }
      ]
    },
    {
      name: 'Harry',
      role: 'Software Development',
      personality: 'The Code Architect',
      icon: Code,
      image: '/images/team/harry-godwin.jpg',
      color: 'from-brand-accent to-orange-600',
      bgColor: 'from-brand-accent/5 to-orange-50',
      experience: 'A master at building scalable systems that actually work. From fintech APIs handling millions of transactions to e-commerce platforms serving thousands of users daily.',
      stats: [
        { name: 'Code Quality', value: 93 },
        { name: 'System Design', value: 88 },
        { name: 'Problem Debugging', value: 90 },
        { name: 'API Development', value: 85 },
        { name: 'Powerlifting', value: 93 },
        { name: 'Feather Dusting', value: 32 }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
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
    <section className="py-24 bg-gradient-to-b from-warm-50 via-white to-warm-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-brand-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-brand-accent rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl mb-8 relative">
            <Heart className="h-10 w-10 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">4</span>
            </div>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
            Meet the Team
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-warm-600 max-w-4xl mx-auto leading-relaxed mb-4">
            Four humans who love solving complex problems with simple solutions
          </p>
          
        </div>
        
        {/* Desktop Grid / Mobile Carousel */}
        {isMobile ? (
          <div className="relative mb-20 h-[650px] perspective-1000">
            <div 
              ref={carouselRef}
              className="relative h-full flex items-center justify-center preserve-3d"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ perspective: '1000px' }}
            >
              {teamMembers.map((member, index) => {
                const offset = index - currentIndex;
                const isActive = offset === 0;
                const isPrev = offset === -1;
                const isNext = offset === 1;
                const isVisible = Math.abs(offset) <= 1;
                
                return (
                  <div 
                    key={index} 
                    className={`absolute w-full max-w-sm px-4 transition-all duration-300 ${
                      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      transform: `
                        translateX(${offset * 50}px)
                        translateY(${Math.abs(offset) * 20}px)
                        scale(${isActive ? 1 : 0.9 - Math.abs(offset) * 0.1})
                        rotateY(${offset * -10}deg)
                      `,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                      filter: isActive ? 'none' : 'brightness(0.7)',
                    }}
                  >
                    <Card 
                      hover
                      className="group text-center h-full mx-auto max-w-sm shadow-xl border-4 border-warm-200 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                    >
                      <CardContent className={`p-6 h-full relative overflow-hidden rounded-xl`}>
                        {/* Card Background Pattern */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-30`}></div>
                        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                        
                        {/* Card Header Banner */}
                        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${member.color}`}></div>
                        
                        <div className="relative z-10">
                        {/* Profile */}
                        <div className="relative mb-6">
                          <div className="relative w-28 h-28 mx-auto group-hover:scale-105 transition-all duration-300">
                            <img 
                              src={member.image} 
                              alt={member.name}
                              loading="lazy"
                              className="w-full h-full rounded-3xl object-cover shadow-large border-3 border-white"
                            />
                            <div className={`absolute -bottom-3 -right-3 w-10 h-10 rounded-2xl bg-gradient-to-r ${member.color} flex items-center justify-center shadow-large border-3 border-white`}>
                              <member.icon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="font-display text-lg font-bold text-warm-900 mb-1">
                          {member.name}
                        </h3>
                        
                        <p className={`text-sm font-medium mb-2 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                          {member.personality}
                        </p>
                        
                        <p className="text-xs font-semibold mb-4 text-warm-500">
                          {member.role}
                        </p>
                        
                        {/* Experience */}
                        <p className="text-xs text-warm-600 mb-6 leading-relaxed">
                          {member.experience}
                        </p>
                        
                        {/* Stats Section with Card Border */}
                        <div className="border-t-2 border-warm-200 pt-4 mt-4">
                          <div className="space-y-3">
                          {member.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="flex items-center justify-between">
                              <span className="text-xs font-medium text-warm-700">
                                {stat.name}
                              </span>
                              <div className="flex items-center">
                                <div className="w-16 h-2 bg-warm-200 rounded-full mr-2 overflow-hidden">
                                  <div 
                                    className={`h-full bg-gradient-to-r ${member.color} rounded-full transition-all duration-500`}
                                    style={{ width: `${stat.value}%` }}
                                  />
                                </div>
                                <span className="text-xs font-bold text-warm-900 w-6 text-right">
                                  {stat.value}
                                </span>
                              </div>
                            </div>
                          ))}
                          </div>
                        </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-r-lg shadow-medium hover:bg-white transition-colors"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-6 w-6 text-warm-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-l-lg shadow-medium hover:bg-white transition-colors"
              aria-label="Next team member"
            >
              <ChevronRight className="h-6 w-6 text-warm-700" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-brand-primary' 
                      : 'w-2 bg-warm-300 hover:bg-warm-400'
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <Card 
              key={index} 
              hover
              className="group text-center h-full shadow-xl border-4 border-warm-200 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
            >
              <CardContent className={`p-6 h-full relative overflow-hidden rounded-xl`}>
                {/* Card Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} opacity-30`}></div>
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
                
                {/* Card Header Banner */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${member.color}`}></div>
                
                <div className="relative z-10">
                {/* Profile */}
                <div className="relative mb-6">
                  <div className="relative w-28 h-28 mx-auto group-hover:scale-105 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full rounded-3xl object-cover shadow-large border-3 border-white"
                    />
                    <div className={`absolute -bottom-3 -right-3 w-10 h-10 rounded-2xl bg-gradient-to-r ${member.color} flex items-center justify-center shadow-large border-3 border-white`}>
                      <member.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-bold text-warm-900 mb-1">
                  {member.name}
                </h3>
                
                <p className={`text-sm font-medium mb-2 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.personality}
                </p>
                
                <p className="text-xs font-semibold mb-4 text-warm-500">
                  {member.role}
                </p>
                
                {/* Experience */}
                <p className="text-xs text-warm-600 mb-6 leading-relaxed">
                  {member.experience}
                </p>
                
                {/* Stats Section with Card Border */}
                <div className="border-t-2 border-warm-200 pt-4 mt-4">
                  <div className="space-y-3">
                  {member.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center justify-between">
                      <span className="text-xs font-medium text-warm-700">
                        {stat.name}
                      </span>
                      <div className="flex items-center">
                        <div className="w-16 h-2 bg-warm-200 rounded-full mr-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${member.color} rounded-full transition-all duration-500`}
                            style={{ width: `${stat.value}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-warm-900 w-6 text-right">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        )}
        
        {/* CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <Card variant="bordered" className="bg-gradient-to-r from-brand-primary/5 via-white to-brand-accent/5 border-brand-primary/20">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="flex -space-x-3">
                  {teamMembers.map((member, index) => (
                    <div 
                      key={index}
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${member.color} border-4 border-white shadow-medium flex items-center justify-center`}
                    >
                      <member.icon className="h-6 w-6 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              
              <h3 className="font-display text-2xl font-bold text-warm-900 mb-4">
                Ready to take the first step?
              </h3>
              
              <p className="text-lg text-warm-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's chat about your next challenge.
              </p>
              
              <Button 
                size="lg" 
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-accent shadow-large"
              >
                Start a Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}