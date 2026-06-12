import { solutions, siteConfig } from "@/data/content";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) return { title: "Solution | GrowthPilot" };
  return {
    title: `${solution.title} | GrowthPilot`,
    description: solution.tagline + " — " + solution.problem.slice(0, 120),
  };
}

export default function SolutionPage({ params }: Props) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-text-primary">Solution not found</h1>
        <Link href="/" className="text-accent-primary mt-4 inline-block">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <span className="section-heading">{solution.industries[0]}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            {solution.title}
          </h1>
          <p className="text-accent-primary font-semibold text-xl mb-4">
            {solution.tagline}
          </p>
          <p className="text-text-secondary text-lg max-w-2xl mb-8">
            {solution.problem}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Book Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'm interested in the ${solution.title}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">The Challenge</h2>
              <p className="text-text-secondary leading-relaxed mb-8">{solution.problem}</p>

              <h2 className="text-2xl font-bold text-text-primary mb-4">Our Solution</h2>
              <p className="text-text-secondary leading-relaxed">{solution.solution}</p>
            </div>

            {/* Right */}
            <div>
              <div className="bg-bg-primary rounded-2xl p-8 mb-6 border border-border">
                <h3 className="text-text-primary font-bold text-lg mb-4">What You Get</h3>
                <div className="space-y-3">
                  {solution.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success shrink-0" />
                      <span className="text-text-secondary text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent-primary/5 border border-accent-primary/10 rounded-2xl p-8">
                <h3 className="text-text-primary font-bold text-lg mb-4">Expected Outcomes</h3>
                <div className="space-y-3">
                  {solution.outcomes.map((o, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-accent-primary shrink-0" />
                      <span className="text-text-primary text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Perfect For These Industries
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {solution.industries.map((ind, i) => (
              <span
                key={i}
                className="bg-white border border-border rounded-full px-5 py-2 text-sm font-medium text-text-primary shadow-subtle"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-cta text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Let&apos;s discuss how the {solution.title} can help your business
          grow. Book a free strategy call today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
            Book Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/#pricing" className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
            View Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
