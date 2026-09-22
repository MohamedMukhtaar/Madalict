import ContactLinks from "@/components/ContactLinks";
import Logo from "@/components/Logo";

const values = [
  {
    title: "Innovation",
    description: "We explore, improve, and build solutions that move businesses forward with confidence.",
    icon: "idea",
  },
  {
    title: "Integrity",
    description: "We communicate clearly, work honestly, and build trust through dependable delivery.",
    icon: "shield",
  },
  {
    title: "Quality",
    description: "We create reliable digital products that feel polished, usable, and built to last.",
    icon: "award",
  },
  {
    title: "Empowerment",
    description: "We use technology to strengthen teams, elevate brands, and open better opportunities.",
    icon: "people",
  },
];

function ValueIcon({ icon }: { icon: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-6 w-6",
    "aria-hidden": true,
  };

  switch (icon) {
    case "idea":
      return (
        <svg {...props}>
          <path d="M12 3.75a5.25 5.25 0 0 0-3.67 9.01c.54.51.92 1.17 1.09 1.89h5.16c.17-.72.55-1.38 1.09-1.89A5.25 5.25 0 0 0 12 3.75Z" />
          <path d="M9.75 18.25h4.5" />
          <path d="M10.5 21h3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3.75c1.9 1.52 4.22 2.32 6.75 2.33v4.1c0 4.07-2.67 7.52-6.75 8.82-4.08-1.3-6.75-4.75-6.75-8.82v-4.1C7.78 6.07 10.1 5.27 12 3.75Z" />
        </svg>
      );
    case "award":
      return (
        <svg {...props}>
          <circle cx="12" cy="8.75" r="3.75" />
          <path d="m8.8 12.9-1.05 7.35L12 17.75l4.25 2.5-1.05-7.35" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M16.5 20.25v-1.5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1.5" />
          <circle cx="10.5" cy="8.25" r="3" />
          <path d="M19.5 20.25v-1.5a3 3 0 0 0-2.25-2.9" />
          <path d="M15.75 5.6a3 3 0 0 1 0 5.3" />
        </svg>
      );
  }
}

export default function About() {
  return (
    <section className="section-spacing bg-white text-slate-950 dark:bg-brand-900 dark:text-white">
      <div className="section-shell space-y-10">
        <section className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-brand-900 p-10">
              <Logo surface="navy" markOnly className="h-[150px] sm:h-[180px]" />
            </div>
          </div>

          <div>
            <span className="accent-chip">Who We Are</span>
            <h2 className="mt-5 text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">What is Madal ICT?</h2>
            <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              Founded in Mogadishu, Madal ICT Solutions is a digital technology company focused on helping organizations modernize through websites, business systems, mobile tools, and ICT consulting.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              We combine practical business understanding with clean design and dependable engineering so our clients can present themselves better, work more efficiently, and grow with confidence.
            </p>
          </div>
        </section>

        <section className="grid auto-rows-fr gap-6 lg:grid-cols-3">
          <article className="card-surface flex h-full min-h-[260px] flex-col p-7 sm:p-8">
            <span className="accent-chip">About Us</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Serious ICT design and development for businesses that want to look modern and work smarter.
            </h2>
          </article>

          <article className="card-surface flex h-full min-h-[260px] flex-col p-7 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent dark:bg-accent-400 dark:text-slate-950">
              <ValueIcon icon="idea" />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              To design and develop high-quality digital products that help businesses operate better, look stronger, and grow with confidence.
            </p>
          </article>

          <article className="card-surface flex h-full min-h-[260px] flex-col p-7 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent dark:bg-accent-400 dark:text-slate-950">
              <ValueIcon icon="award" />
            </div>
            <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              Our Vision
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              To become one of the most trusted ICT partners in Somalia and beyond by delivering clean, modern, and dependable digital solutions.
            </p>
          </article>
        </section>

        <section className="pt-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="accent-chip">Our Core Values</span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">What Guides Our Work</h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="group flex items-start gap-4 rounded-xl border border-brand-100 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500/40 dark:border-white/10 dark:bg-brand-900/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-brand-900 dark:bg-accent-500/10 dark:text-accent-300">
                  <ValueIcon icon={value.icon} />
                </div>
                <div>
                  <h3 className="text-base font-medium text-slate-950 dark:text-white">{value.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactLinks showCtaBanner={false} emphasizeActions aboutMode />
      </div>
    </section>
  );
}
