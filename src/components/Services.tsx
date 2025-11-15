import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Briefcase, Calculator, Globe, Zap } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Transform your finance and HR operations with Zoho suite of apps. Streamline processes, enhance efficiency, and drive growth.",
    color: "from-primary to-[hsl(200,90%,45%)]"
  },
  {
    icon: Globe,
    title: "India Entry Strategy",
    description: "Expert guidance for foreign companies entering the Indian market. Navigate regulations, cultural nuances, and business setup seamlessly.",
    color: "from-accent to-[hsl(14,90%,60%)]"
  },
  {
    icon: Briefcase,
    title: "Virtual CFO Services",
    description: "Get strategic financial leadership without the full-time cost. Expert CFO guidance for startups and growing businesses.",
    color: "from-primary to-[hsl(200,90%,45%)]"
  },
  {
    icon: Shield,
    title: "Assurance Services",
    description: "Customized risk management advice to keep your organization compliant with Indian regulations and ensure reliable financial statements.",
    color: "from-accent to-[hsl(14,90%,60%)]"
  },
  {
    icon: Zap,
    title: "Business Advisory",
    description: "Strategic advice to examine proposed actions vis-à-vis the Indian regulatory environment and market dynamics.",
    color: "from-primary to-[hsl(200,90%,45%)]"
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Commercially sound tax advice and structuring services. Critical expertise for deal making and business optimization.",
    color: "from-accent to-[hsl(14,90%,60%)]"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive business solutions tailored for your success in the Indian market
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-300 border-border hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
