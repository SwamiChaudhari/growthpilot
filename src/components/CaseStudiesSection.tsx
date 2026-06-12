"use client";

import { caseStudies } from "@/data/content";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section className="py-24 px-4 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Case Studies</span>
          <h2 className="section-title">
            Problem → Solution →{" "}
            <span className="text-gradient">Results</span>
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
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="p-6 md:p-8">
                {/* Industry Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left — Story */}
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-2">
                        Problem
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-accent-primary uppercase tracking-wider mb-2">
                        Solution
                      </h4>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right — Results */}
                  <div>
                    <h4 className="text-sm font-bold text-success uppercase tracking-wider mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Results
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.results.map((result, j) => (
                        <div
                          key={j}
                          className="bg-success/5 border border-success/10 rounded-xl p-3 text-center"
                        >
                          <p className="text-success font-bold text-lg">
                            {result.value}
                          </p>
                          <p className="text-text-muted text-xs">
                            {result.metric}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-bg-primary rounded-xl p-5 border border-border">
                      <Quote className="w-5 h-5 text-accent-primary/30 mb-2" />
                      <p className="text-text-secondary text-sm italic leading-relaxed mb-3">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div>
                        <p className="text-text-primary font-semibold text-sm">
                          {study.testimonial.name}
                        </p>
                        <p className="text-text-muted text-xs">
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
        <div className="text-center mt-14">
          <Link href="/contact" className="btn-primary">
            Get Similar Results for Your Business
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
