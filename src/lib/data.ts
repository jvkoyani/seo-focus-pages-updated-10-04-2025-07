
import { 
  MapPin, 
  Settings, 
  FileText, 
  Link as LinkIcon, 
  ShoppingCart, 
  BarChart,
  Briefcase,
  Building,
  Stethoscope,
  Scale,
  Activity,
  Home,
  Calculator
} from 'lucide-react';

export interface LocationData {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestimonialData {
  id: string;
  name: string;
  company: string;
  location: string;
  quote: string;
  image: string;
}

export interface IndustryData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  benefits: string[];
}

export const locations: LocationData[] = [
  {
    id: '1',
    name: 'Sydney',
    slug: 'sydney',
    description: 'Boost your Sydney business with our local SEO expertise tailored to the competitive Sydney market.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
    metaTitle: 'Sydney SEO Services | Rank Higher in Local Searches',
    metaDescription: 'Our Sydney SEO services help local businesses rank higher in search results. Get more traffic, leads and sales with our proven SEO strategies.',
  },
  {
    id: '2',
    name: 'Melbourne',
    slug: 'melbourne',
    description: 'Dominate Melbourne search results with customized SEO strategies designed for the Melbourne market.',
    image: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?q=80&w=1000&auto=format&fit=crop',
    metaTitle: 'Melbourne SEO Services | Boost Your Local Rankings',
    metaDescription: 'Melbourne SEO experts delivering results-driven strategies for local businesses. Improve visibility, traffic and conversions.',
  },
  {
    id: '3',
    name: 'Brisbane',
    slug: 'brisbane',
    description: 'Targeted SEO solutions for Brisbane businesses looking to grow their online presence and attract more customers.',
    image: 'https://images.unsplash.com/photo-1566734904496-9309bb1798b3?q=80&w=1000&auto=format&fit=crop',
    metaTitle: 'Brisbane SEO Services | Local Search Optimization',
    metaDescription: 'Brisbane SEO specialists helping businesses rank higher in local search results. Get more visibility and customers with our proven approach.',
  },
  {
    id: '4',
    name: 'Perth',
    slug: 'perth',
    description: 'Specialized SEO services for Perth businesses, focused on increasing local visibility and driving qualified traffic.',
    image: 'https://images.unsplash.com/photo-1573935448851-4b07c29ee181?q=80&w=1000&auto=format&fit=crop',
    metaTitle: 'Perth SEO Services | Increase Your Local Visibility',
    metaDescription: 'Perth SEO services customized to help local businesses attract more customers. Improve rankings, traffic and conversions.',
  },
  {
    id: '5',
    name: 'Adelaide',
    slug: 'adelaide',
    description: 'Results-driven SEO strategies designed specifically for Adelaide businesses and the local market dynamics.',
    image: 'https://images.unsplash.com/photo-1566208541068-ffdb5471e9bf?q=80&w=1000&auto=format&fit=crop',
    metaTitle: 'Adelaide SEO Services | Expert Local Optimization',
    metaDescription: 'Adelaide SEO experts helping local businesses increase online visibility. Get higher rankings and more qualified website traffic.',
  },
  {
    id: '6',
    name: 'Gold Coast',
    slug: 'gold-coast',
    description: 'Tailored SEO solutions for Gold Coast businesses looking to stand out in local search results.',
    image: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?q=80&w=1000&auto=format&fit=crop',
    metaTitle: 'Gold Coast SEO Services | Dominate Local Searches',
    metaDescription: 'Gold Coast SEO specialists delivering custom strategies to help businesses improve rankings and attract more customers.',
  },
];

export const services: ServiceData[] = [
  {
    id: '1',
    title: 'Local SEO',
    description: 'Dominate local search results and attract nearby customers with targeted local SEO strategies.',
    icon: 'map-pin',
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Location-specific keyword targeting',
      'Local link building strategies',
      'Review management system'
    ]
  },
  {
    id: '2',
    title: 'Technical SEO',
    description: 'Improve your website\'s foundation with comprehensive technical SEO audits and optimizations.',
    icon: 'settings',
    features: [
      'Site speed optimization',
      'Mobile-friendly improvements',
      'Schema markup implementation',
      'Crawlability & indexation fixes',
      'SSL & security enhancements'
    ]
  },
  {
    id: '3',
    title: 'Content Strategy',
    description: 'Create content that ranks and engages your target audience to drive qualified traffic.',
    icon: 'file-text',
    features: [
      'Keyword research & planning',
      'Content gap analysis',
      'Blog strategy development',
      'Content optimization',
      'Topic cluster creation'
    ]
  },
  {
    id: '4',
    title: 'Link Building',
    description: 'Build high-quality backlinks that improve authority and boost search rankings.',
    icon: 'link',
    features: [
      'Authority backlink acquisition',
      'Content-driven link building',
      'Competitor link analysis',
      'Guest posting campaigns',
      'Digital PR strategies'
    ]
  },
  {
    id: '5',
    title: 'E-commerce SEO',
    description: 'Specialized optimization for online stores to increase product visibility and sales.',
    icon: 'shopping-cart',
    features: [
      'Product page optimization',
      'Category page structuring',
      'Review schema implementation',
      'Conversion rate optimization',
      'Shopping feed management'
    ]
  },
  {
    id: '6',
    title: 'Analytics & Reporting',
    description: 'Transparent reporting with actionable insights to track and improve your SEO performance.',
    icon: 'bar-chart',
    features: [
      'Custom dashboard creation',
      'Monthly performance reports',
      'Conversion tracking setup',
      'Traffic analysis',
      'ROI measurement'
    ]
  }
];

export const testimonials: TestimonialData[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Metro Retail Solutions',
    location: 'Sydney',
    quote: 'Our organic traffic increased by 156% in just 6 months after implementing their SEO strategy. The team is incredibly knowledgeable and responsive.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'Tech Innovations Inc',
    location: 'Melbourne',
    quote: 'We were struggling to rank for competitive keywords in our industry. Their technical SEO audit identified critical issues that, once fixed, helped us reach page one.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    company: 'Coastal Properties',
    location: 'Brisbane',
    quote: 'The local SEO campaign they developed for our real estate agency has been transformative. We\'re now the top result for our target keywords in Brisbane.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop'
  }
];

export const industries: IndustryData[] = [
  {
    id: '1',
    title: 'Accountant SEO',
    slug: 'accountant-seo',
    description: 'Specialized SEO strategies to help accounting firms attract more qualified leads and grow their client base.',
    icon: Calculator,
    features: [
      'Local SEO for accounting practices',
      'Content strategy for financial topics',
      'Reputation management',
      'Conversion optimization for client acquisition',
      'Competitor analysis'
    ],
    benefits: [
      'Attract more qualified leads looking for accounting services',
      'Establish authority in specialized financial niches',
      'Increase visibility for high-value keywords',
      'Improve conversion rates for consultation requests',
      'Gain competitive advantage in local search results'
    ]
  },
  {
    id: '2',
    title: 'Chiropractor SEO',
    slug: 'chiropractor-seo',
    description: 'Custom SEO solutions for chiropractors to increase patient acquisition and boost local visibility.',
    icon: Activity,
    features: [
      'Local SEO for chiropractic clinics',
      'Patient testimonial optimization',
      'Google Business Profile management',
      'Content marketing for patient education',
      'Review generation strategies'
    ],
    benefits: [
      'Attract more patients searching for chiropractic care',
      'Build trust through optimized reviews and testimonials',
      'Increase visibility in local map pack results',
      'Educate potential patients about your services',
      'Differentiate your practice from competitors'
    ]
  },
  {
    id: '3',
    title: 'Dental SEO',
    slug: 'dental-seo',
    description: 'Results-driven SEO for dental practices focused on patient acquisition and practice growth.',
    icon: Stethoscope,
    features: [
      'Local SEO for dental practices',
      'Service page optimization',
      'Patient journey mapping',
      'Content strategy for oral health topics',
      'Competitive analysis against other local dentists'
    ],
    benefits: [
      'Increase new patient inquiries through organic search',
      'Rank higher for profitable treatment keywords',
      'Improve visibility in Google Maps and local results',
      'Build authority through educational dental content',
      'Track and improve ROI from your digital marketing'
    ]
  },
  {
    id: '4',
    title: 'Healthcare SEO',
    slug: 'healthcare-seo',
    description: 'Comprehensive SEO strategies for healthcare providers to improve online visibility and patient acquisition.',
    icon: Stethoscope,
    features: [
      'HIPAA-compliant content strategy',
      'Medical service page optimization',
      'Provider profile enhancement',
      'Healthcare schema implementation',
      'Medical content authority building'
    ],
    benefits: [
      'Establish your practice as an authority in your specialty',
      'Increase visibility for symptom and treatment searches',
      'Improve patient education through optimized content',
      'Enhance credibility through structured medical data',
      'Outrank competing healthcare providers'
    ]
  },
  {
    id: '5',
    title: 'Lawyer SEO',
    slug: 'lawyer-seo',
    description: 'Specialized SEO for law firms to increase case inquiries and establish authority in specific practice areas.',
    icon: Scale,
    features: [
      'Practice area page optimization',
      'Local SEO for law firms',
      'Legal content strategy development',
      'Attorney profile enhancement',
      'Case study and result highlighting'
    ],
    benefits: [
      'Attract more qualified case inquiries through search',
      'Build authority in specific legal practice areas',
      'Outrank competing law firms for valuable keywords',
      'Improve conversion rates for consultation requests',
      'Expand your firm's digital footprint'
    ]
  },
  {
    id: '6',
    title: 'Physio SEO',
    slug: 'physio-seo',
    description: 'Tailored SEO strategies for physiotherapy clinics to increase patient bookings and local visibility.',
    icon: Activity,
    features: [
      'Local SEO for physiotherapy clinics',
      'Treatment page optimization',
      'Patient success story highlighting',
      'Condition-specific content development',
      'Online booking optimization'
    ],
    benefits: [
      'Increase new patient inquiries through organic search',
      'Rank higher for treatment and condition keywords',
      'Improve visibility in Google Maps results',
      'Build authority with educational physiotherapy content',
      'Convert more visitors into booked appointments'
    ]
  },
  {
    id: '7',
    title: 'Real Estate SEO',
    slug: 'real-estate-seo',
    description: 'Strategic SEO solutions for real estate agencies and agents to generate more leads and property inquiries.',
    icon: Home,
    features: [
      'Local real estate SEO',
      'Property listing optimization',
      'Area guide content development',
      'Agent profile enhancement',
      'Real estate schema implementation'
    ],
    benefits: [
      'Attract more qualified property seekers through search',
      'Improve visibility for location-based property searches',
      'Establish authority in specific neighborhoods and markets',
      'Increase lead generation through optimized content',
      'Outrank competing agents and agencies'
    ]
  }
];

