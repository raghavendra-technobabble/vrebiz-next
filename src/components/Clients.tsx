const clients = [
  { name: "NVIDIA", industry: "Technology" },
  { name: "Microsoft", industry: "Technology" },
  { name: "SAP", industry: "Enterprise Software" },
  { name: "Adobe", industry: "Creative Software" },
  { name: "Salesforce", industry: "CRM Solutions" },
  { name: "Oracle", industry: "Enterprise Solutions" },
  { name: "IBM", industry: "Technology Services" },
  { name: "Cisco", industry: "Networking" },
  { name: "Intel", industry: "Semiconductors" },
  { name: "HP Enterprise", industry: "IT Infrastructure" },
  { name: "Dell Technologies", industry: "Computing" },
  { name: "Accenture", industry: "Consulting" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
            Trusted By Leaders
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            Partnerships that
            <span className="block font-semibold">drive excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Working with global enterprises across 50+ countries to unlock their potential in India.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group bg-background p-8 hover:bg-background transition-all duration-300 animate-fade-in flex flex-col justify-center items-center text-center min-h-[160px]"
              style={{ animationDelay: `${index * 0.03}s`, animationFillMode: 'both' }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {client.name}
              </h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {client.industry}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-light text-foreground mb-2">200+</div>
              <div className="uppercase tracking-wider">Clients Worldwide</div>
            </div>
            <div className="w-[1px] h-12 bg-border" />
            <div className="flex flex-col items-center">
              <div className="text-4xl font-light text-foreground mb-2">50+</div>
              <div className="uppercase tracking-wider">Countries Served</div>
            </div>
            <div className="w-[1px] h-12 bg-border" />
            <div className="flex flex-col items-center">
              <div className="text-4xl font-light text-foreground mb-2">10+</div>
              <div className="uppercase tracking-wider">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
