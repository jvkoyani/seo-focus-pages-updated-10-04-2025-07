import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ContextualBlog from '@/components/ContextualBlog';
import { Button } from '@/components/ui/button';
import { findLocationBySlug } from '@/lib/additionalLocationData';
import { getAllIndustries } from '@/lib/industriesData';
import { icons } from 'lucide-react';
import SEO from '@/components/SEO';

const LocationIndustries = ({ routeKey }: { routeKey?: string }) => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const navigate = useNavigate();
  
  // Get location data
  const locationData = findLocationBySlug(locationSlug || '');
  
  // Get all industries
  const industries = getAllIndustries();
  
  // Redirect if location not found
  useEffect(() => {
    if (!locationData) {
      navigate('/not-found');
    }
  }, [locationData, navigate]);
  
  if (!locationData) {
    return null; // Will redirect to 404
  }
  
  // Custom meta for location industries
  const locationTitle = `Industry SEO Services ${locationData.name} | Specialized Optimization`;
  const locationDescription = `Expert SEO services for all industries in ${locationData.name}. Healthcare, retail, professional services & more. Tailored strategies for your sector.`;
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-10 w-10 text-seo-blue" /> : null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={locationTitle}
        description={locationDescription}
        keywords={`${locationData.name} industry SEO, sector-specific SEO ${locationData.name}, business type SEO services, specialized optimization ${locationData.name}`}
        canonicalUrl={`/location/${locationData.slug}/industries`}
        routeKey={routeKey}
      />
      
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
              <span className="text-seo-blue font-medium">Industries</span>
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
              Industry-Specific SEO Services in {locationData.name}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Discover our specialized SEO solutions tailored for different industries in {locationData.name}. We understand the unique challenges and opportunities in your business sector.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* All Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                  
                  <div className="bg-seo-blue/10 rounded-full w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIconComponent(industry.icon)}
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-seo-dark mb-3">
                    {industry.title} in {locationData.name}
                  </h3>
                  
                  <p className="text-seo-gray-dark mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-seo-blue/5 to-transparent border-l-2 border-seo-blue">
                    <h4 className="font-medium text-seo-dark mb-3">Key benefits:</h4>
                    <ul className="space-y-2">
                      {industry.benefits.map((benefit, i) => (
                        <li key={i} className="text-seo-gray-dark flex items-start">
                          <span className="text-seo-blue mr-2">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/location/${locationData.slug}/industry/${industry.slug}`} 
                    className="inline-flex items-center justify-center bg-seo-blue hover:bg-seo-blue-light text-white px-6 py-3 rounded-md transition-colors w-full group"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contextual Blog Section */}
      <ContextualBlog
        locationSlug={locationData.slug}
        title={`SEO Insights for ${locationData.name} Businesses`}
        subtitle={`Stay ahead of the competition with localized SEO strategies and industry insights specifically for businesses in ${locationData.name}.`}
      />
      
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
                      Get expert advice on which SEO approach is best for your industry in {locationData.name}.
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

export default LocationIndustries;
