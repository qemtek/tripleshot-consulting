import { useRef, useEffect, useState, useMemo } from 'react';
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  // Configuration for the 2D rotation
  const config = useMemo(() => {
    // Radius from center point to phones (in pixels)
    // Larger = gentler arc, center point further away
    const radius = 1800;

    // How many degrees to rotate across the full scroll
    const totalRotation = 45;

    // Angular spacing between phones (degrees)
    const angleSpacing = 15;

    // Starting angle offset so phones are centered around 0° (top of circle)
    const startAngle = -((items.length - 1) * angleSpacing) / 2;

    return { radius, totalRotation, angleSpacing, startAngle };
  }, [items.length]);

  // Pre-calculate phone configurations (static tilts for visual variety)
  const phoneConfigs: PhoneConfig[] = useMemo(() => {
    const tilts = [-12, 5, -8, 10, -5, 8, -10, 6]; // Varied tilts
    return items.map((_, index) => ({
      tilt: tilts[index % tilts.length],
      baseAngle: config.startAngle + index * config.angleSpacing,
    }));
  }, [items.length, config.startAngle, config.angleSpacing]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const calculateProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Progress: 0 when element enters viewport, 1 when it leaves
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

  // Calculate rotation offset based on scroll
  // Maps scroll progress (0-1) to rotation (-totalRotation/2 to +totalRotation/2)
  const rotationOffset = prefersReducedMotion
    ? 0
    : (scrollProgress - 0.5) * config.totalRotation;

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
        {items.map((item, index) => {
          const phoneConfig = phoneConfigs[index];

          // Current angle = base angle + scroll-driven offset
          const currentAngle = phoneConfig.baseAngle + rotationOffset;

          // Convert to radians for trig
          const angleRad = (currentAngle * Math.PI) / 180;

          // Calculate position on the arc
          // x = radius * sin(angle) - horizontal offset from center
          // y = radius * (1 - cos(angle)) - vertical offset (0 at top of arc)
          const x = Math.sin(angleRad) * config.radius;
          const y = (1 - Math.cos(angleRad)) * config.radius;

          // Z-index: phones closer to center (smaller y) should be in front
          const zIndex = Math.round(100 - y);

          // Subtle scale variation
          const scale = 1 - (y / config.radius) * 0.1;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: '50%',
                top: '50px',
                transform: `
                  translateX(calc(-50% + ${x}px))
                  translateY(${y}px)
                  rotate(${phoneConfig.tilt}deg)
                  scale(${scale})
                `,
                transition: 'transform 0.05s linear',
                willChange: 'transform',
                zIndex,
              }}
            >
              <PhoneCard item={item} tilt={0} />
            </div>
          );
        })}
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
      {/* Glow effect */}
      <div className="absolute -inset-3 bg-gradient-to-br from-accent/15 via-purple/15 to-emerald/15 rounded-[2rem] blur-xl opacity-60" />

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

      {/* Decorative glow spots */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-purple/15 rounded-full blur-2xl" />
    </div>
  );
}
