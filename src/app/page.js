
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Stats from "@/components/stats/Stats";
import About from "@/components/about/About";
import ServiceAreas from "@/components/serviceAreas/ServiceAreas";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";
import Faq from "@/components/faq/Faq";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";


export default function Home() {


  return (
    <main>

      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <ServiceAreas />
      <Testimonials />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
