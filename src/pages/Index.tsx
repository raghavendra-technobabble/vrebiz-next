import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalHero from "@/components/MinimalHero";
import MinimalServices from "@/components/MinimalServices";
import Clients from "@/components/Clients";
import MinimalAbout from "@/components/MinimalAbout";
import Testimonials from "@/components/Testimonials";
import MinimalContact from "@/components/MinimalContact";
import MinimalFooter from "@/components/MinimalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalNavbar />
      <MinimalHero />
      <MinimalServices />
      <Clients />
      <MinimalAbout />
      <Testimonials />
      <MinimalContact />
      <MinimalFooter />
    </div>
  );
};

export default Index;
