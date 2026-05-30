-- STEP 2 — Run this AFTER 01_create.sql
-- Demo reading for testing: /r/demo-hoshiyomi-test

INSERT INTO public.readings (
  token,
  status,
  client_name,
  birth_date,
  birth_time,
  birth_place,
  title,
  content,
  personal_message
)
VALUES (
  'demo-hoshiyomi-test',
  'ready',
  '田中 花子',
  '1990-03-15',
  '14:30:00',
  '東京',
  '花子さんのホロスコープ',
  '{
    "sections": [
      {
        "key": "sun",
        "title": "太陽星座",
        "body": "太陽は魚座に位置しています。繊細で想像力豊かな感性をお持ちです。人の気持ちを自然と察知し、優しさで周囲を包み込む力があります。"
      },
      {
        "key": "moon",
        "title": "月星座",
        "body": "月は蟹座。心の安全基地を大切にし、大切な人との絆を何より重んじます。感情の波は深いですが、それがあなたの共感力の源になっています。"
      },
      {
        "key": "rising",
        "title": "上昇星座",
        "body": "上昇は乙女座。第一印象は落ち着いていて丁寧。細部への注意力と、実務的なアプローチが、あなたの強みとして表れます。"
      }
    ]
  }'::jsonb,
  '花子さん、鑑定のご依頼ありがとうございました。星々が語るあなたの物語を、心を込めてお届けします。 — Nanami'
)
ON CONFLICT (token) DO NOTHING;
