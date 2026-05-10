import Image from "next/image";
import Link from "next/link";
import { heroStats, trendHighlights } from "@/data/siteData";

export default function Hero() {
  const primaryTrend = trendHighlights[0];
  const supportingTrends = trendHighlights.slice(1);

  return (
    <section className="relative overflow-hidden bg-brand-900 pb-8 pt-8 text-white sm:pb-12">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,122,0,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,122,0,0.18),rgba(7,7,7,0)_22rem)] bg-[length:44px_44px,auto]" />
      <div className="absolute right-0 top-0 h-full w-1/2 border-l border-accent-500/15 bg-[repeating-linear-gradient(90deg,rgba(255,122,0,0.06)_0px,rgba(255,122,0,0.06)_1px,transparent_1px,transparent_32px)] opacity-70" />
      <div className="section-shell pt-8 sm:pt-10">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <span className="accent-chip bg-accent-500/10 text-accent-200">
              Madal ICT Solutions
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Digital systems shaped with <span className="text-accent-400">black and orange brand clarity</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
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
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 shadow-[0_12px_30px_-25px_rgba(0,0,0,0.7)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <article className="group overflow-hidden rounded-2xl border border-accent-500/25 bg-white/5 p-3 shadow-[0_35px_90px_-45px_rgba(255,122,0,0.55)] backdrop-blur-xl">
              <div className="relative min-h-[440px] overflow-hidden rounded-xl">
                <Image
                  src={primaryTrend.image}
                  alt="Professional website development workspace"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/38 to-brand-900/10" />
                <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-brand-900/75 p-3 backdrop-blur">
                  <Image
                    src="/brand.png"
                    alt="Madal ICT Solutions mark"
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-lg object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-300">
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
                <article key={trend.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-soft backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-300">
                    {trend.stat}
                  </p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-white">
                    {trend.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {trend.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-6xl pb-10 sm:pb-12">
          <div className="rounded-2xl border border-accent-500/25 bg-white/[0.06] px-6 py-8 shadow-[0_30px_80px_-30px_rgba(255,122,0,0.3)] backdrop-blur-xl sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-6 text-center first:pt-0 last:pb-0 sm:px-8 sm:py-2 sm:first:pt-2 sm:last:pb-2">
                  <p className="text-5xl font-bold tracking-[-0.04em] text-accent-400 sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-lg font-medium text-slate-300">
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
