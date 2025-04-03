import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { findLocationBySlug } from '@/lib/additionalLocationData';
import { findIndustryBySlug, getAllIndustries } from '@/lib/industriesData';
import { findServiceBySlug, getAllServices, getServicesForIndustry } from '@/lib/servicesData';
import ServiceIndustryNav from '@/components/ServiceIndustryNav';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';
import { icons } from 'lucide-react';

const LocationIndustryPage = () => {
  const { locationSlug, industrySlug } = useParams<{ locationSlug: string; industrySlug: string }>();
  const navigate = useNavigate();
  
  // Get location and industry data
  const locationData = findLocationBySlug(locationSlug || '');
  const industryData = findIndustryBySlug(industrySlug || '');
  
  // Get relevant services for this industry
  const relevantServices = industryData ? getServicesForIndustry(industryData.id).slice(0, 3) : [];
  const allServices = getAllServices().slice(0, 6);
  const otherIndustries = getAllIndustries()
    .filter(industry => industry.id !== industryData?.id)
    .slice(0, 3);
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-5 w-5 text-seo-blue" /> : null;
  };
  
  // Redirect if location or industry not found
  useEffect(() => {
    if (!locationData || !industryData) {
      navigate('/not-found');
    }
  }, [locationData, industryData, navigate]);
  
  if (!locationData || !industryData) {
    return null; // Will redirect to 404
  }

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
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                <MapPin className="h-4 w-4 mr-1" />
                {locationData.name}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                Industry Expertise
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              {industryData.title} SEO in {locationData.name}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Specialized SEO solutions designed for {industryData.title.toLowerCase()} businesses in {locationData.name}. Increase your online visibility and attract more customers with our industry-specific strategies.
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
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <AnimatedSection animation="fade-in">
                <div className="prose max-w-none">
                  <h2>{industryData.title} SEO Services in {locationData.name}</h2>
                  <p>
                    Our comprehensive SEO solutions are tailored specifically for {industryData.title.toLowerCase()} businesses in {locationData.name}. We understand the unique challenges and opportunities in your industry, allowing us to develop strategies that drive real results.
                  </p>
                  
                  <h3>Why {industryData.title} Businesses in {locationData.name} Need Specialized SEO</h3>
                  <p>
                    In today's competitive digital landscape, generic SEO approaches simply don't cut it anymore. {industryData.title} businesses in {locationData.name} face unique challenges and have specific needs that require a customized approach:
                  </p>
                  
                  <ul>
                    {industryData.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  
                  <h3>Our {industryData.title} SEO Approach for {locationData.name}</h3>
                  <p>
                    We follow a proven methodology to deliver exceptional results for our {industryData.title.toLowerCase()} clients in {locationData.name}:
                  </p>
                  
                  <ol>
                    <li><strong>Industry-Specific Keyword Research:</strong> We identify the exact search terms that potential customers in {locationData.name} use when looking for {industryData.title.toLowerCase()} services.</li>
                    <li><strong>Competitor Analysis:</strong> We analyze your competitors in the {industryData.title.toLowerCase()} space to find opportunities for your business to stand out.</li>
                    <li><strong>Technical SEO:</strong> We ensure your website meets the specific technical requirements needed for {industryData.title.toLowerCase()} businesses to rank well.</li>
                    <li><strong>Local SEO:</strong> We optimize your presence for local searches in {locationData.name}, ensuring you're visible to nearby customers.</li>
                    <li><strong>Content Strategy:</strong> We develop content that addresses the specific needs and questions of {industryData.title.toLowerCase()} customers in {locationData.name}.</li>
                  </ol>
                </div>
              </AnimatedSection>
              
              {/* Relevant Services Section */}
              <AnimatedSection className="mt-12" animation="fade-in">
                <h2 className="text-2xl font-bold text-seo-dark mb-6">
                  Top SEO Services for {industryData.title} in {locationData.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {relevantServices.map((service) => (
                    <div 
                      key={service.id}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        {getIconComponent(service.icon)}
                        <h3 className="text-lg font-bold ml-3">{service.title}</h3>
                      </div>
                      <p className="text-seo-gray-dark mb-4 text-sm">
                        {service.shortDescription} for {industryData.title.toLowerCase()} businesses in {locationData.name}.
                      </p>
                      <Link 
                        to={`/${service.slug}-for-${industryData.slug}-in-${locationData.slug}`}
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
                
                <div className="mb-12">
                  <Link 
                    to={`/location/${locationData.slug}/all`}
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      View all services for {industryData.title} in {locationData.name}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Other Industries Section */}
                <h2 className="text-2xl font-bold text-seo-dark mb-6">
                  Other Industries We Serve in {locationData.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherIndustries.map((industry) => (
                    <div 
                      key={industry.id}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-4">
                        {getIconComponent(industry.icon)}
                        <h3 className="text-lg font-bold ml-3">{industry.title}</h3>
                      </div>
                      <p className="text-seo-gray-dark mb-4 text-sm">
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
                
                <div className="mt-8">
                  <Link 
                    to={`/location/${locationData.slug}/industries`}
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      View all industries we serve in {locationData.name}
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="lg:w-1/3">
              <AnimatedSection animation="fade-in" delay={200}>
                {/* Service-Industry Navigation Component */}
                <ServiceIndustryNav 
                  industrySlug={industryData.slug}
                  industryTitle={industryData.title}
                  locationSlug={locationData.slug}
                  locationName={locationData.name}
                />
                
                <div className="bg-seo-gray-light p-6 rounded-xl mt-8">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us for {industryData.title} SEO in {locationData.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Industry Expertise</h4>
                        <p className="text-sm text-seo-gray-dark">We have deep knowledge of the {industryData.title.toLowerCase()} industry and its specific SEO needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Local Knowledge</h4>
                        <p className="text-sm text-seo-gray-dark">Our team understands the {locationData.name} market and how to reach local customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Proven Results</h4>
                        <p className="text-sm text-seo-gray-dark">We have a track record of success with {industryData.title.toLowerCase()} businesses in {locationData.name}.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Customized Strategies</h4>
                        <p className="text-sm text-seo-gray-dark">We develop tailored approaches based on your unique business needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium">Transparent Reporting</h4>
                        <p className="text-sm text-seo-gray-dark">You'll always know exactly what we're doing and the results we're achieving.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-seo-blue p-6 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                  <p className="mb-4">Ready to improve your {industryData.title.toLowerCase()} business's online presence in {locationData.name}? Contact us for a free consultation.</p>
                  <Button className="w-full bg-white text-seo-blue hover:bg-gray-100">
                    <Link to="/free-consultation">
                      Request Free Consultation
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
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
                      Ready to grow your {industryData.title.toLowerCase()} business in {locationData.name}?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get started with a free consultation and discover how our SEO services can help your business thrive.
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

export default LocationIndustryPage;
