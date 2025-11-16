import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "VR e-Biz Solutions Private Limited transformed our India entry strategy. Their deep understanding of local regulations and business culture was invaluable. We went from concept to operations in record time.",
    author: "Sarah Chen",
    role: "VP of International Operations",
    company: "Tech Global Inc."
  },
  {
    quote: "The Virtual CFO services provided by VR e-Biz have been game-changing for our startup. We get Fortune 500-level financial expertise without the overhead. Highly recommended.",
    author: "Rajesh Kumar",
    role: "Founder & CEO",
    company: "InnovateTech Solutions"
  },
  {
    quote: "Working with VR-eBiz on our digital transformation journey has been exceptional. Their Zoho implementation expertise helped us streamline operations and reduce costs by 40%.",
    author: "Michael Torres",
    role: "CFO",
    company: "NVIDIA India"
  },
  {
    quote: "Their tax planning and advisory services saved us significant resources during our expansion. The team's responsiveness and expertise are unmatched in the industry.",
    author: "Priya Sharma",
    role: "Director of Finance",
    company: "Global Enterprise Solutions"
  },
  {
    quote: "VR-eBiz doesn't just provide services—they become true partners in your success. Their commitment to excellence and attention to detail set them apart.",
    author: "David Anderson",
    role: "Managing Director",
    company: "Accenture India"
  },
  {
    quote: "The assurance and compliance services from VR-eBiz give us complete confidence. They keep us ahead of regulatory changes and ensure we're always compliant.",
    author: "Anita Desai",
    role: "Chief Compliance Officer",
    company: "Microsoft India"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20 animate-fade-in-up">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-medium">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
            What our clients
            <span className="block font-semibold">say about us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 border-border hover:border-foreground/20 transition-all duration-300 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <Quote className="h-8 w-8 text-muted-foreground/30 mb-6" />
              <p className="text-foreground/90 mb-8 leading-relaxed font-light">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-6">
                <div className="font-medium text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground mt-1">{testimonial.role}</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
