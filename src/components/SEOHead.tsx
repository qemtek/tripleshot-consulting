import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export default function SEOHead({
  title = 'Tripleshot Solutions - Your Business Automation Partners',
  description = 'Professional but personal business automation consultants. We build close working relationships while delivering expert solutions in AI, web development, and process optimization.',
  keywords = ['business automation', 'AI consulting', 'web development', 'process optimization', 'small business consulting', 'tripleshot solutions'],
  image = '/images/tripleshot-og-image.jpg',
  type = 'website',
  author,
  publishedTime,
  modifiedTime
}: SEOHeadProps) {
  const location = useLocation();
  const baseUrl = 'https://tripleshotsolutions.com';
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  // Enhanced title with consistent branding
  const fullTitle = title.includes('Tripleshot') ? title : `${title} | Tripleshot Solutions`;
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author || 'Tripleshot Solutions'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${baseUrl}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - Tripleshot Solutions`} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Tripleshot Solutions" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tripleshotsolutions" />
      <meta name="twitter:creator" content="@tripleshotsolutions" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${baseUrl}${image}`} />
      <meta name="twitter:image:alt" content={`${title} - Tripleshot Solutions`} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#4f46e5" />
      <meta name="msapplication-TileColor" content="#4f46e5" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Tripleshot Solutions" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* Preload critical hero image */}
      <link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
      <link rel="preload" as="image" href="/images/hero.jpg" type="image/jpeg" />
      
      {/* Resource hints for key pages */}
      <link rel="prefetch" href="/case-studies" />
      <link rel="prefetch" href="/contact" />
      <link rel="prefetch" href="/articles" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
}