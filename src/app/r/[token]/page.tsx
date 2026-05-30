import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadingView } from "@/components/reading/ReadingView";
import { getReadingByToken } from "@/lib/readings/getReadingByToken";

type PageProps = {
  params: Promise<{ token: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params;
  const reading = await getReadingByToken(token);

  if (!reading) {
    return {
      title: "鑑定が見つかりません",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${reading.title} | 星とあなたの物語`,
    description: `${reading.client_name}さんへの星読み鑑定`,
    robots: { index: false, follow: false },
  };
}

export default async function ReadingPage({ params }: PageProps) {
  const { token } = await params;
  const reading = await getReadingByToken(token);

  if (!reading) {
    notFound();
  }

  return <ReadingView reading={reading} />;
}
