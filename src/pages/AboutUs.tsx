import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalAbout from "@/components/MinimalAbout";
import MinimalFooter from "@/components/MinimalFooter";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalNavbar />
      <div className="pt-16">
        <MinimalAbout />
      </div>
      <MinimalFooter />
    </div>
  );
};

export default AboutUs;
