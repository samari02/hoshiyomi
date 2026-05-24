export const site = {
  name: "星とあなたの物語",
  tagline: "With Nanami",
  description:
    "タロット・西洋占星術・数秘術で、あなたらしい未来への道しるべをお届けします。",
} as const;

export const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "占いメニュー", href: "#menu" },
  { label: "鑑定について", href: "#about" },
  { label: "お客様の声", href: "#voices" },
  { label: "ブログ", href: "#blog" },
  { label: "お問い合わせ", href: "#contact" },
] as const;

export const hero = {
  title: "あなたらしい未来へ、\n星が導くメッセージ",
  subtitle:
    "タロット・西洋占星術・数秘術を通じて、今のあなたに必要な気づきと、前に進むためのヒントをお届けします。",
  cta: "今すぐ占ってもらう",
  reserveCta: "ご予約はこちら",
} as const;

export const news = {
  date: "2024.05.20",
  title: "新メニュー「数秘術リーディング」を追加しました",
  href: "#news",
  viewAll: "一覧を見る",
} as const;

export const services = {
  heading: "占いメニュー",
  items: [
    {
      id: "tarot",
      title: "タロットリーディング",
      description:
        "カードが映し出す、今の心と近い未来。恋愛・仕事・人間関係など、お悩みに合わせて鑑定します。",
      price: "3,000円〜",
      image: "/tarot.png",
      imageAlt: "タロットカードのイラスト",
    },
    {
      id: "horoscope",
      title: "ホロスコープ",
      description:
        "出生チャートから性格傾向と運命の流れを分析。太陽・月・上昇星座を中心にご説明します。",
      price: "5,000円〜",
      image: "/Horoscop.png",
      imageAlt: "ホロスコープのイラスト",
    },
  ],
} as const;

export const reasons = {
  heading: "選ばれる3つの理由",
  items: [
    {
      title: "やさしい鑑定",
      description:
        "怖い言い方はしません。受け取りやすい言葉で、心がほっとするメッセージをお届けします。",
      icon: "moon" as const,
    },
    {
      title: "具体的なアドバイス",
      description:
        "抽象的な結果だけで終わらせず、明日から試せる小さな行動や心の持ち方までお伝えします。",
      icon: "scales" as const,
    },
    {
      title: "未来への伴走",
      description:
        "一度きりで終わらない関係を大切に。継続鑑定やフォローで、変化の途中もサポートします。",
      icon: "star" as const,
    },
  ],
} as const;

export const testimonials = {
  heading: "お客様の声",
  items: [
    {
      profile: "50代・男性",
      quote:
        "言葉がとても温かくて、涙が出ました。自分を責めていたことが少しほぐれて、前に進めそうです。",
      rating: 5,
      image: "/customer3.png",
      imageAlt: "50代男性のお客様イラスト",
    },
    {
      profile: "30代・女性",
      quote:
        "恋愛の悩みで伺いましたが、相手の気持ちだけでなく、私が大切にすべきことまで教えてもらえました。",
      rating: 5,
      image: "/customer1.png",
      imageAlt: "30代女性のお客様イラスト",
    },
    {
      profile: "40代・女性",
      quote:
        "数秘術が初めてでしたが、自分の強みがはっきりわかり、仕事の方向性を決めるきっかけになりました。",
      rating: 5,
      image: "/customer2-Photoroom.png",
      imageAlt: "40代女性のお客様イラスト",
    },
  ],
} as const;

export const promo = {
  badge: "初回限定",
  title: "初回10分無料鑑定",
  subtitle: "はじめての方も、気軽にお試しください",
  cta: "今すぐ予約する",
} as const;

export const footer = {
  links: [
    { label: "プライバシーポリシー", href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "instagram" as const },
    { label: "LINE", href: "#", icon: "line" as const },
  ],
  copyright: "© 2024 星とあなたの物語 All Rights Reserved.",
} as const;
