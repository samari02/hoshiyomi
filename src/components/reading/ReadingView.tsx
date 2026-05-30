import Image from "next/image";
import Link from "next/link";
import { getChartImageUrl } from "@/lib/readings/chartImageUrl";
import { site } from "@/content/home";
import type { Reading } from "@/types/reading";
import { SiteContainer } from "@/components/layout/SiteContainer";

function formatBirthDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}

function formatBirthTime(time: string | null) {
  if (!time) return "不明";
  return time.slice(0, 5);
}

export function ReadingView({ reading }: { reading: Reading }) {
  const chartUrl = getChartImageUrl(reading.chart_image_path);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/80 bg-background/90 backdrop-blur-md">
        <SiteContainer className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl text-gold">☽</span>
            <div>
              <p className="font-serif text-base font-semibold">{site.name}</p>
              <p className="text-xs text-muted">{site.tagline}</p>
            </div>
          </Link>
        </SiteContainer>
      </header>

      <main className="py-10 md:py-16">
        <SiteContainer>
          <div className="mx-auto max-w-3xl">
          <p className="text-center text-sm font-medium text-rose-dark">
            {reading.client_name}さんへ
          </p>
          <h1 className="mt-3 text-center font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
            {reading.title}
          </h1>

          <div className="card-soft mt-8 text-sm text-muted">
            <dl className="grid gap-3 sm:grid-cols-3">
              <div>
                <dt className="text-xs text-lavender">生年月日</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {formatBirthDate(reading.birth_date)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-lavender">出生時間</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {formatBirthTime(reading.birth_time)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-lavender">出生地</dt>
                <dd className="mt-1 font-medium text-foreground">
                  {reading.birth_place}
                </dd>
              </div>
            </dl>
          </div>

          {chartUrl && (
            <div className="mt-10 flex justify-center">
              <Image
                src={chartUrl}
                alt={`${reading.client_name}さんのホロスコープ`}
                width={800}
                height={800}
                unoptimized
                className="h-auto w-full max-w-lg object-contain"
                sizes="(max-width: 768px) 90vw, 512px"
              />
            </div>
          )}

          {reading.personal_message && (
            <div className="card-soft mt-10 border-rose/20 bg-rose-light/30">
              <p className="text-xs font-medium text-rose-dark">Nanamiより</p>
              <p className="mt-3 text-sm leading-8 text-foreground md:text-base">
                {reading.personal_message}
              </p>
            </div>
          )}

          {reading.content.sections.length > 0 && (
            <div className="mt-10 space-y-8">
              {reading.content.sections.map((section) => (
                <article key={section.key} className="card-soft">
                  <h2 className="font-serif text-lg font-semibold text-foreground md:text-xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-8 text-muted md:text-base">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          )}

          <p className="mt-12 text-center text-xs text-muted">
            このページはあなた専用の鑑定結果です。大切に保管してください。
          </p>
          </div>
        </SiteContainer>
      </main>
    </div>
  );
}
