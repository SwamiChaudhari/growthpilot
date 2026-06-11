"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-heading">FAQ</span>
          <h2 className="section-title">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "border-gold-400/30 shadow-card"
                  : "border-dark-100"
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span
                  className={`font-semibold text-sm pr-4 ${
                    openIndex === i ? "text-gold-400" : "text-dark-900"
                  }`}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openIndex === i
                      ? "rotate-180 text-gold-400"
                      : "text-dark-400"
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-dark-500 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
