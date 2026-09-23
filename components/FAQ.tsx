import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { homeFaqs } from "@/data/siteData";

export default function FAQ() {
  return (
    <section id="faq" className="section-spacing">
      <div className="section-shell">
        <SectionTitle
          eyebrow="FAQs"
          title="Frequently asked questions"
          description="Answers to what clients most often ask before starting a project with us."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {homeFaqs.map((faq, index) => (
            <Reveal key={faq.question} delayMs={(index % 3) * 80}>
              <details className="card-surface group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-ink dark:text-white">
                  {faq.question}
                  <span className="shrink-0 text-accent-600 transition group-open:rotate-45 dark:text-accent-300" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-ink dark:text-slate-300">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
