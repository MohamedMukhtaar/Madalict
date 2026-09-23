import Link from "next/link";
import Reveal from "@/components/Reveal";
import { capabilities } from "@/data/siteData";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CapabilitiesGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-white sm:text-3xl lg:text-4xl">
          Enough talk, let&apos;s get started
        </h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <p className="text-base leading-7 text-ink dark:text-slate-300 sm:text-lg">
            Alongside our core services, our team is ready to support the broader work that keeps your business moving.
          </p>
          <Link href="/contact" className="button-primary shrink-0 text-white dark:text-white">
            Get Started
          </Link>
        </div>
      </Reveal>

      <Reveal className="flex flex-col gap-5">
        {capabilities.map((capability) => (
          <div key={capability.title} className="flex items-center gap-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
              <CheckIcon />
            </span>
            <span className="text-base font-medium text-ink dark:text-slate-100">{capability.title}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
