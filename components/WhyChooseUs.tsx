import Link from "next/link";
import { deliveryProcess, whyChooseUs } from "@/data/siteData";

function ReasonIcon({ icon }: { icon: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true,
  };

  switch (icon) {
    case "people":
      return (
        <svg {...props}>
          <path d="M16.5 20v-1.5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V20" />
          <circle cx="10.5" cy="8" r="3" />
          <path d="M19.5 20v-1.5a3 3 0 0 0-2.25-2.9M15.75 5.35a3 3 0 0 1 0 5.3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3.5c1.9 1.5 4.2 2.3 6.75 2.35v4.1c0 4.05-2.67 7.5-6.75 8.8-4.08-1.3-6.75-4.75-6.75-8.8v-4.1C7.8 5.8 10.1 5 12 3.5Z" />
          <path d="m9.4 11.6 1.9 1.9 3.4-3.6" />
        </svg>
      );
    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="8.6" r="3.8" />
          <path d="m8.8 12.8-1.05 7.35L12 17.65l4.25 2.5-1.05-7.35" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M4.5 12a7.5 7.5 0 0 1 15 0v4.5a2.5 2.5 0 0 1-2.5 2.5H15" />
          <rect x="3" y="11.5" width="3.5" height="5.5" rx="1.5" />
          <rect x="17.5" y="11.5" width="3.5" height="5.5" rx="1.5" />
        </svg>
      );
  }
}

export default function WhyChooseUs() {
  return (
    <section className="section-spacing bg-brand-900 text-white">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="accent-chip bg-accent-500/10 text-accent-200">Why Choose Madal</span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Every successful business needs technology that works for them, not against them
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              We were founded on a simple belief: technology should simplify operations, improve
              productivity, and create opportunities for growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Start a conversation
              </Link>
              <Link href="/about" className="button-secondary">
                About Madal
              </Link>
            </div>
          </div>

          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent-500/40"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent">
                    <ReasonIcon icon={reason.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{reason.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-accent-500/25 bg-white/[0.04] p-6 sm:p-8">
              <h3 className="text-lg font-bold tracking-tight text-white">How a project runs</h3>
              <ol className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {deliveryProcess.map((step, index) => (
                  <li key={step.title}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-brand-900">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-white">{step.title}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
