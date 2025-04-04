
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedSection from './AnimatedSection';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  description?: string;
  faqs: FaqItem[];
  className?: string;
}

const FaqSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our services",
  faqs,
  className = "",
}: FaqSectionProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {description}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in"
                delay={index * 100}
                className="mb-4"
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-seo-gray-dark">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
