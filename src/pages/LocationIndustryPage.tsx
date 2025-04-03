
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { findLocationBySlug } from '@/lib/additionalLocationData';
import { findIndustryBySlug } from '@/lib/industriesData';
import { getServicesForIndustry } from '@/lib/servicesData';
import { icons } from 'lucide-react';

const LocationIndustryPage = () => {
  const { locationSlug, industrySlug } = useParams<{ locationSlug: string; industrySlug: string }>();
  const navigate = useNavigate();
  
  // Get location and industry data
  const locationData = findLocationBySlug(locationSlug || '');
  const industryData = findIndustryBySlug(industrySlug || '');
  
  // Get services for this industry
  const industryServices = industryData ? getServicesForIndustry(industryData.id) : [];
  
  // Redirect if location or industry not found
  useEffect(() => {
    if (!locationData || !industryData) {
      navigate('/not-found');
    }
  }, [locationData, industryData, navigate]);
  
  if (!locationData || !industryData) {
    return null; // Will redirect to 404
  }
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-8 w-8 text-seo-blue" /> : null;
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
            <div className="inline-flex items-center space-x-2 flex-wrap">
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
              <Link 
                to={`/location/${locationData.slug}/industries`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Industries
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{industryData.title}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection className="md:w-1/2" animation="fade-in">
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
                {industryData.title} in {locationData.name}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                {industryData.description}
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
                    {getIconComponent(industryData.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-seo-dark">Key Benefits</h3>
                    <p className="text-seo-gray-dark">Why {industryData.title} businesses choose us</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {industryData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-seo-gray-dark">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Services for this industry */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              {industryData.title} SEO Services in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Tailored services to help your {industryData.title.toLowerCase()} business succeed online
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-seo-dark mb-3">{service.title}</h3>
                  <p className="text-seo-gray-dark mb-5">{service.description}</p>
                  
                  <div className="flex flex-col space-y-2">
                    <Link
                      to={`/location/${locationData.slug}/${service.slug}`}
                      className="inline-flex items-center text-seo-blue font-medium group"
                    >
                      <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                        {service.title} in {locationData.name}
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    
                    <Link
                      to={`/${service.slug}-for-${industryData.slug}-in-${locationData.slug}`}
                      className="inline-flex items-center text-green-600 font-medium group mt-2"
                    >
                      <span className="border-b border-green-600/30 group-hover:border-green-600 transition-colors">
                        {service.title} for {industryData.title} in {locationData.name}
                      </span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us for Industry Specifc SEO */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Why Choose Us for {industryData.title} SEO in {locationData.name}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We understand the unique challenges and opportunities in the {industryData.title.toLowerCase()} industry
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Industry-Specific Knowledge</h3>
              <p className="text-seo-gray-dark mb-4">
                Our team has specialized experience working with {industryData.title.toLowerCase()} businesses in {locationData.name} and understands the unique challenges and opportunities in your industry.
              </p>
              <p className="text-seo-gray-dark">
                We stay up-to-date with the latest trends, regulations, and customer behaviors specific to your industry to ensure our strategies are always effective and compliant.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
              delay={100}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Tailored Strategies</h3>
              <p className="text-seo-gray-dark mb-4">
                We don't believe in one-size-fits-all solutions. We develop custom SEO strategies tailored to the specific needs and goals of your {industryData.title.toLowerCase()} business.
              </p>
              <p className="text-seo-gray-dark">
                Our approach considers your unique selling points, target audience, and local competitors in {locationData.name} to create a strategy that drives the best results for your business.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
              delay={200}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Local Market Expertise</h3>
              <p className="text-seo-gray-dark mb-4">
                We have extensive knowledge of the {locationData.name} market and understand the local search landscape, consumer behavior, and competitive environment.
              </p>
              <p className="text-seo-gray-dark">
                This local expertise allows us to optimize your online presence to attract the right customers in {locationData.name} and surrounding areas.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              animation="fade-in"
              delay={300}
            >
              <h3 className="text-xl font-bold text-seo-dark mb-4">Proven Results</h3>
              <p className="text-seo-gray-dark mb-4">
                We have a track record of success helping {industryData.title.toLowerCase()} businesses in {locationData.name} improve their online visibility and attract more customers.
              </p>
              <p className="text-seo-gray-dark">
                Our strategies are based on data and best practices that have been proven to work for businesses like yours.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
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
