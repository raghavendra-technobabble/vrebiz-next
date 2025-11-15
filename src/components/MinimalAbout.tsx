const MinimalAbout = () => {
  return (
    <section id="about" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
              Our Story
            </p>
            <h2 className="text-4xl md:text-6xl font-light text-foreground mb-8 leading-tight">
              Boutique consultancy
              <span className="block font-semibold">based in Bangalore</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-light">
              <p className="text-lg">
                VR-eBiz Solutions is a boutique Business Consultancy firm based in Bangalore, 
                the Silicon Valley of India. We provide high-quality customized solutions to 
                companies across India and internationally.
              </p>
              <p className="text-lg">
                Our team combines youthful energy with seasoned expertise. This unique blend, 
                coupled with deep industry knowledge and close client partnerships, enables us 
                to bring fresh perspectives and creative thinking to every challenge.
              </p>
              <p className="text-lg">
                We measure success by the quality of relationships we build and the positive 
                change we bring to our clients' businesses. Having worked with companies locally 
                and internationally, we understand industry-specific challenges and strive to 
                ensure businesses can materialize their vision without worrying about regulatory 
                obstacles.
              </p>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="border-l-2 border-foreground pl-8">
              <h3 className="text-2xl font-medium text-foreground mb-3">Our Expertise</h3>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li>Business Incorporation & Setup</li>
                <li>Accounting & Payroll Management</li>
                <li>Compliance Management</li>
                <li>Corporate & Start-up Advisory</li>
                <li>Virtual CFO Services</li>
              </ul>
            </div>

            <div className="border-l-2 border-accent pl-8">
              <h3 className="text-2xl font-medium text-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We go beyond service delivery to become true partners in your success. 
                Our reputation is built on exceeding expectations and maintaining the 
                highest standards of professionalism.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-3xl font-light text-foreground mb-2">100%</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-3xl font-light text-foreground mb-2">24/7</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalAbout;
