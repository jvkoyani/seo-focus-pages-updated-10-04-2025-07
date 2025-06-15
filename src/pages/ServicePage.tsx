
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Check, Zap, Award, Target, BarChart, 
  Users, Globe, MapPin, TrendingUp, CheckCircle, 
  Phone, Lightbulb, ShoppingBag, Compass, Building,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import ServiceTabs from '@/components/ServiceTabs';
import ResourcesSection from '@/components/ResourcesSection';
import ContextualBlog from '@/components/ContextualBlog';
import FAQ from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/data';
import { icons } from 'lucide-react';
import SEO from '@/components/SEO';

const ServicePage = ({ routeKey }: { routeKey?: string }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the service based on slug
  const service = services.find(s => s.slug === slug);
  
  // Redirect if service not found
  useEffect(() => {
    if (!service) {
      navigate('/not-found');
    }
  }, [service, navigate]);
  
  if (!service) {
    return null; // Will redirect to 404
  }
  
  // Dynamically get the icon component based on icon name
  const getIconComponent = (iconName: string) => {
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent className="h-12 w-12 text-seo-blue" /> : null;
  };

  // Generate SEO meta data based on service
  const metaTitle = `${service.title} Services | SEO Focus - Expert SEO Solutions`;
  const metaDescription = `${service.description} Get expert ${service.title.toLowerCase()} services from SEO Focus to boost your online visibility and drive results.`;
  const keywords = `${service.title}, SEO services, ${service.slug}, digital marketing, search engine optimization`;

  // Service-specific content and FAQs
  const getServiceContent = (serviceSlug: string) => {
    switch (serviceSlug) {
      case 'local-seo':
        return {
          benefits: [
            {
              icon: <MapPin className="h-6 w-6" />,
              title: "Higher Local Rankings",
              description: "Appear at the top of local search results when customers search for your services in your area."
            },
            {
              icon: <Target className="h-6 w-6" />,
              title: "Increased Visibility",
              description: "Get found in Google Maps and local directories by customers actively looking for your business type."
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: "More Phone Calls",
              description: "Generate more qualified leads through increased visibility in local search results."
            },
            {
              icon: <Building className="h-6 w-6" />,
              title: "Foot Traffic Growth",
              description: "Drive more customers to your physical location with optimized local presence."
            }
          ],
          features: [
            {
              icon: <Globe className="h-8 w-8" />,
              title: "Google Business Profile Optimization",
              description: "Complete optimization of your GBP including photos, posts, reviews management, and accurate business information.",
              details: [
                "Business information accuracy",
                "Professional photo optimization",
                "Regular Google Posts",
                "Review response management"
              ]
            },
            {
              icon: <MapPin className="h-8 w-8" />,
              title: "Local Citation Building",
              description: "Consistent NAP (Name, Address, Phone) across all major directories and local listings.",
              details: [
                "Directory submissions",
                "Citation cleanup",
                "NAP consistency",
                "Industry-specific listings"
              ]
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Local Keyword Optimization",
              description: "Target location-specific keywords that your local customers are actually searching for.",
              details: [
                "Local keyword research",
                "Location pages optimization",
                "Service area targeting",
                "Competitor analysis"
              ]
            },
            {
              icon: <Users className="h-8 w-8" />,
              title: "Review Management",
              description: "Build a strong online reputation with strategic review acquisition and management.",
              details: [
                "Review acquisition strategy",
                "Response management",
                "Reputation monitoring",
                "Review platform optimization"
              ]
            }
          ],
          faqs: [
            {
              question: "What is Local SEO and why do I need it?",
              answer: "Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches. If you have a physical location or serve customers in specific geographic areas, local SEO helps you appear when people search for businesses like yours in your area. It's essential for driving foot traffic, phone calls, and local customers to your business."
            },
            {
              question: "How long does it take to see Local SEO results?",
              answer: "Local SEO results typically start showing within 1-3 months, faster than traditional SEO. You may see improvements in Google Business Profile visibility and local rankings within the first month. However, significant ranking improvements and increased traffic usually develop over 3-6 months as your local authority builds."
            },
            {
              question: "What's the difference between Local SEO and regular SEO?",
              answer: "Local SEO focuses specifically on location-based searches and local ranking factors, while regular SEO targets broader, non-location-specific keywords. Local SEO emphasizes Google Business Profile optimization, local citations, proximity to searcher, and 'near me' searches, whereas regular SEO focuses more on domain authority, content quality, and general keyword rankings."
            },
            {
              question: "Do I need a physical address for Local SEO?",
              answer: "While having a physical address helps, it's not always required. Service area businesses (like plumbers or consultants) can still benefit from local SEO by targeting their service areas. However, you'll need to verify your business with Google, which may require a physical address or service area verification depending on your business type."
            },
            {
              question: "How important are Google reviews for Local SEO?",
              answer: "Google reviews are extremely important for local SEO. They influence your local ranking position, click-through rates, and customer trust. Businesses with more positive reviews and higher average ratings typically rank better in local search results. We help you develop a strategy to ethically acquire more reviews and manage your online reputation."
            },
            {
              question: "Can you help with multiple business locations?",
              answer: "Yes, we specialize in multi-location SEO. We can optimize individual Google Business Profiles for each location, create location-specific pages on your website, manage citations across all locations, and develop strategies to prevent location cannibalization while maximizing the visibility of each location."
            }
          ]
        };
      
      case 'technical-seo':
        return {
          benefits: [
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Faster Site Speed",
              description: "Improve page load times to enhance user experience and meet Google's Core Web Vitals requirements."
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: "Better Crawlability",
              description: "Ensure search engines can easily crawl and index all important pages on your website."
            },
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: "Enhanced User Experience",
              description: "Fix technical issues that improve both search rankings and user satisfaction."
            },
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: "Higher Rankings",
              description: "Technical improvements directly impact your search engine rankings and visibility."
            }
          ],
          features: [
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Site Speed Optimization",
              description: "Comprehensive speed improvements to meet Google's Core Web Vitals standards.",
              details: [
                "Image optimization",
                "Code minification",
                "Caching implementation",
                "Server response optimization"
              ]
            },
            {
              icon: <Globe className="h-8 w-8" />,
              title: "Mobile Optimization",
              description: "Ensure your website provides excellent user experience across all devices.",
              details: [
                "Mobile-first indexing preparation",
                "Responsive design optimization",
                "Touch-friendly interface",
                "Mobile speed optimization"
              ]
            },
            {
              icon: <Building className="h-8 w-8" />,
              title: "Technical Audit & Fixes",
              description: "Identify and resolve technical issues that impact your SEO performance.",
              details: [
                "Crawl error fixes",
                "Broken link repair",
                "Duplicate content resolution",
                "URL structure optimization"
              ]
            },
            {
              icon: <Target className="h-8 w-8" />,
              title: "Schema Markup",
              description: "Implement structured data to help search engines understand your content better.",
              details: [
                "Rich snippets implementation",
                "Local business schema",
                "Product markup",
                "FAQ schema"
              ]
            }
          ],
          faqs: [
            {
              question: "What is Technical SEO?",
              answer: "Technical SEO involves optimizing the technical aspects of your website to improve its visibility in search engines. This includes site speed, mobile-friendliness, crawlability, indexability, site architecture, and structured data. It's the foundation that enables your content and other SEO efforts to be effective."
            },
            {
              question: "Why is site speed important for SEO?",
              answer: "Site speed is a direct Google ranking factor and significantly impacts user experience. Slow-loading pages lead to higher bounce rates, lower engagement, and poor user satisfaction. Google's Core Web Vitals update has made page speed even more important, with faster sites typically ranking better than slower ones."
            },
            {
              question: "What are Core Web Vitals?",
              answer: "Core Web Vitals are specific factors that Google considers important in a webpage's overall user experience. They include Largest Contentful Paint (LCP) for loading performance, First Input Delay (FID) for interactivity, and Cumulative Layout Shift (CLS) for visual stability. These metrics directly impact your search rankings."
            },
            {
              question: "How often should technical SEO audits be performed?",
              answer: "We recommend comprehensive technical SEO audits quarterly, with monthly monitoring of key metrics. However, major website changes, migrations, or performance issues should trigger immediate audits. Regular monitoring helps catch and fix issues before they significantly impact your rankings."
            },
            {
              question: "What is mobile-first indexing?",
              answer: "Mobile-first indexing means Google primarily uses the mobile version of your website for indexing and ranking. If your mobile site lacks content or functionality compared to your desktop version, it could negatively impact your rankings. We ensure your mobile experience is optimized for this indexing approach."
            }
          ]
        };

      default:
        return {
          benefits: [
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: "Increased Visibility",
              description: "Improve your search engine rankings and online presence to reach more potential customers."
            },
            {
              icon: <Target className="h-6 w-6" />,
              title: "Targeted Traffic",
              description: "Attract qualified visitors who are actively searching for your products or services."
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Better ROI",
              description: "Achieve sustainable growth with long-term SEO strategies that deliver measurable results."
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Enhanced Authority",
              description: "Build trust and credibility in your industry through improved search presence."
            }
          ],
          features: [
            {
              icon: <Target className="h-8 w-8" />,
              title: "Custom Strategy",
              description: "Tailored SEO approach designed specifically for your business goals and industry.",
              details: [
                "Comprehensive audit",
                "Competitor analysis",
                "Keyword research",
                "Strategy development"
              ]
            }
          ],
          faqs: [
            {
              question: `What does ${service.title} involve?`,
              answer: `${service.title} involves a comprehensive approach to improving your online presence and search engine visibility. Our team develops customized strategies based on your specific business needs, industry requirements, and target audience to deliver measurable results.`
            }
          ]
        };
    }
  };

  const serviceContent = getServiceContent(service.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        canonicalUrl={`/service/${service.slug}`}
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
                to="/services" 
                className="text-seo-gray-dark hover:text-seo-blue transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="h-4 w-4 text-seo-gray-medium" />
              <span className="text-seo-blue font-medium">{service.title}</span>
            </div>
          </AnimatedSection>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fade-in">
              <div className="flex items-center mb-6">
                <div className="bg-seo-blue/10 rounded-full w-20 h-20 flex items-center justify-center mr-4">
                  {getIconComponent(service.icon)}
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue">
                  Expert {service.title}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-seo-gray-dark mb-8">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-seo-blue hover:bg-seo-blue-light text-white button-hover-effect">
                  <Link to="/contact" className="flex items-center">
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
            
            <AnimatedSection animation="fade-in-left" delay={200} className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                    <CheckCircle className="h-8 w-8 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-seo-dark">Ready to Get Started?</h3>
                    <p className="text-seo-gray-dark">Let's boost your online presence today</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Free consultation and strategy session</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Custom SEO plan tailored to your business</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Transparent reporting and regular updates</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-seo-gray-dark">Proven track record of success</p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-3">
                  <Button asChild className="w-full bg-seo-blue hover:bg-seo-blue-light text-white">
                    <Link to="/contact" className="flex items-center justify-center">
                      Schedule a Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full border-seo-blue text-seo-blue hover:bg-seo-blue/5">
                    <Link to="/seo-audit">
                      Get Your Free SEO Audit
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              Why Choose Our {service.title} Services?
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our specialized {service.title.toLowerCase()} approach delivers measurable results for your business
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceContent.benefits.map((benefit, index) => (
              <AnimatedSection
                key={index}
                className="text-center p-6 bg-seo-gray-light rounded-xl hover:shadow-md transition-shadow"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-seo-blue">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-seo-dark mb-3">{benefit.title}</h3>
                <p className="text-seo-gray-dark text-sm">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
              What's Included in Our {service.title} Service
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Comprehensive strategies and tactics designed to maximize your results
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceContent.features.map((feature, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mr-4 text-seo-blue flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-seo-dark mb-3">{feature.title}</h3>
                    <p className="text-seo-gray-dark mb-4">{feature.description}</p>
                    {feature.details && (
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-seo-gray-dark">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Details */}
      <ServiceTabs />

      {/* FAQ Section */}
      <FAQ 
        title={`${service.title} FAQs`}
        subtitle={`Common questions about our ${service.title.toLowerCase()} services`}
        faqs={serviceContent.faqs}
        className="bg-white"
      />
      
      {/* Resources Section with contextual blog */}
      <ResourcesSection serviceSlug={service.slug} />
      
      {/* Additional contextual blog specifically for this service */}
      <ContextualBlog
        serviceSlug={service.slug}
        title="Why Choose SEO Focus for This Service"
        subtitle={`Discover what makes SEO Focus the best choice for ${service.title.toLowerCase()} and how our expertise can transform your business.`}
        limit={3}
      />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServicePage;
