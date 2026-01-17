import { useState, useEffect, useCallback, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseCarouselOptions {
  itemCount: number;
  autoRotate?: boolean;
  rotateInterval?: number;
  loop?: boolean;
}

interface UseCarouselReturn {
  currentIndex: number;
  isPaused: boolean;
  direction: 'left' | 'right' | null;
  goToNext: () => void;
  goToPrevious: () => void;
  goToIndex: (index: number) => void;
  pause: () => void;
  resume: () => void;
}

export function useCarousel({
  itemCount,
  autoRotate = true,
  rotateInterval = 5000,
  loop = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const goToNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex((prev) => {
      if (prev === itemCount - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
  }, [itemCount, loop]);

  const goToPrevious = useCallback(() => {
    setDirection('left');
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return loop ? itemCount - 1 : prev;
      }
      return prev - 1;
    });
  }, [itemCount, loop]);

  const goToIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= itemCount) return;

      setDirection(index > currentIndex ? 'right' : 'left');
      setCurrentIndex(index);
    },
    [currentIndex, itemCount]
  );

  const pause = useCallback(() => {
    setIsPaused(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isPaused || prefersReducedMotion) {
      return;
    }

    intervalRef.current = setInterval(() => {
      goToNext();
    }, rotateInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, isPaused, rotateInterval, goToNext, prefersReducedMotion]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Clear direction after animation completes
  useEffect(() => {
    if (direction) {
      const timeout = setTimeout(() => setDirection(null), 300);
      return () => clearTimeout(timeout);
    }
  }, [direction]);

  return {
    currentIndex,
    isPaused,
    direction,
    goToNext,
    goToPrevious,
    goToIndex,
    pause,
    resume,
  };
}
