import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounterAnimation } from '../hooks/useCounterAnimation';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  color: 'cyan' | 'purple' | 'emerald' | 'multi';
  isVisible: boolean;
  delay?: number;
}

function Stat({ value, suffix, label, color, isVisible, delay = 0 }: StatProps) {
  const animatedValue = useCounterAnimation(isVisible, {
    end: value,
    duration: 2000,
    suffix,
  });

  // Color-specific gradient backgrounds
  const gradientMap = {
    cyan: 'from-accent/20 to-accent/5',
    purple: 'from-purple/20 to-purple/5',
    emerald: 'from-emerald/20 to-emerald/5',
    multi: 'from-accent/15 via-purple/15 to-emerald/10',
  };

  // Color-specific blob classes
  const blobColorMap = {
    cyan: 'gradient-blob-cyan',
    purple: 'gradient-blob-purple',
    emerald: 'gradient-blob-emerald',
    multi: 'gradient-blob-cyan',
  };

  // Color-specific glow effects
  const glowMap = {
    cyan: 'hover:shadow-glow-cyan',
    purple: 'hover:shadow-glow-purple',
    emerald: 'hover:shadow-glow-emerald',
    multi: 'hover:shadow-glow-cyan',
  };

  return (
    <div
      className={`group relative p-8 md:p-10 rounded-3xl bg-gradient-to-br ${gradientMap[color]} border border-dark-500/50 backdrop-blur-sm transition-all duration-700 ${glowMap[color]} hover:scale-105 hover:border-${color === 'cyan' ? 'accent' : color}/30`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      {/* Animated gradient blob background */}
      <div className={`gradient-blob ${blobColorMap[color]} gradient-blob-animated w-64 h-64 -top-8 -left-8`} />

      {/* Stat content */}
      <div className="relative z-10 text-center">
        <div className="text-display-xl md:text-display-2xl lg:text-display-3xl font-bold text-text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
          {animatedValue}
        </div>
        <p className="text-base md:text-lg text-text-secondary font-medium">{label}</p>
      </div>
    </div>
  );
}

const stats = [
  { value: 35, suffix: '+', label: 'Years combined experience', color: 'cyan' as const },
  { value: 50, suffix: '+', label: 'Projects delivered', color: 'purple' as const },
  { value: 100, suffix: '%', label: 'Client satisfaction', color: 'emerald' as const },
  { value: 24, suffix: 'h', label: 'Response time', color: 'multi' as const },
];

export default function BigNumbers() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-20 md:py-28 bg-dark-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald/5 blur-3xl" />
      </div>

      {/* Border lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-dark-500 to-transparent" />

      <div ref={elementRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bento-box grid layout: 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Stat
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
