import type {
  BasicQuality,
  EnergyBlock,
  LifeTheme,
  ReadingContent,
  ReadingContentLegacy,
  ReadingContentV2,
  Talent,
} from "@/types/reading";

function emptyV2(): ReadingContentV2 {
  return {
    version: 2,
    basics: [],
    energies: [],
    lifeThemes: [],
    talents: [],
  };
}

function migrateLegacy(legacy: ReadingContentLegacy): ReadingContentV2 {
  const keyMap: Record<string, BasicQuality["key"]> = {
    sun: "sun",
    moon: "moon",
    rising: "rising",
  };

  const basics: BasicQuality[] = legacy.sections
    .filter((s) => keyMap[s.key])
    .map((s) => ({
      key: keyMap[s.key],
      signKey: "pisces",
      summary: s.body.slice(0, 120),
      detail: s.body,
    }));

  const energies: EnergyBlock[] = legacy.sections
    .filter((s) => keyMap[s.key])
    .map((s) => ({ key: keyMap[s.key], body: s.body }));

  return {
    version: 2,
    basics,
    energies,
    lifeThemes: [],
    talents: [],
  };
}

export function parseReadingContent(raw: unknown): ReadingContent {
  if (!raw || typeof raw !== "object") {
    return emptyV2();
  }

  if ("version" in raw && (raw as ReadingContentV2).version === 2) {
    const v2 = raw as ReadingContentV2;
    return {
      version: 2,
      basics: v2.basics ?? [],
      energies: v2.energies ?? [],
      lifeThemes: v2.lifeThemes ?? [],
      talents: v2.talents ?? [],
    };
  }

  if ("sections" in raw && Array.isArray((raw as ReadingContentLegacy).sections)) {
    return migrateLegacy(raw as ReadingContentLegacy);
  }

  return emptyV2();
}

export function buildReadingContent(input: {
  sunSignKey: string;
  sunSummary: string;
  sunDetail: string;
  moonSignKey: string;
  moonSummary: string;
  moonDetail: string;
  risingSignKey: string;
  risingSummary: string;
  risingDetail: string;
  sunEnergy: string;
  moonEnergy: string;
  risingEnergy: string;
  loveTheme: string;
  workTheme: string;
  moneyTheme: string;
  talent1Title: string;
  talent1Body: string;
  talent2Title: string;
  talent2Body: string;
  talent3Title: string;
  talent3Body: string;
}): ReadingContentV2 {
  const basics: BasicQuality[] = [
    {
      key: "sun" as const,
      signKey: input.sunSignKey,
      summary: input.sunSummary,
      detail: input.sunDetail,
    },
    {
      key: "moon" as const,
      signKey: input.moonSignKey,
      summary: input.moonSummary,
      detail: input.moonDetail,
    },
    {
      key: "rising" as const,
      signKey: input.risingSignKey,
      summary: input.risingSummary,
      detail: input.risingDetail,
    },
  ].filter((b) => b.summary.trim() || b.detail.trim());

  const energies: EnergyBlock[] = [
    { key: "sun" as const, body: input.sunEnergy },
    { key: "moon" as const, body: input.moonEnergy },
    { key: "rising" as const, body: input.risingEnergy },
  ].filter((e) => e.body.trim());

  const lifeThemes: LifeTheme[] = [
    { key: "love" as const, body: input.loveTheme },
    { key: "work" as const, body: input.workTheme },
    { key: "money" as const, body: input.moneyTheme },
  ].filter((t) => t.body.trim());

  const talents: Talent[] = [
    { rank: 1, title: input.talent1Title, body: input.talent1Body },
    { rank: 2, title: input.talent2Title, body: input.talent2Body },
    { rank: 3, title: input.talent3Title, body: input.talent3Body },
  ].filter((t) => t.title.trim() || t.body.trim());

  return { version: 2, basics, energies, lifeThemes, talents };
}
