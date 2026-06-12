"use client";

import { referralProgram } from "@/data/content";
import { IndianRupee, Gift, Star, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const rewardIcons: Record<string, typeof IndianRupee> = { IndianRupee, Gift, Star };

export default function ReferralSection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="section-heading">Referral Program</span>
            <h2 className="section-title mb-3 md:mb-4">{referralProgram.title}</h2>
            <p className="text-text-secondary text-base md:text-lg mb-6 md:mb-8 leading-relaxed">{referralProgram.description}</p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {referralProgram.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-cta rounded-full flex items-center justify-center shrink-0 shadow-cta">
                    <span className="text-white font-bold text-xs md:text-sm">{i + 1}</span>
                  </div>
                  <p className="text-text-secondary text-sm pt-1">{step}</p>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Join the Referral Program
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Rewards */}
          <div className="space-y-3 md:space-y-4">
            {referralProgram.rewards.map((reward, i) => {
              const Icon = rewardIcons[reward.icon] || Gift;
              return (
                <div key={i} className="bg-white rounded-xl md:rounded-2xl border border-border p-4 md:p-6 flex items-start gap-3 md:gap-4 shadow-card">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-text-primary mb-1">{reward.title}</h3>
                    <p className="text-text-secondary text-xs md:text-sm">{reward.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-cta rounded-xl md:rounded-2xl p-5 md:p-6 text-center shadow-cta">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-white mx-auto mb-2" />
              <p className="text-white font-bold text-xl md:text-2xl">50+</p>
              <p className="text-white/70 text-xs md:text-sm">Businesses referred by our community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
