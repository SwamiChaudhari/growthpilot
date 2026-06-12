"use client";

import { pricingPlans } from "@/data/content";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="section-heading">Pricing</span>
          <h2 className="section-title">
            Growth Systems That{" "}
            <span className="text-gradient">Pay for Themselves</span>
          </h2>
          <p className="section-subtitle">
            Invest in a growth engine that generates leads and revenue.
          </p>
        </div>

        {/* Pricing Grid — single column on mobile, horizontal scroll hint */}
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
                <h3 className={`text-base md:text-lg font-bold ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs md:text-sm ${plan.highlighted ? "text-white/70" : "text-text-muted"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-3 md:mb-4">
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl md:text-3xl font-bold ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className={`text-sm line-through ${plan.highlighted ? "text-white/50" : "text-text-muted"}`}>
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className={`text-[10px] md:text-xs mt-1 ${plan.highlighted ? "text-white/60" : "text-text-muted"}`}>
                  One-time investment
                </p>
              </div>

              <p className={`text-sm mb-4 md:mb-6 ${plan.highlighted ? "text-white/80" : "text-text-secondary"}`}>
                {plan.description}
              </p>

              <div className="flex-1 space-y-2 md:space-y-2.5 mb-5 md:mb-6">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-white/80" : "text-success"}`} />
                    <span className={`text-xs md:text-sm ${plan.highlighted ? "text-white/90" : "text-text-secondary"}`}>
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

        <div className="text-center mt-8 md:mt-10">
          <p className="text-text-muted text-sm">
            All plans include free consultation.{" "}
            <Link href="/contact" className="text-accent-primary font-semibold hover:underline">
              Book a free strategy call
            </Link>{" "}
            and we&apos;ll recommend the best fit.
          </p>
        </div>
      </div>
    </section>
  );
}
