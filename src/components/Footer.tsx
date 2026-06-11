import Link from "next/link";
import { siteConfig, navLinks, solutions } from "@/data/content";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="text-dark-900 font-black text-lg">G</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">
                  {siteConfig.name}
                </span>
                <span className="block text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                  Growth Engines
                </span>
              </div>
            </div>
            <p className="text-dark-400 text-sm mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-400 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>
            <div className="space-y-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1.5 text-dark-400 hover:text-gold-400 transition-colors text-sm"
                >
                  <ChevronRight className="w-3 h-3" /> {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Growth Systems
            </h3>
            <div className="space-y-2">
              {solutions.slice(0, 5).map((s) => (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}`}
                  className="flex items-center gap-1.5 text-dark-400 hover:text-gold-400 transition-colors text-sm"
                >
                  <ChevronRight className="w-3 h-3" /> {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-dark-400 hover:text-gold-400 transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="block text-xs text-dark-500">Call Us</span>
                  <span className="text-white font-medium">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-dark-400 hover:text-green-400 transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <span className="block text-xs text-dark-500">WhatsApp</span>
                  <span className="text-white font-medium">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-dark-400 hover:text-gold-400 transition-colors"
              >
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <span className="block text-xs text-dark-500">Email</span>
                  <span className="text-white font-medium text-sm">
                    {siteConfig.email}
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-dark-400">
                Ready to grow? Book a free strategy call and let&apos;s discuss
                your business goals.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-gold-400 text-sm font-semibold mt-2 hover:text-gold-300"
              >
                Book Free Call <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-dark-500">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-xs">
              Built with growth in mind — Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
