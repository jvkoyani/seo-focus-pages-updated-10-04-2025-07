
// Define the structure for a service
export type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: string;
  featured?: boolean;
  forIndustries?: string[]; // Array of industry IDs this service is applicable to
};

// Define all available services
export const services: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description: "Boost your website's visibility in search results with our comprehensive SEO strategies tailored to your business goals.",
    shortDescription: "Improve your search rankings",
    icon: "trending-up",
    image: "/service-images/search-engine-optimization.jpg",
    featured: true,
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education", "dental", "chiropractor", "accountant"]
  },
  {
    id: "local-seo",
    title: "Local SEO",
    slug: "local-seo",
    description: "Target customers in your specific area with location-based optimization strategies that drive foot traffic and local conversions.",
    shortDescription: "Dominate local search results",
    icon: "map-pin",
    image: "/service-images/local-seo.jpg",
    featured: true,
    forIndustries: ["healthcare", "legal", "real-estate", "hospitality", "dental", "chiropractor", "accountant"]
  },
  {
    id: "technical-seo",
    title: "Technical SEO",
    slug: "technical-seo",
    description: "Enhance your website's foundation with technical improvements that boost crawlability, indexing, and overall performance.",
    shortDescription: "Optimize your site's technical elements",
    icon: "settings",
    image: "/service-images/technical-seo.jpg",
    featured: false,
    forIndustries: ["healthcare", "ecommerce", "legal", "education", "dental", "chiropractor", "accountant"]
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    slug: "content-marketing",
    description: "Create valuable, relevant content that attracts and engages your target audience while establishing your brand as an authority.",
    shortDescription: "Create content that converts",
    icon: "file-text",
    image: "/service-images/content-marketing.jpg",
    featured: true,
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education", "dental", "chiropractor", "accountant"]
  },
  {
    id: "link-building",
    title: "Link Building",
    slug: "link-building",
    description: "Build high-quality backlinks that boost your website's authority and improve your rankings for competitive keywords.",
    shortDescription: "Increase your site's authority",
    icon: "link",
    image: "/service-images/link-building.jpg",
    featured: false,
    forIndustries: ["healthcare", "ecommerce", "legal", "education", "dental", "chiropractor", "accountant"]
  },
  {
    id: "ecommerce-seo",
    title: "E-commerce SEO",
    slug: "ecommerce-seo",
    description: "Specialized optimization strategies for online stores that increase product visibility and drive more sales.",
    shortDescription: "Boost product visibility and sales",
    icon: "shopping-cart",
    image: "/service-images/ecommerce-seo.jpg",
    featured: true,
    forIndustries: ["ecommerce"]
  },
  {
    id: "seo-audits",
    title: "SEO Audits",
    slug: "seo-audits",
    description: "Comprehensive analysis of your website's SEO performance with actionable recommendations to improve your search rankings.",
    shortDescription: "Analyze and optimize your SEO",
    icon: "search",
    image: "/service-images/seo-audits.jpg",
    featured: false,
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education", "dental", "chiropractor", "accountant"]
  }
];

// Get all services
export const getAllServices = (): Service[] => {
  return services;
};

// Find a service by slug
export const findServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

// Get featured services
export const getFeaturedServices = (limit: number = 6): Service[] => {
  // First try to find featured services
  const featured = services.filter(service => service.featured);
  
  // If we have enough featured services, return them with the limit
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  
  // Otherwise, get the remaining from the regular services
  const remaining = services.filter(service => !service.featured);
  
  // Combine featured with some regular services to meet the limit
  return [...featured, ...remaining].slice(0, limit);
};

// Get services for a specific industry
export const getServicesForIndustry = (industryId: string): Service[] => {
  return services.filter(service => 
    service.forIndustries && service.forIndustries.includes(industryId)
  );
};
