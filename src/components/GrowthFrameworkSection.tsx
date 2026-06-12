"use client";

import { growthFramework } from "@/data/content";
import {
  Target,
  Search,
  Layout,
  Code,
  TrendingUp,
  BarChart3,
  type LucideIcon,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Target,
    Search,
    Layout,
    Code,
    TrendingUp,
    BarChart3,
  };
  return map[name] || Target;
}

export default function GrowthFrameworkSection() {
  const steps = growthFramework.steps;

  return (
    <section className="py-24 px-4 bg-bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/2 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Our Process</span>
          <h2 className="section-title text-text-primary">
            {growthFramework.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            {growthFramework.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <div key={i} className="bg-white rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* Letter Badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-cta rounded-2xl flex items-center justify-center shadow-cta">
                    <span className="text-white font-black text-xl">
                      {step.letter}
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="absolute top-4 right-4 text-accent-primary/10 text-5xl font-black">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary">
            Start Your Growth Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
