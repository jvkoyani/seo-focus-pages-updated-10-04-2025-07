
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { findLocationBySlug } from '@/lib/additionalLocationData';
import { getAllIndustries } from '@/lib/industriesData';
import { getAllServices } from '@/lib/servicesData';
import { icons } from 'lucide-react';

const LocationServicesIndustries = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const navigate = useNavigate();
  
  // Get location data
  const locationData = findLocationBySlug(locationSlug || '');
  
  // Get all industries and services
  const industries = getAllIndustries();
  const services = getAllServices();
  
  // Redirect if location not found
  useEffect(() => {
    if (!locationData) {
      navigate('/not-found');
    }
  }, [locationData, navigate]);
  
  if (!locationData) {
    return null; // Will redirect to 404
  }
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-10 w-10 text-seo-blue" /> : null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-seo-blue rounded-full"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-green-400 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/2 w-48 h-48 bg-purple-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="mb-4" animation="fade-in">
            <div className="inline-flex items-center space-x-2">
              <Link 
                to="/" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/location/${locationData.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {locationData.name}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">All Services & Industries</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-3xl" animation="fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                <MapPin className="h-4 w-4 mr-1" />
                {locationData.name}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              Complete SEO Solutions for {locationData.name}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Explore our full range of services and industry-specific SEO solutions tailored for {locationData.name} businesses.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              SEO Services in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Comprehensive SEO solutions tailored specifically for businesses in {locationData.name}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection 
                key={service.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group"
                animation="fade-in"
                delay={100 * index}
              >
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-seo-blue/5 to-transparent rounded-bl-full"></div>
                  
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIconComponent(service.icon)}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    {service.title} in {locationData.name}
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    to={`/${service.slug}-${locationData.slug}`} 
                    className="inline-flex items-center text-seo-blue font-medium group mt-2 relative"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-seo-blue/5 scale-0 group-hover:scale-100 rounded-md transition-transform duration-300 -z-10"></div>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industry Section */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Industry Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Industry-Specific SEO in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Tailored SEO strategies for different business sectors in {locationData.name}
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
                    {industry.title} in {locationData.name}
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-6">
                    {industry.description}
                  </p>
                  
                  <Link 
                    to={`/location/${locationData.slug}/industry/${industry.slug}`} 
                    className="inline-flex items-center text-seo-blue font-medium group mt-2 relative"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-seo-blue/5 scale-0 group-hover:scale-100 rounded-md transition-transform duration-300 -z-10"></div>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service-Industry Combinations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Specialized Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Industry-Specific SEO Services in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Explore our specialized service combinations tailored for specific industries in {locationData.name}
            </p>
          </AnimatedSection>
          
          <div className="space-y-12">
            {services.slice(0, 4).map((service, serviceIndex) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <AnimatedSection animation="fade-in" delay={serviceIndex * 100}>
                  <h3 className="text-2xl font-bold text-seo-dark mb-6 flex items-center">
                    <div className="bg-seo-blue/10 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      {getIconComponent(service.icon)}
                    </div>
                    {service.title} for Industries in {locationData.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.slice(0, 6).map((industry, industryIndex) => (
                      <Card 
                        key={industry.id} 
                        className="hover:shadow-md transition-all border-gray-100"
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start">
                            <div className="bg-seo-blue/5 rounded-full w-10 h-10 flex items-center justify-center mr-3 mt-1">
                              {getIconComponent(industry.icon)}
                            </div>
                            <div>
                              <h4 className="font-bold text-seo-dark mb-1">{service.title} for {industry.title}</h4>
                              <p className="text-sm text-seo-gray-dark mb-3">
                                Specialized {service.title.toLowerCase()} solutions for {industry.title.toLowerCase()} businesses in {locationData.name}.
                              </p>
                              <Link 
                                to={`/${service.slug}-for-${industry.slug}-in-${locationData.slug}`}
                                className="text-sm text-seo-blue flex items-center"
                              >
                                Learn more
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {industry.forIndustries && industry.forIndustries.length > 6 && (
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                        View All {service.title} Industry Solutions
                      </Button>
                    </div>
                  )}
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-seo-gray-light">
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
                      Need help choosing the right solution?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get expert advice on which SEO approach is best for your business in {locationData.name}.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link to="/free-consultation">
                      <Button size="lg" className="bg-white text-seo-blue hover:bg-gray-100 w-full md:w-auto">
                        Get Free Advice
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

export default LocationServicesIndustries;
