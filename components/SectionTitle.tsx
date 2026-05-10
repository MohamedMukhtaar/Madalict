type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl";
  const titleClass = invert ? "text-white" : "text-slate-950 dark:text-white";
  const descriptionClass = invert ? "text-slate-300" : "text-slate-600 dark:text-slate-300";

  return (
    <div className={`space-y-4 ${alignment}`}>
      <span className="accent-chip">
        {eyebrow}
      </span>
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`text-base leading-7 sm:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}
