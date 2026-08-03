import SectionTitle from "@/components/SectionTitle";
import { testimonials } from "@/data/siteData";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Testimonials"
          title="What clients say about working with us"
          description="Professional relationships grow stronger when delivery is thoughtful, dependable, and aligned with business goals."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card-surface p-7">
              <div
                className="flex items-center gap-1 text-accent-600 dark:text-accent-300"
                role="img"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role ? `${testimonial.role}, ` : ""}
                  {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
