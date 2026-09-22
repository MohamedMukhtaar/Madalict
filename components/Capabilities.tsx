import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { capabilities } from "@/data/siteData";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-full w-full" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <path d="m8 12.3 2.6 2.6L16.5 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Capabilities() {
  return (
    <section className="section-spacing bg-white/[0.55] dark:bg-brand-900">
      <div className="section-shell">
        <SectionTitle
          eyebrow="What We Deliver"
          title="Capabilities that go beyond a single service"
          description="Alongside our core services, these are the broader areas of support clients rely on us for."
          align="center"
        />

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {capabilities.map((capability) => (
            <div key={capability.title} className="group flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 text-accent-600 transition-colors duration-300 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-brand-900 dark:text-accent-300">
                <CheckIcon />
              </span>
              <span className="text-base font-medium text-slate-800 dark:text-slate-100">{capability.title}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
