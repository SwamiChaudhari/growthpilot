"use client";

import { referralProgram } from "@/data/content";
import { IndianRupee, Gift, Star, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const rewardIcons: Record<string, typeof IndianRupee> = {
  IndianRupee,
  Gift,
  Star,
};

export default function ReferralSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            <span className="section-heading">Referral Program</span>
            <h2 className="section-title mb-4">
              {referralProgram.title}
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              {referralProgram.description}
            </p>

            {/* How It Works */}
            <div className="space-y-4 mb-8">
              {referralProgram.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center shrink-0 shadow-cta">
                    <span className="text-white font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm pt-1">{step}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary">
              Join the Referral Program
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right — Rewards */}
          <div className="space-y-4">
            {referralProgram.rewards.map((reward, i) => {
              const Icon = rewardIcons[reward.icon] || Gift;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border p-6 flex items-start gap-4 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {reward.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {reward.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Stats */}
            <div className="bg-gradient-cta rounded-2xl p-6 text-center shadow-cta">
              <Users className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-bold text-2xl">50+</p>
              <p className="text-white/70 text-sm">
                Businesses referred by our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
