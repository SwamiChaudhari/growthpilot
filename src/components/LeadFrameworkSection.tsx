"use client";

import { leadFramework } from "@/data/content";
import { MapPin, Palette, Cog, TrendingUp, type LucideIcon } from "lucide-react";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    MapPin,
    Palette,
    Cog,
    TrendingUp,
  };
  return map[name] || MapPin;
}

export default function LeadFrameworkSection() {
  const steps = leadFramework.steps;

  return (
    <section className="py-14 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <span className="section-heading">Our Methodology</span>
            <h2 className="section-title mb-6">
              The{" "}
              <span className="text-gradient">
                {leadFramework.title}
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              {leadFramework.subtitle}
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = getIcon(step.icon);
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center shrink-0 shadow-cta">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-accent-primary font-black text-sm">
                          {step.letter}
                        </span>
                        <h3 className="text-lg font-bold text-text-primary">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-bg-primary rounded-3xl p-8 md:p-10 max-w-md border border-border">
                {/* LEAD Letters */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {steps.map((step, i) => {
                    const Icon = getIcon(step.icon);
                    return (
                      <div
                        key={i}
                        className="bg-white border border-border rounded-2xl p-5 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-cta">
                          <span className="text-white font-black text-lg">
                            {step.letter}
                          </span>
                        </div>
                        <Icon className="w-5 h-5 text-accent-primary mx-auto mb-2" />
                        <p className="text-text-primary font-semibold text-sm">
                          {step.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center">
                  <p className="text-accent-primary font-bold text-sm uppercase tracking-widest">
                    Proven Framework
                  </p>
                  <p className="text-text-muted text-xs mt-1">
                    Used by 50+ growing businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
