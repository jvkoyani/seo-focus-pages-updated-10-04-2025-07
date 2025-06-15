import React, { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Award, CheckCircle, FileText, Target, Users, ChartBar, BarChart2 } from 'lucide-react';
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
import FAQ from '@/components/FAQ';
import ServiceTabs from '@/components/ServiceTabs';
import SEO from '@/components/SEO';

const LocationServicePage = ({ routeKey }: { routeKey?: string }) => {
  const { locationSlug, serviceSlug } = useParams<{ locationSlug: string; serviceSlug: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Generate routeKey if not provided
  const currentRouteKey = routeKey || `${location.pathname}${location.search}`;
  
  const locationData = locationSlug ? findLocationBySlug(locationSlug) : undefined;
  const serviceData = serviceSlug ? findServiceBySlug(serviceSlug) : undefined;
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);
  
  useEffect(() => {
    if (!locationData || !serviceData) {
      navigate('/not-found');
    }
  }, [locationData, serviceData, navigate]);
  
  if (!locationData || !serviceData) {
    return null; // Will be redirected
  }
  
  // Meta title and description for this page
  const pageTitle = `${serviceData.title} in ${locationData.name} | Expert SEO Services`;
  const pageDescription = `Professional ${serviceData.title.toLowerCase()} services in ${locationData.name}, ${locationData.state}. Improve your local search rankings and attract more qualified leads.`;
  
  const faqs = [
    {
      question: `How does ${serviceData.title} help businesses in ${locationData.name}?`,
      answer: `${serviceData.title} helps ${locationData.name} businesses increase visibility in local search results, attract qualified leads from your target audience, and outrank competitors in the local market.`
    },
    {
      question: `How long does it take to see results from ${serviceData.title} in ${locationData.name}?`,
      answer: `Most businesses start seeing initial results within 3-6 months, with significant improvements typically appearing after 6-12 months of consistent effort. This timeline varies depending on your industry competition in ${locationData.name} and your current online presence.`
    },
    {
      question: `What makes your ${serviceData.title} services different from other providers in ${locationData.name}?`,
      answer: `Our approach combines deep local market knowledge of ${locationData.name}, data-driven strategies, custom solutions for each business, and transparent reporting so you always know what we're doing and the results we're achieving.`
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={`${serviceData.title} ${locationData.name}, ${serviceData.title.toLowerCase()} services ${locationData.state}, SEO ${locationData.name}`}
        canonicalUrl={`/location/${locationData.slug}/${serviceData.slug}`}
        routeKey={currentRouteKey}
      />
      
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
      
      {/* New Service Tabs Section */}
      <section className="py-16 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Full Range of SEO Solutions in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover how our comprehensive SEO services can help your business thrive in {locationData.name}
            </p>
          </AnimatedSection>
          
          <ServiceTabs />
        </div>
      </section>
      
      {/* Main Content Section - IMPROVED UI */}
      <section className="py-16 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <AnimatedSection animation="fade-in">
                <div className="prose max-w-none">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-seo-dark relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-seo-blue to-purple-600">
                      {serviceData.title} for {locationData.name} Businesses
                    </span>
                    <span className="absolute bottom-0 left-0 h-1 w-24 bg-gradient-to-r from-seo-blue to-purple-600"></span>
                  </h2>
                  
                  <div className="bg-white p-8 rounded-xl shadow-md mb-10 border-l-4 border-seo-blue">
                    <p className="text-lg leading-relaxed">
                      We specialize in providing tailored {serviceData.title.toLowerCase()} solutions for businesses in {locationData.name}, {locationData.state}. Our team understands the unique challenges and opportunities in the local market, allowing us to develop strategies that drive real results.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <AnimatedSection className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" animation="fade-in" delay={100}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-blue-100 text-seo-blue mr-4">
                          <Target className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl">Local Market Focus</h3>
                      </div>
                      <p className="text-seo-gray-dark">
                        Strategies specifically designed for the {locationData.name} market and customer behavior.
                      </p>
                    </AnimatedSection>
                    
                    <AnimatedSection className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" animation="fade-in" delay={200}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                          <Users className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl">Target Audience</h3>
                      </div>
                      <p className="text-seo-gray-dark">
                        Connect with qualified local leads who are actively searching for your products or services.
                      </p>
                    </AnimatedSection>
                    
                    <AnimatedSection className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" animation="fade-in" delay={300}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                          <BarChart2 className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl">Competitive Edge</h3>
                      </div>
                      <p className="text-seo-gray-dark">
                        Outrank competitors in {locationData.name} and surrounding areas with proven strategies.
                      </p>
                    </AnimatedSection>
                    
                    <AnimatedSection className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow" animation="fade-in" delay={400}>
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                          <ChartBar className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl">Measurable Results</h3>
                      </div>
                      <p className="text-seo-gray-dark">
                        Track performance with detailed reporting and see tangible business growth.
                      </p>
                    </AnimatedSection>
                  </div>
                  
                  <AnimatedSection animation="fade-in" delay={500}>
                    <h3 className="text-2xl font-bold mb-6 text-seo-dark">Our {serviceData.title} Process for {locationData.name}</h3>
                    
                    <div className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-2 before:w-0.5 before:h-[calc(100%-40px)] before:bg-gradient-to-b before:from-seo-blue before:to-purple-600">
                      <div className="mb-8 relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-gradient-to-r from-seo-blue to-blue-400 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">1</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-seo-dark">Research & Analysis</h4>
                        <p className="text-seo-gray-dark">
                          We analyze your website, competitors, and the {locationData.name} market to identify opportunities for growth and improvement.
                        </p>
                      </div>
                      
                      <div className="mb-8 relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">2</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-seo-dark">Strategy Development</h4>
                        <p className="text-seo-gray-dark">
                          We create a customized {serviceData.title.toLowerCase()} plan based on your specific business goals and {locationData.name} market insights.
                        </p>
                      </div>
                      
                      <div className="mb-8 relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-seo-dark">Implementation</h4>
                        <p className="text-seo-gray-dark">
                          Our team executes the strategy with precision and attention to detail, ensuring every element is optimized for success.
                        </p>
                      </div>
                      
                      <div className="mb-8 relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">4</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-seo-dark">Monitoring & Optimization</h4>
                        <p className="text-seo-gray-dark">
                          We continuously track performance and make data-driven adjustments to maximize your results and ROI.
                        </p>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute -left-8 top-0 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">5</span>
                        </div>
                        <h4 className="text-xl font-bold mb-2 text-seo-dark">Reporting & Communication</h4>
                        <p className="text-seo-gray-dark">
                          You receive regular updates on your campaign's progress, achievements, and next steps to keep you informed.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-1/3">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Award className="h-6 w-6 text-seo-blue mr-2" />
                    <span>Why Choose Us for {locationData.name}</span>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-3 rounded-lg hover:bg-seo-gray-light transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Local Expertise</h4>
                        <p className="text-sm text-seo-gray-dark">Our team has deep knowledge of the {locationData.name} market and consumer behavior.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 rounded-lg hover:bg-seo-gray-light transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Proven Results</h4>
                        <p className="text-sm text-seo-gray-dark">We have a track record of success with businesses in {locationData.name} and across {locationData.state}.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 rounded-lg hover:bg-seo-gray-light transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Transparent Reporting</h4>
                        <p className="text-sm text-seo-gray-dark">You'll always know exactly what we're doing and the results we're achieving for your business.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 rounded-lg hover:bg-seo-gray-light transition-colors">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Customized Strategies</h4>
                        <p className="text-sm text-seo-gray-dark">We develop tailored approaches based on your unique business needs and goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-3 rounded-lg hover:bg-seo-gray-light transition-colors">
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
                
                <div className="bg-gradient-to-r from-seo-blue to-purple-600 p-6 rounded-xl text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    <span>Get Started Today</span>
                  </h3>
                  <p className="mb-6">Ready to improve your {serviceData.title.toLowerCase()} results in {locationData.name}? Contact us for a free consultation and audit.</p>
                  <Button 
                    onClick={() => window.location.href = '/free-consultation'} 
                    className="w-full bg-white text-seo-blue hover:bg-gray-100 transition-colors button-hover-effect"
                  >
                    Request Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - NEW SECTION */}
      <FAQ 
        title={`Frequently Asked Questions About ${serviceData.title} in ${locationData.name}`}
        subtitle="Find answers to common questions about our services and how they can help your business"
        faqs={faqs}
      />
      
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
