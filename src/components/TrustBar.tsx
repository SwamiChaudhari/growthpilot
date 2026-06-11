"use client";

import { trustBarItems } from "@/data/content";
import {
  Smartphone,
  Search,
  Zap,
  Target,
  MessageCircle,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

function getIcon(name: string): LucideIcon {
  const map: Record<string, LucideIcon> = {
    Smartphone,
    Search,
    Zap,
    Target,
    MessageCircle,
    UserCheck,
  };
  return map[name] || Zap;
}

export default function TrustBar() {
  return (
    <section className="bg-gradient-section py-8 border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {trustBarItems.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-dark-600 text-sm font-medium"
              >
                <div className="w-8 h-8 bg-gold-400/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-gold-400" />
                </div>
                <span className="hidden sm:inline">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
