
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, CheckCircle, TrendingUp, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

interface ServiceBlogTemplateProps {
  title: string;
  locationName?: string;
  content: string[];
  publishDate: string;
  author: string;
  tags: string[];
  serviceSlug: string;
  locationSlug?: string;
  className?: string;
}

const ServiceBlogTemplate = ({
  title,
  locationName,
  content,
  publishDate,
  author,
  tags,
  serviceSlug,
  locationSlug,
  className = ''
}: ServiceBlogTemplateProps) => {
  const formattedTitle = locationName 
    ? title.replace('{city name}', locationName)
    : title;
    
  const pageUrl = locationSlug 
    ? `/location/${locationSlug}/${serviceSlug}`
    : `/service/${serviceSlug}`;

  // Generate additional content sections based on service type
  const getServiceSpecificContent = () => {
    const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const cityContext = locationName ? ` in ${locationName}` : '';
    
    return {
      keyBenefits: [
        `Increased online visibility${cityContext} for your business`,
        `Higher search engine rankings for relevant keywords`,
        `More qualified leads and potential customers`,
        `Improved website traffic and user engagement`,
        `Better return on investment compared to traditional marketing`,
        `Long-term sustainable growth in online presence`
      ],
      strategicApproach: [
        `Comprehensive keyword research and analysis`,
        `Technical website optimization and performance improvements`,
        `Content strategy development and implementation`,
        `Local SEO optimization for geographic targeting`,
        `Link building and authority development`,
        `Ongoing monitoring and performance optimization`
      ],
      whyItMatters: [
        `73% of consumers use search engines to find local businesses`,
        `68% of online experiences begin with a search engine`,
        `Local searches lead 50% of mobile users to visit stores within one day`,
        `Businesses on the first page of Google get 95% of web traffic`,
        `SEO leads have a 14.6% close rate compared to 1.7% for outbound leads`
      ]
    };
  };

  const serviceContent = getServiceSpecificContent();

  return (
    <article className={`max-w-4xl mx-auto ${className}`}>
      <AnimatedSection animation="fade-in">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
          {formattedTitle}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-seo-gray-dark mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{publishDate}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{author}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-4 w-4" />
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex px-2 py-1 bg-seo-gray-light rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Main Content */}
      <AnimatedSection animation="fade-in" delay={100}>
        <div className="prose max-w-none">
          {content.map((paragraph, index) => {
            const formattedParagraph = locationName 
              ? paragraph.replace(/\{city name\}/g, locationName)
              : paragraph;
              
            return (
              <p key={index} className="mb-6 text-seo-gray-dark text-lg leading-relaxed">
                {formattedParagraph}
              </p>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Key Benefits Section */}
      <AnimatedSection animation="fade-in" delay={150} className="mt-12">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
          <div className="flex items-center mb-6">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-seo-dark">
              Key Benefits of {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}{locationName ? ` in ${locationName}` : ''}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceContent.keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-seo-gray-dark">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Strategic Approach Section */}
      <AnimatedSection animation="fade-in" delay={200} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6 flex items-center">
          <Target className="h-8 w-8 text-seo-blue mr-3" />
          Our Strategic Approach
        </h2>
        <p className="text-lg text-seo-gray-dark mb-8">
          At SEO Focus, we understand that effective {serviceSlug.replace(/-/g, ' ')} requires a comprehensive, data-driven approach. 
          {locationName ? ` For businesses in ${locationName}, we tailor our strategies to the local market dynamics and competition.` : ' Our methodology is designed to deliver sustainable, long-term results that drive real business growth.'}
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceContent.strategicApproach.map((approach, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-3">
                <div className="bg-seo-blue/10 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-seo-blue font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-seo-dark">{approach.split(' ')[0]} {approach.split(' ')[1]}</h3>
              </div>
              <p className="text-sm text-seo-gray-dark">{approach}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Industry Statistics Section */}
      <AnimatedSection animation="fade-in" delay={250} className="mt-12">
        <div className="bg-seo-blue/5 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6 flex items-center">
            <Zap className="h-8 w-8 text-yellow-500 mr-3" />
            Why {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Matters{locationName ? ` in ${locationName}` : ''}
          </h2>
          <p className="text-lg text-seo-gray-dark mb-8">
            The digital landscape{locationName ? ` in ${locationName}` : ''} is more competitive than ever. Here are some compelling statistics that highlight the importance of professional SEO services:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceContent.whyItMatters.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-seo-blue mb-2">
                  {stat.match(/\d+%?/)?.[0] || '✓'}
                </div>
                <p className="text-sm text-seo-gray-dark">
                  {stat.replace(/\d+%?\s*/, '')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Detailed Process Section */}
      <AnimatedSection animation="fade-in" delay={300} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-8">
          How We Deliver Results{locationName ? ` for ${locationName} Businesses` : ''}
        </h2>
        <div className="space-y-8">
          <div className="border-l-4 border-seo-blue pl-6">
            <h3 className="text-xl font-bold text-seo-dark mb-3">1. Initial Analysis & Research</h3>
            <p className="text-seo-gray-dark mb-4">
              We begin with a comprehensive analysis of your current online presence{locationName ? ` and the competitive landscape in ${locationName}` : ''}. 
              This includes technical SEO audits, keyword research, competitor analysis, and identification of opportunities for improvement.
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-bold text-seo-dark mb-3">2. Strategy Development</h3>
            <p className="text-seo-gray-dark mb-4">
              Based on our research, we develop a customized {serviceSlug.replace(/-/g, ' ')} strategy that aligns with your business goals. 
              {locationName ? ` For ${locationName} businesses, we ensure our approach considers local market factors and customer behavior patterns.` : ' Our strategy is designed to deliver measurable results within realistic timeframes.'}
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-bold text-seo-dark mb-3">3. Implementation & Optimization</h3>
            <p className="text-seo-gray-dark mb-4">
              Our team implements the strategy across all relevant channels, from on-page optimization to content creation and link building. 
              We continuously monitor performance and make data-driven adjustments to maximize effectiveness.
            </p>
          </div>
          
          <div className="border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-bold text-seo-dark mb-3">4. Monitoring & Reporting</h3>
            <p className="text-seo-gray-dark mb-4">
              We provide regular reports showing your progress and ROI. Our transparent reporting includes rankings, traffic growth, 
              lead generation, and other key performance indicators that matter to your business{locationName ? ` in ${locationName}` : ''}.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Success Factors Section */}
      <AnimatedSection animation="fade-in" delay={350} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6">
          What Makes Our {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Services Effective
        </h2>
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-seo-dark mb-4">Experience & Expertise</h3>
              <p className="text-seo-gray-dark mb-6">
                Our team brings years of experience in {serviceSlug.replace(/-/g, ' ')} across various industries. 
                {locationName ? ` We understand the unique challenges and opportunities in the ${locationName} market.` : ' We stay current with the latest SEO trends and algorithm updates.'}
              </p>
              
              <h3 className="text-xl font-bold text-seo-dark mb-4">Data-Driven Approach</h3>
              <p className="text-seo-gray-dark">
                Every decision we make is backed by data and analytics. We use advanced tools and methodologies to ensure 
                our strategies deliver measurable results for your business.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-seo-dark mb-4">Customized Solutions</h3>
              <p className="text-seo-gray-dark mb-6">
                We don't believe in one-size-fits-all solutions. Every strategy is tailored to your specific business needs, 
                target audience, and market conditions{locationName ? ` in ${locationName}` : ''}.
              </p>
              
              <h3 className="text-xl font-bold text-seo-dark mb-4">Ongoing Support</h3>
              <p className="text-seo-gray-dark">
                SEO is an ongoing process, not a one-time fix. We provide continuous support, monitoring, and optimization 
                to ensure your online presence continues to grow and evolve with your business.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection 
        animation="fade-in" 
        delay={400}
        className="mt-12 p-8 bg-seo-blue/5 rounded-xl"
      >
        <h3 className="text-xl font-bold text-seo-dark mb-4">
          {locationName 
            ? `Ready to improve your ${locationName} business visibility?`
            : 'Ready to improve your business visibility?'
          }
        </h3>
        <p className="text-seo-gray-dark mb-6">
          {locationName 
            ? `Our team of SEO experts can help your ${locationName} business achieve higher rankings and attract more customers through effective search optimization.`
            : 'Our team of SEO experts can help your business achieve higher rankings and attract more customers through effective search optimization.'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-seo-blue hover:bg-seo-blue-light text-white">
            <Link to="/free-consultation" className="flex items-center">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-seo-blue text-seo-blue hover:bg-seo-blue/5">
            <Link to={pageUrl} className="flex items-center">
              {locationName 
                ? `View ${locationName} SEO Services`
                : 'View SEO Services'
              }
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </article>
  );
};

export default ServiceBlogTemplate;
