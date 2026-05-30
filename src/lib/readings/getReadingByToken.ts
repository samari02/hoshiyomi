import { createClient } from "@/lib/supabase/server";
import type { Reading, ReadingContent } from "@/types/reading";

function parseReadingContent(raw: unknown): ReadingContent {
  if (
    raw &&
    typeof raw === "object" &&
    "sections" in raw &&
    Array.isArray((raw as ReadingContent).sections)
  ) {
    return raw as ReadingContent;
  }
  return { sections: [] };
}

export async function getReadingByToken(token: string): Promise<Reading | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("get_reading_by_token", {
    p_token: token,
  });

  if (error || !data?.length) {
    return null;
  }

  const row = data[0] as Omit<Reading, "content"> & { content: unknown };

  return {
    ...row,
    content: parseReadingContent(row.content),
  };
}
