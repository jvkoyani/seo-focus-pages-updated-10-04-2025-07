
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { locations } from '@/lib/data';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-seo-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Data-Driven SEO That Gets Results
            </h2>
            <p className="text-lg text-white/80">
              We combine technical expertise, creative content strategies, and analytical precision to deliver sustainable SEO results
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              animation="fade-in"
              delay={100}
            >
              <div className="bg-seo-blue/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-seo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Proven Methodology
              </h3>
              <p className="text-white/70">
                Our 5-step SEO process has been refined over years of successful client campaigns, focusing on sustainable growth.
              </p>
            </AnimatedSection>

            <AnimatedSection
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              animation="fade-in"
              delay={200}
            >
              <div className="bg-seo-blue/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-seo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Custom Strategies
              </h3>
              <p className="text-white/70">
                We don't believe in one-size-fits-all. Every SEO campaign is tailored to your specific business goals and market.
              </p>
            </AnimatedSection>

            <AnimatedSection
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              animation="fade-in"
              delay={300}
            >
              <div className="bg-seo-blue/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg className="h-7 w-7 text-seo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Transparent Reporting
              </h3>
              <p className="text-white/70">
                No smoke and mirrors. We provide clear, jargon-free reports that show exactly how your SEO is performing.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              SEO Services Across Australia
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our local SEO experts understand the unique markets across Australia
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <AnimatedSection
                key={location.id}
                className="group relative overflow-hidden rounded-xl shadow-md"
                animation="fade-in"
                delay={100 * index}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${location.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-seo-dark/20 to-seo-dark/80" />
                </div>
                <div className="relative z-10 p-6 flex flex-col h-64 justify-end">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {location.name}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {location.description}
                  </p>
                  <Link 
                    to={`/location/${location.slug}`}
                    className="inline-flex items-center text-white font-medium group"
                  >
                    <span className="border-b border-white/30 group-hover:border-white transition-colors">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default Index;
