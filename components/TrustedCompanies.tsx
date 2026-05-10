import SectionTitle from "@/components/SectionTitle";
import { trustedCompanies } from "@/data/siteData";

export default function TrustedCompanies() {
  return (
    <section id="partners" className="section-spacing bg-brand-900 text-white">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Trusted Companies"
          title="Organizations that value reliable digital partnership"
          description="Example client and partner profiles that reflect the type of sectors we support with scalable technology solutions."
          align="center"
          invert
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {trustedCompanies.map((company) => (
            <article
              key={company.name}
              className="card-surface flex items-center justify-between gap-5 p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-lg font-bold text-brand-900 shadow-sm">
                  {company.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{company.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{company.industry}</p>
                </div>
              </div>
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:border-slate-700 dark:text-accent-300">
                Trusted
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
