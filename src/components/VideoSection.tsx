"use client";

import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function VideoSection() {
  const videos = [
    { title: "Founder Introduction", description: "Meet Swami and learn about GrowthPilot's mission", duration: "2:30" },
    { title: "How We Build Growth Engines", description: "A quick walkthrough of our process and approach", duration: "3:15" },
    { title: "Free Website Audit Explained", description: "What you get with a free GrowthPilot website audit", duration: "1:45" },
    { title: "Client Success Stories", description: "Hear directly from business owners we've helped", duration: "4:00" },
  ];

  return (
    <section className="py-14 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="section-heading">Video</span>
          <h2 className="section-title">
            See GrowthPilot <span className="text-gradient">In Action</span>
          </h2>
          <p className="section-subtitle">
            Watch short videos to understand our approach and results.
          </p>
        </div>

        {/* 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {videos.map((video, i) => (
            <div key={i} className="bg-white rounded-xl md:rounded-2xl border border-border overflow-hidden shadow-card group cursor-pointer">
              <div className="relative bg-bg-primary aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary to-gray-100" />
                <div className="absolute inset-0 bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors" />
                <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-card-hover group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 md:w-7 md:h-7 text-accent-primary ml-0.5" />
                </div>
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 bg-text-primary/80 text-white text-[10px] md:text-xs font-semibold px-1.5 py-0.5 md:px-2 md:py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-text-primary mb-1 group-hover:text-accent-primary transition-colors">{video.title}</h3>
                <p className="text-text-secondary text-xs md:text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link href="/contact" className="btn-primary">
            Book a Live Strategy Call Instead
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
