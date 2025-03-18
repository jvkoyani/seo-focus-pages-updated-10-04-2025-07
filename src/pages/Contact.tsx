
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white to-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto" animation="fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-seo-dark mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-seo-gray-dark mb-8">
              Have questions about our SEO services? We're here to help.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection className="order-2 md:order-1" animation="fade-in-left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-display font-bold text-seo-dark mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-seo-dark mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-seo-dark mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-seo-dark mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-seo-dark mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-seo-dark mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-seo-blue focus:ring-1 focus:ring-seo-blue outline-none transition-colors"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-seo-blue hover:bg-seo-blue-light text-white font-medium py-3 px-6 rounded-md transition-colors button-hover-effect"
                  >
                    Send Message
                  </button>
                  
                  <p className="text-xs text-seo-gray-medium text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </AnimatedSection>
            
            {/* Contact Info */}
            <AnimatedSection className="order-1 md:order-2" animation="fade-in-right">
              <h2 className="text-2xl font-display font-bold text-seo-dark mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-seo-blue/10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg mb-1">Main Office</h3>
                    <p className="text-seo-gray-dark">
                      123 Business Street<br />
                      Sydney, NSW 2000<br />
                      Australia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seo-blue/10 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg mb-1">Phone</h3>
                    <p className="text-seo-gray-dark">
                      <a href="tel:+61291234567" className="hover:text-seo-blue transition-colors">
                        +61 2 9123 4567
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seo-blue/10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg mb-1">Email</h3>
                    <p className="text-seo-gray-dark">
                      <a href="mailto:info@seofocus.com.au" className="hover:text-seo-blue transition-colors">
                        info@seofocus.com.au
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-seo-blue/10 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-seo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-seo-dark text-lg mb-1">Business Hours</h3>
                    <p className="text-seo-gray-dark">
                      Monday - Friday: 9:00 AM - 5:30 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-seo-dark text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href="#" 
                      className="bg-seo-blue/10 hover:bg-seo-blue/20 text-seo-blue rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-seo-gray-light">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-10" animation="fade-in">
            <h2 className="text-2xl font-display font-bold text-seo-dark mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-seo-gray-dark">
              We're located in the heart of Sydney's business district
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="rounded-xl overflow-hidden shadow-lg" animation="fade-in">
            <div className="h-96 bg-gray-200">
              <img 
                src="https://maps.googleapis.com/maps/api/staticmap?center=Sydney,NSW&zoom=13&size=1200x600&maptype=roadmap&markers=color:blue%7Clabel:S%7C-33.8688,151.2093&key=YOUR_API_KEY" 
                alt="Office Location Map" 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
