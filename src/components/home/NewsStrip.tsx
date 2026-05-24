import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { news } from "@/content/home";

export function NewsStrip() {
  return (
    <section className="border-y border-border bg-white/60">
      <SiteContainer className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm xl:text-base">
          <span className="rounded-full bg-lavender-light px-3 py-0.5 text-xs font-medium text-lavender">
            お知らせ
          </span>
          <time className="text-muted">{news.date}</time>
          <p className="text-foreground">{news.title}</p>
        </div>
        <Link
          href={news.href}
          className="shrink-0 text-sm text-rose-dark hover:underline xl:text-base"
        >
          {news.viewAll} →
        </Link>
      </SiteContainer>
    </section>
  );
}
