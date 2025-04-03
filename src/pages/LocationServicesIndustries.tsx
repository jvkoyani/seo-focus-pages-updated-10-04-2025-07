
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';
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
  const allIndustries = getAllIndustries();
  const allServices = getAllServices();
  
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
    return IconComponent ? <IconComponent className="h-5 w-5 text-seo-blue" /> : null;
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
            <LocationBreadcrumbs 
              locationSlug={locationData.slug} 
              className="mb-4" 
            />
          </AnimatedSection>
          
          <AnimatedSection className="max-w-3xl" animation="fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                <MapPin className="h-4 w-4 mr-1" />
                {locationData.name}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              All SEO Services & Industries in {locationData.name}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Comprehensive directory of all our specialized SEO services and industry solutions available in {locationData.name}. Find the perfect match for your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* All Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in" className="mb-16">
            <h2 className="text-3xl font-bold text-seo-dark mb-8 border-b pb-4">
              SEO Services Available in {locationData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <div 
                  key={service.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {getIconComponent(service.icon)}
                    <h3 className="text-lg font-bold ml-3">{service.title}</h3>
                  </div>
                  <p className="text-seo-gray-dark mb-4">
                    {service.shortDescription} for businesses in {locationData.name}.
                  </p>
                  <Link 
                    to={`/location/${locationData.slug}/${service.slug}`}
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* All Industries Section */}
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl font-bold text-seo-dark mb-8 border-b pb-4">
              Industries We Serve in {locationData.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allIndustries.map((industry) => (
                <div 
                  key={industry.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    {getIconComponent(industry.icon)}
                    <h3 className="text-lg font-bold ml-3">{industry.title}</h3>
                  </div>
                  <p className="text-seo-gray-dark mb-4">
                    {industry.description}
                  </p>
                  <Link 
                    to={`/location/${locationData.slug}/industry/${industry.slug}`}
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Service-Industry Combinations Section */}
          <AnimatedSection animation="fade-in" className="mt-16">
            <h2 className="text-3xl font-bold text-seo-dark mb-8 border-b pb-4">
              Specialized Solutions by Industry in {locationData.name}
            </h2>
            
            {allIndustries.map((industry) => (
              <div key={industry.id} className="mb-12">
                <h3 className="text-xl font-bold text-seo-dark mb-4">
                  {industry.title} Solutions
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allServices.slice(0, 6).map((service) => (
                    <Link 
                      key={`${service.id}-${industry.id}`}
                      to={`/${service.slug}-for-${industry.slug}-in-${locationData.slug}`}
                      className="bg-seo-gray-light p-4 rounded-lg hover:bg-seo-blue/10 transition-colors group flex justify-between items-center"
                    >
                      <span className="font-medium">{service.title} for {industry.title}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
                
                <Link 
                  to={`/location/${locationData.slug}/industry/${industry.slug}`}
                  className="inline-flex items-center mt-4 text-seo-blue font-medium group"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    View all {industry.title} solutions
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </AnimatedSection>
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
                      Our experts can help you select the best SEO strategy for your business in {locationData.name}.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link to="/free-consultation">
                      <Button size="lg" className="bg-white text-seo-blue hover:bg-gray-100 w-full md:w-auto">
                        Get Free Consultation
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
