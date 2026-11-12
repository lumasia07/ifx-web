import Nav from "@/components/Nav";
import RateBoard from "@/components/RateBoard";
import Counter from "@/components/Counter";
import Showcase from "@/components/Showcase";
import Logo from "@/components/Logo";
import {
  Arrow, Board, Ledger, Gauge, Shield, Teller, Report, Branches, Chart, Check, Lock, Eye, Users, Cloud, Headset, History, Quote, Star,
} from "@/components/icons";

const pairs = [
  ["USD/KES", "129.25", "+0.12%"], ["EUR/KES", "150.40", "+0.08%"], ["GBP/KES", "172.85", "−0.05%"], ["AED/KES", "35.21", "+0.10%"],
  ["USD/UGX", "3,712", "+0.04%"], ["USD/TZS", "2,648", "−0.02%"], ["USD/RWF", "1,402", "+0.06%"], ["EUR/USD", "1.1636", "−0.03%"],
  ["GBP/USD", "1.3374", "+0.07%"], ["USD/ZAR", "17.84", "−0.11%"], ["USD/AED", "3.6725", "0.00%"], ["USD/CHF", "0.8031", "+0.02%"],
];

const modules = [
  { icon: Teller, title: "Teller & Till Management", text: "Fast counter workflows with denomination counting, till limits, blind cash‑ups and maker‑checker approvals at every station.", tags: ["Multi‑currency tills", "Denominations", "Receipts"], span: "span-2" },
  { icon: Ledger, title: "Accounting & General Ledger", text: "Every deal posts to a double‑entry ledger in real time. Revaluation, P&L by currency and day‑one month‑end close come built in.", tags: ["Auto‑posting", "Revaluation", "IFRS‑ready"], span: "span-2" },
  { icon: Board, title: "Digital Rateboards", text: "Publish rates from treasury to every branch screen, your website and partner APIs in under a second, with spread controls by branch.", tags: ["TV & LED", "Web widget", "API"], span: "span-2" },
  { icon: Gauge, title: "Risk Assessment & Exposure", text: "Live net open positions, VaR and stress testing against board‑approved limits. Breaches are blocked at the till, not found in tomorrow's report.", tags: ["NOP limits", "VaR", "Stress tests", "Customer risk scoring"], span: "span-4 feature" },
  { icon: Shield, title: "AML / CFT Screening", text: "Sanctions, PEP and adverse‑media screening on every transaction, with behavioural rules that catch structuring across branches.", tags: ["UN · OFAC · EU · UK", "PEP", "goAML"], span: "span-2" },
  { icon: Report, title: "CBK Regulatory Reporting", text: "Daily, weekly and monthly prudential returns are generated from source data, validated, then submitted on schedule.", tags: ["Prudential returns", "Audit trail"], span: "span-2" },
  { icon: Branches, title: "Multi‑Branch & Treasury", text: "Inter‑branch cash transfers, vault management and consolidated positions across every branch and every country.", tags: ["Vaults", "Transfers"], span: "span-2" },
  { icon: Chart, title: "Analytics & BI", text: "Margins, volumes and customer insights by branch, teller and currency, with scheduled board packs ready to send.", tags: ["Dashboards", "Exports"], span: "span-2" },
];

const timeline = [
  { y: "2007", t: "Founded in Nairobi", d: "IFX starts with a single mission: to bring bank‑grade systems to independent forex bureaus." },
  { y: "2011", t: "Multi‑branch network", d: "Real‑time branch synchronisation and the first IFX digital rateboards go live." },
  { y: "2015", t: "Regional expansion", d: "Deployments extend across Uganda, Tanzania, Rwanda and South Sudan." },
  { y: "2018", t: "AML engine launched", d: "Integrated sanctions screening and transaction monitoring, built for FRC reporting." },
  { y: "2020", t: "IFX Cloud", d: "A fully hosted platform with high availability and disaster recovery as standard." },
  { y: "2022", t: "Gulf & UK presence", d: "Bureaus in Dubai and London adopt IFX for multi‑jurisdiction compliance." },
  { y: "2024", t: "Automated CBK returns", d: "Prudential returns are generated, validated and filed directly from the ledger." },
  { y: "2026", t: "Risk Intelligence", d: "Behavioural risk scoring and predictive exposure analytics across the network." },
];

const quotes = [
  { q: "Our CBK returns used to take two people most of the morning. Now they're generated, checked and filed before the first customer walks in.", n: "Daniel Otieno", r: "Head of Compliance · Bureau group, Mombasa", i: "DO" },
  { q: "The AML module flagged a structuring pattern across three of our branches within a week. We would never have caught that manually.", n: "Grace Namutebi", r: "MLRO · Forex bureau, Kampala", i: "GN" },
  { q: "When treasury changes a rate, every screen in every branch updates at once. Customers notice, and so do our margins.", n: "Rashid Al‑Mansoori", r: "Operations Director · Exchange house, Dubai", i: "RA" },
  { q: "Position limits are now enforced at the till instead of being discovered in the morning report. It completely changed how we manage risk.", n: "Neema Mushi", r: "Treasury Lead · Bureau de change, Dar es Salaam", i: "NM" },
  { q: "Our auditors asked for six months of teller‑level history across every branch. We exported it in minutes, fully reconciled to the ledger.", n: "Samuel Kiprono", r: "Internal Audit Lead · Bureau group, Eldoret", i: "SK" },
  { q: "We've been on IFX since 2012. The system has grown with us, from one counter to fourteen branches, and support still picks up at 7 a.m.", n: "Jean‑Paul Habimana", r: "Managing Director · Forex bureau, Kigali", i: "JH" },
];

const security = [
  { icon: Lock, t: "Encryption everywhere", d: "TLS 1.3 in transit and AES‑256 at rest, with keys managed in hardware security modules." },
  { icon: Eye, t: "Immutable audit trail", d: "Every action is logged with user, terminal, timestamp and before/after values, and records can't be edited." },
  { icon: Users, t: "Role‑based access", d: "Granular permissions, maker‑checker on sensitive actions and enforced two‑factor authentication." },
  { icon: Cloud, t: "99.98% availability", d: "Active‑active hosting with continuous replication and tested disaster recovery." },
  { icon: History, t: "Offline resilience", d: "Branches keep trading through connectivity loss and reconcile automatically when back online." },
  { icon: Headset, t: "Local, 24/7 support", d: "Dedicated account managers, on‑site onboarding and engineers who understand bureau operations." },
];

const cities: [string, number, number, boolean?][] = [
  ["Nairobi", 383, 250, true], ["Mombasa", 403, 263], ["Kampala", 355, 243], ["Dar es Salaam", 400, 276], ["Kigali", 338, 254],
  ["Juba", 348, 222], ["Addis Ababa", 396, 203], ["Lusaka", 326, 313], ["Johannesburg", 324, 360], ["Dubai", 508, 132], ["London", 134, 30],
];

export default function Home() {
  const hub = cities[0];
  const dots: [number, number][] = [];
  for (let x = 10; x < 540; x += 14) for (let y = 10; y < 400; y += 14) dots.push([x, y]);

  return (
    <>
      <Nav />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-bg"><div className="glow g1" /><div className="glow g2" /></div>
          <div className="container hero-grid">
            <div>
              <div className="pill" data-reveal><b>Since 2007</b> Built for CBK‑licensed forex bureaus</div>
              <h1 data-reveal style={{ ["--d" as string]: ".05s" }}>
                The operating system for <span className="accent">foreign exchange</span> bureaus.
              </h1>
              <p className="lead" data-reveal style={{ ["--d" as string]: ".1s" }}>
                IFX brings teller operations, accounting, risk, AML and regulatory reporting into one secure platform. Bureaus from Nairobi to Dubai rely on it to trade faster and stay compliant.
              </p>
              <div className="hero-ctas" data-reveal style={{ ["--d" as string]: ".15s" }}>
                <a className="btn btn-primary" href="#contact">Book a live demo <Arrow /></a>
                <a className="btn btn-ghost" href="#product">Explore the platform</a>
              </div>
              <div className="hero-proof" data-reveal style={{ ["--d" as string]: ".2s" }}>
                <div><strong>640+</strong><span>Bureaus & branches</span></div>
                <div><strong>11</strong><span>Countries</span></div>
                <div><strong>19 yrs</strong><span>In production</span></div>
              </div>
            </div>
            <RateBoard />
          </div>
        </section>

        {/* TICKER */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...pairs, ...pairs].map(([p, v, c], i) => (
              <div className="tick" key={i}>
                <b>{p}</b><span>{v}</span>
                <span className={`chg ${c.startsWith("−") ? "neg" : "pos"}`}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <section className="stats">
          <div className="container">
            <div className="stats-grid" data-reveal>
              <div className="stat"><div className="num"><Counter to={2007} group={false} /></div><p>Founded in Nairobi, nineteen years of continuous development</p></div>
              <div className="stat"><div className="num"><Counter to={640} suffix="+" /></div><p>Bureaus and branches running IFX every day</p></div>
              <div className="stat"><div className="num"><Counter to={38} suffix="M" /></div><p>Transactions processed and screened each year</p></div>
              <div className="stat"><div className="num"><Counter to={99.98} decimals={2} suffix="%" /></div><p>Platform availability over the last 36 months</p></div>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section className="section" id="platform">
          <div className="container">
            <div className="head" data-reveal>
              <span className="eyebrow">The Platform</span>
              <h2 className="h2">Everything a bureau runs on.<br /><em>One system.</em></h2>
              <p className="sub">IFX replaces spreadsheets, disconnected tills and manual returns with a single source of truth, from the counter to the boardroom to the regulator.</p>
            </div>
            <div className="bento">
              {modules.map((m, i) => {
                const I = m.icon;
                const feature = m.span.includes("feature");
                return (
                  <article key={m.title} className={`card ${m.span}`} data-reveal style={{ ["--d" as string]: `${(i % 3) * 0.06}s` }}>
                    <div className="icon"><I /></div>
                    <h3>{m.title}</h3>
                    <p style={feature ? { maxWidth: 440 } : undefined}>{m.text}</p>
                    <div className="tags">{m.tags.map((t) => <span key={t}>{t}</span>)}</div>
                    {feature && (
                      <svg className="mini-chart" viewBox="0 0 300 160" preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                          <linearGradient id="mc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7FE0C2" stopOpacity=".35" /><stop offset="1" stopColor="#7FE0C2" stopOpacity="0" /></linearGradient>
                        </defs>
                        <path d="M0 120 C30 110 50 130 80 100 S130 70 160 84 S210 40 240 52 S280 20 300 26 V160 H0 Z" fill="url(#mc)" />
                        <path d="M0 120 C30 110 50 130 80 100 S130 70 160 84 S210 40 240 52 S280 20 300 26" fill="none" stroke="#7FE0C2" strokeWidth="2" />
                        <line x1="0" y1="44" x2="300" y2="44" stroke="#7FE0C2" strokeOpacity=".4" strokeDasharray="4 6" />
                      </svg>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="section showcase" id="product">
          <div className="container">
            <div className="head center" data-reveal>
              <span className="eyebrow">Inside IFX</span>
              <h2 className="h2">Designed for the people<br />who <em>move money</em></h2>
              <p className="sub">Tellers, finance teams, risk officers and MLROs each get a workspace built for the job, all on the same live data.</p>
            </div>
            <Showcase />
          </div>
        </section>

        {/* COMPLIANCE */}
        <section className="section" id="compliance">
          <div className="container comp-grid">
            <div data-reveal>
              <span className="eyebrow">Compliance by design</span>
              <h2 className="h2">CBK‑compliant <em>from the first transaction</em></h2>
              <p className="sub">Regulation is part of the core. Every deal is captured, screened and reported in line with the Central Bank of Kenya&apos;s Forex Bureau Guidelines and the Proceeds of Crime and Anti‑Money Laundering Act.</p>
              <div className="checks">
                {[
                  ["CBK Forex Bureau Guidelines", "Customer identification, transaction records and rate disclosure, enforced by the system."],
                  ["Prudential returns, automated", "Daily, weekly and monthly CBK returns are generated from the ledger, validated and ready to submit."],
                  ["FRC & goAML reporting", "STRs and CTRs are prepared in goAML format with full case history for the Financial Reporting Centre."],
                  ["KYC & customer due diligence", "ID verification, risk‑based CDD/EDD, and PEP and sanctions checks before any cash moves."],
                ].map(([h, p]) => (
                  <div className="check" key={h}>
                    <span className="tick-ic"><Check /></span>
                    <div><h4>{h}</h4><p>{p}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="comp-visual" data-reveal style={{ ["--d" as string]: ".1s" }}>
              <div className="comp-card">
                <div className="cc-head">
                  <div><h4>Customer screening</h4><small>Completed in 412 ms</small></div>
                  <span className="chip">Clear to transact</span>
                </div>
                <div className="subject">
                  <span className="avatar">AW</span>
                  <div><b>A. Wambui</b><small>National ID · verified · Returning customer</small></div>
                </div>
                <div className="lists">
                  <div><b>Sanctions</b><span>No match</span></div>
                  <div><b>PEP</b><span>No match</span></div>
                  <div><b>Adverse media</b><span>No match</span></div>
                </div>
                <div className="gauge">
                  <svg className="gauge-ring" viewBox="0 0 80 80">
                    <circle className="track" cx="40" cy="40" r="32" fill="none" strokeWidth="8" />
                    <circle className="val" cx="40" cy="40" r="32" fill="none" strokeWidth="8" strokeLinecap="round" strokeDasharray="201" strokeDashoffset="168" transform="rotate(-90 40 40)" />
                    <text x="40" y="45" textAnchor="middle" fontSize="16" fontWeight="600">16</text>
                  </svg>
                  <div><b>Low customer risk</b><p>Score 16 / 100 · Standard due diligence applies</p></div>
                </div>
              </div>
              <div className="comp-card">
                <div className="cc-head"><div><h4>CBK returns: this week</h4><small>Auto‑generated from ledger</small></div></div>
                <ul className="returns">
                  <li><span>Daily FX transactions return<small>Mon to Fri · 08:30</small></span><span className="chip">Filed</span></li>
                  <li><span>Weekly foreign exchange position<small>Friday · 10:00</small></span><span className="chip">Filed</span></li>
                  <li><span>Monthly prudential return<small>Due 10 Dec</small></span><span className="chip warn">Draft ready</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL */}
        <section className="section global" id="company">
          <div className="container global-grid">
            <div data-reveal>
              <span className="eyebrow">International reach</span>
              <h2 className="h2">Built in Nairobi.<br /><em>Trusted across borders.</em></h2>
              <p className="sub">From airport kiosks to multi‑country exchange groups, IFX runs bureaus across East Africa, Southern Africa, the Gulf and the United Kingdom, with localised compliance for each market.</p>
              <div className="countries">
                {["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan", "Ethiopia", "Zambia", "South Africa", "United Arab Emirates", "United Kingdom"].map((c) => <span key={c}>{c}</span>)}
              </div>
              <div className="g-stats">
                <div><strong>2,300+</strong><span>Teller stations</span></div>
                <div><strong>42</strong><span>Currencies supported</span></div>
                <div><strong>24/7</strong><span>Engineering support</span></div>
              </div>
            </div>
            <div className="map" data-reveal style={{ ["--d" as string]: ".1s" }}>
              <svg viewBox="0 0 540 400" aria-label="Map of IFX deployments">
                <defs>
                  <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7FE0C2" stopOpacity=".2" /><stop offset="1" stopColor="#7FE0C2" /></linearGradient>
                </defs>
                {dots.map(([x, y]) => <circle key={`${x}-${y}`} className="dot" cx={x} cy={y} r="1.3" />)}
                {cities.slice(1).map(([n, x, y]) => {
                  const mx = (hub[1] + x) / 2;
                  const my = (hub[2] + y) / 2 - Math.max(20, Math.hypot(x - hub[1], y - hub[2]) * 0.3);
                  return <path key={n} className="arc" d={`M${hub[1]} ${hub[2]} Q${mx} ${my} ${x} ${y}`} />;
                })}
                {cities.map(([n, x, y, isHub], i) => (
                  <g key={n}>
                    <circle className="pulse" cx={x} cy={y} r={isHub ? 10 : 6} style={{ animationDelay: `${i * 0.27}s` }} />
                    <circle className="hub" cx={x} cy={y} r={isHub ? 5 : 3} />
                    {(isHub || ["Dubai", "London", "Johannesburg", "Addis Ababa", "Kampala", "Lusaka"].includes(n)) && (
                      <text x={x + (n === "Kampala" || n === "Dubai" ? -10 : 9)} y={y + (n === "Dubai" ? -8 : 4)} textAnchor={n === "Kampala" || n === "Dubai" ? "end" : "start"} fontWeight={isHub ? 600 : 400}>{n}{isHub ? " · HQ" : ""}</text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* HISTORY */}
        <section className="section history">
          <div className="container">
            <div className="head" data-reveal>
              <span className="eyebrow">Our story</span>
              <h2 className="h2">Nineteen years of <em>getting it right</em></h2>
              <p className="sub">We&apos;ve built bureau software through every major regulatory change, currency shock and technology shift since 2007.</p>
            </div>
            <div className="timeline">
              {timeline.map((t, i) => (
                <div className="tl" key={t.y} data-reveal style={{ ["--d" as string]: `${(i % 4) * 0.08}s` }}>
                  <span className="yr">{t.y}</span>
                  <h4>{t.t}</h4>
                  <p>{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" id="customers">
          <div className="container">
            <div className="head center" data-reveal>
              <span className="eyebrow">Customers</span>
              <h2 className="h2">Trusted by the bureaus<br />that <em>set the rate</em></h2>
            </div>
            <div className="quotes">
              <figure className="quote big" data-reveal style={{ margin: 0 }}>
                <Quote className="mark" />
                <blockquote>We moved 23 branches onto IFX over a single weekend. Month‑end close went from four days to one afternoon, and our auditors noticed the difference immediately.</blockquote>
                <div className="metric">
                  <div><strong>4d → 4h</strong><span>Month‑end close</span></div>
                  <div><strong>23</strong><span>Branches migrated</span></div>
                  <div><strong>0</strong><span>Audit exceptions</span></div>
                </div>
                <figcaption className="who">
                  <span className="avatar alt">WK</span>
                  <div><b>Wanjiru Kamau</b><small>Chief Financial Officer · Forex bureau group, Nairobi</small></div>
                </figcaption>
              </figure>
              {quotes.map((q, i) => (
                <figure className="quote" key={q.n} data-reveal style={{ margin: 0, ["--d" as string]: `${(i % 3) * 0.07}s` }}>
                  <div className="stars">{[0, 1, 2, 3, 4].map((s) => <Star key={s} />)}</div>
                  <blockquote>&ldquo;{q.q}&rdquo;</blockquote>
                  <figcaption className="who">
                    <span className="avatar">{q.i}</span>
                    <div><b>{q.n}</b><small>{q.r}</small></div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="head" data-reveal>
              <span className="eyebrow">Enterprise grade</span>
              <h2 className="h2">Security that <em>passes audit</em></h2>
              <p className="sub">IFX protects your customers&apos; data and your licence with the same controls banks expect.</p>
            </div>
            <div className="sec-grid" data-reveal>
              {security.map(({ icon: I, t, d }) => (
                <div className="sec" key={t}><I /><h4>{t}</h4><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact">
          <div className="container">
            <div className="cta-box" data-reveal>
              <svg className="cta-rings" viewBox="0 0 200 200" aria-hidden="true">
                {[30, 50, 70, 90].map((r) => <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#fff" strokeWidth="1" />)}
              </svg>
              <div>
                <h2>See IFX running your bureau.</h2>
                <p>Book a 30‑minute walkthrough tailored to your branches, currencies and compliance needs. Most bureaus go live in under three weeks.</p>
              </div>
              <div className="btns">
                <a className="btn btn-white" href="mailto:sales@ifx.co.ke?subject=IFX%20demo%20request">Book a demo <Arrow /></a>
                <a className="btn btn-ghost" href="tel:+254700000000">Talk to sales</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-about">
              <Logo tagline />
              <p>Enterprise software for foreign exchange bureaus, covering teller, ledger, risk, AML and regulatory reporting. Since 2007.</p>
              <div className="foot-addr">Head Office · Nairobi, Kenya<br />sales@ifx.co.ke · +254 700 000 000</div>
            </div>
            <div><h5>Platform</h5><ul><li><a href="#platform">Teller & Tills</a></li><li><a href="#platform">Accounting</a></li><li><a href="#platform">Rateboards</a></li><li><a href="#platform">Analytics</a></li></ul></div>
            <div><h5>Compliance</h5><ul><li><a href="#compliance">CBK Returns</a></li><li><a href="#compliance">AML / CFT</a></li><li><a href="#compliance">KYC & CDD</a></li><li><a href="#platform">Risk Assessment</a></li></ul></div>
            <div><h5>Company</h5><ul><li><a href="#company">About IFX</a></li><li><a href="#customers">Customers</a></li><li><a href="#company">Careers</a></li><li><a href="brand/">Brand</a></li></ul></div>
            <div><h5>Support</h5><ul><li><a href="#contact">Client login</a></li><li><a href="#contact">Help centre</a></li><li><a href="#contact">System status</a></li><li><a href="#contact">Contact</a></li></ul></div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} IFX Systems. All rights reserved.</span>
            <div className="badges"><span>Kenya Data Protection Act</span><span>CBK Guidelines</span><span>POCAMLA</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
