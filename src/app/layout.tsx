import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadPopup from "@/components/LeadPopup";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://growthpilott.vercel.app"),
  title: "GrowthPilot | Website & Lead Generation for Local Businesses in India",
  description: "We build high-converting websites for dental clinics, real estate, hotels & local businesses in India. 50+ businesses grown. 3x more leads. Book your free strategy call.",
  keywords: ["website design India", "lead generation website", "local SEO India", "dental clinic website", "real estate website", "hotel website", "business growth website", "Pune", "India"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "GrowthPilot | Website & Lead Generation for Local Businesses in India",
    description: "We build high-converting websites for dental clinics, real estate, hotels & local businesses in India. 50+ businesses grown. 3x more leads. Book your free strategy call.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://growthpilott.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "GrowthPilot | Website & Lead Generation for Local Businesses in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthPilot | Website & Lead Generation for Local Businesses in India",
    description: "We build high-converting websites for dental clinics, real estate, hotels & local businesses in India. 50+ businesses grown. 3x more leads. Book your free strategy call.",
    images: ["https://growthpilott.vercel.app/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GrowthPilot",
              url: "https://growthpilott.vercel.app",
              telephone: "+91 93567 33878",
              email: "swami1642004@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              priceRange: "₹₹",
              serviceArea: "India",
            }),
          }}
        />
        <GoogleAnalytics gaId={GA_ID} />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
        <LeadPopup />
      </body>
    </html>
  );
}
