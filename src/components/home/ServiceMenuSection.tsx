import Image from "next/image";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { services } from "@/content/home";
import { SectionHeading } from "@/components/ui/StarDecor";

export function ServiceMenuSection() {
  return (
    <section id="menu" className="relative py-16 md:py-24 xl:py-28">
      <div className="watercolor-blob absolute right-0 top-0 h-48 w-48 rounded-full bg-lavender-light/80" />

      <SiteContainer className="relative">
        <SectionHeading>{services.heading}</SectionHeading>

        <div className="mx-auto flex max-w-5xl flex-col items-stretch justify-center gap-8 sm:flex-row sm:gap-10 xl:max-w-none xl:gap-14">
          {services.items.map((item) => (
            <article
              key={item.id}
              className="card-soft group flex min-h-[420px] flex-1 flex-col items-center px-5 py-6 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-rose/25 hover:shadow-lg hover:shadow-lavender/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-[440px] md:px-8 md:py-8 xl:min-h-[460px]"
            >
              <div className="flex min-h-[160px] w-full flex-1 items-center justify-center md:min-h-[180px] xl:min-h-[200px]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={1254}
                  height={1254}
                  unoptimized
                  className="h-36 w-auto max-h-[180px] object-contain transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100 md:h-40 xl:h-48 xl:max-h-[220px]"
                  sizes="(max-width: 640px) 80vw, (max-width: 1280px) 40vw, 480px"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-rose-dark md:text-xl xl:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted xl:text-base xl:leading-8">
                {item.description}
              </p>
              <p className="mt-4 text-base font-medium text-rose-dark xl:text-lg">
                {item.price}
              </p>
              <Link
                href={`#${item.id}`}
                className="btn-outline mt-5 w-full max-w-xs text-center transition-all duration-300 group-hover:border-rose group-hover:bg-rose-light group-hover:shadow-sm xl:max-w-sm"
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
