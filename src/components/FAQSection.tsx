"use client";

import { useState } from "react";
import { faqs } from "@/data/content";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 md:py-24 px-4 bg-bg-primary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-14">
          <span className="section-heading">FAQ</span>
          <h2 className="section-title">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
        </div>

        <div className="space-y-2.5 md:space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "border-accent-primary/30 shadow-card bg-white" : "border-border bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left min-h-[48px]"
              >
                <span className={`font-semibold text-sm pr-4 ${openIndex === i ? "text-accent-primary" : "text-text-primary"}`}>
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-accent-primary" : "text-text-muted"}`} />
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
