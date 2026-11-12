"use client";
import { useEffect, useRef, useState } from "react";
import { Mark } from "./Logo";
import { Shield, Bolt } from "./icons";

type Row = { code: string; name: string; buy: number; sell: number; dp: number; open: number; flash?: "up" | "down" };

const seed: Row[] = [
  { code: "USD", name: "US Dollar", buy: 128.85, sell: 129.65, dp: 2, open: 129.1 },
  { code: "EUR", name: "Euro", buy: 149.6, sell: 151.2, dp: 2, open: 150.2 },
  { code: "GBP", name: "Pound Sterling", buy: 171.8, sell: 173.9, dp: 2, open: 172.4 },
  { code: "AED", name: "UAE Dirham", buy: 35.02, sell: 35.41, dp: 2, open: 35.2 },
  { code: "CHF", name: "Swiss Franc", buy: 160.1, sell: 162.4, dp: 2, open: 161.0 },
  { code: "ZAR", name: "South African Rand", buy: 7.18, sell: 7.43, dp: 2, open: 7.3 },
  { code: "CNY", name: "Chinese Yuan", buy: 17.84, sell: 18.22, dp: 2, open: 18.0 },
];

export default function RateBoard() {
  const [rows, setRows] = useState(seed);
  const [time, setTime] = useState("");
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Africa/Nairobi" });
    setTime(fmt());
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => {
      setTime(fmt());
      setRows((prev) =>
        prev.map((r) => {
          if (Math.random() > 0.38) return { ...r, flash: undefined };
          const step = r.buy * (Math.random() - 0.5) * 0.0024;
          const buy = +(r.buy + step).toFixed(r.dp);
          const sell = +(r.sell + step).toFixed(r.dp);
          return { ...r, buy, sell, flash: step >= 0 ? "up" : "down" };
        })
      );
    }, 1600);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  return (
    <div className="board-wrap" data-reveal style={{ ["--d" as string]: ".15s" }}>
      <div className="board">
        <div className="board-top">
          <div className="board-title">
            <Mark className="" />
            <div>
              <h4>Head Office Rateboard</h4>
              <p>Base currency KES · All branches synced</p>
            </div>
          </div>
          <span className="live"><i /> LIVE</span>
        </div>
        <table>
          <thead>
            <tr><th>Currency</th><th>We buy</th><th>We sell</th><th className="hide-sm">Day</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const mid = (r.buy + r.sell) / 2;
              const chg = ((mid - r.open) / r.open) * 100;
              return (
                <tr key={r.code}>
                  <td>
                    <span className="ccy">
                      <span className="ccy-badge">{r.code}</span>
                      <span><b>{r.code}</b><small>{r.name}</small></span>
                    </span>
                  </td>
                  <td><span className={`rate ${r.flash ?? ""}`}>{r.buy.toFixed(r.dp)}</span></td>
                  <td><span className={`rate ${r.flash ?? ""}`}>{r.sell.toFixed(r.dp)}</span></td>
                  <td className="hide-sm"><span className={`chg ${chg >= 0 ? "pos" : "neg"}`}>{chg >= 0 ? "+" : ""}{chg.toFixed(2)}%</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="board-foot">
          <span>Illustrative rates · Nairobi {time} EAT</span>
          <span>42 branches · 0 drift</span>
        </div>
      </div>
      <div className="float-card f1">
        <span className="ic"><Shield /></span>
        <div><b>AML screen passed</b>Txn #48213 · 0.4s</div>
      </div>
      <div className="float-card f2">
        <span className="ic"><Bolt /></span>
        <div><b>CBK return filed</b>Daily · 08:42 EAT</div>
      </div>
    </div>
  );
}
