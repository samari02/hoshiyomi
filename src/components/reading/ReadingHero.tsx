"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroWheelImage } from "@/content/readingCatalog";

export function ReadingHero({
  clientName,
  onStart,
}: {
  clientName: string;
  onStart: () => void;
}) {
  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <div className="watercolor-blob absolute left-0 top-0 h-56 w-56 rounded-full bg-lavender-light" />
      <div className="watercolor-blob absolute bottom-0 right-0 h-48 w-48 rounded-full bg-rose-light" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-2 md:gap-12">
        <div>
          <p className="text-sm font-medium text-rose-dark">{clientName}さんへ</p>
          <h1 className="mt-3 font-serif text-3xl leading-relaxed text-foreground md:text-4xl lg:text-5xl">
            あなたの魂の
            <br />
            設計図
          </h1>
          <p className="mt-4 text-sm text-muted md:text-base">
            〜 この人生で持って生まれた性質 〜
          </p>
          <p className="mt-6 max-w-md text-sm leading-8 text-muted">
            星の配置から読み解いた、あなただけのメッセージです。下のボタンから、順番にお届けします。
          </p>
          <button type="button" onClick={onStart} className="btn-primary mt-8">
            診断を見る →
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src={heroWheelImage}
            alt="ホロスコープ"
            width={600}
            height={600}
            unoptimized
            className="h-auto w-full max-w-sm object-contain drop-shadow-md md:max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function ReadingProgress({
  step,
  total,
}: {
  step: number;
  total: number;
}) {
  return (
    <div className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-lavender-light">
          <div
            className="h-full rounded-full bg-rose transition-all duration-500"
            style={{ width: `${(step / total) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-xs text-muted">
          {step}/{total}
        </span>
      </div>
    </div>
  );
}

export function useReadingProgress(sectionIds: string[]) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const observers = sectionIds.map((id, index) => {
      const node = document.getElementById(id);
      if (!node) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStep((prev) => Math.max(prev, index + 1));
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(node);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [sectionIds]);

  return step;
}
