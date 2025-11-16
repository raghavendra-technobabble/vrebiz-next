import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalFooter from "@/components/MinimalFooter";
import { Link } from "react-router-dom";
import { FileText, BookOpen, PenTool } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Case Studies",
      description: "Explore our successful client implementations and real-world solutions",
      icon: FileText,
      link: "/resources/case-studies",
    },
    {
      title: "Articles",
      description: "In-depth analysis and insights on industry trends and best practices",
      icon: BookOpen,
      link: "/resources/articles",
    },
    {
      title: "Blog Posts",
      description: "Latest updates, tips, and thought leadership from our experts",
      icon: PenTool,
      link: "/resources/blog",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <MinimalNavbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resources
          </h1>
          <p className="text-lg text-foreground/70 mb-16 max-w-2xl">
            Discover insights, success stories, and expert perspectives to help you navigate the digital landscape
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.title}
                  to={category.link}
                  className="group p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-foreground/70">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <MinimalFooter />
    </div>
  );
};

export default Resources;
