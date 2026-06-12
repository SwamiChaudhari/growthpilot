"use client";

import { useState, useEffect, useRef } from "react";
import { results } from "@/data/content";
import { TrendingUp, Zap, Star, Users, type LucideIcon } from "lucide-react";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = { TrendingUp, Zap, Star, Users };
  return map[name] || TrendingUp;
}

function AnimatedCounter({ end, suffix = "" }: { end: string; suffix?: string }) {
  const [count, setCount] = useState("0");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    setCount(end);
  }, [started, end]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
      {count}{suffix}
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="section-heading">Real Results</span>
          <h2 className="section-title text-text-primary">Outcomes That Matter</h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            We don&apos;t measure success by how your website looks. We measure it by how it performs.
          </p>
        </div>

        {/* 2x2 grid on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {results.map((result, i) => {
            const Icon = getIcon(result.icon);
            return (
              <div key={i} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-border shadow-card">
                <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 bg-accent-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-accent-primary" />
                </div>
                <AnimatedCounter end={result.value} />
                <p className="text-text-primary font-semibold text-xs md:text-sm mt-1.5 md:mt-2">{result.label}</p>
                <p className="text-text-muted text-[10px] md:text-xs mt-0.5 md:mt-1">{result.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
