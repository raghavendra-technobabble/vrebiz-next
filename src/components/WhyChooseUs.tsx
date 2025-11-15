import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Clock } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Customized strategies designed specifically for your business needs and goals in the Indian market."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "A perfect blend of young talent and experienced professionals bringing fresh perspectives and deep expertise."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over a decade of successful partnerships with companies across 50+ countries worldwide."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Cost-efficient, high-quality services delivered on time, every time. Your success is our priority."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">VR-eBiz</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Partner with us for unparalleled expertise and commitment to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border bg-card hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
