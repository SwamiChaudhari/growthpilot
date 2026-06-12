"use client";

import { siteConfig } from "@/data/content";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-cta relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready To Turn Your Website Into A{" "}
          <span className="text-white/90">Growth Engine?</span>
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
          Stop losing customers to competitors with better online presence.
          Let&apos;s build something that actually grows your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/contact" className="btn-primary text-lg px-10 py-4 bg-white text-accent-primary hover:bg-white/90">
            <Phone className="w-5 h-5" />
            Book Free Strategy Call
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-10 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-white/60 text-sm">
          <span>✓ Free Consultation</span>
          <span>✓ No Obligation</span>
          <span>✓ Founder-Led</span>
          <span>✓ Fast Response</span>
        </div>
      </div>
    </section>
  );
}
