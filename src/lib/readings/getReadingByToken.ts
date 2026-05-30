import { createClient } from "@/lib/supabase/server";
import { parseReadingContent } from "@/lib/readings/parseReadingContent";
import type { Reading } from "@/types/reading";

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
