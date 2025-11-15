import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="VR-eBiz Solutions" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#why-us" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Why Us
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                About
              </a>
              <a href="#why-us" className="text-foreground/80 hover:text-primary transition-colors font-medium py-2">
                Why Us
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
