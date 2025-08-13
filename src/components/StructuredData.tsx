import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type?: 'organization' | 'article' | 'service' | 'webpage';
  data?: any;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Tripleshot Solutions",
          "alternateName": "Tripleshot",
          "url": "https://tripleshotsolutions.com",
          "logo": "new_logo.svg",
          "description": "Professional but personal business automation consultants. We build close working relationships while delivering expert solutions in AI, web development, and process optimization.",
          "foundingDate": "2023",
          "founders": [
            {
              "@type": "Person",
              "name": "Tripleshot Solutions Team"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://tripleshotsolutions.com/contact",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "United States"
          },
          "sameAs": [
            "https://twitter.com/tripleshotsolutions",
            "https://linkedin.com/company/tripleshot-solutions"
          ],
          "services": [
            {
              "@type": "Service",
              "name": "Business Automation Consulting",
              "description": "Expert consulting services for business process automation and optimization"
            },
            {
              "@type": "Service", 
              "name": "AI Implementation",
              "description": "Custom AI solutions tailored for small and medium businesses"
            },
            {
              "@type": "Service",
              "name": "Web Development",
              "description": "Modern, responsive web applications and websites"
            },
            {
              "@type": "Service",
              "name": "Process Optimization",
              "description": "Streamlining business processes for maximum efficiency"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "ratingCount": "1",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'webpage':
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data?.title || "Tripleshot Solutions",
          "description": data?.description || "Professional but personal business automation consultants",
          "url": data?.url || "https://tripleshotsolutions.com",
          "mainEntity": {
            "@type": "Organization",
            "name": "Tripleshot Solutions"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": data?.breadcrumbs || []
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data?.title,
          "description": data?.description,
          "image": data?.image,
          "author": {
            "@type": "Organization",
            "name": "Tripleshot Solutions"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Tripleshot Solutions",
            "logo": {
              "@type": "ImageObject",
              "url": "new_logo.svg"
            }
          },
          "datePublished": data?.publishedTime,
          "dateModified": data?.modifiedTime || data?.publishedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data?.name || "Business Automation Consulting",
          "description": data?.description || "Expert consulting services for business automation",
          "provider": {
            "@type": "Organization",
            "name": "Tripleshot Solutions",
            "url": "https://tripleshotsolutions.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": "Consulting",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": data?.price || "0",
            "priceCurrency": "USD",
            "description": "Custom pricing based on project requirements"
          }
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// FAQ Schema Component
export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Local Business Schema (if needed)
export function LocalBusinessStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tripleshot Solutions",
    "image": "new_logo.svg",
    "description": "Professional but personal business automation consultants specializing in AI, web development, and process optimization.",
    "url": "https://tripleshotsolutions.com",
    "telephone": "+1-555-TRIPLESHOT",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.8283",
      "longitude": "-98.5795"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://twitter.com/tripleshotsolutions",
      "https://linkedin.com/company/tripleshot-solutions"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}