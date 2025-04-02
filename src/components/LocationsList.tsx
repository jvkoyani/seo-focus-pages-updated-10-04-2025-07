
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';
import { getAllLocations, getFeaturedLocations, Location } from '@/lib/additionalLocationData';

interface LocationsListProps {
  limit?: number;
  title?: string;
  subtitle?: string;
  className?: string;
  showImages?: boolean;
  onlyFeatured?: boolean;
  filterByState?: string;
}

const LocationsList: React.FC<LocationsListProps> = ({
  limit = 6,
  title = "Our Service Locations",
  subtitle = "Specialized SEO solutions for businesses in these areas",
  className = "",
  showImages = true,
  onlyFeatured = false,
  filterByState,
}) => {
  // Get locations data, filtered by the criteria and limited by the specified count
  const getFilteredLocations = () => {
    let locations: Location[] = [];
    
    if (onlyFeatured) {
      locations = getFeaturedLocations(limit);
    } else {
      locations = getAllLocations().filter(loc => typeof loc === 'object') as Location[];
      
      if (filterByState) {
        locations = locations.filter(loc => 
          loc.state.toLowerCase() === filterByState.toLowerCase()
        );
      }
    }
    
    return locations.slice(0, limit);
  };
  
  const locations = getFilteredLocations();

  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Service Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {subtitle}
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <AnimatedSection
              key={location.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              animation="fade-in"
              delay={index * 100}
            >
              {showImages && location.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-white mr-2" />
                      <h3 className="text-xl font-bold text-white">
                        {location.name}
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-6 flex-grow flex flex-col">
                {!showImages && (
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-seo-blue mr-2" />
                    <h3 className="text-xl font-bold text-seo-dark">
                      {location.name}
                    </h3>
                  </div>
                )}
                
                <p className="text-seo-gray-dark mb-5">
                  {location.description || `Specialized SEO services for businesses in ${location.name}, ${location.state}. Boost your local visibility and attract more customers in the area.`}
                </p>
                
                <Link
                  to={`/location/${location.slug}`}
                  className="mt-auto inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors group"
                >
                  <span>View SEO Services in {location.name}</span>
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

export default LocationsList;
