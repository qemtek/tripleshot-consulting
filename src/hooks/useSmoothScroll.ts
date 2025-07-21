import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToElement = useCallback((elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToElement, scrollToTop };
}

export function useScrollToSection() {
  const { scrollToElement } = useSmoothScroll();
  
  const scrollToSection = useCallback((sectionId: string) => {
    scrollToElement(sectionId, 80); // Account for header height
  }, [scrollToElement]);

  return scrollToSection;
}