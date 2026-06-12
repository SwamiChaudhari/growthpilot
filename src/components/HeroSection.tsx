import Link from "next/link";
import { siteConfig } from "@/data/content";
import {
  MessageCircle,
  Phone,
  Play,
  BarChart3,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-hero bg-hero-pattern overflow-hidden min-h-[92vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/3 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border text-accent-primary px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-subtle">
              <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              Your Website Should Generate Leads
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary mb-6 leading-[1.08] tracking-tight">
              We Don&apos;t Build
              <br />
              <span className="text-gradient">
                Growth Engines.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Helping local businesses generate more leads, appointments, and
              revenue through high-converting websites and digital growth
              systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto text-base px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Book Free Strategy Call
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Hi, I'd like a free website audit for my business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-base px-8 py-4"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Audit
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["RP", "AS", "VK", "MJ"].map((initials, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-cta rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-bg-primary"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <span>
                  <strong className="text-text-primary">50+</strong> businesses growing
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-amber-400">
                    ★
                  </span>
                ))}
                <span className="ml-1">
                  <strong className="text-text-primary">4.9/5</strong> rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Side — Dashboard Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Card */}
              <div className="relative bg-white rounded-3xl p-6 shadow-card-hover border border-border">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-text-primary font-bold text-sm">
                        Growth Dashboard
                      </p>
                      <p className="text-text-muted text-xs">
                        Live Performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-success text-xs font-semibold">
                    <TrendingUp className="w-3 h-3" /> +247%
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    {
                      label: "Leads Generated",
                      value: "1,247",
                      change: "+156%",
                      icon: Users,
                    },
                    {
                      label: "Website Traffic",
                      value: "8,432",
                      change: "+89%",
                      icon: Globe,
                    },
                    {
                      label: "Conversions",
                      value: "12.4%",
                      change: "+340%",
                      icon: TrendingUp,
                    },
                    {
                      label: "Revenue Impact",
                      value: "₹4.2L",
                      change: "+247%",
                      icon: BarChart3,
                    },
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className="bg-bg-primary rounded-xl p-3 border border-border"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <metric.icon className="w-3.5 h-3.5 text-accent-primary" />
                        <span className="text-text-muted text-[10px]">
                          {metric.label}
                        </span>
                      </div>
                      <p className="text-text-primary font-bold text-lg">
                        {metric.value}
                      </p>
                      <p className="text-success text-[10px] font-semibold">
                        {metric.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-bg-primary rounded-xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text-primary text-xs font-semibold">
                      Growth Trajectory
                    </span>
                    <span className="text-accent-primary text-[10px]">
                      Last 30 days
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-20">
                    {[35, 45, 30, 55, 40, 60, 50, 70, 65, 80, 75, 95].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-accent-primary/40 to-accent-primary rounded-t-sm"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Badge — Top Right */}
              <div className="absolute -top-3 -right-3 bg-accent-primary text-white px-3 py-1.5 rounded-xl shadow-cta animate-bounce-gentle">
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="font-bold text-xs">3x More Leads</span>
                </div>
              </div>

              {/* Floating Badge — Bottom Left */}
              <div
                className="absolute -bottom-3 -left-3 bg-success text-white px-3 py-1.5 rounded-xl shadow-lg animate-bounce-gentle"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" />
                  <span className="font-bold text-xs">Live Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 100L48 95C96 90 192 80 288 73.3C384 66.7 480 63.3 576 66.7C672 70 768 80 864 83.3C960 86.7 1056 83.3 1152 76.7C1248 70 1344 60 1392 55L1440 50V100H0Z"
            fill="#F8F7F4"
          />
        </svg>
      </div>
    </section>
  );
}
