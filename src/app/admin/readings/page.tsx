import Link from "next/link";
import type { Metadata } from "next";
import { CopyLinkButton } from "@/components/admin/CopyLinkButton";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { listReadings } from "@/lib/admin/actions";

export const metadata: Metadata = {
  title: "鑑定一覧 | Admin",
  robots: { index: false, follow: false },
};

const statusLabel = {
  draft: "下書き",
  ready: "公開",
  sent: "送信済",
  archived: "アーカイブ",
} as const;

export default async function AdminReadingsPage() {
  const readings = await listReadings();

  return (
    <SiteContainer>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-serif text-2xl text-foreground">鑑定一覧</h1>
        <Link href="/admin/readings/new" className="btn-primary px-5 py-2 text-sm">
          新規作成
        </Link>
      </div>

      {readings.length === 0 ? (
        <div className="card-soft text-sm text-muted">
          まだ鑑定がありません。
        </div>
      ) : (
        <div className="space-y-4">
          {readings.map((reading) => (
            <article key={reading.id} className="card-soft flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-foreground">{reading.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {reading.client_name} ·{" "}
                  {statusLabel[reading.status as keyof typeof statusLabel] ?? reading.status}
                </p>
                <p className="mt-1 break-all text-xs text-muted">/r/{reading.token}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <CopyLinkButton token={reading.token} />
                <Link
                  href={`/r/${reading.token}`}
                  target="_blank"
                  className="btn-outline px-3 py-1.5 text-xs"
                >
                  プレビュー
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </SiteContainer>
  );
}
