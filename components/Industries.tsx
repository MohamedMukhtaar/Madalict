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
    default:
      return (
        <svg {...props}>
          <path d="M3.5 20.5h17" />
          <path d="M5.5 20.5V9l6-4.5 6 4.5v11.5" />
          <path d="M10 20.5v-5h4v5" />
        </svg>
      );
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
            <article
              key={industry.title}
              className="card-surface group relative flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-500/40"
            >
              <span
                className="absolute right-6 top-5 text-5xl font-bold tracking-tight text-brand-900/[0.06] dark:text-white/[0.06]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent">
                <IndustryIcon icon={industry.icon} />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                {industry.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
