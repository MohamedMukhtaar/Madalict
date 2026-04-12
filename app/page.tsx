import AboutPreview from "@/components/AboutPreview";
import BlogPreview from "@/components/BlogPreview";
import ContactLinks from "@/components/ContactLinks";
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
      <AboutPreview />
      <Services limit={3} showCta />
      <TrustedCompanies />
      <BlogPreview limit={3} />
      <Testimonials />
      <ContactLinks showContactCard={false} />
      <Footer />
    </main>
  );
}
