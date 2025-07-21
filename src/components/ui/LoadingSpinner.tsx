import React from 'react';
import { clsx } from 'clsx';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className 
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colors = {
    primary: 'text-brand-primary',
    secondary: 'text-brand-secondary',
    white: 'text-white'
  };

  return (
    <div className={clsx('animate-spin', sizes[size], colors[color], className)}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
}

// Skeleton component for loading states
interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export function Skeleton({ 
  className, 
  width = 'w-full', 
  height = 'h-4', 
  rounded = false 
}: SkeletonProps) {
  return (
    <div 
      className={clsx(
        'animate-pulse bg-gradient-to-r from-warm-200 via-warm-300 to-warm-200 bg-[length:200%_100%] animate-shimmer',
        width,
        height,
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
    />
  );
}