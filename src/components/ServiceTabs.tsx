
import React, { useRef } from 'react';
import { services } from '@/data/seoServicesData';
import { DesktopServiceTabs } from './services/DesktopServiceTabs';
import { MobileServiceAccordion } from './services/MobileServiceAccordion';
import { useScrollTabs } from '@/hooks/useScrollTabs';
import AnimatedSection from './AnimatedSection';

export default function ServiceTabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { activeTab, contentRefs, handleTabChange } = useScrollTabs({
    defaultTab: "local-seo"
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-6">
            Comprehensive SEO Solutions
          </h2>
          <p className="text-lg text-seo-gray-dark">
            Boost your online presence with our comprehensive SEO strategies tailored to your business goals
          </p>
        </AnimatedSection>
        
        <div 
          ref={containerRef}
          className="w-full max-w-7xl mx-auto"
        >
          <DesktopServiceTabs
            services={services}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            contentRefs={contentRefs}
          />
          <MobileServiceAccordion services={services} />
        </div>
      </div>
    </section>
  );
}
