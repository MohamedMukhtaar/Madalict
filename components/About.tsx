import SectionTitle from "@/components/SectionTitle";

const aboutCards = [
  {
    title: "Our Mission",
    description:
      "To help businesses modernize with practical digital solutions that improve operations, service delivery, and decision-making.",
  },
  {
    title: "Our Vision",
    description:
      "To bridge the gap between African countries and the digital world, and to be a trusted ICT partner for ambitious organizations seeking dependable technology, innovation, and measurable growth.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="card-surface p-8 sm:p-10">
            <SectionTitle
              eyebrow="About Us"
              title="Technology built around real business needs"
              description="Madal ICT Solutions is a forward-looking technology company that designs and develops websites, business systems, mobile applications, database solutions, and ICT consulting services for organizations that want to scale with confidence."
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {aboutCards.map((card, index) => (
              <article
                key={card.title}
                className="card-surface h-full p-8 transition duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex rounded-2xl p-3 ${index === 0 ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300" : "bg-accent-50 text-accent-700 dark:bg-accent-500/10 dark:text-accent-300"}`}>
                  <div className="h-3 w-3 rounded-full bg-current" />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
