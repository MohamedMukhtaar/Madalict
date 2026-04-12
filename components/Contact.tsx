import Image from "next/image";
import { contactDetails, services } from "@/data/siteData";

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
        <Image
          src="/brand.png"
          alt="Madal ICT Solutions logo"
          width={28}
          height={28}
          className="h-7 w-7 rounded-lg object-cover"
        />
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
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-accent dark:bg-accent-400 dark:text-slate-950">
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
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${index % 2 === 0 ? "text-cyan-600 dark:text-cyan-300" : "text-accent-600 dark:text-accent-300"}`}>
                      {item.label}
                    </p>
                    <p className="mt-2 text-base text-slate-700 dark:text-slate-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Company Name
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Your company"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Phone
                  <input
                    type="text"
                    name="phone"
                    placeholder="+252..."
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Choose Service
                  <select
                    name="service"
                    defaultValue=""
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  >
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project subject"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your business needs, goals, and timeline"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </label>

              <button type="submit" className="button-primary w-fit border-0">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
