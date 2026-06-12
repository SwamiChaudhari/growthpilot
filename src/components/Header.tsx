"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { navLinks } from "@/data/content";
import { MessageCircle, Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center shadow-cta">
              <span className="text-white font-black text-lg">G</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-text-primary tracking-tight">{siteConfig.name}</span>
              <span className="block text-[10px] text-accent-primary font-semibold uppercase tracking-wider -mt-0.5">
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
            <Link
              href="/contact"
              className="btn-primary btn-sm"
            >
              Book Free Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-text-primary hover:text-accent-primary transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 text-text-secondary hover:text-accent-primary hover:bg-accent-primary/5 rounded-xl transition-colors font-medium"
              >
                <ChevronRight className="w-4 h-4" /> {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-4 py-3.5 bg-success text-white rounded-xl font-semibold"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Now
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 px-4 py-3.5 bg-accent-primary text-white rounded-xl font-semibold"
              >
                Book Free Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
