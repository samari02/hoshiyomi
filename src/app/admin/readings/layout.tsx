import Link from "next/link";
import type { Metadata } from "next";
import { LogoutButton } from "@/components/admin/LogoutButton";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80">
        <SiteContainer className="flex items-center justify-between py-4">
          <div>
            <p className="font-serif text-lg font-semibold">Admin</p>
            <p className="text-xs text-muted">鑑定管理</p>
          </div>
          <nav className="flex items-center gap-3">
            <Link href="/admin/readings" className="text-sm text-muted hover:text-rose-dark">
              一覧
            </Link>
            <Link href="/admin/readings/new" className="text-sm text-muted hover:text-rose-dark">
              新規作成
            </Link>
            <LogoutButton />
          </nav>
        </SiteContainer>
      </header>
      <main className="py-8 md:py-10">{children}</main>
    </div>
  );
}
