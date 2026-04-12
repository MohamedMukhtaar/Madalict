import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Madal ICT Solutions, our mission, delivery style, and the organizations we support.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
