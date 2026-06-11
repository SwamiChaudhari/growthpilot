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
          <span className="inline-block text-gold-400 font-bold uppercase tracking-widest text-sm mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We&apos;re Building{" "}
            <span className="text-gradient-gold">Growth Engines</span>
          </h1>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-64 h-72 bg-dark-900 border border-gold-400/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-dark-900 font-black text-2xl">
                      {founder.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <p className="text-white font-bold">{founder.name}</p>
                  <p className="text-gold-400 text-sm">{founder.role}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark-900 mb-4">
                Meet {founder.name}
              </h2>
              <p className="text-dark-500 leading-relaxed mb-4">
                {founder.bio}
              </p>
              <div className="bg-gold-400/5 border border-gold-400/20 rounded-xl p-4 mb-4">
                <p className="text-dark-700 text-sm italic">
                  &ldquo;{founder.mission}&rdquo;
                </p>
              </div>
              <p className="text-dark-500 text-sm italic">
                {founder.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gradient-section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-900 text-center mb-10">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {founder.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-dark-100">
                <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-dark-700 font-medium text-sm">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-dark-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-dark-300 mb-8 max-w-xl mx-auto">
          Ready to grow your business? Get in touch and let&apos;s discuss how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="btn-primary">
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
