
import { findServiceBySlug, getAllServices } from './servicesData';
import { findIndustryBySlug, getAllIndustries } from './industriesData';
import { findLocationBySlug } from './additionalLocationData';

export interface SEOMetaData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

/**
 * Formats a slug by replacing hyphens with spaces and capitalizing each word
 * @param slug - The slug to format
 * @returns Formatted string
 */
export const formatSlug = (slug: string): string => {
  if (!slug) return '';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Generates SEO metadata based on service, industry, and location slugs
 */
export const generateSEOMeta = (
  serviceSlug?: string,
  industrySlug?: string,
  locationSlug?: string,
  customTitle?: string,
  customDescription?: string
): SEOMetaData => {
  // Default values
  let title = 'SEO Focus';
  let description = 'Professional SEO services tailored to your business needs.';
  let keywords = 'seo, digital marketing, online presence, search engine optimization';
  
  // Fetch data from the slugs if available
  const service = serviceSlug ? findServiceBySlug(serviceSlug) : null;
  const industry = industrySlug ? findIndustryBySlug(industrySlug) : null;
  const location = locationSlug ? findLocationBySlug(locationSlug) : null;
  
  const serviceName = service?.title || formatSlug(serviceSlug || '');
  const industryName = industry?.title || formatSlug(industrySlug || '');
  const locationName = location?.name || formatSlug(locationSlug || '');
  
  // Generate title based on available information
  if (customTitle) {
    title = customTitle;
  } else if (service && industry && location) {
    title = `${serviceName} for ${industryName} in ${locationName} | SEO Focus`;
  } else if (service && industry) {
    title = `${serviceName} for ${industryName} | SEO Focus`;
  } else if (service && location) {
    title = `${serviceName} in ${locationName} | SEO Focus`;
  } else if (service) {
    title = `${serviceName} | SEO Focus`;
  } else if (industry) {
    title = `${industryName} Industry Solutions | SEO Focus`;
  } else if (location) {
    title = `SEO Services in ${locationName} | SEO Focus`;
  }
  
  // Generate description based on available information
  if (customDescription) {
    description = customDescription;
  } else if (service && industry && location) {
    description = `Learn more about our ${serviceName}, tailored for the ${industryName} industry, available in ${locationName}. Contact us for a custom strategy.`;
  } else if (service && industry) {
    description = `Discover our ${serviceName} specifically designed for the ${industryName} industry. Get in touch to learn how we can help your business grow.`;
  } else if (service && location) {
    description = `Explore our ${serviceName} available in ${locationName}. Contact our local team of experts for more information.`;
  } else if (service) {
    description = `Learn about our professional ${serviceName} and how they can help improve your online presence and business growth.`;
  } else if (industry) {
    description = `Specialized SEO solutions for the ${industryName} industry. Discover how we can help your business excel in this competitive market.`;
  } else if (location) {
    description = `Local SEO services in ${locationName}. Our team of experts is ready to help your business grow in the local market.`;
  }
  
  // Generate keywords based on available information
  let keywordsArray = ['seo', 'digital marketing'];
  
  if (service) {
    keywordsArray.push(serviceName.toLowerCase());
  }
  if (industry) {
    keywordsArray.push(industryName.toLowerCase());
  }
  if (location) {
    keywordsArray.push(locationName.toLowerCase());
  }
  
  if (service && industry) {
    keywordsArray.push(`${serviceName.toLowerCase()} for ${industryName.toLowerCase()}`);
  }
  
  if (service && location) {
    keywordsArray.push(`${serviceName.toLowerCase()} in ${locationName.toLowerCase()}`);
  }
  
  if (industry && location) {
    keywordsArray.push(`${industryName.toLowerCase()} in ${locationName.toLowerCase()}`);
  }
  
  // Filter out duplicates and join
  keywords = [...new Set(keywordsArray)].join(', ');
  
  // Generate canonical URL (optional)
  let canonicalUrl = undefined;
  if (service && industry && location) {
    canonicalUrl = `/${serviceSlug}-for-${industrySlug}-in-${locationSlug}`;
  } else if (service && location) {
    canonicalUrl = `/${serviceSlug}-${locationSlug}`;
  } else if (service) {
    canonicalUrl = `/service/${serviceSlug}`;
  } else if (industry) {
    canonicalUrl = `/industry/${industrySlug}`;
  } else if (location) {
    canonicalUrl = `/location/${locationSlug}`;
  }
  
  return {
    title,
    description,
    keywords,
    canonicalUrl,
    ogType: 'website'
  };
};

/**
 * Hook-friendly function that returns SEO metadata for the current page
 */
export const getPageSEO = (
  pageType: 'service' | 'industry' | 'location' | 'service-industry' | 'service-location' | 'service-industry-location' | 'blog' | 'case-study' | 'general',
  slugs: {
    serviceSlug?: string;
    industrySlug?: string;
    locationSlug?: string;
    blogSlug?: string;
    caseStudySlug?: string;
  },
  customData?: {
    title?: string;
    description?: string;
  }
): SEOMetaData => {
  switch (pageType) {
    case 'service':
      return generateSEOMeta(slugs.serviceSlug, undefined, undefined, customData?.title, customData?.description);
    case 'industry':
      return generateSEOMeta(undefined, slugs.industrySlug, undefined, customData?.title, customData?.description);
    case 'location':
      return generateSEOMeta(undefined, undefined, slugs.locationSlug, customData?.title, customData?.description);
    case 'service-industry':
      return generateSEOMeta(slugs.serviceSlug, slugs.industrySlug, undefined, customData?.title, customData?.description);
    case 'service-location':
      return generateSEOMeta(slugs.serviceSlug, undefined, slugs.locationSlug, customData?.title, customData?.description);
    case 'service-industry-location':
      return generateSEOMeta(slugs.serviceSlug, slugs.industrySlug, slugs.locationSlug, customData?.title, customData?.description);
    default:
      return {
        title: customData?.title || 'SEO Focus | Professional SEO Services',
        description: customData?.description || 'Professional SEO services tailored to your business needs.',
        keywords: 'seo, digital marketing, online presence, search engine optimization'
      };
  }
};
