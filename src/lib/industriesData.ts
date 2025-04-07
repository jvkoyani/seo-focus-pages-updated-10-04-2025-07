
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
  id: "automotive-transportation",
  title: "Automotive & Transportation",
  slug: "automotive-transportation",
  description: "Comprehensive SEO solutions for businesses in the automotive and transportation sectors to drive more traffic, leads, and sales.",
  shortDescription: "Fuel growth across auto and transport sectors",
  icon: "car-front",
  image: "/industry-images/automotive-transportation.jpg",
  featured: true,
  benefits: [
    "Increase visibility for vehicle and service-based businesses",
    "Target customers searching for auto repairs, sales, and logistics",
    "Boost bookings, inquiries, and showroom traffic"
  ]
},
  {
  id: "auto-manufacturing",
  title: "Auto Manufacturing",
  slug: "auto-manufacturing",
  description: "Boost visibility for vehicle manufacturers with SEO strategies focused on brand visibility, innovation, and dealer support.",
  shortDescription: "Drive brand and dealer growth",
  icon: "car",
  image: "/industry-images/auto-manufacturing.jpg",
  featured: false,
  benefits: [
    "Rank for vehicle model and brand-related keywords",
    "Improve search presence for dealerships and distributors",
    "Build authority through industry news and product launches"
  ]
},
{
  id: "auto-repairs",
  title: "Auto Repairs",
  slug: "auto-repairs",
  description: "Help auto repair shops get discovered by more local customers searching for reliable car repair services.",
  shortDescription: "Get more repair customers",
  icon: "wrench",
  image: "/industry-images/auto-repairs.jpg",
  featured: true,
  benefits: [
    "Rank higher for local auto repair keywords",
    "Increase bookings with optimized service pages",
    "Build trust with reviews and service certifications"
  ]
},
{
  id: "auto-service",
  title: "Auto Service",
  slug: "auto-service",
  description: "Target car owners looking for regular maintenance with SEO strategies tailored for auto service centers.",
  shortDescription: "Boost your service appointments",
  icon: "tool",
  image: "/industry-images/auto-service.jpg",
  featured: true,
  benefits: [
    "Attract more local maintenance clients",
    "Target service-specific keywords like oil change or tire rotation",
    "Improve visibility in Google Maps and local listings"
  ]
},
{
  id: "motorcycle-dealers",
  title: "Motorcycle Dealers",
  slug: "motorcycle-dealers",
  description: "Drive more sales and showroom visits with SEO tailored to motorcycle brands and dealerships.",
  shortDescription: "Sell more bikes online and offline",
  icon: "bike",
  image: "/industry-images/motorcycle-dealers.jpg",
  featured: false,
  benefits: [
    "Rank for specific motorcycle brands and models",
    "Attract enthusiasts and first-time buyers",
    "Increase traffic to showroom and booking pages"
  ]
},
{
  id: "truck-trailer",
  title: "Truck & Trailer Companies",
  slug: "truck-trailer",
  description: "Improve lead generation and fleet visibility for truck and trailer businesses with targeted SEO strategies.",
  shortDescription: "Grow leads for truck and trailer services",
  icon: "truck",
  image: "/industry-images/truck-trailer.jpg",
  featured: false,
  benefits: [
    "Target B2B and B2C truck-related keywords",
    "Rank for fleet services and vehicle sales",
    "Improve visibility for service locations and logistics"
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
