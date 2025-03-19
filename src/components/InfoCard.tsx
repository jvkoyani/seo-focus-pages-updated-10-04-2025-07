
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { CheckCircle } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description?: string;
  items?: string[];
  icon?: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up';
  delay?: number;
  iconBackground?: string;
  iconColor?: string;
}

const InfoCard = ({
  title,
  description,
  items,
  icon,
  className,
  animation = 'fade-in',
  delay = 0,
  iconBackground = 'bg-seo-blue/10',
  iconColor = 'text-seo-blue'
}: InfoCardProps) => {
  return (
    <AnimatedSection
      className={cn(
        "bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100",
        className
      )}
      animation={animation}
      delay={delay}
    >
      <div className="p-6">
        {icon && (
          <div className={cn("rounded-full w-16 h-16 flex items-center justify-center mb-4", iconBackground)}>
            <div className={cn("w-8 h-8", iconColor)}>
              {icon}
            </div>
          </div>
        )}
        <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
          {title}
        </h3>
        {description && (
          <p className="text-seo-gray-dark mb-4">
            {description}
          </p>
        )}
        {items && items.length > 0 && (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-seo-gray-dark">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimatedSection>
  );
};

export default InfoCard;
