import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DashboardDemo from "@/components/DashboardDemo";
import ContentAnalytics from "@/components/ContentAnalytics";
import Privacy from "@/components/Privacy";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <div id="dashboard-demo">
          <DashboardDemo />
        </div>
        <ContentAnalytics />
        <div id="privacy">
          <Privacy />
        </div>
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
