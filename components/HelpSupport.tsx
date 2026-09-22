import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { contactDetails } from "@/data/siteData";

export default function HelpSupport() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-1">
            <span className="accent-chip">Help &amp; Support</span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
              We&apos;re here to help, every step of the way
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Talk to us on live chat, WhatsApp, or by phone or email — whichever is easiest for you. You will reach a real person, not a ticket queue.
            </p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Email</dt>
                <dd className="mt-1 text-base font-medium text-slate-800 dark:text-slate-100">{contactDetails.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Phone</dt>
                <dd className="mt-1 text-base font-medium text-slate-800 dark:text-slate-100">{contactDetails.phone}</dd>
              </div>
            </dl>

            <Link href="/contact" className="button-primary mt-7">
              Contact Us
            </Link>
          </div>

          <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96 lg:order-2">
            <Image
              src="/photos/support.webp"
              alt="A Madal ICT Solutions support specialist ready to help"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
