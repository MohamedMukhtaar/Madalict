import Link from "next/link";
import { heroStats } from "@/data/siteData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.16),_transparent_24%),radial-gradient(circle_at_left,_rgba(34,211,238,0.15),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.12),_transparent_20%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_24%),radial-gradient(circle_at_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.1),_transparent_20%)]" />
      <div className="section-shell pt-10 sm:pt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <span className="accent-chip bg-white/90 dark:bg-slate-900/80">
              Premium ICT services for growing organizations
            </span>
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Let&apos;s Grow Your Business with <span className="text-accent-500 dark:text-accent-300">Smart Digital Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Madal ICT Solutions helps businesses build high-impact websites,
              custom systems, mobile apps, and digital transformation strategies
              that improve efficiency, visibility, and long-term growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="button-primary">
                Get Started
              </Link>
              <Link href="#services" className="button-secondary">
                Our Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-12 h-24 w-24 rounded-full bg-accent-300/30 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl dark:bg-brand-500/20" />

            <div className="card-surface relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-hero-grid bg-[size:30px_30px] opacity-40 dark:opacity-15" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-950 px-5 py-4 text-white shadow-soft dark:border-white/10 dark:bg-slate-950/90">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent-300">
                      Delivery Overview
                    </p>
                    <p className="mt-2 text-xl font-semibold">System rollout in progress</p>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-sm text-accent-200">
                    92%
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-900/90">
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Core Capabilities</p>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                      <li>Web platforms</li>
                      <li>Business systems</li>
                      <li>Mobile applications</li>
                      <li>ICT advisory</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-accent-100 bg-gradient-to-br from-accent-50 to-cyan-50 p-5 dark:border-accent-500/20 dark:from-accent-500/10 dark:to-brand-500/10">
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">Client Focus</p>
                    <p className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
                      24/7
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Reliable support and proactive improvement for critical systems.
                    </p>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/90">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                        Transformation Snapshot
                      </p>
                      <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                        Digital readiness dashboard
                      </p>
                    </div>
                    <span className="rounded-full bg-accent-50 px-3 py-1 text-sm font-semibold text-accent-700 dark:bg-accent-500/10 dark:text-accent-300">
                      Live Insight
                    </span>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>Automation adoption</span>
                        <span>88%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-2 w-[88%] rounded-full bg-accent-500" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>Client onboarding flow</span>
                        <span>76%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-2 w-[76%] rounded-full bg-brand-500" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>Data visibility</span>
                        <span>94%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-2 w-[94%] rounded-full bg-slate-900 dark:bg-slate-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-6xl pb-20 sm:pb-24">
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
