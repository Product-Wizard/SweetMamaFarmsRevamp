import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import WhyUs from "@/components/sections/WhyUs";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <About />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
