
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { findServiceBySlug } from "@/lib/servicesData";
import { findIndustryBySlug } from "@/lib/industriesData";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Search, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Try to parse the path to see if it's a service-industry-location combination
    const path = location.pathname.substring(1); // Remove leading slash
    
    // Check if it might be a service-industry-location SEO URL format
    if (path.includes("-for-") && path.includes("-in-")) {
      setIsRedirecting(true);
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
        
        // Check if the service and industry exist
        const service = findServiceBySlug(serviceSlug);
        const industry = findIndustryBySlug(industrySlug);
        
        if (service && industry) {
          console.log(`Valid service (${service.title}) and industry (${industry.title}) found, redirecting...`);
          
          // Redirect to the ServiceIndustryLocation component
          navigate(`/service/${serviceSlug}/industry/${industrySlug}/location/${locationSlug}`);
          return;
        } else {
          console.log("Could not find matching service or industry:", {
            serviceFound: !!service,
            industryFound: !!industry
          });
        }
      }
      
      setIsRedirecting(false);
    }
    
    // Handle other URL formats as well
    // For example, check if it's a simple service-location format
    if (path.includes("-") && !path.includes("-for-") && !path.includes("-in-")) {
      const segments = path.split("-");
      // Try to find a valid service from the beginning of the URL
      for (let i = 1; i < segments.length; i++) {
        const potentialServiceSlug = segments.slice(0, i).join("-");
        const potentialLocationSlug = segments.slice(i).join("-");
        
        const service = findServiceBySlug(potentialServiceSlug);
        if (service) {
          console.log(`Found potential service-location pattern: ${potentialServiceSlug} in ${potentialLocationSlug}`);
          navigate(`/location/${potentialLocationSlug}/${potentialServiceSlug}`);
          return;
        }
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        
        {isRedirecting ? (
          <div className="mb-6">
            <div className="animate-pulse flex space-x-4 items-center justify-center">
              <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
              <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Redirecting to the correct page...</p>
          </div>
        ) : (
          <p className="text-gray-500 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        )}
        
        <div className="flex flex-col space-y-3">
          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="gap-2">
            <Link to="/services">
              <Search className="h-4 w-4" />
              Browse Services
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="gap-2">
            <Link to="/location/sydney">
              Browse Sydney SEO Services
            </Link>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/sitemap">View Sitemap</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
