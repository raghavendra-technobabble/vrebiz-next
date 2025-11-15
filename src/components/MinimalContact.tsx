import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const MinimalContact = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
                Get In Touch
              </p>
              <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
                Ready to
                <span className="block font-semibold">transform your business?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                Let's discuss how we can help you navigate the Indian market and 
                achieve your business objectives.
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Content - Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-2">Email</div>
                  <a href="mailto:info@vrebiz.in" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                    info@vrebiz.in
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                  <Phone className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-2">Phone</div>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-foreground transition-colors font-light">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors">
                  <MapPin className="h-5 w-5 text-foreground group-hover:text-background transition-colors" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-2">Location</div>
                  <div className="text-muted-foreground font-light">
                    Bangalore, Karnataka<br />
                    India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalContact;
