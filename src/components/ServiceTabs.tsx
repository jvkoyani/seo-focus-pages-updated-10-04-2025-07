
import React, { useEffect, useRef } from 'react';
import { services } from '@/data/seoServicesData';
import { DesktopServiceTabs } from './services/DesktopServiceTabs';
import { MobileServiceAccordion } from './services/MobileServiceAccordion';

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
