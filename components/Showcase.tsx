"use client";
import { useState } from "react";
import { Mark } from "./Logo";
import { Grid, Ledger, Gauge, Shield, Board, Report, Teller, Settings } from "./icons";

const tabs = [
  { id: "acc", label: "Accounting", nav: "General Ledger" },
  { id: "risk", label: "Risk & Exposure", nav: "Risk Console" },
  { id: "aml", label: "AML Screening", nav: "AML Monitor" },
  { id: "rb", label: "Rateboards", nav: "Rateboards" },
] as const;
type Tab = (typeof tabs)[number]["id"];

function Accounting() {
  const rows = [
    ["1010", "Cash on hand: USD", "4,812,400.00", ""],
    ["1011", "Cash on hand: EUR", "1,206,950.00", ""],
    ["1020", "Bank: Settlement account", "18,442,310.55", ""],
    ["2100", "Customer deposits", "", "2,140,000.00"],
    ["4000", "FX trading income", "", "3,918,402.10"],
    ["4010", "Revaluation gain/(loss)", "", "412,880.45"],
    ["5200", "Branch operating costs", "1,284,600.00", ""],
  ];
  return (
    <>
      <div className="app-head">
        <div><h4>Trial Balance</h4><p>Consolidated · 42 branches · Period: October 2026</p></div>
        <span className="chip">Balanced · Auto‑reconciled</span>
      </div>
      <div className="kpis">
        <div className="kpi"><span>FX income MTD</span><b>KES 3.92M</b><em>+12.4% vs Sep</em></div>
        <div className="kpi"><span>Gross margin</span><b>1.84%</b><em>+0.11 pts</em></div>
        <div className="kpi"><span>Unreconciled items</span><b>0</b><em>Cleared 06:10</em></div>
        <div className="kpi"><span>Close status</span><b>Day 1</b><em>Ready for audit</em></div>
      </div>
      <div className="panel">
        <table>
          <thead><tr><th>Account</th><th>Description</th><th className="r">Debit (KES)</th><th className="r">Credit (KES)</th></tr></thead>
          <tbody>{rows.map((r) => (<tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td className="r">{r[2]}</td><td className="r">{r[3]}</td></tr>))}</tbody>
        </table>
      </div>
    </>
  );
}

function Risk() {
  const ex = [
    { c: "USD", w: 72, lim: 85, v: "$612K" },
    { c: "EUR", w: 48, lim: 80, v: "€204K" },
    { c: "GBP", w: 91, lim: 85, v: "£188K", hot: true },
    { c: "AED", w: 33, lim: 75, v: "AED 640K" },
    { c: "ZAR", w: 21, lim: 70, v: "R 1.1M" },
  ];
  return (
    <>
      <div className="app-head">
        <div><h4>Open Position & Exposure</h4><p>Real‑time net open position against board‑approved limits</p></div>
        <span className="chip warn">1 limit breach · GBP</span>
      </div>
      <div className="kpis">
        <div className="kpi"><span>Net open position</span><b>KES 148.2M</b><em>Within aggregate limit</em></div>
        <div className="kpi"><span>1‑day VaR (99%)</span><b>KES 2.41M</b><em>−4.2% d/d</em></div>
        <div className="kpi"><span>Core capital ratio</span><b>31.6%</b><em>Above CBK minimum</em></div>
        <div className="kpi"><span>Stress loss (−10%)</span><b>KES 14.8M</b><em>Tolerable</em></div>
      </div>
      <div className="two">
        <div className="panel bars">
          {ex.map((e) => (
            <div className="bar-row" key={e.c}>
              <b>{e.c}</b>
              <div className="bar"><i className={e.hot ? "hot" : ""} style={{ width: `${Math.min(e.w, 100)}%` }} /><span className="limit" style={{ left: `${e.lim}%` }} /></div>
              <span style={{ textAlign: "right" }}>{e.v}</span>
            </div>
          ))}
        </div>
        <div className="panel">
          <table>
            <thead><tr><th>Branch risk</th><th className="r">Rating</th></tr></thead>
            <tbody>
              <tr><td>Moi Avenue</td><td className="r"><span className="chip">Low</span></td></tr>
              <tr><td>Westlands</td><td className="r"><span className="chip">Low</span></td></tr>
              <tr><td>JKIA Terminal 1A</td><td className="r"><span className="chip warn">Medium</span></td></tr>
              <tr><td>Mombasa Digo Rd</td><td className="r"><span className="chip">Low</span></td></tr>
              <tr><td>Eldoret Town</td><td className="r"><span className="chip">Low</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Aml() {
  const q = [
    { id: "TX‑48291", who: "Corporate · Import Ltd", amt: "USD 48,000", rule: "Large cash · threshold", s: 78, c: "#e8a93a", st: <span className="chip warn">Review</span> },
    { id: "TX‑48288", who: "Individual · Walk‑in", amt: "USD 9,800", rule: "Structuring · 3 branches / 24h", s: 92, c: "#d1495b", st: <span className="chip bad">Escalated · STR</span> },
    { id: "TX‑48276", who: "Individual · Repeat", amt: "EUR 2,400", rule: "PEP fuzzy match (0.61)", s: 41, c: "#29AB87", st: <span className="chip">Cleared</span> },
    { id: "TX‑48270", who: "Corporate · Travel Co.", amt: "GBP 12,500", rule: "High‑risk corridor", s: 55, c: "#e8a93a", st: <span className="chip warn">Review</span> },
    { id: "TX‑48262", who: "Individual · Tourist", amt: "USD 1,200", rule: "Sanctions list · no hit", s: 6, c: "#29AB87", st: <span className="chip">Cleared</span> },
  ];
  return (
    <>
      <div className="app-head">
        <div><h4>Transaction Monitoring</h4><p>Screened against UN, OFAC, EU, UK HMT and local lists</p></div>
        <span className="chip">goAML export ready</span>
      </div>
      <div className="kpis">
        <div className="kpi"><span>Screened today</span><b>18,402</b><em>Avg 0.4s per txn</em></div>
        <div className="kpi"><span>Alerts open</span><b>7</b><em>−3 since 08:00</em></div>
        <div className="kpi"><span>CTRs queued</span><b>23</b><em>Auto‑generated</em></div>
        <div className="kpi"><span>False‑positive rate</span><b>2.1%</b><em>Tuned weekly</em></div>
      </div>
      <div className="panel">
        <table>
          <thead><tr><th>Ref</th><th>Customer</th><th>Amount</th><th>Trigger</th><th>Risk</th><th className="r">Status</th></tr></thead>
          <tbody>
            {q.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td><td>{r.who}</td><td>{r.amt}</td><td>{r.rule}</td>
                <td><span className="score"><i style={{ ["--w" as string]: `${r.s}%`, ["--c" as string]: r.c }} />{r.s}</span></td>
                <td className="r">{r.st}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Rateboards() {
  const r = [
    ["USD", "128.85", "129.65"], ["EUR", "149.60", "151.20"], ["GBP", "171.80", "173.90"], ["AED", "35.02", "35.41"],
    ["CHF", "160.10", "162.40"], ["CAD", "92.15", "94.05"], ["ZAR", "7.18", "7.43"], ["UGX*", "3.41", "3.52"],
  ];
  return (
    <>
      <div className="app-head">
        <div><h4>Digital Rateboards</h4><p>One rate change, published to 64 screens, the website and the API in under a second</p></div>
        <span className="chip">64 / 64 screens online</span>
      </div>
      <div className="rb">
        <div className="rb-head"><b>IFX Bureau · Westlands</b><span>BUY · SELL · KES</span></div>
        {r.map(([c, b, s]) => (<div className="rb-row" key={c}><b>{c}</b><span>{b}</span><span>{s}</span></div>))}
      </div>
      <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 12 }}>*UGX quoted per 100. Rates shown are illustrative.</p>
    </>
  );
}

export default function Showcase() {
  const [tab, setTab] = useState<Tab>("acc");
  const active = tabs.find((t) => t.id === tab)!;
  const navItems = [
    { l: "Dashboard", i: Grid }, { l: "Teller & Tills", i: Teller }, { l: "General Ledger", i: Ledger },
    { l: "Risk Console", i: Gauge }, { l: "AML Monitor", i: Shield }, { l: "Rateboards", i: Board },
    { l: "CBK Returns", i: Report }, { l: "Settings", i: Settings },
  ];
  return (
    <div data-reveal>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} className={`tab ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="screen">
        <div className="screen-bar"><i /><i /><i /><span className="url">IFX Cloud · {active.nav}</span></div>
        <div className="app">
          <aside className="app-side">
            <div className="logo"><Mark /><div>i<span>fx</span></div></div>
            <ul>
              {navItems.map(({ l, i: I }) => (<li key={l} className={l === active.nav ? "on" : ""}><I />{l}</li>))}
            </ul>
          </aside>
          <div className="app-main" key={tab}>
            {tab === "acc" && <Accounting />}
            {tab === "risk" && <Risk />}
            {tab === "aml" && <Aml />}
            {tab === "rb" && <Rateboards />}
          </div>
        </div>
      </div>
    </div>
  );
}
