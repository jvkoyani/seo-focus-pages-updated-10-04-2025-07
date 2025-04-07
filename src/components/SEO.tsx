
import { Helmet } from 'react-helmet-async';
import { SEOMetaData } from '@/lib/seoUtils';

interface SEOProps extends SEOMetaData {
  // Add key prop to force re-render on route change
  routeKey?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/og-image.png',
  ogType = 'website',
  routeKey
}) => {
  const siteName = 'SEO Focus';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const siteUrl = 'https://seofocus.com';
  const fullCanonicalUrl = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : undefined;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  console.log(`SEO Component rendering for: ${title} with routeKey: ${routeKey}`);
  
  return (
    <Helmet key={routeKey || title}>
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
      
      {/* Key property to ensure meta tags are updated correctly when navigating */}
      <meta name="key" content={routeKey || fullTitle + description} />
    </Helmet>
  );
};

export default SEO;
