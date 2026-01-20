import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  },
  {
    name: 'Swimback Legal',
    logo: '/images/SBLLogoBlack.png',
    description: 'Legal Services'
  }
];

export default function PreviousClients() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { elementRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={elementRef}
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-8">
            Trusted by
          </p>

          {/* Logo carousel - full width */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {clients.map((client, index) => (
                  <div key={index} className="w-full flex-shrink-0 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4 p-8 bg-gray-50 rounded-2xl border border-gray-200">
                        <img
                          src={client.logo}
                          alt={client.name}
                          loading="lazy"
                          className="h-16 md:h-20 max-w-md mx-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <p className="text-gray-500 text-sm">
                        {client.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View client ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
