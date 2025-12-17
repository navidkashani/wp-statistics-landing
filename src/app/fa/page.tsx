import HeaderFa from "@/components/fa/HeaderFa";
import HeroFa from "@/components/fa/HeroFa";
import FeaturesFa from "@/components/fa/FeaturesFa";
import DashboardDemoFa from "@/components/fa/DashboardDemoFa";
import PrivacyFa from "@/components/fa/PrivacyFa";
import PricingFa from "@/components/fa/PricingFa";
import FAQFa from "@/components/fa/FAQFa";
import CTAFa from "@/components/fa/CTAFa";
import FooterFa from "@/components/fa/FooterFa";

export default function PersianPage() {
  return (
    <div className="min-h-screen">
      <HeaderFa />
      <main>
        <HeroFa />
        <FeaturesFa />
        <DashboardDemoFa />
        <PrivacyFa />
        <PricingFa />
        <FAQFa />
        <CTAFa />
      </main>
      <FooterFa />
    </div>
  );
}
