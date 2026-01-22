import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Zap, Lightbulb, ArrowRight, Smartphone, Globe, Database, TrendingUp, Cog, Palette, Brain, Microscope } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from './ui/Button';

// Color configuration for each pillar
const colorConfig = {
  cyan: {
    bg: 'bg-dark-900',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    accentColor: 'text-accent',
    gradientFrom: 'from-accent/20',
    gradientTo: 'to-accent/5',
    borderColor: 'border-accent/20',
    textPrimary: 'text-text-primary',
    textSecondary: 'text-text-secondary',
    textMuted: 'text-text-muted',
    gradientBg: 'radial-gradient(ellipse at 30% 40%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)',
    blobBg: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
    // Pillar-specific glow classes
    idleGlow: 'shadow-[0_0_20px_rgba(0,212,255,0.1)]',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]',
    activeGlow: 'shadow-[0_0_40px_rgba(0,212,255,0.3),0_0_60px_rgba(0,212,255,0.15)]',
    idleBorder: 'border-accent/15',
    hoverBorder: 'hover:border-accent/30',
    activeBorder: 'border-accent/40',
  },
  purple: {
    bg: 'bg-dark-800',
    iconBg: 'bg-purple/10',
    iconColor: 'text-purple',
    accentColor: 'text-purple',
    gradientFrom: 'from-purple/20',
    gradientTo: 'to-purple/5',
    borderColor: 'border-purple/20',
    textPrimary: 'text-text-primary',
    textSecondary: 'text-text-secondary',
    textMuted: 'text-text-muted',
    gradientBg: 'radial-gradient(ellipse at 70% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
    blobBg: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
    idleGlow: 'shadow-[0_0_20px_rgba(139,92,246,0.1)]',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    activeGlow: 'shadow-[0_0_40px_rgba(139,92,246,0.3),0_0_60px_rgba(139,92,246,0.15)]',
    idleBorder: 'border-purple/15',
    hoverBorder: 'hover:border-purple/30',
    activeBorder: 'border-purple/40',
  },
  emerald: {
    bg: 'bg-dark-900',
    iconBg: 'bg-emerald/10',
    iconColor: 'text-emerald',
    accentColor: 'text-emerald',
    gradientFrom: 'from-emerald/20',
    gradientTo: 'to-emerald/5',
    borderColor: 'border-emerald/20',
    textPrimary: 'text-text-primary',
    textSecondary: 'text-text-secondary',
    textMuted: 'text-text-muted',
    gradientBg: 'radial-gradient(ellipse at 50% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)',
    blobBg: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    idleGlow: 'shadow-[0_0_20px_rgba(16,185,129,0.1)]',
    hoverGlow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    activeGlow: 'shadow-[0_0_40px_rgba(16,185,129,0.3),0_0_60px_rgba(16,185,129,0.15)]',
    idleBorder: 'border-emerald/15',
    hoverBorder: 'hover:border-emerald/30',
    activeBorder: 'border-emerald/40',
  },
};

// Pillar data definitions
const pillarsData = [
  {
    id: 'transform',
    title: 'Business Transformation',
    shortTitle: 'Transformation',
    subtitle: 'TRANSFORMATION',
    description: 'Modernize how you operate. We streamline processes, automate workflows, and build systems that drive real growth.',
    detailedDescription: 'We help businesses break through operational bottlenecks by automating manual work, integrating systems, and building the infrastructure needed for sustainable growth.',
    icon: Zap,
    color: 'purple' as const,
    features: [
      {
        icon: Cog,
        label: 'Process automation',
        description: 'Eliminate manual work with intelligent automation and workflow optimization.',
      },
      {
        icon: TrendingUp,
        label: 'Growth & marketing systems',
        description: 'CRM integration, marketing automation, and data-driven growth strategies.',
      },
      {
        icon: Palette,
        label: 'Branding & design',
        description: 'Logo design, visual identity, and brand voice that make your business memorable.',
      },
    ],
  },
  {
    id: 'science',
    title: 'AI / Data Science',
    shortTitle: 'AI & Data',
    subtitle: 'SCIENCE & TECH',
    description: 'When you need the impossible figured out. We tackle complex technical challenges with AI, data science, and deep expertise.',
    detailedDescription: 'From machine learning models that predict customer behavior to complex algorithms that optimize operations, we solve the problems that require deep technical expertise and creative thinking.',
    icon: Lightbulb,
    color: 'emerald' as const,
    features: [
      {
        icon: Brain,
        label: 'AI & machine learning',
        description: 'Custom ML models, LLM integration, and intelligent automation solutions.',
      },
      {
        icon: Microscope,
        label: 'Data science & analytics',
        description: 'Statistical modeling, predictive analytics, and data-driven decision making.',
      },
      {
        icon: Database,
        label: 'Complex system architecture',
        description: 'Distributed systems, high-performance computing, and technical architecture.',
      },
    ],
  },
  {
    id: 'apps',
    title: 'App Development',
    shortTitle: 'App Development',
    subtitle: 'DEVELOPMENT',
    description: 'From concept to app store. We design and build custom mobile and web applications that scale with your ambition.',
    detailedDescription: 'Whether you need a consumer app with millions of users or an internal tool that transforms how your team works, we bring the technical depth and product thinking to make it happen.',
    icon: Code,
    color: 'cyan' as const,
    features: [
      {
        icon: Smartphone,
        label: 'Native iOS & Android apps',
        description: 'Built with Swift, Kotlin, and React Native for performance and native feel.',
      },
      {
        icon: Globe,
        label: 'Web applications & SaaS platforms',
        description: 'Modern, responsive web apps with React, TypeScript, and cloud infrastructure.',
      },
      {
        icon: Database,
        label: 'APIs & backend systems',
        description: 'Scalable architectures with Node.js, Python, PostgreSQL, and AWS/GCP.',
      },
    ],
  },
];

// Feature tile component
interface FeatureTileProps {
  feature: { icon: React.ElementType; label: string; description: string };
  index: number;
  config: typeof colorConfig.cyan;
  isVisible: boolean;
}

function FeatureTile({ feature, index, config, isVisible }: FeatureTileProps) {
  const FeatureIcon = feature.icon;

  return (
    <div
      className={`group p-4 rounded-xl bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} border ${config.borderColor} transition-[opacity,transform] duration-[800ms] ease-out hover:scale-[1.02] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-xl ${config.iconBg}`}>
          <FeatureIcon className={`w-6 h-6 ${config.iconColor}`} />
        </div>
        <div>
          <h3 className={`text-base md:text-lg font-semibold ${config.textPrimary} mb-1`}>
            {feature.label}
          </h3>
          <p className={`text-sm ${config.textSecondary} leading-relaxed`}>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Classical column pillar selector
interface PillarSelectorProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

function PillarSelector({ activeIndex, onSelect }: PillarSelectorProps) {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = (index + 1) % pillarsData.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = (index - 1 + pillarsData.length) % pillarsData.length;
        break;
      default:
        return;
    }
    onSelect(newIndex);
  };

  // Spotlight colors for each pillar
  const spotlightColors = {
    cyan: { beam: 'rgba(0, 212, 255, 0.4)', glow: 'rgba(0, 212, 255, 0.6)', soft: 'rgba(0, 212, 255, 0.15)' },
    purple: { beam: 'rgba(139, 92, 246, 0.4)', glow: 'rgba(139, 92, 246, 0.6)', soft: 'rgba(139, 92, 246, 0.15)' },
    emerald: { beam: 'rgba(16, 185, 129, 0.4)', glow: 'rgba(16, 185, 129, 0.6)', soft: 'rgba(16, 185, 129, 0.15)' },
  };

  return (
    <div
      role="tablist"
      aria-label="Focus Areas"
      className="flex justify-center items-end gap-8 sm:gap-12 md:gap-16 lg:gap-24"
    >
      {pillarsData.map((pillar, index) => {
        const isActive = activeIndex === index;
        const config = colorConfig[pillar.color];
        const Icon = pillar.icon;
        const colors = spotlightColors[pillar.color];

        return (
          <button
            key={pillar.id}
            role="tab"
            id={`pillar-tab-${pillar.id}`}
            aria-selected={isActive}
            aria-controls={`pillar-panel-${pillar.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`
              group relative flex flex-col items-center cursor-pointer
              transition-all duration-300 ease-out
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900
            `}
          >
            {/* Icon with glow when active */}
            <div
              className={`
                relative z-10 p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-300
                ${config.iconBg}
                ${isActive ? 'scale-110' : 'group-hover:scale-105'}
              `}
              style={{
                boxShadow: isActive
                  ? `0 0 30px 10px ${colors.soft}, 0 0 60px 20px ${colors.soft}`
                  : 'none',
              }}
            >
              <Icon className={`w-6 h-6 md:w-10 md:h-10 ${config.iconColor} transition-colors duration-300`} />
            </div>

            {/* Title */}
            <span className={`
              mt-3 text-sm md:text-base font-semibold text-center
              ${isActive ? config.accentColor : 'text-text-secondary'}
              transition-colors duration-300
            `}>
              {pillar.shortTitle}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// Pillar content panel
interface PillarContentProps {
  pillar: typeof pillarsData[0];
  isActive: boolean;
}

function PillarContent({ pillar, isActive }: PillarContentProps) {
  const config = colorConfig[pillar.color];
  const [contentVisible, setContentVisible] = useState(false);

  // Trigger staggered animations after becoming active
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setContentVisible(true), 200);
      return () => clearTimeout(timer);
    } else {
      setContentVisible(false);
    }
  }, [isActive]);

  return (
    <div
      role="tabpanel"
      id={`pillar-panel-${pillar.id}`}
      aria-labelledby={`pillar-tab-${pillar.id}`}
      aria-hidden={!isActive}
      className={`
        py-8 md:py-12 transition-all duration-700 ease-in-out
        ${isActive
          ? 'relative opacity-100 translate-y-0'
          : 'absolute inset-0 opacity-0 translate-y-6 pointer-events-none'}
      `}
    >
      {/* Decorative gradient blobs - overflow-hidden to clip extended blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] transition-opacity duration-700 ease-in-out"
          style={{ background: config.blobBg, opacity: 0.4 }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] transition-opacity duration-700 ease-in-out"
          style={{ background: config.blobBg, opacity: 0.3 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column: Title and description */}
          <div
            className={`transition-[opacity,transform] duration-700 ease-out ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${config.textPrimary} mb-3`}>
              {pillar.title}
            </h3>

            <p className={`text-lg md:text-xl ${config.textSecondary} mb-3 leading-relaxed`}>
              {pillar.description}
            </p>

            <p className={`text-base ${config.textMuted} mb-5 leading-relaxed`}>
              {pillar.detailedDescription}
            </p>

            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Let's talk about your project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right column: Features with staggered animation */}
          <div className="space-y-4">
            {pillar.features.map((feature, index) => (
              <FeatureTile
                key={index}
                feature={feature}
                index={index}
                config={config}
                isVisible={contentVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main ThreePillars component
export default function ThreePillars() {
  const { elementRef, isVisible } = useScrollAnimation();
  const [activePillar, setActivePillar] = useState(0);

  const handlePillarSelect = useCallback((index: number) => {
    if (index === activePillar) return;
    setActivePillar(index);
  }, [activePillar]);

  // Get current pillar's background color
  const currentPillar = pillarsData[activePillar];
  const currentConfig = colorConfig[currentPillar.color];

  return (
    <section className="relative bg-dark-900">
      {/* Decorative backgrounds - contained in overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{ background: currentConfig.gradientBg }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 pt-12 md:pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={elementRef}
            className={`text-center transition-[opacity,transform] duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-display-md md:text-display-lg font-bold text-text-primary mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-0 md:mb-8">
              The majority of our work is split across three main pillars...
            </p>
          </div>
        </div>
      </div>

      {/* Pillar Selector - Sticky on mobile */}
      <div className="sticky top-0 z-20 md:relative bg-dark-900/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none py-4 md:py-0 border-b border-white/5 md:border-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PillarSelector
            activeIndex={activePillar}
            onSelect={handlePillarSelect}
          />
        </div>
      </div>

      {/* Content Section - Single visible at a time */}
      <div className="relative">
        {pillarsData.map((pillar, index) => (
          <PillarContent
            key={pillar.id}
            pillar={pillar}
            isActive={activePillar === index}
          />
        ))}
      </div>
    </section>
  );
}
