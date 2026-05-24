import Link from "next/link";
import { promo } from "@/content/home";

const zodiacAccent = ["♑", "♒", "♓", "♈", "♉", "♊"];

export function PromoCtaSection() {
  return (
    <section id="reserve" className="px-4 py-12 md:px-6 md:py-16">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-lavender/30 bg-gradient-to-r from-lavender-light/80 via-rose-light/60 to-gold-light/50 px-6 py-12 text-center shadow-lg shadow-lavender/15 md:px-12 md:py-14">
        <div className="watercolor-blob absolute -left-10 top-0 h-32 w-32 rounded-full bg-lavender/40" />
        <div className="watercolor-blob absolute -right-10 bottom-0 h-28 w-28 rounded-full bg-rose/30" />

        <div
          className="absolute inset-x-0 top-3 flex justify-center gap-6 text-lg text-lavender/50"
          aria-hidden
        >
          {zodiacAccent.map((z) => (
            <span key={z}>{z}</span>
          ))}
        </div>

        <div className="relative">
          <span className="inline-block rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-rose-dark">
            {promo.badge}
          </span>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground md:text-3xl">
            {promo.title}
          </h2>
          <p className="mt-2 text-sm text-muted md:text-base">{promo.subtitle}</p>
          <Link href="#reserve" className="btn-primary mt-8">
            {promo.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
