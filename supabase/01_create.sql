-- STEP 1 — Run this FIRST in Supabase SQL Editor
-- Creates table, RPC, and storage bucket

DO $$ BEGIN
  CREATE TYPE public.reading_status AS ENUM ('draft', 'ready', 'sent', 'archived');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

CREATE TABLE IF NOT EXISTS public.readings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token text NOT NULL UNIQUE DEFAULT encode(gen_random_bytes(24), 'hex'),
  status public.reading_status NOT NULL DEFAULT 'draft',
  client_name text NOT NULL,
  birth_date date NOT NULL,
  birth_time time,
  birth_place text NOT NULL,
  title text NOT NULL,
  chart_image_path text,
  content jsonb NOT NULL DEFAULT '{"sections":[]}'::jsonb,
  personal_message text,
  sent_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS readings_token_idx ON public.readings (token);
CREATE INDEX IF NOT EXISTS readings_status_idx ON public.readings (status);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS readings_updated_at ON public.readings;
CREATE TRIGGER readings_updated_at
  BEFORE UPDATE ON public.readings
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.readings ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.get_reading_by_token(p_token text)
RETURNS TABLE (
  id uuid,
  client_name text,
  birth_date date,
  birth_time time,
  birth_place text,
  title text,
  chart_image_path text,
  content jsonb,
  personal_message text,
  created_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
STABLE
AS $$
  SELECT
    r.id,
    r.client_name,
    r.birth_date,
    r.birth_time,
    r.birth_place,
    r.title,
    r.chart_image_path,
    r.content,
    r.personal_message,
    r.created_at
  FROM public.readings r
  WHERE r.token = p_token
    AND r.status IN ('ready', 'sent')
    AND (r.expires_at IS NULL OR r.expires_at > now());
$$;

REVOKE ALL ON FUNCTION public.get_reading_by_token(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_reading_by_token(text) TO anon, authenticated;

INSERT INTO storage.buckets (id, name, public)
VALUES ('charts', 'charts', true)
ON CONFLICT (id) DO UPDATE SET public = EXCLUDED.public;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'Public read chart images'
  ) THEN
    CREATE POLICY "Public read chart images"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'charts');
  END IF;
END $$;
