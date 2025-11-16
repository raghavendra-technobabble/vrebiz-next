import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalFooter from "@/components/MinimalFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalNavbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/resources" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-foreground/70 mb-16">
            Explore our successful client implementations and real-world solutions
          </p>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-border/50">
              <p className="text-foreground/70 text-center py-12">
                Case studies coming soon. Check back later for detailed success stories.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MinimalFooter />
    </div>
  );
};

export default CaseStudies;
