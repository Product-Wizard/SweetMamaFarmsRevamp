import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Gallery from "@/components/sections/Gallery";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Services />
        <WhyUs />
        <About />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
