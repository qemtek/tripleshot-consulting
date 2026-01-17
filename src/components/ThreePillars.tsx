import { Link } from 'react-router-dom';
import { Code, Zap, Lightbulb, ArrowRight, Smartphone, Globe, Database, TrendingUp, Cog, BarChart3, Brain, Microscope } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from './ui/Button';

interface PillarSectionProps {
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  icon: React.ElementType;
  features: { icon: React.ElementType; label: string; description: string }[];
  color: 'cyan' | 'purple' | 'emerald';
}

function PillarSection({ title, subtitle, description, detailedDescription, icon: Icon, features, color }: PillarSectionProps) {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const colorConfig = {
    cyan: {
      bg: 'bg-dark-900',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent',
      accentColor: 'text-accent',
      gradientFrom: 'from-accent/20',
      gradientTo: 'to-accent/5',
      blobColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      textPrimary: 'text-text-primary',
      textSecondary: 'text-text-secondary',
      textMuted: 'text-text-muted',
    },
    purple: {
      bg: 'bg-dark-800',
      iconBg: 'bg-purple/10',
      iconColor: 'text-purple',
      accentColor: 'text-purple',
      gradientFrom: 'from-purple/20',
      gradientTo: 'to-purple/5',
      blobColor: 'bg-purple/10',
      borderColor: 'border-purple/20',
      textPrimary: 'text-text-primary',
      textSecondary: 'text-text-secondary',
      textMuted: 'text-text-muted',
    },
    emerald: {
      bg: 'bg-dark-900',
      iconBg: 'bg-emerald/10',
      iconColor: 'text-emerald',
      accentColor: 'text-emerald',
      gradientFrom: 'from-emerald/20',
      gradientTo: 'to-emerald/5',
      blobColor: 'bg-emerald/10',
      borderColor: 'border-emerald/20',
      textPrimary: 'text-text-primary',
      textSecondary: 'text-text-secondary',
      textMuted: 'text-text-muted',
    },
  };

  const config = colorConfig[color];

  return (
    <section className={`relative py-24 md:py-32 lg:py-40 ${config.bg} overflow-hidden`}>
      {/* Subtle color gradient overlay for personality */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: color === 'cyan'
              ? 'radial-gradient(ellipse at 30% 40%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)'
              : color === 'purple'
              ? 'radial-gradient(ellipse at 70% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at 50% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 60%)'
          }}
        />
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full ${config.blobColor} blur-3xl opacity-40`} />
        <div className={`absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full ${config.blobColor} blur-3xl opacity-30`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Title and description */}
          <div
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Icon */}
            <div className={`inline-flex p-5 rounded-3xl ${config.iconBg} mb-6`}>
              <Icon className={`w-10 h-10 md:w-12 md:h-12 ${config.iconColor}`} />
            </div>

            {/* Subtitle */}
            <p className={`text-sm md:text-base font-bold tracking-wider uppercase ${config.accentColor} mb-4`}>
              {subtitle}
            </p>

            {/* Title */}
            <h2 className={`text-display-md md:text-display-lg lg:text-display-xl font-bold ${config.textPrimary} mb-6`}>
              {title}
            </h2>

            {/* Description */}
            <p className={`text-xl md:text-2xl ${config.textSecondary} mb-6 leading-relaxed`}>
              {description}
            </p>

            {/* Detailed description */}
            <p className={`text-lg ${config.textMuted} mb-8 leading-relaxed`}>
              {detailedDescription}
            </p>

            {/* CTA */}
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Let's talk about your project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right column: Features */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6">
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`group p-6 rounded-2xl bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} border ${config.borderColor} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 p-3 rounded-xl ${config.iconBg}`}>
                        <FeatureIcon className={`w-6 h-6 ${config.iconColor}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg md:text-xl font-bold ${config.textPrimary} mb-2`}>
                          {feature.label}
                        </h3>
                        <p className={`${config.textSecondary} leading-relaxed`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Pillar data
const buildAppsData = {
  title: 'We Build Apps',
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
};

const transformBusinessData = {
  title: 'We Transform Businesses',
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
      icon: BarChart3,
      label: 'Analytics & insights',
      description: 'Turn data into decisions with custom dashboards and business intelligence.',
    },
  ],
};

const solveProblemsData = {
  title: 'We Solve Problems',
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
};

// Individual exports for each pillar
export function BuildApps() {
  return <PillarSection {...buildAppsData} />;
}

export function TransformBusiness() {
  return <PillarSection {...transformBusinessData} />;
}

export function SolveProblems() {
  return <PillarSection {...solveProblemsData} />;
}

// Default export for backward compatibility (renders all three)
export default function ThreePillars() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      {/* Section Header */}
      <section className="relative bg-dark-900 overflow-hidden">
        <div className="relative z-10 pt-24 md:pt-32 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={elementRef}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h2 className="text-display-md md:text-display-lg lg:text-display-xl font-bold text-text-primary mb-6">
                Our Business Arms
              </h2>
              <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
                The majority of our work is split across three main pillars...
              </p>
            </div>
          </div>
        </div>
      </section>

      <BuildApps />
      <TransformBusiness />
      <SolveProblems />
    </>
  );
}
