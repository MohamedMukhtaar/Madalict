import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import Navbar from "@/components/Navbar";
import { contactDetails } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to using the Madal ICT Solutions website and to engaging us for design, development, and consulting work.",
};

const sections: LegalSection[] = [
  {
    heading: "Using this website",
    paragraphs: [
      "You are welcome to browse this website and contact us about your project. By using the site you agree to use it lawfully and not to attempt to disrupt, damage, or gain unauthorized access to it.",
    ],
  },
  {
    heading: "Information on this site",
    paragraphs: [
      "We keep the content here accurate and current, but it is provided for general information. Service descriptions, timelines, and figures are indicative rather than a binding offer.",
      "Statistics, sample projects, and client profiles shown on this website are illustrative of the kind of work we do and the sectors we support. Nothing on this site should be treated as a guarantee of a particular result.",
    ],
  },
  {
    heading: "Project engagements",
    paragraphs: [
      "Any work we undertake for you is governed by a separate written agreement covering scope, deliverables, timeline, fees, and payment terms. Where that agreement differs from anything on this website, the agreement takes precedence.",
    ],
    bullets: [
      "Scope, milestones, and pricing are confirmed in writing before work begins",
      "Changes to agreed scope are quoted and approved before they are built",
      "Timelines assume agreed review turnaround and timely access to content and systems",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      `The Madal ICT Solutions name, logo, and the design and content of this website belong to ${contactDetails.companyName} unless stated otherwise. Please do not reproduce them without permission.`,
      "For client work, ownership of the delivered product transfers to you on full payment, as set out in your project agreement. We retain rights to our own underlying tools, libraries, and general know-how, and to third party components under their own licences.",
    ],
  },
  {
    heading: "Confidentiality",
    paragraphs: [
      "We treat business information you share with us during an engagement as confidential and use it only to deliver the work. We ask the same of you regarding our proposals and technical documentation.",
    ],
  },
  {
    heading: "Third party links and services",
    paragraphs: [
      "This site links to external platforms such as WhatsApp, email, and social networks. We do not control those services and are not responsible for their content, availability, or terms.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this website. Liability relating to project work is addressed in the written agreement for that project.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      `${contactDetails.companyName} operates from ${contactDetails.location}. These terms and any project agreement are governed by the laws applicable there, unless we agree otherwise in writing.`,
    ],
  },
  {
    heading: "Changes to these terms",
    paragraphs: [
      "We may update these terms from time to time. The version published here, with the date shown above, is the one that applies.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <LegalPage
        eyebrow="Terms"
        title="Terms of Service"
        intro={`These terms cover your use of this website and the basis on which ${contactDetails.companyName} takes on design, development, and consulting work.`}
        sections={sections}
      />
      <Footer />
    </main>
  );
}
