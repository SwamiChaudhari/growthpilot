"use client";

import { useState, useEffect, useRef } from "react";
import { results } from "@/data/content";
import {
  TrendingUp,
  Zap,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    TrendingUp,
    Zap,
    Star,
    Users,
  };
  return map[name] || TrendingUp;
}

function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: string;
  suffix?: string;
}) {
  const [count, setCount] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    setCount(end);
  }, [started, end]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-text-primary">
      {count}
      {suffix}
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-24 px-4 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Real Results</span>
          <h2 className="section-title text-text-primary">
            Outcomes That Matter
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We don&apos;t measure success by how your website looks. We measure
            it by how it performs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => {
            const Icon = getIcon(result.icon);
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-accent-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-accent-primary group-hover:shadow-cta transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent-primary group-hover:text-white transition-colors" />
                </div>
                <AnimatedCounter end={result.value} />
                <p className="text-text-primary font-semibold text-sm mt-2">
                  {result.label}
                </p>
                <p className="text-text-muted text-xs mt-1">{result.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
