import { legalUpdated } from "@/data/siteData";

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
      <div className="section-shell flex flex-col items-center text-center">
        <span className="accent-chip">{eyebrow}</span>
        <h1 className="mt-6 max-w-3xl text-2xl font-medium tracking-tight text-ink dark:text-white sm:text-3xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink dark:text-slate-300 sm:text-lg">{intro}</p>
        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Last updated {legalUpdated}
        </p>

        <div className="mt-12 max-w-3xl text-left">
          {sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="text-xl font-medium tracking-tight text-ink dark:text-white sm:text-2xl">
                {section.heading}
              </h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-7 text-ink dark:text-slate-300">
                  {paragraph}
                </p>
              ))}

              {section.bullets ? (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-base leading-7 text-ink dark:text-slate-300"
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
      </div>
    </section>
  );
}
