
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { locations } from '@/lib/data';

const Country = () => {
  const { country } = useParams<{ country: string }>();
  const countryName = country === 'australia' ? 'Australia' : country;
  
  // Group locations by state
  const locationsByState = locations.reduce((acc, location) => {
    if (location.country.toLowerCase() === country) {
      const state = location.state;
      if (!acc[state]) {
        acc[state] = [];
      }
      acc[state].push(location);
    }
    return acc;
  }, {} as Record<string, typeof locations>);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-seo-blue-light/10 to-white relative overflow-hidden">
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
              <span className="text-seo-blue font-medium">{countryName}</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-3xl" animation="fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                <MapPin className="h-4 w-4 mr-1" />
                {countryName}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              SEO Services in {countryName}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Comprehensive SEO solutions tailored for businesses across {countryName}. Increase your online visibility and drive more qualified traffic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                View Case Studies
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* States Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              States & Territories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              SEO Services Across {countryName}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our specialized SEO solutions tailored for each state and territory in {countryName}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(locationsByState).map(([state, stateLocations], index) => {
              const stateSlug = state.toLowerCase().replace(/\s+/g, '-');
              const countLocations = stateLocations.length;
              
              return (
                <AnimatedSection
                  key={state}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                  animation="fade-in"
                  delay={index * 100}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      {state}
                    </h3>
                    <p className="text-seo-gray-dark mb-5">
                      {countLocations} {countLocations === 1 ? 'location' : 'locations'} with specialized SEO services
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {stateLocations.map(location => (
                        <Link
                          key={location.id}
                          to={`/location/${location.slug}`}
                          className="flex items-center py-2 px-3 rounded-md hover:bg-gray-50"
                        >
                          <MapPin className="h-4 w-4 text-seo-blue mr-2" />
                          <span>{location.name}</span>
                          <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                        </Link>
                      ))}
                    </div>
                    
                    <Link
                      to={`/${country}/${stateSlug}`}
                      className="inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors w-full group"
                    >
                      <span>Explore {state} SEO Services</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </AnimatedSection>
              );
            })}
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
                      Ready to improve your {countryName} business's online presence?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get a free consultation and discover how our SEO services can help your business grow.
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

export default Country;
