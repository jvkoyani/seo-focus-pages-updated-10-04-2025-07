
// Define the structure for a service
export type Service = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string; // Make this non-optional to ensure all services have images
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
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education", "dental", "chiropractor", "accountant", "automotive-transportation", "auto-repairs", "auto-service"]
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
    forIndustries: ["healthcare", "legal", "real-estate", "hospitality", "dental", "chiropractor", "accountant", "auto-repairs", "auto-service"]
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
    description: "Comprehensive analysis of your website to identify issues affecting your search performance and recommend improvements.",
    shortDescription: "Identify and fix SEO issues",
    icon: "search",
    image: "/service-images/seo-audits.jpg",
    featured: false,
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "education", "dental", "chiropractor", "accountant", "automotive-transportation"]
  },
  {
    id: "digital-pr",
    title: "Digital PR",
    slug: "digital-pr",
    description: "Build your online reputation and authority through strategic digital public relations and brand mentions.",
    shortDescription: "Amplify your online presence",
    icon: "globe",
    image: "/service-images/digital-pr.jpg",
    featured: false,
    forIndustries: ["healthcare", "ecommerce", "legal", "hospitality", "education"]
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    slug: "analytics-reporting",
    description: "Gain valuable insights into your website's performance with comprehensive analytics and regular performance reporting.",
    shortDescription: "Track and measure your success",
    icon: "bar-chart",
    image: "/service-images/analytics-reporting.jpg",
    featured: false,
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education"]
  },
  {
    id: "automotive-seo",
    title: "Automotive SEO",
    slug: "automotive-seo",
    description: "Specialized SEO strategies for auto dealers, repair shops, and other automotive businesses to drive traffic and conversions.",
    shortDescription: "Boost your automotive business visibility",
    icon: "car",
    image: "/service-images/automotive-seo.jpg",
    featured: true,
    forIndustries: ["automotive-transportation", "auto-manufacturing", "auto-repairs", "auto-service", "motorcycle-dealers", "truck-trailer"]
  },
  {
    id: "video-seo",
    title: "Video SEO",
    slug: "video-seo",
    description: "Optimize your video content to rank higher in search results and increase visibility on platforms like YouTube.",
    shortDescription: "Get your videos discovered",
    icon: "video",
    image: "/service-images/video-seo.jpg",
    featured: false,
    forIndustries: ["ecommerce", "education", "automotive-transportation"]
  },
  {
    id: "international-seo",
    title: "International SEO",
    slug: "international-seo",
    description: "Expand your global reach with targeted optimization strategies for international markets and multilingual websites.",
    shortDescription: "Reach global markets",
    icon: "globe",
    image: "/service-images/international-seo.jpg",
    featured: false,
    forIndustries: ["ecommerce", "education", "automotive-transportation"]
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
