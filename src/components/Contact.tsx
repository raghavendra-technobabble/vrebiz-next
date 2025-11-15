import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-[hsl(200,90%,45%)] rounded-3xl p-12 md:p-16 text-primary-foreground shadow-2xl animate-scale-in">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                  Let's discuss how we can help you navigate the Indian market and achieve your business goals.
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Right Content - Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email Us</div>
                    <a href="mailto:info@vrebiz.in" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                      info@vrebiz.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Call Us</div>
                    <a href="tel:+919876543210" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Visit Us</div>
                    <div className="text-primary-foreground/90">
                      Bangalore, Karnataka<br />
                      India - Silicon Valley
                    </div>
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

export default Contact;
