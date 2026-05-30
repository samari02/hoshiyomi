"use client";

import { useState } from "react";

export function CopyLinkButton({ token }: { token: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
      window.location.origin;
    const url = `${origin}/r/${token}`;

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="btn-outline px-3 py-1.5 text-xs"
    >
      {copied ? "コピーしました" : "リンクをコピー"}
    </button>
  );
}
