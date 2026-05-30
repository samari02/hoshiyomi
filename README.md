# hoshiyomi

Next.js App Router application with TypeScript, Tailwind CSS, and Supabase.

## Stack

- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (`@supabase/supabase-js`, `@supabase/ssr`)

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (same value as the Supabase **publishable** key)

## Supabase setup (first time)

1. Open your project in [Supabase Dashboard](https://supabase.com/dashboard)
2. Go to **SQL Editor** → **New query**
3. Run **`supabase/01_create.sql`** first (creates table + RPC)
4. Then run **`supabase/02_seed.sql`** (demo data)
5. Run **`supabase/03_admin_rls.sql`** (admin permissions for Nanami login)
6. Create Nanami's account in Supabase → **Authentication → Users → Add user**
7. Test: [http://localhost:3003/r/demo-hoshiyomi-test](http://localhost:3003/r/demo-hoshiyomi-test)
8. Admin: [http://localhost:3003/admin/login](http://localhost:3003/admin/login)

> If you see `relation "public.readings" does not exist`, you ran step 4 before step 3.

## Client reading pages

Each paid client gets a private link:

```
/r/{token}
```

Example after setup:

```
http://localhost:3003/r/demo-hoshiyomi-test
```

To create a real reading (for now, via SQL Editor):

```sql
INSERT INTO public.readings (
  token, status, client_name, birth_date, birth_place, title, content, personal_message
) VALUES (
  encode(gen_random_bytes(24), 'hex'),
  'ready',
  '山田 太郎',
  '1985-07-20',
  '大阪',
  '太郎さんのホロスコープ',
  '{"sections":[{"key":"sun","title":"太陽星座","body":"..."}]}'::jsonb,
  '鑑定結果をお届けします。 — Nanami'
)
RETURNING token;
```

Use the returned `token` in the link you send on LINE.

## Development

```bash
npm run dev
```

Runs on [http://localhost:3003](http://localhost:3003).
