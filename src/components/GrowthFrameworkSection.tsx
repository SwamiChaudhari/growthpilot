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
    <section className="py-20 px-4 bg-gradient-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold-400 font-bold uppercase tracking-widest text-sm mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {growthFramework.title}
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            {growthFramework.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <div key={i} className="card-dark group hover:border-gold-400/40">
                {/* Letter Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-lg shadow-gold-400/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-dark-900 font-black text-xl">
                      {step.letter}
                    </span>
                  </div>
                  <div className="w-10 h-10 bg-gold-400/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step Number */}
                <div className="mt-4 text-gold-400/20 text-5xl font-black absolute top-4 right-4">
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
