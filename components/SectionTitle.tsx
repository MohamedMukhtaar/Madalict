import Reveal from "@/components/Reveal";

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
  const titleClass = invert ? "text-white" : "text-ink dark:text-white";
  const descriptionClass = invert ? "text-slate-300" : "text-ink dark:text-slate-300";

  return (
    <Reveal className={`space-y-4 ${alignment}`}>
      <span className="accent-chip">
        {eyebrow}
      </span>
      <h2 className={`text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`text-base leading-7 sm:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </Reveal>
  );
}
