
import { useMemo } from 'react';

interface DynamicMetaTagsOptions {
  service?: {
    name: string;
    description: string;
  };
  industry?: {
    name: string;
    description: string;
  };
  location?: {
    name: string;
    state?: string;
  };
  slug?: string;
  basePath?: string;
}

export const useDynamicMetaTags = (options: DynamicMetaTagsOptions) => {
  const { service, industry, location, slug, basePath } = options;
  
  const metaTags = useMemo(() => {
    // Base path for canonical URL
    let canonicalUrl = basePath || '';
    if (slug) {
      canonicalUrl += `/${slug}`;
    }
    
    // Generate title based on available context
    let title = 'SEO Focus';
    let description = 'Professional SEO services to improve your website\'s visibility and drive more traffic.';
    
    if (service && industry && location) {
      // All three contexts available
      title = `${service.name} for ${industry.name} in ${location.name} | SEO Focus`;
      description = `Professional ${service.name} services tailored specifically for ${industry.name} businesses in ${location.name}. Improve search rankings and attract more local customers.`;
      
    } else if (service && industry) {
      // Service and industry
      title = `${service.name} for ${industry.name} | SEO Focus`;
      description = `Specialized ${service.name} strategies designed for ${industry.name} businesses. Improve your online visibility and drive targeted traffic.`;
      
    } else if (service && location) {
      // Service and location
      title = `${service.name} in ${location.name} | SEO Focus`;
      description = `Local ${service.name} services in ${location.name}${location.state ? `, ${location.state}` : ''}. Boost your search rankings and attract more customers in your area.`;
      
    } else if (industry && location) {
      // Industry and location
      title = `SEO for ${industry.name} in ${location.name} | SEO Focus`;
      description = `Industry-specific SEO solutions for ${industry.name} businesses in ${location.name}. Improve your local search visibility and reach more customers.`;
      
    } else if (service) {
      // Just service
      title = `${service.name} | SEO Focus`;
      description = `${service.description || `Professional ${service.name} services to improve your website's visibility and drive more targeted traffic.`}`;
      
    } else if (industry) {
      // Just industry
      title = `SEO for ${industry.name} | SEO Focus`;
      description = `Industry-specific SEO strategies designed for ${industry.name} businesses. Improve your online presence and reach your target audience.`;
      
    } else if (location) {
      // Just location
      title = `SEO Services in ${location.name}${location.state ? `, ${location.state}` : ''} | SEO Focus`;
      description = `Local SEO services in ${location.name} designed to help businesses improve their online presence and attract more local customers.`;
    }
    
    return {
      title,
      description,
      canonicalUrl
    };
  }, [service, industry, location, slug, basePath]);
  
  return metaTags;
};
