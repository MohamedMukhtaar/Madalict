/**
 * Brand logo from the Madal ICT brand book.
 *
 * The mark carries white shapes, so the artwork must match the surface it sits on:
 *   surface="light"  navy wordmark            -> white / light neutral panels
 *   surface="navy"   white wordmark, cyan mark -> navy panels
 *   surface="cyan"   white wordmark, navy mark -> cyan panels
 *   surface="auto"   swaps light/navy with the colour theme
 */

type Surface = "auto" | "light" | "navy" | "cyan";

type LogoProps = {
  surface?: Surface;
  markOnly?: boolean;
  className?: string;
  priority?: boolean;
};

const LOCKUP_RATIO = 462 / 155;
const MARK_RATIO = 271 / 262;

function src(surface: Exclude<Surface, "auto">, markOnly: boolean) {
  if (markOnly) {
    return surface === "light" ? "/brand/mark-on-light.svg" : "/brand/mark-on-navy.svg";
  }

  return `/brand/logo-on-${surface}.svg`;
}

export default function Logo({
  surface = "auto",
  markOnly = false,
  className = "h-10",
  priority = false,
}: LogoProps) {
  const ratio = markOnly ? MARK_RATIO : LOCKUP_RATIO;
  const height = 155;
  const width = Math.round(height * ratio);

  const common = {
    alt: "Madal ICT Solutions",
    width,
    height,
    // Logos are small vector files; letting the browser fetch them eagerly
    // avoids a flash of missing branding in the header.
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
  };

  if (surface === "auto") {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...common}
          src={src("light", markOnly)}
          className={`${className} w-auto object-contain dark:hidden`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...common}
          src={src("navy", markOnly)}
          className={`${className} hidden w-auto object-contain dark:block`}
        />
      </>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...common} src={src(surface, markOnly)} className={`${className} w-auto object-contain`} />;
}
