import { siteConfig } from "@/data/content";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | GrowthPilot",
  description:
    "Read GrowthPilot's terms of service covering payment terms, intellectual property rights, client responsibilities, and our satisfaction guarantee.",
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">Legal</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 md:mb-4 tracking-tight">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Please read these terms carefully before engaging our web design and lead generation services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose-custom space-y-10">

            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Acceptance of Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                By accessing our website at{" "}
                <a href="https://growthpilott.vercel.app" className="text-accent-primary hover:underline">
                  growthpilott.vercel.app
                </a>{" "}
                or engaging GrowthPilot (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) for web design and lead generation services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services. These terms apply to all visitors, clients, and users of our services.
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Services Description</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                GrowthPilot provides web design, development, and lead generation services tailored for local businesses in India. Our services include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Custom website design and development</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Lead generation system implementation (LeadFlow)</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Landing page creation and optimization</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>SEO and local search optimization</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Website maintenance and support</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Business growth strategy consultation</span>
                </li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Specific deliverables, timelines, and scope will be outlined in individual project proposals or agreements.
              </p>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Payment Terms</h2>
              <div className="bg-bg-primary rounded-xl border border-border p-5 space-y-4">
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">Payment Structure</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Our standard payment terms are <strong className="text-text-primary">50% upfront</strong> before work begins and <strong className="text-text-primary">50% upon project completion</strong> before the website goes live or is delivered. The upfront payment secures your project slot and covers initial design and development costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">Payment Methods</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We accept payments via bank transfer (NEFT/IMPS/UPI), or other mutually agreed-upon methods. All prices are quoted in Indian Rupees (INR) unless otherwise specified.
                  </p>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">Late Payments</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    If the final payment is not received within 14 days of project completion, we reserve the right to suspend the website or withhold delivery until payment is settled.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Intellectual Property Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">Upon Full Payment</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Upon receipt of full payment, all intellectual property rights for the custom website design and code created specifically for your project are transferred to you. You will own the final deliverables, including the website design, custom graphics, and content created for your project.
                  </p>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">GrowthPilot Rights</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    GrowthPilot retains the right to display the completed project in our portfolio, case studies, and marketing materials unless otherwise agreed in writing. We also retain ownership of any pre-existing tools, frameworks, or proprietary systems used in the project.
                  </p>
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-2">Third-Party Assets</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Any third-party assets (stock images, fonts, plugins) used in the project are subject to their respective licenses. It is the client&apos;s responsibility to ensure proper licensing for any third-party assets they provide.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Client Responsibilities</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                As a client, you agree to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Provide all necessary content, images, and information required for the project in a timely manner</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Designate a single point of contact for project communication and approvals</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Review and provide feedback on deliverables within the agreed timeframe (typically 7 business days)</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Ensure that any content provided does not infringe on third-party intellectual property rights</span>
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 shrink-0" />
                  <span>Make payments according to the agreed schedule</span>
                </li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                Delays in providing content, feedback, or approvals may result in project timeline extensions.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Limitation of Liability</h2>
              <p className="text-text-secondary leading-relaxed">
                GrowthPilot shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services. Our total liability for any claims arising from a project shall not exceed the total amount paid by the client for that specific project. We do not guarantee specific business results (such as a particular number of leads or revenue) as outcomes depend on various factors beyond our control, including market conditions and client implementation.
              </p>
            </div>

            {/* Refund Policy */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Refund Policy</h2>
              <div className="bg-accent-primary/5 border border-accent-primary/10 rounded-xl p-5">
                <h3 className="text-accent-primary font-bold text-sm uppercase tracking-wider mb-3">100% Satisfaction Guarantee</h3>
                <p className="text-text-secondary leading-relaxed">
                  At GrowthPilot, we stand behind the quality of our work. If you are not satisfied with the initial design concepts presented, we will revise them based on your feedback. If we are unable to deliver a design that meets your expectations, we offer a full refund of the upfront payment. Refunds for the upfront payment must be requested before the development phase begins. Once development has commenced, the upfront payment is non-refundable as it covers work already performed. The final 50% payment is due only upon your approval of the completed project.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of <strong className="text-text-primary">India</strong>, specifically the state of <strong className="text-text-primary">Maharashtra</strong>. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Changes to Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to update or modify these Terms of Service at any time. Any changes will be posted on this page with an updated revision date. Your continued use of our services after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
          Ready to Get Started?
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Have questions about our terms or ready to start your project? We&apos;re here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
