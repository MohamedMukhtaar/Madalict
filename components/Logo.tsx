/**
 * Brand logo from the Madal ICT brand book.
 *
 * The full lockup (icon + "Madal" + "ict solution") is baked into a single
 * image per theme, since the wordmark and the flanking rule lines around
 * "ict solution" are hand-kerned artwork, not something CSS should recreate.
 * `logo-lockup-light.png` carries navy text for light backgrounds,
 * `logo-lockup-dark.png` carries white text for navy/dark backgrounds.
 */

type Surface = "auto" | "light" | "navy" | "cyan";

type LogoProps = {
  surface?: Surface;
  markOnly?: boolean;
  className?: string;
  priority?: boolean;
};

const LOCKUP_RATIO = 2468 / 784;
const MARK_RATIO = 830 / 784;

function lockupSrc(surface: Exclude<Surface, "auto">) {
  return surface === "navy" ? "/brand/logo-lockup-dark.png" : "/brand/logo-lockup-light.png";
}

export default function Logo({
  surface = "auto",
  markOnly = false,
  className = "h-10",
  priority = false,
}: LogoProps) {
  const ratio = markOnly ? MARK_RATIO : LOCKUP_RATIO;
  const height = 784;
  const width = Math.round(height * ratio);

  const common = {
    alt: "Madal ICT Solutions",
    width,
    height,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
  };

  if (markOnly) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...common} src="/brand/logo-icon.png" className={`${className} w-auto object-contain`} />;
  }

  if (surface === "auto") {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...common}
          src={lockupSrc("light")}
          className={`${className} w-auto object-contain dark:hidden`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...common}
          src={lockupSrc("navy")}
          className={`${className} hidden w-auto object-contain dark:block`}
        />
      </>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...common} src={lockupSrc(surface)} className={`${className} w-auto object-contain`} />;
}
