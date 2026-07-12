export function KnotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M20 14c-8 0-8 12 0 12s8 12 0 12-8-12 0-12 16-4 16 6-8 8-16 6-8-12 0-18 20-6 20 4-4 10-12 10" />
      <path d="M14 20c-4 4-4 10 2 12" opacity="0.5" />
    </svg>
  );
}

export function PadlockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="28" width="36" height="26" rx="2" />
      <path d="M22 28v-8a10 10 0 0 1 20 0v8" />
      <line x1="32" y1="38" x2="32" y2="46" />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
