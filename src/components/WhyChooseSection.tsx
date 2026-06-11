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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Why GrowthPilot</span>
          <h2 className="section-title">
            Why Local Businesses{" "}
            <span className="text-gradient-gold">Choose Us</span>
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
                className="card text-center group hover:border-gold-400/30"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gold-400/10 rounded-xl flex items-center justify-center group-hover:bg-gold-400 group-hover:shadow-gold transition-all duration-300">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-dark-900 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-dark-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-dark-500 text-xs leading-relaxed">
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
