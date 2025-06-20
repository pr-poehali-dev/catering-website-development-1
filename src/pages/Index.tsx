import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickOrder from "@/components/QuickOrder";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <QuickOrder />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
