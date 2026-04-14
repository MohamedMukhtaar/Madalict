import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <div className="grid auto-rows-fr gap-6 lg:grid-cols-3">
          <article className="card-surface relative flex h-full min-h-[280px] flex-col overflow-hidden p-6 sm:p-7">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-100/70 blur-3xl dark:bg-accent-500/10" />
            <span className="accent-chip">About Us</span>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              We partner with businesses that want more than a basic online presence. From first impression to back-office workflows, we design digital systems that feel branded, fast, and trustworthy.
            </p>
            <div className="pt-5">
              <Link href="/about" className="inline-flex text-sm font-semibold text-brand-800 transition hover:text-accent-600 dark:text-accent-300">
                Learn more about us
              </Link>
            </div>
          </article>

          <article className="card-surface flex h-full min-h-[280px] flex-col p-6 sm:p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                <path d="M12 3.75a5.25 5.25 0 0 0-3.67 9.01c.54.51.92 1.17 1.09 1.89h5.16c.17-.72.55-1.38 1.09-1.89A5.25 5.25 0 0 0 12 3.75Z" />
                <path d="M9.75 18.25h4.5" />
                <path d="M10.5 21h3" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Our Mission
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              To help organizations modernize with practical digital products that improve operations, service delivery, and decision-making.
            </p>
          </article>

          <article className="card-surface flex h-full min-h-[280px] flex-col p-6 sm:p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                <circle cx="12" cy="8.75" r="3.75" />
                <path d="m8.8 12.9-1.05 7.35L12 17.75l4.25 2.5-1.05-7.35" />
              </svg>
            </div>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              To become a trusted ICT partner for ambitious organizations seeking dependable technology, innovation, and measurable growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
