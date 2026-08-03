import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";
import { contactDetails, socialLinks } from "@/data/siteData";

const contactInfo = [
  { label: "Company", value: contactDetails.companyName, icon: "company" },
  { label: "Email", value: contactDetails.email, icon: "email" },
  { label: "Phone", value: contactDetails.phone, icon: "phone" },
  { label: "Location", value: contactDetails.location, icon: "location" },
];

function ContactInfoIcon({ icon }: { icon: string }) {
  if (icon === "company") {
    return (
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500/10 dark:bg-accent-500/15">
        <Logo surface="auto" markOnly className="h-6" />
      </div>
    );
  }

  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    className: "h-5 w-5",
    "aria-hidden": true,
  };

  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent dark:bg-accent-400 dark:text-slate-950">
      {icon === "email" ? (
        <svg {...commonProps}>
          <path d="M4.5 6.75 12 12l7.5-5.25" />
          <path d="M4.5 7.5h15v9h-15z" />
        </svg>
      ) : null}
      {icon === "phone" ? (
        <svg {...commonProps}>
          <path d="M6.75 4.5h2.1l1.05 3.15-1.5 1.5a14.06 14.06 0 0 0 6.45 6.45l1.5-1.5 3.15 1.05v2.1a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 5.25 6a1.5 1.5 0 0 1 1.5-1.5Z" />
        </svg>
      ) : null}
      {icon === "location" ? (
        <svg {...commonProps}>
          <path d="M12 20.25s6-5.2 6-10.5a6 6 0 1 0-12 0c0 5.3 6 10.5 6 10.5Z" />
          <circle cx="12" cy="9.75" r="2.25" />
        </svg>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const whatsappLink = socialLinks.find((item) => item.label === "WhatsApp");

  return (
    <section id="contact-form" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <span className="accent-chip">
              Contact
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Let&apos;s plan a digital solution that feels strong from day one
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Share your goals, choose the service you need, and tell us how your business currently works. We&apos;ll help shape a cleaner, stronger next step.
            </p>
            <div className="mt-10 grid gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="card-surface flex items-center gap-4 px-5 py-4"
                >
                  <ContactInfoIcon icon={item.icon} />
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${index % 2 === 0 ? "text-brand-700 dark:text-brand-300" : "text-accent-600 dark:text-accent-300"}`}>
                      {item.label}
                    </p>
                    <p className="mt-2 text-base text-slate-700 dark:text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link href={`tel:${contactDetails.phoneHref}`} className="button-primary">
                Call on Mobile
              </Link>
              {whatsappLink ? (
                <Link href={whatsappLink.href} target="_blank" rel="noreferrer" className="button-secondary">
                  Chat on WhatsApp
                </Link>
              ) : null}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
