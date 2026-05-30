export type ZodiacKey =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export const zodiacSigns: {
  key: ZodiacKey;
  labelJa: string;
  symbol: string;
  image: string;
}[] = [
  { key: "aries", labelJa: "牡羊座", symbol: "♈", image: "/readings/signs/aries.png" },
  { key: "taurus", labelJa: "牡牛座", symbol: "♉", image: "/readings/signs/taurus.png" },
  { key: "gemini", labelJa: "双子座", symbol: "♊", image: "/readings/signs/gemini.png" },
  { key: "cancer", labelJa: "蟹座", symbol: "♋", image: "/readings/signs/cancer.png" },
  { key: "leo", labelJa: "獅子座", symbol: "♌", image: "/readings/signs/leo.png" },
  { key: "virgo", labelJa: "乙女座", symbol: "♍", image: "/readings/signs/virgo.png" },
  { key: "libra", labelJa: "天秤座", symbol: "♎", image: "/readings/signs/libra.png" },
  { key: "scorpio", labelJa: "蠍座", symbol: "♏", image: "/readings/signs/scorpio.png" },
  { key: "sagittarius", labelJa: "射手座", symbol: "♐", image: "/readings/signs/sagittarius.png" },
  { key: "capricorn", labelJa: "山羊座", symbol: "♑", image: "/readings/signs/capricorn.png" },
  { key: "aquarius", labelJa: "水瓶座", symbol: "♒", image: "/readings/signs/aquarius.png" },
  { key: "pisces", labelJa: "魚座", symbol: "♓", image: "/readings/signs/pisces.png" },
];

export const basicQualityMeta = {
  sun: { label: "Sun Sign", labelJa: "太陽星座", tint: "from-gold-light to-rose-light/60" },
  moon: { label: "Moon Sign", labelJa: "月星座", tint: "from-sky/30 to-lavender-light" },
  rising: {
    label: "Ascendant",
    labelJa: "上昇星座",
    tint: "from-rose-light to-lavender-light/80",
  },
} as const;

export const energyMeta = {
  sun: { title: "Sun Energy", subtitle: "〜 意志と自我 〜", icon: "☀" },
  moon: { title: "Moon Energy", subtitle: "〜 心と感情 〜", icon: "☽" },
  rising: { title: "Ascendant Energy", subtitle: "〜 第一印象 〜", icon: "↑" },
} as const;

export const lifeThemeMeta = {
  love: { title: "Love", titleJa: "恋愛", icon: "💗", tint: "from-rose-light to-gold-light/50" },
  work: { title: "Work", titleJa: "仕事", icon: "✦", tint: "from-lavender-light to-sky/30" },
  money: { title: "Money", titleJa: "お金", icon: "☽", tint: "from-gold-light/80 to-rose-light/40" },
} as const;

export const heroWheelImage = "/Horoscop.png";

export function getZodiacSign(key: string) {
  return zodiacSigns.find((sign) => sign.key === key) ?? zodiacSigns[0];
}
