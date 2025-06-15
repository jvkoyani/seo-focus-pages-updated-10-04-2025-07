
import { Helmet } from 'react-helmet-async';

interface SchemaProps {
  type: 'organization' | 'service' | 'article' | 'breadcrumb' | 'faq' | 'localBusiness';
  data: any;
}

const Schema: React.FC<SchemaProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseUrl = 'https://seofocus.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SEO Focus",
          "url": baseUrl,
          "logo": `${baseUrl}/lovable-uploads/f12f6e8e-db16-499c-a2b1-a78a40290a44.png`,
          "description": "Professional SEO services to improve your online visibility and drive targeted traffic",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": `${baseUrl}/contact`
          },
          "sameAs": [],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "SEO Focus",
            "url": baseUrl
          },
          "areaServed": data.areaServed || "United States",
          "serviceType": "SEO Services",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "url": data.url
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "SEO Focus"
          },
          "publisher": {
            "@type": "Organization",
            "name": "SEO Focus",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/lovable-uploads/f12f6e8e-db16-499c-a2b1-a78a40290a44.png`
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString(),
          "url": data.url,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map((qa: any) => ({
            "@type": "Question",
            "name": qa.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": qa.answer
            }
          }))
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": data.name,
          "description": data.description,
          "url": baseUrl,
          "telephone": data.telephone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address?.street,
            "addressLocality": data.address?.city,
            "addressRegion": data.address?.state,
            "postalCode": data.address?.zip,
            "addressCountry": data.address?.country || "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": data.geo?.latitude,
            "longitude": data.geo?.longitude
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
          },
          "priceRange": "$$",
          "openingHours": ["Mo-Fr 09:00-18:00"]
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
};

export default Schema;
