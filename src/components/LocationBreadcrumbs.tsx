
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { allAustralianCities } from '@/lib/locationData';
import type { Location } from '@/types/location';

interface LocationBreadcrumbsProps {
  locationSlug?: string;
  className?: string;
}

const LocationBreadcrumbs = ({ locationSlug, className = '' }: LocationBreadcrumbsProps) => {
  // Find location data for the given slug
  const location = locationSlug 
    ? allAustralianCities.find(city => city.slug === locationSlug)
    : null;
  
  if (!location) return null;
  
  // Format country and state for URL paths
  const countrySlug = location.country.toLowerCase().replace(/\s+/g, '-');
  const stateSlug = location.state.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link to="/" className="text-seo-gray-dark hover:text-seo-blue transition-colors">
        Home
      </Link>
      <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
      
      <Link 
        to={`/${countrySlug}`} 
        className="text-seo-gray-dark hover:text-seo-blue transition-colors"
      >
        {location.country}
      </Link>
      <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
      
      <Link 
        to={`/${countrySlug}/${stateSlug}`} 
        className="text-seo-gray-dark hover:text-seo-blue transition-colors"
      >
        {location.state}
      </Link>
      
      {location.county && (
        <>
          <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
          <Link 
            to={`/${countrySlug}/${stateSlug}/${location.county.toLowerCase().replace(/\s+/g, '-')}`} 
            className="text-seo-gray-dark hover:text-seo-blue transition-colors"
          >
            {location.county}
          </Link>
        </>
      )}
      
      <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
      <span className="text-seo-blue font-medium">
        {location.name}
      </span>
    </div>
  );
};

export default LocationBreadcrumbs;
