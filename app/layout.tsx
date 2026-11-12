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
  themeColor: "#29AB87",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
