import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function HelpSupport() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink dark:text-white">Help &amp; Support</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
              We are here to Help You 24/7
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-accent-600 dark:text-accent-300">
              Talk to us via livechat Send us via WhatsApp Leave a ticket Call us where ever you are.
            </p>

            <Link href="/contact" className="button-primary mt-7">
              Contact Us
            </Link>
          </div>

          <div className="relative h-72 overflow-hidden rounded-[20px] sm:h-96">
            <Image
              src="/photos/help-support.jpg"
              alt="A Madal ICT Solutions support specialist ready to help"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
