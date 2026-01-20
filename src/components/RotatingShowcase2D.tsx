import { useRef, useEffect, useMemo, useCallback } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { OptimizedImage } from './ui/OptimizedImage';

interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
}

interface RotatingShowcase2DProps {
  items: ShowcaseItem[];
}

interface PhoneConfig {
  // Static tilt angle for visual interest (degrees)
  tilt: number;
  // Angular position around the circle (degrees from top)
  baseAngle: number;
}

export default function RotatingShowcase2D({ items }: RotatingShowcase2DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // Configuration for the 2D rotation
  const config = useMemo(() => {
    const radius = 1800;
    const totalRotation = 45;
    const angleSpacing = 15;
    const startAngle = -((items.length - 1) * angleSpacing) / 2;
    return { radius, totalRotation, angleSpacing, startAngle };
  }, [items.length]);

  // Pre-calculate phone configurations (static tilts for visual variety)
  const phoneConfigs: PhoneConfig[] = useMemo(() => {
    const tilts = [-12, 5, -8, 10, -5, 8, -10, 6];
    return items.map((_, index) => ({
      tilt: tilts[index % tilts.length],
      baseAngle: config.startAngle + index * config.angleSpacing,
    }));
  }, [items.length, config.startAngle, config.angleSpacing]);

  // Update positions directly via DOM (no React state) for performance
  const updatePositions = useCallback(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;

    const start = windowHeight;
    const end = -elementHeight;
    const range = start - end;

    const progress = Math.max(0, Math.min(1, (start - rect.top) / range));
    const rotationOffset = (progress - 0.5) * config.totalRotation;

    phoneRefs.current.forEach((el, index) => {
      if (!el) return;

      const phoneConfig = phoneConfigs[index];
      const currentAngle = phoneConfig.baseAngle + rotationOffset;
      const angleRad = (currentAngle * Math.PI) / 180;

      const x = Math.sin(angleRad) * config.radius;
      const y = (1 - Math.cos(angleRad)) * config.radius;
      const scale = 1 - (y / config.radius) * 0.1;
      const zIndex = Math.round(100 - y);

      // Use translate3d for GPU acceleration in Safari
      const transform = `translate3d(calc(-50% + ${x}px), ${y}px, 0) rotate(${phoneConfig.tilt}deg) scale(${scale})`;
      el.style.transform = transform;
      // Also set webkit prefix for older Safari
      (el.style as CSSStyleDeclaration & { webkitTransform?: string }).webkitTransform = transform;
      el.style.zIndex = String(zIndex);
    });
  }, [config, phoneConfigs, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePositions();
          ticking = false;
        });
        ticking = true;
      }
    };

    updatePositions();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePositions);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePositions);
    };
  }, [prefersReducedMotion, updatePositions]);

  // Fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="relative w-full py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <PhoneCard key={index} item={item} tilt={0} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: '700px' }}
    >
      {/* The "stage" where phones are positioned */}
      <div className="absolute inset-0 overflow-visible">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => { phoneRefs.current[index] = el; }}
            className="absolute"
            style={{
              left: '50%',
              top: '50px',
              willChange: 'transform',
              WebkitBackfaceVisibility: 'hidden',
              backfaceVisibility: 'hidden',
            }}
          >
            <PhoneCard item={item} tilt={0} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneCard({ item, tilt }: { item: ShowcaseItem; tilt: number }) {
  return (
    <div
      className="relative w-[240px] sm:w-[280px] md:w-[300px]"
      style={{ transform: tilt !== 0 ? `rotate(${tilt}deg)` : undefined }}
    >
      {/* Phone frame */}
      <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
        {/* Screen bezel effect */}
        <div className="relative bg-black rounded-[1.5rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />

          {/* Screen content */}
          <div className="aspect-[9/16] relative">
            <OptimizedImage
              src={item.image.replace(/\.(jpg|jpeg)$/, '')}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-xl font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-white/80 line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
