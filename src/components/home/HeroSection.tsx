import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { hero } from "@/content/home";
import { HeroIllustration } from "@/components/ui/HeroIllustration";

export function HeroSection() {
  const titleLines = hero.title.split("\n");

  return (
    <section className="relative overflow-hidden">
      <div className="watercolor-blob absolute -left-20 top-0 h-64 w-64 rounded-full bg-lavender-light" />
      <div className="watercolor-blob absolute right-0 top-1/4 h-56 w-56 rounded-full bg-rose-light" />

      <SiteContainer className="relative grid items-center gap-10 py-16 md:grid-cols-2 md:gap-12 md:py-24 xl:gap-16 xl:py-28">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-3xl leading-relaxed tracking-wide text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-snug xl:text-5xl 2xl:text-[3.25rem]">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-8 text-muted md:text-base lg:max-w-lg xl:max-w-xl xl:text-lg xl:leading-9">
            {hero.subtitle}
          </p>
          <div className="mt-8">
            <Link href="#reserve" className="btn-primary text-base xl:px-10 xl:py-3.5">
              {hero.cta}
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <HeroIllustration />
        </div>
      </SiteContainer>
    </section>
  );
}
