"use client";

import { useState, useEffect } from "react";
import { X, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true);
    }, 15000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) {
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-premium animate-slide-up">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-4 h-4 text-text-secondary" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Gift className="w-8 h-8 text-accent-primary" />
        </div>

        <h3 className="text-2xl font-bold text-text-primary text-center mb-2">
          Get a Free Website Audit
        </h3>
        <p className="text-text-secondary text-sm text-center mb-6">
          We&apos;ll analyze your current online presence and show you exactly
          what&apos;s costing you customers — and how to fix it.
        </p>

        {/* Benefits */}
        <div className="space-y-2 mb-6">
          {[
            "Website performance analysis",
            "Mobile experience review",
            "SEO opportunity report",
            "Competitor comparison",
            "Actionable recommendations",
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
              <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
              {b}
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          onClick={handleClose}
          className="btn-primary w-full"
        >
          Claim Your Free Audit
          <ArrowRight className="w-5 h-5" />
        </Link>

        <p className="text-text-muted text-xs text-center mt-3">
          No strings attached. 100% free.
        </p>
      </div>
    </div>
  );
}
