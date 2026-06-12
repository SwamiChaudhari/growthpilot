"use client";

import { founder } from "@/data/content";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="py-24 px-4 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-primary/10 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden flex items-center justify-center shadow-card-hover border border-border">
                <Image
                  src="/founder-photo.png"
                  alt="Swami Chaudhari — AI Engineer & Founder of GrowthPilot"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-10">
                  <p className="text-white font-bold text-sm text-center">Swami Chaudhari</p>
                  <p className="text-white/80 text-xs text-center">AI Engineer & Founder, GrowthPilot</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <span className="section-heading">Meet the Founder</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {founder.name}
            </h2>
            <p className="text-accent-primary font-semibold mb-6">
              {founder.role}
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              {founder.bio}
            </p>

            {/* Mission */}
            <div className="bg-white border border-border rounded-xl p-5 mb-6 shadow-subtle">
              <h4 className="text-accent-primary font-bold text-sm uppercase tracking-wider mb-2">
                Mission
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed italic">
                &ldquo;{founder.mission}&rdquo;
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {founder.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success shrink-0" />
                  <span className="text-text-secondary text-sm">{h}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="btn-primary">
              Talk Directly with {founder.name.split(" ")[0]}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
