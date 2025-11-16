import MinimalNavbar from "@/components/MinimalNavbar";
import MinimalServices from "@/components/MinimalServices";
import MinimalFooter from "@/components/MinimalFooter";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalNavbar />
      <div className="pt-16">
        <MinimalServices />
      </div>
      <MinimalFooter />
    </div>
  );
};

export default Services;
