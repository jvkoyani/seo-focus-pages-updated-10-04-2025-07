import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { findServiceBySlug } from '@/lib/servicesData';
import { findIndustryBySlug } from '@/lib/industriesData';
import { findLocationBySlug } from '@/lib/additionalLocationData';
import NotFound from './NotFound';

const ServiceIndustryLocationPage = ({ routeKey }: { routeKey?: string }) => {
  const { serviceSlug, industrySlug, locationSlug } = useParams();

  // Early return if any slug is missing
  if (!serviceSlug || !industrySlug || !locationSlug) {
    return <NotFound />;
  }

  // Find the matching data
  const service = findServiceBySlug(serviceSlug);
  const industry = findIndustryBySlug(industrySlug);
  const location = findLocationBySlug(locationSlug);

  // If any data is missing, return NotFound
  if (!service || !industry || !location) {
    return <NotFound />;
  }

  // SEO meta data
  const pageTitle = `${service.title} for ${industry.title} in ${location.name} | Professional SEO Services`;
  const pageDescription = `Expert ${service.title.toLowerCase()} services for ${industry.title.toLowerCase()} businesses in ${location.name}. Increase your online visibility, attract more customers, and grow your practice with our proven digital marketing strategies.`;
  const pageKeywords = `${service.title} ${industry.title} ${location.name}, ${industry.title.toLowerCase()} ${service.title.toLowerCase()}, ${location.name} ${industry.title.toLowerCase()} marketing, local SEO ${industry.title.toLowerCase()}`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={`/${serviceSlug}-for-${industrySlug}-in-${locationSlug}`}
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
            <div className="inline-flex items-center space-x-2 flex-wrap">
              <Link 
                to="/" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to="/services" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/service/${service.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {service.title}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link 
                to={`/industry/${industry.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {industry.title}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{location.name}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection className="md:w-1/2" animation="fade-in">
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  {industry.title}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                  {service.title}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {service.title} for {industry.title} in {location.name}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                Specialized {service.title.toLowerCase()} solutions designed specifically for {industry.title.toLowerCase()} businesses in {location.name}. Drive more customers and grow your practice with our proven strategies.
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
            
            <AnimatedSection animation="fade-in-left" delay={200} className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                    <CheckCircle className="h-8 w-8 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-seo-dark">Why Choose Us</h3>
                    <p className="text-seo-gray-dark">Proven results for {industry.title.toLowerCase()} businesses</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-seo-gray-dark">Specialized expertise in {industry.title.toLowerCase()} {service.title.toLowerCase()}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-seo-gray-dark">Local market knowledge in {location.name}</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-seo-gray-dark">Proven track record of success</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="ml-3 text-seo-gray-dark">Comprehensive reporting and analytics</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Related Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Related Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Explore More Options
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover other ways we can help your business succeed online
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
              animation="fade-in"
            >
              <h3 className="text-xl font-bold text-seo-dark mb-3">All {service.title} Services</h3>
              <p className="text-seo-gray-dark mb-4">
                Explore our complete range of {service.title.toLowerCase()} solutions across different locations.
              </p>
              <Link
                to={`/service/${service.slug}`}
                className="inline-flex items-center text-seo-blue font-medium group"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                  View All Services
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
              animation="fade-in"
              delay={100}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-3">{industry.title} Solutions</h3>
              <p className="text-seo-gray-dark mb-4">
                Discover all our specialized services for {industry.title.toLowerCase()} businesses.
              </p>
              <Link
                to={`/industry/${industry.slug}`}
                className="inline-flex items-center text-seo-blue font-medium group"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                  View Industry Solutions
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
              animation="fade-in"
              delay={200}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-3">{location.name} Services</h3>
              <p className="text-seo-gray-dark mb-4">
                See all our digital marketing services available in {location.name}.
              </p>
              <Link
                to={`/location/${location.slug}`}
                className="inline-flex items-center text-seo-blue font-medium group"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                  View Local Services
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
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
                      Ready to grow your {industry.title.toLowerCase()} business?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get started with a free consultation and discover how our {service.title.toLowerCase()} can help your business thrive in {location.name}.
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

export default ServiceIndustryLocationPage;
