import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals';

interface WebVitalsConfig {
  analyticsId?: string;
  debug?: boolean;
  reportAllChanges?: boolean;
}

export function useWebVitals(config: WebVitalsConfig = {}) {
  useEffect(() => {
    const { debug = false, reportAllChanges = false, analyticsId } = config;

    // Only run in production or when debug is enabled
    if (process.env.NODE_ENV !== 'production' && !debug) return;

    const sendToAnalytics = (metric: Metric) => {
      // Console logging for development/debug
      if (debug || process.env.NODE_ENV !== 'production') {
        console.log(`📊 Web Vitals - ${metric.name}:`, {
          value: metric.value,
          rating: getRating(metric.name, metric.value),
          delta: metric.delta,
          id: metric.id,
        });
      }

      // Send to Google Analytics 4 if analyticsId is provided
      if (analyticsId && typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }

      // Send to custom analytics endpoint
      if (process.env.NODE_ENV === 'production') {
        // You can uncomment and configure this to send to your analytics service
        // fetch('/api/analytics', {
        //   method: 'POST',
        //   body: JSON.stringify(metric),
        //   headers: { 'Content-Type': 'application/json' }
        // }).catch(console.error);
      }
    };

    // Monitor all Core Web Vitals
    onCLS(sendToAnalytics, { reportAllChanges });
    onFCP(sendToAnalytics, { reportAllChanges });
    onINP(sendToAnalytics, { reportAllChanges }); // INP replaced FID
    onLCP(sendToAnalytics, { reportAllChanges });
    onTTFB(sendToAnalytics, { reportAllChanges });

  }, [config]);
}

// Helper function to rate Web Vitals scores
function getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  switch (name) {
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor';
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
    default:
      return 'good';
  }
}

// Global gtag function type
declare global {
  function gtag(command: string, targetId: string, config?: object): void;
}