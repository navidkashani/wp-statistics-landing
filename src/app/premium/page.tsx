import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremiumHero from "@/components/premium/PremiumHero";
import ComparisonTable from "@/components/premium/ComparisonTable";
import AddonsShowcase from "@/components/premium/AddonsShowcase";
import ROICalculator from "@/components/premium/ROICalculator";
import PremiumTestimonials from "@/components/premium/PremiumTestimonials";
import PremiumPricing from "@/components/premium/PremiumPricing";
import PremiumFAQ from "@/components/premium/PremiumFAQ";
import PremiumCTA from "@/components/premium/PremiumCTA";

export const metadata: Metadata = {
  title: "WP Statistics Premium - Unlock All Analytics Features",
  description:
    "Upgrade to WP Statistics Premium and get all 8 add-ons, priority support, and advanced analytics features. Starting at $119/year with 14-day money-back guarantee.",
  keywords: [
    "WP Statistics Premium",
    "WordPress analytics premium",
    "WP Statistics add-ons",
    "premium analytics",
    "WordPress statistics upgrade",
  ],
  openGraph: {
    title: "WP Statistics Premium - Unlock All Analytics Features",
    description:
      "Get all 8 premium add-ons, priority support, and advanced features. Starting at $119/year.",
    type: "website",
  },
};

export default function PremiumPage() {
  return (
    <>
      <Header />
      <main>
        <PremiumHero />
        <ComparisonTable />
        <AddonsShowcase />
        <ROICalculator />
        <PremiumTestimonials />
        <PremiumPricing />
        <PremiumFAQ />
        <PremiumCTA />
      </main>
      <Footer />
    </>
  );
}
