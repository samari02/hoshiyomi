import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";

export default function ReadingNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <SiteContainer className="max-w-md text-center">
        <p className="text-3xl text-gold">☽</p>
        <h1 className="mt-4 font-serif text-2xl text-foreground">
          鑑定が見つかりません
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          リンクが無効か、有効期限が切れている可能性があります。
          お手数ですが、Nanamiまでご連絡ください。
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          ホームに戻る
        </Link>
      </SiteContainer>
    </div>
  );
}
