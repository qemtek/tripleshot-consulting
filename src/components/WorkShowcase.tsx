import { useScrollAnimation } from '../hooks/useScrollAnimation';
import RotatingShowcase2D from './RotatingShowcase2D';

const showcaseData = [
  {
    image: '/images/logistics.jpg',
    title: 'Logistics',
    description: 'Sophisticated routing and optimization system that reduced delivery times by 40%',
  },
  {
    image: '/images/horse_racing.jpg',
    title: 'Sports Trading',
    description: 'Analytics platform with ML algorithms for real-time insights',
  },
  {
    image: '/images/ecommerce.jpg',
    title: 'E-Commerce',
    description: 'High-performance platform with intelligent recommendations',
  },
  {
    image: '/images/accounting.jpg',
    title: 'Accounting',
    description: 'Automated financial reporting and AI-powered categorization',
  },
  {
    image: '/images/wellness.jpg',
    title: 'Wellness',
    description: 'Health tracking platform with personalized recommendations',
  },
];

export default function WorkShowcase() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-white overflow-x-clip">
      {/* Background gradient effects - using radial gradients instead of blur for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-2/3 left-1/2 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 pt-24 md:pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={elementRef}
            className={`text-center transition-[opacity,transform] duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-display-md md:text-display-lg lg:text-display-xl font-bold text-gray-900 mb-6">
              Coming to an industry near you
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We're already making waves in a diverse array of industries...
            </p>
          </div>
        </div>
      </div>

      {/* Rotating Showcase */}
      <div className="relative z-10">
        <RotatingShowcase2D items={showcaseData} />
      </div>
    </section>
  );
}
