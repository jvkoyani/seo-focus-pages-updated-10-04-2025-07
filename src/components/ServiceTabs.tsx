
import React, { useRef } from 'react';
import { services } from '@/data/seoServicesData';
import { DesktopServiceTabs } from './services/DesktopServiceTabs';
import { MobileServiceAccordion } from './services/MobileServiceAccordion';
import { useScrollTabs } from '@/hooks/useScrollTabs';

export default function ServiceTabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeTab, contentRefs, handleTabChange } = useScrollTabs({
    defaultTab: "seo"
  });

  return (
    <div 
      ref={containerRef}
      className="w-full max-w-6xl mx-auto px-4 scroll-view-tabs"
    >
      <DesktopServiceTabs
        services={services}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        contentRefs={contentRefs}
      />
      <MobileServiceAccordion services={services} />
    </div>
  );
}
