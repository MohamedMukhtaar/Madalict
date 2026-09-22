import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { blogPosts } from "@/data/siteData";

type BlogPreviewProps = {
  limit?: number;
};

export default function BlogPreview({ limit }: BlogPreviewProps) {
  const visiblePosts = typeof limit === "number" ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="section-spacing bg-white/[0.55] dark:bg-brand-900">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Blog"
          title="Thoughtful notes on digital growth and product quality"
          description="The blog is positioned as a calm, useful resource instead of filler, helping the brand feel more credible and current."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <article key={post.slug} className="group card-surface overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-accent-500/35">
              <div className="relative h-52 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="scale-105 object-cover transition duration-500 group-hover:scale-100"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-slate-950 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-accent-600 transition hover:text-accent-700 dark:text-accent-300"
                >
                  Read the article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
