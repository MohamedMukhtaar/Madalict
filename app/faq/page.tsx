import type { Metadata } from "next";
import FaqTabs from "@/components/FaqTabs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to the most common questions about Madal ICT Solutions, our services, and ongoing support.",
};

export default function FaqPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <FaqTabs />
      <Footer />
    </main>
  );
}
