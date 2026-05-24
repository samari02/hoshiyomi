import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
      <Image
        src="/image_background-Photoroom.png"
        alt="星と占いを象徴する水彩イラスト"
        width={2400}
        height={1776}
        priority
        className="h-auto w-full object-contain drop-shadow-md"
        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 720px"
      />
    </div>
  );
}
