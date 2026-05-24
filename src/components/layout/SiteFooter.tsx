import Link from "next/link";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { footer, navLinks, site } from "@/content/home";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-lavender-light/40">
      <SiteContainer className="py-12 md:py-16 xl:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-gold">☽</span>
              <p className="font-serif text-lg font-semibold xl:text-xl">{site.name}</p>
            </div>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted xl:text-base">
              {site.description}
            </p>
            <div className="mt-4 flex gap-3">
              {footer.social.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-xs font-medium text-muted transition-colors hover:border-rose hover:text-rose-dark"
                  aria-label={s.label}
                >
                  {s.icon === "instagram" ? "IG" : "LINE"}
                </Link>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3 xl:gap-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-rose-dark xl:text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/80 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-muted hover:text-foreground xl:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-muted xl:text-sm">{footer.copyright}</p>
        </div>
      </SiteContainer>
    </footer>
  );
}
