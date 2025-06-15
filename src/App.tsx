
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Industries from "./pages/Industries";
import IndustryPage from "./pages/IndustryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import LocationService from "./pages/LocationService";
import LocationServicePage from "./pages/LocationServicePage";
import LocationIndustries from "./pages/LocationIndustries";
import LocationIndustryPage from "./pages/LocationIndustryPage";
import LocationServicesIndustries from "./pages/LocationServicesIndustries";
import ServiceIndustryLocation from "./pages/ServiceIndustryLocation";
import SeoAudit from "./pages/SeoAudit";
import NotFound from "./pages/NotFound";
import FreeConsultation from "./pages/FreeConsultation";
import ServiceBlog from "./pages/ServiceBlog";
import Sitemap from "./pages/Sitemap";
import XmlSitemap from "./pages/XmlSitemap";

// Country, State, County pages
import Country from "./pages/Country";
import State from "./pages/State";
import County from "./pages/County";

// Methodology pages
import ResearchAnalysis from "./pages/methodology/ResearchAnalysis";
import StrategicPlanning from "./pages/methodology/StrategicPlanning";
import Implementation from "./pages/methodology/Implementation";
import MonitoringOptimization from "./pages/methodology/MonitoringOptimization";

// New page
import ServiceIndustryLocationPage from "./pages/ServiceIndustryLocationPage";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// RouteWrapper adds a unique key to each route component
const RouteWrapper = ({ Component }: { Component: React.ComponentType<any> }) => {
  const location = useLocation();
  // Create a unique key based on pathname and search parameters
  const routeKey = `${location.pathname}${location.search}`;
  
  console.log(`RouteWrapper rendering for path: ${location.pathname} with key: ${routeKey}`);
  
  return <Component routeKey={routeKey} />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Static pages - highest priority */}
            <Route path="/" element={<RouteWrapper Component={Index} />} />
            <Route path="/services" element={<RouteWrapper Component={Services} />} />
            <Route path="/industries" element={<RouteWrapper Component={Industries} />} />
            <Route path="/about" element={<RouteWrapper Component={About} />} />
            <Route path="/contact" element={<RouteWrapper Component={Contact} />} />
            <Route path="/blogs" element={<RouteWrapper Component={Blogs} />} />
            <Route path="/case-studies" element={<RouteWrapper Component={CaseStudies} />} />
            <Route path="/seo-audit" element={<RouteWrapper Component={SeoAudit} />} />
            <Route path="/free-consultation" element={<RouteWrapper Component={FreeConsultation} />} />
            <Route path="/sitemap" element={<RouteWrapper Component={Sitemap} />} />
            <Route path="/sitemap.xml" element={<RouteWrapper Component={XmlSitemap} />} />
            
            {/* Methodology pages */}
            <Route path="/methodology/research-analysis" element={<RouteWrapper Component={ResearchAnalysis} />} />
            <Route path="/methodology/strategic-planning" element={<RouteWrapper Component={StrategicPlanning} />} />
            <Route path="/methodology/implementation" element={<RouteWrapper Component={Implementation} />} />
            <Route path="/methodology/monitoring-optimization" element={<RouteWrapper Component={MonitoringOptimization} />} />
            
            {/* Blog and Case Study detail pages */}
            <Route path="/blog/:slug" element={<RouteWrapper Component={BlogPost} />} />
            <Route path="/case-study/:slug" element={<RouteWrapper Component={CaseStudy} />} />
            
            {/* Service pages */}
            <Route path="/service/:slug" element={<RouteWrapper Component={ServicePage} />} />
            
            {/* Industry pages */}
            <Route path="/industry/:slug" element={<RouteWrapper Component={IndustryPage} />} />
            
            {/* Location pages - ordered from most specific to least specific */}
            <Route path="/location/:locationSlug/all" element={<RouteWrapper Component={LocationServicesIndustries} />} />
            <Route path="/location/:locationSlug/industries" element={<RouteWrapper Component={LocationIndustries} />} />
            <Route path="/location/:locationSlug/industry/:industrySlug" element={<RouteWrapper Component={LocationIndustryPage} />} />
            <Route path="/location/:locationSlug/:serviceSlug" element={<RouteWrapper Component={LocationServicePage} />} />
            <Route path="/location/:slug" element={<RouteWrapper Component={Location} />} />
            
            {/* Service-Industry-Location combinations - specific patterns */}
            <Route path="/service/:serviceSlug/industry/:industrySlug/location/:locationSlug" element={<RouteWrapper Component={ServiceIndustryLocation} />} />
            
            {/* Service Blog pages */}
            <Route path="/service-blog/:slug" element={<RouteWrapper Component={ServiceBlog} />} />
            <Route path="/service-blog/:slug/:locationSlug" element={<RouteWrapper Component={ServiceBlog} />} />
            
            {/* SEO-friendly URL patterns - HIGHEST PRIORITY for single-segment routes */}
            <Route path="/:slug" element={<RouteWrapper Component={ServiceIndustryLocationPage} />} />
            
            {/* Service-location combinations - these should come after more specific routes */}
            <Route path="/:serviceSlug-:locationSlug" element={<RouteWrapper Component={LocationService} />} />
            
            {/* Hierarchy pages - ordered by specificity */}
            <Route path="/:country/:state/:county" element={<RouteWrapper Component={County} />} />
            <Route path="/:country/:state" element={<RouteWrapper Component={State} />} />
            <Route path="/australia" element={<RouteWrapper Component={Country} />} />
            
            {/* 404 fallback - must be last */}
            <Route path="*" element={<RouteWrapper Component={NotFound} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
