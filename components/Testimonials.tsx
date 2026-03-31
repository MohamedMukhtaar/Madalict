import SectionTitle from "@/components/SectionTitle";
import { testimonials } from "@/data/siteData";

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
              <div className="flex items-center gap-1 text-accent-500 dark:text-accent-300">
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
              </div>
              <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
