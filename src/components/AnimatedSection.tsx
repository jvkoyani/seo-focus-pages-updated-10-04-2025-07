
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up';
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  threshold = 0.2,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'opacity-0',
        {
          'animate-fade-in': animation === 'fade-in' && isVisible,
          'animate-fade-in-left': animation === 'fade-in-left' && isVisible,
          'animate-fade-in-right': animation === 'fade-in-right' && isVisible,
          'animate-slide-up': animation === 'slide-up' && isVisible,
        },
        className
      )}
      style={{ 
        willChange: 'opacity, transform',
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
