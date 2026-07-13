export function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const content = items.join("   ·   ");

  return (
    <div className={`group overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
        <span className="whitespace-nowrap">{content}</span>
        <span className="whitespace-nowrap" aria-hidden="true">
          {content}
        </span>
      </div>
    </div>
  );
}
