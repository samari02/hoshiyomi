"use client";

import Link from "next/link";
import { site } from "@/content/home";
import type { Reading } from "@/types/reading";
import { RevealSection } from "@/components/reading/RevealSection";
import {
  ReadingBasics,
  ReadingEnergies,
  ReadingLifeThemes,
  ReadingTalents,
} from "@/components/reading/ReadingSections";
import {
  ReadingHero,
  ReadingProgress,
  useReadingProgress,
} from "@/components/reading/ReadingHero";

const SECTION_IDS = ["basics", "energies", "life-themes", "talents", "message"];

export function ReadingExperience({ reading }: { reading: Reading }) {
  const step = useReadingProgress(SECTION_IDS);
  const { content } = reading;

  function scrollToBasics() {
    document.getElementById("basics")?.scrollIntoView({ behavior: "smooth" });
  }

  const hasContent =
    content.basics.length > 0 ||
    content.energies.length > 0 ||
    content.lifeThemes.length > 0 ||
    content.talents.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/80 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl text-gold">☽</span>
            <div>
              <p className="font-serif text-base font-semibold">{site.name}</p>
              <p className="text-xs text-muted">{site.tagline}</p>
            </div>
          </Link>
        </div>
      </header>

      <ReadingHero clientName={reading.client_name} onStart={scrollToBasics} />

      {hasContent && <ReadingProgress step={step} total={SECTION_IDS.length} />}

      <main className="mx-auto max-w-5xl space-y-16 px-5 py-12 md:space-y-20 md:py-16">
        {content.basics.length > 0 && (
          <RevealSection id="basics">
            <h2 className="section-heading mb-8 md:mb-10">あなたの基本性質</h2>
            <ReadingBasics basics={content.basics} />
          </RevealSection>
        )}

        {content.energies.length > 0 && (
          <RevealSection id="energies">
            <h2 className="section-heading mb-8 md:mb-10">
              あなたを構成する3つのエネルギー
            </h2>
            <ReadingEnergies energies={content.energies} />
          </RevealSection>
        )}

        {content.lifeThemes.length > 0 && (
          <RevealSection id="life-themes">
            <h2 className="section-heading mb-8 md:mb-10">あなたの人生テーマ</h2>
            <ReadingLifeThemes themes={content.lifeThemes} />
          </RevealSection>
        )}

        {content.talents.length > 0 && (
          <RevealSection id="talents">
            <h2 className="section-heading mb-8 md:mb-10">あなたの才能 TOP3</h2>
            <ReadingTalents talents={content.talents} />
          </RevealSection>
        )}

        {reading.personal_message && (
          <RevealSection id="message">
            <div className="card-soft mx-auto max-w-2xl border-rose/20 bg-rose-light/30 text-center">
              <p className="text-xs font-medium text-rose-dark">Nanamiより</p>
              <p className="mt-4 text-sm leading-8 text-foreground md:text-base">
                {reading.personal_message}
              </p>
            </div>
          </RevealSection>
        )}

        <p className="pb-8 text-center text-xs text-muted">
          このページはあなた専用の鑑定結果です。大切に保管してください。
        </p>
      </main>
    </div>
  );
}
