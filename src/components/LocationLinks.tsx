
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { locations } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

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
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
          animation="fade-in"
          delay={index * 100}
        >
          <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
            {service.title} in {location.name}
          </h3>
          <p className="text-seo-gray-dark mb-4">
            Specialized {service.title.toLowerCase()} strategies for businesses in {location.name}.
          </p>
          <Link
            to={`/location/${location.slug}/${service.slug}`}
            className="inline-flex items-center text-seo-blue font-medium group"
          >
            <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
              Learn more
            </span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default LocationLinks;
