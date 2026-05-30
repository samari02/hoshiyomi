import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { hero } from "@/content/home";
import { HeroIllustration } from "@/components/ui/HeroIllustration";

export function HeroSection() {
  const titleLines = hero.title.split("\n");

  return (
    <section className="relative overflow-hidden">
      <div className="watercolor-blob absolute left-0 top-0 h-48 w-48 rounded-full bg-lavender-light" />
      <div className="watercolor-blob absolute right-0 top-1/4 h-48 w-48 rounded-full bg-rose-light" />

      <SiteContainer className="relative grid min-w-0 items-center gap-10 py-14 md:grid-cols-2 md:gap-10 md:py-20">
        <div className="order-2 min-w-0 md:order-1">
          <h1 className="font-serif text-2xl leading-relaxed tracking-wide text-balance text-foreground sm:text-3xl md:text-4xl">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-5 max-w-prose text-sm leading-8 text-muted md:text-base">
            {hero.subtitle}
          </p>
          <div className="mt-7">
            <Link href="#reserve" className="btn-primary">
              {hero.cta}
            </Link>
          </div>
        </div>

        <div className="order-1 min-w-0 md:order-2">
          <HeroIllustration />
        </div>
      </SiteContainer>
    </section>
  );
}
