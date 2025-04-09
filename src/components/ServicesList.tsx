
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { Service, getAllServices } from '@/lib/servicesData';

interface ServicesListProps {
  limit?: number;
  title?: string;
  subtitle?: string;
  className?: string;
  showImages?: boolean;
  location?: string;
  locationSlug?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({
  limit = 6,
  title = "Our Services",
  subtitle = "Comprehensive SEO solutions tailored for your business",
  className = "",
  showImages = true,
  location,
  locationSlug,
}) => {
  // Get services data, limited by the specified count
  const services = getAllServices().slice(0, limit);
  
  // Determine link path based on whether location is provided
  const getLinkPath = (service: Service) => {
    if (location && locationSlug) {
      return `/location/${locationSlug}/${service.slug}`;
    }
    return `/service/${service.slug}`;
  };

  // Determine the service title based on whether location is provided
  const getServiceTitle = (service: Service) => {
    if (location) {
      return `${service.title} in ${location}`;
    }
    return service.title;
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            {location ? `Services in ${location}` : "Our Expertise"}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {subtitle}
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              animation="fade-in"
              delay={index * 100}
            >
              {showImages && service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white">
                      {getServiceTitle(service)}
                    </h3>
                  </div>
                </div>
              )}
              
              <div className="p-6 flex-grow flex flex-col">
                {!showImages && (
                  <h3 className="text-xl font-bold text-seo-dark mb-3">
                    {getServiceTitle(service)}
                  </h3>
                )}
                
                <p className="text-seo-gray-dark mb-5">
                  {service.description}
                </p>
                
                <Link
                  to={getLinkPath(service)}
                  className="mt-auto inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
