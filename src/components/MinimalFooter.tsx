import logo from "@/assets/logo.png";

const MinimalFooter = () => {
  return (
    <footer className="border-t border-border py-16 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="VR-eBiz Solutions" className="h-8 w-auto mb-6" />
            <p className="text-muted-foreground text-sm font-light max-w-sm leading-relaxed">
              Boutique business consultancy empowering global enterprises to succeed in India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium text-foreground mb-4 text-sm">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="#services" className="hover:text-foreground transition-colors">Digital Transformation</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Virtual CFO</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">India Entry</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Tax Planning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-foreground mb-4 text-sm">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="#about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#clients" className="hover:text-foreground transition-colors">Clients</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VR-eBiz Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
