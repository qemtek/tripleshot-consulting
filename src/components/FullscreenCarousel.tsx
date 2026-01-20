import { useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '../hooks/useCarousel';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface CarouselImage {
  src: string;
  alt: string;
}

interface FullscreenCarouselProps {
  images: CarouselImage[];
  autoRotate?: boolean;
  rotateInterval?: number;
  aspectRatio?: 'landscape' | 'portrait' | 'mixed';
}

export default function FullscreenCarousel({
  images,
  autoRotate = true,
  rotateInterval = 5000,
  aspectRatio = 'mixed',
}: FullscreenCarouselProps) {
  const {
    currentIndex,
    isPaused,
    goToNext,
    goToPrevious,
    goToIndex,
    pause,
    resume,
  } = useCarousel({
    itemCount: images.length,
    autoRotate,
    rotateInterval,
    loop: true,
  });

  const prefersReducedMotion = useReducedMotion();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  // Aspect ratio classes
  const aspectClasses = {
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    mixed: 'aspect-[4/3]',
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-dark-900"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel slides container */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 py-12">
        <div
          className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden rounded-2xl`}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-${
                prefersReducedMotion ? '0' : '300'
              } ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0 scale-100'
                  : index < currentIndex
                  ? 'opacity-0 -translate-x-full scale-95'
                  : 'opacity-0 translate-x-full scale-95'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Overlay gradient for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/50" />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-dark-700/80 backdrop-blur-sm border border-dark-500 text-white hover:bg-dark-600 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          style={{ WebkitBackdropFilter: 'blur(4px)' }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-dark-700/80 backdrop-blur-sm border border-dark-500 text-white hover:bg-dark-600 hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          style={{ WebkitBackdropFilter: 'blur(4px)' }}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Progress indicators (dots) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                index === currentIndex
                  ? 'bg-accent w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        {/* Pause indicator */}
        {autoRotate && isPaused && (
          <div
            className="absolute top-8 right-8 z-10 px-3 py-1 rounded-full bg-dark-700/80 backdrop-blur-sm border border-dark-500 text-white text-sm"
            style={{ WebkitBackdropFilter: 'blur(4px)' }}
          >
            Paused
          </div>
        )}
      </div>

      {/* Keyboard navigation hint (visible on focus) */}
      <div className="sr-only" role="status" aria-live="polite">
        Showing image {currentIndex + 1} of {images.length}. Use arrow keys to
        navigate.
      </div>
    </div>
  );
}
