"use client";

import { siteConfig } from "@/data/content";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-14 md:py-24 px-4 bg-gradient-cta relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
          Ready To Turn Your Website Into A{" "}
          <span className="text-white/90">Growth Engine?</span>
        </h2>
        <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto">
          Stop losing customers to competitors with better online presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
          <Link href="/contact" className="bg-white text-accent-primary font-semibold px-6 md:px-10 py-4 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2 text-base md:text-lg min-h-[48px]">
            <Phone className="w-5 h-5" />
            Book Free Strategy Call
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base md:text-lg px-6 md:px-10 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-white/60 text-xs sm:text-sm">
          <span>✓ Free Consultation</span>
          <span>✓ No Obligation</span>
          <span>✓ Founder-Led</span>
          <span>✓ Fast Response</span>
        </div>
      </div>
    </section>
  );
}
