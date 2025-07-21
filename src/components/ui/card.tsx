import * as React from "react"

import { cn } from "../../lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: 'default' | 'bordered' | 'elevated';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "shadow-soft bg-white",
      bordered: "border border-warm-200 shadow-soft bg-white",
      elevated: "shadow-medium bg-white"
    };
    
    const hoverClasses = hover 
      ? "hover:shadow-large hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000" 
      : "transition-all duration-300";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl text-warm-900",
          variants[variant],
          hoverClasses,
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-tight tracking-tight text-warm-900 font-display",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }
