import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal className="card-surface relative flex flex-col gap-6 overflow-hidden p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-100/70 blur-3xl dark:bg-accent-500/10" />
          <div className="max-w-2xl">
            <span className="accent-chip">About Us</span>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              We partner with businesses that want more than a basic online presence. From first impression to back-office workflows, we design digital systems that feel branded, fast, and trustworthy.
            </p>
          </div>
          <Link href="/about" className="button-secondary shrink-0">
            Learn more about us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
