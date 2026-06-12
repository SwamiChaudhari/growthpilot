import { founder, siteConfig } from "@/data/content";
import { ArrowRight, CheckCircle, MessageCircle, GraduationCap, Briefcase, Award, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About GrowthPilot | Our Story & Mission",
  description:
    "Learn about GrowthPilot and founder Swami Chaudhari — AI Engineer, ML researcher, and entrepreneur helping local businesses grow through technology.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero bg-hero-pattern py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="section-heading">About Us</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3 md:mb-4 tracking-tight">
            We&apos;re Building{" "}
            <span className="text-gradient">Growth Engines</span>
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-14 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Left — Photo & Quick Info */}
            <div className="flex flex-col items-center">
              <div className="w-56 h-64 rounded-2xl overflow-hidden shadow-card-hover border border-border mb-6">
                <Image
                  src="/founder-photo.png"
                  alt="Swami Chaudhari — AI Engineer & Founder of GrowthPilot"
                  width={224}
                  height={256}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <p className="text-text-primary font-bold text-center">{founder.name}</p>
              <p className="text-accent-primary text-sm text-center mb-4">{founder.role}</p>
              <div className="w-full space-y-2">
                <a href="mailto:swami1642004@gmail.com" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors">
                  <span className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center">✉</span>
                  swami1642004@gmail.com
                </a>
                <a href="tel:+919356733878" className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors">
                  <span className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center">📱</span>
                  +91 93567 33878
                </a>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="w-8 h-8 bg-accent-primary/10 rounded-lg flex items-center justify-center">📍</span>
                  Pune, Maharashtra
                </div>
              </div>
            </div>

            {/* Right — Bio & Mission */}
            <div className="md:col-span-2">
              <span className="section-heading">Meet the Founder</span>
              <h2 className="text-3xl font-bold text-text-primary mb-4">{founder.name}</h2>
              <p className="text-accent-primary font-semibold mb-4">{founder.role}</p>
              <p className="text-text-secondary leading-relaxed mb-6">{founder.bio}</p>

              <div className="bg-accent-primary/5 border border-accent-primary/10 rounded-xl p-5 mb-6">
                <h4 className="text-accent-primary font-bold text-sm uppercase tracking-wider mb-2">Mission</h4>
                <p className="text-text-primary text-sm italic">&ldquo;{founder.mission}&rdquo;</p>
              </div>
              <p className="text-text-secondary text-sm italic mb-8">{founder.vision}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {founder.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 bg-bg-primary rounded-lg p-3 border border-border">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    <span className="text-text-primary text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-12 md:py-20 px-4 bg-bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Education</h2>
          </div>
          <div className="bg-white rounded-2xl border border-border p-6 shadow-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-text-primary">{founder.education.degree}</h3>
                <p className="text-text-secondary">{founder.education.college}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">Graduating {founder.education.year}</span>
                <span className="bg-accent-primary/10 text-accent-primary text-sm font-semibold px-3 py-1 rounded-full">
                  GPA: {founder.education.gpa}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-accent-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Experience</h2>
          </div>
          {founder.experience.map((exp, i) => (
            <div key={i} className="bg-bg-primary rounded-2xl border border-border p-6 shadow-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                  <p className="text-accent-primary font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="space-y-2">
                {exp.points.map((point, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 md:py-20 px-4 bg-bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
              <Code className="w-5 h-5 text-accent-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Key Projects</h2>
          </div>
          <div className="space-y-4">
            {founder.projects.map((project, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                <h3 className="text-lg font-bold text-text-primary mb-2">{project.name}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(", ").map((tech, j) => (
                    <span key={j} className="text-xs font-medium bg-accent-primary/10 text-accent-primary px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
              <Code className="w-5 h-5 text-accent-primary" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {founder.skills.map((skill, i) => (
              <span key={i} className="bg-bg-primary border border-border rounded-full px-4 py-2 text-sm font-medium text-text-primary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-12 md:py-20 px-4 bg-bg-primary">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-primary" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">Certifications</h2>
              </div>
              <div className="space-y-3">
                {founder.certifications.map((cert, i) => (
                  <div key={i} className="bg-white rounded-xl border border-border p-4 shadow-subtle">
                    <p className="text-text-primary text-sm font-medium">{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-primary/10 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent-primary" />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">Achievements</h2>
              </div>
              <div className="space-y-3">
                {founder.achievements.map((achievement, i) => (
                  <div key={i} className="bg-white rounded-xl border border-border p-4 shadow-subtle">
                    <p className="text-text-primary text-sm font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 bg-gradient-cta text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Build Something Great Together
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Ready to grow your business? Get in touch and let&apos;s discuss how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="bg-white text-accent-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 active:scale-[0.97] transition-all duration-300 inline-flex items-center justify-center gap-2">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
