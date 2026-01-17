import { useRef, useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ShowcaseItemProps {
  image: string;
  title: string;
  description: string;
  imageOnLeft: boolean;
}

function ShowcaseItem({ image, title, description, imageOnLeft }: ShowcaseItemProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [imageProgress, setImageProgress] = useState(0);
  const [textProgress, setTextProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current || !textRef.current) return;

      const calculateProgress = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        // Start animating when element enters bottom of viewport
        // Finish when element reaches center of viewport
        const start = windowHeight;
        const end = windowHeight / 2;

        const elementCenter = rect.top + elementHeight / 2;

        if (elementCenter > start) return 0;
        if (elementCenter < end) return 1;

        const progress = (start - elementCenter) / (start - end);
        return Math.max(0, Math.min(1, progress));
      };

      setImageProgress(calculateProgress(imageRef.current));
      setTextProgress(calculateProgress(textRef.current));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll progress
  const imageTranslateX = imageOnLeft
    ? -80 * (1 - imageProgress)
    : 80 * (1 - imageProgress);
  const imageTranslateY = 80 * (1 - imageProgress);
  const imageRotate = imageOnLeft
    ? -6 * (1 - imageProgress)
    : 6 * (1 - imageProgress);
  const imageOpacity = imageProgress;

  const textTranslateX = imageOnLeft
    ? 80 * (1 - textProgress)
    : -80 * (1 - textProgress);
  const textTranslateY = 80 * (1 - textProgress);
  const textRotate = imageOnLeft
    ? 6 * (1 - textProgress)
    : -6 * (1 - textProgress);
  const textOpacity = textProgress;

  return (
    <div className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${!imageOnLeft ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image - Diagonal slide from bottom-left or bottom-right */}
          <div
            ref={imageRef}
            className={`relative ${!imageOnLeft ? 'lg:col-start-2' : ''}`}
            style={{
              transform: `translateX(${imageTranslateX}px) translateY(${imageTranslateY}px) rotate(${imageRotate}deg)`,
              opacity: imageOpacity,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
            }}
          >
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-purple/20 to-emerald/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image container */}
              <div
                className="relative rounded-2xl overflow-hidden border border-dark-500/50 backdrop-blur-sm shadow-2xl"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-purple/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-emerald/20 to-accent/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Text content - Diagonal slide from opposite direction */}
          <div
            ref={textRef}
            className={`${!imageOnLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}
            style={{
              transform: `translateX(${textTranslateX}px) translateY(${textTranslateY}px) rotate(${textRotate}deg)`,
              opacity: textOpacity,
              transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
            }}
          >
            <div className="space-y-6">
              <h3 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-gray-900 leading-tight">
                {title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const showcaseData = [
  {
    image: '/images/logistics.jpeg',
    title: 'Logistics',
    description: 'We built a sophisticated routing and optimization system that reduced delivery times by 40% and operational costs by 25% for a major logistics provider.',
    imageOnLeft: true,
  },
  {
    image: '/images/horse_racing.jpeg',
    title: 'Sports Trading',
    description: 'Developed a cutting-edge analytics platform with machine learning algorithms that provide real-time insights and predictive modeling for the racing industry.',
    imageOnLeft: false,
  },
  {
    image: '/images/ecommerce.jpg',
    title: 'E-Commerce',
    description: 'Built a high-performance e-commerce platform with intelligent product recommendations, dynamic pricing, and seamless checkout experiences that increased conversion rates by 35%.',
    imageOnLeft: true,
  },
];

export default function WorkShowcase() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple/5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/2 w-[400px] h-[400px] bg-emerald/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 pt-24 md:pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={elementRef}
            className={`text-center transition-all duration-1000 ${
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

      {/* Content */}
      <div className="relative z-10">
        {showcaseData.map((item, index) => (
          <ShowcaseItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
