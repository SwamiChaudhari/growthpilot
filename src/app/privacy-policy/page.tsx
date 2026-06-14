import { siteConfig } from "@/data/content";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | GrowthPilot",
  description:
    "Read GrowthPilot's privacy policy to understand how we collect, use, and protect your personal information. Learn about your rights and our data practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">Legal</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 md:mb-4 tracking-tight">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose-custom space-y-10">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Introduction</h2>
              <p className="text-text-secondary leading-relaxed">
                Welcome to GrowthPilot (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and disclose your information when you visit our website at{" "}
                <a href="https://growthpilott.vercel.app" className="text-accent-primary hover:underline">
                  growthpilott.vercel.app
                </a>{" "}
                or engage with our web design and lead generation services. By using our website or services, you agree to the practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Information We Collect</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <div className="space-y-4">
                <div className="bg-bg-primary rounded-xl border border-border p-5">
                  <h3 className="text-text-primary font-semibold mb-2">Personal Information</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Name</strong> — collected when you fill out contact forms or communicate with us</span>
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Email address</strong> — collected for communication and service delivery</span>
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Phone number</strong> — collected for project discussions and support</span>
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Business type and details</strong> — collected to understand your requirements and provide tailored solutions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-bg-primary rounded-xl border border-border p-5">
                  <h3 className="text-text-primary font-semibold mb-2">Usage Data</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Pages visited</strong> — to understand how visitors use our site</span>
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Time spent on pages</strong> — to improve content and user experience</span>
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Referral source</strong> — to understand how you found our website</span>
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                      <span><strong className="text-text-primary">Browser and device information</strong> — to ensure compatibility and optimize performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>To respond to your inquiries and provide our web design and lead generation services</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>To communicate with you about projects, proposals, and updates</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>To improve our website, services, and customer experience</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>To send occasional updates about our services (you may opt out at any time)</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>To analyze website usage and improve our marketing efforts</span>
                </li>
              </ul>
            </div>

            {/* Data Storage and Security */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Data Storage and Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your data is stored securely using industry-standard practices. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Cookies and Tracking</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our site.
              </p>
              <div className="bg-bg-primary rounded-xl border border-border p-5">
                <h3 className="text-text-primary font-semibold mb-2">Types of Cookies We Use</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                    <span><strong className="text-text-primary">Essential cookies</strong> — required for the website to function properly</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                    <span><strong className="text-text-primary">Analytics cookies</strong> — help us understand how visitors use our site (e.g., Google Analytics)</span>
                  </li>
                </ul>
              </div>
              <p className="text-text-secondary leading-relaxed mt-4">
                You can control and delete cookies through your browser settings. Note that disabling cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the following third-party services that may collect information about you:
              </p>
              <div className="space-y-3">
                <div className="bg-bg-primary rounded-xl border border-border p-5">
                  <h3 className="text-text-primary font-semibold mb-1">Google Analytics</h3>
                  <p className="text-text-secondary text-sm">
                    We use Google Analytics to understand website traffic and user behavior. Google Analytics collects information such as your IP address, browser type, and pages visited. For more information, see{" "}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">
                      Google&apos;s Privacy Policy
                    </a>.
                  </p>
                </div>
                <div className="bg-bg-primary rounded-xl border border-border p-5">
                  <h3 className="text-text-primary font-semibold mb-1">Vercel Hosting</h3>
                  <p className="text-text-secondary text-sm">
                    Our website is hosted on Vercel. Vercel may collect technical data such as IP addresses and access logs as part of their hosting services. For more information, see{" "}
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">
                      Vercel&apos;s Privacy Policy
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Your Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-bg-primary rounded-xl border border-border p-4">
                  <span className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center shrink-0 text-accent-primary font-bold text-sm">1</span>
                  <div>
                    <h3 className="text-text-primary font-semibold text-sm">Right to Access</h3>
                    <p className="text-text-secondary text-sm">You can request a copy of the personal information we hold about you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-bg-primary rounded-xl border border-border p-4">
                  <span className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center shrink-0 text-accent-primary font-bold text-sm">2</span>
                  <div>
                    <h3 className="text-text-primary font-semibold text-sm">Right to Correction</h3>
                    <p className="text-text-secondary text-sm">You can request that we correct any inaccurate or incomplete personal information.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-bg-primary rounded-xl border border-border p-4">
                  <span className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center shrink-0 text-accent-primary font-bold text-sm">3</span>
                  <div>
                    <h3 className="text-text-primary font-semibold text-sm">Right to Deletion</h3>
                    <p className="text-text-secondary text-sm">You can request that we delete your personal information, subject to legal obligations.</p>
                  </div>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-bg-primary rounded-xl border border-border p-5 space-y-3">
                <p className="text-text-secondary text-sm">
                  <strong className="text-text-primary">GrowthPilot</strong>
                </p>
                <p className="text-text-secondary text-sm">
                  Pune, Maharashtra, India
                </p>
                <p className="text-text-secondary text-sm">
                  Email:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent-primary hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p className="text-text-secondary text-sm">
                  Phone:{" "}
                  <a href={`tel:${siteConfig.phone}`} className="text-accent-primary hover:underline">
                    {siteConfig.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-border pt-6">
              <p className="text-text-muted text-sm">
                Last updated: June 14, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-cta text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Have Questions?
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          If you have any concerns about our privacy practices, don&apos;t hesitate to reach out.
        </p>
        <Link href="/contact" className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
          Contact Us
        </Link>
      </section>
    </>
  );
}
