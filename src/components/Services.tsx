
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp, Bookmark } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Service, getAllServices } from '@/lib/servicesData';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

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
    // Fixed: properly cast the icons object
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Bookmark;
    return <IconComponent className="h-5 w-5" />;
  };

  const togglePanel = (panel: string) => {
    setExpandedPanel(expandedPanel === panel ? "" : panel);
  };

  // Service images for each service type with high-quality images
  const serviceImages = {
    "search-engine-optimization": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop",
    "local-seo": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
    "technical-seo": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
    "content-marketing": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    "link-building": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    "ecommerce-seo": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop"
  };

  // Service benefits for each service type
  const serviceBenefits = {
    "search-engine-optimization": [
      "Higher organic search rankings",
      "Increased website visibility",
      "More qualified traffic"
    ],
    "local-seo": [
      "Improved local visibility",
      "Higher conversion rates from local searches",
      "Enhanced Google Business profile"
    ],
    "technical-seo": [
      "Faster website performance",
      "Improved crawlability",
      "Better mobile experience"
    ],
    "content-marketing": [
      "Engaging content that converts",
      "Thought leadership establishment",
      "Long-term traffic growth"
    ],
    "link-building": [
      "Increased domain authority",
      "Better search engine trust",
      "High-quality referral traffic"
    ],
    "ecommerce-seo": [
      "Higher product visibility",
      "Increased online sales",
      "Improved shopping experience"
    ]
  };

  return (
    <section className={cn("py-20 bg-gradient-to-b from-white to-seo-gray-light relative overflow-hidden", className)}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            {location ? `SEO Services in ${location}` : "Expert SEO Solutions"}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left side - Services list - Enhanced with hover cards */}
          <div className="lg:w-2/5 xl:w-1/3">
            <Card className="bg-white shadow-lg overflow-hidden border-0 rounded-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-seo-blue/10 to-transparent p-6">
                  <h3 className="text-xl font-bold text-seo-dark mb-2">Our Services</h3>
                  <p className="text-sm text-seo-gray-dark">Select a service to learn more</p>
                </div>
                <div className="divide-y">
                  {services.map((service) => (
                    <HoverCard key={service.slug} openDelay={300} closeDelay={100}>
                      <HoverCardTrigger asChild>
                        <Collapsible
                          open={activeService === service.slug}
                          onOpenChange={() => setActiveService(service.slug)}
                        >
                          <CollapsibleTrigger className="w-full">
                            <div 
                              className={cn(
                                "flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-all duration-200",
                                activeService === service.slug ? "border-l-4 border-seo-blue bg-blue-50/50" : "border-l-4 border-transparent"
                              )}
                            >
                              <div className="flex items-center gap-4">
                                <div className={cn(
                                  "rounded-full p-3 transition-all duration-300",
                                  activeService === service.slug ? "bg-seo-blue/10 text-seo-blue" : "bg-gray-100 text-seo-gray-dark"
                                )}>
                                  {renderIcon(service.icon)}
                                </div>
                                <span className={cn(
                                  "font-medium transition-all duration-200",
                                  activeService === service.slug ? "text-seo-blue font-semibold" : "text-seo-dark"
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
                            <div className="px-6 py-4 bg-blue-50/30 border-l-4 border-seo-blue">
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
                        </Collapsible>
                      </HoverCardTrigger>
                      <HoverCardContent align="start" className="w-80 shadow-lg border-0 p-0 overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <img 
                            src={serviceImages[service.slug as keyof typeof serviceImages] || `/service-images/${service.slug}.jpg`}
                            alt={`Visual representation of ${service.title} service`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-4 text-white">
                              <h4 className="font-bold">{service.title}</h4>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-seo-gray-dark">{service.shortDescription}</p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Service details - Enhanced with better visuals */}
          <div className="lg:w-3/5 xl:w-2/3">
            <Card className="shadow-lg border-0 overflow-hidden rounded-2xl h-full bg-white">
              <AnimatedSection 
                key={selectedService.slug}
                className="h-full"
                animation="fade-in"
              >
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={serviceImages[selectedService.slug as keyof typeof serviceImages] || `/service-images/${selectedService.slug}.jpg`} 
                    alt={`Visual representation of ${selectedService.title} service showing implementation and results`}
                    className="w-full h-full object-cover transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        {renderIcon(selectedService.icon)}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {getServiceTitle(selectedService)}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="prose prose-lg max-w-none text-seo-gray-dark mb-6">
                    <p className="leading-relaxed">{selectedService.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {(serviceBenefits[selectedService.slug as keyof typeof serviceBenefits] || []).map((benefit, index) => (
                      <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 text-seo-blue">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          </div>
                          <span className="text-seo-dark font-medium">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    asChild
                    className="group bg-seo-blue hover:bg-seo-blue-light text-white transition-all duration-300 shadow-md hover:shadow-lg"
                    size="lg"
                  >
                    <Link to={getLinkPath(selectedService)}>
                      <span className="mr-2">Explore {selectedService.title}</span>
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </Card>
          </div>
        </div>

        {!showFull && services.length > limit && (
          <div className="text-center mt-16">
            <Button 
              asChild
              className="group bg-seo-blue hover:bg-seo-blue-light text-white px-8 shadow-md hover:shadow-lg transition-all duration-300"
              size="lg"
            >
              <Link to="/services">
                <span className="mr-2">View All Services</span>
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
