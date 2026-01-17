import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta' | 'gradient' | 'gradient-outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 relative overflow-hidden";

  const variants = {
    primary: "bg-accent hover:bg-accent-dark text-dark-900 shadow-glow-cyan hover:shadow-lg focus:ring-accent transform hover:scale-105 hover:-translate-y-0.5",
    secondary: "bg-dark-600 hover:bg-dark-500 text-text-primary border border-dark-500 hover:border-dark-400 focus:ring-dark-400 transform hover:scale-105 hover:-translate-y-0.5",
    cta: "bg-accent hover:bg-accent-dark text-dark-900 font-semibold shadow-glow-cyan hover:shadow-lg focus:ring-accent transform hover:scale-105 hover:-translate-y-0.5",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-dark-900 focus:ring-accent transform hover:scale-105 hover:-translate-y-0.5 transition-colors duration-300",
    ghost: "text-text-secondary hover:text-accent hover:bg-dark-700 focus:ring-dark-500 hover:scale-105 transition-all duration-200",
    gradient: "bg-gradient-to-r from-accent to-purple text-dark-900 font-semibold shadow-lg hover:shadow-glow-cyan focus:ring-accent transform hover:scale-105 hover:-translate-y-0.5 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
    'gradient-outline': "relative border-0 text-text-primary font-semibold focus:ring-accent transform hover:scale-105 hover:-translate-y-0.5 bg-dark-700 before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:from-accent before:to-purple before:-z-10 before:content-['']"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  // Special handling for gradient-outline to ensure proper border radius matching
  const gradientOutlineExtra = variant === 'gradient-outline' ? 'z-10' : '';

  return (
    <button
      className={clsx(baseClasses, variants[variant], sizes[size], gradientOutlineExtra, className)}
      {...props}
    >
      {children}
    </button>
  );
}
