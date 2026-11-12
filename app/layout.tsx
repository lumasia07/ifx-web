import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IFX | Forex Bureau Management Platform",
  description:
    "IFX is the enterprise operating system for foreign exchange bureaus, with teller, accounting, risk, AML and CBK‑compliant reporting in one platform. Trusted since 2007.",
  openGraph: {
    title: "IFX | Forex Bureau Management Platform",
    description:
      "Accounting, risk assessment, AML screening, digital rateboards and CBK‑compliant reporting for forex bureaus. Since 2007.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Runs before first paint: applies a saved theme (dark is the default).
const themeScript = `(function(){try{var t=localStorage.getItem('ifx-theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;if(t==='light'){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#ffffff');}}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={outfit.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
