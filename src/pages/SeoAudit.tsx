
import { useState } from "react";
import { Send, Globe, AlertTriangle, CheckCircle2, Info, Database, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

// Define the form schema
const formSchema = z.object({
  websiteUrl: z
    .string()
    .url({ message: "Please enter a valid URL" })
    .startsWith("http", { 
      message: "URL must start with http:// or https://" 
    })
});

type FormValues = z.infer<typeof formSchema>;

// Mock SEO audit data for demonstration
const mockAuditData = {
  score: 67,
  pageTitle: "Example Company - Digital Marketing & SEO Services",
  metaDescription: "Example Company provides digital marketing and SEO services to help businesses grow online. Contact us today for a free consultation.",
  loadSpeed: 2.4,
  mobileResponsive: true,
  totalIssues: 14,
  issues: {
    high: [
      { id: 1, title: "Missing H1 tag", description: "Your page is missing an H1 tag. H1 tags help search engines understand your page's main topic." },
      { id: 2, title: "Slow page load speed", description: "Your page takes more than 2 seconds to load. Page speed is a ranking factor for search engines." },
      { id: 3, title: "Missing meta description", description: "Some pages are missing meta descriptions. Meta descriptions help search engines understand your page content." },
    ],
    medium: [
      { id: 4, title: "Image missing alt tags", description: "6 images are missing alt tags. Alt tags help search engines understand image content." },
      { id: 5, title: "Duplicate content", description: "2 pages have similar content. Duplicate content can confuse search engines." },
      { id: 6, title: "Low word count", description: "4 pages have less than 300 words. Pages with more content typically rank better." },
      { id: 7, title: "Too many JavaScript files", description: "Your site loads 12 JavaScript files. Reducing the number can improve page speed." },
    ],
    low: [
      { id: 8, title: "Missing canonical tag", description: "Your page is missing a canonical tag. Canonical tags help prevent duplicate content issues." },
      { id: 9, title: "No SSL certificate", description: "Your site doesn't use HTTPS. HTTPS is a ranking factor for search engines." },
      { id: 10, title: "No structured data", description: "Your page doesn't use structured data. Structured data helps search engines understand your content." },
      { id: 11, title: "Missing favicon", description: "Your site is missing a favicon. Favicons help with brand recognition." },
      { id: 12, title: "No XML sitemap", description: "Your site doesn't have an XML sitemap. Sitemaps help search engines discover your content." },
      { id: 13, title: "Missing robots.txt", description: "Your site doesn't have a robots.txt file. Robots.txt helps control search engine crawling." },
      { id: 14, title: "Missing social meta tags", description: "Your page is missing social meta tags. Social meta tags help with social media sharing." },
    ]
  },
  recommendations: [
    "Add an H1 tag to your page",
    "Optimize images to improve page speed",
    "Add meta descriptions to all pages",
    "Add alt tags to all images",
    "Fix duplicate content issues",
    "Add more content to low word count pages",
    "Combine and minify JavaScript files",
    "Add canonical tags to all pages",
    "Install an SSL certificate",
    "Add structured data to your page",
    "Add a favicon to your site",
    "Create an XML sitemap",
    "Create a robots.txt file",
    "Add social meta tags to your page"
  ]
};

// Issue severity component
const IssueSeverity = ({ severity }: { severity: 'high' | 'medium' | 'low' }) => {
  const colors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-blue-500"
  };
  
  return (
    <span className={`inline-block w-3 h-3 rounded-full ${colors[severity]} mr-2`}></span>
  );
};

// Issue Item component
const IssueItem = ({ 
  issue, 
  severity 
}: { 
  issue: { id: number; title: string; description: string }; 
  severity: 'high' | 'medium' | 'low' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-2">
      <CollapsibleTrigger className="flex items-center w-full p-3 text-left bg-white rounded-md shadow hover:shadow-md transition-shadow border border-gray-100">
        <IssueSeverity severity={severity} />
        <span className="flex-1 font-medium">{issue.title}</span>
        <span className="text-gray-400 mr-2">
          {isOpen ? "Hide details" : "Show details"}
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 mt-1 bg-gray-50 rounded-md text-sm text-gray-700 border border-gray-100">
        {issue.description}
      </CollapsibleContent>
    </Collapsible>
  );
};

const SeoAudit = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [auditData, setAuditData] = useState<typeof mockAuditData | null>(null);
  const [checkedRecommendations, setCheckedRecommendations] = useState<number[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteUrl: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsAnalyzing(true);
    setProgress(0);
    setAuditData(null);
    
    // Mock progress updates
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAuditData(mockAuditData);
          toast.success("SEO audit completed successfully!");
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  const toggleRecommendation = (index: number) => {
    setCheckedRecommendations(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero 
        title="Free SEO Audit Tool" 
        subtitle="Analyze your website and discover opportunities to improve your search engine rankings"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
      />
      
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection 
          className="max-w-3xl mx-auto mb-12 text-center" 
          animation="fade-in"
        >
          <h2 className="text-3xl font-bold mb-4">Get Your Free SEO Analysis</h2>
          <p className="text-lg text-gray-600">
            Enter your website URL below to receive a comprehensive SEO audit. 
            We'll analyze your site and provide actionable recommendations to 
            improve your search engine rankings.
          </p>
        </AnimatedSection>
        
        <AnimatedSection 
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200" 
          animation="slide-up"
          delay={200}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="websiteUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Website URL</FormLabel>
                    <FormControl>
                      <div className="flex">
                        <Input 
                          placeholder="https://example.com" 
                          className="rounded-r-none focus-visible:ring-1 focus-visible:ring-offset-1 text-base" 
                          {...field} 
                        />
                        <Button 
                          type="submit" 
                          className="rounded-l-none bg-seo-blue hover:bg-seo-blue-light"
                          disabled={isAnalyzing}
                        >
                          {isAnalyzing ? "Analyzing..." : "Analyze"}
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          
          {isAnalyzing && (
            <div className="mt-8 space-y-4">
              <p className="text-center font-medium">Analyzing your website...</p>
              <Progress value={progress} className="h-2" />
              <div className="text-xs text-center text-gray-500">
                {progress < 30 && "Checking meta tags and content..."}
                {progress >= 30 && progress < 60 && "Analyzing page speed and mobile-friendliness..."}
                {progress >= 60 && progress < 90 && "Checking backlinks and technical issues..."}
                {progress >= 90 && "Finalizing report..."}
              </div>
            </div>
          )}
        </AnimatedSection>
        
        {auditData && (
          <AnimatedSection 
            className="max-w-4xl mx-auto mt-16" 
            animation="fade-in"
            delay={300}
          >
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-seo-blue to-blue-600 text-white">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">SEO Audit Results</h3>
                    <p className="text-white/80">
                      Website: {form.getValues().websiteUrl}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                      <span className="text-3xl font-bold text-seo-blue">
                        {auditData.score}<span className="text-lg">/100</span>
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">SEO Score</p>
                      <p className="text-sm text-white/80">
                        {auditData.score < 50 ? "Needs Improvement" : 
                         auditData.score < 70 ? "Average" : "Good"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="overview" className="p-6">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="issues">Issues ({auditData.totalIssues})</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 border border-gray-200">
                      <div className="flex items-center">
                        <div className="rounded-full p-3 bg-blue-100 text-blue-600 mr-4">
                          <Database className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Page Title</p>
                          <p className="font-medium truncate">{auditData.pageTitle}</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 border border-gray-200">
                      <div className="flex items-center">
                        <div className="rounded-full p-3 bg-green-100 text-green-600 mr-4">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Load Speed</p>
                          <p className="font-medium">{auditData.loadSpeed}s</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-4 border border-gray-200">
                      <div className="flex items-center">
                        <div className="rounded-full p-3 bg-purple-100 text-purple-600 mr-4">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Mobile Friendly</p>
                          <p className="font-medium">
                            {auditData.mobileResponsive ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Meta Description</h4>
                    <Card className="p-4 border border-gray-200 bg-gray-50 text-sm text-gray-700">
                      {auditData.metaDescription || "No meta description found"}
                    </Card>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-lg font-medium mb-4">Issues Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="p-4 border border-gray-200 border-l-4 border-l-red-500">
                        <div className="flex items-center">
                          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">High Priority</p>
                            <p className="font-medium">{auditData.issues.high.length} issues</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-gray-200 border-l-4 border-l-yellow-500">
                        <div className="flex items-center">
                          <Info className="h-5 w-5 text-yellow-500 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Medium Priority</p>
                            <p className="font-medium">{auditData.issues.medium.length} issues</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-gray-200 border-l-4 border-l-blue-500">
                        <div className="flex items-center">
                          <Info className="h-5 w-5 text-blue-500 mr-2" />
                          <div>
                            <p className="text-sm text-gray-500">Low Priority</p>
                            <p className="font-medium">{auditData.issues.low.length} issues</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="issues" className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                      High Priority Issues
                    </h4>
                    <div className="space-y-2">
                      {auditData.issues.high.map(issue => (
                        <IssueItem key={issue.id} issue={issue} severity="high" />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4 flex items-center">
                      <Info className="h-5 w-5 text-yellow-500 mr-2" />
                      Medium Priority Issues
                    </h4>
                    <div className="space-y-2">
                      {auditData.issues.medium.map(issue => (
                        <IssueItem key={issue.id} issue={issue} severity="medium" />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-4 flex items-center">
                      <Info className="h-5 w-5 text-blue-500 mr-2" />
                      Low Priority Issues
                    </h4>
                    <div className="space-y-2">
                      {auditData.issues.low.map(issue => (
                        <IssueItem key={issue.id} issue={issue} severity="low" />
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="recommendations" className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Recommended Actions</h4>
                    <p className="text-gray-600 mb-4">
                      Check off items as you complete them to track your progress.
                    </p>
                    <Card className="p-4 border border-gray-200">
                      <ul className="space-y-3">
                        {auditData.recommendations.map((recommendation, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Checkbox 
                              id={`recommendation-${index}`} 
                              checked={checkedRecommendations.includes(index)}
                              onCheckedChange={() => toggleRecommendation(index)}
                              className="mt-1"
                            />
                            <label 
                              htmlFor={`recommendation-${index}`}
                              className={`cursor-pointer ${checkedRecommendations.includes(index) ? "line-through text-gray-400" : ""}`}
                            >
                              {recommendation}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <Button variant="outline" className="mr-2">
                      Download Report
                    </Button>
                    <Button className="bg-seo-blue hover:bg-seo-blue-light">
                      Share Results
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <h4 className="font-medium mb-4">Need Expert Help?</h4>
                <p className="text-gray-600 mb-4">
                  Our SEO specialists can help you implement these recommendations and improve your search engine rankings.
                </p>
                <Button className="bg-seo-blue hover:bg-seo-blue-light">
                  Get Professional SEO Help
                </Button>
              </div>
            </div>
          </AnimatedSection>
        )}
        
        <AnimatedSection 
          className="max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-lg p-8 border border-gray-200" 
          animation="fade-in"
          delay={400}
        >
          <h3 className="text-2xl font-bold mb-6">Why SEO Matters for Your Business</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="rounded-full p-3 bg-blue-100 text-blue-600 inline-block mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Increased Visibility</h4>
              <p className="text-gray-600">
                Higher rankings in search results mean more potential customers will find your business online.
              </p>
            </div>
            
            <div className="p-4">
              <div className="rounded-full p-3 bg-green-100 text-green-600 inline-block mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Quality Traffic</h4>
              <p className="text-gray-600">
                SEO attracts users who are actively searching for your products or services.
              </p>
            </div>
            
            <div className="p-4">
              <div className="rounded-full p-3 bg-purple-100 text-purple-600 inline-block mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Better ROI</h4>
              <p className="text-gray-600">
                Compared to paid advertising, SEO provides better long-term return on investment.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SeoAudit;
