"use client";

import { whyChooseUs } from "@/data/content";
import {
  UserCheck,
  Zap,
  Smartphone,
  Search,
  MapPin,
  MessageCircle,
  TrendingUp,
  IndianRupee,
  Headphones,
  Handshake,
  type LucideIcon,
} from "lucide-react";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    UserCheck,
    Zap,
    Smartphone,
    Search,
    MapPin,
    MessageCircle,
    TrendingUp,
    IndianRupee,
    Headphones,
    Handshake,
  };
  return map[name] || UserCheck;
}

export default function WhyChooseSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Why GrowthPilot</span>
          <h2 className="section-title">
            Why Local Businesses{" "}
            <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="section-subtitle">
            We&apos;re not just another web design agency. We&apos;re your
            growth partner.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {whyChooseUs.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="bg-bg-primary rounded-2xl p-5 text-center border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-accent-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent-primary group-hover:shadow-cta transition-all duration-300">
                  <Icon className="w-6 h-6 text-accent-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
