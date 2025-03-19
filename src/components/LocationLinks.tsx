
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { locations } from '@/lib/data';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';

interface LocationLinksProps {
  service: {
    title: string;
    slug: string;
  };
}

const LocationLinks = ({ service }: LocationLinksProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {locations.map((location, index) => (
        <AnimatedSection
          key={location.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
          animation="fade-in"
          delay={index * 100}
        >
          <div className="relative h-40 overflow-hidden">
            <img 
              src={location.image} 
              alt={location.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 flex items-center">
              <MapPin className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">{location.name}</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
              {service.title} in {location.name}
            </h3>
            <div className="mb-4 bg-seo-blue/5 p-3 rounded-lg border-l-2 border-seo-blue">
              <p className="text-seo-gray-dark">
                Specialized {service.title.toLowerCase()} strategies for businesses in {location.name}.
              </p>
            </div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-green-600 font-medium">High growth potential</span>
            </div>
            <Link
              to={`/location/${location.slug}/${service.slug}`}
              className="inline-flex items-center bg-seo-blue text-white px-4 py-2 rounded-md group-hover:bg-seo-blue-light transition-colors"
            >
              <span>Explore strategies</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default LocationLinks;
