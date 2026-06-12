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
    <section className="bg-white py-6 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {trustBarItems.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={i}
                className="flex items-center gap-2 text-text-secondary text-sm font-medium"
              >
                <div className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent-primary" />
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
