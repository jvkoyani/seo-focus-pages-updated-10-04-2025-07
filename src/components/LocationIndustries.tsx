
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Industry, getAllIndustries } from '@/lib/industriesData';
import { Service, getFeaturedServices } from '@/lib/servicesData';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationIndustriesProps {
  locationName: string;
  locationSlug: string;
  limit?: number;
  showAllLink?: boolean;
  className?: string;
}

const LocationIndustries: React.FC<LocationIndustriesProps> = ({
  locationName,
  locationSlug,
  limit = 6,
  showAllLink = true,
  className,
}) => {
  const industries = getAllIndustries().slice(0, limit);
  const featuredServices = getFeaturedServices(3);
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-8 w-8 text-seo-blue" /> : null;
  };

  return (
    <section className={cn("py-16 bg-seo-gray-light", className)}>
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center max-w-3xl mx-auto mb-12"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Industry Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            Industry-Specific SEO in {locationName}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            Tailored SEO strategies for different business sectors in {locationName}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <AnimatedSection 
              key={industry.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
              animation="fade-in"
              delay={100 * index}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-seo-blue/5 to-transparent rounded-bl-full"></div>
                
                <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIconComponent(industry.icon)}
                </div>
                
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {industry.title} in {locationName}
                </h3>
                
                <p className="text-seo-gray-dark mb-6">
                  {industry.description}
                </p>
                
                <div className="mb-6 p-3 rounded-lg bg-gradient-to-r from-seo-blue/5 to-transparent border-l-2 border-seo-blue">
                  <h4 className="font-medium text-seo-dark mb-2">Key benefits:</h4>
                  <ul className="space-y-1">
                    {industry.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-sm text-seo-gray-dark flex items-start">
                        <span className="text-seo-blue mr-2">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/location/${locationSlug}/industry/${industry.slug}`} 
                  className="inline-flex items-center text-seo-blue font-medium group mt-2 relative"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    Learn more
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-seo-blue/5 scale-0 group-hover:scale-100 rounded-md transition-transform duration-300 -z-10"></div>
                </Link>
                
                {/* Service combinations for this industry */}
                {index < 3 && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-seo-dark mb-2 text-sm">Popular services for {industry.title}:</h4>
                    <ul className="space-y-2">
                      {featuredServices.slice(0, 2).map((service) => (
                        <li key={service.id}>
                          <Link 
                            to={`/${service.slug}-for-${industry.slug}-in-${locationSlug}`}
                            className="text-sm text-seo-gray-dark hover:text-seo-blue transition-colors"
                          >
                            {service.title} for {industry.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {showAllLink && (
          <AnimatedSection 
            className="text-center mt-12"
            animation="slide-up"
            delay={300}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to={`/location/${locationSlug}/industries`} 
                className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">View All Industry Solutions</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-seo-blue-light to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                to={`/location/${locationSlug}/all`} 
                className="inline-flex items-center border border-seo-blue text-seo-blue hover:bg-seo-blue/5 font-medium py-3 px-8 rounded-md transition-colors group"
              >
                <span>View All Services & Industries</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default LocationIndustries;
