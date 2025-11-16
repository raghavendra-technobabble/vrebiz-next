import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalFooter from "@/components/MinimalFooter";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPosts = () => {
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
            Blog Posts
          </h1>
          <p className="text-lg text-foreground/70 mb-16">
            Latest updates, tips, and thought leadership from our experts
          </p>

          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-border/50">
              <p className="text-foreground/70 text-center py-12">
                Blog posts coming soon. Check back later for the latest updates and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MinimalFooter />
    </div>
  );
};

export default BlogPosts;
