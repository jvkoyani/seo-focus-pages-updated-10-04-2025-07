import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ServiceBlogTemplate from '@/components/ServiceBlogTemplate';
import LocationBreadcrumbs from '@/components/LocationBreadcrumbs';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { allAustralianCities } from '@/lib/locationData';
import { services } from '@/lib/data';
import ServiceBadge from '@/components/ServiceBadge';
import { ServiceBadgeProps } from '@/components/ServiceBadge';
import FAQ, { FAQItem } from '@/components/FAQ';
import ContextualBlog from '@/components/ContextualBlog';

const serviceBlogContents: Record<string, {
  title: string;
  content: string[];
  publishDate: string;
  author: string;
  tags: string[];
}> = {
  'local-seo': {
    title: 'How Local SEO is Helpful to Your {city name} Business',
    content: [
      'In today\'s digital landscape, local SEO has become essential for businesses in {city name} looking to establish a strong online presence and attract more customers from their local area.',
      'Local SEO refers to the process of optimizing your business\'s online presence to attract more customers from local searches. For {city name} businesses, this means appearing in search results when potential customers in your area search for products or services you offer.',
      'One of the key benefits of local SEO for {city name} businesses is increased visibility in local search results. When your business appears in the "local pack" or Google Maps listings, you\'re more likely to attract customers who are ready to make a purchase.',
      'Another major advantage is the ability to compete with larger businesses. Even if you\'re a small business in {city name}, effective local SEO can help you outrank larger competitors for local searches.',
      'Local SEO also helps build trust and credibility with your {city name} customers. When your business appears in local search results with positive reviews and accurate information, potential customers are more likely to trust your brand.',
      'Some essential local SEO strategies for {city name} businesses include creating and optimizing your Google Business Profile, building local citations, earning customer reviews, and creating locally-focused content.',
      'By implementing a comprehensive local SEO strategy, your {city name} business can increase its visibility, attract more local customers, and ultimately grow its revenue.'
    ],
    publishDate: 'June 15, 2023',
    author: 'SEO Expert Team',
    tags: ['Local SEO', 'Business Growth', 'Digital Marketing']
  },
  'technical-seo': {
    title: 'Technical SEO Improvements for {city name} Businesses',
    content: [
      'Technical SEO is the foundation of any successful SEO strategy for {city name} businesses looking to improve their online visibility and search engine rankings.',
      'Unlike content-focused SEO strategies, technical SEO deals with optimizing the infrastructure of your website to make it more accessible to search engines and improve user experience.',
      'For businesses in {city name}, having a technically sound website is crucial for competing in local search results and attracting customers from your area.',
      'Some key technical SEO elements that {city name} businesses should focus on include site speed optimization, mobile-friendliness, secure connections (HTTPS), proper URL structure, and structured data implementation.',
      'Site speed is particularly important for {city name} businesses, as local customers may quickly lose patience with slow-loading websites and move on to competitors.',
      'Mobile optimization is another critical factor, especially for {city name} customers who are often searching for local businesses while on the go.',
      'Implementing proper structured data can help your {city name} business appear in rich snippets and enhance your visibility in local search results.',
      'By addressing these technical SEO elements, your {city name} business can establish a solid foundation for your broader SEO strategy and improve your chances of ranking well in local search results.'
    ],
    publishDate: 'July 22, 2023',
    author: 'Technical SEO Team',
    tags: ['Technical SEO', 'Website Optimization', 'Search Rankings']
  },
  'content-marketing': {
    title: 'Content Marketing Strategies for {city name} Businesses',
    content: [
      'Content marketing is a powerful strategy for {city name} businesses looking to attract, engage, and convert local customers through valuable and relevant content.',
      'For businesses in {city name}, creating locally-focused content can help you connect with your community and establish your brand as a local authority.',
      'Effective content marketing for {city name} businesses involves understanding your local audience\'s needs, interests, and pain points, then creating content that addresses these specifically.',
      'Some content types that work well for local businesses in {city name} include locally-focused blog posts, area guides, local event coverage, customer success stories, and content that highlights your involvement in the {city name} community.',
      'Incorporating local keywords and references to {city name} landmarks, events, and culture can help your content rank better for local searches and resonate with your local audience.',
      'Consistency is key in content marketing for {city name} businesses. Regularly publishing fresh, high-quality content signals to search engines that your website is active and relevant.',
      'By implementing a strategic content marketing plan that focuses on your {city name} audience, you can attract more local customers, build trust with your community, and ultimately grow your business.'
    ],
    publishDate: 'August 10, 2023',
    author: 'Content Strategy Team',
    tags: ['Content Marketing', 'Local Business', 'Community Engagement']
  },
  'ecommerce-seo': {
    title: 'E-commerce SEO Tips for {city name} Retailers',
    content: [
      'E-commerce SEO is essential for retailers in {city name} looking to increase their online visibility and attract more customers to their online stores.',
      'While {city name} businesses may have a physical presence, a strong e-commerce SEO strategy can help them reach customers beyond their local area while still maintaining a strong local presence.',
      'For e-commerce businesses in {city name}, it\'s important to optimize for both local searches and product-specific searches to maximize visibility.',
      'Key e-commerce SEO strategies for {city name} retailers include proper product categorization, detailed product descriptions, optimized product images, customer reviews, and creating a seamless user experience.',
      'Technical aspects such as site structure, internal linking, and mobile optimization are particularly important for e-commerce sites, as they directly impact both user experience and search engine rankings.',
      'Local {city name} retailers should also consider implementing structured data for products, which can help search engines understand your product information and potentially display rich snippets in search results.',
      'By combining effective e-commerce SEO with local SEO strategies, {city name} retailers can create a powerful online presence that attracts both local and non-local customers to their online stores.'
    ],
    publishDate: 'September 5, 2023',
    author: 'E-commerce SEO Team',
    tags: ['E-commerce', 'Online Retail', 'Product Optimization']
  },
  'link-building': {
    title: 'Link Building Strategies for {city name} Businesses',
    content: [
      'Link building remains one of the most important aspects of SEO for {city name} businesses looking to improve their search engine rankings and online authority.',
      'For local businesses in {city name}, building high-quality backlinks can significantly impact your visibility in both local and organic search results.',
      'Local link building for {city name} businesses involves obtaining links from other {city name} businesses, local directories, community organizations, and local news outlets.',
      'Some effective link building strategies for {city name} businesses include local sponsorships, community involvement, creating local resources, and reaching out to local business partners.',
      'Building relationships with other {city name} businesses and organizations can lead to natural link opportunities that search engines view as particularly valuable.',
      'When seeking backlinks, {city name} businesses should focus on quality over quantity, as links from relevant, authoritative local sources carry more weight than numerous low-quality links.',
      'By implementing a strategic link building plan that focuses on local relevance and authority, your {city name} business can improve its search engine rankings and establish itself as a trusted local entity.'
    ],
    publishDate: 'October 12, 2023',
    author: 'Link Building Team',
    tags: ['Link Building', 'Local Authority', 'Business Relationships']
  }
};

const getServiceFAQs = (serviceSlug: string, locationName?: string): FAQItem[] => {
  const cityName = locationName || "your city";
  
  const commonFAQs: Record<string, FAQItem[]> = {
    'local-seo': [
      {
        question: `What is Local SEO and why is it important for ${cityName} businesses?`,
        answer: `Local SEO is the process of optimizing your online presence to attract more customers from relevant local searches. It's particularly important for businesses in ${cityName} because it helps you connect with nearby customers actively searching for your products or services. With proper local SEO, your business appears in local search results, Google Maps, and local directories, driving more foot traffic and increasing conversions from ${cityName} residents.`
      },
      {
        question: `How long does it take to see results from Local SEO in ${cityName}?`,
        answer: `Most businesses in ${cityName} begin seeing initial improvements within 3-4 months of implementing our Local SEO strategies. More significant results typically appear within 6-9 months. The timeline depends on factors such as your current online presence, competition level in the ${cityName} market, and the specific keywords targeted. We focus on sustainable strategies that provide long-term benefits.`
      },
      {
        question: `What Local SEO strategies do you use for ${cityName} businesses?`,
        answer: `For ${cityName} businesses, we implement a comprehensive Local SEO strategy that includes Google Business Profile optimization, local citation building across ${cityName} directories, location-specific content creation, local link building with other ${cityName} businesses and organizations, location-based keyword research, review management, and mobile optimization. We adapt our approach based on your specific industry and the competitive landscape in ${cityName}.`
      },
      {
        question: `How is Local SEO different from regular SEO for ${cityName} businesses?`,
        answer: `While regular SEO focuses on improving your visibility in global search results, Local SEO specifically targets potential customers in ${cityName} and surrounding areas. Local SEO emphasizes Google Business Profile optimization, local citations, reviews, and location-specific content. It's particularly important for businesses with physical locations in ${cityName} or those serving customers in specific geographic areas.`
      },
      {
        question: `How do you measure the success of Local SEO for ${cityName} businesses?`,
        answer: `We measure success through multiple metrics including local ranking improvements, organic traffic growth from ${cityName} visitors, conversion rates, phone calls, direction requests, increases in local reviews, citation improvements, and ultimately, business growth. We provide detailed monthly reports that track these metrics and explain what they mean for your business in clear, jargon-free language.`
      }
    ],
    'technical-seo': [
      {
        question: `What technical SEO issues commonly affect ${cityName} business websites?`,
        answer: `Businesses in ${cityName} often face technical SEO challenges such as slow page loading times, mobile usability issues, inadequate site structure, duplicate content, missing or improper metadata, and issues with crawlability and indexation. These problems can significantly impact your visibility in search results, particularly for local searches in the ${cityName} area.`
      },
      {
        question: `How does site speed affect my ${cityName} business's search rankings?`,
        answer: `Site speed is a critical ranking factor that directly impacts how ${cityName} customers experience your website. Slow-loading pages lead to higher bounce rates as local customers are unlikely to wait. Google recognizes this and factors site speed into rankings, particularly for mobile searches. Improving your site speed can significantly enhance both your search visibility in ${cityName} and the user experience for local customers.`
      },
      {
        question: `Why is mobile optimization important for ${cityName} businesses?`,
        answer: `Mobile optimization is essential for ${cityName} businesses because the majority of local searches are performed on mobile devices. People searching for local businesses in ${cityName} are often on the go and using smartphones. If your website isn't mobile-friendly, you risk losing a significant portion of potential customers. Plus, Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking and indexing.`
      },
      {
        question: `What is structured data and how does it help my ${cityName} business?`,
        answer: `Structured data is a standardized format for providing information about your page and classifying its content. For ${cityName} businesses, implementing structured data helps search engines understand your content better and can result in enhanced search results with rich snippets, knowledge panels, and other features. Local business schema can highlight your ${cityName} address, phone number, business hours, and reviews directly in search results, improving visibility and click-through rates.`
      },
      {
        question: `How often should technical SEO audits be performed for ${cityName} businesses?`,
        answer: `We recommend that ${cityName} businesses conduct comprehensive technical SEO audits every 6-12 months, with smaller check-ups quarterly. Regular audits help identify and resolve issues before they negatively impact your rankings. Additionally, audits should be performed after any major website updates or redesigns. The competitive nature of the ${cityName} market makes ongoing technical optimization crucial for maintaining and improving your local search visibility.`
      }
    ]
  };
  
  return commonFAQs[serviceSlug] || [
    {
      question: `How can ${serviceSlug.replace(/-/g, ' ')} help my business in ${cityName}?`,
      answer: `${serviceSlug.replace(/-/g, ' ').charAt(0).toUpperCase() + serviceSlug.replace(/-/g, ' ').slice(1)} can significantly improve your business visibility in ${cityName} by optimizing your online presence for local searches. This leads to increased website traffic, more qualified leads, and ultimately more customers for your business.`
    },
    {
      question: `How long does it take to see results from ${serviceSlug.replace(/-/g, ' ')}?`,
      answer: `Most businesses in ${cityName} begin seeing initial improvements from ${serviceSlug.replace(/-/g, ' ')} within 3-4 months. More significant results typically appear within 6-9 months, depending on your industry competition and starting point.`
    },
    {
      question: `What makes your ${serviceSlug.replace(/-/g, ' ')} services unique for ${cityName} businesses?`,
      answer: `Our ${serviceSlug.replace(/-/g, ' ')} services stand out because we have deep knowledge of the ${cityName} market, including local search patterns, competition, and consumer behavior. We combine this local expertise with advanced ${serviceSlug.replace(/-/g, ' ')} techniques to deliver superior results.`
    }
  ];
};

const getServiceBadges = (serviceSlug: string, locationName?: string): ServiceBadgeProps[] => {
  const cityName = locationName || "your city";
  const serviceName = serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  
  return [
    {
      text: `#1 ${serviceName} Provider in ${cityName}`,
      icon: "award" as const,
      variant: "primary" as const,
      size: "lg"
    },
    {
      text: "Proven Results",
      icon: "trending-up" as const,
      variant: "success" as const,
      size: "md"
    },
    {
      text: "Expert Team",
      icon: "star" as const,
      variant: "warning" as const,
      size: "md"
    }
  ];
};

const ServiceBlog = () => {
  const { slug, locationSlug } = useParams<{ slug: string; locationSlug?: string }>();
  
  const service = services.find(s => s.slug === slug);
  
  const blogContent = serviceBlogContents[slug as keyof typeof serviceBlogContents];
  
  const location = locationSlug 
    ? allAustralianCities.find(loc => loc.slug === locationSlug)
    : undefined;
  
  const faqs = getServiceFAQs(slug || '', location?.name);
  
  const authorityBadges = getServiceBadges(slug || '', location?.name);
  
  if (!service || !blogContent) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-seo-blue font-medium"
          >
            <span>Return to blogs</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            {locationSlug ? (
              <LocationBreadcrumbs locationSlug={locationSlug} serviceSlug={slug} />
            ) : (
              <div className="flex items-center text-sm text-seo-gray-dark">
                <Link 
                  to="/" 
                  className="hover:text-seo-blue transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
                <Link 
                  to="/blogs" 
                  className="hover:text-seo-blue transition-colors"
                >
                  Blogs
                </Link>
                <ChevronRight className="h-4 w-4 mx-1 text-seo-gray-medium" />
                <span className="text-seo-blue font-medium">
                  {service.title} Blog
                </span>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {authorityBadges.map((badge, index) => (
              <ServiceBadge
                key={index}
                text={badge.text}
                icon={badge.icon}
                variant={badge.variant}
                size={badge.size}
              />
            ))}
          </div>
          
          <ServiceBlogTemplate
            title={blogContent.title}
            locationName={location?.name}
            content={blogContent.content}
            publishDate={blogContent.publishDate}
            author={blogContent.author}
            tags={blogContent.tags}
            serviceSlug={slug}
            locationSlug={locationSlug}
          />
          
          <div className="mt-16">
            <ContextualBlog 
              title="Related Articles"
              subtitle={`More insights about ${service.title}${location ? ` in ${location.name}` : ''}`}
              serviceSlug={slug}
              locationSlug={locationSlug}
            />
          </div>
          
          <FAQ 
            title={`Frequently Asked Questions About ${service.title}${location ? ` in ${location.name}` : ''}`}
            subtitle={`Get answers to common questions about our ${service.title.toLowerCase()} services${location ? ` for businesses in ${location.name}` : ''}`}
            faqs={faqs}
            className="bg-white"
          />
        </div>
      </main>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ServiceBlog;
