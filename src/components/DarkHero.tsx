import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function DarkHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-dark-900">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-purple/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-emerald/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Main content */}
        <div className="text-center mb-16 md:mb-24">
          {/* Headline */}
          <h1 className="text-display-lg md:text-display-2xl lg:text-display-3xl font-bold mb-8 animate-fade-in-up animation-fill-both animation-delay-100">
            <span className="text-text-primary">We make the </span>
            <span className="text-gradient drop-shadow-[0_0_30px_rgba(0,212,255,0.3)]">impossible</span>
            <br className="hidden sm:block" />
            <span className="text-text-primary"> feel inevitable.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl lg:text-3xl text-text-secondary mb-10 animate-fade-in-up animation-fill-both animation-delay-200">
            A small team of senior engineers and strategists who build apps, transform businesses, and solve the problems others walk away from.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-fill-both animation-delay-300">
            <Link to="/contact">
              <Button variant="gradient" size="lg" className="group">
                Start a conversation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button variant="secondary" size="lg">
                See our work
              </Button>
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-dark-500 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-dark-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
