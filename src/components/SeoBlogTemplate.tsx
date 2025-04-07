
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

interface SeoBlogTemplateProps {
  cityName: string;
  publishDate?: string;
  author?: string;
  className?: string;
}

const SeoBlogTemplate = ({
  cityName,
  publishDate = "April 5, 2025",
  author = "SEO Focus Team",
  className = ''
}: SeoBlogTemplateProps) => {
  // Service descriptions
  const services = [
    {
      title: "Local SEO",
      icon: "map-pin",
      description: `Our Local SEO targets ${cityName} customers, ensuring your business ranks high in local searches and maps, driving foot traffic and leads.`
    },
    {
      title: "Technical SEO",
      icon: "settings",
      description: `Technical SEO optimizes your ${cityName} website's speed and structure, making it easy for search engines to crawl and rank you higher.`
    },
    {
      title: "Content Strategy",
      icon: "file-text",
      description: `Our Content Strategy creates ${cityName}-focused content that engages locals and boosts your SEO service in ${cityName} results.`
    },
    {
      title: "Link Building",
      icon: "link",
      description: `Link Building strengthens your ${cityName} online presence with quality Australian backlinks, enhancing your SEO authority.`
    },
    {
      title: "E-commerce SEO",
      icon: "shopping-cart",
      description: `E-commerce SEO grows your ${cityName} online store, optimizing product pages to attract local shoppers and increase sales.`
    },
    {
      title: "Analytics & Reporting",
      icon: "bar-chart-2",
      description: `Analytics & Reporting tracks your ${cityName} SEO performance, providing insights to refine strategies and maximize growth.`
    }
  ];

  // City-specific unique content (could be expanded with more cities)
  const citySpecificContent = {
    sydney: [
      `We optimize for Sydney's bustling retail and tech scenes, ensuring your business stands out in Australia's largest city.`,
      `With Sydney's competitive business environment, our SEO strategies focus on creating distinctive brand visibility.`,
      `Our Sydney-specific keyword research targets the unique search patterns of its diverse consumer base.`
    ],
    melbourne: [
      `Melbourne's cultural and artistic landscape requires specialized SEO approaches that we've perfected over years.`,
      `We understand Melbourne's business districts and consumer behaviors, tailoring campaigns to match local intent.`,
      `Our Melbourne SEO strategies incorporate location-specific factors that influence local search rankings.`
    ],
    brisbane: [
      `In Brisbane, we target tourism and trade sectors for maximum impact, focusing on the city's growing market.`,
      `Brisbane's unique geographical spread means we optimize for both CBD and suburban searches effectively.`,
      `We leverage Brisbane's community-focused business environment through specialized local citations.`
    ],
    perth: [
      `Perth's isolated market position offers unique SEO advantages that our strategies maximize for local businesses.`,
      `We understand Perth's consumers' distinct search habits and optimize your content accordingly.`,
      `Our Perth SEO approaches account for the city's specific business sectors and competition landscape.`
    ],
    adelaide: [
      `Adelaide businesses benefit from our targeted local strategies that account for the city's unique market dynamics.`,
      `We incorporate Adelaide's event calendar and seasonal patterns into our SEO planning for optimal results.`,
      `Our Adelaide-specific keyword research identifies valuable low-competition opportunities for faster rankings.`
    ],
    canberra: [
      `As Australia's capital, Canberra's unique government and education sectors require specialized SEO approaches.`,
      `We optimize for Canberra's professional demographic with high-value content that converts.`,
      `Our Canberra strategies include specialized government and institutional targeting when relevant.`
    ],
    "gold-coast": [
      `Gold Coast tourism and lifestyle businesses thrive with our location-specific SEO strategies.`,
      `We target seasonal trends unique to the Gold Coast to maximize your visibility when demand peaks.`,
      `Our Gold Coast SEO incorporates both tourist and local resident search patterns for comprehensive coverage.`
    ]
  };
  
  // Format city name for display (e.g., "gold-coast" → "Gold Coast")
  const formatCityDisplay = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  // Get city slug from cityName
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  
  // Get city-specific content or use default if not found
  const cityContent = citySpecificContent[citySlug as keyof typeof citySpecificContent] || [
    `Our SEO services are specifically tailored for the ${cityName} market and local search patterns.`,
    `We understand ${cityName}'s unique business landscape and optimize your digital presence accordingly.`,
    `${cityName} businesses face unique challenges that our customized SEO strategies address effectively.`
  ];
  
  // Get the icon component based on name
  const getIconComponent = (iconName: string) => {
    switch(iconName) {
      case 'map-pin': return <MapPin className="h-6 w-6" />;
      case 'settings': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
      case 'file-text': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
      case 'link': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>;
      case 'shopping-cart': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
      case 'bar-chart-2': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>;
      default: return <ArrowRight className="h-6 w-6" />;
    }
  };

  return (
    <article className={`max-w-4xl mx-auto ${className}`}>
      <AnimatedSection animation="fade-in">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
          Boost Your Business with SEO Service in {cityName}
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
            <span className="inline-flex px-2 py-1 bg-seo-gray-light rounded-full text-xs">
              SEO
            </span>
            <span className="inline-flex px-2 py-1 bg-seo-gray-light rounded-full text-xs">
              {cityName}
            </span>
            <span className="inline-flex px-2 py-1 bg-seo-gray-light rounded-full text-xs">
              Local Business
            </span>
          </div>
        </div>
      </AnimatedSection>
      
      {/* Introduction Section */}
      <AnimatedSection animation="fade-in" delay={100}>
        <div className="prose max-w-none mb-8">
          <p className="mb-6 text-seo-gray-dark">
            Want to stand out in {cityName}? Our SEO service in {cityName} drives local traffic and helps your business succeed in Australia's competitive markets. With the increasing digitization of consumer search habits, having a strong online presence is no longer optional for {cityName} businesses – it's essential. Our SEO service in {cityName} is designed to elevate your visibility where it matters most: in front of local customers actively searching for businesses like yours.
          </p>
        </div>
      </AnimatedSection>
      
      {/* Main Content Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-display font-bold text-seo-dark mb-4">
            How Our SEO Service Benefits {cityName} Businesses
          </h2>
          
          <p className="mb-4 text-seo-gray-dark">
            Our SEO service in {cityName} is tailored to the unique characteristics of the local market. We understand that {cityName} has its own search patterns, consumer behaviors, and competitive landscape. By implementing location-specific strategies, we ensure your business appears prominently when potential customers search for products or services in your area.
          </p>
          
          {cityContent.map((content, index) => (
            <p key={index} className="mb-4 text-seo-gray-dark">
              {content}
            </p>
          ))}
          
          <p className="mb-4 text-seo-gray-dark">
            With local SEO in {cityName}, we focus on building your visibility in both traditional search results and Google Maps, capturing customers at the exact moment they're looking for your offerings. Our comprehensive approach includes optimizing your Google Business Profile, building citations in {cityName}-specific directories, and creating localized content that resonates with your audience.
          </p>
          
          <p className="mb-4 text-seo-gray-dark">
            The goal of our SEO service in {cityName} isn't just to increase traffic – it's to grow your {cityName} business online by attracting qualified leads that convert into paying customers. We achieve this through a data-driven approach that targets the right keywords, optimizes your website structure, and builds your authority in the {cityName} market.
          </p>
        </div>
      </AnimatedSection>
      
      {/* Services Section */}
      <AnimatedSection animation="fade-in" delay={300}>
        <h2 className="text-2xl font-display font-bold text-seo-dark mb-6">
          Comprehensive SEO Services for {cityName} Businesses
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="bg-seo-blue/10 text-seo-blue rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-seo-gray-dark">{service.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      
      {/* Conclusion with CTA */}
      <AnimatedSection 
        animation="fade-in" 
        delay={400}
        className="bg-gradient-to-r from-seo-blue to-purple-600 rounded-xl p-8 text-white mb-12"
      >
        <h3 className="text-2xl font-bold mb-4">
          Ready to dominate {cityName} search results?
        </h3>
        <p className="mb-6">
          Contact us today for expert SEO service in {cityName} and watch your business grow! Our team of specialists understands the local {cityName} market and can create a customized strategy to help you outrank competitors and attract more customers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-white text-seo-blue hover:bg-gray-100">
            <Link to="/contact" className="flex items-center">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Link to="/services/search-engine-optimization" className="flex items-center">
              View All SEO Services
            </Link>
          </Button>
        </div>
      </AnimatedSection>
      
      {/* Related Resources */}
      <AnimatedSection animation="fade-in" delay={500}>
        <div className="bg-seo-gray-light/50 rounded-xl p-8 mb-6">
          <h3 className="text-xl font-bold mb-4">Explore Related Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link 
                to={`/locations/${citySlug}/all`}
                className="flex items-center text-seo-blue hover:text-seo-blue-light group"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                  View all services in {cityName}
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
            <li>
              <Link 
                to="/locations"
                className="flex items-center text-seo-blue hover:text-seo-blue-light group"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                  Browse all Australian locations
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
            <li>
              <Link 
                to="/services"
                className="flex items-center text-seo-blue hover:text-seo-blue-light group"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue-light transition-colors">
                  Explore all our SEO services
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </div>
      </AnimatedSection>
    </article>
  );
};

export default SeoBlogTemplate;
