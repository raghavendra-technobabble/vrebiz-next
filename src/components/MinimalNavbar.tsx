import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const MinimalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VR e-Biz Solutions Private Limited" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              About Us
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
                Resources
                <ChevronDown className="w-3 h-3" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border/50 rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/resources/case-studies" 
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/resources/articles" 
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Articles
                  </Link>
                  <Link 
                    to="/resources/blog" 
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    Blog Posts
                  </Link>
                </div>
              )}
            </div>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <Link to="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Services
              </Link>
              <Link to="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                About Us
              </Link>
              <div>
                <button 
                  onClick={() => setResourcesOpen(!resourcesOpen)}
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2 flex items-center gap-1 w-full"
                >
                  Resources
                  <ChevronDown className={`w-3 h-3 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>
                {resourcesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/resources/case-studies" className="block text-sm text-foreground/60 hover:text-foreground transition-colors py-1">
                      Case Studies
                    </Link>
                    <Link to="/resources/articles" className="block text-sm text-foreground/60 hover:text-foreground transition-colors py-1">
                      Articles
                    </Link>
                    <Link to="/resources/blog" className="block text-sm text-foreground/60 hover:text-foreground transition-colors py-1">
                      Blog Posts
                    </Link>
                  </div>
                )}
              </div>
              <a href="#contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MinimalNavbar;
