"use client";

import Image from "next/image";
import { useState } from "react";
import {
  basicQualityMeta,
  energyMeta,
  getZodiacSign,
  lifeThemeMeta,
} from "@/content/readingCatalog";
import type {
  BasicQuality,
  EnergyBlock,
  LifeTheme,
  Talent,
} from "@/types/reading";

function SignVisual({ signKey, className = "" }: { signKey: string; className?: string }) {
  const sign = getZodiacSign(signKey);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className={`flex items-center justify-center ${className}`}
    >
      {!imgFailed ? (
        <Image
          src={sign.image}
          alt={sign.labelJa}
          width={200}
          height={200}
          unoptimized
          onError={() => setImgFailed(true)}
          className="h-28 w-auto object-contain md:h-32"
        />
      ) : (
        <span className="text-6xl text-lavender md:text-7xl">{sign.symbol}</span>
      )}
    </div>
  );
}

export function ReadingBasics({ basics }: { basics: BasicQuality[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  if (basics.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {basics.map((item) => {
        const meta = basicQualityMeta[item.key];
        const sign = getZodiacSign(item.signKey);
        const isOpen = openKey === item.key;

        return (
          <article
            key={item.key}
            className={`card-soft overflow-hidden bg-gradient-to-b ${meta.tint}`}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              {meta.label}
            </p>
            <SignVisual signKey={item.signKey} className="my-4" />
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {sign.labelJa}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
            {item.detail && (
              <>
                <button
                  type="button"
                  onClick={() => setOpenKey(isOpen ? null : item.key)}
                  className="mt-4 text-sm font-medium text-rose-dark hover:underline"
                >
                  {isOpen ? "閉じる" : "詳しく見る →"}
                </button>
                {isOpen && (
                  <p className="mt-3 border-t border-border/60 pt-3 text-sm leading-7 text-muted">
                    {item.detail}
                  </p>
                )}
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}

export function ReadingEnergies({ energies }: { energies: EnergyBlock[] }) {
  if (energies.length === 0) return null;

  return (
    <div className="space-y-4">
      {energies.map((item) => {
        const meta = energyMeta[item.key];
        return (
          <article
            key={item.key}
            className="card-soft flex gap-4 md:gap-6"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-lavender-light to-rose-light text-2xl">
              {meta.icon}
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {meta.title}
              </h3>
              <p className="text-xs text-rose-dark">{meta.subtitle}</p>
              <p className="mt-2 text-sm leading-7 text-muted">{item.body}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ReadingLifeThemes({ themes }: { themes: LifeTheme[] }) {
  if (themes.length === 0) return null;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {themes.map((item) => {
        const meta = lifeThemeMeta[item.key];
        return (
          <article
            key={item.key}
            className={`card-soft bg-gradient-to-br ${meta.tint}`}
          >
            <div className="text-3xl">{meta.icon}</div>
            <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
              {meta.titleJa}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

export function ReadingTalents({ talents }: { talents: Talent[] }) {
  if (talents.length === 0) return null;

  return (
    <div className="space-y-4">
      {talents.map((talent) => (
        <article key={talent.rank} className="card-soft flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-light font-serif text-lg font-semibold text-gold">
            {talent.rank}
          </div>
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {talent.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">{talent.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
