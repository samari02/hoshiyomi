-- Optional: upgrade demo reading to v2 content for the new progressive page
-- Run after 02_seed.sql if demo-hoshiyomi-test already exists

UPDATE public.readings
SET
  title = '花子さんの魂の設計図',
  content = '{
    "version": 2,
    "basics": [
      {
        "key": "sun",
        "signKey": "leo",
        "summary": "華やかで温かいリーダーシップ。自分らしさを大切にする力があります。",
        "detail": "太陽獅子座のあなたは、自然と人を惹きつける存在感を持っています。認められたい気持ちの奥に、誰かを照らしたい優しさがあります。"
      },
      {
        "key": "moon",
        "signKey": "pisces",
        "summary": "繊細で共感力が高い心。静かな時間でエネルギーを整えます。",
        "detail": "月魚座は感受性豊かで、言葉にならない感情もキャッチできます。自分の境界線をやさしく守ることが、長く輝くコツです。"
      },
      {
        "key": "rising",
        "signKey": "libra",
        "summary": "上品で調和を大切にする第一印象。対話の中で信頼を築きます。",
        "detail": "上昇天秤座はバランス感覚に優れ、人との関係性を大切にします。決断のときは、自分の本音も丁寧に聴いてあげてください。"
      }
    ],
    "energies": [
      { "key": "sun", "body": "意志と自我のエネルギーは、創造性と誇りを通して表れます。" },
      { "key": "moon", "body": "感情のエネルギーは、共感と直感としてあなたを導きます。" },
      { "key": "rising", "body": "第一印象のエネルギーは、調和と美意識として現れます。" }
    ],
    "lifeThemes": [
      { "key": "love", "body": "恋愛では、安心できる関係性を育てることがテーマです。" },
      { "key": "work", "body": "仕事では、自分の才能を自然体で発揮できる環境が鍵です。" },
      { "key": "money", "body": "お金は、心の豊かさとバランスを整えることで安定します。" }
    ],
    "talents": [
      { "rank": 1, "title": "共感力", "body": "人の気持ちを察する力が、あなたの最大の才能です。" },
      { "rank": 2, "title": "創造性", "body": "想像力を形にする力が、新しい道を開きます。" },
      { "rank": 3, "title": "調和力", "body": "対立を和らげ、場を整える力を持っています。" }
    ]
  }'::jsonb
WHERE token = 'demo-hoshiyomi-test';
