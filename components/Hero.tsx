import Image from "next/image";
import Link from "next/link";
import { heroStats, trendHighlights } from "@/data/siteData";

export default function Hero() {
  const primaryTrend = trendHighlights[0];
  const supportingTrends = trendHighlights.slice(1);

  return (
    <section className="relative overflow-hidden pb-8 pt-8 sm:pb-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[52rem] bg-[radial-gradient(circle_at_top_right,_rgba(245,124,0,0.18),_transparent_24%),radial-gradient(circle_at_left,_rgba(10,37,64,0.08),_transparent_28%),linear-gradient(180deg,_rgba(248,251,253,0.96),_rgba(255,255,255,0.92),_rgba(244,246,249,0.88))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(245,124,0,0.18),_transparent_24%),radial-gradient(circle_at_left,_rgba(10,37,64,0.28),_transparent_28%),linear-gradient(180deg,_rgba(7,17,29,0.96),_rgba(10,22,38,0.94),_rgba(15,29,47,0.92))]" />
      <div className="absolute inset-x-0 top-16 -z-10 mx-auto hidden h-[34rem] max-w-7xl rounded-[3rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.54),rgba(255,255,255,0.1))] blur-3xl dark:border-white/5 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] lg:block" />
      <div className="section-shell pt-8 sm:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <span className="accent-chip bg-white/90 dark:bg-brand-900/80">
              Modern ICT systems for growth-focused organizations
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Smart ICT solutions built for <span className="text-accent-500 dark:text-accent-300">speed, trust, and modern business growth</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Madal ICT Solutions designs premium websites, dependable business systems, and practical digital tools that help teams serve customers better, convert more leads, and operate with confidence.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book a Free Consultation
              </Link>
              <Link href="/services" className="button-secondary">
                Explore Services
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Websites", "Business Systems", "Mobile Apps", "ICT Consulting"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-sm font-medium text-brand-800 shadow-[0_12px_30px_-25px_rgba(10,37,64,0.45)] dark:border-white/10 dark:bg-brand-900/70 dark:text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <article className="group card-surface overflow-hidden p-3">
              <div className="relative min-h-[440px] overflow-hidden rounded-[1.8rem]">
                <Image
                  src={primaryTrend.image}
                  alt="Professional website development workspace"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/18 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-200">
                    {primaryTrend.stat}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    {primaryTrend.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-200 sm:text-base">
                    {primaryTrend.description}
                  </p>
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {supportingTrends.map((trend) => (
                <article key={trend.title} className="rounded-[1.75rem] border border-brand-100 bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-brand-900/65">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-600 dark:text-accent-300">
                    {trend.stat}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {trend.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {trend.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-6xl pb-10 sm:pb-12">
          <div className="rounded-[2rem] border border-brand-100/80 bg-white/95 px-6 py-8 shadow-[0_30px_80px_-30px_rgba(10,37,64,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-brand-900/85 dark:shadow-none sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 divide-y divide-brand-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-white/10">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-6 text-center first:pt-0 last:pb-0 sm:px-8 sm:py-2 sm:first:pt-2 sm:last:pb-2">
                  <p className="text-5xl font-bold tracking-[-0.04em] text-brand-900 dark:text-white sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-lg font-medium text-slate-700 dark:text-slate-300">
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
