"use client";

import { caseStudies } from "@/data/content";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-section" id="case-studies">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Case Studies</span>
          <h2 className="section-title">
            Problem → Solution →{" "}
            <span className="text-gradient-gold">Results</span>
          </h2>
          <p className="section-subtitle">
            Real businesses. Real growth. See how GrowthPilot has helped local
            businesses transform their online presence.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <div
              key={i}
              className="card-premium overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Industry Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-dark-900 mb-6">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left — Story */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-dark-600 text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gold-400 uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-dark-600 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right — Results */}
                  <div>
                    <h4 className="text-sm font-bold text-green-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.map((result, j) => (
                        <div
                          key={j}
                          className="bg-green-50 border border-green-100 rounded-xl p-3 text-center"
                        >
                          <p className="text-green-600 font-bold text-lg">
                            {result.value}
                          </p>
                          <p className="text-dark-500 text-xs">
                            {result.metric}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-dark-900 rounded-xl p-4">
                      <Quote className="w-6 h-6 text-gold-400 mb-2" />
                      <p className="text-dark-300 text-sm italic leading-relaxed mb-3">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {study.testimonial.name}
                        </p>
                        <p className="text-dark-400 text-xs">
                          {study.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Get Similar Results for Your Business
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
