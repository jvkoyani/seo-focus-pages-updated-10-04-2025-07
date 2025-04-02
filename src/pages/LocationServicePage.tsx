import React, { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Award, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import LocationLinks from '@/components/LocationLinks';
import IndustriesList from '@/components/IndustriesList';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { findLocationBySlug } from '@/lib/additionalLocationData';
import { findServiceBySlug } from '@/lib/servicesData';

const LocationServicePage = () => {
  const { locationSlug, serviceSlug } = useParams<{ locationSlug: string; serviceSlug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Find the location and service data
  const locationData = locationSlug ? findLocationBySlug(locationSlug) : undefined;
  const serviceData = serviceSlug ? findServiceBySlug(serviceSlug) : undefined;
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  // Redirect to not found if either location or service is missing
  useEffect(() => {
    if (!locationData || !serviceData) {
      navigate('/not-found');
    }
  }, [locationData, serviceData, navigate]);
  
  if (!locationData || !serviceData) {
    return null; // Will be redirected
  }

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
              <span className="text-seo-gray-medium">/</span>
              <Link 
                to={`/location/${locationData.slug}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {locationData.name}
              </Link>
              <span className="text-seo-gray-medium">/</span>
              <span className="text-seo-blue font-medium">{serviceData.title}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <AnimatedSection className="max-w-2xl" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {locationData.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  <Award className="h-4 w-4 mr-1" />
                  Experienced Team
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {serviceData.title} in {locationData.name}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                Our specialized {serviceData.title} services are designed to help {locationData.name} businesses stand out from the competition and attract more qualified leads through search engines.
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
            
            <AnimatedSection animation="fade-in-left" delay={300} className="md:w-1/3">
              <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-seo-blue to-purple-600 opacity-90"></div>
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Free {serviceData.title} Audit
                      </h3>
                      <p className="text-white/90 mb-4">
                        See how your {serviceData.title.toLowerCase()} stacks up against competitors in {locationData.name}
                      </p>
                      <div className="flex items-center">
                        <Award className="h-8 w-8 text-yellow-300 mr-2" />
                        <span className="text-white font-medium">Free for limited time</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Complete {serviceData.title} analysis</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Competitor benchmarking</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>Actionable recommendations</span>
                    </div>
                    <div className="mt-6">
                      <Button className="w-full bg-seo-blue hover:bg-seo-blue-light">
                        Request Free Audit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <AnimatedSection animation="fade-in">
                <div className="prose max-w-none">
                  <h2>{serviceData.title} for {locationData.name} Businesses</h2>
                  <p>
                    We specialize in providing tailored {serviceData.title.toLowerCase()} solutions for businesses in {locationData.name}, {locationData.state}. Our team understands the unique challenges and opportunities in the local market, allowing us to develop strategies that drive real results.
                  </p>
                  
                  <h3>Why {serviceData.title} Matters for {locationData.name} Businesses</h3>
                  <p>
                    In today's competitive digital landscape, having a strong online presence is essential for businesses in {locationData.name}. Our customized {serviceData.title.toLowerCase()} strategies help you:
                  </p>
                  
                  <ul>
                    <li>Increase visibility in local search results</li>
                    <li>Attract more qualified leads from your target audience</li>
                    <li>Outrank competitors in {locationData.name} and surrounding areas</li>
                    <li>Build trust and credibility with potential customers</li>
                    <li>Drive more conversions and revenue for your business</li>
                  </ul>
                  
                  <h3>Our {serviceData.title} Process for {locationData.name}</h3>
                  <p>
                    We follow a proven methodology to deliver exceptional results for our {locationData.name} clients:
                  </p>
                  
                  <ol>
                    <li><strong>Research & Analysis:</strong> We analyze your website, competitors, and the {locationData.name} market to identify opportunities.</li>
                    <li><strong>Strategy Development:</strong> We create a customized {serviceData.title.toLowerCase()} plan based on your specific business goals.</li>
                    <li><strong>Implementation:</strong> Our team executes the strategy with precision and attention to detail.</li>
                    <li><strong>Monitoring & Optimization:</strong> We continuously track performance and make adjustments to maximize results.</li>
                    <li><strong>Reporting & Communication:</strong> You receive regular updates on your campaign's progress and achievements.</li>
                  </ol>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-1/3">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-seo-gray-light p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us for {serviceData.title} in {locationData.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Local Expertise</h4>
                        <p className="text-sm text-seo-gray-dark">Our team has deep knowledge of the {locationData.name} market and consumer behavior.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Proven Results</h4>
                        <p className="text-sm text-seo-gray-dark">We have a track record of success with businesses in {locationData.name} and across {locationData.state}.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Transparent Reporting</h4>
                        <p className="text-sm text-seo-gray-dark">You'll always know exactly what we're doing and the results we're achieving for your business.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Customized Strategies</h4>
                        <p className="text-sm text-seo-gray-dark">We develop tailored approaches based on your unique business needs and goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Dedicated Support</h4>
                        <p className="text-sm text-seo-gray-dark">Your success is our priority, and we're here to support you every step of the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-seo-blue p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                  <p className="mb-4">Ready to improve your {serviceData.title.toLowerCase()} results in {locationData.name}? Contact us for a free consultation and audit.</p>
                  <Button className="w-full bg-white text-seo-blue hover:bg-gray-100">
                    Request Free Consultation
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Locations Section */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Other Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              {serviceData.title} in Other Areas
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our {serviceData.title.toLowerCase()} services in these other locations
            </p>
          </AnimatedSection>
          
          <LocationLinks service={serviceData} excludeLocation={locationData.slug} limit={6} />
        </div>
      </section>
      
      {/* Industries We Serve Section */}
      <IndustriesList 
        title={`Industries We Serve in ${locationData.name}`}
        subtitle={`Specialized ${serviceData.title} strategies for different business sectors in ${locationData.name}`}
        location={locationData.name}
        locationSlug={locationData.slug}
        showImages={true}
        limit={3}
      />
      
      {/* CTA Section */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection 
              className="bg-gradient-to-r from-seo-blue to-purple-600 rounded-xl shadow-xl overflow-hidden" 
              animation="fade-in"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-8 md:mb-0 md:mr-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Ready to improve your {serviceData.title.toLowerCase()} in {locationData.name}?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get in touch today for a free consultation and discover how we can help your business grow.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button size="lg" className="bg-white text-seo-blue hover:bg-gray-100 w-full md:w-auto">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
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

export default LocationServicePage;
