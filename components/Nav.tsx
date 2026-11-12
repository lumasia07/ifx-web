"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Arrow } from "./icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#product", label: "Product" },
  { href: "#compliance", label: "Compliance" },
  { href: "#customers", label: "Customers" },
  { href: "#company", label: "Company" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="signin" href="#contact">Client login</a>
          <ThemeToggle />
          <a className="btn btn-primary btn-sm" href="#contact">Book a demo <Arrow /></a>
          <button
            className={`burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
          <li><a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>Book a demo</a></li>
        </ul>
      </div>
    </header>
  );
}
