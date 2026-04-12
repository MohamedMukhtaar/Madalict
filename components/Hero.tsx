import Image from "next/image";
import Link from "next/link";
import { heroStats, trendHighlights } from "@/data/siteData";

export default function Hero() {
  const supportingTrends = trendHighlights.slice(1);

  return (
    <section className="relative overflow-hidden pb-8 pt-8 sm:pb-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[48rem] bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.15),_transparent_22%),radial-gradient(circle_at_left,_rgba(34,211,238,0.12),_transparent_26%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(248,250,252,0.7))] dark:bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_24%),radial-gradient(circle_at_left,_rgba(34,211,238,0.12),_transparent_24%),linear-gradient(180deg,_rgba(2,6,23,0.88),_rgba(15,23,42,0.76))]" />
      <div className="absolute inset-x-0 top-16 -z-10 mx-auto hidden h-[34rem] max-w-7xl rounded-[3rem] border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),rgba(255,255,255,0.08))] blur-3xl dark:border-white/5 dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] lg:block" />
      <div className="section-shell pt-8 sm:pt-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <span className="accent-chip bg-white/90 dark:bg-slate-900/80">
              Modern ICT systems for growth-focused organizations
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              We build ICT products that make your business feel <span className="text-accent-500 dark:text-accent-300">faster, clearer, and more trusted</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Madal ICT Solutions designs premium websites, dependable business systems, and practical digital tools that help teams serve customers better and operate with confidence.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Book a Free Consultation
              </Link>
              <Link href="/about" className="button-secondary">
                See Our Approach
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Websites", "Business Systems", "Mobile Apps", "Database Solutions"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/90 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_-25px_rgba(15,23,42,0.7)] dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <article className="group card-surface overflow-hidden p-3">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem]">
                <Image
                  src="/pexels-pixabay-39559.jpg"
                  alt="Computer programs and digital systems interface"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-6xl pb-10 sm:pb-12">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 px-6 py-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.22)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/85 dark:shadow-none sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-slate-800">
              {heroStats.map((stat) => (
                <div key={stat.label} className="py-6 text-center first:pt-0 last:pb-0 sm:px-8 sm:py-2 sm:first:pt-2 sm:last:pb-2">
                  <p className="text-5xl font-bold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl">
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
