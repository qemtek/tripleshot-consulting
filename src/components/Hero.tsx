import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState('Simple');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const words = ['Simple', 'Effective', 'Accessible'];
  
  useEffect(() => {
    setIsVisible(true);
    
    // Animation for changing words
    const wordInterval = setInterval(() => {
      // Start transition - fade out
      setIsTransitioning(true);
      
      // After fade out, change the word
      setTimeout(() => {
        setCurrentWord(prevWord => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        
        // Start fade in
        setIsTransitioning(false);
      }, 500); // Wait for fade out to complete
      
    }, 3000); // Change word every 3 seconds
    
    return () => clearInterval(wordInterval);
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
          backgroundImage: 'url("/images/hero.jpg")',
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
        <div className="max-w-3xl">
          <div 
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-white mb-8 font-nunito">
              <span className="font-normal">We Make<br />
              Modernisation</span><br />
              <span 
                className={`inline-block transition-opacity duration-500 font-bold ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
              >
                {currentWord}.
              </span>
            </h1>
            <p className="text-[20px] text-gray-200 mb-6 max-w-lg">
              Streamline operations, improve customer service, and make better decisions with practical technology solutions designed for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={scrollToContact}
                className="bg-tan-500 text-brown-700 px-8 py-3 rounded-md hover:bg-tan-600 transition-colors duration-300 text-lg"
              >
                Schedule a Consultation
              </button>
              <button
                onClick={scrollToContact}
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
