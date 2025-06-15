
export interface ServiceTab {
  id: string;
  number: string;
  title: string;
  content: {
    heading: string;
    paragraphs: string[];
  };
}

export const services: ServiceTab[] = [
  {
    id: "local-seo",
    number: "01",
    title: "Local SEO",
    content: {
      heading: "Dominate Local Search Results",
      paragraphs: [
        "Our Local SEO service helps businesses increase their visibility in location-based searches, driving more foot traffic and local customers to your business. We optimize your Google Business Profile, build local citations, and implement location-specific strategies that put your business on the map.",
        "We focus on improving your rankings for 'near me' searches and ensuring your business appears in Google's Local Pack. Our comprehensive approach includes managing your online reputation, optimizing for voice search, and creating location-specific content that resonates with your local audience.",
        "With our proven local SEO strategies, you'll see increased phone calls, more direction requests, and higher foot traffic to your physical location. We track local rankings, monitor review acquisition, and provide detailed reporting on your local search performance."
      ]
    }
  },
  {
    id: "technical-seo",
    number: "02", 
    title: "Technical SEO",
    content: {
      heading: "Optimize Your Website's Foundation",
      paragraphs: [
        "Technical SEO ensures your website meets search engine requirements for crawling, indexing, and ranking. We conduct comprehensive technical audits to identify and fix issues that may be preventing your site from reaching its full potential in search results.",
        "Our technical optimization includes improving site speed, fixing crawl errors, implementing schema markup, optimizing URL structures, and ensuring mobile-friendliness. We also focus on Core Web Vitals, SSL implementation, and creating XML sitemaps for better search engine understanding.",
        "By addressing technical issues, we create a solid foundation that allows your content and other SEO efforts to perform at their best. This results in improved rankings, better user experience, and increased organic traffic from search engines."
      ]
    }
  },
  {
    id: "content-marketing",
    number: "03",
    title: "Content Marketing", 
    content: {
      heading: "Create Content That Converts",
      paragraphs: [
        "Our content marketing service focuses on creating valuable, relevant content that attracts and engages your target audience while supporting your SEO goals. We develop comprehensive content strategies that align with your business objectives and customer journey.",
        "We create blog posts, landing pages, guides, and other content types that target your most important keywords while providing genuine value to your audience. Our content is optimized for both search engines and user engagement, helping you build authority in your industry.",
        "Through strategic content creation and promotion, we help you attract qualified traffic, generate leads, and establish your brand as a trusted authority. Our content strategies include keyword targeting, topic clusters, and content optimization for maximum search visibility."
      ]
    }
  },
  {
    id: "link-building",
    number: "04",
    title: "Link Building",
    content: {
      heading: "Build Authority with Quality Backlinks",
      paragraphs: [
        "Our link building service focuses on acquiring high-quality, relevant backlinks that boost your website's authority and improve rankings for competitive keywords. We use white-hat strategies that comply with Google's guidelines and provide long-term value.",
        "We identify link opportunities through competitor analysis, industry research, and relationship building. Our approach includes guest posting, resource page outreach, broken link building, and creating link-worthy content that naturally attracts backlinks from authoritative websites.",
        "Quality backlinks from reputable sources signal to search engines that your content is valuable and trustworthy. This improved authority helps your pages rank higher for target keywords and drives more organic traffic to your website."
      ]
    }
  },
  {
    id: "ecommerce-seo",
    number: "05",
    title: "E-commerce SEO",
    content: {
      heading: "Boost Product Visibility and Sales",
      paragraphs: [
        "Our E-commerce SEO service is specifically designed for online retailers looking to increase product visibility and drive more sales through organic search. We optimize product pages, category structures, and implement strategies that help your products rank higher in search results.",
        "We focus on product page optimization, technical SEO for e-commerce platforms, category page structure, internal linking strategies, and schema markup for products. Our approach also includes optimizing for shopping-related keywords and improving the overall user experience.",
        "By improving your e-commerce SEO, you'll see increased organic traffic to product pages, higher conversion rates from search visitors, and improved visibility in Google Shopping results. We track product rankings, monitor organic revenue, and optimize for maximum ROI."
      ]
    }
  },
  {
    id: "seo-audits",
    number: "06",
    title: "SEO Audits",
    content: {
      heading: "Comprehensive Website Analysis",
      paragraphs: [
        "Our SEO audit service provides a thorough analysis of your website's current SEO performance, identifying opportunities for improvement and areas that may be hindering your search rankings. We examine technical, on-page, and off-page factors that impact your SEO success.",
        "Our comprehensive audits cover site structure, page speed, mobile optimization, content quality, keyword targeting, backlink profile, and competitive analysis. We provide detailed reports with prioritized recommendations and actionable steps to improve your SEO performance.",
        "With our SEO audit, you'll gain valuable insights into your website's strengths and weaknesses, understand your competitive landscape, and receive a clear roadmap for improving your search engine visibility and organic traffic."
      ]
    }
  }
];
