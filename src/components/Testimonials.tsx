
import { useState } from 'react';
import { Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { testimonials } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialsProps {
  location?: string;
}

const Testimonials = ({ location }: TestimonialsProps) => {
  return (
    <section className="py-24 bg-seo-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {location 
              ? `What Our ${location} Clients Say`
              : 'What Our Clients Say'}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            Real results and feedback from businesses we've helped achieve SEO success
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <AnimatedSection 
                    className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
                    animation="fade-in"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <Quote className="h-12 w-12 text-seo-blue/20 mb-4" />
                        <p className="text-lg md:text-xl text-seo-dark mb-6 italic">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <h4 className="text-xl font-display font-semibold text-seo-dark">
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center text-seo-gray-medium text-sm">
                            <span>{testimonial.company}</span>
                            <span className="mx-2">•</span>
                            <span>{testimonial.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
