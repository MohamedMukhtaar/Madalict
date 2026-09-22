import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import Navbar from "@/components/Navbar";
import { contactDetails } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Madal ICT Solutions handles the information you share through this website and during a project engagement.",
};

const sections: LegalSection[] = [
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect personal information that you provide to us such as your name, email address, and phone number when you submit a contact form or sign up for our newsletter. We also collect information about your visit to our website, including your IP address, browser type, and the pages you visit.",
    ],
  },
  {
    heading: "Use of Information",
    paragraphs: [
      "We use the information we collect to provide you with our services, respond to your inquiries, and send you marketing communications. We may also use your information to improve our website and to comply with legal obligations.",
    ],
  },
  {
    heading: "Protection of Information",
    paragraphs: [
      "We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We use industry-standard security measures such as SSL encryption to protect your data during transmission.",
    ],
  },
  {
    heading: "Disclosure of Information",
    paragraphs: [
      "We do not share your personal information with third parties except as required by law or as necessary to provide our services. We may share your information with our trusted partners who assist us in operating our website or providing our services.",
    ],
  },
  {
    heading: "Cookies",
    paragraphs: [
      "We use cookies and other similar technologies to collect information about your visit to our website. You may disable cookies in your browser settings, but please note that some features of our website may not function properly without cookies.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "You have the right to access, update, and delete your personal information. You may also object to our use of your personal information for marketing purposes. If you wish to exercise any of these rights, please contact us using the information below.",
    ],
  },
  {
    heading: "Updates to Privacy Policy",
    paragraphs: [
      "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website. You are advised to review this privacy policy periodically for any changes.",
    ],
  },
  {
    heading: "Contact Us",
    paragraphs: [
      `If you have any questions or concerns about this privacy policy or our use of your personal information, please contact us at ${contactDetails.email}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />
      <LegalPage
        eyebrow="Privacy"
        title="Privacy Policy"
        intro={`At ${contactDetails.companyName}, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information.`}
        sections={sections}
      />
      <Footer />
    </main>
  );
}
