import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import SolutionsSection from "@/components/SolutionsSection";
import GrowthFrameworkSection from "@/components/GrowthFrameworkSection";
import LeadFrameworkSection from "@/components/LeadFrameworkSection";
import ResultsSection from "@/components/ResultsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import OfferStackSection from "@/components/OfferStackSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FounderSection from "@/components/FounderSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReferralSection from "@/components/ReferralSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import { faqs } from "@/data/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <PainPointsSection />
      <SolutionsSection />
      <GrowthFrameworkSection />
      <LeadFrameworkSection />
      <ResultsSection />
      <CaseStudiesSection />
      <OfferStackSection />
      <PricingSection />
      <WhyChooseSection />
      <FounderSection />
      <VideoSection />
      <TestimonialsSection />
      <ReferralSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
