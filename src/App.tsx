
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import SeoAudit from "./pages/SeoAudit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:slug" element={<ServicePage />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location/:slug" element={<Location />} />
          <Route path="/location/:locationSlug/:serviceSlug" element={<LocationService />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study/:slug" element={<CaseStudy />} />
          <Route path="/seo-audit" element={<SeoAudit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
