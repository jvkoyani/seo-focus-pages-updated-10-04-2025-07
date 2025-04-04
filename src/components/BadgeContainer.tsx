
import React from 'react';
import ServiceBadge, { ServiceBadgeProps } from './ServiceBadge';
import AnimatedSection from './AnimatedSection';

export interface BadgeContainerProps {
  badges: ServiceBadgeProps[];
  className?: string;
}

const BadgeContainer = ({ badges, className }: BadgeContainerProps) => {
  return (
    <AnimatedSection
      animation="fade-in"
      className={`flex flex-wrap gap-2 sm:gap-4 justify-center ${className}`}
    >
      {badges.map((badge, index) => (
        <ServiceBadge
          key={index}
          text={badge.text}
          icon={badge.icon}
          variant={badge.variant}
          className="transform hover:scale-105 transition-transform duration-200"
        />
      ))}
    </AnimatedSection>
  );
};

export default BadgeContainer;
