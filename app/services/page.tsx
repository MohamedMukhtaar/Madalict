import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Madal ICT services including websites, custom systems, apps, design, data analysis, and IT consulting.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <PageIntro
        eyebrow="Services"
        title="Detailed ICT services designed to feel polished and dependable"
        description="Every offer connects a practical business result to the way we deliver it, so visitors know exactly what to expect."
      />
      <Services />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
