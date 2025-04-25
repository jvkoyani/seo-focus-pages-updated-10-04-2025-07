
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceTab {
  id: string;
  number: string;
  title: string;
  content: {
    heading: string;
    paragraphs: string[];
  };
}

const services: ServiceTab[] = [
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

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = React.useState("seo");
  const [isScrolling, setIsScrolling] = React.useState(false);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: [0, 0.5, 1]
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isScrolling) return;

      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const tabId = entry.target.getAttribute('data-tab-id');
          if (tabId) {
            setActiveTab(tabId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(contentRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  const handleTabChange = (tabId: string) => {
    setIsScrolling(true);
    setActiveTab(tabId);
    
    const targetRef = contentRefs.current[tabId];
    if (targetRef) {
      targetRef.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });

      // Reset scrolling flag after animation
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-4 scroll-view-tabs"
    >
      {/* Desktop View */}
      <div className="hidden md:block">
        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange} 
          className="w-full"
        >
          <div className="grid grid-cols-12 gap-8">
            <TabsList className="flex flex-col h-auto space-y-2 col-span-4 sticky top-24">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={cn(
                    "flex items-start justify-start p-4 text-left w-full space-x-4 hover:bg-seo-blue/5 data-[state=active]:bg-seo-blue/10",
                    "border-l-2 border-transparent data-[state=active]:border-seo-blue",
                    "transition-all duration-200 replacecontent",
                    "group"
                  )}
                >
                  <span className="text-sm font-mono text-seo-blue/70 group-hover:text-seo-blue">{service.number}</span>
                  <span className="font-medium">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="col-span-8">
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  className={cn(
                    "mt-0 focus-visible:outline-none focus-visible:ring-0",
                    "scroll-mt-24 snap-center"
                  )}
                >
                  <div 
                    ref={el => contentRefs.current[service.id] = el}
                    data-tab-id={service.id}
                    className={cn(
                      "space-y-6",
                      "activeservice:opacity-100 opacity-70 transition-opacity duration-300"
                    )}
                  >
                    <h3 className="text-2xl font-bold text-seo-dark">{service.content.heading}</h3>
                    {service.content.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-seo-gray-dark leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>

      {/* Mobile View - Accordion */}
      <div className="md:hidden">
        <Accordion type="single" collapsible defaultValue="seo">
          {services.map((service) => (
            <AccordionItem key={service.id} value={service.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-mono text-seo-blue/70">{service.number}</span>
                  <span className="font-medium">{service.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  <h3 className="text-xl font-bold text-seo-dark">{service.content.heading}</h3>
                  {service.content.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-seo-gray-dark leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

