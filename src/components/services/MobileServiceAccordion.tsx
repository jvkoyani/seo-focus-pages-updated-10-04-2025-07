
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceTab } from '@/data/seoServicesData';

interface MobileServiceAccordionProps {
  services: ServiceTab[];
}

export function MobileServiceAccordion({ services }: MobileServiceAccordionProps) {
  return (
    <div className="md:hidden">
      <Accordion type="single" collapsible defaultValue="seo">
        {services.map((service) => (
          <AccordionItem key={service.id} value={service.id}>
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-mono text-seo-blue/70">
                  {service.number}
                </span>
                <span className="font-medium">{service.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-seo-dark">
                  {service.content.heading}
                </h3>
                {service.content.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-seo-gray-dark leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
