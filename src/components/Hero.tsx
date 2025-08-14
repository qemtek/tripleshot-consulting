import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const goToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Mobile Friendly with WebP support */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero.webp" type="image/webp" />
          <img
            src="/images/hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'none' }}
          />
        </picture>
        {/* Light professional overlay */}
        <div className="absolute inset-0 bg-gray-600/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-8 font-nunito leading-tight">
              <span className="font-normal">Unsure how to benefit from the AI revolution?</span><br />
              <span className="font-bold">We're here to help.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              Streamline operations, improve customer service, and make better decisions with practical technology solutions designed for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="cta"
                size="lg"
                onClick={goToContact}
              >
                Grab a coffee with our team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
