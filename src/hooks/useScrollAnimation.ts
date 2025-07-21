import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Global observer to reduce performance impact
let globalObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, (isVisible: boolean) => void>();

function getGlobalObserver() {
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target);
          if (callback) {
            callback(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );
  }
  return globalObserver;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const hasTriggered = useRef(false);

  const {
    triggerOnce = true
  } = options;

  const handleVisibilityChange = useCallback((visible: boolean) => {
    if (visible && (!hasTriggered.current || !triggerOnce)) {
      setIsVisible(true);
      hasTriggered.current = true;
    } else if (!triggerOnce && !visible) {
      setIsVisible(false);
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = getGlobalObserver();
    observedElements.set(element, handleVisibilityChange);
    observer.observe(element);

    return () => {
      observedElements.delete(element);
      observer.unobserve(element);
    };
  }, [handleVisibilityChange]);

  return { elementRef, isVisible };
}

export function useStaggeredScrollAnimation(count: number, options: UseScrollAnimationOptions = {}) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const elementRef = useRef<HTMLElement>(null);
  const timeouts = useRef<NodeJS.Timeout[]>([]);

  const {
    triggerOnce = true
  } = options;

  const handleVisibilityChange = useCallback((visible: boolean) => {
    // Clear existing timeouts to prevent memory leaks
    timeouts.current.forEach(timeout => clearTimeout(timeout));
    timeouts.current = [];

    if (visible) {
      // Reduce stagger delay for better performance
      for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => new Set(prev).add(i));
        }, i * 50); // Reduced from 100ms to 50ms
        timeouts.current.push(timeout);
      }
    } else if (!triggerOnce) {
      setVisibleItems(new Set());
    }
  }, [count, triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = getGlobalObserver();
    observedElements.set(element, handleVisibilityChange);
    observer.observe(element);

    return () => {
      // Clean up timeouts and observer
      timeouts.current.forEach(timeout => clearTimeout(timeout));
      observedElements.delete(element);
      observer.unobserve(element);
    };
  }, [handleVisibilityChange]);

  return { elementRef, visibleItems };
}