import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function IntroShowcase() {
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section className="relative bg-dark-900 py-24 md:py-32">
      {/* Subtle gradient accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={textRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-text-primary font-medium leading-relaxed mb-8">
            We've helped businesses build{' '}
            <span className="text-accent">intelligent routing systems</span>,{' '}
            <span className="text-purple">dynamic pricing engines</span>, and{' '}
            <span className="text-emerald">AI-powered platforms</span>{' '}
            that drive real results.
          </p>

          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed mb-8">
            From startups finding their footing to enterprises scaling globally,
            we've been the team behind the curtain—turning ambitious ideas into
            products people actually use.
          </p>

          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            We're not here to sell you a methodology or a framework.
            We're here to solve your problem. <span className="text-text-primary font-medium">Whatever it takes.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
