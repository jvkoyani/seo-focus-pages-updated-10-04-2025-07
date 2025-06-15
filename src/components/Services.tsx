
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

  // Service images for each service type with high-quality images
  const serviceImages = {
    "search-engine-optimization": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop",
    "local-seo": "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
    "technical-seo": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
    "content-marketing": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop",
    "link-building": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    "ecommerce-seo": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1000&auto=format&fit=crop"
  };

  // Detailed service information for each service type
  const detailedServiceInfo = {
    "search-engine-optimization": {
      benefits: [
        "Higher organic search rankings for your target keywords",
        "Increased website visibility and brand awareness",
        "More qualified traffic from potential customers",
        "Better user experience and site performance",
        "Long-term sustainable online growth"
      ],
      features: [
        "Comprehensive keyword research and strategy",
        "On-page optimization and content enhancement",
        "Technical SEO improvements and site audits",
        "Competitor analysis and market insights",
        "Monthly reporting and performance tracking"
      ]
    },
    "local-seo": {
      benefits: [
        "Improved visibility in local search results",
        "Higher conversion rates from local searches",
        "Enhanced Google Business Profile performance",
        "Increased foot traffic to physical locations",
        "Better local brand recognition and trust"
      ],
      features: [
        "Google Business Profile optimization",
        "Local citation building and management",
        "Local keyword research and targeting",
        "Review management and reputation building",
        "Local content creation and optimization"
      ]
    },
    "technical-seo": {
      benefits: [
        "Faster website performance and loading speeds",
        "Improved crawlability and search engine indexing",
        "Better mobile user experience and responsiveness",
        "Enhanced site security and user trust",
        "Reduced technical errors and improved functionality"
      ],
      features: [
        "Comprehensive technical SEO audits",
        "Site speed optimization and Core Web Vitals",
        "Mobile-first optimization and responsive design",
        "Schema markup and structured data implementation",
        "XML sitemap and robots.txt optimization"
      ]
    },
    "content-marketing": {
      benefits: [
        "Engaging content that converts visitors to customers",
        "Thought leadership establishment in your industry",
        "Long-term organic traffic growth",
        "Better audience engagement and retention",
        "Increased social sharing and brand reach"
      ],
      features: [
        "Content strategy development and planning",
        "High-quality blog and article creation",
        "SEO-optimized content for target keywords",
        "Content distribution and promotion",
        "Performance tracking and content optimization"
      ]
    },
    "link-building": {
      benefits: [
        "Increased domain authority and search rankings",
        "Better search engine trust and credibility",
        "High-quality referral traffic from relevant sites",
        "Enhanced online reputation and brand mentions",
        "Stronger competitive positioning in search results"
      ],
      features: [
        "Strategic link prospecting and outreach",
        "High-quality guest posting opportunities",
        "Digital PR and brand mention building",
        "Competitor backlink analysis",
        "Link quality monitoring and disavowal"
      ]
    },
    "ecommerce-seo": {
      benefits: [
        "Higher product visibility in search results",
        "Increased online sales and revenue",
        "Improved shopping experience for customers",
        "Better product page rankings",
        "Enhanced category page performance"
      ],
      features: [
        "Product page optimization and enhancement",
        "Category page structure and SEO",
        "E-commerce technical SEO improvements",
        "Shopping feed optimization",
        "Conversion rate optimization for product pages"
      ]
    }
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

        {/* Enhanced Services Grid with Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedServices.map((service, index) => {
            const serviceInfo = detailedServiceInfo[service.slug as keyof typeof detailedServiceInfo];
            const serviceImage = serviceImages[service.slug as keyof typeof serviceImages];
            
            return (
              <AnimatedSection
                key={service.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceImage || `/service-images/${service.slug}.jpg`}
                    alt={`${service.title} service visualization`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center mb-2">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-3">
                        {renderIcon(service.icon)}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {getServiceTitle(service)}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-seo-gray-dark mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {serviceInfo && (
                    <>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-seo-dark mb-3">Key Benefits</h4>
                        <div className="space-y-2">
                          {serviceInfo.benefits.slice(0, 3).map((benefit, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="text-green-500 mt-1 mr-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              </div>
                              <span className="text-sm text-seo-gray-dark">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-seo-dark mb-3">What We Do</h4>
                        <div className="space-y-2">
                          {serviceInfo.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="text-seo-blue mt-1 mr-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                                </svg>
                              </div>
                              <span className="text-sm text-seo-gray-dark">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  
                  <Button
                    asChild
                    className="w-full bg-seo-blue hover:bg-seo-blue-light text-white transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <Link to={getLinkPath(service)}>
                      <span className="mr-2">Learn More About {service.title}</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            );
          })}
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
