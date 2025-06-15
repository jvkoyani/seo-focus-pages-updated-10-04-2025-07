import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import SideButton from '@/components/SideButton';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { findIndustryBySlug } from '@/lib/industriesData';
import { getServicesForIndustry } from '@/lib/servicesData';
import { getAllServices } from '@/lib/servicesData';
import { locations } from '@/lib/data';
import { icons } from 'lucide-react';

const IndustryPage = ({ routeKey }: { routeKey?: string }) => {
  const { industrySlug } = useParams<{ industrySlug: string }>();
  const navigate = useNavigate();

  // Get industry data
  const industryData = findIndustryBySlug(industrySlug || '');

  // Get services for this industry
  const industryServices = industryData ? getServicesForIndustry(industryData.id) : [];

  // Redirect if industry not found
  React.useEffect(() => {
    if (!industryData) {
      navigate('/not-found');
    }
  }, [industryData, navigate]);

  if (!industryData) {
    return null; // Will redirect to 404
  }

  // SEO meta data
  const pageTitle = `${industryData.title} SEO Services | Expert Digital Marketing`;
  const pageDescription = `Professional SEO services for ${industryData.title.toLowerCase()} businesses. Increase online visibility, attract more customers, and grow your practice with our proven strategies.`;
  const pageKeywords = `${industryData.title} SEO, ${industryData.title.toLowerCase()} digital marketing, industry SEO, online marketing, search engine optimization`;

  // Get a few locations for the industry
  const industryLocations = locations.slice(0, 3);

  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-8 w-8 text-seo-blue" /> : null;
  };

  // Industry specific FAQs
  const faqs = [
    {
      question: `Why is SEO important for ${industryData.title.toLowerCase()} businesses?`,
      answer: `SEO is crucial for ${industryData.title.toLowerCase()} businesses because it helps you reach potential customers when they're actively searching for your services. With proper SEO, your business appears at the top of search results, increasing visibility, building trust, and driving more qualified leads to your practice.`
    },
    {
      question: `How long does it take to see SEO results for ${industryData.title.toLowerCase()} businesses?`,
      answer: `You can typically expect to see initial improvements in 3-6 months, with significant results within 6-12 months. The timeline depends on your current online presence, competition level, and the specific strategies implemented.`
    },
    {
      question: `What makes SEO different for ${industryData.title.toLowerCase()} businesses compared to other industries?`,
      answer: `${industryData.title} SEO requires specialized knowledge of industry regulations, patient privacy concerns, medical terminology, and local search patterns. We understand the unique challenges and opportunities in the ${industryData.title.toLowerCase()} sector and tailor our strategies accordingly.`
    },
    {
      question: `What SEO services do you offer specifically for ${industryData.title.toLowerCase()} businesses?`,
      answer: `We offer comprehensive SEO services tailored for ${industryData.title.toLowerCase()} businesses including local SEO, content marketing, website optimization, online reputation management, and compliance-focused strategies that meet industry standards and regulations.`
    },
    {
      question: `How do you measure SEO success for ${industryData.title.toLowerCase()} practices?`,
      answer: `We track key metrics relevant to ${industryData.title.toLowerCase()} businesses including local search rankings, website traffic, appointment bookings, phone calls, and overall online visibility. We provide regular reports showing how SEO improvements translate to business growth.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={`/industry/${industryData.slug}`}
        routeKey={routeKey}
      />
      
      <Navbar />
      <SideButton />
      
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
              <span className="text-seo-blue font-medium">{industryData.title}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <AnimatedSection className="md:w-1/2" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  Industry Expertise
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {industryData.title} SEO Services
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                {industryData.description}
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
              {industryData.title} SEO Services
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
                  
                  <div className="flex flex-col space-y-3">
                    <Link
                      to={`/service/${service.slug}`}
                      className="inline-flex items-center text-seo-blue font-medium group"
                    >
                      <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                        {service.title} Details
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
      
      {/* Locations Section */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Local SEO
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Serving Businesses Nationwide
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Find local SEO services for {industryData.title.toLowerCase()} businesses in these locations
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryLocations.map((location, index) => (
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
                  
                  <Link
                    to={`/location/${location.slug}/industry/${industryData.slug}`}
                    className="inline-flex items-center justify-center bg-seo-blue text-white px-5 py-3 rounded-md hover:bg-seo-blue-light transition-colors w-full group"
                  >
                    <span>{industryData.title} SEO in {location.name}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ 
        title={`${industryData.title} SEO FAQs`}
        subtitle={`Common questions about SEO services for ${industryData.title.toLowerCase()} businesses`}
        faqs={faqs}
      />
      
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
                      Ready to grow your {industryData.title.toLowerCase()} business?
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

export default IndustryPage;
