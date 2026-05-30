import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { hero, navLinks, site } from "@/content/home";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <SiteContainer className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span className="text-2xl text-gold transition-transform group-hover:scale-110">
            ☽
          </span>
          <div>
            <p className="font-serif text-base font-semibold leading-tight tracking-wide text-foreground md:text-lg">
              {site.name}
            </p>
            <p className="text-xs tracking-wide text-muted md:text-sm">
              {site.tagline}
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="メインナビゲーション"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-rose-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#reserve" className="btn-primary shrink-0 px-5 py-2.5 text-xs md:text-sm">
          {hero.reserveCta}
        </Link>
      </SiteContainer>

      {/* Mobile nav */}
      <nav
        className="border-t border-border/60 lg:hidden"
        aria-label="モバイルナビゲーション"
      >
        <SiteContainer className="flex gap-4 overflow-x-auto py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-xs text-muted hover:text-rose-dark"
            >
              {link.label}
            </Link>
          ))}
        </SiteContainer>
      </nav>
    </header>
  );
}
