"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { navLinks } from "@/data/content";
import { MessageCircle, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-gradient-cta rounded-xl flex items-center justify-center shadow-cta">
              <span className="text-white font-black text-base">G</span>
            </div>
            <div>
              <span className="text-base font-bold text-text-primary tracking-tight">{siteConfig.name}</span>
              <span className="block text-[9px] text-accent-primary font-semibold uppercase tracking-wider -mt-0.5">
                Growth Engines
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors duration-200 rounded-lg hover:bg-accent-primary/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <Link href="/contact" className="btn-primary btn-sm">
              Book Free Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 -mr-2 text-text-primary hover:text-accent-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 top-16">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 left-0 right-0 bg-white border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-4 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 rounded-xl transition-colors font-medium text-base min-h-[48px]"
                >
                  <ChevronRight className="w-4 h-4 text-text-muted" /> {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="px-4 pb-6 pt-2 border-t border-border space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-success text-white font-semibold py-4 rounded-xl text-base min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-accent-primary text-white font-semibold py-4 rounded-xl text-base min-h-[48px]"
              >
                Book Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
