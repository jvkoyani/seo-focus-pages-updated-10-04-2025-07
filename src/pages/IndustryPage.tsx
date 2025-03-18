
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { industries } from '@/lib/data';

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Industry Not Found</h1>
            <p className="mb-6">Sorry, the industry you're looking for doesn't exist.</p>
            <Link 
              to="/industries" 
              className="inline-flex items-center text-seo-blue font-medium"
            >
              <span>View all industries</span>
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
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Industry Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              {industry.title}
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              {industry.description}
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Industry Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="mb-12" animation="fade-in">
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
                Why Choose Our {industry.title} Service?
              </h2>
              <p className="text-lg text-seo-gray-dark mb-8">
                In the competitive {industry.title.toLowerCase().replace(' seo', '')} industry, having a strong online presence is essential for attracting new clients. Our specialized SEO strategies are designed to help your business stand out and connect with potential clients when they're actively searching for the services you offer.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {industry.features.map((feature, index) => (
                  <AnimatedSection 
                    key={index} 
                    className="flex items-start bg-seo-gray-light p-6 rounded-lg"
                    animation="fade-in"
                    delay={index * 100}
                  >
                    <div className="bg-seo-blue/10 rounded-full p-2 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-seo-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-seo-dark mb-2">{feature}</h3>
                      <p className="text-seo-gray-dark">
                        We implement effective strategies tailored specifically for {industry.title.toLowerCase().replace(' seo', '')} professionals.
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="mt-16" animation="fade-in">
              <h2 className="text-3xl font-display font-bold text-seo-dark mb-6">
                Benefits of {industry.title}
              </h2>
              <p className="text-lg text-seo-gray-dark mb-8">
                Our specialized approach delivers measurable results for {industry.title.toLowerCase().replace(' seo', '')} businesses:
              </p>
              
              <div className="space-y-4">
                {industry.benefits.map((benefit, index) => (
                  <AnimatedSection 
                    key={index} 
                    className="flex items-center"
                    animation="fade-in-left"
                    delay={index * 100}
                  >
                    <div className="bg-seo-blue text-white rounded-full p-1 mr-4 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-seo-gray-dark">{benefit}</p>
                  </AnimatedSection>
                ))}
              </div>
              
              <div className="bg-seo-gray-light p-8 rounded-xl mt-12">
                <h3 className="text-2xl font-display font-bold text-seo-dark mb-4">
                  Ready to Grow Your {industry.title.replace(' SEO', '')} Business?
                </h3>
                <p className="text-lg text-seo-gray-dark mb-6">
                  Contact us today for a free consultation and discover how our {industry.title.toLowerCase()} service can help your business attract more clients.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Related Industries Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
            <h2 className="text-3xl font-display font-bold text-seo-dark mb-4">
              Explore Other Industry Solutions
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Discover our specialized SEO services for other industries
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries
              .filter(i => i.slug !== slug)
              .slice(0, 3)
              .map((relatedIndustry, index) => (
                <AnimatedSection
                  key={relatedIndustry.id}
                  className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                  animation="fade-in"
                  delay={index * 100}
                >
                  <div className="bg-seo-blue/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    <relatedIndustry.icon className="h-7 w-7 text-seo-blue" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    {relatedIndustry.title}
                  </h3>
                  <p className="text-seo-gray-dark mb-6">
                    {relatedIndustry.description}
                  </p>
                  <Link 
                    to={`/industry/${relatedIndustry.slug}`} 
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default IndustryPage;
