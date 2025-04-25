export interface ServiceContent {
  heading: string;
  paragraphs: string[];
}

export interface ServiceTab {
  id: string;
  number: string;
  title: string;
  content: ServiceContent;
}

export const services: ServiceTab[] = [
  {
    id: "seo",
    number: "01",
    title: "Search Engine Optimization",
    content: {
      heading: "Comprehensive Search Engine Optimization",
      paragraphs: [
        "Our comprehensive SEO strategies are designed to improve your website's visibility in search engine results pages (SERPs). We focus on understanding your target audience, analyzing your competitors, and implementing proven optimization techniques.",
        "Through careful keyword research, on-page optimization, and technical improvements, we help your website rank higher for relevant search terms, driving more qualified traffic to your business."
      ]
    }
  },
  {
    id: "local-seo",
    number: "02",
    title: "Local SEO",
    content: {
      heading: "Dominate Local Search Results",
      paragraphs: [
        "Local SEO helps your business stand out in your community by optimizing your online presence for location-based searches. We enhance your Google Business Profile, manage local citations, and ensure consistent NAP information across the web.",
        "Our local SEO strategies help you attract more customers from your target geographic area, improving your visibility in local search results and map listings."
      ]
    }
  },
  {
    id: "technical-seo",
    number: "03",
    title: "Technical SEO",
    content: {
      heading: "Technical Website Optimization",
      paragraphs: [
        "Technical SEO focuses on optimizing the infrastructure of your website to improve its search engine performance. We address issues like site speed, mobile responsiveness, XML sitemaps, robots.txt configuration, and schema markup.",
        "Our technical optimization ensures search engines can effectively crawl, index, and understand your website's content, leading to better rankings and user experience."
      ]
    }
  },
  {
    id: "content-marketing",
    number: "04",
    title: "Content Marketing",
    content: {
      heading: "Strategic Content Creation & Marketing",
      paragraphs: [
        "Our content marketing services help you create and distribute valuable, relevant content that attracts and retains your target audience. We develop comprehensive content strategies aligned with your SEO goals and business objectives.",
        "From blog posts and articles to infographics and videos, we create engaging content that drives organic traffic, builds authority, and converts visitors into customers."
      ]
    }
  },
  {
    id: "link-building",
    number: "05",
    title: "Link Building",
    content: {
      heading: "Quality Link Building Strategies",
      paragraphs: [
        "Our link building services focus on acquiring high-quality backlinks from relevant, authoritative websites in your industry. We use white-hat techniques to build a natural and diverse link profile that boosts your website's authority.",
        "Through strategic outreach, content partnerships, and digital PR, we help your website earn valuable backlinks that improve your search engine rankings and drive referral traffic."
      ]
    }
  },
  {
    id: "ecommerce-seo",
    number: "06",
    title: "E-commerce SEO",
    content: {
      heading: "Specialized E-commerce Optimization",
      paragraphs: [
        "E-commerce SEO requires specialized strategies to optimize product pages, categories, and the overall shopping experience. We focus on product schema markup, optimization of product descriptions, and improving the conversion funnel.",
        "Our e-commerce SEO services help increase your online store's visibility, drive more qualified traffic, and improve your conversion rates through strategic optimization."
      ]
    }
  }
];
