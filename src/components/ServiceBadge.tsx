
import React from 'react';
import { cn } from '@/lib/utils';
import { BadgeProps as ShadcnBadgeProps } from '@/components/ui/badge';
import { Award, Star, TrendingUp, ThumbsUp, Zap, Shield, CheckCircle } from 'lucide-react';

// Extend the Badge component with our custom props
export interface ServiceBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon?: 'award' | 'star' | 'trending-up' | 'thumbs-up' | 'zap' | 'shield' | 'check';
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

const iconMap = {
  'award': Award,
  'star': Star,
  'trending-up': TrendingUp,
  'thumbs-up': ThumbsUp,
  'zap': Zap,
  'shield': Shield,
  'check': CheckCircle,
};

const variantStyles = {
  default: "bg-seo-blue text-white hover:bg-seo-blue-light",
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-green-500 text-white hover:bg-green-600",
  success: "bg-emerald-500 text-white hover:bg-emerald-600",
  warning: "bg-amber-500 text-white hover:bg-amber-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
  info: "bg-blue-500 text-white hover:bg-blue-600",
};

const ServiceBadge = ({
  text,
  icon,
  variant = 'default',
  className,
  ...props
}: ServiceBadgeProps) => {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div 
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
      {text}
    </div>
  );
};

export default ServiceBadge;
