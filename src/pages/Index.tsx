import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import UrnsSwiper from "@/components/UrnsSwiper";
import About from "@/components/About";
import Fares from "@/components/Fares";
import Schedules from "@/components/Schedules";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Header />
      <Services />
      <UrnsSwiper />
      <Fares />
      <Schedules />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
