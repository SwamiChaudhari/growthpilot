"use client";

import { testimonials } from "@/data/content";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it. Here&apos;s what business
            owners say about working with GrowthPilot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-premium">
              <div className="p-6">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < t.rating
                          ? "text-gold-400 fill-gold-400"
                          : "text-dark-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-6 h-6 text-gold-400/30 mb-2" />
                <blockquote className="text-dark-600 text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
                  <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-dark-900 font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-dark-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
