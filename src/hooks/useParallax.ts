import { useEffect, useState, RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseParallaxOptions {
  speed?: number; // Multiplier for parallax effect (0.2 = slower, 1 = same as scroll, 2 = faster)
  disabled?: boolean;
}

interface UseParallaxReturn {
  offset: number;
}

/**
 * Hook to create parallax scroll effects on elements
 * @param ref - Reference to the element to apply parallax to
 * @param options - Configuration options
 * @returns Object containing the calculated offset value
 */
export function useParallax(
  ref: RefObject<HTMLElement>,
  options: UseParallaxOptions = {}
): UseParallaxReturn {
  const { speed = 0.5, disabled = false } = options;
  const [offset, setOffset] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip if disabled, reduced motion is preferred, or no ref
    if (disabled || prefersReducedMotion || !ref.current) {
      return;
    }

    const element = ref.current;

    const handleScroll = () => {
      if (!element) return;

      // Get element position relative to viewport
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only calculate parallax when element is near or in viewport
      const isNearViewport =
        elementTop < windowHeight + elementHeight &&
        elementTop + elementHeight > -elementHeight;

      if (isNearViewport) {
        // Calculate scroll progress through the element
        // When element enters from bottom: progress = 0
        // When element center aligns with viewport center: progress = 0.5
        // When element exits from top: progress = 1
        const scrollProgress =
          (windowHeight - elementTop) / (windowHeight + elementHeight);

        // Calculate offset based on scroll progress and speed
        // Centered at 0 when progress = 0.5 (element in center of viewport)
        const calculatedOffset = (scrollProgress - 0.5) * 100 * speed;

        setOffset(calculatedOffset);
      }
    };

    // Initial calculation
    handleScroll();

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref, speed, disabled, prefersReducedMotion]);

  return { offset: prefersReducedMotion || disabled ? 0 : offset };
}
