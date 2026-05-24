import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { promo } from "@/content/home";

const zodiacAccent = ["♑", "♒", "♓", "♈", "♉", "♊"];

export function PromoCtaSection() {
  return (
    <section id="reserve" className="py-12 md:py-16 xl:py-20">
      <SiteContainer>
        <div className="relative overflow-hidden rounded-3xl border border-lavender/30 bg-gradient-to-r from-lavender-light/80 via-rose-light/60 to-gold-light/50 px-6 py-12 text-center shadow-lg shadow-lavender/15 md:px-12 md:py-14 xl:px-16 xl:py-16">
          <div className="watercolor-blob absolute -left-10 top-0 h-32 w-32 rounded-full bg-lavender/40" />
          <div className="watercolor-blob absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-rose/30" />

          <div
            className="absolute inset-x-0 top-3 flex justify-center gap-6 text-lg text-lavender/50 xl:gap-10 xl:text-xl"
            aria-hidden
          >
            {zodiacAccent.map((z) => (
              <span key={z}>{z}</span>
            ))}
          </div>

          <div className="relative">
            <span className="inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-rose-dark xl:text-sm">
              {promo.badge}
            </span>
            <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground md:text-3xl xl:text-4xl">
              {promo.title}
            </h2>
            <p className="mt-2 text-sm text-muted md:text-base xl:text-lg">
              {promo.subtitle}
            </p>
            <Link href="#reserve" className="btn-primary mt-8 xl:px-10 xl:py-3.5">
              {promo.cta}
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
