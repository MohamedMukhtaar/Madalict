import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import Navbar from "@/components/Navbar";
import { contactDetails } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that apply to using the Madal ICT Solutions website and to engaging us for design, development, and consulting work.",
};

const sections: LegalSection[] = [
  {
    heading: "1. Acceptance of Terms",
    paragraphs: [
      `By accessing ${contactDetails.companyName}' website and services, you agree to these Terms & Conditions.`,
    ],
  },
  {
    heading: "2. Services Provided",
    paragraphs: [
      `${contactDetails.companyName} offers a range of technology services, including ICT consulting, web development, mobile app development, and specialized software systems. Use of our services implies acceptance of the terms specific to each service.`,
    ],
  },
  {
    heading: "3. User Responsibilities",
    bullets: [
      "Compliance: Users must comply with all applicable laws.",
      "Account Security: Users are responsible for maintaining the confidentiality of their account details.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    paragraphs: [
      `All content, trademarks, and software provided by ${contactDetails.companyName} are the intellectual property of ${contactDetails.companyName}. Unauthorized use or reproduction is prohibited.`,
    ],
  },
  {
    heading: "5. Limitations of Liability",
    paragraphs: [
      `${contactDetails.companyName} is not liable for any indirect or consequential losses arising from the use of our services. We do not guarantee uninterrupted access to our website or services.`,
    ],
  },
  {
    heading: "6. Termination of Services",
    paragraphs: [
      `${contactDetails.companyName} reserves the right to suspend or terminate services to any user who breaches these Terms & Conditions or engages in unlawful conduct.`,
    ],
  },
  {
    heading: "7. Modifications to Terms",
    paragraphs: [
      `${contactDetails.companyName} may update these Terms & Conditions periodically. Continued use of our services constitutes acceptance of the updated terms.`,
    ],
  },
  {
    heading: "8. Governing Law",
    paragraphs: [
      "These terms are governed by the laws of Somalia, and any disputes will be subject to the exclusive jurisdiction of the courts in Somalia.",
    ],
  },
  {
    heading: "9. Contact Information",
    paragraphs: [
      `For questions regarding these Terms & Conditions, please reach out to ${contactDetails.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <LegalPage
        eyebrow="Terms"
        title="Terms & Conditions"
        intro={`These Terms & Conditions govern your use of the ${contactDetails.companyName} website and services.`}
        sections={sections}
      />
      <Footer />
    </main>
  );
}
