import Image from "next/image";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks";

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
        <section className="grid items-center gap-10 rounded-2xl border border-accent-500/20 bg-[linear-gradient(90deg,rgba(255,122,0,0.08)_1px,transparent_1px),linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(255,250,244,0.98))] bg-[length:42px_42px,auto] p-8 shadow-[0_30px_80px_-40px_rgba(7,7,7,0.18)] dark:bg-[linear-gradient(90deg,rgba(255,122,0,0.08)_1px,transparent_1px),linear-gradient(180deg,_rgba(17,16,14,0.98),_rgba(7,7,7,0.98))] dark:shadow-[0_30px_80px_-40px_rgba(255,122,0,0.18)] lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl bg-brand-900 p-8 shadow-[0_0_60px_-10px_rgba(255,122,0,0.24)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,122,0,0.18),_transparent_62%)]" />
              <div className="relative overflow-hidden rounded-xl border border-accent-500/25 bg-brand-900 p-10">
                <Image
                  src="/brand.png"
                  alt="Madal ICT Solutions logo"
                  width={320}
                  height={320}
                  className="h-auto w-[180px] object-contain sm:w-[220px]"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent-600 dark:text-accent-300">
              Who We Are
            </span>
            <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-950 dark:text-white">What is Madal ICT?</h2>
            <p className="mt-6 text-xl leading-10 text-slate-600 dark:text-slate-300">
              Founded in Mogadishu, Madal ICT Solutions is a digital technology company focused on helping organizations modernize through websites, business systems, mobile tools, and ICT consulting.
            </p>
            <p className="mt-6 text-xl leading-10 text-slate-600 dark:text-slate-300">
              We combine practical business understanding with clean design and dependable engineering so our clients can present themselves better, work more efficiently, and grow with confidence.
            </p>
          </div>
        </section>

        <section className="grid auto-rows-fr gap-6 lg:grid-cols-3">
          <article className="card-surface flex h-full min-h-[260px] flex-col p-7 sm:p-8">
            <span className="accent-chip">About Us</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Serious ICT design and development for businesses that want to look modern and work smarter.
            </h2>
          </article>

          <article className="card-surface flex h-full min-h-[260px] flex-col p-7 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
              <ValueIcon icon="idea" />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Our Mission
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              To design and develop high-quality digital products that help businesses operate better, look stronger, and grow with confidence.
            </p>
          </article>

          <article className="card-surface flex h-full min-h-[260px] flex-col p-7 sm:p-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
              <ValueIcon icon="award" />
            </div>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
              Our Vision
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
              To become one of the most trusted ICT partners in Somalia and beyond by delivering clean, modern, and dependable digital solutions.
            </p>
          </article>
        </section>

        <section className="pt-6">
          <h2 className="text-center text-4xl font-bold tracking-tight text-slate-950 dark:text-white">Our Values</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className={`relative overflow-hidden rounded-[1.75rem] border p-6 ${
                  index % 2 === 0
                    ? "border-accent-500/20 bg-[linear-gradient(180deg,_rgba(255,250,244,0.98),_rgba(255,255,255,0.98))] shadow-[0_22px_60px_-35px_rgba(7,7,7,0.16)] dark:bg-[linear-gradient(180deg,_rgba(17,16,14,0.98),_rgba(7,7,7,0.98))] dark:shadow-[0_22px_60px_-35px_rgba(255,122,0,0.18)]"
                    : "border-brand-500/20 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(244,244,243,0.98))] shadow-[0_22px_60px_-35px_rgba(7,7,7,0.16)] dark:bg-[linear-gradient(180deg,_rgba(17,16,14,0.98),_rgba(7,7,7,0.98))] dark:shadow-[0_22px_60px_-35px_rgba(7,7,7,0.45)]"
                }`}
              >
                <div className={`absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-b-full ${index % 2 === 0 ? "bg-accent-500/10" : "bg-brand-500/10"} blur-[2px]`} />
                <div className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent-500 bg-accent-500 text-white shadow-accent">
                    <ValueIcon icon={value.icon} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-slate-950 dark:text-white">{value.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{value.description}</p>
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
