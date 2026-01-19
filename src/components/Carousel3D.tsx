import { useRef } from 'react';
import { useCarousel3DScroll } from '../hooks/useCarousel3DScroll';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { OptimizedImage } from './ui/OptimizedImage';

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface Carousel3DProps {
  items: CarouselItem[];
}

export default function Carousel3D({ items }: Carousel3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { rotationDegrees, centerIndex, isAnimationEnabled } =
    useCarousel3DScroll({
      itemCount: items.length,
      containerRef,
    });

  const anglePerItem = 360 / items.length;

  // Responsive radius based on screen size
  const getRadius = () => {
    if (typeof window === 'undefined') return 500;
    const width = window.innerWidth;
    if (width < 768) return 0; // Mobile: no 3D effect
    if (width < 1024) return 350; // Tablet: smaller radius
    return 500; // Desktop: full radius
  };

  const radius = getRadius();
  const perspective = radius > 0 ? 1200 : 0;

  // Fallback for reduced motion or mobile
  if (prefersReducedMotion || radius === 0) {
    return (
      <div className="relative w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {items.map((item, index) => (
            <div key={index} className="relative">
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-purple/20 to-emerald/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-dark-500/50">
                  {/* Image */}
                  <div className="aspect-[4/3] relative">
                    <OptimizedImage
                      src={item.image.replace(/\.(jpg|jpeg)$/, '')}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Decorative accents */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-purple/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-emerald/20 to-accent/20 rounded-full blur-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[1200px] flex items-center justify-center py-24"
      role="region"
      aria-label="Industry showcase carousel"
    >
      <div
        style={{ perspective: `${perspective}px` }}
        className="relative w-full h-[600px]"
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
          }}
          role="list"
        >
          {items.map((item, index) => {
            const baseAngle = anglePerItem * index;
            const currentAngle = baseAngle - rotationDegrees;

            // Normalize angle to -180 to 180
            const normalizedAngle =
              ((currentAngle + 180) % 360) - 180;

            const isCentered = index === centerIndex;
            const isVisible = Math.abs(normalizedAngle) < 120;

            const scale = isCentered ? 1 : 0.85;
            const opacity = isCentered
              ? 1
              : Math.max(0.3, 1 - Math.abs(normalizedAngle) / 180);

            const zIndex = Math.round(100 - Math.abs(normalizedAngle));

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `
                    rotateY(${currentAngle}deg)
                    translateZ(${radius}px)
                    scale(${scale})
                  `,
                  opacity: isVisible ? opacity : 0,
                  transition: isAnimationEnabled
                    ? 'opacity 0.3s ease-out, transform 0.1s ease-out'
                    : 'none',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                  zIndex,
                }}
                role="listitem"
                aria-current={isCentered ? 'true' : 'false'}
              >
                <CarouselItemCard
                  item={item}
                  isCentered={isCentered}
                  normalizedAngle={normalizedAngle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CarouselItemCard({
  item,
  isCentered,
  normalizedAngle,
}: {
  item: CarouselItem;
  isCentered: boolean;
  normalizedAngle: number;
}) {
  // Fade text when not centered
  const textOpacity = isCentered
    ? 1
    : Math.max(0.3, 1 - Math.abs(normalizedAngle) / 90);

  return (
    <div className="relative w-[500px]">
      {/* Glow effect when centered */}
      {isCentered && (
        <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-purple/20 to-emerald/20 rounded-3xl blur-2xl" />
      )}

      {/* Card */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-dark-500/50">
        {/* Image */}
        <div className="aspect-[4/3] relative">
          <OptimizedImage
            src={item.image.replace(/\.(jpg|jpeg)$/, '')}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {item.title}
          </h3>
          <p
            className="text-lg text-gray-600 transition-opacity duration-300"
            style={{
              opacity: textOpacity
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* Decorative accents */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-purple/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-emerald/20 to-accent/20 rounded-full blur-3xl" />
    </div>
  );
}
