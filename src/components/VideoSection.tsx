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
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-heading">Video</span>
          <h2 className="section-title">
            See GrowthPilot{" "}
            <span className="text-gradient">In Action</span>
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
              className="bg-white rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Video Thumbnail Placeholder */}
              <div className="relative bg-bg-primary aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary to-gray-100" />
                <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors" />

                {/* Play Button */}
                <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-card-hover group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-7 h-7 text-accent-primary ml-1" />
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 bg-text-primary/80 text-white text-xs font-semibold px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-text-secondary text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Book a Live Strategy Call Instead
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
