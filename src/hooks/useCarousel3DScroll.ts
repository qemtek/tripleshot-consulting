import { useEffect, useState, useRef, RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseCarousel3DScrollOptions {
  itemCount: number;
  containerRef: RefObject<HTMLElement>;
}

export function useCarousel3DScroll({
  itemCount,
  containerRef,
}: UseCarousel3DScrollOptions) {
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    let ticking = false;

    const calculateProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;

      // Start: element bottom enters viewport bottom
      // End: element top exits viewport top
      const start = windowHeight;
      const end = -elementHeight;
      const range = start - end;

      const progress = (start - rect.top) / range;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Ease out cubic for smooth motion
      const smoothProgress = 1 - Math.pow(1 - clampedProgress, 3);

      // Map to full rotation (360° to show all items)
      const rotation = smoothProgress * 360;

      setRotationDegrees(rotation);

      // Calculate which item is centered
      const normalizedRotation = rotation % 360;
      const anglePerItem = 360 / itemCount;
      const center = Math.round(normalizedRotation / anglePerItem) % itemCount;
      setCenterIndex(center);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    calculateProgress();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateProgress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [itemCount, containerRef, prefersReducedMotion]);

  return {
    rotationDegrees,
    centerIndex,
    isAnimationEnabled: !prefersReducedMotion,
  };
}
