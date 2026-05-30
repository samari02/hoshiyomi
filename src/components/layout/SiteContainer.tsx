import type { ReactNode } from "react";

const containerClass = "mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8";

export function SiteContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className ? `${containerClass} ${className}` : containerClass}>
      {children}
    </div>
  );
}
