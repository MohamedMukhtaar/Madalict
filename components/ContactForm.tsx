"use client";

import { useState } from "react";
import { contactDetails, services } from "@/data/siteData";

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  subject: "",
  message: "",
};

const fieldClass =
  "rounded-2xl border border-slate-200 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-400 focus:ring-4 focus:ring-accent-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white";
const invalidFieldClass =
  "rounded-2xl border border-red-400 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 dark:border-red-500/70 dark:bg-slate-900 dark:text-white";
const labelClass = "grid gap-2 text-sm font-medium text-ink dark:text-slate-200";

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};

  if (form.fullName.trim().length < 2) {
    errors.fullName = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.service) {
    errors.service = "Please choose the service you need.";
  }

  if (form.message.trim().length < 15) {
    errors.message = "Please tell us a little more about your project.";
  }

  return errors;
}

function buildSummary(form: FormState) {
  const lines = [
    `New project inquiry for ${contactDetails.companyName}`,
    "",
    `Name: ${form.fullName.trim()}`,
    form.companyName.trim() ? `Company: ${form.companyName.trim()}` : null,
    `Email: ${form.email.trim()}`,
    form.phone.trim() ? `Phone: ${form.phone.trim()}` : null,
    `Service: ${form.service}`,
    form.subject.trim() ? `Subject: ${form.subject.trim()}` : null,
    "",
    "Message:",
    form.message.trim(),
  ];

  return lines.filter((line) => line !== null).join("\n");
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  const update = (field: keyof FormState) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handoff = (channel: "whatsapp" | "email") => {
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = document.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    const summary = buildSummary(form);

    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(summary)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const subject = form.subject.trim() || `${form.service} inquiry from ${form.fullName.trim()}`;
      window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(summary)}`;
    }

    setSentVia(channel);
  };

  if (sentVia) {
    return (
      <div className="card-surface flex flex-col items-start p-6 sm:p-8">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500 text-brand-900 shadow-accent">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink dark:text-white">
          Your details are ready to send
        </h3>
        <p className="mt-4 text-base leading-7 text-ink dark:text-slate-300">
          {sentVia === "whatsapp"
            ? "We opened WhatsApp with your project details already written out. Press send there and we will reply shortly."
            : "We opened your email app with your project details already written out. Press send there and we will reply shortly."}
        </p>
        <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
          If nothing opened, reach us directly at{" "}
          <a className="font-semibold text-accent-600 dark:text-accent-300" href={`mailto:${contactDetails.email}`}>
            {contactDetails.email}
          </a>{" "}
          or{" "}
          <a className="font-semibold text-accent-600 dark:text-accent-300" href={`tel:${contactDetails.phoneHref}`}>
            {contactDetails.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(emptyForm);
            setSentVia(null);
          }}
          className="button-secondary mt-8"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="card-surface p-6 sm:p-8">
      <form
        className="grid gap-5"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          handoff("whatsapp");
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Full Name
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={(event) => update("fullName")(event.target.value)}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.fullName)}
              className={errors.fullName ? invalidFieldClass : fieldClass}
            />
            {errors.fullName ? <span className="text-xs font-medium text-red-500">{errors.fullName}</span> : null}
          </label>
          <label className={labelClass}>
            Company Name
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={(event) => update("companyName")(event.target.value)}
              placeholder="Your company"
              className={fieldClass}
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => update("email")(event.target.value)}
              placeholder="you@example.com"
              aria-invalid={Boolean(errors.email)}
              className={errors.email ? invalidFieldClass : fieldClass}
            />
            {errors.email ? <span className="text-xs font-medium text-red-500">{errors.email}</span> : null}
          </label>
          <label className={labelClass}>
            Phone
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(event) => update("phone")(event.target.value)}
              placeholder="+252..."
              className={fieldClass}
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClass}>
            Choose Service
            <select
              name="service"
              value={form.service}
              onChange={(event) => update("service")(event.target.value)}
              aria-invalid={Boolean(errors.service)}
              className={errors.service ? invalidFieldClass : fieldClass}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.service ? <span className="text-xs font-medium text-red-500">{errors.service}</span> : null}
          </label>
          <label className={labelClass}>
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={(event) => update("subject")(event.target.value)}
              placeholder="Project subject"
              className={fieldClass}
            />
          </label>
        </div>

        <label className={labelClass}>
          Message
          <textarea
            name="message"
            rows={6}
            value={form.message}
            onChange={(event) => update("message")(event.target.value)}
            placeholder="Tell us about your business needs, goals, and timeline"
            aria-invalid={Boolean(errors.message)}
            className={errors.message ? invalidFieldClass : fieldClass}
          />
          {errors.message ? <span className="text-xs font-medium text-red-500">{errors.message}</span> : null}
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="submit" className="button-primary border-0">
            Send on WhatsApp
          </button>
          <button type="button" onClick={() => handoff("email")} className="button-secondary">
            Send by Email
          </button>
        </div>

        <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
          Your details are composed into a message and opened in WhatsApp or your email app, so nothing is sent until you
          press send.
        </p>
      </form>
    </div>
  );
}
