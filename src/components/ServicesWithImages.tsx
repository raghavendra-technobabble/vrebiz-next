import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import serviceDigital from "@/assets/service-digital.jpg";
import serviceAssurance from "@/assets/service-assurance.jpg";
import serviceAdvisory from "@/assets/service-advisory.jpg";
import serviceTax from "@/assets/service-tax.jpg";

const services = [
  {
    image: serviceDigital,
    title: "Digital Transformation for Finance",
    description: "Transform your finance and HR operations with Zoho suite of apps. We provide varied services ranging from payroll to account receivables to tax calculations.",
  },
  {
    image: serviceAssurance,
    title: "Assurance Services",
    description: "Customized risk management advice to keep your organization compliant with Indian regulations and ensure reliable financial statements.",
  },
  {
    image: serviceAdvisory,
    title: "Business Advisory",
    description: "Strategic guidance to examine proposed actions vis-à-vis the Indian regulatory environment and market dynamics.",
  },
  {
    image: serviceTax,
    title: "Tax Planning & Structuring",
    description: "Commercially sound tax advice and structuring services. Critical expertise for deal making and business optimization.",
  },
];

const ServicesWithImages = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">We Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive business solutions tailored for your success in the Indian market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 border-border hover:scale-105 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesWithImages;
