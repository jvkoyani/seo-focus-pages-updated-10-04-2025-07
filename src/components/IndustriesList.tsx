
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { Industry, getAllIndustries } from '@/lib/industriesData';
import { getServicesForIndustry } from '@/lib/servicesData';

interface IndustriesListProps {
  limit?: number;
  title?: string;
  subtitle?: string;
  className?: string;
  showImages?: boolean;
  location?: string;
  locationSlug?: string;
  serviceSlug?: string;
  serviceName?: string;
}

const IndustriesList: React.FC<IndustriesListProps> = ({
  limit = 6,
  title = "Industries We Serve",
  subtitle = "Specialized SEO strategies for different business sectors",
  className = "",
  showImages = true,
  location,
  locationSlug,
  serviceSlug,
  serviceName,
}) => {
  // Get industries data, limited by the specified count
  const industries = getAllIndustries().slice(0, limit);
  
  // Determine link path based on context
  const getLinkPath = (industry: Industry) => {
    if (serviceSlug && locationSlug) {
      // Service + Industry + Location pattern
      return `/${serviceSlug}-for-${industry.slug}-in-${locationSlug}`;
    } else if (location && locationSlug) {
      // Location + Industry pattern
      return `/location/${locationSlug}/industry/${industry.slug}`;
    }
    // Default industry pattern
    return `/industry/${industry.slug}`;
  };

  // Determine the industry title based on context
  const getIndustryTitle = (industry: Industry) => {
    if (serviceName && location) {
      return `${serviceName} for ${industry.title} in ${location}`;
    } else if (location) {
      return `${industry.title} in ${location}`;
    }
    return industry.title;
  };

  // Get context label for the section
  const getContextLabel = () => {
    if (serviceName && location) {
      return `${serviceName} by Industry in ${location}`;
    } else if (location) {
      return `Industry Focus in ${location}`;
    }
    return "Industry Expertise";
  };

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            {getContextLabel()}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {subtitle}
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            // Get services for this industry if we have service context
            const industryServices = serviceSlug ? getServicesForIndustry(industry.id) : [];
            const hasServiceForIndustry = serviceSlug ? industryServices.some(s => s.slug === serviceSlug) : true;
            
            // Only show industry if the service applies to it
            if (serviceSlug && !hasServiceForIndustry) {
              return null;
            }

            return (
              <AnimatedSection
                key={industry.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
                animation="fade-in"
                delay={index * 100}
              >
                {showImages && industry.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <h3 className="text-xl font-bold text-white">
                        {getIndustryTitle(industry)}
                      </h3>
                    </div>
                  </div>
                )}
                
                <div className="p-6 flex-grow flex flex-col">
                  {!showImages && (
                    <h3 className="text-xl font-bold text-seo-dark mb-3">
                      {getIndustryTitle(industry)}
                    </h3>
                  )}
                  
                  <p className="text-seo-gray-dark mb-5">
                    {industry.description}
                  </p>
                  
                  <Link
                    to={getLinkPath(industry)}
                    className="mt-auto inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesList;
