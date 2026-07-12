export function Kicker({ number, label }: { number: string; label: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-oxblood">
      <span className="text-pencil">{number}</span>
      {label}
    </p>
  );
}
