import Link from "next/link";
import { services } from "@/content/home";
import { SectionHeading } from "@/components/ui/StarDecor";

const accentColors = [
  "from-rose-light to-lavender-light",
  "from-lavender-light to-sky/30",
  "from-sky/30 to-gold-light",
  "from-gold-light to-rose-light",
];

export function ServiceMenuSection() {
  return (
    <section id="menu" className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="watercolor-blob absolute right-0 top-0 h-48 w-48 rounded-full bg-lavender-light/80" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading>{services.heading}</SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((item, index) => (
            <article
              key={item.id}
              className="card-soft group flex flex-col transition-shadow hover:shadow-md hover:shadow-lavender/20"
            >
              <div
                className={`mb-4 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br ${accentColors[index % accentColors.length]}`}
              >
                <span className="text-4xl" role="img" aria-hidden>
                  {item.emoji}
                </span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-muted">
                {item.description}
              </p>
              <p className="mt-4 font-medium text-rose-dark">{item.price}</p>
              <Link
                href={`#${item.id}`}
                className="btn-outline mt-4 w-full text-center"
              >
                詳しく見る
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
