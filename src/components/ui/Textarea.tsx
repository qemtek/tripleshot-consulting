import React from 'react';
import { clsx } from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helpText?: string;
}

export default function Textarea({ 
  label, 
  error, 
  helpText, 
  className, 
  id,
  ...props 
}: TextareaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-sm font-medium text-warm-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={clsx(
          "w-full px-4 py-3 rounded-xl border border-warm-300 bg-white",
          "focus:ring-2 focus:ring-brand-primary focus:border-transparent",
          "transition-all duration-200 resize-vertical",
          "placeholder-warm-400",
          error && "border-red-300 focus:ring-red-500",
          className
        )}
        rows={4}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helpText && !error && (
        <p className="text-sm text-warm-500">{helpText}</p>
      )}
    </div>
  );
}