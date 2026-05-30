import Image from "next/image";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { services } from "@/content/home";
import { SectionHeading } from "@/components/ui/StarDecor";

export function ServiceMenuSection() {
  return (
    <section id="menu" className="relative overflow-hidden py-16 md:py-24">
      <div className="watercolor-blob absolute right-4 top-0 h-40 w-40 rounded-full bg-lavender-light/80" />

      <SiteContainer className="relative">
        <SectionHeading>{services.heading}</SectionHeading>

        <div className="mx-auto flex max-w-3xl flex-col items-stretch justify-center gap-8 sm:flex-row sm:gap-8">
          {services.items.map((item) => (
            <article
              key={item.id}
              className="card-soft group flex min-h-[400px] min-w-0 flex-1 flex-col items-center px-5 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-rose/25 hover:shadow-lg hover:shadow-lavender/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:px-6 md:py-8"
            >
              <div className="flex min-h-[150px] w-full flex-1 items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1254}
                  height={1254}
                  unoptimized
                  className="h-32 w-auto max-h-[160px] max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100 md:h-36"
                  sizes="(max-width: 640px) 70vw, 280px"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-rose-dark md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                {item.description}
              </p>
              <p className="mt-4 font-medium text-rose-dark">{item.price}</p>
              <Link
                href={`#${item.id}`}
                className="btn-outline mt-5 w-full max-w-xs text-center transition-all duration-300 group-hover:border-rose group-hover:bg-rose-light group-hover:shadow-sm"
              >
                詳しく見る
              </Link>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
