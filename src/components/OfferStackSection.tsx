"use client";

import { offerStack } from "@/data/content";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OfferStackSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-heading">Everything Included</span>
          <h2 className="section-title">{offerStack.title}</h2>
          <p className="section-subtitle">{offerStack.subtitle}</p>
        </div>

        {/* Offer Stack Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gold-400/5 rounded-3xl blur-xl" />
          <div className="relative bg-dark-900 rounded-3xl p-8 md:p-12 border border-gold-400/20">
            {/* Value Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/20 text-gold-400 px-4 py-2 rounded-full text-sm font-bold">
                Total Value: ₹1,50,000+ | Starting at just ₹14,999
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {offerStack.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-dark-200"
                >
                  <CheckCircle className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/#pricing" className="btn-primary text-lg px-10 py-4">
                See Pricing Plans
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-dark-400 text-sm mt-3">
                Or{" "}
                <Link
                  href="/contact"
                  className="text-gold-400 font-semibold hover:underline"
                >
                  book a free strategy call
                </Link>{" "}
                to discuss your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
