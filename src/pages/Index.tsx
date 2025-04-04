import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import ServiceBadge from '@/components/ServiceBadge';
import { services } from '@/lib/data';
import MetaTags from '@/components/MetaTags';

const Index = () => {
  // Meta tags for the homepage
  const pageTitle = "SEO Focus - Professional Search Engine Optimization Services";
  const pageDescription = "Boost your online visibility with our data-driven SEO services. We help businesses across Australia rank higher in search results and drive targeted traffic.";

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title={pageTitle} 
        description={pageDescription}
        canonicalUrl="/"
      />
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Boost Your Online Visibility with Data-Driven SEO"
        subtitle="We help businesses across Australia rank higher in search results and drive targeted traffic"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Comprehensive SEO Solutions
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We offer a full range of search engine optimization services to improve your online presence
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <AnimatedSection
                key={service.id}
                className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="mb-4">
                  <ServiceBadge 
                    text={service.title} 
                    icon={service.icon as any || "star"} 
                    variant="primary" 
                  />
                </div>
                <h3 className="text-xl font-bold text-seo-dark mb-3">{service.title}</h3>
                <p className="text-seo-gray-dark mb-4">{service.description}</p>
                <Link
                  to={`/service/${service.slug}`}
                  className="inline-flex items-center text-seo-blue font-medium group"
                >
                  <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                    Learn more
                  </span>
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View All Services</span>
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              The SEO Focus Difference
            </h2>
            <p className="text-lg text-seo-gray-dark">
              What sets our SEO services apart from the competition
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Data-Driven Approach",
                desc: "We base our strategies on solid data and analytics, not guesswork or outdated tactics.",
                icon: "📊"
              },
              {
                title: "Transparent Reporting",
                desc: "Regular, easy-to-understand reports that show exactly what you're getting for your investment.",
                icon: "📈"
              },
              {
                title: "Customized Strategies",
                desc: "No cookie-cutter solutions. We create tailored SEO plans based on your specific goals and industry.",
                icon: "🎯"
              },
              {
                title: "Local SEO Expertise",
                desc: "Specialized knowledge of Australian search trends and consumer behavior across different regions.",
                icon: "🗺️"
              },
              {
                title: "White Hat Techniques",
                desc: "We only use ethical, sustainable SEO practices that build long-term success and avoid penalties.",
                icon: "🛡️"
              },
              {
                title: "Continuous Optimization",
                desc: "We constantly refine our approach based on results and algorithm changes to maximize ROI.",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-seo-gray-dark">
                  {feature.desc}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Real Results
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              What Our Clients Achieve
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Measurable improvements in search visibility and business growth
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "Average Increase in Organic Traffic", value: "157%" },
              { metric: "Average Improvement in Keyword Rankings", value: "Top 5" },
              { metric: "Average Increase in Conversion Rate", value: "43%" },
              { metric: "Client Retention Rate", value: "94%" }
            ].map((stat, index) => (
              <AnimatedSection
                key={index}
                className="text-center"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-seo-blue mb-2">
                  {stat.value}
                </div>
                <p className="text-seo-gray-dark">
                  {stat.metric}
                </p>
              </AnimatedSection>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View Case Studies</span>
              <svg
                className="ml-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-seo-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M39.9,-65.7C50.3,-59.6,56.4,-45.7,64.1,-31.9C71.8,-18,81,-4.1,79.9,8.7C78.8,21.5,67.4,33.1,56.4,43.9C45.4,54.6,35,64.5,22.1,70.2C9.2,75.9,-6.1,77.5,-18.6,72.2C-31.1,66.9,-40.8,54.6,-49.9,42.5C-59,30.4,-67.6,18.5,-70.9,4.8C-74.2,-8.9,-72.3,-24.3,-64.5,-36.3C-56.7,-48.3,-43.1,-56.7,-29.9,-61.6C-16.8,-66.5,-4.2,-67.8,8.4,-66.7C21,-65.5,29.4,-71.8,39.9,-65.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection 
            className="max-w-3xl mx-auto text-center" 
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Contact us for a free consultation and discover how our SEO services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/free-consultation"
                className="bg-seo-blue hover:bg-seo-blue-light text-white px-8 py-4 rounded-md font-medium transition-colors"
              >
                Get a Free Consultation
              </Link>
              <Link
                to="/seo-audit"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-medium transition-colors border border-white/20"
              >
                Request Free Audit
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
