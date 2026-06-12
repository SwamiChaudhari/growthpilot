"use client";

import { painPoints } from "@/data/content";
import {
  Globe, Clock, Smartphone, SearchX, MessageCircleOff, TrendingDown,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import Link from "next/link";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Globe, Clock, Smartphone, SearchX, MessageCircleOff, TrendingDown,
  };
  return map[name] || Globe;
}

export default function PainPointsSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="section-heading">The Problem</span>
          <h2 className="section-title">
            Is Your Website Costing You{" "}
            <span className="text-gradient">Customers?</span>
          </h2>
          <p className="section-subtitle">
            Most local businesses are losing customers every day because of these common website problems.
          </p>
        </div>

        {/* Pain Points Grid — single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {painPoints.map((point, i) => {
            const Icon = getIcon(point.icon);
            return (
              <div key={i} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-border shadow-card">
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-lg md:rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-text-primary">{point.title}</h3>
                    <p className="text-red-500 font-semibold text-xs md:text-sm">= {point.result}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Solution CTA */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 max-w-2xl shadow-card-hover border border-border mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-3 md:mb-4">
              The Good News?{" "}
              <span className="text-gradient">We Fix All of This.</span>
            </h3>
            <p className="text-text-secondary mb-6 md:mb-8 text-sm md:text-base">
              GrowthPilot builds complete digital growth systems that solve every one of these problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#solutions" className="btn-secondary">
                See Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
