import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/siteData";

export default function FeaturedWork() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Project Delivery"
          title="Projects now live inside the services experience"
          description="Instead of looking like a disconnected list, projects now support the Services page and show how each capability turns into a usable solution."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="card-surface flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:border-accent-500/35"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${index % 2 === 0 ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" : "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"}`}>
                  {project.category}
                </span>
                <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  {project.service}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 rounded-xl bg-accent-50/70 p-4 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-300">
                  Result
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
