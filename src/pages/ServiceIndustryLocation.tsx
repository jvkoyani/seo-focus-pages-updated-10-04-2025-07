import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight, CheckCircle, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { findLocationBySlug, getAllLocations } from '@/lib/additionalLocationData';
import { findIndustryBySlug, getAllIndustries } from '@/lib/industriesData';
import { findServiceBySlug, getAllServices } from '@/lib/servicesData';
import ServiceBadge from '@/components/ServiceBadge';
import { ServiceBadgeProps } from '@/components/ServiceBadge';
import FAQ, { FAQItem } from '@/components/FAQ';
import ContextualBlog from '@/components/ContextualBlog';
import SEO from '@/components/SEO';
import { getPageSEO } from '@/lib/seoUtils';

const ServiceIndustryLocation = () => {
  const { 
    serviceSlug, 
    industrySlug, 
    locationSlug,
    fullPath
  } = useParams<{ 
    serviceSlug?: string; 
    industrySlug?: string; 
    locationSlug?: string;
    fullPath?: string;
  }>();
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const [extractedService, setExtractedService] = useState<string | null>(null);
  const [extractedIndustry, setExtractedIndustry] = useState<string | null>(null);
  const [extractedLocation, setExtractedLocation] = useState<string | null>(null);
  
  useEffect(() => {
    console.log("Initial URL parameters:", { 
      serviceSlug, 
      industrySlug, 
      locationSlug,
      fullPath,
      pathname: location.pathname
    });
    
    const pathWithoutSlash = location.pathname.substring(1);
    
    if (fullPath) {
      console.log("Trying to parse fullPath:", fullPath);
      
      if (fullPath.includes("-for-") && fullPath.includes("-in-")) {
        const forIndex = fullPath.indexOf("-for-");
        const inIndex = fullPath.indexOf("-in-");
        
        if (forIndex !== -1 && inIndex !== -1 && inIndex > forIndex) {
          const extractedServiceSlug = fullPath.substring(0, forIndex);
          const extractedIndustrySlug = fullPath.substring(forIndex + 5, inIndex);
          const extractedLocationSlug = fullPath.substring(inIndex + 4);
          
          console.log("Extracted from fullPath:", {
            service: extractedServiceSlug,
            industry: extractedIndustrySlug,
            location: extractedLocationSlug
          });
          
          setExtractedService(extractedServiceSlug);
          setExtractedIndustry(extractedIndustrySlug);
          setExtractedLocation(extractedLocationSlug);
        }
      }
    }
    else if (pathWithoutSlash.includes("-for-") && pathWithoutSlash.includes("-in-")) {
      console.log("Trying to parse from pathname:", pathWithoutSlash);
      
      const forIndex = pathWithoutSlash.indexOf("-for-");
      const inIndex = pathWithoutSlash.indexOf("-in-");
      
      if (forIndex !== -1 && inIndex !== -1 && inIndex > forIndex) {
        const extractedServiceSlug = pathWithoutSlash.substring(0, forIndex);
        const extractedIndustrySlug = pathWithoutSlash.substring(forIndex + 5, inIndex);
        const extractedLocationSlug = pathWithoutSlash.substring(inIndex + 4);
        
        console.log("Extracted from pathname:", {
          service: extractedServiceSlug,
          industry: extractedIndustrySlug,
          location: extractedLocationSlug
        });
        
        setExtractedService(extractedServiceSlug);
        setExtractedIndustry(extractedIndustrySlug);
        setExtractedLocation(extractedLocationSlug);
      }
    }
  }, [fullPath, location.pathname, serviceSlug, industrySlug, locationSlug]);
  
  const finalServiceSlug = serviceSlug || extractedService || '';
  const finalIndustrySlug = industrySlug || extractedIndustry || '';
  const finalLocationSlug = locationSlug || extractedLocation || '';
  
  const serviceData = findServiceBySlug(finalServiceSlug);
  const industryData = findIndustryBySlug(finalIndustrySlug);
  const locationData = findLocationBySlug(finalLocationSlug);
  
  console.log("Final lookup slugs:", {
    service: finalServiceSlug,
    industry: finalIndustrySlug,
    location: finalLocationSlug
  });
  
  console.log("Found data:", {
    service: serviceData ? serviceData.title : 'Not found',
    industry: industryData ? industryData.title : 'Not found',
    location: locationData ? locationData.name : 'Not found'
  });
  
  const allServices = getAllServices().slice(0, 5);
  const allIndustries = getAllIndustries().slice(0, 5);
  
  useEffect(() => {
    if (!serviceData || !industryData || !locationData) {
      console.error("Missing data, redirecting to 404", {
        serviceData,
        industryData,
        locationData,
        url: location.pathname
      });
      navigate('/not-found');
    }
  }, [serviceData, industryData, locationData, navigate, location.pathname]);
  
  if (!serviceData || !industryData || !locationData) {
    return null;
  }
  
  const getSeoFriendlyUrl = (service: any, industry: any, location: any) => {
    return `/${service.slug}-for-${industry.slug}-in-${location.slug}`;
  };

  const authorityBadges: ServiceBadgeProps[] = [
    {
      text: `#1 ${serviceData.title} Provider for ${industryData.title}`,
      icon: "award" as const,
      variant: "primary" as const,
      size: "lg"
    },
    {
      text: `${locationData.name} ${industryData.title} Specialists`,
      icon: "star" as const,
      variant: "warning" as const,
      size: "md"
    },
    {
      text: "Guaranteed Results",
      icon: "shield" as const,
      variant: "success" as const,
      size: "md"
    }
  ];

  const dynamicFAQs: FAQItem[] = [
    {
      question: `How can ${serviceData.title} help my ${industryData.title} business in ${locationData.name}?`,
      answer: `${serviceData.title} is particularly effective for ${industryData.title} businesses in ${locationData.name} because it enables you to target potential customers who are actively searching for your specific services. By implementing tailored ${serviceData.title.toLowerCase()} strategies, we can help your business appear prominently in search results when ${locationData.name} residents search for ${industryData.title.toLowerCase()} services, driving qualified traffic to your website and increasing conversions.`
    },
    {
      question: `What makes ${serviceData.title} different for ${industryData.title} businesses compared to other industries?`,
      answer: `${industryData.title} businesses face unique challenges and opportunities in the digital landscape. Our ${serviceData.title.toLowerCase()} approach is customized to address industry-specific factors such as specialized terminology, competitive landscapes, and customer search patterns unique to ${industryData.title.toLowerCase()}. We focus on the keywords and content strategies that resonate with your target audience in ${locationData.name}, ensuring better visibility for searches that matter to your business.`
    },
    {
      question: `How long does it take to see results from ${serviceData.title} for a ${industryData.title} business in ${locationData.name}?`,
      answer: `While every business is different, most ${industryData.title} businesses in ${locationData.name} begin seeing initial improvements within 3-4 months of implementing our ${serviceData.title.toLowerCase()} strategies. More significant results typically become evident within 6-9 months. The timeline depends on factors such as your current online presence, competition level in the ${locationData.name} ${industryData.title.toLowerCase()} market, and the specific keywords targeted.`
    },
    {
      question: `What specific ${serviceData.title} strategies will you use for my ${industryData.title} business in ${locationData.name}?`,
      answer: `Our ${serviceData.title} strategies for ${industryData.title} businesses in ${locationData.name} include detailed keyword research focusing on local intent, optimization for ${locationData.name}-specific searches, creation of industry-specific content tailored to ${locationData.name} customers, local citation building, Google Business Profile optimization, review management, and competitor analysis. We also implement technical SEO improvements, mobile optimization, and structured data markup specific to ${industryData.title.toLowerCase()} businesses.`
    },
    {
      question: `How do you measure the success of ${serviceData.title} campaigns for ${industryData.title} businesses?`,
      answer: `We track multiple metrics to measure success, including rankings for ${industryData.title}-specific keywords in ${locationData.name}, organic traffic growth from ${locationData.name} visitors, conversion rates, phone calls, direction requests, contact form submissions, and ultimately, business growth. We provide detailed monthly reports that track these metrics and explain what they mean for your ${industryData.title.toLowerCase()} business in clear, jargon-free language.`
    },
    {
      question: `Do you have experience with other ${industryData.title} businesses in ${locationData.name}?`,
      answer: `Yes, we have extensive experience working with ${industryData.title} businesses in and around ${locationData.name}. Our team has helped numerous local ${industryData.title.toLowerCase()} businesses improve their online visibility, increase qualified traffic, and grow their customer base through tailored ${serviceData.title.toLowerCase()} strategies. We understand the unique aspects of the ${locationData.name} market and how ${industryData.title.toLowerCase()} businesses can best position themselves for success in local search results.`
    }
  ];

  const seoMetadata = getPageSEO('service-industry-location', {
    serviceSlug: finalServiceSlug,
    industrySlug: finalIndustrySlug,
    locationSlug: finalLocationSlug
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoMetadata.title}
        description={seoMetadata.description}
        keywords={seoMetadata.keywords}
        canonicalUrl={seoMetadata.canonicalUrl}
        routeKey={`${finalServiceSlug}-${finalIndustrySlug}-${finalLocationSlug}`}
      />
      
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-4" animation="fade-in">
            <div className="inline-flex items-center space-x-2 flex-wrap">
              <Link 
                to="/" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/service/${serviceData.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {serviceData.title}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/industry/${industryData.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {industryData.title}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/location/${locationData.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {locationData.name}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">
                {serviceData.title} for {industryData.title}
              </span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection className="md:w-1/2" animation="fade-in">
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                  <MapPin className="h-4 w-4 mr-1" />
                  {locationData.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Industry Expertise
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                  Specialized Service
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {authorityBadges.map((badge, index) => (
                  <ServiceBadge
                    key={index}
                    text={badge.text}
                    icon={badge.icon}
                    variant={badge.variant}
                    size={badge.size}
                  />
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {serviceData.title} for {industryData.title} in {locationData.name}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                Specialized {serviceData.title.toLowerCase()} solutions designed specifically for {industryData.title.toLowerCase()} businesses in {locationData.name} to boost your online visibility and drive targeted traffic.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                  <Link to="/free-consultation">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                  <Link to="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-left" delay={200} className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                    <TrendingUp className="h-8 w-8 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-seo-dark">Key Benefits</h3>
                    <p className="text-seo-gray-dark">
                      Why {industryData.title} businesses in {locationData.name} choose our {serviceData.title}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    `Specialized ${serviceData.title} strategies tailored for ${industryData.title} in ${locationData.name}`,
                    `Targeted keyword research focused on ${industryData.title.toLowerCase()} businesses in ${locationData.name}`,
                    `Improved visibility for ${industryData.title.toLowerCase()}-specific searches in ${locationData.name}`,
                    `Increased qualified leads from local ${locationData.name} customers`,
                    `Comprehensive reporting and analysis of your ${industryData.title.toLowerCase()} business performance`
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-seo-gray-dark">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              {serviceData.title} Strategy for {industryData.title} in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our comprehensive approach to helping {industryData.title.toLowerCase()} businesses in {locationData.name} succeed online
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Industry-Specific Keyword Strategy</h3>
              <p className="text-seo-gray-dark mb-4">
                We conduct in-depth research to identify the keywords and phrases that potential customers in {locationData.name} use when searching for {industryData.title.toLowerCase()} services.
              </p>
              <p className="text-seo-gray-dark">
                Our keyword strategy focuses on terms with high commercial intent that will drive qualified leads to your {industryData.title.toLowerCase()} business in {locationData.name}.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
              delay={100}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Local {locationData.name} Optimization</h3>
              <p className="text-seo-gray-dark mb-4">
                We optimize your online presence for {locationData.name}-specific searches, ensuring your {industryData.title.toLowerCase()} business appears in local search results and Google Maps.
              </p>
              <p className="text-seo-gray-dark">
                This includes optimizing your Google Business Profile, local citations, and building location-specific backlinks to boost your visibility in {locationData.name}.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
              delay={200}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">{industryData.title}-Specific Content Strategy</h3>
              <p className="text-seo-gray-dark mb-4">
                We create high-quality, informative content that addresses the specific needs and questions of {industryData.title.toLowerCase()} customers in {locationData.name}.
              </p>
              <p className="text-seo-gray-dark">
                This content establishes your expertise in the {industryData.title.toLowerCase()} industry and helps attract and convert potential customers in {locationData.name}.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
              delay={300}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Competitive Analysis</h3>
              <p className="text-seo-gray-dark mb-4">
                We analyze your competitors in the {industryData.title.toLowerCase()} industry in {locationData.name} to identify opportunities for your business to stand out.
              </p>
              <p className="text-seo-gray-dark">
                This analysis informs our strategy and helps us identify the most effective ways to improve your online visibility and attract more customers.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <ContextualBlog 
        title={`${serviceData.title} Resources for ${industryData.title} Businesses`}
        subtitle={`Expert insights specifically for ${industryData.title} businesses in ${locationData.name}`}
        serviceSlug={serviceData.slug}
        industrySlug={industryData.slug}
        locationSlug={locationData.slug}
        className="bg-seo-gray-light"
      />
      
      <FAQ 
        title={`${serviceData.title} FAQs for ${industryData.title} Businesses`}
        subtitle={`Common questions about ${serviceData.title} for ${industryData.title} businesses in ${locationData.name}`}
        faqs={dynamicFAQs}
      />
      
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              More Options
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Explore Related Services and Industries
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover other specialized SEO solutions for businesses in {locationData.name}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-seo-dark mb-4">Other Services for {industryData.title}</h3>
              <div className="space-y-3">
                {allServices.filter(s => s.id !== serviceData.id).map((service, index) => (
                  <Link 
                    key={service.id}
                    to={getSeoFriendlyUrl(service, industryData, locationData)}
                    className="block p-3 rounded-lg hover:bg-seo-blue/5 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-seo-blue mr-2">•</span>
                      <span className="text-seo-dark font-medium">
                        {service.title} for {industryData.title} in {locationData.name}
                      </span>
                      <ArrowRight className="ml-auto h-4 w-4 text-seo-blue" />
                    </div>
                  </Link>
                ))}
                
                <Link 
                  to={`/location/${locationData.slug}/industry/${industryData.slug}`}
                  className="block p-3 rounded-lg bg-seo-blue/5 text-center mt-4 font-medium text-seo-blue"
                >
                  View All Services for {industryData.title} in {locationData.name}
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-seo-dark mb-4">{serviceData.title} for Other Industries</h3>
              <div className="space-y-3">
                {allIndustries.filter(i => i.id !== industryData.id).map((industry, index) => (
                  <Link 
                    key={industry.id}
                    to={getSeoFriendlyUrl(serviceData, industry, locationData)}
                    className="block p-3 rounded-lg hover:bg-seo-blue/5 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="text-seo-blue mr-2">•</span>
                      <span className="text-seo-dark font-medium">
                        {serviceData.title} for {industry.title} in {locationData.name}
                      </span>
                      <ArrowRight className="ml-auto h-4 w-4 text-seo-blue" />
                    </div>
                  </Link>
                ))}
                
                <Link 
                  to={`/location/${locationData.slug}/all`}
                  className="block p-3 rounded-lg bg-seo-blue/5 text-center mt-4 font-medium text-seo-blue"
                >
                  View All Service-Industry Combinations in {locationData.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection 
              className="bg-gradient-to-r from-seo-blue to-purple-600 rounded-xl shadow-xl overflow-hidden" 
              animation="fade-in"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-8 md:mb-0 md:mr-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Ready to grow your {industryData.title.toLowerCase()} business in {locationData.name}?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get started with a free consultation and discover how our {serviceData.title.toLowerCase()} services can help your business thrive.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link to="/free-consultation">
                      <Button size="lg" className="bg-white text-seo-blue hover:bg-gray-100 w-full md:w-auto">
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServiceIndustryLocation;
