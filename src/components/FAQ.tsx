
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AnimatedSection from '@/components/AnimatedSection';
import Schema from '@/components/Schema';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
  addSchema?: boolean;
}

const FAQ: React.FC<FAQProps> = ({ 
  title = "Frequently Asked Questions", 
  subtitle = "Find answers to common questions about our services",
  faqs,
  className,
  addSchema = true
}) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      {addSchema && (
        <Schema type="faq" data={{ questions: faqs }} />
      )}
      
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center max-w-3xl mx-auto mb-12"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Have Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm"
                animation="fade-in"
                delay={index * 100}
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-seo-dark hover:text-seo-blue transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-seo-gray-dark">
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

export default FAQ;
