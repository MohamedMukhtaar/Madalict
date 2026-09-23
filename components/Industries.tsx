import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { industries } from "@/data/siteData";

function IndustryIcon({ icon }: { icon: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
    "aria-hidden": true,
  };

  switch (icon) {
    case "retail":
      return (
        <svg {...props}>
          <path d="M4 8h16l-1 11.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case "health":
      return (
        <svg {...props}>
          <path d="M12 20.5S4.5 15.8 4.5 10.2A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.6c0 5.6-7.5 10.3-7.5 10.3Z" />
          <path d="M12 11v4M10 13h4" />
        </svg>
      );
    case "education":
      return (
        <svg {...props}>
          <path d="M12 4 2.5 8.5 12 13l9.5-4.5Z" />
          <path d="M6.5 10.7v4.6c0 1.6 2.5 2.9 5.5 2.9s5.5-1.3 5.5-2.9v-4.6" />
        </svg>
      );
    case "business":
      return (
        <svg {...props}>
          <path d="M3.5 20.5h17" />
          <path d="M5.5 20.5V9l6-4.5 6 4.5v11.5" />
          <path d="M10 20.5v-5h4v5" />
        </svg>
      );
    case "finance":
      return (
        <svg {...props}>
          <path d="M3.5 9.5 12 4l8.5 5.5" />
          <path d="M5 9.5v9.5M9.3 9.5v9.5M14.7 9.5v9.5M19 9.5v9.5" />
          <path d="M3.5 19h17" />
        </svg>
      );
    case "manufacturing":
      return (
        <svg {...props}>
          <path d="M3.5 19.5V11l4.5 3V11l4.5 3V7.5l7 4v8Z" />
          <circle cx="17.5" cy="6" r="1.6" />
        </svg>
      );
    case "logistics":
      return (
        <svg {...props}>
          <path d="M3.5 16.5V7.5h9v9Z" />
          <path d="M12.5 10.5h4l3 3v3h-7Z" />
          <circle cx="7" cy="18" r="1.6" />
          <circle cx="16.5" cy="18" r="1.6" />
        </svg>
      );
    case "nonprofit":
      return (
        <svg {...props}>
          <path d="M12 20s-7-4.4-7-9.7A4 4 0 0 1 12 7.5a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Industries() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Industries We Serve"
          title="Technology shaped around the way each sector actually works"
          description="Different industries carry different pressures. We adapt the same standard of delivery to the realities of yours."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delayMs={(index % 4) * 80} className="h-full">
              <article className="group card-surface flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-500 hover:bg-accent-500 dark:hover:border-accent-500 dark:hover:bg-accent-500">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent transition-colors duration-300 group-hover:bg-brand-900 group-hover:text-white dark:group-hover:bg-brand-900">
                  <IndustryIcon icon={industry.icon} />
                </div>

                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-900 dark:text-white dark:group-hover:text-brand-900">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink transition-colors duration-300 group-hover:text-brand-900/80 dark:text-slate-300 dark:group-hover:text-brand-900/80">
                  {industry.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
