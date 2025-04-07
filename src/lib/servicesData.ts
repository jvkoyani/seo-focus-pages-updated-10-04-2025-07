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
  metaTitle?: string; // Added for SEO purposes
  metaDescription?: string; // Added for SEO purposes
  steps?: Array<{ title: string; description: string }>; // Added for service steps
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
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education", "dental", "chiropractor", "accountant"],
    metaTitle: "SEO Services | Improve Your Search Rankings",
    metaDescription: "Boost your website's visibility in search results with our comprehensive SEO strategies tailored to your business goals.",
    steps: [
      { title: "Keyword Research", description: "Identify the keywords that your target audience is searching for." },
      { title: "On-Page Optimization", description: "Optimize your website's content, structure, and meta tags for better search engine visibility." },
      { title: "Link Building", description: "Build high-quality backlinks that boost your website's authority and improve your rankings for competitive keywords." }
    ]
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
    forIndustries: ["healthcare", "legal", "real-estate", "hospitality", "dental", "chiropractor", "accountant"],
    metaTitle: "Local SEO Services | Drive Local Conversions",
    metaDescription: "Target customers in your specific area with location-based optimization strategies that drive foot traffic and local conversions.",
    steps: [
      { title: "Local Keyword Research", description: "Identify the keywords that your target audience is searching for in your local area." },
      { title: "Local On-Page Optimization", description: "Optimize your website's content, structure, and meta tags for better search engine visibility in your local area." },
      { title: "Local Link Building", description: "Build high-quality backlinks that boost your website's authority and improve your rankings for competitive keywords in your local area." }
    ]
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
    forIndustries: ["healthcare", "ecommerce", "legal", "education", "dental", "chiropractor", "accountant"],
    metaTitle: "Technical SEO Services | Optimize Your Site's Technical Elements",
    metaDescription: "Enhance your website's foundation with technical improvements that boost crawlability, indexing, and overall performance.",
    steps: [
      { title: "Technical Keyword Research", description: "Identify the keywords that your target audience is searching for and optimize your website's technical elements for better search engine visibility." },
      { title: "Technical On-Page Optimization", description: "Optimize your website's content, structure, and meta tags for better search engine visibility." },
      { title: "Technical Link Building", description: "Build high-quality backlinks that boost your website's authority and improve your rankings for competitive keywords." }
    ]
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
    forIndustries: ["healthcare", "ecommerce", "legal", "real-estate", "hospitality", "education", "dental", "chiropractor", "accountant"],
    metaTitle: "Content Marketing Services | Create Valuable Content",
    metaDescription: "Create valuable, relevant content that attracts and engages your target audience while establishing your brand as an authority.",
    steps: [
      { title: "Content Strategy", description: "Develop a content strategy that aligns with your business goals and target audience." },
      { title: "Content Creation", description: "Create high-quality, relevant content that attracts and engages your target audience." },
      { title: "Content Promotion", description: "Promote your content through various channels to reach your target audience." }
    ]
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
    forIndustries: ["healthcare", "ecommerce", "legal", "education", "dental", "chiropractor", "accountant"],
    metaTitle: "Link Building Services | Increase Your Site's Authority",
    metaDescription: "Build high-quality backlinks that boost your website's authority and improve your rankings for competitive keywords.",
    steps: [
      { title: "Link Research", description: "Identify high-quality backlink opportunities that can boost your website's authority." },
      { title: "Link Acquisition", description: "Acquire high-quality backlinks through various methods such as guest posting, article marketing, and social media." },
      { title: "Link Optimization", description: "Optimize your backlinks for better search engine visibility and authority." }
    ]
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
    forIndustries: ["ecommerce"],
    metaTitle: "E-commerce SEO Services | Boost Product Visibility and Sales",
    metaDescription: "Specialized optimization strategies for online stores that increase product visibility and drive more sales.",
    steps: [
      { title: "Product Keyword Research", description: "Identify the keywords that your target audience is searching for for your products." },
      { title: "Product On-Page Optimization", description: "Optimize your product pages for better search engine visibility and product visibility." },
      { title: "Product Link Building", description: "Build high-quality backlinks that boost your website's authority and improve your rankings for competitive keywords for your products." }
    ]
  },
  // Add more services as needed
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
