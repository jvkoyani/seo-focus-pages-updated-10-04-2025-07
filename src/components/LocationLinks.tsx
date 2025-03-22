
import React from 'react';
import { Link } from 'react-router-dom';
import { allAustralianCities } from '@/lib/locationData';
import AnimatedSection from './AnimatedSection';

// City image mapping for all locations
const cityImages: Record<string, string> = {
  'sydney': 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=500&q=80',
  'melbourne': 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?auto=format&fit=crop&w=500&q=80',
  'brisbane': 'https://images.unsplash.com/photo-1566734904496-9309bb1798b3?auto=format&fit=crop&w=500&q=80',
  'perth': 'https://images.unsplash.com/photo-1573935448851-4b07c29ee181?auto=format&fit=crop&w=500&q=80',
  'adelaide': 'https://images.unsplash.com/photo-1566208541068-ffdb5471e9bf?auto=format&fit=crop&w=500&q=80',
  'gold-coast': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=500&q=80',
  'canberra': 'https://images.unsplash.com/photo-1560416313-414b33c856a9?auto=format&fit=crop&w=500&q=80',
  'hobart': 'https://images.unsplash.com/photo-1617173944883-6ffbd35d584c?auto=format&fit=crop&w=500&q=80',
  'darwin': 'https://images.unsplash.com/photo-1682077284475-5645ca105e50?auto=format&fit=crop&w=500&q=80',
  'wollongong': 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=500&q=80',
  'newcastle': 'https://images.unsplash.com/photo-1612880202126-7243844d88bf?auto=format&fit=crop&w=500&q=80',
  'cairns': 'https://images.unsplash.com/photo-1563006850-39d5c8aea6f0?auto=format&fit=crop&w=500&q=80',
  'geelong': 'https://images.unsplash.com/photo-1531497018135-f81453863e36?auto=format&fit=crop&w=500&q=80',
  'townsville': 'https://images.unsplash.com/photo-1613166845873-5241abe59e2a?auto=format&fit=crop&w=500&q=80', 
  'sunshine-coast': 'https://images.unsplash.com/photo-1523761776026-4f21a319d5f0?auto=format&fit=crop&w=500&q=80',
  'wagga-wagga': 'https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?auto=format&fit=crop&w=500&q=80',
  'bundaberg': 'https://images.unsplash.com/photo-1519160558534-579f5106e43f?auto=format&fit=crop&w=500&q=80',
  'rockhampton': 'https://images.unsplash.com/photo-1527123575449-3edc08a9cd63?auto=format&fit=crop&w=500&q=80',
  'ballarat': 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?auto=format&fit=crop&w=500&q=80',
  'bendigo': 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80',
  'launceston': 'https://images.unsplash.com/photo-1612712191126-fe33c5b7b1c3?auto=format&fit=crop&w=500&q=80',
  'mackay': 'https://images.unsplash.com/photo-1555893073-5b12b1ed324a?auto=format&fit=crop&w=500&q=80',
  'toowoomba': 'https://images.unsplash.com/photo-1503221043305-f7498f8b7888?auto=format&fit=crop&w=500&q=80',
  'bunbury': 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=500&q=80'
};

// Default fallback image for cities without a specific image
const defaultCityImage = 'https://images.unsplash.com/photo-1523950704592-ee4866469b4c?auto=format&fit=crop&w=500&q=80';

interface LocationLinksProps {
  service?: any;
  currentLocation?: string;
  showAll?: boolean;
}

const LocationLinks = ({ service, currentLocation, showAll = false }: LocationLinksProps) => {
  // Filter out the current location if it exists
  const filteredCities = allAustralianCities
    .filter(city => !currentLocation || city.slug !== currentLocation)
    .sort((a, b) => a.name.localeCompare(b.name));
  
  // If not showing all, limit to 8 cities, preferring major ones
  const displayCities = showAll 
    ? filteredCities 
    : filteredCities.slice(0, 8);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayCities.map((city, index) => (
        <AnimatedSection
          key={city.slug}
          animation="fade-in"
          delay={index * 50}
          className="group"
        >
          <Link 
            to={service 
              ? `/location/${city.slug}/${service.slug}` 
              : `/location/${city.slug}`} 
            className="block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-36 overflow-hidden">
              <img 
                src={cityImages[city.slug] || defaultCityImage} 
                alt={`${city.name}, ${city.state}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex items-end">
                <div>
                  <h3 className="text-white font-semibold text-lg">{city.name}</h3>
                  <p className="text-white/80 text-sm">{city.state}</p>
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      ))}
      
      {!showAll && filteredCities.length > 8 && (
        <AnimatedSection
          animation="fade-in"
          delay={400}
          className="flex items-center justify-center"
        >
          <Link 
            to={service ? `/service/${service.slug}` : "/location-sitemap"} 
            className="text-seo-blue hover:text-seo-blue-light font-medium inline-flex flex-col items-center justify-center h-full p-4 text-center"
          >
            <div className="bg-seo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-seo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </div>
            <span>View All Locations</span>
          </Link>
        </AnimatedSection>
      )}
    </div>
  );
};

export default LocationLinks;
