export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  deliverables: string[];
};

export type Project = {
  title: string;
  description: string;
  category: string;
  service: string;
  result: string;
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

export type TrendHighlight = {
  title: string;
  description: string;
  stat: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const heroStats = [
  { value: "120+", label: "Projects Completed" },
  { value: "45+", label: "Happy Customers" },
  { value: "2+", label: "Years of Experience" },
];

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Responsive corporate websites, portals, and growth-focused platforms built for credibility, speed, and lead generation.",
    summary:
      "We design and build websites that present your business clearly, convert visitors into inquiries, and feel strong across mobile and desktop.",
    image: "/pexels-pixabay-39559.jpg",
    deliverables: ["Corporate websites", "Client portals", "SEO-ready landing pages"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps that help businesses serve customers, automate field work, and stay connected on the move.",
    summary:
      "From staff tools to customer apps, we create mobile experiences that are practical, reliable, and easy to scale.",
    image: "/marketing-creative-collage-with-phone.jpg",
    deliverables: ["Android and iOS apps", "Admin dashboards", "Realtime notifications"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clear product strategy, interface systems, and user journeys that make digital services feel easy and professional.",
    summary:
      "We turn complex workflows into interfaces people can understand quickly, reducing friction and increasing confidence.",
    image: "/3d-rendering-website-hosting-concept.jpg",
    deliverables: ["Wireframes", "Design systems", "Clickable prototypes"],
  },
  {
    slug: "custom-business-systems",
    title: "Custom Business Systems",
    description:
      "Operational systems tailored to your workflows, from administration and approvals to service delivery and reporting.",
    summary:
      "We replace manual spreadsheets and fragmented tools with systems shaped around the way your team actually works.",
    image: "/pexels-dumitru-b-742240889-32944547.jpg",
    deliverables: ["ERP-style workflows", "Role-based dashboards", "Approval pipelines"],
  },
  {
    slug: "database-solutions",
    title: "Database Solutions",
    description:
      "Secure data architecture, optimization, and management for dependable reporting and scalable business operations.",
    summary:
      "Your systems are only as strong as the data underneath them, so we build clean, stable, and maintainable data layers.",
    image: "/pexels-n-voitkevich-6214477.jpg",
    deliverables: ["Database design", "Performance tuning", "Backup planning"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    description:
      "Practical technology guidance for digital transformation, infrastructure planning, and product roadmaps.",
    summary:
      "We help organizations make better technology decisions with clear recommendations, realistic phases, and measurable outcomes.",
    image: "/empowered-business-woman-working-city.jpg",
    deliverables: ["Technology audits", "Roadmaps", "Implementation guidance"],
  },
];

export const projects: Project[] = [
  {
    title: "University Management System",
    description:
      "An academic operations platform covering admissions, student records, departments, results, and reporting.",
    category: "Education Tech",
    service: "Custom Business Systems",
    result: "Centralized academic workflows and reduced manual follow-up across departments.",
  },
  {
    title: "Business Website Platform",
    description:
      "A scalable corporate web platform designed to strengthen visibility, engagement, and lead generation.",
    category: "Web Platform",
    service: "Web Development",
    result: "Sharper online presence with a clearer customer journey and stronger inquiry conversion.",
  },
  {
    title: "SMS Communication System",
    description:
      "A smart bulk messaging and alerts system for announcements, reminders, and customer communication.",
    category: "Communications",
    service: "Mobile App Development",
    result: "Faster outreach for time-sensitive updates and automated reminders.",
  },
  {
    title: "Inventory and Accounting System",
    description:
      "A centralized solution for stock control, invoicing, purchase tracking, and financial visibility.",
    category: "Business Operations",
    service: "Database Solutions",
    result: "More accurate records and easier day-to-day operational reporting.",
  },
  {
    title: "Complaint Management System",
    description:
      "A digital case tracking workflow that improves customer issue resolution and accountability.",
    category: "Customer Service",
    service: "IT Consulting",
    result: "Better case visibility, ownership, and response times across support teams.",
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

export const trendHighlights: TrendHighlight[] = [
  {
    title: "A sharper digital front door",
    description:
      "Organizations now expect their website to handle trust, inquiries, product clarity, and early qualification instead of acting like a static brochure.",
    stat: "71% stronger first impression",
    image: "/3d-rendering-website-hosting-concept.jpg",
  },
  {
    title: "Mobile-led service delivery",
    description:
      "More businesses are serving teams and customers through mobile-first tools that reduce waiting, confusion, and repeated manual calls.",
    stat: "3x more mobile actions",
    image: "/marketing-creative-collage-with-phone.jpg",
  },
  {
    title: "Operational calm through automation",
    description:
      "The best systems are removing repetitive admin work while keeping visibility, approvals, and reporting clean for management.",
    stat: "62% less manual follow-up",
    image: "/pexels-n-voitkevich-6214477.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-modern-web-platforms-win-trust",
    title: "Why Modern Web Platforms Win Trust Faster",
    excerpt:
      "A polished website shapes perception before a sales call ever happens, making clarity and credibility part of your growth engine.",
    category: "Growth",
    date: "April 6, 2026",
    readTime: "5 min read",
    image: "/pexels-pixabay-39559.jpg",
  },
  {
    slug: "building-systems-around-real-workflows",
    title: "Building Systems Around Real Workflows",
    excerpt:
      "The strongest internal tools are built around approvals, reporting lines, and the reality of how teams already operate day to day.",
    category: "Systems",
    date: "April 6, 2026",
    readTime: "6 min read",
    image: "/pexels-dumitru-b-742240889-32944547.jpg",
  },
  {
    slug: "designing-mobile-tools-for-real-teams",
    title: "Designing Mobile Tools for Real Teams",
    excerpt:
      "Field teams and office teams need the same system to feel light, fast, and dependable, even when their daily contexts are very different.",
    category: "Mobile",
    date: "April 6, 2026",
    readTime: "4 min read",
    image: "/empowered-business-woman-working-city.jpg",
  },
];

export const quickLinks = navItems;

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/MohamedMokhtaar" },
  { label: "Facebook", href: "https://facebook.com/madalictsolutions" },
  { label: "WhatsApp", href: "https://wa.me/252614620998" },
  { label: "X", href: "https://x.com/madalict" },
  { label: "TikTok", href: "https://www.tiktok.com/@madal.ict?_r=1&_t=ZS-95KrxSNt8pW" },
  { label: "Gmail", href: "mailto:madalictsolutions@gmail.com" },
];

export const contactDetails = {
  companyName: "Madal ICT Solutions",
  email: "madalictsolutions@gmail.com",
  phone: "0614620998",
  location: "Mogadishu, Somalia",
};
