import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';
import AnimatedSection from '@/components/AnimatedSection';
import ServicesList from '@/components/ServicesList';
import LocationIndustries from '@/components/LocationIndustries';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import ResourcesSection from '@/components/ResourcesSection';
import { locations, services, industries } from '@/lib/data';
import SEO from '@/components/SEO';
import { Location as LocationType } from '@/lib/locationData';

const Location = ({ routeKey }: { routeKey?: string }) => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the location in the data
  const locationData = locations.find(loc => loc.slug === slug) || {
    id: '',
    name: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || '',
    slug: slug || '',
    country: 'Australia',
    state: 'Unknown',
    county: '',
    isPopular: false
  };
  
  // Format city name
  const formatCityName = (name: string) => {
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const cityName = locationData.name || formatCityName(slug || '');
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`SEO Services in ${cityName} | Grow Your Local Business`}
        description={`Expert SEO services in ${cityName}. Boost your local visibility, attract more customers, and grow your business with our tailored SEO strategies.`}
        keywords={`${cityName} SEO, SEO services ${cityName}, local SEO ${cityName}, digital marketing ${cityName}, ${cityName} search engine optimization`}
        canonicalUrl={`/location/${slug}`}
        routeKey={routeKey}
      />
      
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <LocationBreadcrumbs
          locationName={cityName}
          locationSlug={slug || ''}
        />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Local SEO Experts
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                SEO Services in {cityName}
              </h1>
              <p className="text-xl text-seo-gray-dark">
                Boost your local visibility and grow your business in {cityName} with our expert SEO strategies.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-gradient-to-r from-seo-blue-light/10 to-purple-100 rounded-xl p-6 md:p-8 my-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <h2 className="text-2xl font-bold text-seo-dark mb-2">
                      Boost Your Business with SEO Service in {cityName}
                    </h2>
                    <p className="text-seo-gray-dark">
                      Discover how our specialized SEO strategies can help your business stand out in {cityName}.
                    </p>
                  </div>
                  <Button className="whitespace-nowrap bg-seo-blue hover:bg-seo-blue-dark text-white">
                    <Link to={`/seo-service-${slug}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300}>
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
                Our SEO Services
              </h2>
              <ServicesList locationSlug={slug} />
            </AnimatedSection>
          </div>
        </section>
        
        <LocationIndustries locationSlug={slug} />
      </main>
      
      <ResourcesSection filterTag={slug} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Location;
