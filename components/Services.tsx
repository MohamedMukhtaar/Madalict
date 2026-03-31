import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/siteData";

function ServiceIcon({ title }: { title: string }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "h-5 w-5",
    "aria-hidden": "true",
  };

  switch (title) {
    case "Web Development":
      return (
        <svg {...commonProps}>
          <path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v8.5A2.75 2.75 0 0 1 18.25 17H13l-2.2 2.2a1.2 1.2 0 0 1-1.7 0L6.9 17H5.75A2.75 2.75 0 0 1 3 14.25v-8.5Zm5.23 2.31-2.04 1.86 2.04 1.86.81-.89-1.06-.97 1.06-.97-.81-.89Zm7.54 0-.81.89 1.06.97-1.06.97.81.89 2.04-1.86-2.04-1.86Zm-5.31 4.5h1.17l1.91-5.12h-1.17l-1.91 5.12Z" />
        </svg>
      );
    case "Mobile App Development":
      return (
        <svg {...commonProps}>
          <path d="M8 2.75A2.75 2.75 0 0 0 5.25 5.5v13A2.75 2.75 0 0 0 8 21.25h8A2.75 2.75 0 0 0 18.75 18.5v-13A2.75 2.75 0 0 0 16 2.75H8Zm2.25 2h3.5a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 1 1 0-1.5Zm1.75 13.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
        </svg>
      );
    case "UI/UX Design":
      return (
        <svg {...commonProps}>
          <path d="M4 4.75A2.75 2.75 0 0 1 6.75 2h3.5A2.75 2.75 0 0 1 13 4.75v3.5A2.75 2.75 0 0 1 10.25 11h-3.5A2.75 2.75 0 0 1 4 8.25v-3.5Zm7 10A2.75 2.75 0 0 1 13.75 12h3.5A2.75 2.75 0 0 1 20 14.75v3.5A2.75 2.75 0 0 1 17.25 21h-3.5A2.75 2.75 0 0 1 11 18.25v-3.5Zm-7 0A2.75 2.75 0 0 1 6.75 12h1.5A2.75 2.75 0 0 1 11 14.75v1.5A4.75 4.75 0 0 1 6.25 21H6a2 2 0 0 1-2-2v-4.25Z" />
        </svg>
      );
    case "Custom Business Systems":
      return (
        <svg {...commonProps}>
          <path d="M4.75 3h4.5A1.75 1.75 0 0 1 11 4.75v4.5A1.75 1.75 0 0 1 9.25 11h-4.5A1.75 1.75 0 0 1 3 9.25v-4.5A1.75 1.75 0 0 1 4.75 3Zm10 0h4.5A1.75 1.75 0 0 1 21 4.75v4.5A1.75 1.75 0 0 1 19.25 11h-4.5A1.75 1.75 0 0 1 13 9.25v-4.5A1.75 1.75 0 0 1 14.75 3Zm-5 10h4.5A1.75 1.75 0 0 1 16 14.75v4.5A1.75 1.75 0 0 1 14.25 21h-4.5A1.75 1.75 0 0 1 8 19.25v-4.5A1.75 1.75 0 0 1 9.75 13Z" />
        </svg>
      );
    case "Database Solutions":
      return (
        <svg {...commonProps}>
          <path d="M12 2c-4.97 0-8 1.79-8 4v12c0 2.21 3.03 4 8 4s8-1.79 8-4V6c0-2.21-3.03-4-8-4Zm0 2c3.93 0 6 .99 6 2s-2.07 2-6 2-6-.99-6-2 2.07-2 6-2Zm0 6c3.93 0 6-.99 6-2v4c0 1.01-2.07 2-6 2s-6-.99-6-2V8c0 1.01 2.07 2 6 2Zm0 6c3.93 0 6-.99 6-2v4c0 1.01-2.07 2-6 2s-6-.99-6-2v-4c0 1.01 2.07 2 6 2Z" />
        </svg>
      );
    case "IT Consulting":
      return (
        <svg {...commonProps}>
          <path d="M12 2a3 3 0 0 0-3 3v.35a7.97 7.97 0 0 0-2.62 1.08l-.25-.25a3 3 0 1 0-4.24 4.24l.25.25A7.97 7.97 0 0 0 3.35 13H3a3 3 0 1 0 0 6h.35a7.97 7.97 0 0 0 1.08 2.62l-.25.25a3 3 0 1 0 4.24 4.24l.25-.25A7.97 7.97 0 0 0 11 26.65V27a3 3 0 1 0 6 0v-.35a7.97 7.97 0 0 0 2.62-1.08l.25.25a3 3 0 1 0 4.24-4.24l-.25-.25A7.97 7.97 0 0 0 26.65 19H27a3 3 0 1 0 0-6h-.35a7.97 7.97 0 0 0-1.08-2.62l.25-.25a3 3 0 1 0-4.24-4.24l-.25.25A7.97 7.97 0 0 0 17 5.35V5a3 3 0 0 0-3-3h-2Zm0 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" transform="scale(.75) translate(4 4)" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="section-spacing bg-slate-50/70 dark:bg-slate-950/30">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Services"
          title="End-to-end ICT services for modern organizations"
          description="We combine design, engineering, and business insight to deliver digital products and technology support that help teams work smarter."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group card-surface p-7 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-sm">
                  <ServiceIcon title={service.title} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 transition group-hover:text-accent-600 dark:text-slate-500 dark:group-hover:text-accent-300">
                  Service
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}