
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Service, getAllServices } from '@/lib/servicesData';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ServicesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showFull?: boolean;
  className?: string;
  location?: string;
  locationSlug?: string;
}

const Services: React.FC<ServicesProps> = ({
  title = "Our SEO Services",
  subtitle = "Comprehensive SEO solutions to boost your online presence",
  limit = 6,
  showFull = false,
  className = "",
  location,
  locationSlug,
}) => {
  const services = getAllServices();
  const displayedServices = showFull ? services : services.slice(0, limit);
  const [activeService, setActiveService] = useState<string>(services[0]?.slug || "");
  const [expandedPanel, setExpandedPanel] = useState<string>("main-panel");

  // Find the active service
  const selectedService = services.find(service => service.slug === activeService) || services[0];

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

  // Get the correct icon component dynamically from Lucide
  const renderIcon = (iconName: string) => {
    // Type assertion to handle the TypeScript error
    const LucideIcons = require('lucide-react') as Record<string, React.FC<any>>;
    const IconComponent = LucideIcons[iconName] || LucideIcons.Bookmark;
    return <IconComponent className="h-5 w-5" />;
  };

  const togglePanel = (panel: string) => {
    setExpandedPanel(expandedPanel === panel ? "" : panel);
  };

  return (
    <section className={cn("py-16 bg-gradient-to-b from-white to-seo-gray-light", className)}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            {location ? `SEO Services in ${location}` : "Expert SEO Solutions"}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto bg-white rounded-xl overflow-hidden shadow-md">
          {/* Left side - Services list */}
          <div className="lg:w-2/5 xl:w-1/3 bg-gradient-to-b from-gray-50 to-white border-r border-gray-100">
            <div className="p-1">
              {services.map((service) => (
                <Collapsible
                  key={service.slug}
                  open={activeService === service.slug}
                  onOpenChange={() => setActiveService(service.slug)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div 
                      className={cn(
                        "flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-all duration-200",
                        activeService === service.slug ? "border-l-4 border-seo-blue bg-blue-50/50" : "border-l-4 border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "rounded-full p-2 transition-all duration-300",
                          activeService === service.slug ? "bg-seo-blue/10" : "bg-gray-100"
                        )}>
                          {renderIcon(service.icon)}
                        </div>
                        <span className={cn(
                          "font-medium text-lg transition-all duration-200",
                          activeService === service.slug ? "text-seo-blue" : "text-seo-dark"
                        )}>{service.title}</span>
                      </div>
                      {activeService === service.slug ? (
                        <ChevronUp className="h-5 w-5 text-seo-blue" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-3 bg-blue-50/30">
                      <p className="text-sm text-seo-gray-dark mb-3">{service.shortDescription}</p>
                      <Button
                        asChild
                        variant="link"
                        className="p-0 h-auto text-seo-blue hover:text-seo-blue-light font-medium"
                      >
                        <Link to={getLinkPath(service)} className="group flex items-center">
                          <span>View details</span>
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CollapsibleContent>
                  <Separator />
                </Collapsible>
              ))}
            </div>
          </div>

          {/* Right side - Service details */}
          <div className="lg:w-3/5 xl:w-2/3 p-6 lg:p-8">
            <AnimatedSection 
              key={selectedService.slug}
              className="transition-all duration-500"
              animation="fade-in"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="bg-seo-blue/5 rounded-full w-16 h-16 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110">
                    {renderIcon(selectedService.icon)}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-seo-dark mb-4">
                    {getServiceTitle(selectedService)}
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-6 leading-relaxed">
                    {selectedService.description}
                  </p>
                  
                  <div className="mb-6 p-4 rounded-lg bg-seo-gray-light border-l-4 border-seo-blue">
                    <h4 className="font-semibold text-seo-dark mb-3">Key benefits:</h4>
                    <ul className="space-y-2">
                      {selectedService.shortDescription && (
                        <li className="flex items-start group">
                          <div className="mt-1 mr-3 bg-seo-blue/20 rounded-full p-1">
                            <div className="h-2 w-2 bg-seo-blue rounded-full group-hover:animate-pulse"></div>
                          </div>
                          <span className="text-seo-gray-dark">{selectedService.shortDescription}</span>
                        </li>
                      )}
                      <li className="flex items-start group">
                        <div className="mt-1 mr-3 bg-seo-blue/20 rounded-full p-1">
                          <div className="h-2 w-2 bg-seo-blue rounded-full group-hover:animate-pulse"></div>
                        </div>
                        <span className="text-seo-gray-dark">Customized strategies for your specific business needs</span>
                      </li>
                      <li className="flex items-start group">
                        <div className="mt-1 mr-3 bg-seo-blue/20 rounded-full p-1">
                          <div className="h-2 w-2 bg-seo-blue rounded-full group-hover:animate-pulse"></div>
                        </div>
                        <span className="text-seo-gray-dark">Expert implementation and ongoing support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <Button
                    asChild
                    className="group bg-seo-blue hover:bg-seo-blue-light text-white"
                  >
                    <Link to={getLinkPath(selectedService)}>
                      <span>Learn More</span>
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                
                <div className="md:w-1/2 relative rounded-xl overflow-hidden shadow-md h-72 md:h-auto">
                  <img 
                    src={selectedService.image || `/service-images/${selectedService.slug}.jpg`} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-seo-blue/20 to-transparent"></div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {!showFull && services.length > limit && (
          <div className="text-center mt-12">
            <Button 
              asChild
              className="group bg-seo-blue hover:bg-seo-blue-light text-white px-8"
              size="lg"
            >
              <Link to="/services">
                <span>View All Services</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
