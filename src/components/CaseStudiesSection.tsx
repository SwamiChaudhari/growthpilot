"use client";

import { caseStudies } from "@/data/content";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-white" id="case-studies">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="section-heading">Case Studies</span>
          <h2 className="section-title">
            Problem → Solution →{" "}
            <span className="text-gradient">Results</span>
          </h2>
          <p className="section-subtitle">
            Real businesses. Real growth.
          </p>
        </div>

        {/* Case Studies — stacked on mobile */}
        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((study, i) => (
            <div key={i} className="bg-white rounded-xl md:rounded-2xl border border-border overflow-hidden shadow-card">
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">
                  {study.title}
                </h3>

                {/* Stack on mobile, side-by-side on desktop */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-8">
                  <div className="space-y-4 md:space-y-5">
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-red-500 uppercase tracking-wider mb-1.5 md:mb-2">Problem</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-accent-primary uppercase tracking-wider mb-1.5 md:mb-2">Solution</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-success uppercase tracking-wider mb-3 md:mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" /> Results
                    </h4>
                    <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                      {study.results.map((result, j) => (
                        <div key={j} className="bg-success/5 border border-success/10 rounded-lg md:rounded-xl p-2.5 md:p-3 text-center">
                          <p className="text-success font-bold text-sm md:text-lg">{result.value}</p>
                          <p className="text-text-muted text-[10px] md:text-xs">{result.metric}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-bg-primary rounded-lg md:rounded-xl p-3 md:p-5 border border-border">
                      <Quote className="w-4 h-4 md:w-5 md:h-5 text-accent-primary/30 mb-1.5 md:mb-2" />
                      <p className="text-text-secondary text-xs md:text-sm italic leading-relaxed mb-2 md:mb-3">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div>
                        <p className="text-text-primary font-semibold text-xs md:text-sm">{study.testimonial.name}</p>
                        <p className="text-text-muted text-[10px] md:text-xs">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link href="/contact" className="btn-primary">
            Get Similar Results for Your Business
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
