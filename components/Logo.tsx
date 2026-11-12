import { useId } from "react";

export function Mark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34BC94" />
          <stop offset="1" stopColor="#147458" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill={`url(#g${id})`} />
      <path d="M19 21 L28 30 M36 38 L45 47" stroke="#fff" strokeOpacity=".5" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M19 45 L44 20" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M32 19 H45 V32" fill="none" stroke="#fff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ tagline = false }: { tagline?: boolean }) {
  return (
    <a href="#top" className="logo" aria-label="IFX home">
      <Mark />
      <div style={{ lineHeight: 1 }}>
        i<span>fx</span>
        {tagline && <small>Forex Bureau Systems</small>}
      </div>
    </a>
  );
}
