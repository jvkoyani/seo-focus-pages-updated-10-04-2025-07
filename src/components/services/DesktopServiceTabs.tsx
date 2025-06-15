import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceTab } from '@/data/seoServicesData';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface DesktopServiceTabsProps {
  services: ServiceTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  contentRefs: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
}

export function DesktopServiceTabs({ 
  services, 
  activeTab, 
  onTabChange,
  contentRefs 
}: DesktopServiceTabsProps) {
  
  // Service images mapping with more relevant Australian city images
  const serviceImages = {
    "local-seo": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
    "technical-seo": "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&h=600&fit=crop",
    "content-marketing": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
    "link-building": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
    "ecommerce-seo": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop",
    "seo-audits": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop"
  };

  // Key benefits for each service
  const serviceBenefits = {
    "local-seo": [
      "Improved visibility in local search results",
      "Higher conversion rates from local searches",
      "Enhanced Google Business Profile performance"
    ],
    "technical-seo": [
      "Faster website performance and loading speeds",
      "Improved crawlability and search engine matching",
      "Better mobile user experience and responsiveness"
    ],
    "content-marketing": [
      "Engaging content that converts visitors to customers",
      "Thought leadership establishment in your industry",
      "Long-term organic traffic growth"
    ],
    "link-building": [
      "Increased domain authority and search rankings",
      "Better search engine trust and credibility",
      "High-quality referral traffic from relevant sites"
    ],
    "ecommerce-seo": [
      "Higher product visibility in search results",
      "Increased online sales and revenue",
      "Improved shopping experience for customers"
    ],
    "seo-audits": [
      "Complete website SEO analysis",
      "Competitor benchmarking insights",
      "Actionable recommendations for improvement"
    ]
  };

  // What we do for each service
  const serviceActions = {
    "local-seo": [
      "Google Business Profile optimization",
      "Local citation building and management",
      "Local keyword research and targeting"
    ],
    "technical-seo": [
      "Comprehensive technical SEO audits",
      "Site speed optimization and Core Web Vitals",
      "Mobile-first optimization and responsive design"
    ],
    "content-marketing": [
      "Content strategy development and planning",
      "High-quality blog and article creation",
      "SEO-optimized content for target keywords"
    ],
    "link-building": [
      "Strategic link prospecting and outreach",
      "High-quality guest posting opportunities",
      "Digital PR and brand mention building"
    ],
    "ecommerce-seo": [
      "Product page optimization and enhancement",
      "Category page structure and SEO",
      "E-commerce technical SEO improvements"
    ],
    "seo-audits": [
      "Technical SEO analysis and recommendations",
      "Content audit and optimization opportunities",
      "Competitor analysis and benchmarking"
    ]
  };

  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={serviceImages[service.id as keyof typeof serviceImages]} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
              </div>
            </div>
            
            <CardContent className="p-6">
              <p className="text-seo-gray-dark mb-4 text-sm leading-relaxed">
                {service.content.paragraphs[0]}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-seo-dark mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {serviceBenefits[service.id as keyof typeof serviceBenefits]?.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-seo-gray-dark">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-seo-dark mb-3">What We Do</h4>
                <ul className="space-y-2">
                  {serviceActions[service.id as keyof typeof serviceActions]?.map((action, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-seo-blue mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-seo-gray-dark">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                className="w-full bg-seo-blue hover:bg-seo-blue-light text-white"
                onClick={() => window.location.href = `/service/${service.id}`}
              >
                Learn More About {service.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
