"use client";

import { testimonials } from "@/data/content";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="section-heading">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it. Here&apos;s what business owners say.
          </p>
        </div>

        {/* Single column on mobile, swipeable feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl md:rounded-2xl border border-border p-4 md:p-6 shadow-card">
              <div className="flex items-center gap-0.5 mb-3 md:mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${j < t.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} />
                ))}
              </div>

              <Quote className="w-5 h-5 md:w-6 md:h-6 text-accent-primary/15 mb-2" />
              <blockquote className="text-text-secondary text-sm leading-relaxed mb-4 md:mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-border">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-cta rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs md:text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-text-primary text-sm">{t.name}</p>
                  <p className="text-text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
