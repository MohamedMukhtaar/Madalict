import Logo from "@/components/Logo";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  showLogo?: boolean;
};

export default function PageIntro({ eyebrow, title, description, showLogo = false }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden pt-10">
      <div className="section-shell">
        <div className="card-surface relative overflow-hidden px-6 py-10 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,195,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,195,255,0.12),transparent)] bg-[length:42px_42px,auto]" />
          <div className={`grid items-center gap-8 ${showLogo ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}>
            <div>
              <span className="accent-chip">{eyebrow}</span>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {description}
              </p>
            </div>

            {showLogo ? (
              <div className="flex justify-center lg:justify-end">
                <div className="relative overflow-hidden rounded-2xl border border-accent-500/25 bg-brand-900 p-6 shadow-accent">
                  <Logo surface="navy" className="h-[74px] sm:h-[86px] lg:h-[96px]" priority />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
