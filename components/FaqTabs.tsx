"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqCategories } from "@/data/siteData";

export default function FaqTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = faqCategories[activeIndex];

  return (
    <section className="section-spacing pt-6">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="accent-chip">FAQs</span>
          <h1 className="mt-6 text-2xl font-medium tracking-tight text-ink dark:text-white sm:text-3xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 text-base leading-7 text-ink dark:text-slate-300 sm:text-lg">
            Get answers to some of the most common questions about Madal ICT Solutions and how we can help your business thrive.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {faqCategories.map((category, index) => (
            <button
              key={category.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                index === activeIndex
                  ? "bg-accent-500 text-white shadow-accent"
                  : "border border-brand-200 text-ink hover:border-accent-500 dark:border-white/15 dark:text-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {activeCategory.faqs.map((faq, index) => (
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
