
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Search, AlertTriangle, Home, Map, Briefcase, Building, ArrowLeft, ArrowRight } from "lucide-react";
import ServiceBadge from "@/components/ServiceBadge";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [redirectAttempted, setRedirectAttempted] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    if (redirectAttempted) {
      return; // Prevent redirect loops
    }
    
    // Try to parse the path to see if it's a service-industry-location combination
    const path = location.pathname.substring(1); // Remove leading slash
    
    if (path.includes("-for-") && path.includes("-in-")) {
      const forIndex = path.indexOf("-for-");
      const inIndex = path.indexOf("-in-");
      
      if (forIndex !== -1 && inIndex !== -1 && inIndex > forIndex) {
        const serviceSlug = path.substring(0, forIndex);
        const industrySlug = path.substring(forIndex + 5, inIndex);
        const locationSlug = path.substring(inIndex + 4);
        
        console.log("Parsed SEO URL components:", {
          service: serviceSlug,
          industry: industrySlug,
          location: locationSlug
        });
        
        // Stop redirect to avoid loop
        setRedirectAttempted(true);
        
        // Redirect to the same URL to trigger the correct route with extracted slugs
        navigate(`/${serviceSlug}-for-${industrySlug}-in-${locationSlug}`, { replace: true });
        return;
      }
    }
  }, [location.pathname, navigate, redirectAttempted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl mx-auto p-8">
        <AnimatedSection animation="fade-in" className="text-center mb-8">
          <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-red-100 mb-6">
            <AlertTriangle className="h-10 w-10 text-red-500" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <ServiceBadge 
              text="Page Not Found" 
              icon="shield" 
              variant="danger" 
              size="lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-xl mx-auto">
            Oops! We couldn't find the page you were looking for.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={200} className="bg-white p-8 rounded-xl shadow-md mb-8">
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            Were you looking for one of these?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Link 
              to="/services" 
              className="flex items-center p-4 rounded-md hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <span className="font-medium block">Our Services</span>
                <span className="text-sm text-gray-500">
                  Explore our full range of SEO solutions
                </span>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
            </Link>
            
            <Link 
              to="/industries" 
              className="flex items-center p-4 rounded-md hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <Building className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <span className="font-medium block">Industries</span>
                <span className="text-sm text-gray-500">
                  Industry-specific SEO solutions
                </span>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
            </Link>
            
            <Link 
              to="/locations" 
              className="flex items-center p-4 rounded-md hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <Map className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <span className="font-medium block">Locations</span>
                <span className="text-sm text-gray-500">
                  Find location-specific SEO strategies
                </span>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
            </Link>
            
            <Link 
              to="/sitemap" 
              className="flex items-center p-4 rounded-md hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              <div className="bg-yellow-100 rounded-full p-2 mr-4">
                <Search className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <span className="font-medium block">Sitemap</span>
                <span className="text-sm text-gray-500">
                  Browse all pages on our website
                </span>
              </div>
              <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="flex-1">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
            </Button>
            
            <Button variant="outline" asChild size="lg" className="flex-1">
              <Link to="/" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default NotFound;
