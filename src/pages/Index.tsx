import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesWithImages from "@/components/ServicesWithImages";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesWithImages />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
