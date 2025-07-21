import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Configuration
const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX';

interface AnalyticsProps {
  trackingId?: string;
}

// Google Analytics component
export default function Analytics({ trackingId = GA_TRACKING_ID }: AnalyticsProps) {
  const location = useLocation();

  useEffect(() => {
    // Only load in production or when tracking ID is provided
    if (import.meta.env.NODE_ENV !== 'production' && !trackingId.startsWith('G-')) {
      console.log('📊 Analytics disabled in development mode');
      return;
    }

    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    
    gtag('js', new Date());
    gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;

    return () => {
      // Cleanup script if component unmounts
      const scripts = document.querySelectorAll(`script[src*="${trackingId}"]`);
      scripts.forEach(script => script.remove());
    };
  }, [trackingId]);

  // Track page views on route changes
  useEffect(() => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location, trackingId]);

  return null;
}

// Custom event tracking utilities
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.log('📊 Event tracked:', { action, category, label, value });
  }
};

// Common tracking functions for business actions
export const trackContactForm = (formType: string) => {
  trackEvent('form_submit', 'contact', formType);
};

export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${ctaText} - ${location}`);
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'engagement', serviceName);
};

export const trackCaseStudyView = (caseStudyTitle: string) => {
  trackEvent('case_study_view', 'content', caseStudyTitle);
};

export const trackDownload = (fileName: string) => {
  trackEvent('download', 'content', fileName);
};

export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_link', 'engagement', `${linkText} - ${url}`);
};

// Enhanced ecommerce tracking (if applicable)
export const trackConversion = (value: number, currency = 'USD') => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'purchase', {
      transaction_id: `txn_${Date.now()}`,
      value: value,
      currency: currency,
    });
  }
};

// User engagement tracking
export const trackEngagement = (engagementType: string, details?: string) => {
  trackEvent('engagement', 'user_behavior', `${engagementType}${details ? ` - ${details}` : ''}`);
};

// Performance tracking
export const trackPerformance = (metric: string, value: number) => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'timing_complete', {
      name: metric,
      value: Math.round(value),
    });
  }
};

// Privacy-focused analytics
export const enableAnalytics = () => {
  localStorage.setItem('analytics_consent', 'true');
  window.location.reload();
};

export const disableAnalytics = () => {
  localStorage.setItem('analytics_consent', 'false');
  // Disable GA
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      analytics_storage: 'denied'
    });
  }
};