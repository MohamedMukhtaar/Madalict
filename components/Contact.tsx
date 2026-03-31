import { contactDetails } from "@/data/siteData";

const contactInfo = [
  { label: "Company", value: contactDetails.companyName },
  { label: "Email", value: contactDetails.email },
  { label: "Phone", value: contactDetails.phone },
  { label: "Location", value: contactDetails.location },
];

export default function Contact() {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <span className="accent-chip">
              Contact
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Let&apos;s build the right digital solution for your business
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Whether you need a professional website, a custom internal system, or strategic ICT consulting, Madal ICT Solutions is ready to support your next step.
            </p>
            <div className="mt-10 grid gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="card-surface px-5 py-4"
                >
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${index % 2 === 0 ? "text-cyan-600 dark:text-cyan-300" : "text-accent-600 dark:text-accent-300"}`}>
                    {item.label}
                  </p>
                  <p className="mt-2 text-base text-slate-700 dark:text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-900/92 p-6 text-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-slate-900/75">
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-100">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your full name"
                    className="rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-100">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-100">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="Project subject"
                  className="rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-100">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your business needs"
                  className="rounded-2xl border border-slate-700 bg-slate-800/90 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/10"
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
