// Define the structure for an industry
export type Industry = {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image?: string;
  featured?: boolean;
};

// Define all available industries
export const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    slug: "healthcare",
    description: "Specialized SEO strategies for medical practices, hospitals, and healthcare providers to attract more patients.",
    shortDescription: "Attract more patients online",
    icon: "heart-pulse",
    image: "/industry-images/healthcare.jpg",
    featured: true,
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    slug: "ecommerce",
    description: "Boost your online store's visibility, increase product sales, and outrank competitors with tailored e-commerce SEO.",
    shortDescription: "Increase online sales",
    icon: "shopping-bag",
    image: "/industry-images/ecommerce.jpg",
    featured: true,
  },
  {
    id: "legal",
    title: "Legal",
    slug: "legal",
    description: "Attract high-quality leads for your law firm with targeted SEO strategies focused on specific practice areas.",
    shortDescription: "Generate qualified legal clients",
    icon: "scale",
    image: "/industry-images/legal.jpg",
    featured: true,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    slug: "real-estate",
    description: "Stand out in competitive real estate markets with location-specific optimization to attract buyers and sellers.",
    shortDescription: "Attract property buyers and sellers",
    icon: "home",
    image: "/industry-images/real-estate.jpg",
    featured: false,
  },
  {
    id: "hospitality",
    title: "Hospitality",
    slug: "hospitality",
    description: "Increase bookings and reservations for hotels, restaurants, and tourism businesses with specialized SEO.",
    shortDescription: "Boost bookings and reservations",
    icon: "utensils",
    image: "/industry-images/hospitality.jpg",
    featured: false,
  },
  {
    id: "education",
    title: "Education",
    slug: "education",
    description: "Help educational institutions attract more students with targeted optimization strategies.",
    shortDescription: "Increase student enrollment",
    icon: "graduation-cap",
    image: "/industry-images/education.jpg",
    featured: true,
  },
  // Add more industries as needed
];

// Get all industries
export const getAllIndustries = (): Industry[] => {
  return industries;
};

// Find an industry by slug
export const findIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};

// Get featured industries
export const getFeaturedIndustries = (limit: number = 6): Industry[] => {
  // First try to find featured industries
  const featured = industries.filter(industry => industry.featured);
  
  // If we have enough featured industries, return them with the limit
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  
  // Otherwise, get the remaining from the regular industries
  const remaining = industries.filter(industry => !industry.featured);
  
  // Combine featured with some regular industries to meet the limit
  return [...featured, ...remaining].slice(0, limit);
};
