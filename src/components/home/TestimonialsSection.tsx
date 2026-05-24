import Image from "next/image";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { testimonials } from "@/content/home";
import { SectionHeading } from "@/components/ui/StarDecor";

function TestimonialAvatar({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="mx-auto flex h-32 w-full items-center justify-center md:h-36 xl:h-40">
      <Image
        src={image}
        alt={imageAlt}
        width={1254}
        height={1254}
        unoptimized
        className="h-28 w-auto max-w-full object-contain md:h-32 xl:h-36 2xl:h-40"
        sizes="(max-width: 1280px) 30vw, 280px"
      />
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="mt-3 flex justify-center gap-0.5 text-gold" aria-label={`${count}つ星`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="voices" className="py-16 md:py-24 xl:py-28">
      <SiteContainer>
        <SectionHeading withStars={false}>{testimonials.heading}</SectionHeading>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8 xl:gap-10">
          {testimonials.items.map((item) => (
            <article
              key={item.profile}
              className="card-soft px-4 py-6 text-center xl:px-6 xl:py-8"
            >
              <TestimonialAvatar image={item.image} imageAlt={item.imageAlt} />
              <p className="mt-2 text-xs font-medium text-rose-dark md:text-sm">
                {item.profile}
              </p>
              <blockquote className="mt-4 text-sm leading-7 text-muted xl:text-base xl:leading-8">
                「{item.quote}」
              </blockquote>
              <StarRating count={item.rating} />
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
