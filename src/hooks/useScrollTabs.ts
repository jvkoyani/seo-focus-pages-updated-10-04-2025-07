
import { useEffect, useRef, useState } from 'react';

interface UseScrollTabsProps {
  defaultTab: string;
}

export function useScrollTabs({ defaultTab }: UseScrollTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isScrolling, setIsScrolling] = useState(false);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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

  return {
    activeTab,
    contentRefs,
    handleTabChange
  };
}
