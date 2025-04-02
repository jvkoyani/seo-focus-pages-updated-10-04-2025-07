
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
  benefits: string[];
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
    benefits: [
      "Increase new patient inquiries through organic search",
      "Build trust through optimized reviews and testimonials",
      "Target specific medical conditions and treatments in search"
    ]
  },
  {
    id: "dental",
    title: "Dental SEO",
    slug: "dental",
    description: "Results-driven SEO for dental practices focused on patient acquisition and practice growth.",
    shortDescription: "Grow your dental practice online",
    icon: "stethoscope",
    image: "/industry-images/dental.jpg",
    featured: true,
    benefits: [
      "Increase new patient inquiries through organic search",
      "Rank higher for profitable treatment keywords",
      "Optimize for local search to attract nearby patients"
    ]
  },
  {
    id: "chiropractor",
    title: "Chiropractor SEO",
    slug: "chiropractor",
    description: "Custom SEO solutions for chiropractors to increase patient acquisition and boost local visibility.",
    shortDescription: "Attract more chiropractic patients",
    icon: "activity",
    image: "/industry-images/chiropractor.jpg",
    featured: true,
    benefits: [
      "Attract more patients searching for chiropractic care",
      "Build trust through optimized reviews and testimonials",
      "Target specific conditions and treatments in search"
    ]
  },
  {
    id: "accountant",
    title: "Accountant SEO",
    slug: "accountant",
    description: "Specialized SEO strategies to help accounting firms attract more qualified leads and grow their client base.",
    shortDescription: "Grow your accounting practice",
    icon: "calculator",
    image: "/industry-images/accountant.jpg",
    featured: true,
    benefits: [
      "Attract more qualified leads looking for accounting services",
      "Establish authority in specialized financial niches",
      "Target seasonal tax and accounting keywords"
    ]
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
    benefits: [
      "Optimize product pages for better conversion rates",
      "Improve visibility in Google Shopping results",
      "Increase organic traffic to boost sales"
    ]
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
    benefits: [
      "Target high-value legal keywords in your practice area",
      "Establish authority through content marketing",
      "Optimize for local search to attract nearby clients"
    ]
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
    benefits: [
      "Improve visibility for property listings in search results",
      "Target neighborhood-specific keywords",
      "Build authority through local market insights"
    ]
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
    benefits: [
      "Improve visibility in travel-related searches",
      "Optimize for local attraction and event keywords",
      "Target seasonal and event-based tourism traffic"
    ]
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
    benefits: [
      "Target keywords related to specific courses and programs",
      "Improve visibility during key enrollment periods",
      "Build authority through educational content"
    ]
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
