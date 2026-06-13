"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const businessTypes = [
  "Dental Clinic",
  "Real Estate",
  "Hotel/Resort",
  "Coaching Institute",
  "Travel Agency",
  "Other",
];

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+91 ",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Lead submission error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-16 bg-white rounded-2xl border border-border p-8 md:p-10 shadow-card">
      <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">
        Send Us a Message
      </h2>
      <p className="text-text-secondary text-sm text-center mb-8">
        Fill out the form below and we&apos;ll get back to you within 2 hours.
      </p>

      {submitted ? (
        <div className="text-center py-10">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h3 className="text-xl font-bold text-text-primary mb-2">
            Message Sent!
          </h3>
          <p className="text-text-secondary">
            Thank you for reaching out. We&apos;ll get back to you within 2 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-text-primary mb-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition"
              />
            </div>
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-semibold text-text-primary mb-1">
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition"
            >
              <option value="">Select your business type</option>
              {businessTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business and what you're looking for..."
              className="w-full px-4 py-3 rounded-xl border border-border bg-white text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <Send className="w-5 h-5" />
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
