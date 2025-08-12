import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { setPageSEO } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    setPageSEO("MedNarrative+ | AI Healthcare Dashboards", "Role-based doctor and patient dashboards for faster, clearer care.");
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">MedNarrative+</h1>
        <p className="text-lg text-muted-foreground max-w-xl">AI-powered transcription, SOAP note generation, and patient-friendly summaries. Built for clinicians and patients.</p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="hero" asChild><a href="/signup">Get Started</a></Button>
          <Button variant="outline" asChild><a href="/signin">Sign In</a></Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
