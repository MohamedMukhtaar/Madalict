import type { Metadata } from "next";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Madal ICT insights about websites, systems, UX, mobile apps, and practical digital transformation.",
};

export default function BlogPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageIntro
        eyebrow="Blog"
        title="Useful digital insights, written with a cleaner brand voice"
        description="This page gives the website a more complete and confident presence, helping it feel like a real company platform instead of a rushed landing page."
      />
      <BlogPreview />
      <Footer />
    </main>
  );
}
