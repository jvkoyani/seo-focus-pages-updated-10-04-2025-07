import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import AnimatedSection from '@/components/AnimatedSection';
import IndustrySeoServices from '@/components/IndustrySeoServices';
import { ArrowRight, MapPin, CheckCircle, Award, TrendingUp, Users, Zap, BarChart } from 'lucide-react';
import { locations, blogPosts, caseStudies } from '@/lib/data';
import BlogPreview from '@/components/BlogPreview';
import CaseStudyPreview from '@/components/CaseStudyPreview';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Schema from '@/components/Schema';

const Index = ({ routeKey }: { routeKey?: string }) => {
  // Get featured blog posts and case studies
  const featuredBlogs = blogPosts.slice(0, 3);
  const featuredCaseStudies = caseStudies.slice(0, 2);

  // Homepage schema data
  const homepageSchema = {
    type: 'service' as const,
    data: {
      name: "Professional SEO Services",
      description: "Expert search engine optimization services to improve your online visibility and drive targeted traffic. Comprehensive SEO solutions for businesses of all sizes.",
      url: "https://seofocus.com",
      areaServed: "United States"
    }
  };

  // FAQ schema data
  const faqSchema = {
    type: 'faq' as const,
    data: {
      questions: [
        {
          question: "What is SEO and why is it important?",
          answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's important because it increases your online visibility, drives organic traffic, and helps potential customers find your business."
        },
        {
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy. While some improvements can be seen within 3-6 months, significant results typically take 6-12 months depending on competition, current website status, and the scope of optimization work."
        },
        {
          question: "Do you provide industry-specific SEO services?",
          answer: "Yes, we specialize in SEO for various industries including healthcare, legal, real estate, e-commerce, restaurants, technology, and professional services. Each industry has unique SEO challenges and opportunities."
        },
        {
          question: "What's included in your SEO services?",
          answer: "Our comprehensive SEO services include technical audits, keyword research, on-page optimization, content strategy, link building, local SEO, and ongoing monitoring and reporting."
        },
        {
          question: "How do you measure SEO success?",
          answer: "We track key metrics including organic traffic growth, keyword rankings, conversion rates, and ROI. We provide transparent monthly reports showing progress toward your specific business goals."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="SEO Focus | Expert Search Engine Optimization Services"
        description="Professional SEO services to improve your online visibility and drive targeted traffic. Expert search engine optimization for businesses across all industries."
        keywords="SEO services, search engine optimization, digital marketing, online visibility, organic traffic, keyword ranking, local SEO, technical SEO"
        canonicalUrl="https://seofocus.com"
        routeKey={routeKey}
        schemaData={homepageSchema}
      />
      
      {/* Add FAQ schema */}
      <Schema type="faq" data={faqSchema.data} />
      
      <Navbar />
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-seo-gray-light to-transparent"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection 
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Australia's Premier SEO Agency
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We deliver data-driven SEO strategies that increase your visibility, drive qualified traffic, and boost your conversions
            </p>
          </AnimatedSection>
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/3">
                  <div className="p-2">
                    <InfoCard
                      title="Data-Driven Approach"
                      description="We use comprehensive analytics and industry data to develop SEO strategies tailored to your specific market and audience."
                      icon={<BarChart />}
                      animation="fade-in-left"
                      delay={100}
                      iconBackground="bg-blue-50"
                      iconColor="text-blue-500"
                      items={[
                        "In-depth keyword research and analysis",
                        "Competition benchmarking and gap analysis",
                        "Regular performance reporting"
                      ]}
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/3">
                  <div className="p-2">
                    <InfoCard
                      title="Holistic SEO Strategy"
                      description="Our comprehensive approach addresses all aspects of SEO to ensure sustainable, long-term results."
                      icon={<TrendingUp />}
                      animation="fade-in"
                      delay={200}
                      iconBackground="bg-green-50"
                      iconColor="text-green-500"
                      items={[
                        "Technical SEO optimization",
                        "Content strategy and creation",
                        "Link building and off-page SEO"
                      ]}
                    />
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/3">
                  <div className="p-2">
                    <InfoCard
                      title="Local SEO Expertise"
                      description="We specialize in helping Australian businesses dominate local search results in their target markets."
                      icon={<MapPin />}
                      animation="fade-in-right"
                      delay={300}
                      iconBackground="bg-amber-50"
                      iconColor="text-amber-500"
                      items={[
                        "Google Business Profile optimization",
                        "Local citation building and management",
                        "Targeted local keyword strategies"
                      ]}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>
      
      <Services />
      
      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-white to-seo-gray-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-seo-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-seo-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection 
            className="text-center mb-16 max-w-3xl mx-auto"
            animation="fade-in"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Results That Speak
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
              Proven SEO Performance
            </h2>
            <p className="text-lg text-seo-gray-dark">
              Our strategies consistently deliver measurable results for businesses across Australia
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <AnimatedSection
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              animation="slide-up"
              delay={100}
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-seo-dark mb-2">175%</p>
              <p className="text-seo-gray-dark">Average Traffic Increase</p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              animation="slide-up"
              delay={200}
            >
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-4xl font-bold text-seo-dark mb-2">93%</p>
              <p className="text-seo-gray-dark">Conversion Rate Improvement</p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              animation="slide-up"
              delay={300}
            >
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <p className="text-4xl font-bold text-seo-dark mb-2">250+</p>
              <p className="text-seo-gray-dark">Satisfied Clients</p>
            </AnimatedSection>
            
            <AnimatedSection
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              animation="slide-up"
              delay={400}
            >
              <div className="bg-amber-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-500" />
              </div>
              <p className="text-4xl font-bold text-seo-dark mb-2">98%</p>
              <p className="text-seo-gray-dark">Client Retention Rate</p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection 
            className="text-center"
            animation="fade-in"
            delay={500}
          >
            <Link 
              to="/case-studies" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-8 rounded-md transition-colors group"
            >
              <span>View Our Case Studies</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Locations We Serve - Updated to Carousel */}
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
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {locations.map((location, index) => (
                  <CarouselItem key={location.id} className="md:basis-1/3">
                    <div className="p-2">
                      <AnimatedSection
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group h-full"
                        animation="fade-in"
                        delay={index * 100}
                      >
                        <div className="h-48 relative overflow-hidden">
                          <img 
                            src={location.image} 
                            alt={location.name} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>
      
      <IndustrySeoServices />
      <Testimonials />
      
      {/* Featured Case Studies */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
          
          <div className="max-w-5xl mx-auto mb-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredCaseStudies.map((study, index) => (
                  <CarouselItem key={study.id} className="md:basis-1/2">
                    <div className="p-2">
                      <CaseStudyPreview caseStudy={study} delay={index * 100} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
          
          <AnimatedSection
            className="text-center"
            animation="fade-in"
            delay={300}
          >
            <Link 
              to="/case-studies" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">View All Case Studies</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-seo-blue-light to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Featured Blog Posts */}
      <section className="py-24 bg-seo-gray-light relative overflow-hidden">
        <div className="absolute top-20 left-0 w-80 h-80 bg-seo-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-seo-blue/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
          
          <AnimatedSection
            className="text-center"
            animation="fade-in"
            delay={300}
          >
            <Link 
              to="/blogs" 
              className="inline-flex items-center bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">View All Articles</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-seo-blue-light to-seo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
