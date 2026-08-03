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
    heading: "Information we collect",
    paragraphs: [
      "We only collect what you choose to give us. This website does not require an account and does not ask for payment details.",
    ],
    bullets: [
      "Details you enter in the contact form: your name, company, email, phone number, selected service, and message",
      "Information you share directly with us by email, phone, or WhatsApp",
      "Project information you provide to us during an engagement",
    ],
  },
  {
    heading: "How the contact form works",
    paragraphs: [
      "Our contact form does not store your details on a server. When you submit it, the details you typed are composed into a message and opened in WhatsApp or your own email application. Nothing is sent until you press send there.",
      "This means your message travels through whichever service you choose to send it with, and that service's own privacy terms apply to it in transit.",
    ],
  },
  {
    heading: "How we use your information",
    bullets: [
      "To respond to your inquiry and discuss the work you are asking about",
      "To prepare proposals, estimates, and project documentation",
      "To deliver, support, and maintain services you have engaged us for",
      "To keep ordinary business records such as correspondence and invoices",
    ],
  },
  {
    heading: "What we do not do",
    bullets: [
      "We do not sell, rent, or trade your personal information",
      "We do not add you to marketing lists without you asking us to",
      "We do not share client project data with other clients",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: [
      "This website does not set advertising or tracking cookies. Your light or dark theme preference is stored locally in your own browser and is never transmitted to us.",
      "If we add analytics in future, we will update this page before doing so.",
    ],
  },
  {
    heading: "Third party services",
    paragraphs: [
      "Some parts of this site rely on external providers, such as the hosting platform that serves the website and the image and font services used to display it. These providers may process technical data such as your IP address in order to deliver content to your browser.",
      "Links to WhatsApp, email, and social platforms take you to services operated by other companies, each governed by their own privacy terms.",
    ],
  },
  {
    heading: "Data retention and security",
    paragraphs: [
      "We keep correspondence and project records for as long as we need them for the engagement and for normal business and accounting purposes, then remove them.",
      "We take reasonable technical and organizational care to protect information in our possession. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Write to ${contactDetails.email} and we will respond.`,
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If we change how we handle information, we will update this page and revise the date shown above.",
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
        intro={`This policy explains what ${contactDetails.companyName} does with the information you share through this website and during our work together.`}
        sections={sections}
      />
      <Footer />
    </main>
  );
}
