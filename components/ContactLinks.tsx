import Link from "next/link";
import { contactDetails, socialLinks } from "@/data/siteData";

type ContactLinksProps = {
  ctaHref?: string;
  showCtaBanner?: boolean;
  showContactCard?: boolean;
  emphasizeActions?: boolean;
  aboutMode?: boolean;
};

export default function ContactLinks({
  ctaHref = "/contact",
  showCtaBanner = true,
  showContactCard = true,
  emphasizeActions = false,
  aboutMode = false,
}: ContactLinksProps) {
  const whatsappLink = socialLinks.find((item) => item.label === "WhatsApp");

  return (
    <section className="py-10 sm:py-14">
      <div className="section-shell space-y-6">
        {showCtaBanner ? (
          <section className="px-6 py-10 text-center sm:px-10 sm:py-11">
            <span className="accent-chip">Ready to modernize?</span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              Let&apos;s build the next version of your technology journey
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-slate-700 dark:text-slate-200 sm:text-lg">
              Whether you need a modern website, a business system, or a full digital refresh, we can help you launch something cleaner, sharper, and more useful.
            </p>
            <div className="mt-7">
              <Link
                href={ctaHref}
                className="button-primary min-w-[220px]"
              >
                Start Your Project
              </Link>
            </div>
          </section>
        ) : null}

        {showContactCard ? (
          aboutMode ? (
            <section className="px-6 py-14 text-center sm:px-10">
              <h2 className="mx-auto max-w-4xl text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                Got an idea? Let&apos;s make it real<span className="text-accent-600 dark:text-accent-400">.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                No pitch decks, no fluff. Just a quick conversation to see if we&apos;re the right fit for your project.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[230px] items-center justify-center rounded-xl bg-accent-500 px-6 py-4 text-base font-semibold text-brand-900 shadow-accent transition duration-300 hover:-translate-y-0.5 hover:bg-brand-900 hover:text-white"
                >
                  Start a conversation
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-w-[200px] items-center justify-center rounded-xl px-6 py-4 text-base font-semibold text-slate-700 transition duration-300 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
                >
                  Learn about us
                </Link>
              </div>
            </section>
          ) : (
            <section>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                    Enough talk, let&apos;s start together
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                    Reach out directly and we will help you choose the right digital solution for your business goals, workflow, and budget.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="button-primary min-w-[220px]"
                    >
                      Contact Us
                    </Link>
                    {whatsappLink ? (
                      <Link
                        href={whatsappLink.href}
                        target="_blank"
                        rel="noreferrer"
                        className={
                          emphasizeActions
                            ? "inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-900 shadow-accent transition duration-300 hover:-translate-y-0.5 hover:bg-brand-900 hover:text-white dark:bg-accent-500 dark:text-brand-900 dark:hover:bg-white dark:hover:text-brand-900"
                            : "inline-flex min-w-[220px] items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-brand-900 dark:border-brand-700 dark:bg-brand-900 dark:text-slate-200 dark:hover:bg-accent-500 dark:hover:text-brand-900"
                        }
                      >
                        Chat on WhatsApp
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true">
                      <path d="M4.5 6.75 12 12l7.5-5.25" />
                      <path d="M4.5 7.5h15v9h-15z" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Email</p>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{contactDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true">
                      <path d="M6.75 4.5h2.1l1.05 3.15-1.5 1.5a14.06 14.06 0 0 0 6.45 6.45l1.5-1.5 3.15 1.05v2.1a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 5.25 6a1.5 1.5 0 0 1 1.5-1.5Z" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Phone</p>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{contactDetails.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 shrink-0 text-accent-600 dark:text-accent-300" aria-hidden="true">
                      <path d="M12 20.25s6-5.2 6-10.5a6 6 0 1 0-12 0c0 5.3 6 10.5 6 10.5Z" />
                      <circle cx="12" cy="9.75" r="2.25" />
                    </svg>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Location</p>
                      <p className="text-base font-medium text-slate-700 dark:text-slate-200">{contactDetails.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        ) : null}
      </div>
    </section>
  );
}
