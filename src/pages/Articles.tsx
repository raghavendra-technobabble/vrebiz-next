import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalFooter from "@/components/MinimalFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Articles = () => {
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
            Articles
          </h1>
          <p className="text-lg text-foreground/70 mb-16">
            In-depth analysis and insights on industry trends and best practices
          </p>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-border/50">
              <p className="text-foreground/70 text-center py-12">
                Articles coming soon. Check back later for expert insights and analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MinimalFooter />
    </div>
  );
};

export default Articles;
