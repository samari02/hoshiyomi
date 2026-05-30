export type BasicQualityKey = "sun" | "moon" | "rising";

export type BasicQuality = {
  key: BasicQualityKey;
  signKey: string;
  summary: string;
  detail: string;
};

export type EnergyBlock = {
  key: BasicQualityKey;
  body: string;
};

export type LifeThemeKey = "love" | "work" | "money";

export type LifeTheme = {
  key: LifeThemeKey;
  body: string;
};

export type Talent = {
  rank: number;
  title: string;
  body: string;
};

/** @deprecated legacy v1 shape */
export type ReadingSection = {
  key: string;
  title: string;
  body: string;
};

export type ReadingContentV2 = {
  version: 2;
  basics: BasicQuality[];
  energies: EnergyBlock[];
  lifeThemes: LifeTheme[];
  talents: Talent[];
};

export type ReadingContentLegacy = {
  sections: ReadingSection[];
};

export type ReadingContent = ReadingContentV2;

export type Reading = {
  id: string;
  client_name: string;
  birth_date: string;
  birth_time: string | null;
  birth_place: string;
  title: string;
  chart_image_path: string | null;
  content: ReadingContent;
  personal_message: string | null;
  created_at: string;
};
