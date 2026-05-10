import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/siteData";

type ServicesProps = {
  limit?: number;
  showCta?: boolean;
};

export default function Services({ limit, showCta = false }: ServicesProps) {
  const visibleServices = typeof limit === "number" ? services.slice(0, limit) : services;

  return (
    <section className="section-spacing bg-white/[0.55] dark:bg-brand-900">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Services"
          title="Modern ICT services that connect design quality with real business value"
          description="Every offer is framed around outcomes: better trust, smoother operations, and digital tools your team can actually use every day."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service) => (
            <article
              key={service.slug}
              className="group card-surface overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-accent-500/35"
            >
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="scale-105 object-cover transition duration-500 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900/55 to-transparent" />
              </div>

              <div className="p-4">
                <span className="inline-flex rounded-full border border-accent-200/70 bg-accent-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-700 dark:border-accent-500/20 dark:bg-accent-500/10 dark:text-accent-300">
                  {service.deliverables[0]}
                </span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-brand-900">
                        +
                      </span>
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-brand-100/80 pt-5 dark:border-white/10">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Tailored for modern teams
                  </span>
                  <Link href="/contact" className="text-sm font-semibold text-accent-600 transition hover:text-accent-700 dark:text-accent-300">
                    Talk to us
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showCta ? (
          <div className="mt-12 flex justify-center">
            <Link href="/services" className="button-primary">
              View Full Service Details
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
