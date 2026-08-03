import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { deliveryProcess, serviceDetails, services } from "@/data/siteData";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | Madal ICT Solutions`,
      description: service.description,
      images: [service.image],
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />

      <section className="relative overflow-hidden pt-10">
        <div className="section-shell">
          <div className="card-surface relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,195,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,195,255,0.12),transparent)] bg-[length:42px_42px,auto]" />
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Link href="/services" className="font-medium transition hover:text-accent-600 dark:hover:text-accent-300">
                    Services
                  </Link>
                  <span aria-hidden="true">/</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200">{service.title}</span>
                </nav>

                <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-accent-600 dark:text-accent-300">
                  {detail.tagline}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="button-primary">
                    Discuss this service
                  </Link>
                  <Link href="/services" className="button-secondary">
                    All services
                  </Link>
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-2xl border border-accent-500/25 sm:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="accent-chip">Overview</span>
              <div className="mt-6 space-y-5">
                {detail.overview.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-9 text-slate-600 dark:text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                What you get
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="card-surface flex items-center gap-3 px-5 py-4 text-base text-slate-700 dark:text-slate-200"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-brand-900">
                      +
                    </span>
                    {deliverable}
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Results you should expect
              </h2>
              <ul className="mt-6 space-y-4">
                {detail.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="space-y-6">
              <div className="card-surface p-6 sm:p-7">
                <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">Ideal for</h2>
                <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {detail.idealFor.map((item) => (
                    <li key={item} className="border-l-2 border-accent-500/40 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-surface p-6 sm:p-7">
                <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Not sure where to start?
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Tell us how your business works today. We will tell you honestly whether this is the right service for
                  the problem you are describing.
                </p>
                <Link href="/contact" className="button-primary mt-6 w-full">
                  Book a free consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white/[0.55] dark:bg-brand-900">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="accent-chip">How we deliver</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              A delivery process you can follow from start to launch
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deliveryProcess.map((step, index) => (
              <li key={step.title} className="card-surface flex h-full flex-col p-6 sm:p-7">
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-accent-600 dark:text-accent-300">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-spacing">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="accent-chip">Questions</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Common questions about {service.title.toLowerCase()}
              </h2>
            </div>

            <div className="space-y-4">
              {detail.faqs.map((faq) => (
                <details key={faq.question} className="card-surface group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950 dark:text-white">
                    {faq.question}
                    <span className="text-accent-600 transition group-open:rotate-45 dark:text-accent-300" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white/[0.55] dark:bg-brand-900">
        <div className="section-shell">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Other services
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="card-surface group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-500/35 sm:p-7"
              >
                <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
                <span className="mt-6 text-sm font-semibold text-accent-600 dark:text-accent-300">
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
