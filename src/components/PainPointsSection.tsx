"use client";

import { painPoints } from "@/data/content";
import {
  Globe,
  Clock,
  Smartphone,
  SearchX,
  MessageCircleOff,
  TrendingDown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Globe,
    Clock,
    Smartphone,
    SearchX,
    MessageCircleOff,
    TrendingDown,
  };
  return map[name] || Globe;
}

export default function PainPointsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">The Problem</span>
          <h2 className="section-title">
            Is Your Website Costing You{" "}
            <span className="text-gradient-gold">Customers?</span>
          </h2>
          <p className="section-subtitle">
            Most local businesses are losing customers every day because of these
            common website problems. Do any of these sound familiar?
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, i) => {
            const Icon = getIcon(point.icon);
            return (
              <div
                key={i}
                className="card-premium group border-l-4 border-l-red-400"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-900">
                        {point.title}
                      </h3>
                      <p className="text-red-500 font-semibold text-sm">
                        = {point.result}
                      </p>
                    </div>
                  </div>
                  <p className="text-dark-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution CTA */}
        <div className="text-center">
          <div className="inline-block bg-dark-900 rounded-2xl p-8 md:p-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              The Good News?{" "}
              <span className="text-gradient-gold">We Fix All of This.</span>
            </h3>
            <p className="text-dark-300 mb-6">
              GrowthPilot builds complete digital growth systems that solve
              every one of these problems — and turn your website into your
              hardest-working employee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Website Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#solutions" className="btn-outline-white">
                See Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
