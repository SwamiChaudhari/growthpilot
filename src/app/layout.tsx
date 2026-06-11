import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LeadPopup from "@/components/LeadPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "GrowthPilot | We Don't Build Websites. We Build Growth Engines.",
  description:
    "Helping local businesses generate more leads, appointments, and revenue through high-converting websites and digital growth systems. Book a free strategy call today.",
  keywords: [
    "website design",
    "lead generation",
    "local SEO",
    "business growth",
    "dental clinic website",
    "real estate website",
    "hotel website",
    "Pune",
    "India",
  ],
  openGraph: {
    title: "GrowthPilot | Growth Engines for Local Businesses",
    description:
      "We don't build websites. We build growth engines that generate leads, appointments, and revenue.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
