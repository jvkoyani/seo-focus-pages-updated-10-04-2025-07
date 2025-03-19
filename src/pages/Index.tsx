
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import AnimatedSection from '@/components/AnimatedSection';
import IndustrySeoServices from '@/components/IndustrySeoServices';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations, blogPosts, caseStudies } from '@/lib/data';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';

const Index = () => {
  // Get featured blog posts and case studies
  const featuredBlogs = blogPosts.slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Locations We Serve */}
      <section className="py-24 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection 
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Our Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              SEO Services Across Australia
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We provide specialized SEO solutions tailored to the unique needs of businesses in major Australian cities
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <AnimatedSection
                key={location.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                animation="fade-in"
                delay={index * 100}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <MapPin className="text-white h-5 w-5 mr-2" />
                    <span className="text-white font-medium">{location.name}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                    SEO in {location.name}
                  </h3>
                  <p className="text-seo-gray-dark mb-4">
                    {location.description.substring(0, 120)}...
                  </p>
                  <Link 
                    to={`/location/${location.slug}`} 
                    className="inline-flex items-center text-seo-blue font-medium group"
                  >
                    <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                      Explore {location.name} SEO services
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <IndustrySeoServices />
      <Testimonials />
      
      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection 
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Our Client Success Stories
            </h2>
            <p className="text-lg text-seo-gray-dark">
              See how we've helped businesses like yours achieve measurable results
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredCaseStudies.map((study, index) => (
              <CaseStudyPreview key={study.id} caseStudy={study} delay={index * 100} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Blog Posts */}
      <section className="py-24 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection 
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              SEO Knowledge & Strategies
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Stay up-to-date with our latest articles and insights
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredBlogs.map((post, index) => (
              <BlogPreview key={post.id} post={post} delay={index * 100} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/blogs" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
