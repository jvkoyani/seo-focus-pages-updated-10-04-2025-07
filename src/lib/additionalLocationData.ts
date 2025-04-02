
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
  },
  {
    id: "koppamurra",
    name: "Koppamurra",
    slug: "koppamurra",
    state: "South Australia",
    country: "Australia",
    image: "/images/locations/australia/south-australia/koppamurra.jpg",
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
