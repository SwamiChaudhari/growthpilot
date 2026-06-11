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
    <section className="py-20 px-4 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Our Solutions</span>
          <h2 className="section-title">
            Branded Growth Systems,{" "}
            <span className="text-gradient-gold">Not Generic Websites</span>
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
                className="card-premium group hover:border-gold-400/30 transition-all duration-500"
              >
                <div className="p-6">
                  {/* Icon + Tagline */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-lg shadow-gold-400/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-dark-900" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-gold-400/10 px-2 py-1 rounded-full">
                      {solution.industries[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark-900 mb-1 group-hover:text-gold-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gold-400 text-sm font-semibold mb-3">
                    {solution.tagline}
                  </p>

                  {/* Problem */}
                  <p className="text-dark-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {solution.problem}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 mb-5">
                    {solution.benefits.slice(0, 3).map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="text-dark-600 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="inline-flex items-center gap-1 text-gold-400 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
