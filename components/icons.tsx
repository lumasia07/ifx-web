import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

type P = SVGProps<SVGSVGElement>;

export const Arrow = (p: P) => (<svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const Check = (p: P) => (<svg {...base} strokeWidth={2.4} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>);
export const Board = (p: P) => (<svg {...base} {...p}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4M7 8.5h4M7 12h4M14 8.5h3M14 12h3" /></svg>);
export const Ledger = (p: P) => (<svg {...base} {...p}><path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3V4z" /><path d="M5 17a3 3 0 013-3h11M9 8h6M9 11h4" /></svg>);
export const Gauge = (p: P) => (<svg {...base} {...p}><path d="M4 16a8 8 0 1116 0" /><path d="M12 16l4-5" /><circle cx="12" cy="16" r="1.4" /><path d="M4 20h16" /></svg>);
export const Shield = (p: P) => (<svg {...base} {...p}><path d="M12 3l8 3v6c0 4.6-3.4 8-8 9-4.6-1-8-4.4-8-9V6l8-3z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></svg>);
export const Teller = (p: P) => (<svg {...base} {...p}><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M6.5 9.5v5M17.5 9.5v5" /></svg>);
export const Report = (p: P) => (<svg {...base} {...p}><path d="M7 3h7l5 5v13H7a2 2 0 01-2-2V5a2 2 0 012-2z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>);
export const Branches = (p: P) => (<svg {...base} {...p}><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="M7.8 7.8L10.5 16M16.2 7.8L13.5 16M8.5 6h7" /></svg>);
export const Chart = (p: P) => (<svg {...base} {...p}><path d="M4 20V4M4 20h16" /><path d="M7 15l4-4 3 3 5-6" /></svg>);
export const Lock = (p: P) => (<svg {...base} {...p}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 018 0v3M12 14.5v3" /></svg>);
export const Eye = (p: P) => (<svg {...base} {...p}><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></svg>);
export const Users = (p: P) => (<svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 4.5a3.2 3.2 0 010 7M21 20c0-2.6-1.6-4.8-4-5.6" /></svg>);
export const Cloud = (p: P) => (<svg {...base} {...p}><path d="M7 18a4.5 4.5 0 01-.6-9 6 6 0 0111.4 1.6A3.8 3.8 0 0117.5 18H7z" /></svg>);
export const Headset = (p: P) => (<svg {...base} {...p}><path d="M4 14v-2a8 8 0 0116 0v2" /><rect x="3" y="14" width="4" height="6" rx="1.5" /><rect x="17" y="14" width="4" height="6" rx="1.5" /><path d="M19 20c0 1-1 1.5-2 1.5h-3" /></svg>);
export const History = (p: P) => (<svg {...base} {...p}><path d="M3 12a9 9 0 103-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></svg>);
export const Grid = (p: P) => (<svg {...base} {...p}><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>);
export const Settings = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" /></svg>);
export const Quote = (p: P) => (<svg viewBox="0 0 32 32" fill="currentColor" {...p}><path d="M13 7C7.5 8.6 4 13 4 19v6h9v-9H8.5c.4-3.3 2.4-5.6 5.5-6.6L13 7zm15 0c-5.5 1.6-9 6-9 12v6h9v-9h-4.5c.4-3.3 2.4-5.6 5.5-6.6L28 7z" /></svg>);
export const Star = (p: P) => (<svg viewBox="0 0 20 20" fill="currentColor" {...p}><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" /></svg>);
export const Bolt = (p: P) => (<svg {...base} {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>);
