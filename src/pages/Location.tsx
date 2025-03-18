
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { LocationData, locations } from '@/lib/data';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Location = () => {
  const { slug } = useParams<{ slug: string }>();
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the location data based on the slug
    const foundLocation = locations.find(loc => loc.slug === slug) || null;
    setLocation(foundLocation);
    setLoading(false);

    // Update page metadata
    if (foundLocation) {
      document.title = foundLocation.metaTitle;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', foundLocation.metaDescription);
      }
    }
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-seo-dark mb-4">Location Not Found</h1>
            <p className="text-seo-gray-dark mb-6">Sorry, the location you're looking for doesn't exist.</p>
            <a 
              href="/" 
              className="bg-seo-blue hover:bg-seo-blue-light text-white px-6 py-2 rounded-md transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero 
        title={`${location.name} SEO Services That Drive Results`}
        subtitle={`Tailored search engine optimization strategies for ${location.name} businesses`}
        location={location.name}
        backgroundImage={location.image}
      />
      
      <Services location={location.name} />
      
      {/* Local SEO Benefits Section */}
      <section className="py-24 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="flex-1" animation="fade-in-left">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
                Local SEO Advantages
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
                Why Your {location.name} Business Needs Local SEO
              </h2>
              <p className="text-lg text-seo-gray-dark mb-8">
                In today's competitive {location.name} market, being visible when local customers search is essential for business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-seo-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg">Increased Local Visibility</h3>
                    <p className="text-seo-gray-dark">
                      Appear in the local pack and Google Maps when {location.name} customers search for your services.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-seo-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg">Target Ready-to-Buy Customers</h3>
                    <p className="text-seo-gray-dark">
                      Local searches have higher conversion rates because customers are actively looking for nearby solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-seo-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg">Beat Local Competition</h3>
                    <p className="text-seo-gray-dark">
                      Stand out among other {location.name} businesses with strategic SEO that highlights your unique value.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-seo-blue mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg">Build Local Trust</h3>
                    <p className="text-seo-gray-dark">
                      Optimize your online presence to showcase reviews and build credibility with {location.name} customers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-seo-blue font-semibold group"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    Get your free SEO audit
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="flex-1 relative" animation="fade-in-right">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-seo-blue/10 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-seo-blue/10 rounded-lg"></div>
                
                <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                  <div 
                    className="h-64 bg-cover bg-center"
                    style={{ backgroundImage: `url(${location.image})` }}
                  ></div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-seo-dark mb-3">
                      {location.name} SEO Specialists
                    </h3>
                    <p className="text-seo-gray-dark mb-6">
                      Our team understands the unique challenges and opportunities in the {location.name} market. We combine local expertise with proven SEO strategies to help your business thrive.
                    </p>
                    <div className="flex items-center justify-between text-sm text-seo-gray-medium">
                      <span>Trusted by {location.name} businesses</span>
                      <span>Since 2015</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              How We'll Optimize Your {location.name} Business
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our proven 5-step methodology delivers consistent results for businesses in {location.name}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-seo-blue/20"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <AnimatedSection className="relative pl-20" animation="fade-in-left">
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-seo-blue/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-seo-blue">1</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    In-Depth {location.name} Market Analysis
                  </h3>
                  <p className="text-seo-gray-dark">
                    We research your local competition, identify market gaps, and analyze {location.name}-specific keywords to understand the local search landscape.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection className="relative pl-20" animation="fade-in-left" delay={100}>
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-seo-blue/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-seo-blue">2</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    Technical SEO Optimization
                  </h3>
                  <p className="text-seo-gray-dark">
                    We fix technical issues that could be holding your site back, ensuring it's fast, mobile-friendly, and structured for maximum visibility in {location.name} searches.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection className="relative pl-20" animation="fade-in-left" delay={200}>
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-seo-blue/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-seo-blue">3</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    Local Content Development
                  </h3>
                  <p className="text-seo-gray-dark">
                    We create {location.name}-focused content that resonates with local customers and signals to Google that you're a relevant local business.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection className="relative pl-20" animation="fade-in-left" delay={300}>
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-seo-blue/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-seo-blue">4</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    Local Citation Building
                  </h3>
                  <p className="text-seo-gray-dark">
                    We ensure your business information is consistent across the web and build {location.name}-specific citations to boost your local authority.
                  </p>
                </AnimatedSection>
                
                <AnimatedSection className="relative pl-20" animation="fade-in-left" delay={400}>
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-seo-blue/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-seo-blue">5</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    Ongoing Optimization & Reporting
                  </h3>
                  <p className="text-seo-gray-dark">
                    We continuously monitor your performance in {location.name} searches, making data-driven adjustments and providing transparent reports on your progress.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials location={location.name} />
      
      <ContactForm location={location.name} />
      
      <Footer />
    </div>
  );
};

export default Location;
