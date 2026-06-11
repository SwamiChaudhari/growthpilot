"use client";

import { pricingPlans } from "@/data/content";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gradient-section" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Pricing</span>
          <h2 className="section-title">
            Growth Systems That{" "}
            <span className="text-gradient-gold">Pay for Themselves</span>
          </h2>
          <p className="section-subtitle">
            Invest in a growth engine that generates leads and revenue. Choose
            the plan that fits your business.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-dark-900 border-2 border-gold-400 shadow-xl shadow-gold-400/10 relative"
                  : "bg-white border border-dark-100 shadow-card"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-dark-900 text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-4 mt-2">
                <h3
                  className={`text-lg font-bold ${
                    plan.highlighted ? "text-white" : "text-dark-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-dark-300" : "text-dark-500"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-3xl font-bold ${
                      plan.highlighted ? "text-gold-400" : "text-dark-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span
                      className={`text-sm line-through ${
                        plan.highlighted ? "text-dark-500" : "text-dark-400"
                      }`}
                    >
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs mt-1 ${
                    plan.highlighted ? "text-dark-400" : "text-dark-500"
                  }`}
                >
                  One-time investment
                </p>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-dark-300" : "text-dark-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <div className="flex-1 space-y-2 mb-6">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-gold-400" : "text-emerald-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-dark-200" : "text-dark-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`w-full text-center font-semibold py-3 rounded-xl transition-all duration-300 text-sm ${
                  plan.highlighted
                    ? "btn-primary"
                    : "bg-dark-900 text-white hover:bg-dark-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="text-dark-500 text-sm">
            All plans include free consultation. Not sure which plan?{" "}
            <Link
              href="/contact"
              className="text-gold-400 font-semibold hover:underline"
            >
              Book a free strategy call
            </Link>{" "}
            and we&apos;ll recommend the best fit.
          </p>
        </div>
      </div>
    </section>
  );
}
