import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsStrip } from "@/components/home/NewsStrip";
import { PromoCtaSection } from "@/components/home/PromoCtaSection";
import { ReasonsSection } from "@/components/home/ReasonsSection";
import { ServiceMenuSection } from "@/components/home/ServiceMenuSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <NewsStrip />
        <ServiceMenuSection />
        <ReasonsSection />
        <TestimonialsSection />
        <PromoCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
