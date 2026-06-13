import { pricingPlans, pricingPageContent, siteConfig } from "@/data/content";
import { CheckCircle, MessageCircle, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Pricing | GrowthPilot — Website Packages for Local Businesses",
  description:
    "Simple, transparent pricing for professional websites. Starter from ₹14,999. Business, Premium, and Enterprise plans available. Book a free strategy call.",
  openGraph: {
    title: "Pricing | GrowthPilot Website Packages",
    description: "Simple, transparent pricing for professional websites. Starter from ₹14,999.",
    type: "website",
    locale: "en_IN",
  },
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">Pricing</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 md:mb-4 tracking-tight">
            {pricingPageContent.title}
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            {pricingPageContent.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-14 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pricingPlans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl md:rounded-2xl p-5 md:p-6 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-cta text-white shadow-cta relative"
                    : "bg-white border border-border shadow-card"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accent-primary text-xs font-bold px-3 py-1 rounded-full shadow-card">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-3 md:mb-4 mt-1 md:mt-2">
                  <h3
                    className={`text-base md:text-lg font-bold ${
                      plan.highlighted ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs md:text-sm ${
                      plan.highlighted ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                </div>

                <div className="mb-3 md:mb-4">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-2xl md:text-3xl font-bold ${
                        plan.highlighted ? "text-white" : "text-text-primary"
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span
                        className={`text-sm line-through ${
                          plan.highlighted ? "text-white/50" : "text-text-muted"
                        }`}
                      >
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-[10px] md:text-xs mt-1 ${
                      plan.highlighted ? "text-white/60" : "text-text-muted"
                    }`}
                  >
                    One-time investment
                  </p>
                </div>

                <p
                  className={`text-sm mb-4 md:mb-6 ${
                    plan.highlighted ? "text-white/80" : "text-text-secondary"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="flex-1 space-y-2 md:space-y-2.5 mb-5 md:mb-6">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-white/80" : "text-success"
                        }`}
                      />
                      <span
                        className={`text-xs md:text-sm ${
                          plan.highlighted ? "text-white/90" : "text-text-secondary"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm ${
                    plan.highlighted
                      ? "bg-white text-accent-primary hover:bg-white/90"
                      : "btn-secondary"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="mt-10 md:mt-14 text-center">
            <div className="inline-flex items-center gap-3 bg-bg-primary border border-border rounded-2xl px-6 py-4 shadow-subtle">
              <Shield className="w-8 h-8 text-accent-primary shrink-0" />
              <div className="text-left">
                <p className="text-text-primary font-semibold text-sm">
                  100% Satisfaction Guarantee
                </p>
                <p className="text-text-muted text-xs">
                  {pricingPageContent.guarantee}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 md:mt-10">
            <p className="text-text-muted text-sm">
              {pricingPageContent.cta}{" "}
              <Link
                href="/contact"
                className="text-accent-primary font-semibold hover:underline"
              >
                Book a free strategy call
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Highlights */}
      <section className="py-14 md:py-20 px-4 bg-bg-primary">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-10 md:mb-14">
            Every Plan Includes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Mobile-First Design",
              "SEO Foundation Setup",
              "WhatsApp Integration",
              "Contact Form",
              "Google Maps Integration",
              "SSL Certificate",
              "1 Year Hosting",
              "Fast Loading Speed",
              "Training & Handoff",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 shadow-subtle"
              >
                <CheckCircle className="w-5 h-5 text-success shrink-0" />
                <span className="text-text-primary text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-cta text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Let&apos;s discuss which plan is right for your business. Book a free
          strategy call today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Book Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
