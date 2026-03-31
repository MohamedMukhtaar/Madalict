export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  category: string;
};

export type Company = {
  name: string;
  industry: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "45+", label: "Happy Customers" },
  { value: "2+", label: "Years of Experience" },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Responsive corporate websites, portals, and platforms built for performance, trust, and growth.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that help businesses serve customers and teams on the go.",
  },
  {
    title: "UI/UX Design",
    description:
      "Clear, modern interfaces with intuitive journeys that improve usability and strengthen brand perception.",
  },
  {
    title: "Custom Business Systems",
    description:
      "Operational systems tailored to your workflows, from administration to service delivery and reporting.",
  },
  {
    title: "Database Solutions",
    description:
      "Reliable data architecture, optimization, and management for secure and scalable business operations.",
  },
  {
    title: "IT Consulting",
    description:
      "Practical technology guidance for digital transformation, infrastructure planning, and process improvement.",
  },
];

export const projects: Project[] = [
  {
    title: "University Management System",
    description:
      "An academic operations platform covering admissions, student records, departments, and reporting.",
    category: "Education Tech",
  },
  {
    title: "Business Website Platform",
    description:
      "A scalable corporate web platform designed to strengthen visibility, engagement, and lead generation.",
    category: "Web Platform",
  },
  {
    title: "SMS Communication System",
    description:
      "A smart bulk messaging and alerts system for announcements, reminders, and customer communication.",
    category: "Communications",
  },
  {
    title: "Inventory and Accounting System",
    description:
      "A centralized solution for stock control, invoicing, purchase tracking, and financial insights.",
    category: "Business Operations",
  },
  {
    title: "Complaint Management System",
    description:
      "A digital case tracking workflow that improves customer issue resolution and accountability.",
    category: "Customer Service",
  },
];

export const trustedCompanies: Company[] = [
  { name: "Somali Horizon Group", industry: "Enterprise Services" },
  { name: "BlueWave University", industry: "Education" },
  { name: "Noble Trade Hub", industry: "Commerce" },
  { name: "Crescent Health Network", industry: "Healthcare" },
  { name: "Aqoon Digital Agency", industry: "Media" },
  { name: "UrbanLine Logistics", industry: "Logistics" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Sabirin Abdi",
    role: "Operations Director",
    company: "BlueWave University",
    quote:
      "Madal ICT Solutions helped us modernize our workflows with a system that is practical, reliable, and easy for our team to use.",
  },
  {
    name: "Mohamed Mukhtar",
    role: "Head Of Developers",
    company: "Noble Trade Hub",
    quote:
      "Their team understood our business quickly and delivered a polished platform that improved both our internal efficiency and public presence.",
  },
  {
    name: "Muscab Bashiir",
    role: "Manager",
    company: "Crescent Health Network",
    quote:
      "From design to deployment, the experience felt professional throughout. Communication was clear and the final product exceeded expectations.",
  },
];

export const quickLinks = navItems;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MohamedMokhtaar" },
  { label: "Facebook", href: "https://facebook.com/madalictsolutions" },
  { label: "WhatsApp", href: "https://wa.me/615843794" },
  { label: "X", href: "https://x.com/madalict" },
  { label: "TikTok", href: "https://www.tiktok.com/@madalictsolutions" },
  { label: "Gmail", href: "mailto:info@madalictsolutions.com" },
];

export const contactDetails = {
  companyName: "Madal ICT Solutions",
  email: "info@madalictsolutions.com",
  phone: "+252 615 843 794",
  location: "Mogadishu, Somalia",
};