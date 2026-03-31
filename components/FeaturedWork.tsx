import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/siteData";

export default function FeaturedWork() {
  return (
    <section id="projects" className="section-spacing">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Featured Work"
          title="Selected digital solutions and platforms"
          description="A snapshot of the kinds of custom systems and platforms Madal ICT Solutions can design, build, and support."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="card-surface flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1"
            >
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${index % 2 === 0 ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" : "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"}`}>
                {project.category}
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-300">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
                Custom solution delivery
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
