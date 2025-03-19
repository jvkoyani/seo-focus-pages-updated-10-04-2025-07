
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, MapPin, TrendingUp, BarChart, 
  CheckCircle, Award, Users, Target, Star, 
  Zap, Globe, Compass, Building, ShoppingBag, 
  Phone, Lightbulb, ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ResourcesSection from '@/components/ResourcesSection';
import { locations, services } from '@/lib/data';
import InfoCard from '@/components/InfoCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationService = () => {
  const { locationSlug, serviceSlug } = useParams<{ locationSlug: string; serviceSlug: string }>();
  
  const location = locations.find(loc => loc.slug === locationSlug);
  const service = services.find(svc => svc.slug === serviceSlug);
  
  if (!location || !service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="mb-6">Sorry, the page you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>Return to home</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
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
              <Link to="/" className="text-seo-gray-dark hover:text-seo-blue transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <Link to={`/location/${location.slug}`} className="text-seo-gray-dark hover:text-seo-blue transition-colors">{location.name}</Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{service.title}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <AnimatedSection className="max-w-2xl" animation="fade-in">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mr-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {location.name}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                  <Star className="h-4 w-4 mr-1" />
                  Top Rated Service
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {service.title} Solutions for {location.name} Businesses
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                In the competitive {location.name} market, having a strong online presence is crucial for business success. Our specialized {service.title.toLowerCase()} services are designed to help {location.name} businesses stand out from the competition and attract more qualified leads through search engines.
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
                        Quick {service.title} Audit
                      </h3>
                      <p className="text-white/90 mb-4">
                        See how your business stacks up against competitors in {location.name}
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
                      <span>Complete {service.title.toLowerCase()} analysis</span>
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
      
      {/* Why Businesses Need Specialized Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Tailored Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Why {location.name} Businesses Need Specialized {service.title} Services
            </h2>
            <p className="text-lg text-seo-gray-dark">
              The {location.name} market presents unique challenges and opportunities for businesses looking to improve their online visibility
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              title="Local Competition"
              description={`The ${location.name} market is highly competitive, with many businesses vying for visibility in local search results.`}
              icon={<Building className="w-full h-full" />}
              animation="fade-in"
              delay={100}
              iconBackground="bg-purple-100"
              iconColor="text-purple-600"
            />
            
            <InfoCard
              title="Consumer Behavior"
              description={`${location.name} consumers have specific search patterns and preferences that require targeted optimization strategies.`}
              icon={<Users className="w-full h-full" />}
              animation="fade-in"
              delay={200}
              iconBackground="bg-blue-100"
              iconColor="text-blue-600"
            />
            
            <InfoCard
              title="Geographic Considerations"
              description={`Effective ${service.title.toLowerCase()} in ${location.name} requires optimization for specific neighborhoods, suburbs, and landmarks.`}
              icon={<Globe className="w-full h-full" />}
              animation="fade-in"
              delay={300}
              iconBackground="bg-green-100"
              iconColor="text-green-600"
            />
            
            <InfoCard
              title="Local Business Ecosystem"
              description={`Building relationships with other ${location.name} businesses and organizations can significantly impact your search visibility.`}
              icon={<Compass className="w-full h-full" />}
              animation="fade-in"
              delay={400}
              iconBackground="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>
          
          <AnimatedSection className="text-center mt-12" animation="fade-in" delay={600}>
            <p className="text-lg text-seo-gray-dark mb-6 max-w-3xl mx-auto">
              Our {service.title} services for {location.name} businesses take all these factors into account to develop a comprehensive strategy that drives real business growth.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Our {service.title} Approach for {location.name} Businesses
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We combine proven {service.title.toLowerCase()} techniques with location-specific strategies to deliver superior results
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden group hover:shadow-md transition-all duration-300"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-seo-blue/5 group-hover:bg-seo-blue/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-seo-blue/10 flex items-center justify-center mb-6">
                    <span className="w-6 h-6 text-seo-blue flex items-center justify-center font-bold rounded-full border-2 border-seo-blue">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-4">
                    {feature}
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    {getFeatureDescription(feature, location.name)}
                  </p>
                  <div className="flex items-center text-seo-blue font-medium group cursor-pointer">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fade-in-right">
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-64 h-64 bg-seo-blue/5 rounded-full"></div>
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-purple-100 rounded-full"></div>
                <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6 pb-6 border-b border-gray-100">
                    Why Choose Us for {service.title} in {location.name}
                  </h2>
                  <p className="text-lg text-seo-gray-dark mb-8">
                    When you partner with us for your {location.name} {service.title.toLowerCase()} needs, you benefit from:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Local Expertise</h3>
                        <p className="text-seo-gray-dark">
                          Our team has extensive experience in the {location.name} market and understands the local business landscape.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <BarChart className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Proven Results</h3>
                        <p className="text-seo-gray-dark">
                          We have a track record of success, helping numerous {location.name} businesses improve their search visibility and drive growth.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <Target className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Customized Strategies</h3>
                        <p className="text-seo-gray-dark">
                          We develop tailored strategies based on your specific business goals, target audience, and competition.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-yellow-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-seo-dark mb-2">Ongoing Optimization</h3>
                        <p className="text-seo-gray-dark">
                          We continuously refine our approach based on performance data and changing market conditions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2" animation="fade-in-left">
              <div className="bg-gradient-to-br from-seo-blue to-purple-600 p-1 rounded-xl shadow-lg">
                <div className="bg-white p-8 rounded-lg">
                  <h3 className="text-2xl font-display font-bold text-seo-dark mb-6 text-center">
                    Ready to Dominate {location.name} Search Results?
                  </h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Increase Local Visibility</h4>
                        <p className="text-sm text-seo-gray-dark">Rank higher in {location.name} searches</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Drive More Qualified Traffic</h4>
                        <p className="text-sm text-seo-gray-dark">Attract customers actively looking for your services</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <ShoppingBag className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-seo-dark">Increase Conversions</h4>
                        <p className="text-sm text-seo-gray-dark">Turn visitors into paying customers</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-seo-blue hover:bg-seo-blue-light text-white py-6 text-lg">
                      Get Your Free SEO Audit
                    </Button>
                    <Button variant="outline" className="w-full border-seo-blue text-seo-blue hover:bg-seo-blue/5 py-6 text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule a Call
                    </Button>
                  </div>
                  
                  <p className="text-center text-sm text-seo-gray-dark mt-4">
                    No contracts or commitments required
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="text-center mt-12" animation="fade-in">
            <p className="text-lg text-seo-gray-dark max-w-3xl mx-auto">
              Our commitment to delivering measurable results and exceptional service has made us a trusted {service.title.toLowerCase()} partner for businesses throughout {location.name}.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Resources Section */}
      <ResourcesSection 
        filterTag={`${location.name} ${service.title}`} 
        className="bg-seo-gray-light"
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

// Helper function to generate descriptions for features
const getFeatureDescription = (feature: string, location: string) => {
  const descriptions: Record<string, string> = {
    'Google Business Profile optimization': `We optimize your Google Business Profile to improve visibility in ${location} local map packs and attract nearby customers.`,
    'Local citation building': `We build consistent citations across key directories to boost your ${location} business's local search presence.`,
    'Location-specific keyword targeting': `We identify the most valuable keywords that ${location} residents use when searching for products or services like yours.`,
    'Local link building strategies': `We build high-quality backlinks from relevant ${location} websites to boost your local authority.`,
    'Review management system': `We implement systems to gather and showcase positive reviews from your ${location} customers to build trust.`,
    'Site speed optimization': `We optimize your website's loading speed to improve user experience and search rankings in the ${location} market.`,
    'Mobile-friendly improvements': `We ensure your website performs flawlessly on mobile devices, critical for ${location} users on the go.`,
    'Schema markup implementation': `We implement structured data to help search engines better understand your business and improve local visibility in ${location}.`,
    'Crawlability & indexation fixes': `We resolve technical issues that prevent search engines from properly indexing your site for ${location} searches.`,
    'SSL & security enhancements': `We implement security measures to protect your site and boost trust with ${location} customers.`,
    'Keyword research & planning': `We identify high-value keywords specifically targeted to the ${location} market and your industry.`,
    'Content gap analysis': `We analyze content opportunities specific to ${location} that your competitors may be missing.`,
    'Blog strategy development': `We develop content strategies addressing topics relevant to ${location} customers in your industry.`,
    'Content optimization': `We optimize existing content to better target ${location}-specific search terms and user intent.`,
    'Topic cluster creation': `We create comprehensive content structures around topics relevant to ${location} customers.`,
    'Authority backlink acquisition': `We secure high-quality backlinks from trusted ${location} sources to boost your site's authority.`,
    'Content-driven link building': `We create valuable content that naturally attracts links from ${location} businesses and publications.`,
    'Competitor link analysis': `We analyze your ${location} competitors' backlink profiles to identify valuable link opportunities.`,
    'Guest posting campaigns': `We secure guest posting opportunities on relevant ${location} websites to build authority.`,
    'Digital PR strategies': `We implement PR strategies to gain mentions in ${location} publications and websites.`,
    'Product page optimization': `We optimize your product pages to rank higher for ${location}-specific product searches.`,
    'Category page structuring': `We structure category pages to maximize visibility for ${location} shoppers.`,
    'Review schema implementation': `We implement review schema to showcase customer feedback in ${location} search results.`,
    'Conversion rate optimization': `We optimize your website to convert more ${location} visitors into customers.`,
    'Shopping feed management': `We optimize your shopping feeds for better visibility in ${location}-specific product searches.`,
    'Custom dashboard creation': `We create custom dashboards showing your performance in the ${location} market.`,
    'Monthly performance reports': `We provide detailed reports on your ${location} SEO performance and progress.`,
    'Conversion tracking setup': `We implement tracking to measure conversions from ${location} visitors.`,
    'Traffic analysis': `We analyze traffic patterns specific to ${location} users to identify optimization opportunities.`,
    'ROI measurement': `We measure the return on investment of your ${location} SEO campaign.`
  };
  
  return descriptions[feature] || `Our specialized approach to ${feature} is tailored for the ${location} market to maximize results.`;
};

export default LocationService;
