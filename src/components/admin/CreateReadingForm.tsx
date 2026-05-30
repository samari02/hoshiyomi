"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createReading } from "@/lib/admin/actions";
import { CopyLinkButton } from "@/components/admin/CopyLinkButton";

export function CreateReadingForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [createdToken, setCreatedToken] = useState<string | null>(null);

  function handleSubmit(formData: FormData) {
    setError(null);
    setCreatedToken(null);

    startTransition(async () => {
      try {
        const token = await createReading({
          clientName: String(formData.get("clientName") ?? ""),
          birthDate: String(formData.get("birthDate") ?? ""),
          birthTime: String(formData.get("birthTime") ?? ""),
          birthPlace: String(formData.get("birthPlace") ?? ""),
          title: String(formData.get("title") ?? ""),
          personalMessage: String(formData.get("personalMessage") ?? ""),
          sunBody: String(formData.get("sunBody") ?? ""),
          moonBody: String(formData.get("moonBody") ?? ""),
          risingBody: String(formData.get("risingBody") ?? ""),
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
      <form action={handleSubmit} className="card-soft space-y-5">
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
              placeholder="花子さんのホロスコープ"
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

        <div>
          <label className="text-sm font-medium">Nanamiからのメッセージ</label>
          <textarea
            name="personalMessage"
            rows={3}
            className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">太陽星座</label>
            <textarea
              name="sunBody"
              rows={4}
              className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">月星座</label>
            <textarea
              name="moonBody"
              rows={4}
              className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium">上昇星座</label>
            <textarea
              name="risingBody"
              rows={4}
              className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm"
            />
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
