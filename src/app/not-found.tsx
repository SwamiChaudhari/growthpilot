'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-4">
        Oops! Page not found
      </h2>
      <p className="text-lg text-text-secondary max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track with GrowthPilot.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/contact" className="btn-secondary">
          Book Free Call
        </Link>
      </div>
    </main>
  );
}
