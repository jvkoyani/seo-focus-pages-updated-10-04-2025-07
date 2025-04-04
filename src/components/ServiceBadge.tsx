
import React from 'react';
import { Award, Star, TrendingUp, ThumbsUp, Zap, Shield, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export type ServiceBadgeIconType = 'award' | 'star' | 'trending-up' | 'thumbs-up' | 'zap' | 'shield' | 'check';
export type ServiceBadgeVariantType = 'warning' | 'success' | 'info' | 'primary' | 'danger' | 'secondary' | 'default';

export interface ServiceBadgeProps {
  text: string;
  icon: ServiceBadgeIconType;
  variant: ServiceBadgeVariantType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Ensure all icon mappings are correctly defined
const iconComponents = {
  'award': Award,
  'star': Star,
  'trending-up': TrendingUp,
  'thumbs-up': ThumbsUp,
  'zap': Zap,
  'shield': Shield,
  'check': Check
};

const variantStyles = {
  default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  primary: 'bg-seo-blue/10 text-seo-blue hover:bg-seo-blue/20',
  secondary: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
  success: 'bg-green-100 text-green-700 hover:bg-green-200',
  warning: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
  danger: 'bg-red-100 text-red-700 hover:bg-red-200',
  info: 'bg-blue-100 text-blue-700 hover:bg-blue-200'
};

const ServiceBadge: React.FC<ServiceBadgeProps> = ({ 
  text, 
  icon, 
  variant = 'default', 
  size = 'md',
  className 
}) => {
  // Make sure we have a fallback if the icon is not found
  const IconComponent = iconComponents[icon] || Check;
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };
  
  return (
    <Badge 
      className={cn(
        "font-medium rounded-full inline-flex items-center gap-1.5 transition-colors border-none", 
        variantStyles[variant],
        sizeClasses[size],
        className
      )}
    >
      {IconComponent && <IconComponent className={cn(
        'flex-shrink-0',
        size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'
      )} />}
      <span>{text}</span>
    </Badge>
  );
};

export default ServiceBadge;
