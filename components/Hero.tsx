import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import { heroStats } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-6 sm:pb-8">
      <div className="section-shell pt-6 sm:pt-8">
        <div className="relative mx-auto max-w-3xl animate-fade-up text-center">
          <span className="accent-chip">
            Madal ICT Solutions
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
            Technology is our how. <span className="text-accent-600 dark:text-accent-400">People are our why.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Madal ICT Solutions designs premium websites, dependable business systems, and practical digital tools that help teams serve customers better, convert more leads, and operate with confidence.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="button-primary">
              Book a Free Consultation
            </Link>
            <Link href="/services" className="button-secondary">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 max-w-5xl animate-fade-up pb-8 [animation-delay:220ms] sm:pb-10">
          <div className="card-surface px-6 py-6 sm:px-8">
            <div className="grid grid-cols-1 divide-y divide-brand-100 dark:divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-4 text-center first:pt-0 last:pb-0 sm:px-6 sm:py-1">
                  <p className="text-3xl font-semibold tracking-[-0.02em] text-accent-600 dark:text-accent-400 sm:text-4xl">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
