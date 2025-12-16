import { Metadata } from "next";
import BasecampHeader from "@/components/basecamp/BasecampHeader";
import BasecampHero from "@/components/basecamp/BasecampHero";
import ProblemSolution from "@/components/basecamp/ProblemSolution";
import ProductWalkthrough from "@/components/basecamp/ProductWalkthrough";
import FeatureList from "@/components/basecamp/FeatureList";
import TestimonialCarousel from "@/components/basecamp/TestimonialCarousel";
import BasecampPricing from "@/components/basecamp/BasecampPricing";
import BasecampFAQ from "@/components/basecamp/BasecampFAQ";
import BasecampCTA from "@/components/basecamp/BasecampCTA";
import BasecampFooter from "@/components/basecamp/BasecampFooter";

export const metadata: Metadata = {
  title: "WP Statistics - Simple Analytics for WordPress",
  description:
    "Understanding your visitors shouldn't require a PhD. WP Statistics is refreshingly simple analytics for WordPress. No external accounts. No privacy headaches. Just clear insights.",
  keywords: [
    "WordPress analytics",
    "WP Statistics",
    "privacy-friendly analytics",
    "GDPR analytics",
    "WordPress stats",
    "website analytics",
  ],
  openGraph: {
    title: "WP Statistics - Simple Analytics for WordPress",
    description:
      "Understanding your visitors shouldn't require a PhD. Refreshingly simple analytics for WordPress.",
    type: "website",
  },
};

export default function BasecampPage() {
  return (
    <div className="min-h-screen">
      <BasecampHeader />
      <main>
        <BasecampHero />
        <ProblemSolution />
        <ProductWalkthrough />
        <FeatureList />
        <TestimonialCarousel />
        <BasecampPricing />
        <BasecampFAQ />
        <BasecampCTA />
      </main>
      <BasecampFooter />
    </div>
  );
}
