export function getChartImageUrl(path: string | null): string | null {
  if (!path) return null;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;

  const normalized = path.replace(/^\/+/, "");
  return `${base}/storage/v1/object/public/charts/${normalized}`;
}
