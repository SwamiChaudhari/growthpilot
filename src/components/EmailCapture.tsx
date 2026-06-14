"use client";

import { useState } from "react";
import { X, Mail, Gift, ArrowRight, CheckCircle } from "lucide-react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Show after 10 seconds
  useState(() => {
    const timer = setTimeout(() => setShowBanner(true), 10000);
    return () => clearTimeout(timer);
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Store email (in production, this would go to an API)
    setSubmitted(true);
    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
      <div className="relative bg-white border border-border shadow-2xl rounded-t-2xl md:rounded-2xl p-5 md:p-6 animate-slide-up">
        <button
          onClick={() => setShowBanner(false)}
          className="absolute top-3 right-3 w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X className="w-3.5 h-3.5 text-text-secondary" />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-10 h-10 text-success mx-auto mb-2" />
            <p className="text-text-primary font-semibold text-sm">You&apos;re in!</p>
            <p className="text-text-muted text-xs mt-1">Check your inbox for the free guide.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <h4 className="text-text-primary font-bold text-sm">Free Website Checklist</h4>
                <p className="text-text-muted text-[11px]">Get our 25-point website audit checklist — free.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-9 pr-3 py-3 rounded-xl border border-border bg-white text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition"
                />
              </div>
              <button
                type="submit"
                className="bg-accent-primary text-white px-4 py-3 rounded-xl hover:bg-accent-hover active:scale-95 transition-all shrink-0"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-text-muted text-[10px] mt-2 text-center">No spam. Unsubscribe anytime.</p>
          </>
        )}
      </div>
    </div>
  );
}
