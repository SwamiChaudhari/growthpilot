"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/content";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-border shadow-2xl safe-bottom">
      <div className="flex gap-2 p-3">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-success text-white font-bold py-3.5 rounded-xl text-sm min-h-[48px]"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-accent-primary text-white font-bold py-3.5 rounded-xl text-sm min-h-[48px]"
        >
          <Phone className="w-5 h-5" />
          Book Free Call
        </Link>
      </div>
    </div>
  );
}
