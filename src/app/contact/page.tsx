import { siteConfig } from "@/data/content";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";

export const metadata = {
  title: "Contact GrowthPilot | Book a Free Strategy Call",
  description:
    "Get in touch with GrowthPilot. Book a free strategy call, request a website audit, or just say hello. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 md:mb-4 tracking-tight">
            Let&apos;s Build Your{" "}
            <span className="text-gradient">Growth Engine</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Book a free strategy call, request a website audit, or just tell us
            about your business. We typically respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-14 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                WhatsApp Us
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Quickest way to reach us. Get a response within minutes.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to discuss my business growth.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Chat
              </a>
            </div>

            {/* Strategy Call */}
            <div className="bg-white rounded-2xl border-2 border-accent-primary/20 p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-cta text-white text-xs font-bold px-4 py-1 rounded-full shadow-cta">
                Recommended
              </div>
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                <Calendar className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Book Strategy Call
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                30-minute free call to discuss your business growth plan.
              </p>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like to book a free strategy call.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Calendar className="w-5 h-5" />
                Book Free Call
              </a>
            </div>

            {/* Call */}
            <div className="bg-white rounded-2xl border border-border p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Call Directly
              </h3>
              <p className="text-text-secondary text-sm mb-6">
                Prefer talking? Give us a call during business hours.
              </p>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary w-full">
                <Phone className="w-5 h-5" />
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-text-primary font-semibold text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">Location</p>
                <p className="text-text-primary font-semibold text-sm">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs">Response Time</p>
                <p className="text-text-primary font-semibold text-sm">
                  Within 2 hours
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-16 bg-bg-primary rounded-2xl p-8 md:p-10 border border-border">
            <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
              What Happens When You Contact Us?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "You Reach Out",
                  desc: "Via WhatsApp, call, or strategy call booking",
                },
                {
                  step: "2",
                  title: "We Listen",
                  desc: "Understand your business, goals, and challenges",
                },
                {
                  step: "3",
                  title: "Free Audit",
                  desc: "We analyze your current online presence",
                },
                {
                  step: "4",
                  title: "Custom Plan",
                  desc: "Get a tailored growth strategy proposal",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-3 shadow-cta">
                    <span className="text-white font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-text-primary font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
