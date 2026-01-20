import React, { useState, useEffect } from 'react';
import { useCursorPosition } from '../hooks/useCursorPosition';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TeamMemberRevealProps {
  realImage: string;
  animatedImage: string;
  name: string;
  className?: string;
  revealSize?: number;
  glowColor?: 'cyan' | 'purple' | 'emerald';
}

const glowColorMap = {
  cyan: {
    rgba: 'rgba(0, 212, 255, 0.4)',
    pulseClass: 'glow-pulse-cyan',
  },
  purple: {
    rgba: 'rgba(139, 92, 246, 0.4)',
    pulseClass: 'glow-pulse-purple',
  },
  emerald: {
    rgba: 'rgba(16, 185, 129, 0.4)',
    pulseClass: 'glow-pulse-emerald',
  },
};

export function TeamMemberReveal({
  realImage,
  animatedImage,
  name,
  className = '',
  revealSize = 100,
  glowColor = 'cyan',
}: TeamMemberRevealProps) {
  const { position, isHovering, elementRef } = useCursorPosition();
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [showAnimated, setShowAnimated] = useState(false);

  const colorConfig = glowColorMap[glowColor];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = () => {
    if (isMobile) {
      setShowAnimated(true);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setShowAnimated(false);
    }
  };

  // For reduced motion or simple hover fallback
  if (prefersReducedMotion) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={isHovering ? animatedImage : realImage}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    );
  }

  // Mobile: tap and hold to reveal
  if (isMobile) {
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {/* Real photo - base layer */}
        <img
          src={realImage}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Animated version - revealed on touch */}
        <img
          src={animatedImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{
            opacity: showAnimated ? 1 : 0,
          }}
        />

        {/* Glow pulse effect */}
        <div
          className={`absolute inset-0 pointer-events-none rounded-2xl ${colorConfig.pulseClass}`}
        />

        {/* Tap hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500 bg-white/80 px-3 py-1 rounded-full">
          Hold to reveal
        </div>
      </div>
    );
  }

  // Desktop: cursor proximity reveal
  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden cursor-none ${className}`}
    >
      {/* Real photo - base layer */}
      <img
        src={realImage}
        alt={name}
        className="w-full h-full object-cover"
      />

      {/* Animated version - revealed where cursor is */}
      <img
        src={animatedImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${isHovering ? revealSize : 0}px at ${position.x}% ${position.y}%, black 0%, black 70%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${isHovering ? revealSize : 0}px at ${position.x}% ${position.y}%, black 0%, black 70%, transparent 100%)`,
          transition: isHovering ? 'none' : 'mask-size 0.3s ease-out, -webkit-mask-size 0.3s ease-out',
        }}
      />

      {/* Glow effect following cursor */}
      {isHovering && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle ${revealSize + 20}px at ${position.x}% ${position.y}%, ${colorConfig.rgba}, transparent)`,
          }}
        />
      )}

      {/* Idle glow pulse when not hovering */}
      {!isHovering && (
        <div
          className={`absolute inset-0 pointer-events-none rounded-2xl ${colorConfig.pulseClass}`}
        />
      )}
    </div>
  );
}
