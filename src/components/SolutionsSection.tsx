"use client";

import { solutions } from "@/data/content";
import {
  Workflow,
  Heart,
  Building,
  Hotel,
  Rocket,
  Plane,
  ArrowRight,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Workflow,
    Heart,
    Building,
    Hotel,
    Rocket,
    Plane,
  };
  return map[name] || Rocket;
}

export default function SolutionsSection() {
  return (
    <section className="py-24 px-4 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Our Solutions</span>
          <h2 className="section-title">
            Branded Growth Systems,{" "}
            <span className="text-gradient">Not Generic Websites</span>
          </h2>
          <p className="section-subtitle">
            Every solution is designed for a specific outcome — more leads, more
            bookings, more revenue. We sell results, not pages.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => {
            const Icon = getIcon(solution.icon);
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon + Tagline */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-accent-primary group-hover:shadow-cta transition-all duration-300">
                    <Icon className="w-7 h-7 text-accent-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-full">
                    {solution.industries[0]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-accent-primary text-sm font-semibold mb-3">
                  {solution.tagline}
                </p>

                {/* Problem */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
                  {solution.problem}
                </p>

                {/* Benefits */}
                <div className="space-y-2.5 mb-6">
                  {solution.benefits.slice(0, 3).map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success shrink-0" />
                      <span className="text-text-secondary text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center gap-1.5 text-accent-primary font-semibold text-sm hover:gap-2.5 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
