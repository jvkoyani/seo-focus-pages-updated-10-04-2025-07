
import React from 'react';
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ServiceTab } from '@/data/seoServicesData';

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
  return (
    <div className="hidden md:block">
      <Tabs 
        value={activeTab} 
        onValueChange={onTabChange} 
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
                <span className="text-sm font-mono text-seo-blue/70 group-hover:text-seo-blue">
                  {service.number}
                </span>
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
                  <h3 className="text-2xl font-bold text-seo-dark">
                    {service.content.heading}
                  </h3>
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
  );
}
