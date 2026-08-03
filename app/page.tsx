import AboutPreview from "@/components/AboutPreview";
import BlogPreview from "@/components/BlogPreview";
import ContactLinks from "@/components/ContactLinks";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TrustedCompanies from "@/components/TrustedCompanies";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <Hero />
      <AboutPreview />
      <Services limit={3} showCta />
      <Industries />
      <WhyChooseUs />
      <TrustedCompanies />
      <Testimonials />
      <BlogPreview limit={3} />
      <ContactLinks showContactCard={false} />
      <Footer />
    </main>
  );
}
