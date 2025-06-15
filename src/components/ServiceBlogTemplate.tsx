
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, CheckCircle, TrendingUp, Target, Zap, Star, Quote, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import FAQ, { FAQItem } from './FAQ';

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
      ],
      successStories: [
        {
          businessType: locationName ? `${locationName} Healthcare Practice` : 'Medical Practice',
          improvement: '300% increase in organic traffic',
          timeframe: '6 months',
          details: `Through strategic ${serviceName.toLowerCase()} implementation, this practice saw a dramatic increase in online visibility and patient inquiries.`
        },
        {
          businessType: locationName ? `${locationName} Law Firm` : 'Legal Services',
          improvement: '250% boost in qualified leads',
          timeframe: '4 months',
          details: `Our targeted approach helped this firm dominate local search results and attract high-value clients consistently.`
        },
        {
          businessType: locationName ? `${locationName} Restaurant` : 'Local Restaurant',
          improvement: '180% increase in online orders',
          timeframe: '3 months',
          details: `Local SEO optimization and reputation management resulted in significant growth in online visibility and customer acquisition.`
        }
      ]
    };
  };

  const serviceContent = getServiceSpecificContent();

  // Generate FAQs based on service and location
  const generateFAQs = (): FAQItem[] => {
    const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const cityName = locationName || 'your area';
    
    return [
      {
        question: `How long does it take to see results from ${serviceName}${locationName ? ` in ${locationName}` : ''}?`,
        answer: `Most businesses begin seeing initial improvements within 3-4 months of implementing our ${serviceName.toLowerCase()} strategies. However, significant results typically appear within 6-9 months. The timeline can vary based on your current online presence, competition level${locationName ? ` in the ${locationName} market` : ''}, and the specific keywords being targeted. We focus on sustainable, long-term strategies that provide lasting benefits for your business.`
      },
      {
        question: `What makes ${serviceName} different from regular marketing${locationName ? ` for ${locationName} businesses` : ''}?`,
        answer: `${serviceName} focuses specifically on improving your visibility in search engines when potential customers are actively looking for your services. Unlike traditional advertising, ${serviceName.toLowerCase()} targets people who are already interested in what you offer${locationName ? `, particularly those searching in the ${locationName} area` : ''}. This results in higher-quality leads and better conversion rates, making it one of the most cost-effective marketing strategies available.`
      },
      {
        question: `How do you measure the success of ${serviceName}${locationName ? ` in ${locationName}` : ''}?`,
        answer: `We track multiple key performance indicators including search engine rankings for target keywords, organic website traffic growth, lead generation and conversion rates, local visibility improvements${locationName ? ` in ${locationName}` : ''}, and ultimately, your return on investment. We provide detailed monthly reports that clearly show your progress and explain how our efforts are contributing to your business growth.`
      },
      {
        question: `Can you guarantee first page rankings${locationName ? ` in ${locationName}` : ''}?`,
        answer: `While we cannot guarantee specific rankings due to the constantly evolving nature of search algorithms, we have a proven track record of achieving first-page results for our clients. Our strategies are based on best practices and data-driven insights that consistently deliver improved visibility and rankings. We focus on sustainable, white-hat techniques that provide long-term value${locationName ? ` for businesses in ${locationName}` : ''}.`
      },
      {
        question: `What's included in your ${serviceName} service${locationName ? ` for ${locationName} businesses` : ''}?`,
        answer: `Our comprehensive ${serviceName.toLowerCase()} service includes initial website audit and competitor analysis, keyword research and strategy development, on-page optimization and technical SEO improvements, content creation and optimization, local SEO${locationName ? ` specifically for ${locationName}` : ''}, link building and citation management, ongoing monitoring and optimization, and detailed monthly reporting. We provide everything needed to improve your online presence and attract more customers.`
      },
      {
        question: `How much does professional ${serviceName} cost${locationName ? ` in ${locationName}` : ''}?`,
        answer: `The cost of ${serviceName.toLowerCase()} varies based on your business size, competition level, and specific goals. We offer customized packages designed to fit different budgets and needs${locationName ? ` for businesses in ${locationName}` : ''}. During our free consultation, we'll assess your situation and provide a detailed proposal with transparent pricing. Most businesses find that professional ${serviceName.toLowerCase()} provides excellent ROI compared to other marketing methods.`
      }
    ];
  };

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

      {/* Understanding the Digital Landscape Section */}
      <AnimatedSection animation="fade-in" delay={150} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6">
          Understanding the Digital Landscape{locationName ? ` in ${locationName}` : ''}
        </h2>
        <p className="text-lg text-seo-gray-dark mb-6">
          The digital marketing landscape{locationName ? ` in ${locationName}` : ''} has evolved dramatically over the past decade. 
          Businesses that fail to adapt to these changes risk becoming invisible to their potential customers. 
          Search engine optimization has become not just important, but essential for business survival and growth.
        </p>
        <p className="text-lg text-seo-gray-dark mb-6">
          {locationName ? `In ${locationName}, c` : 'C'}onsumers increasingly rely on search engines to find local businesses and services. 
          When someone searches for services you offer{locationName ? ` in ${locationName}` : ''}, you want your business to appear prominently in the results. 
          This visibility directly translates to more website visitors, phone calls, and ultimately, more customers.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">The Current Search Behavior Trends</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          Modern search behavior has shifted significantly{locationName ? `, particularly in markets like ${locationName}` : ''}. 
          Users are more sophisticated in their search queries, often using long-tail keywords and voice search. 
          They expect immediate, relevant results that address their specific needs. This evolution means that traditional marketing approaches are no longer sufficient.
        </p>
        <p className="text-lg text-seo-gray-dark mb-8">
          Mobile searches now account for over 60% of all search queries{locationName ? ` in ${locationName}` : ''}, 
          with users frequently searching for "near me" results. This shift emphasizes the importance of local SEO optimization 
          and ensuring your business appears when customers are looking for services in their immediate area.
        </p>
      </AnimatedSection>

      {/* Key Benefits Section */}
      <AnimatedSection animation="fade-in" delay={200} className="mt-12">
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
      <AnimatedSection animation="fade-in" delay={250} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6 flex items-center">
          <Target className="h-8 w-8 text-seo-blue mr-3" />
          Our Strategic Approach to {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
        </h2>
        <p className="text-lg text-seo-gray-dark mb-8">
          At SEO Focus, we understand that effective {serviceSlug.replace(/-/g, ' ')} requires a comprehensive, data-driven approach. 
          {locationName ? ` For businesses in ${locationName}, we tailor our strategies to the local market dynamics and competition.` : ' Our methodology is designed to deliver sustainable, long-term results that drive real business growth.'}
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Phase 1: Comprehensive Analysis and Research</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          Every successful SEO campaign begins with thorough research and analysis. We conduct in-depth keyword research 
          to identify the terms your potential customers are using when searching for services like yours{locationName ? ` in ${locationName}` : ''}. 
          This includes analyzing search volume, competition levels, and user intent behind different search queries.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Phase 2: Technical Foundation Optimization</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          Technical SEO forms the foundation of all our optimization efforts. We ensure your website is properly structured, 
          loads quickly, and provides an excellent user experience across all devices. This includes optimizing site architecture, 
          improving page load speeds, and ensuring mobile responsiveness – crucial factors for ranking well{locationName ? ` in ${locationName}` : ''}.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Phase 3: Content Strategy and Implementation</h3>
        <p className="text-lg text-seo-gray-dark mb-8">
          Content is king in the world of SEO. We develop comprehensive content strategies that address your audience's needs 
          while incorporating relevant keywords naturally. This includes creating valuable blog posts, optimizing existing page content, 
          and developing location-specific content{locationName ? ` that resonates with ${locationName} audiences` : ''}.
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

      {/* Success Stories Section */}
      <AnimatedSection animation="fade-in" delay={300} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6 flex items-center">
          <Award className="h-8 w-8 text-yellow-500 mr-3" />
          Success Stories: Real Results for Real Businesses
        </h2>
        <p className="text-lg text-seo-gray-dark mb-8">
          Our proven track record speaks for itself. Here are some examples of how our {serviceSlug.replace(/-/g, ' ').toLowerCase()} strategies 
          have transformed businesses{locationName ? ` in ${locationName}` : ''} and delivered measurable results.
        </p>
        
        <div className="grid md:grid-cols-1 gap-8">
          {serviceContent.successStories.map((story, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-seo-dark mb-2">{story.businessType}</h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                      {story.improvement}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                      {story.timeframe}
                    </span>
                  </div>
                  <p className="text-seo-gray-dark">{story.details}</p>
                </div>
              </div>
              <div className="border-l-4 border-seo-blue pl-4">
                <Quote className="h-6 w-6 text-seo-blue/50 mb-2" />
                <p className="text-seo-gray-dark italic">
                  "The results exceeded our expectations. SEO Focus delivered exactly what they promised and more. 
                  Our online presence has never been stronger{locationName ? ` in the ${locationName} market` : ''}."
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Industry Statistics Section */}
      <AnimatedSection animation="fade-in" delay={350} className="mt-12">
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

      {/* Advanced Strategies Section */}
      <AnimatedSection animation="fade-in" delay={400} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6">
          Advanced {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Strategies
        </h2>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Local Search Optimization</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          {locationName ? `For businesses in ${locationName}, l` : 'L'}ocal search optimization is crucial for capturing nearby customers. 
          We optimize your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across all platforms, 
          and build local citations to improve your visibility in local search results and Google Maps.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Voice Search Optimization</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          With the rise of voice assistants, optimizing for voice search has become essential. We focus on natural language patterns 
          and question-based queries that people use when speaking to their devices, ensuring your business appears in voice search results.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Mobile-First Optimization</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          Google's mobile-first indexing means your mobile site performance directly impacts your rankings. We ensure your website 
          provides an exceptional mobile experience, with fast loading times and intuitive navigation that converts mobile visitors into customers.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Competitive Analysis and Market Intelligence</h3>
        <p className="text-lg text-seo-gray-dark mb-8">
          Understanding your competition{locationName ? ` in the ${locationName} market` : ''} is crucial for developing effective strategies. 
          We analyze your competitors' SEO tactics, identify gaps in their approach, and develop strategies to outperform them in search results.
        </p>
      </AnimatedSection>

      {/* Detailed Process Section */}
      <AnimatedSection animation="fade-in" delay={450} className="mt-12">
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
      <AnimatedSection animation="fade-in" delay={500} className="mt-12">
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

      {/* Future-Proofing Section */}
      <AnimatedSection animation="fade-in" delay={550} className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-seo-dark mb-6">
          Future-Proofing Your Online Presence
        </h2>
        <p className="text-lg text-seo-gray-dark mb-6">
          The digital marketing landscape continues to evolve rapidly. Search engines regularly update their algorithms, 
          new technologies emerge, and consumer behavior shifts. Our {serviceSlug.replace(/-/g, ' ').toLowerCase()} strategies 
          are designed to adapt to these changes and keep your business ahead of the competition{locationName ? ` in ${locationName}` : ''}.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Staying Ahead of Algorithm Updates</h3>
        <p className="text-lg text-seo-gray-dark mb-6">
          Search engine algorithms are constantly evolving, and what works today might not work tomorrow. We stay informed about 
          industry changes and adjust our strategies accordingly, ensuring your website maintains and improves its rankings over time.
        </p>
        
        <h3 className="text-xl font-bold text-seo-dark mb-4">Emerging Technologies and Trends</h3>
        <p className="text-lg text-seo-gray-dark mb-8">
          From artificial intelligence to voice search, new technologies are reshaping how people find and interact with businesses online. 
          We continuously evaluate and integrate emerging trends into our strategies, ensuring your business remains visible and competitive 
          in the changing digital landscape{locationName ? ` of ${locationName}` : ''}.
        </p>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection animation="fade-in" delay={600} className="mt-12">
        <FAQ 
          title={`Frequently Asked Questions About ${serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}${locationName ? ` in ${locationName}` : ''}`}
          subtitle={`Get answers to common questions about our ${serviceSlug.replace(/-/g, ' ').toLowerCase()} services and how they can benefit your business.`}
          faqs={generateFAQs()}
          className="bg-transparent"
          addSchema={false}
        />
      </AnimatedSection>
      
      {/* CTA Section */}
      <AnimatedSection 
        animation="fade-in" 
        delay={650}
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
