const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">VR-eBiz</span>
              <span className="text-accent"> Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for business transformation in India
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Digital Transformation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Virtual CFO</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">India Entry</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Tax Planning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bangalore, Karnataka</li>
              <li>info@vrebiz.in</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VR-eBiz Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
