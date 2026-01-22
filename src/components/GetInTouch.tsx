import { Link } from 'react-router-dom';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Button from './ui/Button';

const contactOptions = [
  {
    icon: Calendar,
    title: 'Book a Call',
    description: 'Schedule a 30-minute discovery session to discuss your project in detail',
    action: 'Choose a Time',
    href: 'https://calendly.com/christopher-collins-tripleshot-solutions/30min',
    external: true,
    color: 'cyan',
  },
  {
    icon: MessageCircle,
    title: 'Send a Message',
    description: "Tell us about your challenge and we'll get back to you within 24 hours",
    action: 'Get in Touch',
    href: '/contact',
    external: false,
    color: 'purple',
  }
];

const colorConfig = {
  cyan: {
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
    border: 'border-accent/20 hover:border-accent/40',
    glow: 'hover:shadow-glow-cyan',
  },
  purple: {
    iconBg: 'bg-purple/10',
    iconColor: 'text-purple',
    border: 'border-purple/20 hover:border-purple/40',
    glow: 'hover:shadow-glow-purple',
  },
};

export default function GetInTouch() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Background effects - using radial gradients instead of blur for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)' }}
        />
      </div>


      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Get Started</p>
          <h2 className="text-display-sm md:text-display-md font-bold text-text-primary mb-6">
            Ready to make something{' '}
            <span className="text-gradient">happen</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Whether you have a clear project in mind or just want to explore possibilities, we'd love to hear from you.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactOptions.map((option, index) => {
            const config = colorConfig[option.color as keyof typeof colorConfig];
            const Icon = option.icon;

            const content = (
              <div
                className={`group relative p-8 rounded-3xl bg-dark-800 border ${config.border} ${config.glow} transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${config.iconBg} mb-6 self-start`}>
                  <Icon className={`w-8 h-8 ${config.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {option.title}
                </h3>
                <p className="text-text-secondary mb-6 flex-1">
                  {option.description}
                </p>

                {/* Action */}
                <Button
                  variant={option.color === 'cyan' ? 'primary' : 'outline'}
                  className="w-full group/btn"
                >
                  {option.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );

            if (option.external) {
              return (
                <a
                  key={index}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={index} to={option.href} className="block">
                {content}
              </Link>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-text-muted text-sm">
            Prefer email? Reach us at{' '}
            <a
              href="mailto:hello@tripleshot-solutions.com"
              className="text-accent hover:text-accent-light transition-colors"
            >
              hello@tripleshot-solutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
