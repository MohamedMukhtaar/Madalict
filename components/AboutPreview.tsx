import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import { heroStats } from "@/data/siteData";

const highlights = [
  "Direct access to the people building your project",
  "A clear process from discovery to launch",
  "Support that continues after handover",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3 w-3" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPreview() {
  const stat = heroStats[0];

  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <div className="relative">
            <div className="relative h-72 overflow-hidden rounded-[20px] sm:h-96 lg:h-[420px]">
              <Image
                src="/photos/about-preview.webp"
                alt="The Madal ICT Solutions team planning a project together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="card-surface absolute -bottom-6 -right-4 hidden px-6 py-5 sm:block">
              <p className="text-2xl font-semibold tracking-[-0.02em] text-accent-600 dark:text-accent-400">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs font-medium text-ink dark:text-slate-300">{stat.label}</p>
            </div>
          </div>

          <div>
            <span className="accent-chip">About Us</span>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-ink dark:text-white sm:text-3xl">
              A digital partner for businesses that want more than a basic presence
            </h2>
            <p className="mt-4 text-base leading-7 text-ink dark:text-slate-300">
              From first impression to back-office workflows, we design digital systems that feel branded, fast, and trustworthy.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink dark:text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/about" className="button-secondary mt-7 inline-flex">
              Learn more about us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
