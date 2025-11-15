import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Boutique Consultancy Based in 
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bangalore's Silicon Valley
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              VR-eBiz Solutions is a boutique Business Consultancy firm based in the Silicon Valley of India, Bangalore. 
              We endeavor to provide high-quality customized solutions to various companies in India and abroad.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team is the right combination of young and experienced professionals who make things work best for us. 
              Our deep industry knowledge coupled with our close partnerships with clients enable us to bring fresh 
              perspectives and creative thinking to the problems we solve.
            </p>

            <div className="space-y-4">
              {[
                "Business Incorporation & Setup",
                "Accounting & Payroll Management",
                "Compliance Management",
                "Corporate & Start-up Advisory",
                "Virtual CFO Services"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-[hsl(200,90%,45%)] rounded-2xl p-8 text-primary-foreground">
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-[hsl(14,90%,60%)] rounded-2xl p-8 text-accent-foreground">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-accent to-[hsl(14,90%,60%)] rounded-2xl p-8 text-accent-foreground">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Global Reach</div>
              </div>
              <div className="bg-gradient-to-br from-primary to-[hsl(200,90%,45%)] rounded-2xl p-8 text-primary-foreground">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wide opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
