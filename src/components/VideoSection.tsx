"use client";

import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoSection() {
  const videos = [
    {
      title: "Founder Introduction",
      description: "Meet Swami and learn about GrowthPilot's mission",
      duration: "2:30",
    },
    {
      title: "How We Build Growth Engines",
      description: "A quick walkthrough of our process and approach",
      duration: "3:15",
    },
    {
      title: "Free Website Audit Explained",
      description: "What you get with a free GrowthPilot website audit",
      duration: "1:45",
    },
    {
      title: "Client Success Stories",
      description: "Hear directly from business owners we've helped",
      duration: "4:00",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Video</span>
          <h2 className="section-title">
            See GrowthPilot{" "}
            <span className="text-gradient-gold">In Action</span>
          </h2>
          <p className="section-subtitle">
            Watch short videos to understand our approach, process, and the
            results we deliver.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="card-premium group cursor-pointer hover:border-gold-400/30"
            >
              <div className="p-6">
                {/* Video Thumbnail Placeholder */}
                <div className="relative bg-dark-900 rounded-xl aspect-video mb-4 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800" />
                  <div className="absolute inset-0 bg-gold-400/5 group-hover:bg-gold-400/10 transition-colors" />

                  {/* Play Button */}
                  <div className="relative w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center shadow-lg shadow-gold-400/30 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 text-dark-900 ml-1" />
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-dark-900/80 text-white text-xs font-semibold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-dark-900 mb-1 group-hover:text-gold-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-dark-500 text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/contact" className="btn-primary">
            Book a Live Strategy Call Instead
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
