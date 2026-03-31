import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustedCompanies from "@/components/TrustedCompanies";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <TrustedCompanies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
