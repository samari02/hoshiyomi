export function StarDecor({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-block text-gold ${className}`} aria-hidden>
      ✦
    </span>
  );
}

export function SectionHeading({
  children,
  withStars = true,
}: {
  children: React.ReactNode;
  withStars?: boolean;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="section-heading">{children}</h2>
      {withStars && (
        <div className="section-heading-stars">
          <StarDecor />
          <StarDecor className="text-sm" />
          <StarDecor />
        </div>
      )}
    </div>
  );
}
