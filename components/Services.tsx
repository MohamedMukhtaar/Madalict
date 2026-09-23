import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
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

        <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service, index) => (
            <Reveal key={service.slug} delayMs={(index % 3) * 100} className="h-full">
            <article
              className="group card-surface flex h-full flex-col overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-accent-500/35"
            >
              <div className="relative h-40 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="scale-105 object-cover transition duration-500 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900/55 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <span className="inline-flex w-fit rounded-full border border-accent-200/70 bg-accent-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-700 dark:border-accent-500/20 dark:bg-accent-500/10 dark:text-accent-300">
                  {service.deliverables[0]}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-ink dark:text-white">
                  <Link href={`/services/${service.slug}`} className="transition hover:text-accent-600 dark:hover:text-accent-300">
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink dark:text-slate-300">
                  {service.summary}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink dark:text-slate-300">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-brand-900">
                        +
                      </span>
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-brand-100/80 pt-4 dark:border-white/10">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-accent-600 transition hover:text-accent-700 dark:text-accent-300"
                  >
                    View details
                  </Link>
                  <Link href="/contact" className="text-sm font-medium text-slate-500 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-300">
                    Talk to us
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
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
