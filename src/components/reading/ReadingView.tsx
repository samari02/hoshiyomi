import type { Reading } from "@/types/reading";
import { ReadingExperience } from "@/components/reading/ReadingExperience";

export function ReadingView({ reading }: { reading: Reading }) {
  return <ReadingExperience reading={reading} />;
}
