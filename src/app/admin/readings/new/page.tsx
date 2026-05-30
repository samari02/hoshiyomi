import type { Metadata } from "next";
import { CreateReadingForm } from "@/components/admin/CreateReadingForm";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata: Metadata = {
  title: "鑑定作成 | Admin",
  robots: { index: false, follow: false },
};

export default function AdminNewReadingPage() {
  return (
    <SiteContainer>
      <h1 className="mb-6 font-serif text-2xl text-foreground">新規鑑定</h1>
      <CreateReadingForm />
    </SiteContainer>
  );
}
