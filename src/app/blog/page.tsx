import { blogPosts } from "@/data/content";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog | GrowthPilot — Business Growth Insights",
  description:
    "Expert insights on website design, SEO, lead generation, and digital growth strategies for local businesses.",
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const regular = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">Blog & Insights</span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Business Growth{" "}
            <span className="text-gradient">Knowledge Hub</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Expert insights on websites, SEO, lead generation, and digital
            growth strategies for local businesses.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-accent-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 px-4 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regular.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-cta text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-white/70 mb-6 max-w-xl mx-auto">
          Reading is great, but action is better. Let&apos;s build your growth
          engine today.
        </p>
        <Link href="/contact" className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
          Book Free Strategy Call <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </>
  );
}
