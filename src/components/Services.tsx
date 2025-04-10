
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Service, getAllServices } from '@/lib/servicesData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import * as LucideIcons from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<string>(services[0]?.slug || "");
  const [isHovering, setIsHovering] = useState<string | null>(null);

  // Find the active service
  const activeService = services.find(service => service.slug === activeTab) || services[0];

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

  // Get the correct icon component from Lucide icons
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as Record<string, React.ComponentType<any>>)[iconName] || 
                          (LucideIcons as Record<string, React.ComponentType<any>>)["Bookmark"];
    return IconComponent;
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

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Service Tabs on the Left */}
          <div className="md:w-1/3">
            <Tabs 
              defaultValue={activeTab} 
              orientation="vertical" 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="flex flex-col h-auto space-y-2 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                {services.map((service) => {
                  const IconComponent = getIconComponent(service.icon);
                  return (
                    <TabsTrigger 
                      key={service.slug} 
                      value={service.slug}
                      className={cn(
                        "justify-start gap-3 p-4 text-left rounded-lg transition-all duration-300",
                        "data-[state=active]:bg-seo-blue data-[state=active]:text-white",
                        "data-[state=inactive]:bg-white data-[state=inactive]:hover:bg-seo-gray-light"
                      )}
                      onMouseEnter={() => setIsHovering(service.slug)}
                      onMouseLeave={() => setIsHovering(null)}
                    >
                      <div className="flex items-center w-full">
                        <div className={cn(
                          "rounded-full p-2 mr-3 transition-all duration-300",
                          service.slug === activeTab ? "bg-white/20" : "bg-seo-blue/10"
                        )}>
                          <IconComponent className={cn(
                            "h-5 w-5 transition-all duration-300",
                            service.slug === activeTab ? "text-white" : "text-seo-blue"
                          )} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{service.title}</span>
                          {isHovering === service.slug && service.slug !== activeTab && (
                            <span className="text-xs mt-1 text-seo-gray-dark opacity-80">Click to view details</span>
                          )}
                        </div>
                        {service.slug === activeTab && (
                          <ArrowRight className="ml-auto h-4 w-4" />
                        )}
                      </div>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>

          {/* Service Details on the Right */}
          <div className="md:w-2/3">
            <AnimatedSection 
              key={activeService.slug}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"
              animation="fade-in"
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-6">
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 transform transition-transform duration-500 hover:scale-110">
                    {React.createElement(getIconComponent(activeService.icon), { 
                      className: "h-8 w-8 text-seo-blue" 
                    })}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-seo-dark mb-4">
                    {getServiceTitle(activeService)}
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-6 leading-relaxed">
                    {activeService.description}
                  </p>
                  
                  <div className="mb-6 p-4 rounded-lg bg-seo-gray-light border-l-3 border-seo-blue">
                    <h4 className="font-semibold text-seo-dark mb-3">Key benefits:</h4>
                    <ul className="space-y-2">
                      {activeService.shortDescription && (
                        <li className="flex items-start group">
                          <div className="mt-1 mr-3 bg-seo-blue/20 rounded-full p-1">
                            <div className="h-2 w-2 bg-seo-blue rounded-full group-hover:animate-pulse"></div>
                          </div>
                          <span className="text-seo-gray-dark">{activeService.shortDescription}</span>
                        </li>
                      )}
                      {activeService.forIndustries && (
                        <li className="flex items-start group">
                          <div className="mt-1 mr-3 bg-seo-blue/20 rounded-full p-1">
                            <div className="h-2 w-2 bg-seo-blue rounded-full group-hover:animate-pulse"></div>
                          </div>
                          <span className="text-seo-gray-dark">Specialized solutions for various industries</span>
                        </li>
                      )}
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
                    <Link to={getLinkPath(activeService)}>
                      <span>Learn More</span>
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
                
                <div className="md:w-1/2 relative h-full min-h-[300px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-seo-blue/10 z-10"></div>
                  <img 
                    src={activeService.image || `/service-images/${activeService.slug}.jpg`} 
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                  />
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
