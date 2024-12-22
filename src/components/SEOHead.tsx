import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

export default function SEOHead({
  title = 'Tripleshot Consulting - AI Solutions for Business',
  description = 'Empower your business with affordable AI tools for customer service, marketing, and analytics. Expert AI consulting for small businesses.',
  keywords = ['AI consulting', 'small business AI', 'AI solutions', 'business automation', 'AI technology'],
  image = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200&h=630'
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <link rel="canonical" href="https://tripleshotconsulting.com" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}