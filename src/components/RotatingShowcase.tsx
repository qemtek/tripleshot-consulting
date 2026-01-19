import { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { OptimizedImage } from './ui/OptimizedImage';

interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
}

interface RotatingShowcaseProps {
  items: ShowcaseItem[];
}

export default function RotatingShowcase({ items }: RotatingShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const calculateProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Calculate progress as element moves through viewport
      const start = windowHeight;
      const end = -elementHeight;
      const range = start - end;

      const progress = (start - rect.top) / range;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      setScrollProgress(clampedProgress);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    calculateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [prefersReducedMotion]);

  // All phones rotate together around a distant center point
  // Map scroll progress to a 20-30 degree rotation
  const rotationAngle = prefersReducedMotion ? 0 : (scrollProgress - 0.5) * 30;

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* All phones rotate together as a group around a distant pivot */}
        <div
          className="flex gap-8 md:gap-12 lg:gap-16 justify-center items-center flex-wrap lg:flex-nowrap"
          style={{
            perspective: '3000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            style={{
              transform: `rotateY(${rotationAngle}deg)`,
              transformStyle: 'preserve-3d',
              transition: prefersReducedMotion ? 'none' : 'transform 0.1s ease-out',
              willChange: 'transform',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px]"
              >
                <div className="relative group">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-purple/20 to-emerald/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card */}
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    {/* Image */}
                    <div className="aspect-[9/16] relative">
                      <OptimizedImage
                        src={item.image.replace(/\.(jpg|jpeg)$/, '')}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent" />

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-white/90 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative accents */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-accent/30 to-purple/30 rounded-full blur-2xl" />
                  <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-tr from-emerald/20 to-accent/20 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
