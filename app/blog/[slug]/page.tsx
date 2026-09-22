import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogContent, blogPosts } from "@/data/siteData";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  const content = blogContent[slug];

  if (!post || !content) {
    notFound();
  }

  const morePosts = blogPosts.filter((item) => item.slug !== slug);

  return (
    <main id="main-content" className="overflow-hidden">
      <Navbar />

      <article>
        <section className="pt-14 sm:pt-16">
          <div className="section-shell">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Link href="/blog" className="font-medium transition hover:text-accent-600 dark:hover:text-accent-300">
                Blog
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-slate-700 dark:text-slate-200">{post.category}</span>
            </nav>

            <h1 className="mt-6 max-w-4xl text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              <span>{post.category}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.date}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime}</span>
            </div>

            <div className="relative mt-8 h-64 overflow-hidden rounded-2xl sm:h-96">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1100px"
                priority
              />
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="section-shell">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="max-w-3xl">
                <p className="text-xl leading-9 text-slate-700 dark:text-slate-200">{content.intro}</p>

                {content.sections.map((section) => (
                  <section key={section.heading} className="mt-12">
                    <h2 className="text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-5 text-lg leading-9 text-slate-600 dark:text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
                <div>
                  <h2 className="text-xl font-medium tracking-tight text-slate-950 dark:text-white">Key takeaways</h2>
                  <ul className="mt-5 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    {content.takeaways.map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-300">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="h-3.5 w-3.5" aria-hidden="true">
                            <path d="m5 12.5 4.5 4.5L19 7.5" />
                          </svg>
                        </span>
                        {takeaway}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-medium tracking-tight text-slate-950 dark:text-white">
                    Facing this in your own organization?
                  </h2>
                  <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                    We are happy to talk it through, whether or not it turns into a project.
                  </p>
                  <Link href="/contact" className="button-primary mt-6 w-full">
                    Start a conversation
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>

      <section className="section-spacing bg-white/[0.55] dark:bg-brand-900">
        <div className="section-shell">
          <h2 className="text-2xl font-medium tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            More from the blog
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {morePosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="card-surface group flex h-full flex-col overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-accent-500/35"
              >
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="scale-105 object-cover transition duration-500 group-hover:scale-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-medium tracking-tight text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">{item.excerpt}</p>
                  <span className="mt-5 text-sm font-semibold text-accent-600 dark:text-accent-300">Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
