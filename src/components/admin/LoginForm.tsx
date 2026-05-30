"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/admin/readings";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError("メールアドレスまたはパスワードが正しくありません。");
      return;
    }

    router.push(next);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="card-soft mx-auto max-w-md space-y-5">
      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-rose"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-medium text-foreground">
          パスワード
        </label>
        <input
          id="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-rose"
        />
      </div>
      {error && <p className="text-sm text-rose-dark">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "ログイン中..." : "ログイン"}
      </button>
    </form>
  );
}
