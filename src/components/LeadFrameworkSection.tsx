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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Content */}
          <div>
            <span className="section-heading">Our Methodology</span>
            <h2 className="section-title mb-6">
              The{" "}
              <span className="text-gradient-gold">
                {leadFramework.title}
              </span>
            </h2>
            <p className="text-dark-500 text-lg mb-8 leading-relaxed">
              {leadFramework.subtitle}
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = getIcon(step.icon);
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shrink-0 shadow-gold">
                      <Icon className="w-6 h-6 text-dark-900" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gold-400 font-black text-sm">
                          {step.letter}
                        </span>
                        <h3 className="text-lg font-bold text-dark-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-dark-500 text-sm leading-relaxed">
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
              <div className="absolute inset-0 bg-gold-400/10 rounded-3xl blur-3xl" />
              <div className="relative bg-dark-900 rounded-3xl p-8 md:p-10 max-w-md">
                {/* LEAD Letters */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {steps.map((step, i) => {
                    const Icon = getIcon(step.icon);
                    return (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-gold-400/30 transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                          <span className="text-dark-900 font-black text-lg">
                            {step.letter}
                          </span>
                        </div>
                        <Icon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
                        <p className="text-white font-semibold text-sm">
                          {step.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center">
                  <p className="text-gold-400 font-bold text-sm uppercase tracking-widest">
                    Proven Framework
                  </p>
                  <p className="text-dark-400 text-xs mt-1">
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
