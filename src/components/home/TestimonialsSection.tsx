import Image from "next/image";
import { testimonials } from "@/content/home";
import { SectionHeading } from "@/components/ui/StarDecor";

function AvatarPlaceholder({ index }: { index: number }) {
  const hues = ["#e8d4f0", "#f5dce8", "#dce8f5"];
  return (
    <div
      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-2xl"
      style={{ backgroundColor: hues[index % hues.length] }}
      aria-hidden
    >
      ✧
    </div>
  );
}

function TestimonialAvatar({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="mx-auto flex h-28 w-full items-center justify-center md:h-32">
      <Image
        src={image}
        alt={imageAlt}
        width={1822}
        height={1278}
        unoptimized
        className="h-24 w-auto max-w-full object-contain md:h-28"
        sizes="200px"
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
    <section id="voices" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading withStars={false}>{testimonials.heading}</SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <article key={item.profile} className="card-soft text-center">
              {"image" in item && item.image ? (
                <TestimonialAvatar
                  image={item.image}
                  imageAlt={item.imageAlt ?? item.profile}
                />
              ) : (
                <AvatarPlaceholder index={index} />
              )}
              <p className="mt-2 text-xs font-medium text-rose-dark">
                {item.profile}
              </p>
              <blockquote className="mt-4 text-sm leading-7 text-muted">
                「{item.quote}」
              </blockquote>
              <StarRating count={item.rating} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
