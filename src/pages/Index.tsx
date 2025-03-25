import NavBar from "@/components/NavBar";
import Hero from "@/components/Header";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
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
      <Process />
      <Fares />
      <Schedules />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
