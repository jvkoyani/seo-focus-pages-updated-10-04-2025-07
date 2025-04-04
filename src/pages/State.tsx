
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { services, locations } from '@/lib/data';
import ServiceBadge from '@/components/ServiceBadge';
import { ServiceBadgeProps } from '@/components/ServiceBadge';
import FAQ, { FAQItem } from '@/components/FAQ';
import ContextualBlog from '@/components/ContextualBlog';
import SEO from '@/components/SEO';

const State = () => {
  const { country, state } = useParams<{ country: string; state: string }>();
  const navigate = useNavigate();
  
  const countryName = country === 'australia' ? 'Australia' : country;
  const stateFormatted = state ? state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  
  // Get locations for this state
  const stateLocations = locations.filter(
    location => location.country.toLowerCase() === country && 
    location.state.toLowerCase().replace(/\s+/g, '-') === state
  );
  
  // Group locations by county
  const locationsByCounty = stateLocations.reduce((acc, location) => {
    const county = location.county || 'Other Areas';
    if (!acc[county]) {
      acc[county] = [];
    }
    acc[county].push(location);
    return acc;
  }, {} as Record<string, typeof locations>);
  
  // If no locations found, redirect to 404
  React.useEffect(() => {
    if (stateLocations.length === 0) {
      navigate('/not-found');
    }
  }, [stateLocations.length, navigate]);
  
  // Authority badges for this state
  const authorityBadges: ServiceBadgeProps[] = [
    {
      text: `#1 SEO Provider in ${stateFormatted}`,
      icon: "award" as const,
      variant: "primary" as const,
      size: "lg"
    },
    {
      text: "Top-Rated Agency",
      icon: "star" as const,
      variant: "warning" as const,
      size: "md"
    },
    {
      text: "Proven Results",
      icon: "trending-up" as const,
      variant: "success" as const,
      size: "md"
    }
  ];

  // FAQ items for this state
  const stateFAQs: FAQItem[] = [
    {
      question: `Why is SEO important for businesses in ${stateFormatted}?`,
      answer: `SEO is crucial for ${stateFormatted} businesses because it helps you connect with customers actively searching for your products or services. With the growing competition in ${stateFormatted}'s business landscape, appearing prominently in search results gives you a competitive advantage. Effective SEO increases your visibility, drives targeted traffic to your website, and ultimately leads to higher conversions and revenue growth.`
    },
    {
      question: `What makes SEO in ${stateFormatted} different from other states?`,
      answer: `SEO in ${stateFormatted} has unique characteristics due to the state's specific search patterns, local business ecosystems, and regional consumer behavior. The competitive landscape varies across different regions within ${stateFormatted}, requiring tailored approaches. Additionally, ${stateFormatted} has its own set of local directories, publications, and organizations that influence local search rankings. Our strategies are customized to leverage these ${stateFormatted}-specific factors for optimal results.`
    },
    {
      question: `How long does it take to see results from SEO in ${stateFormatted}?`,
      answer: `Most businesses in ${stateFormatted} begin seeing initial improvements within 3-4 months of implementing our SEO strategies. More significant results typically appear within 6-12 months. The timeline varies depending on factors such as your industry's competitiveness in ${stateFormatted}, your website's current condition, and your specific business goals. We focus on sustainable, long-term results rather than quick fixes that might harm your site in the long run.`
    },
    {
      question: `How do you approach local SEO for businesses in ${stateFormatted}?`,
      answer: `Our local SEO approach for ${stateFormatted} businesses includes optimizing your Google Business Profile, building citations in ${stateFormatted}-specific directories, creating localized content that mentions relevant neighborhoods and landmarks, implementing local schema markup, building relationships with other ${stateFormatted} businesses for natural backlinks, and optimizing for mobile searches (which are particularly important for local searches). We also focus on review management, as reviews significantly impact local search rankings.`
    },
    {
      question: `What industries in ${stateFormatted} benefit most from SEO?`,
      answer: `While all industries can benefit from SEO, we've seen particularly strong results in ${stateFormatted} for service-based businesses (like healthcare providers, lawyers, and home services), retail businesses, hospitality and tourism companies, educational institutions, and professional services. The effectiveness of SEO for your specific industry in ${stateFormatted} depends on factors like competition level, search volume, and customer acquisition costs. We can provide a tailored assessment for your particular business.`
    },
    {
      question: `How much does SEO cost for businesses in ${stateFormatted}?`,
      answer: `SEO investment for ${stateFormatted} businesses varies based on factors such as your business size, goals, current online presence, and the competitiveness of your industry in ${stateFormatted}. Our packages typically range from $1,500 to $5,000 per month. We believe in transparency, so we provide detailed proposals outlining exactly what you'll receive for your investment. We also offer flexible packages to accommodate different budget levels while still delivering meaningful results.`
    }
  ];
  
  if (stateLocations.length === 0) {
    return null; // Will redirect to 404
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`SEO Services in ${stateFormatted}, ${countryName}`}
        description={`Expert SEO services tailored for businesses in ${stateFormatted}, ${countryName}. Improve local search rankings and attract more customers in your area.`}
        keywords={`${stateFormatted} SEO, ${stateFormatted.toLowerCase()} search engine optimization, local SEO ${stateFormatted}, ${stateFormatted.toLowerCase()} digital marketing, SEO agency ${stateFormatted}, ${stateFormatted.toLowerCase()} online marketing`}
        canonicalUrl={`https://seofocus.com/${country}/${state}`}
      />
      
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
              <Link 
                to={`/${country}`} 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                {countryName}
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{stateFormatted}</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-3xl" animation="fade-in">
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                <MapPin className="h-4 w-4 mr-1" />
                {stateFormatted}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {authorityBadges.map((badge, index) => (
                <ServiceBadge
                  key={index}
                  text={badge.text}
                  icon={badge.icon}
                  variant={badge.variant}
                  size={badge.size}
                />
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
              SEO Services in {stateFormatted}
            </h1>
            
            <p className="text-xl text-seo-gray-dark mb-8">
              Comprehensive SEO solutions tailored for businesses in {stateFormatted}. Improve your online visibility and attract more local customers.
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
      
      {/* Counties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Areas We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              SEO Services in {stateFormatted} Regions
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our specialized SEO solutions for different areas within {stateFormatted}
            </p>
          </AnimatedSection>
          
          <div className="space-y-10">
            {Object.entries(locationsByCounty).map(([county, countyLocations], index) => {
              const countySlug = county.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <AnimatedSection
                  key={county}
                  className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                  animation="fade-in"
                  delay={index * 100}
                >
                  <h3 className="text-2xl font-bold mb-6">
                    {county}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {countyLocations.map(location => (
                      <Link
                        key={location.id}
                        to={`/location/${location.slug}`}
                        className="flex items-center p-4 rounded-md hover:bg-gray-50 border border-gray-100 transition-colors"
                      >
                        <MapPin className="h-5 w-5 text-seo-blue mr-3" />
                        <div>
                          <span className="font-medium block">{location.name}</span>
                          <span className="text-sm text-seo-gray-dark">
                            {services.length} services available
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto text-gray-400" />
                      </Link>
                    ))}
                  </div>
                  
                  {county !== 'Other Areas' && (
                    <div className="mt-6 text-center">
                      <Link
                        to={`/${country}/${state}/${countySlug}`}
                        className="inline-flex items-center text-seo-blue font-medium"
                      >
                        <span>View all {county} SEO services</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Contextual Blog Section */}
      <ContextualBlog 
        title={`SEO Insights for ${stateFormatted} Businesses`}
        subtitle={`Latest trends and strategies specifically for ${stateFormatted}`}
        className="bg-seo-gray-light"
      />
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              SEO Services Available in {stateFormatted}
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Comprehensive SEO solutions tailored for {stateFormatted} businesses
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
                
                <Link
                  to={`/${service.slug}-${stateFormatted.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-seo-blue font-medium group"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    {service.title} in {stateFormatted}
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FAQ 
        title={`Frequently Asked Questions About SEO in ${stateFormatted}`}
        subtitle={`Get answers to common SEO questions for ${stateFormatted} businesses`}
        faqs={stateFAQs}
        className="bg-seo-gray-light"
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
                      Ready to dominate {stateFormatted} search results?
                    </h2>
                    <p className="text-white/90 text-lg mb-0">
                      Get a free consultation and discover how our SEO services can help your {stateFormatted} business grow.
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

export default State;
