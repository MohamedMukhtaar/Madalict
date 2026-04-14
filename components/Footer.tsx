import Image from "next/image";
import Link from "next/link";
import { contactDetails, quickLinks, services, socialLinks } from "@/data/siteData";

function SocialIcon({ label, className = "h-5 w-5" }: { label: string; className?: string }) {
  switch (label) {
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.36 22.93c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.69.08-.69 1.16.08 1.77 1.18 1.77 1.18 1.03 1.76 2.71 1.25 3.37.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.13-1.17 3.13-1.17.63 1.58.24 2.75.12 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.13 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.438H7.078v-3.49h3.047V9.413c0-3.021 1.792-4.689 4.533-4.689 1.312 0 2.686.236 2.686.236v2.97H15.83c-1.49 0-1.955.931-1.955 1.887v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073Z" />
        </svg>
      );
    case "WhatsApp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.56 0 .24 5.3.24 11.82c0 2.08.54 4.11 1.57 5.9L0 24l6.46-1.69a11.8 11.8 0 0 0 5.61 1.43h.01c6.51 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.38-8.44Zm-8.45 18.26h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.83 1 1.02-3.74-.24-.39a9.8 9.8 0 0 1-1.5-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.89a9.78 9.78 0 0 1 2.89 6.96c0 5.43-4.42 9.84-9.85 9.84Zm5.4-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.15-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.35-1.47-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.12.29-.32.44-.49.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.2 2.06 3.15 4.99 4.41.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.12-.27-.2-.56-.34Z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.24-8.27L.8 2h6.4l4.43 5.84L18.9 2Zm-1.1 18h1.72L6.27 3.9H4.43L17.8 20Z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M19.59 6.69A4.83 4.83 0 0 1 17.26 6V14.7a6.75 6.75 0 1 1-6.75-6.75c.19 0 .38.02.57.05v3.32a3.41 3.41 0 1 0 2.84 3.38V0h3.18a4.84 4.84 0 0 0 2.49 4.23v2.46Z" />
        </svg>
      );
    case "Gmail":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M2.4 4.8A2.4 2.4 0 0 1 4.8 2.4h14.4a2.4 2.4 0 0 1 2.4 2.4v14.4a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V4.8Zm2.4.5v13.4h2.4v-9.2L12 13l4.8-3.5v9.2h2.4V5.3L12 10.5 4.8 5.3Z" />
        </svg>
      );
    default:
      return null;
  }
}

type FooterProps = {
  forceDark?: boolean;
};

export default function Footer({ forceDark = false }: FooterProps) {
  const featuredServices = services.slice(0, 4);
  const iconSocials = socialLinks.filter((item) => item.label !== "Gmail");
  const gmailLink = socialLinks.find((item) => item.label === "Gmail");

  return (
    <footer className={`relative border-t ${forceDark ? "border-white/10 bg-[#05070a] text-white" : "border-brand-100/70 dark:border-white/10"}`}>
      <div className="section-shell py-16">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.9fr_0.8fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className={`overflow-hidden rounded-2xl border shadow-sm ${forceDark ? "border-white/10 bg-slate-900" : "border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"}`}>
                <Image
                  src="/brand.png"
                  alt="Madal ICT Solutions logo"
                  width={90}
                  height={90}
                  className="h-16 w-16 object-cover sm:h-20 sm:w-20"
                />
              </div>
              <div>
                <p className={`text-[2rem] font-bold tracking-[-0.04em] ${forceDark ? "text-white" : "text-slate-950 dark:text-white"}`}>
                  Madal ICT Solutions
                </p>
                <p className={`mt-1 text-base font-medium ${forceDark ? "text-accent-300" : "text-accent-500 dark:text-accent-300"}`}>
                  Professional digital systems for growing businesses
                </p>
              </div>
            </Link>

            <p className={`mt-8 max-w-[26rem] text-[1.05rem] leading-8 ${forceDark ? "text-slate-300" : "text-slate-700 dark:text-slate-200"}`}>
              We design polished websites, dependable systems, and growth-ready digital tools that help organizations look stronger, load faster, and convert with more confidence.
            </p>
          </div>

          <div>
            <h3 className={`text-[1.45rem] font-semibold tracking-[-0.03em] ${forceDark ? "text-white" : "text-slate-950 dark:text-white"}`}>Services</h3>
            <div className="mt-7 flex flex-col gap-4">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href="/services"
                  className={`text-[1.02rem] font-medium transition ${forceDark ? "text-slate-300 hover:text-accent-300" : "text-slate-700 hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-300"}`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-[1.45rem] font-semibold tracking-[-0.03em] ${forceDark ? "text-white" : "text-slate-950 dark:text-white"}`}>Pages</h3>
            <div className="mt-7 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[1.02rem] font-medium transition ${forceDark ? "text-slate-300 hover:text-accent-300" : "text-slate-700 hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-300"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-[1.45rem] font-semibold tracking-[-0.03em] ${forceDark ? "text-white" : "text-slate-950 dark:text-white"}`}>Contact</h3>
            <div className={`mt-7 space-y-4 text-[1.02rem] ${forceDark ? "text-slate-300" : "text-slate-700 dark:text-slate-200"}`}>
              {gmailLink ? (
                <Link href={gmailLink.href} className={`block font-medium transition ${forceDark ? "hover:text-accent-300" : "hover:text-accent-600 dark:hover:text-accent-300"}`}>
                  {contactDetails.email}
                </Link>
              ) : null}
              <p className="font-medium">{contactDetails.phone}</p>
              <p>{contactDetails.location}</p>
            </div>

            <div className={`mt-9 flex flex-wrap items-center gap-5 ${forceDark ? "text-white" : "text-slate-900 dark:text-white"}`}>
              {iconSocials.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className={`transition hover:-translate-y-0.5 ${forceDark ? "hover:text-accent-300" : "hover:text-accent-600 dark:hover:text-accent-300"}`}
                >
                  <SocialIcon label={item.label} className="h-7 w-7" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={`mt-16 flex flex-col gap-4 border-t pt-7 pr-20 text-base sm:flex-row sm:items-center sm:justify-between sm:pr-0 ${forceDark ? "border-white/10 text-slate-400" : "border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-400"}`}>
          <p className={`font-medium ${forceDark ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>Copyright (c) {new Date().getFullYear()} {contactDetails.companyName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5 sm:justify-end">
            <span className="font-medium">Privacy Policy</span>
            <span className="font-medium">Terms</span>
            <span className="font-medium">Pricing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
