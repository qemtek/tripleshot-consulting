import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/hero.png")',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Light professional overlay */}
        <div className="absolute inset-0 bg-gray-600/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <div 
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
              We make modernising{' '}
              <span className="text-blue-100">simple</span>
            </h1>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              Streamline operations, improve customer service, and make better decisions with 
              practical technology solutions designed for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-800 text-white px-8 py-3 rounded-md hover:bg-blue-900 transition-colors duration-300 text-lg shadow-lg"
              >
                Schedule a Consultation
              </button>
              <button 
                className="bg-white/20 text-white px-8 py-3 rounded-md hover:bg-white/30 transition-colors duration-300 text-lg"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
