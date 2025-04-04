
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const MetaTags = ({ title, description, canonicalUrl, ogImage = '/og-image.png' }: MetaTagsProps) => {
  const siteUrl = 'https://seo-focus.com'; // Update with your actual domain
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      {fullUrl && <meta property="og:url" content={fullUrl} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Canonical URL */}
      {fullUrl && <link rel="canonical" href={fullUrl} />}
    </Helmet>
  );
};

export default MetaTags;
