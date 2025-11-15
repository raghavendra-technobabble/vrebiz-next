import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Digital Transformation",
    description: "Modernize your finance and HR operations with cutting-edge Zoho solutions. Streamline processes and unlock new efficiencies.",
  },
  {
    title: "India Entry Strategy",
    description: "Navigate the complexities of the Indian market with expert guidance. From setup to compliance, we handle everything.",
  },
  {
    title: "Virtual CFO Services",
    description: "Access world-class financial leadership without the overhead. Strategic CFO expertise for growing businesses.",
  },
  {
    title: "Assurance & Compliance",
    description: "Stay compliant with Indian regulations. Reliable risk management and financial statement assurance.",
  },
  {
    title: "Business Advisory",
    description: "Strategic insights aligned with the Indian regulatory landscape. Expert guidance for critical decisions.",
  },
  {
    title: "Tax Planning",
    description: "Optimize your tax structure with commercially sound advice. Essential for effective deal-making.",
  },
];

const MinimalServices = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-24 animate-fade-in-up">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Comprehensive solutions for
            <span className="block font-semibold">global success</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-background p-12 hover:bg-secondary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalServices;
