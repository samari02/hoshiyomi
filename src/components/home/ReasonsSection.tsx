import { SiteContainer } from "@/components/layout/SiteContainer";
import { reasons } from "@/content/home";
import { SectionHeading } from "@/components/ui/StarDecor";

function ReasonIcon({ type }: { type: "moon" | "scales" | "star" }) {
  const icons = {
    moon: "☽",
    scales: "⚖",
    star: "✦",
  };
  return (
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-lavender-light to-rose-light text-2xl text-gold xl:h-20 xl:w-20 xl:text-3xl">
      {icons[type]}
    </div>
  );
}

export function ReasonsSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-transparent via-lavender-light/30 to-transparent py-16 md:py-24 xl:py-28"
    >
      <SiteContainer>
        <SectionHeading>{reasons.heading}</SectionHeading>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8 xl:gap-14">
          {reasons.items.map((item) => (
            <div key={item.title} className="text-center">
              <ReasonIcon type={item.icon} />
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground xl:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted xl:text-base xl:leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
