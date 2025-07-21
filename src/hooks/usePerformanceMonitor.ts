import { useEffect } from 'react';

export function usePerformanceMonitor() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsSum = 0;

    const measureFPS = (currentTime: number) => {
      const delta = currentTime - lastTime;
      frameCount++;
      
      if (delta >= 1000) { // Every second
        const fps = Math.round((frameCount * 1000) / delta);
        fpsSum += fps;
        
        // Log performance warning if FPS is consistently low
        if (fps < 30) {
          console.warn(`⚠️ Low FPS detected: ${fps}fps - Consider reducing animations`);
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(measureFPS);
    };

    // Start monitoring
    animationFrameId = requestAnimationFrame(measureFPS);

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((entries) => {
        entries.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`⚠️ Long task detected: ${Math.round(entry.duration)}ms`);
          }
        });
      });

      try {
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task observer not supported
      }

      return () => {
        cancelAnimationFrame(animationFrameId);
        longTaskObserver.disconnect();
      };
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
}