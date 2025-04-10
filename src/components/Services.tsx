
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { Service, getAllServices } from '@/lib/servicesData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

  return (
    <section className={cn("py-16 bg-white", className)}>
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
              <TabsList className="flex flex-col h-auto space-y-1 bg-seo-gray-light p-2 rounded-lg">
                {services.map((service) => (
                  <TabsTrigger 
                    key={service.slug} 
                    value={service.slug}
                    className="justify-start gap-3 p-3 text-left"
                  >
                    <div className="flex items-center">
                      <div className="bg-white rounded-full p-2 mr-3">
                        <service.icon className="h-5 w-5 text-seo-blue" />
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Service Details on the Right */}
          <div className="md:w-2/3">
            <AnimatedSection 
              key={activeService.slug}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              animation="fade-in"
            >
              <div className="md:flex">
                <div className="md:w-1/2 p-6">
                  <div className="bg-seo-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <activeService.icon className="h-7 w-7 text-seo-blue" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-seo-dark mb-3">
                    {getServiceTitle(activeService)}
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-4">
                    {activeService.description}
                  </p>
                  
                  <div className="mb-4 p-3 rounded-lg bg-seo-gray-light border-l-2 border-seo-blue">
                    <h4 className="font-medium text-seo-dark mb-2">Key benefits:</h4>
                    <ul className="space-y-2">
                      {activeService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-seo-blue mr-2 font-bold">•</span>
                          <span className="text-seo-gray-dark">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={getLinkPath(activeService)}
                    className="inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors group mt-4"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                <div className="md:w-1/2 bg-seo-gray-light">
                  <img 
                    src={activeService.image || `/service-images/${activeService.slug}.jpg`} 
                    alt={activeService.title}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {!showFull && services.length > limit && (
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
