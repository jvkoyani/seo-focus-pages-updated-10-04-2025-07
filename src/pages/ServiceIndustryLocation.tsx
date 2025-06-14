import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight, CheckCircle, TrendingUp, Star, Users, Target, BarChart2, Award, Shield, Zap, FileText, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { findLocationBySlug, getAllLocations } from '@/lib/additionalLocationData';
import { findIndustryBySlug, getAllIndustries } from '@/lib/industriesData';
import { findServiceBySlug, getAllServices } from '@/lib/servicesData';
import ServiceBadge from '@/components/ServiceBadge';
import { ServiceBadgeProps } from '@/components/ServiceBadge';
import FAQ, { FAQItem } from '@/components/FAQ';
import ContextualBlog from '@/components/ContextualBlog';

const ServiceIndustryLocation = ({ routeKey }: { routeKey?: string }) => {
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
  
  // Enhanced SEO meta data optimized for AI Overviews and LLMs
  const pageTitle = `${serviceData.title} for ${industryData.title} in ${locationData.name} | Expert Digital Marketing Solutions`;
  const pageDescription = `Transform your ${industryData.title.toLowerCase()} practice in ${locationData.name} with proven ${serviceData.title.toLowerCase()} strategies. Get more patients, increase revenue, and dominate local search results. Free consultation available - see real results in 90 days.`;
  const pageKeywords = `${serviceData.title} ${industryData.title} ${locationData.name}, ${industryData.title.toLowerCase()} digital marketing ${locationData.name}, ${serviceData.title.toLowerCase()} for ${industryData.title.toLowerCase()}, ${locationData.name} ${industryData.title.toLowerCase()} SEO, ${industryData.title.toLowerCase()} marketing agency ${locationData.name}, local ${industryData.title.toLowerCase()} advertising, ${serviceData.title.toLowerCase()} services ${locationData.name}`;

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

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={`/${finalServiceSlug}-for-${finalIndustrySlug}-in-${finalLocationSlug}`}
        routeKey={routeKey}
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-seo-blue to-purple-600 text-white font-medium mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-seo-blue to-purple-600">
                {serviceData.title} Strategy for {industryData.title} in {locationData.name}
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-seo-blue to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our comprehensive approach to helping {industryData.title.toLowerCase()} businesses in {locationData.name} succeed online
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection
              className="bg-gradient-to-br from-white to-seo-blue/5 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden"
              animation="fade-in"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-seo-blue/10 to-transparent rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-seo-blue to-blue-400 text-white mr-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark">Industry-Specific Keyword Strategy</h3>
              </div>
              <p className="text-seo-gray-dark mb-4 leading-relaxed">
                We conduct in-depth research to identify the keywords and phrases that potential customers in {locationData.name} use when searching for {industryData.title.toLowerCase()} services.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-100 mt-4">
                <h4 className="font-medium text-seo-dark mb-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" /> Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Targeted traffic from qualified {locationData.name} customers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Higher conversion rates from search to inquiry</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Outrank {industryData.title.toLowerCase()} competitors</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-gradient-to-br from-white to-purple-100/30 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden"
              animation="fade-in"
              delay={100}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-400/10 to-transparent rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 text-white mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark">Local {locationData.name} Optimization</h3>
              </div>
              <p className="text-seo-gray-dark mb-4 leading-relaxed">
                We optimize your online presence for {locationData.name}-specific searches, ensuring your {industryData.title.toLowerCase()} business appears in local search results and Google Maps.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-100 mt-4">
                <h4 className="font-medium text-seo-dark mb-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" /> Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Improved visibility in Google Maps and local pack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>More foot traffic and local phone calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Build trust with local {locationData.name} customers</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-gradient-to-br from-white to-green-100/30 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden"
              animation="fade-in"
              delay={200}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-400/10 to-transparent rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white mr-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark">{industryData.title}-Specific Content Strategy</h3>
              </div>
              <p className="text-seo-gray-dark mb-4 leading-relaxed">
                We create high-quality, informative content that addresses the specific needs and questions of {industryData.title.toLowerCase()} customers in {locationData.name}.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-100 mt-4">
                <h4 className="font-medium text-seo-dark mb-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" /> Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Establish your expertise in {industryData.title.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Answer customer questions before they ask</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Improve conversion rates with educational content</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-gradient-to-br from-white to-orange-100/30 p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all relative overflow-hidden"
              animation="fade-in"
              delay={300}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-bl-full"></div>
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white mr-4">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-seo-dark">Competitive Analysis</h3>
              </div>
              <p className="text-seo-gray-dark mb-4 leading-relaxed">
                We analyze your competitors in the {industryData.title.toLowerCase()} industry in {locationData.name} to identify opportunities for your business to stand out.
              </p>
              <div className="bg-white p-4 rounded-lg border border-gray-100 mt-4">
                <h4 className="font-medium text-seo-dark mb-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" /> Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Identify gaps in competitor strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Discover unique selling propositions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2" />
                    <span>Stay ahead of industry trends in {locationData.name}</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium mb-4">
              Proven Results
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">
                Real Results for {industryData.title} Businesses
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-seo-gray-dark">
              See how we've helped other {industryData.title.toLowerCase()} businesses in {locationData.name} achieve impressive growth
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection
              className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all"
              animation="fade-in"
              delay={100}
            >
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-seo-dark">247% Increase</h3>
                    <p className="text-seo-gray-dark">In organic traffic</p>
                  </div>
                </div>
                <p className="text-seo-gray-dark mb-4">
                  "Our {industryData.title.toLowerCase()} business saw a significant increase in qualified leads from {locationData.name} after implementing the recommended SEO strategy."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-seo-dark">John Doe</p>
                    <p className="text-sm text-seo-gray-dark">CEO, {industryData.title} Solutions</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all"
              animation="fade-in"
              delay={200}
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-seo-dark">189% Growth</h3>
                    <p className="text-seo-gray-dark">In new customers</p>
                  </div>
                </div>
                <p className="text-seo-gray-dark mb-4">
                  "The local SEO strategy helped us attract more {locationData.name} customers specifically looking for our {industryData.title.toLowerCase()} services."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                      JS
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-seo-dark">Jane Smith</p>
                    <p className="text-sm text-seo-gray-dark">Owner, {industryData.title} Experts</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-all"
              animation="fade-in"
              delay={300}
            >
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg text-seo-dark">#1 Ranking</h3>
                    <p className="text-seo-gray-dark">For key {industryData.title.toLowerCase()} terms</p>
                  </div>
                </div>
                <p className="text-seo-gray-dark mb-4">
                  "We now rank at the top of search results for our most valuable keywords in {locationData.name}, leading to a substantial increase in business."
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      RM
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-seo-dark">Robert Miller</p>
                    <p className="text-sm text-seo-gray-dark">Marketing Director, {industryData.title} Co.</p>
                  </div>
                  <div className="ml-auto flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="mt-10 text-center" animation="fade-in" delay={400}>
            <Link to="/case-studies">
              <Button variant="outline" size="lg" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-seo-blue to-blue-500 text-white font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-seo-blue to-blue-600">
                How We Drive Results for Your {industryData.title} Business
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-seo-blue to-blue-500 rounded-full"></div>
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our proven 5-step process tailored for {industryData.title.toLowerCase()} businesses in {locationData.name}
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <AnimatedSection
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-9 md:gap-x-8"
                animation="fade-in"
                delay={100}
              >
                <div className="md:col-span-2 flex justify-end">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-seo-blue to-blue-400 text-white font-bold text-xl shadow-lg">
                    1
                  </div>
                </div>
                <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-md relative before:content-[''] before:absolute before:w-1 before:h-full before:bg-gradient-to-b before:from-seo-blue before:to-blue-400 before:-left-8 before:top-0 md:before:hidden">
                  <div className="absolute -left-8 top-6 w-6 h-6 bg-seo-blue rounded-full md:hidden"></div>
                  <h3 className="text-xl font-bold text-seo-dark mb-3 flex items-center">
                    <Shield className="h-5 w-5 text-seo-blue mr-2" />
                    Discovery & Analysis
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    We begin by understanding your {industryData.title.toLowerCase()} business goals, analyzing your current online presence, and researching competitors in {locationData.name}.
                  </p>
                  <div className="bg-seo-blue/5 p-3 rounded-lg border-l-4 border-seo-blue">
                    <p className="text-sm font-medium text-seo-dark">
                      Timeframe: 1-2 weeks | Deliverable: Comprehensive audit report & strategy blueprint
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-9 md:gap-x-8"
                animation="fade-in"
                delay={200}
              >
                <div className="md:col-span-2 flex justify-end">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl shadow-lg">
                    2
                  </div>
                </div>
                <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-md relative before:content-[''] before:absolute before:w-1 before:h-full before:bg-gradient-to-b before:from-blue-400 before:to-purple-500 before:-left-8 before:top-0 md:before:hidden">
                  <div className="absolute -left-8 top-6 w-6 h-6 bg-blue-500 rounded-full md:hidden"></div>
                  <h3 className="text-xl font-bold text-seo-dark mb-3 flex items-center">
                    <Zap className="h-5 w-5 text-blue-500 mr-2" />
                    Strategy Development
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    We create a customized {serviceData.title.toLowerCase()} strategy specifically for your {industryData.title.toLowerCase()} business, focused on {locationData.name} audience and search behaviors.
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-medium text-seo-dark">
                      Timeframe: 1-2 weeks | Deliverable: Custom strategy document & implementation roadmap
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-9 md:gap-x-8"
                animation="fade-in"
                delay={300}
              >
                <div className="md:col-span-2 flex justify-end">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl shadow-lg">
                    3
                  </div>
                </div>
                <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-md relative before:content-[''] before:absolute before:w-1 before:h-full before:bg-gradient-to-b before:from-purple-500 before:to-pink-500 before:-left-8 before:top-0 md:before:hidden">
                  <div className="absolute -left-8 top-6 w-6 h-6 bg-purple-500 rounded-full md:hidden"></div>
                  <h3 className="text-xl font-bold text-seo-dark mb-3 flex items-center">
                    <Settings className="h-5 w-5 text-purple-500 mr-2" />
                    Implementation
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    Our team executes the strategy with on-page optimization, content creation, technical fixes, and local citation building for your {industryData.title.toLowerCase()} business.
                  </p>
                  <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm font-medium text-seo-dark">
                      Timeframe: 2-4 weeks | Deliverable: Optimized website & local presence
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-9 md:gap-x-8"
                animation="fade-in"
                delay={400}
              >
                <div className="md:col-span-2 flex justify-end">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xl shadow-lg">
                    4
                  </div>
                </div>
                <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-md relative before:content-[''] before:absolute before:w-1 before:h-full before:bg-gradient-to-b before:from-pink-500 before:to-red-500 before:-left-8 before:top-0 md:before:hidden">
                  <div className="absolute -left-8 top-6 w-6 h-6 bg-pink-500 rounded-full md:hidden"></div>
                  <h3 className="text-xl font-bold text-seo-dark mb-3 flex items-center">
                    <BarChart2 className="h-5 w-5 text-pink-500 mr-2" />
                    Monitoring & Optimization
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    We continuously track performance and make data-driven adjustments to improve rankings and visibility for your {industryData.title.toLowerCase()} business in {locationData.name}.
                  </p>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">
                    <p className="text-sm font-medium text-seo-dark">
                      Timeframe: Ongoing | Deliverable: Regular performance reports & optimization updates
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection
                className="relative pl-16 md:pl-0 md:grid md:grid-cols-9 md:gap-x-8"
                animation="fade-in"
                delay={500}
              >
                <div className="md:col-span-2 flex justify-end">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xl shadow-lg">
                    5
                  </div>
                </div>
                <div className="md:col-span-7 bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-bold text-seo-dark mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-red-500 mr-2" />
                    Growth & Expansion
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    Once we've established strong rankings, we identify opportunities to expand your {industryData.title.toLowerCase()} business's reach in {locationData.name} and surrounding areas.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm font-medium text-seo-dark">
                      Timeframe: 6+ months | Deliverable: Growth strategy & expansion recommendations
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection className="mt-12 text-center" animation="fade-in" delay={600}>
              <Link to="/free-consultation">
                <Button className="bg-gradient-to-r from-seo-blue to-blue-600 hover:from-seo-blue-light hover:to-blue-500 text-white px-8 py-3">
                  Start Your {industryData.title} SEO Journey Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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
