interface OptimizedImageProps {
  src: string;           // Path without extension (e.g., "/images/logistics")
  alt: string;
  className?: string;
  eager?: boolean;       // Skip lazy loading for above-fold images
  priority?: 'high' | 'low' | 'auto';
}

export function OptimizedImage({
  src,
  alt,
  className,
  eager = false,
  priority = 'auto'
}: OptimizedImageProps) {
  const loading = eager ? 'eager' : 'lazy';

  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img
        src={`${src}.jpg`}
        alt={alt}
        loading={loading}
        fetchpriority={priority}
        className={className}
      />
    </picture>
  );
}
