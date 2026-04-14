import Link from "next/link";
import { contactDetails, socialLinks } from "@/data/siteData";

function FloatingIcon({ type }: { type: "whatsapp" | "phone" }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
        <path d="M6.75 4.5h2.1l1.05 3.15-1.5 1.5a14.06 14.06 0 0 0 6.45 6.45l1.5-1.5 3.15 1.05v2.1a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 5.25 6a1.5 1.5 0 0 1 1.5-1.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.56 0 .24 5.3.24 11.82c0 2.08.54 4.11 1.57 5.9L0 24l6.46-1.69a11.8 11.8 0 0 0 5.61 1.43h.01c6.51 0 11.82-5.3 11.82-11.82 0-3.16-1.23-6.13-3.38-8.44Zm-8.45 18.26h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.83 1 1.02-3.74-.24-.39a9.8 9.8 0 0 1-1.5-5.23c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.89a9.78 9.78 0 0 1 2.89 6.96c0 5.43-4.42 9.84-9.85 9.84Zm5.4-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.94 1.15-.17.2-.34.22-.63.07-.29-.15-1.24-.46-2.35-1.47-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.12.29-.32.44-.49.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.58-.9-2.16-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.05 2.86 1.2 3.06.15.2 2.06 3.15 4.99 4.41.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.07-.12-.27-.2-.56-.34Z" />
    </svg>
  );
}

export default function FloatingContactButtons() {
  const whatsappLink = socialLinks.find((item) => item.label === "WhatsApp");

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <Link
        href={`tel:${contactDetails.phoneHref}`}
        aria-label={`Call ${contactDetails.companyName}`}
        className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-900 text-white shadow-glow transition hover:scale-105 md:hidden"
      >
        <FloatingIcon type="phone" />
      </Link>
      {whatsappLink ? (
        <Link
          href={whatsappLink.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat with ${contactDetails.companyName} on WhatsApp`}
          className="pointer-events-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.8)] transition hover:scale-105"
        >
          <FloatingIcon type="whatsapp" />
        </Link>
      ) : null}
    </div>
  );
}
