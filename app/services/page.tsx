import type { Metadata } from "next";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Madal ICT services including websites, custom systems, apps, design, databases, and IT consulting.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageIntro
        eyebrow="Services"
        title="Detailed ICT services designed to feel polished and dependable"
        description="The Services page now carries the project examples as well, so visitors can connect each offer to a practical business result without feeling lost."
        showLogo
      />
      <Services />
      <FeaturedWork />
      <Footer />
    </main>
  );
}
