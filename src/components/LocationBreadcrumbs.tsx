
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import { locations } from '@/lib/data';

interface LocationBreadcrumbsProps {
  locationSlug: string;
  serviceSlug?: string;
  className?: string;
}

const LocationBreadcrumbs = ({ locationSlug, serviceSlug, className = '' }: LocationBreadcrumbsProps) => {
  const locationData = locations.find(loc => loc.slug === locationSlug);
  
  if (!locationData) return null;
  
  return (
    <div className={`flex items-center text-sm text-seo-gray-dark ${className}`}>
      <Link 
        to="/" 
        className="hover:text-seo-blue transition-colors"
      >
        Home
      </Link>
      <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
      
      {/* Country */}
      <Link 
        to="/australia" 
        className="hover:text-seo-blue transition-colors"
      >
        Australia
      </Link>
      <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
      
      {/* State */}
      <Link 
        to={`/australia/${locationData.state.toLowerCase().replace(/\s+/g, '-')}`}
        className="hover:text-seo-blue transition-colors"
      >
        {locationData.state}
      </Link>
      <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
      
      {/* County (if available) */}
      {locationData.county && (
        <>
          <Link 
            to={`/australia/${locationData.state.toLowerCase().replace(/\s+/g, '-')}/${locationData.county.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-seo-blue transition-colors"
          >
            {locationData.county}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
        </>
      )}
      
      {/* Location (City) */}
      <Link 
        to={`/location/${locationData.slug}`}
        className="hover:text-seo-blue transition-colors flex items-center"
      >
        <MapPin className="h-3 w-3 mr-1" />
        {locationData.name}
      </Link>
      
      {/* Service (if available) */}
      {serviceSlug && (
        <>
          <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
          <span className="text-seo-blue font-medium">
            {serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </>
      )}
    </div>
  );
};

export default LocationBreadcrumbs;
