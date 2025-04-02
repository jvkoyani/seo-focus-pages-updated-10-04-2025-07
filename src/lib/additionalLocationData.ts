
import { allAustralianCities } from './locationData';

// Create a type that matches the structure in the original locationData
export type Location = {
  id: string;
  name: string;
  slug: string;
  state: string;
  country: string;
  county?: string;
  image?: string;
  description?: string;
  featured?: boolean;
};

// Additional locations that we want to add to the system
export const additionalLocations: Location[] = [
  // Add your new locations here
  {
    id: "kootaberra",
    name: "Kootaberra",
    slug: "kootaberra",
    state: "South Australia",
    country: "Australia",
    image: "/images/locations/australia/south-australia/kootaberra.jpg",
    description: "A charming town in South Australia known for its friendly atmosphere and beautiful surroundings.",
    featured: true,
  },
  {
    id: "koppamurra",
    name: "Koppamurra",
    slug: "koppamurra",
    state: "South Australia",
    country: "Australia",
    image: "/images/locations/australia/south-australia/koppamurra.jpg",
    description: "A picturesque location in South Australia with stunning natural landscapes and thriving local businesses.",
    featured: false,
  },
  {
    id: "brisbane-north",
    name: "Brisbane North",
    slug: "brisbane-north",
    state: "Queensland",
    country: "Australia",
    county: "Brisbane",
    image: "/images/locations/australia/queensland/brisbane-north.jpg",
    description: "The northern region of Brisbane offering diverse business opportunities and growing communities.",
    featured: true,
  },
  // Add more locations as needed...
];

// Combine original and additional locations
export const extendedAustralianCities = [...allAustralianCities, ...additionalLocations];

// Utility to get all locations, original + additional
export const getAllLocations = (): Location[] => {
  return extendedAustralianCities;
};

// Utility to find a location by slug
export const findLocationBySlug = (slug: string): Location | undefined => {
  return extendedAustralianCities.find(loc => {
    // Explicitly check the type before attempting to use string methods
    if (typeof loc === 'object' && loc !== null) {
      return loc.slug === slug;
    }
    // Handle string locations if any exist in the original data
    if (typeof loc === 'string') {
      // Need to ensure proper type narrowing
      const locString: string = loc;
      const locSlug = locString.toLowerCase().replace(/[\s(),'&-]+/g, '-').replace(/--+/g, '-');
      return locSlug === slug;
    }
    return false;
  });
};

// Utility to get featured locations
export const getFeaturedLocations = (limit: number = 6): Location[] => {
  // First try to find featured locations
  const featured = extendedAustralianCities.filter(loc => 
    typeof loc === 'object' && loc !== null && 'featured' in loc && loc.featured
  ) as Location[];
  
  // If we have enough featured locations, return them with the limit
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  
  // Otherwise, get the remaining from the regular locations
  const remaining = extendedAustralianCities.filter(loc => 
    typeof loc === 'object' && loc !== null && (!('featured' in loc) || !loc.featured)
  ) as Location[];
  
  // Combine featured with some regular locations to meet the limit
  return [...featured, ...remaining].slice(0, limit);
};

// Get locations by state
export const getLocationsByState = (state: string): Location[] => {
  return extendedAustralianCities.filter(loc => 
    typeof loc === 'object' && loc.state.toLowerCase() === state.toLowerCase()
  ) as Location[];
};

// Get all states
export const getAllStates = (): string[] => {
  const states = new Set<string>();
  
  extendedAustralianCities.forEach(loc => {
    if (typeof loc === 'object' && loc.state) {
      states.add(loc.state);
    }
  });
  
  return Array.from(states).sort();
};
