import { Metadata } from "next";
import ChristmasHeader from "@/components/christmas/ChristmasHeader";
import ChristmasHero from "@/components/christmas/ChristmasHero";
import CountdownTimer from "@/components/christmas/CountdownTimer";
import ChristmasFeatures from "@/components/christmas/ChristmasFeatures";
import ChristmasPricing from "@/components/christmas/ChristmasPricing";
import ChristmasCTA from "@/components/christmas/ChristmasCTA";
import ChristmasFooter from "@/components/christmas/ChristmasFooter";

export const metadata: Metadata = {
  title: "Christmas Sale - 30% OFF WP Statistics Premium",
  description:
    "Get 30% off WP Statistics Premium this Christmas! Use code CHRISTMAS30 at checkout. Limited time offer - ends December 31st.",
  keywords: [
    "WP Statistics discount",
    "WordPress analytics sale",
    "Christmas sale",
    "WP Statistics premium",
    "WordPress plugin deal",
  ],
  openGraph: {
    title: "Christmas Sale - 30% OFF WP Statistics Premium",
    description:
      "Get 30% off WP Statistics Premium this Christmas! Limited time offer.",
    type: "website",
  },
};

export default function ChristmasPage() {
  return (
    <div className="min-h-screen bg-[#0c1524]">
      <ChristmasHeader />
      <main>
        <ChristmasHero />
        <CountdownTimer />
        <ChristmasFeatures />
        <ChristmasPricing />
        <ChristmasCTA />
      </main>
      <ChristmasFooter />
    </div>
  );
}
