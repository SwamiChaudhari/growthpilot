import { founder, siteConfig } from "@/data/content";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About GrowthPilot | Our Story & Mission",
  description:
    "Learn about GrowthPilot and founder Swami Chaudhari. We're on a mission to help local businesses grow through technology.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            We&apos;re Building{" "}
            <span className="text-gradient">Growth Engines</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-72 bg-bg-primary border border-border rounded-3xl flex items-center justify-center shadow-card">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-3 shadow-cta">
                    <span className="text-white font-black text-2xl">
                      {founder.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <p className="text-text-primary font-bold">{founder.name}</p>
                  <p className="text-accent-primary text-sm">{founder.role}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Meet {founder.name}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {founder.bio}
              </p>
              <div className="bg-accent-primary/5 border border-accent-primary/10 rounded-xl p-4 mb-4">
                <p className="text-text-primary text-sm italic">
                  &ldquo;{founder.mission}&rdquo;
                </p>
              </div>
              <p className="text-text-secondary text-sm italic">
                {founder.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {founder.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border shadow-subtle">
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                <span className="text-text-primary font-medium text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-cta text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Ready to grow your business? Get in touch and let&apos;s discuss how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
