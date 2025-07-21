import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

export default function PreviousClients() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clients = [
    {
      name: 'FreightHitch',
      logo: '/images/freighthitch_logo_scaled.png',
      description: 'Logistics & Transportation Solutions'
    },
    {
      name: 'FSB Technology',
      logo: '/images/fsb-logo.png', 
      description: 'Sports Trading Platform'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-warm-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-brand-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
            Previous Clients
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to have worked with these amazing companies
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card variant="elevated" className="overflow-hidden">
            <CardContent className="p-8 md:p-12 bg-gradient-to-br from-white to-warm-50/30">
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {clients.map((client, index) => (
                      <div key={index} className="w-full flex-shrink-0 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <div className="mb-6">
                            <img 
                              src={client.logo} 
                              alt={client.name}
                              className="h-16 md:h-20 max-w-xs mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                          <p className="text-warm-600 text-sm font-medium">
                            {client.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {clients.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-brand-primary shadow-medium scale-110'
                          : 'bg-warm-300 hover:bg-warm-400'
                      }`}
                      aria-label={`View client ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Client count indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-warm-500">
              {currentIndex + 1} of {clients.length} clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}