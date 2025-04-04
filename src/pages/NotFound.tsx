
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
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
        
        // Attempt to redirect to the ServiceIndustryLocation page
        const seoUrl = `/${serviceSlug}-for-${industrySlug}-in-${locationSlug}`;
        console.log("Redirecting to:", seoUrl);
        
        // Only redirect if it's an actual SEO URL not the current URL (to avoid loops)
        if (seoUrl !== location.pathname) {
          navigate(`/${serviceSlug}-for-${industrySlug}-in-${locationSlug}`);
          return;
        }
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/services">Browse Services</Link>
          </Button>
          
          <Button variant="outline" asChild>
            <Link to="/locations">Browse Locations</Link>
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
