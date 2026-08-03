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
  /** Omitted where we do not have the person's confirmed job title. */
  role?: string;
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

/**
 * Photography in public/photos: sourced from Unsplash (free for commercial use,
 * no attribution required), centre-cropped to each slot's aspect ratio and
 * encoded as WebP. All ten together are under 1 MB.
 *
 * The matching SVG illustration set is still in public/illustrations if you
 * prefer drawn artwork for any slot — swap the path and nothing else changes.
 */
const art = {
  web: "/photos/web-development.webp",
  mobile: "/photos/mobile-app-development.webp",
  design: "/photos/ui-ux-design.webp",
  operations: "/photos/custom-business-systems.webp",
  database: "/photos/database-solutions.webp",
  consulting: "/photos/it-consulting.webp",
  dashboard: "/photos/hero.webp",
  blogTrust: "/photos/blog-trust.webp",
  blogWorkflows: "/photos/blog-workflows.webp",
  blogMobile: "/photos/blog-mobile-teams.webp",
  // Not rendered today: the second and third trend cards are text only.
  mobileTrend: "/illustrations/mobile-trend.svg",
  automation: "/illustrations/automation-trend.svg",
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Responsive corporate websites, portals, and growth-focused platforms built for credibility, speed, and lead generation.",
    summary:
      "We design and build websites that present your business clearly, convert visitors into inquiries, and feel strong across mobile and desktop.",
    image: art.web,
    deliverables: ["Corporate websites", "Client portals", "SEO-ready landing pages"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps that help businesses serve customers, automate field work, and stay connected on the move.",
    summary:
      "From staff tools to customer apps, we create mobile experiences that are practical, reliable, and easy to scale.",
    image: art.mobile,
    deliverables: ["Android and iOS apps", "Admin dashboards", "Realtime notifications"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Clear product strategy, interface systems, and user journeys that make digital services feel easy and professional.",
    summary:
      "We turn complex workflows into interfaces people can understand quickly, reducing friction and increasing confidence.",
    image: art.design,
    deliverables: ["Wireframes", "Design systems", "Clickable prototypes"],
  },
  {
    slug: "custom-business-systems",
    title: "Custom Business Systems",
    description:
      "Operational systems tailored to your workflows, from administration and approvals to service delivery and reporting.",
    summary:
      "We replace manual spreadsheets and fragmented tools with systems shaped around the way your team actually works.",
    image: art.operations,
    deliverables: ["ERP-style workflows", "Role-based dashboards", "Approval pipelines"],
  },
  {
    slug: "database-solutions",
    title: "Database Solutions",
    description:
      "Secure data architecture, optimization, and management for dependable reporting and scalable business operations.",
    summary:
      "Your systems are only as strong as the data underneath them, so we build clean, stable, and maintainable data layers.",
    image: art.database,
    deliverables: ["Database design", "Performance tuning", "Backup planning"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    description:
      "Practical technology guidance for digital transformation, infrastructure planning, and product roadmaps.",
    summary:
      "We help organizations make better technology decisions with clear recommendations, realistic phases, and measurable outcomes.",
    image: art.consulting,
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
  { name: "Dubai Collection", industry: "Retail" },
  { name: "Isfahan Clothes", industry: "Clothing" },
  { name: "Isfahan Men Clothes", industry: "Clothing" },
];

/**
 * DRAFT WORDING. The names and companies below are real clients, but the quotes
 * were written for the site and have not been said by these people. Get each
 * person's approval, or replace the text with their own words, before publishing.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Shukri",
    role: "Owner",
    company: "Dubai Collection",
    quote:
      "Madal ICT understood how our shop actually runs before suggesting anything. What they built fits our daily work instead of forcing us to change it.",
  },
  {
    name: "Shariifo Ali",
    role: "CEO",
    company: "Isfahan Clothes",
    quote:
      "The work was clear from start to finish. They explained each step in plain language and delivered something our team could use straight away.",
  },
  {
    name: "Geela",
    role: "CEO",
    company: "Isfahan Men Clothes",
    quote:
      "Our customers notice the difference and our records are far easier to keep. Support after launch has been quick and dependable.",
  },
];

/** Sectors we serve, from the company profile. */
export const industries = [
  {
    title: "Retail",
    description: "Digital solutions that improve sales, inventory, and customer experience.",
    icon: "retail",
  },
  {
    title: "Healthcare",
    description: "Technology that supports efficient operations and better patient services.",
    icon: "health",
  },
  {
    title: "Education",
    description: "Modern digital tools that enhance learning and institutional management.",
    icon: "education",
  },
  {
    title: "Small & Medium Businesses",
    description: "Scalable digital solutions designed to help growing businesses succeed.",
    icon: "business",
  },
];

/** Why clients stay with us, from the company profile. */
export const whyChooseUs = [
  {
    title: "Customer-centred approach",
    description:
      "We start from your goals and the way your team already works, not from a template we want to reuse.",
    icon: "people",
  },
  {
    title: "Reliable partnership",
    description:
      "We believe long-term relationships are built on trust, transparency, and consistent support.",
    icon: "shield",
  },
  {
    title: "Quality delivery",
    description:
      "Every solution is developed with professionalism, attention to detail, and a commitment to excellence.",
    icon: "award",
  },
  {
    title: "Continuous support",
    description:
      "Our partnership continues beyond project delivery with ongoing technical support and guidance.",
    icon: "support",
  },
];

export const trendHighlights: TrendHighlight[] = [
  {
    title: "A sharper digital front door",
    description:
      "Organizations now expect their website to handle trust, inquiries, product clarity, and early qualification instead of acting like a static brochure.",
    stat: "71% stronger first impression",
    image: art.dashboard,
  },
  {
    title: "Mobile-led service delivery",
    description:
      "More businesses are serving teams and customers through mobile-first tools that reduce waiting, confusion, and repeated manual calls.",
    stat: "3x more mobile actions",
    image: art.mobileTrend,
  },
  {
    title: "Operational calm through automation",
    description:
      "The best systems are removing repetitive admin work while keeping visibility, approvals, and reporting clean for management.",
    stat: "62% less manual follow-up",
    image: art.automation,
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
    image: art.blogTrust,
  },
  {
    slug: "building-systems-around-real-workflows",
    title: "Building Systems Around Real Workflows",
    excerpt:
      "The strongest internal tools are built around approvals, reporting lines, and the reality of how teams already operate day to day.",
    category: "Systems",
    date: "April 6, 2026",
    readTime: "6 min read",
    image: art.blogWorkflows,
  },
  {
    slug: "designing-mobile-tools-for-real-teams",
    title: "Designing Mobile Tools for Real Teams",
    excerpt:
      "Field teams and office teams need the same system to feel light, fast, and dependable, even when their daily contexts are very different.",
    category: "Mobile",
    date: "April 6, 2026",
    readTime: "4 min read",
    image: art.blogMobile,
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
  phoneHref: "+252614620998",
  whatsappNumber: "252614620998",
  location: "Mogadishu, Somalia",
};

export type ServiceDetail = {
  tagline: string;
  overview: string[];
  outcomes: string[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
};

export const deliveryProcess = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business, your team, and the workflow you already rely on before proposing anything technical.",
  },
  {
    title: "Design",
    description:
      "We map the structure, screens, and journeys so everyone can see the shape of the solution before development begins.",
  },
  {
    title: "Build",
    description:
      "We develop in reviewable stages, so you see working progress early instead of waiting until the very end.",
  },
  {
    title: "Launch and support",
    description:
      "We handle deployment, train your team, and stay available for adjustments once the solution meets real users.",
  },
];

export const serviceDetails: Record<string, ServiceDetail> = {
  "web-development": {
    tagline: "Websites that earn trust before your first conversation",
    overview: [
      "Most people judge a business by its website long before anyone picks up the phone. We build corporate sites and platforms that make that first impression work in your favour: clear positioning, fast loading, and a structure that guides visitors toward an inquiry.",
      "Every site we deliver is responsive by default, easy for your team to update, and built on foundations that stay maintainable as your organization grows.",
    ],
    outcomes: [
      "A credible online presence that matches the quality of your work",
      "Faster load times and a smoother experience on mobile connections",
      "Clear calls to action that turn visitors into real inquiries",
      "A content structure your team can keep current without a developer",
    ],
    idealFor: [
      "Companies whose current site no longer reflects the business",
      "Organizations launching a new brand or service line",
      "Teams that need a proper platform instead of a single-page brochure",
    ],
    faqs: [
      {
        question: "How long does a typical website take?",
        answer:
          "A focused corporate site usually takes three to six weeks from discovery to launch, depending on how much content is ready and how many rounds of review you need.",
      },
      {
        question: "Can we update the content ourselves?",
        answer:
          "Yes. We set up the content structure so your team can edit text, images, and pages without touching code, and we train you on it before handover.",
      },
    ],
  },
  "mobile-app-development": {
    tagline: "Mobile tools your team and customers will actually open",
    overview: [
      "A mobile app only earns its place if it removes friction. We build cross-platform apps for the practical cases that matter: field teams capturing work on site, customers checking status without calling, staff approving requests between meetings.",
      "We design for real conditions, including patchy connectivity and older devices, so the app stays dependable outside the office.",
    ],
    outcomes: [
      "One codebase serving both Android and iOS users",
      "Fewer phone calls and status-chasing messages for your staff",
      "Realtime notifications that keep people moving on time",
      "An admin dashboard so managers keep full visibility",
    ],
    idealFor: [
      "Businesses with staff working away from a desk",
      "Services where customers currently call to check status",
      "Teams replacing paper forms or WhatsApp-based reporting",
    ],
    faqs: [
      {
        question: "Do we need separate Android and iOS builds?",
        answer:
          "No. We build cross-platform, so a single project produces both apps. That keeps cost and future maintenance considerably lower.",
      },
      {
        question: "Can the app work with poor connectivity?",
        answer:
          "Yes. Where the workflow needs it, we design for offline capture and sync data once the connection returns.",
      },
    ],
  },
  "ui-ux-design": {
    tagline: "Interfaces that make complicated work feel simple",
    overview: [
      "Good design is not decoration. It is the difference between staff who need training for every task and staff who understand a screen the moment they open it. We turn complex workflows into interfaces that feel obvious.",
      "We work through wireframes and clickable prototypes first, so decisions get made while they are still cheap to change.",
    ],
    outcomes: [
      "Shorter onboarding time for new staff",
      "Fewer support requests caused by confusing screens",
      "A design system that keeps future features consistent",
      "Prototypes you can test with real users before development",
    ],
    idealFor: [
      "Products where users regularly get stuck or make errors",
      "Teams planning a rebuild and wanting to get structure right first",
      "Organizations with several tools that all look and behave differently",
    ],
    faqs: [
      {
        question: "Can you improve an existing product without a full rebuild?",
        answer:
          "Often, yes. We review the current experience, identify the highest-friction points, and propose targeted changes that fit your existing build.",
      },
      {
        question: "Do you test designs with real users?",
        answer:
          "Where the project allows it, yes. A clickable prototype in front of five real users usually reveals more than weeks of internal debate.",
      },
    ],
  },
  "custom-business-systems": {
    tagline: "Systems shaped around how your team already works",
    overview: [
      "Off-the-shelf software asks your organization to change its process. A custom system does the opposite. We build operational platforms around your actual approval chains, reporting lines, and service delivery steps.",
      "The result replaces scattered spreadsheets and duplicated data entry with one place where work is recorded, approved, and reported.",
    ],
    outcomes: [
      "One source of truth instead of competing spreadsheets",
      "Approval chains that match your real reporting structure",
      "Role-based access so people see exactly what they should",
      "Management reporting available without manual compilation",
    ],
    idealFor: [
      "Organizations running critical operations on spreadsheets",
      "Teams where approvals get lost between departments",
      "Institutions needing reporting that is currently assembled by hand",
    ],
    faqs: [
      {
        question: "Can it connect to systems we already use?",
        answer:
          "In most cases yes. We review what you have during discovery and plan integrations or data migration as part of the build.",
      },
      {
        question: "What happens when our process changes?",
        answer:
          "We build with change in mind. Roles, workflow steps, and approval rules are configurable rather than hard-coded wherever it is practical.",
      },
    ],
  },
  "database-solutions": {
    tagline: "Clean data foundations your reporting can depend on",
    overview: [
      "Every system is only as trustworthy as the data underneath it. We design, tune, and maintain data layers so your reports agree with each other and your platform stays fast as records grow.",
      "This covers new database design as well as rescuing existing systems that have become slow, inconsistent, or risky to back up.",
    ],
    outcomes: [
      "Reports that reconcile instead of contradicting each other",
      "Query performance that holds up as data volume grows",
      "A tested backup and recovery plan, not an assumed one",
      "Clear documentation of how your data is structured",
    ],
    idealFor: [
      "Systems that have slowed down as records accumulated",
      "Organizations unsure whether their backups actually restore",
      "Teams planning a new platform and wanting the data model right first",
    ],
    faqs: [
      {
        question: "Can you work with our existing database?",
        answer:
          "Yes. We audit the current structure and performance, then recommend whether tuning, restructuring, or migration is the right call.",
      },
      {
        question: "Do you handle data migration?",
        answer:
          "Yes, including cleaning and validating records so you do not carry old inconsistencies into a new system.",
      },
    ],
  },
  "it-consulting": {
    tagline: "Straight technology advice, without the sales pitch",
    overview: [
      "Technology decisions are expensive to reverse. We help organizations think through infrastructure, platform choices, and digital roadmaps before committing budget, with recommendations written in plain language for decision-makers.",
      "We are equally willing to tell you that a smaller change will do. The goal is a realistic plan you can actually fund and deliver.",
    ],
    outcomes: [
      "A clear picture of what you have and where the risks sit",
      "A phased roadmap matched to your budget and capacity",
      "Recommendations your board or management can act on",
      "Independent guidance during vendor selection",
    ],
    idealFor: [
      "Organizations planning a digital transformation programme",
      "Management teams weighing build-versus-buy decisions",
      "Institutions needing an independent review before investing",
    ],
    faqs: [
      {
        question: "Do you only recommend work you would deliver yourselves?",
        answer:
          "No. If the right answer is an existing product or another provider, we say so. Our value is the advice, not forcing a project.",
      },
      {
        question: "How is a consulting engagement structured?",
        answer:
          "Typically a short assessment phase, followed by a written roadmap and a working session with your team to agree priorities.",
      },
    ],
  },
};

export type BlogContent = {
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  takeaways: string[];
};

export const blogContent: Record<string, BlogContent> = {
  "why-modern-web-platforms-win-trust": {
    intro:
      "Long before a prospect speaks to anyone on your team, they have already formed an opinion. They found your website, spent a few seconds scanning it, and decided whether you look like an organization worth the risk. That judgement happens fast, and it is rarely revisited.",
    sections: [
      {
        heading: "Credibility is assessed in seconds",
        paragraphs: [
          "Visitors do not read a homepage the way we hope they will. They scan for signals: does this look current, does it load quickly on my phone, does it explain what the company actually does, and does anyone appear to be maintaining it.",
          "A site that stalls on a mobile connection or still carries last year's messaging tells a story about how the business runs. Fairly or not, people generalize from the website to the organization behind it.",
        ],
      },
      {
        heading: "Clarity beats cleverness",
        paragraphs: [
          "The most common problem we see is not ugly design. It is vagueness. Pages full of ambitious language that never state plainly what is offered, to whom, and what happens next.",
          "Naming your services in ordinary words, showing the kind of work you have done, and making the next step obvious will outperform an elegant site that leaves visitors guessing.",
        ],
      },
      {
        heading: "The website is part of the sales process",
        paragraphs: [
          "A well-structured site does real work before a conversation starts. It answers the routine questions, sets expectations about scope, and filters out enquiries that were never going to fit.",
          "That means your team spends its time on conversations that are already halfway qualified, instead of explaining the basics again on every call.",
        ],
      },
    ],
    takeaways: [
      "First impressions are formed in seconds and rarely revised",
      "Plain language converts better than ambitious language",
      "A good site qualifies leads before your team ever speaks to them",
    ],
  },
  "building-systems-around-real-workflows": {
    intro:
      "The internal tools that succeed are almost never the most technically impressive ones. They are the ones that match how the organization already works, including the parts nobody documented.",
    sections: [
      {
        heading: "Start with the process, not the screens",
        paragraphs: [
          "Before any interface is designed, it is worth tracing one request from the moment it arrives to the moment it is closed. Who touches it, what they need to see, where it waits, and what happens when someone is away.",
          "That walkthrough usually surfaces steps that exist in practice but appear in no policy document. Those are exactly the steps that break a system built from an org chart instead of from reality.",
        ],
      },
      {
        heading: "Approvals are where systems fail",
        paragraphs: [
          "Most operational software handles the happy path well. The trouble starts with exceptions: the approver on leave, the request that needs two signatures, the urgent case that has to skip a stage.",
          "If those situations are not designed for, staff quietly route around the system using phone calls and messages, and the record becomes incomplete. At that point the reporting stops being trustworthy.",
        ],
      },
      {
        heading: "Reporting should be a by-product, not a task",
        paragraphs: [
          "When a system captures work properly as it happens, management reporting is simply a view of existing data. When it does not, somebody spends the last week of every month assembling numbers by hand.",
          "The difference between those two situations is almost always a design decision made early, not a feature added later.",
        ],
      },
    ],
    takeaways: [
      "Trace a real request end to end before designing anything",
      "Design for exceptions, or staff will bypass the system",
      "Good capture makes reporting automatic rather than manual",
    ],
  },
  "designing-mobile-tools-for-real-teams": {
    intro:
      "A field officer standing outside in bright sun with one bar of signal and an office manager at a desk with a large screen are using the same system. Designing well for both is harder than it sounds, and it is where most internal mobile tools fall down.",
    sections: [
      {
        heading: "Design for the worst conditions, not the demo",
        paragraphs: [
          "Mobile tools are usually demonstrated on a new device with strong office wifi. They are used on older phones, on mobile data, sometimes with a cracked screen and one free hand.",
          "That reality should shape the design: large tap targets, minimal typing, tolerance for a dropped connection, and clear feedback about whether something actually saved.",
        ],
      },
      {
        heading: "Offline is a workflow decision",
        paragraphs: [
          "Offline capability is often discussed as a technical feature. It is really a question about the work: can this task be completed without a connection, and what should happen if two people edit the same record before syncing.",
          "Answering that at the design stage avoids a class of confusing bugs that are painful to retrofit later.",
        ],
      },
      {
        heading: "One system, two honest experiences",
        paragraphs: [
          "Trying to give field staff and office staff an identical interface usually serves neither well. The better approach is one shared source of data with views tailored to each context.",
          "Field users get a short, focused capture flow. Office users get the fuller picture, the history, and the reporting. Same records, different priorities.",
        ],
      },
    ],
    takeaways: [
      "Design for old devices and weak signal, not the demo conditions",
      "Offline support is a workflow question before it is a technical one",
      "Shared data with context-specific views beats one identical interface",
    ],
  },
};

export const legalUpdated = "August 3, 2026";
