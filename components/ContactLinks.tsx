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
          <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(248,250,252,0.92)),repeating-linear-gradient(-78deg,rgba(15,23,42,0.04)_0px,rgba(15,23,42,0.04)_1px,transparent_1px,transparent_22px)] px-6 py-10 text-center shadow-[0_25px_70px_-30px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-[linear-gradient(180deg,_rgba(15,23,42,0.88),_rgba(2,6,23,0.86)),repeating-linear-gradient(-78deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_22px)] sm:px-10 sm:py-11">
            <span className="accent-chip bg-white/80 dark:bg-white/5">Ready to modernize?</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Let&apos;s build the next version of your Technolgy Journey
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-700 dark:text-slate-200 sm:text-xl">
              Whether you need a modern website, a business system, or a full digital refresh, we can help you launch something cleaner, sharper, and more useful.
            </p>
            <div className="mt-7">
              <Link
                href={ctaHref}
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-accent transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
              >
                Start Your Project
              </Link>
            </div>
          </section>
        ) : null}

        {showContactCard ? (
          aboutMode ? (
            <section className="overflow-hidden rounded-[2rem] border border-accent-500/15 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.08),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.96))] px-6 py-14 text-center shadow-[0_28px_70px_-35px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.1),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,0.98))] dark:shadow-[0_28px_70px_-35px_rgba(0,0,0,0.45)] sm:px-10">
              <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                Got an idea? Let&apos;s make it real<span className="text-accent-400">.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                No pitch decks, no fluff. Just a quick conversation to see if we&apos;re the right fit for your project.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[230px] items-center justify-center rounded-xl bg-accent-500 px-6 py-4 text-base font-semibold text-white shadow-accent transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
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
            <section className="card-surface overflow-hidden p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                    Enough talk, let start together
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                    Reach out directly and we will help you choose the right digital solution for your business goals, workflow, and budget.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-accent transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
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
                            ? "inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-accent transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 dark:bg-accent-400 dark:text-slate-950 dark:hover:bg-white dark:hover:text-slate-950"
                            : "inline-flex min-w-[220px] items-center justify-center rounded-full border border-accent-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-white dark:border-accent-500/25 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-accent-400 dark:hover:text-slate-950"
                        }
                      >
                        Chat on WhatsApp
                      </Link>
                    ) : null}
                  </div>
                </div>

                <div className="grid auto-rows-fr gap-4 sm:grid-cols-3">
                  <div className="flex h-full min-h-[112px] flex-col justify-center rounded-3xl border border-slate-200 bg-white/75 px-5 py-4 dark:border-white/10 dark:bg-slate-900/60">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                        <path d="M4.5 6.75 12 12l7.5-5.25" />
                        <path d="M4.5 7.5h15v9h-15z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">Email</p>
                    <p className="mt-3 text-base font-medium text-slate-700 dark:text-slate-200">{contactDetails.email}</p>
                  </div>
                  <div className="flex h-full min-h-[112px] flex-col justify-center rounded-3xl border border-slate-200 bg-white/75 px-5 py-4 dark:border-white/10 dark:bg-slate-900/60">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                        <path d="M6.75 4.5h2.1l1.05 3.15-1.5 1.5a14.06 14.06 0 0 0 6.45 6.45l1.5-1.5 3.15 1.05v2.1a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 5.25 6a1.5 1.5 0 0 1 1.5-1.5Z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">Phone</p>
                    <p className="mt-3 text-base font-medium text-slate-700 dark:text-slate-200">{contactDetails.phone}</p>
                  </div>
                  <div className="flex h-full min-h-[112px] flex-col justify-center rounded-3xl border border-slate-200 bg-white/75 px-5 py-4 dark:border-white/10 dark:bg-slate-900/60">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                        <path d="M12 20.25s6-5.2 6-10.5a6 6 0 1 0-12 0c0 5.3 6 10.5 6 10.5Z" />
                        <circle cx="12" cy="9.75" r="2.25" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">Location</p>
                    <p className="mt-3 text-base font-medium text-slate-700 dark:text-slate-200">{contactDetails.location}</p>
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
