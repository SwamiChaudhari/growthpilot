import Link from "next/link";
import { siteConfig, navLinks, solutions } from "@/data/content";
import { Phone, MessageCircle, MapPin, Mail, ChevronRight, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-cta rounded-xl flex items-center justify-center shadow-cta">
                <span className="text-white font-black text-base">G</span>
              </div>
              <div>
                <span className="text-base font-bold text-white">{siteConfig.name}</span>
                <span className="block text-[9px] text-accent-primary font-semibold uppercase tracking-wider">Growth Engines</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{siteConfig.description}</p>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent-primary shrink-0" />
              <span className="text-gray-400 text-sm">{siteConfig.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex items-center gap-1 text-gray-400 hover:text-accent-primary transition-colors text-sm py-1">
                  <ChevronRight className="w-3 h-3" /> {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Growth Systems</h3>
            <div className="space-y-2">
              {solutions.slice(0, 5).map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="flex items-center gap-1 text-gray-400 hover:text-accent-primary transition-colors text-sm">
                  <ChevronRight className="w-3 h-3" /> {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-accent-primary transition-colors">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500">Call Us</span>
                  <span className="text-white font-medium text-sm">{siteConfig.phone}</span>
                </div>
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-success transition-colors">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-success" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500">WhatsApp</span>
                  <span className="text-white font-medium text-sm">{siteConfig.phone}</span>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-gray-400 hover:text-accent-primary transition-colors">
                <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent-primary" />
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500">Email</span>
                  <span className="text-white font-medium text-sm break-all">{siteConfig.email}</span>
                </div>
              </a>
            </div>

            <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] text-gray-400">Ready to grow? Book a free strategy call.</p>
              <Link href="/contact" className="inline-flex items-center gap-1 text-accent-primary text-xs font-semibold mt-1 hover:underline">
                Book Free Call <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Link href="/privacy-policy" className="hover:text-accent-primary transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-of-service" className="hover:text-accent-primary transition-colors">Terms of Service</Link>
            </div>
            <p>Built with growth in mind — Pune, Maharashtra</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
