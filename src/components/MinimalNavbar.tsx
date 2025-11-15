import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const MinimalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="VR-eBiz Solutions" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#clients" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Clients
            </a>
            <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Testimonials
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-full px-6">
              Contact
            </Button>
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
              <a href="#services" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Services
              </a>
              <a href="#clients" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Clients
              </a>
              <a href="#about" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                About
              </a>
              <a href="#testimonials" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Testimonials
              </a>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-full w-full">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default MinimalNavbar;
