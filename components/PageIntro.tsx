type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="pt-14 sm:pt-16">
      <div className="section-shell">
        <span className="accent-chip">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
