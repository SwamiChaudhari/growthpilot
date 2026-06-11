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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            <span className="section-heading">Referral Program</span>
            <h2 className="section-title mb-4">
              {referralProgram.title}
            </h2>
            <p className="text-dark-500 text-lg mb-8 leading-relaxed">
              {referralProgram.description}
            </p>

            {/* How It Works */}
            <div className="space-y-4 mb-8">
              {referralProgram.howItWorks.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                    <span className="text-dark-900 font-bold text-sm">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-dark-600 text-sm pt-1">{step}</p>
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
                  className="card-premium hover:border-gold-400/30"
                >
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-gold rounded-2xl flex items-center justify-center shrink-0 shadow-gold">
                      <Icon className="w-7 h-7 text-dark-900" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-900 mb-1">
                        {reward.title}
                      </h3>
                      <p className="text-dark-500 text-sm">
                        {reward.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Stats */}
            <div className="bg-dark-900 rounded-2xl p-6 text-center">
              <Users className="w-8 h-8 text-gold-400 mx-auto mb-2" />
              <p className="text-white font-bold text-2xl">50+</p>
              <p className="text-dark-400 text-sm">
                Businesses referred by our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
