const zodiacSymbols = [
  "♈", "♉", "♊", "♋", "♌", "♍",
  "♎", "♏", "♐", "♑", "♒", "♓",
];

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Ambient watercolor */}
      <div className="watercolor-blob absolute -left-8 top-8 h-48 w-48 rounded-full bg-lavender" />
      <div className="watercolor-blob absolute -right-4 bottom-12 h-40 w-40 rounded-full bg-rose-light" />
      <div className="watercolor-blob absolute left-1/3 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-sky/60" />

      {/* Zodiac ring */}
      <div className="absolute inset-4 rounded-full border border-lavender/30 bg-white/40 backdrop-blur-sm">
        {zodiacSymbols.map((symbol, i) => {
          const angle = (i * 360) / 12 - 90;
          const rad = (angle * Math.PI) / 180;
          const radius = 42;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          return (
            <span
              key={symbol}
              className="absolute text-sm text-lavender/80 md:text-base"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {symbol}
            </span>
          );
        })}
      </div>

      {/* Central figure — stylized silhouette */}
      <svg
        viewBox="0 0 200 240"
        className="relative z-10 mx-auto h-full w-4/5 drop-shadow-lg"
        aria-hidden
      >
        <defs>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c9a8e8" />
            <stop offset="50%" stopColor="#d4899a" />
            <stop offset="100%" stopColor="#a8c8e8" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fce8ec" />
            <stop offset="100%" stopColor="#f5dce8" />
          </linearGradient>
        </defs>
        {/* flowing hair */}
        <path
          d="M100 45 C60 50 35 90 40 140 C42 170 55 200 70 220 C85 235 100 238 115 220 C130 200 145 170 160 140 C165 90 140 50 100 45 Z"
          fill="url(#hairGrad)"
          opacity="0.85"
        />
        {/* face */}
        <ellipse cx="100" cy="95" rx="32" ry="38" fill="url(#skinGrad)" />
        {/* closed eyes — serene */}
        <path
          d="M82 92 Q90 96 98 92"
          stroke="#b89ab0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M102 92 Q110 96 118 92"
          stroke="#b89ab0"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* subtle smile */}
        <path
          d="M88 108 Q100 114 112 108"
          stroke="#c9a0b0"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* stars around */}
        <circle cx="45" cy="60" r="2" fill="#c9a227" opacity="0.8" />
        <circle cx="155" cy="75" r="1.5" fill="#c9a227" opacity="0.7" />
        <circle cx="165" cy="150" r="2" fill="#d4899a" opacity="0.6" />
        <circle cx="35" cy="165" r="1.5" fill="#a8c8e8" opacity="0.7" />
      </svg>

      {/* Moon accent */}
      <div className="absolute -left-2 top-1/4 text-3xl text-gold/80 md:text-4xl">
        ☽
      </div>
    </div>
  );
}
