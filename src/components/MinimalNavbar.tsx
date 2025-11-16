import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const MinimalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to="/resources" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Resources
            </Link>
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
              <Link to="/resources" className="text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Resources
              </Link>
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
