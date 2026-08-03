import Link from "next/link";
import { contactDetails, legalUpdated } from "@/data/siteData";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ eyebrow, title, intro, sections }: LegalPageProps) {
  return (
    <section className="section-spacing pt-10">
      <div className="section-shell">
        <div className="card-surface relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,195,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,195,255,0.12),transparent)] bg-[length:42px_42px,auto]" />
          <span className="accent-chip">{eyebrow}</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{intro}</p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Last updated {legalUpdated}
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="max-w-3xl">
            {sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-300">
                    {paragraph}
                  </p>
                ))}

                {section.bullets ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-lg leading-8 text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-surface p-6 sm:p-7">
              <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">Questions about this?</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Contact {contactDetails.companyName} and we will respond directly.
              </p>
              <div className="mt-6 space-y-3 text-base text-slate-700 dark:text-slate-200">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="block font-semibold text-accent-600 transition hover:text-accent-700 dark:text-accent-300"
                >
                  {contactDetails.email}
                </a>
                <a href={`tel:${contactDetails.phoneHref}`} className="block font-medium">
                  {contactDetails.phone}
                </a>
                <p>{contactDetails.location}</p>
              </div>
              <Link href="/contact" className="button-primary mt-7 w-full">
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
