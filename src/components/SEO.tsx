import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import Schema from './Schema';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  routeKey?: string;
  schemaData?: {
    type: 'organization' | 'service' | 'article' | 'breadcrumb' | 'faq' | 'localBusiness';
    data: any;
  };
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.png',
  ogType = 'website',
  routeKey,
  schemaData
}) => {
  const siteName = 'SEO Focus';
  const fullTitle = title.includes('|') ? title : `${title} | ${siteName}`;
  const siteUrl = 'https://seofocus.com';
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  console.log(`SEO Component rendering for: ${title} with routeKey: ${routeKey}`);
  
  // Force update document title immediately and ensure meta tags are replaced
  useEffect(() => {
    document.title = fullTitle;
    
    // Force update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    console.log(`Document title updated to: ${fullTitle}`);
    console.log(`Meta description updated to: ${description}`);
  }, [fullTitle, description, routeKey]);
  
  return (
    <>
      <Helmet key={routeKey} prioritizeSeoTags>
        {/* Basic Meta Tags */}
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Canonical URL */}
        {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={fullOgImage} />
        <meta property="og:site_name" content={siteName} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={fullTitle} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={fullOgImage} />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      
      {/* Always include organization schema */}
      <Schema type="organization" data={{}} />
      
      {/* Include page-specific schema if provided */}
      {schemaData && (
        <Schema type={schemaData.type} data={schemaData.data} />
      )}
    </>
  );
};

export default SEO;
