"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg shadow-success/30 hover:scale-110 active:scale-95 transition-all duration-300 group hidden md:flex"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      {/* Tooltip — hidden on mobile */}
      <span className="absolute right-full mr-3 bg-text-primary text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
        Chat with us
      </span>
    </a>
  );
}
