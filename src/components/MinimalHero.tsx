import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MinimalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-medium">
              Business Beyond Borders
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-[1.1] tracking-tight">
              Unlocking Potential
              <br />
              <span className="font-semibold">Through Innovation</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We specialize in India Entry Strategy, Virtual CFO Services, and Digital Transformation 
              for global enterprises seeking excellence in the Indian market.
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary text-foreground font-medium text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
};

export default MinimalHero;
