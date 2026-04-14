import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Madal ICT Solutions to discuss websites, systems, mobile apps, and ICT consulting.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
