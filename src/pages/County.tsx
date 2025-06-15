
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { services, locations } from '@/lib/data';
import { getAllIndustries } from '@/lib/industriesData';
import SEO from '@/components/SEO';

const County = ({ routeKey }: { routeKey?: string }) => {
  const { country, state, county } = useParams<{ country: string; state: string; county: string }>();
  const navigate = useNavigate();
  
  const countryName = country === 'australia' ? 'Australia' : country;
  const stateFormatted = state ? state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  const countyFormatted = county ? county.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  
  const countyLocations = locations.filter(
    location => 
      location.country.toLowerCase() === country &&
      location.state.toLowerCase().replace(/\s+/g, '-') === state &&
      location.county?.toLowerCase().replace(/\s+/g, '-') === county
  );
  
  // Custom meta title and description for this county
  const countyTitle = `Local SEO in ${countyFormatted}, ${stateFormatted} | Area-Specific Optimization`;
  const countyDescription = `Specialized SEO services for businesses in ${countyFormatted}. Improve your local visibility and attract more customers in your area.`;
  
  const popularIndustries = getAllIndustries().slice(0, 3);
  
  const getSeoFriendlyUrl = (serviceSlug: string, industrySlug: string, locationSlug: string) => {
    return `/${serviceSlug}-for-${industrySlug}-in-${locationSlug}`;
  };
  
  React.useEffect(() => {
    if (countyLocations.length === 0) {
      navigate('/not-found');
    }
  }, [countyLocations.length, navigate]);
  
  if (countyLocations.length === 0) {
    return null; // Will redirect to 404
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={countyTitle}
        description={countyDescription}
        keywords={`${countyFormatted} SEO, local SEO services, ${stateFormatted} SEO, search optimization, local business marketing`}
        canonicalUrl={`/${country}/${state}/${county}`}
        routeKey={routeKey}
      />
      
      <Navbar />
      
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
              <Link 
                to={`/${country}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {countryName}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/${country}/${state}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {stateFormatted}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{countyFormatted}</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-3xl" animation="fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                <MapPin className="h-4 w-4 mr-1" />
                {countyFormatted}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              SEO Services in {countyFormatted}, {stateFormatted}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Specialized SEO solutions designed specifically for businesses in the {countyFormatted} area. Boost your local visibility and attract more customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                <Link to="/free-consultation" className="flex items-center">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                <Link to="/case-studies">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Areas We Serve in {countyFormatted}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our specialized SEO services in these {countyFormatted} locations
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {countyLocations.map((location, index) => (
              <AnimatedSection
                key={location.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-all"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white">
                      {location.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-seo-gray-dark mb-5">
                    Specialized SEO solutions for businesses in {location.name}, helping you improve online visibility and attract more local customers.
                  </p>
                  
                  <div className="space-y-3 mb-5">
                    <h4 className="font-medium text-seo-dark">Popular service combinations:</h4>
                    {popularIndustries.map((industry, i) => (
                      <Link
                        key={i}
                        to={getSeoFriendlyUrl('local-seo', industry.slug, location.slug)}
                        className="block text-sm text-seo-gray-dark hover:text-seo-blue transition-colors"
                      >
                        Local SEO for {industry.title} in {location.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link
                    to={`/location/${location.slug}`}
                    className="inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors w-full group"
                  >
                    <span>SEO Services in {location.name}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              SEO Services Available in {countyFormatted}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Comprehensive SEO solutions tailored for businesses in {countyFormatted}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                animation="fade-in"
                delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-seo-gray-dark mb-4">{service.description}</p>
                
                {countyLocations[0] && (
                  <div className="space-y-2 mb-4">
                    <Link
                      to={`/${service.slug}-${countyLocations[0].slug}`}
                      className="inline-flex items-center text-seo-blue font-medium group"
                    >
                      <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                        {service.title} in {countyFormatted}
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    {popularIndustries.slice(0, 1).map((industry) => (
                      <Link
                        key={industry.id}
                        to={getSeoFriendlyUrl(service.slug, industry.slug, countyLocations[0].slug)}
                        className="block text-sm text-seo-blue hover:underline"
                      >
                        {service.title} for {industry.title} in {countyLocations[0].name}
                      </Link>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            ))}
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
                      Ready to dominate {countyFormatted} search results?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get a free consultation and discover how our SEO services can help your {countyFormatted} business grow.
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

export default County;
