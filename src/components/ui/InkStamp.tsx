const CIRCLE_PATH = "M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0";

export function InkStamp({
  label = "SENTINEL HOUSE PRESS",
  mark = "APPROVED",
  className,
}: {
  label?: string;
  mark?: string;
  className?: string;
}) {
  const filterId = `stamp-distress-${label.replace(/\s+/g, "")}`;

  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={className}
      style={{ color: "var(--color-oxblood)" }}
    >
      <defs>
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.04" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
        <path id={`${filterId}-path`} d={CIRCLE_PATH} fill="none" />
      </defs>
      <g filter={`url(#${filterId})`} fill="none" stroke="currentColor">
        <circle cx="100" cy="100" r="92" strokeWidth="2" />
        <circle cx="100" cy="100" r="84" strokeWidth="1" />
        <text fill="currentColor" fontSize="11" letterSpacing="3" fontFamily="var(--font-mono)">
          <textPath href={`#${filterId}-path`} startOffset="2%">
            {label} &middot; {label} &middot;
          </textPath>
        </text>
        <text
          x="100"
          y="108"
          textAnchor="middle"
          fontSize="24"
          fontFamily="var(--font-serif)"
          fontWeight="600"
          stroke="none"
          fill="currentColor"
          transform="rotate(-8 100 100)"
        >
          {mark}
        </text>
      </g>
    </svg>
  );
}
