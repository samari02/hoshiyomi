"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createReading } from "@/lib/admin/actions";
import { CopyLinkButton } from "@/components/admin/CopyLinkButton";
import { Field, SectionTitle, SignSelect } from "@/components/admin/ReadingFormFields";

export function CreateReadingForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [createdToken, setCreatedToken] = useState<string | null>(null);

  function handleSubmit(formData: FormData) {
    setError(null);
    setCreatedToken(null);

    const str = (key: string) => String(formData.get(key) ?? "");

    startTransition(async () => {
      try {
        const token = await createReading({
          clientName: str("clientName"),
          birthDate: str("birthDate"),
          birthTime: str("birthTime"),
          birthPlace: str("birthPlace"),
          title: str("title"),
          personalMessage: str("personalMessage"),
          sunSignKey: str("sunSignKey"),
          sunSummary: str("sunSummary"),
          sunDetail: str("sunDetail"),
          moonSignKey: str("moonSignKey"),
          moonSummary: str("moonSummary"),
          moonDetail: str("moonDetail"),
          risingSignKey: str("risingSignKey"),
          risingSummary: str("risingSummary"),
          risingDetail: str("risingDetail"),
          sunEnergy: str("sunEnergy"),
          moonEnergy: str("moonEnergy"),
          risingEnergy: str("risingEnergy"),
          loveTheme: str("loveTheme"),
          workTheme: str("workTheme"),
          moneyTheme: str("moneyTheme"),
          talent1Title: str("talent1Title"),
          talent1Body: str("talent1Body"),
          talent2Title: str("talent2Title"),
          talent2Body: str("talent2Body"),
          talent3Title: str("talent3Title"),
          talent3Body: str("talent3Body"),
          status: formData.get("status") === "ready" ? "ready" : "draft",
        });
        setCreatedToken(token);
        router.refresh();
      } catch (err) {
        setError(err instanceof Error ? err.message : "保存に失敗しました。");
      }
    });
  }

  return (
    <div className="space-y-6">
      <form action={handleSubmit} className="card-soft space-y-8">
        <div className="space-y-5">
          <SectionTitle>基本情報</SectionTitle>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">お名前</label>
              <input
                name="clientName"
                required
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
                placeholder="田中 花子"
              />
            </div>
            <div>
              <label className="text-sm font-medium">タイトル</label>
              <input
                name="title"
                required
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
                placeholder="花子さんの魂の設計図"
              />
            </div>
            <div>
              <label className="text-sm font-medium">生年月日</label>
              <input
                name="birthDate"
                type="date"
                required
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">出生時間（任意）</label>
              <input
                name="birthTime"
                type="time"
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium">出生地</label>
              <input
                name="birthPlace"
                required
                className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
                placeholder="東京"
              />
            </div>
          </div>
          <Field label="Nanamiからのメッセージ（最後に表示）" name="personalMessage" rows={3} />
        </div>

        <div className="space-y-5">
          <SectionTitle>あなたの基本性質</SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <label className="text-sm font-medium">太陽星座</label>
              <SignSelect name="sunSignKey" defaultValue="leo" />
              <Field label="概要" name="sunSummary" rows={2} />
              <Field label="詳細" name="sunDetail" rows={4} />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium">月星座</label>
              <SignSelect name="moonSignKey" defaultValue="pisces" />
              <Field label="概要" name="moonSummary" rows={2} />
              <Field label="詳細" name="moonDetail" rows={4} />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium">上昇星座</label>
              <SignSelect name="risingSignKey" defaultValue="libra" />
              <Field label="概要" name="risingSummary" rows={2} />
              <Field label="詳細" name="risingDetail" rows={4} />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <SectionTitle>3つのエネルギー</SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            <Field label="Sun Energy" name="sunEnergy" rows={4} />
            <Field label="Moon Energy" name="moonEnergy" rows={4} />
            <Field label="Ascendant Energy" name="risingEnergy" rows={4} />
          </div>
        </div>

        <div className="space-y-5">
          <SectionTitle>人生テーマ</SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            <Field label="恋愛" name="loveTheme" rows={4} />
            <Field label="仕事" name="workTheme" rows={4} />
            <Field label="お金" name="moneyTheme" rows={4} />
          </div>
        </div>

        <div className="space-y-5">
          <SectionTitle>才能 TOP3</SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-3">
              <input
                name="talent1Title"
                placeholder="才能 1 タイトル"
                className="w-full rounded-xl border border-border px-4 py-3 text-sm"
              />
              <Field label="" name="talent1Body" rows={3} />
            </div>
            <div className="space-y-3">
              <input
                name="talent2Title"
                placeholder="才能 2 タイトル"
                className="w-full rounded-xl border border-border px-4 py-3 text-sm"
              />
              <Field label="" name="talent2Body" rows={3} />
            </div>
            <div className="space-y-3">
              <input
                name="talent3Title"
                placeholder="才能 3 タイトル"
                className="w-full rounded-xl border border-border px-4 py-3 text-sm"
              />
              <Field label="" name="talent3Body" rows={3} />
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">ステータス</label>
          <select
            name="status"
            defaultValue="ready"
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm"
          >
            <option value="draft">下書き</option>
            <option value="ready">公開（リンク送信可）</option>
          </select>
        </div>

        {error && <p className="text-sm text-rose-dark">{error}</p>}

        <button type="submit" disabled={isPending} className="btn-primary">
          {isPending ? "保存中..." : "鑑定を作成"}
        </button>
      </form>

      {createdToken && (
        <div className="card-soft border-rose/30 bg-rose-light/30">
          <p className="font-medium text-foreground">作成しました</p>
          <p className="mt-2 break-all text-sm text-muted">/r/{createdToken}</p>
          <div className="mt-4">
            <CopyLinkButton token={createdToken} />
          </div>
        </div>
      )}
    </div>
  );
}
