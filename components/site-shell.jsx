"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTACT } from "../data/site";
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Medzwell home">
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="11" fill="#16675c" />
        <path
          d="M10 27V13l10 10 10-10v14"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8v7m-3.5-3.5h7"
          stroke="#b9dfc5"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span>
        medzwell<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
export default function SiteShell({ children }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="page-width header-inner">
          <Brand />
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
          <nav
            id="navigation"
            className={open ? "nav open" : "nav"}
            aria-label="Main navigation"
          >
            {[
              ["/", "Home"],
              ["/products", "Products"],
              ["/contact?type=missing", "Request a product"],
              ["/contact", "Contact us"],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                aria-current={path === href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <a className="header-phone" href={`tel:${CONTACT.telephone}`}>
            {CONTACT.phone}
          </a>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="page-width footer-grid">
          <div>
            <Brand />
            <p>Products. Clear answers. Personal support.</p>
          </div>
          <div>
            <strong>Get in touch</strong>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.telephone}`}>{CONTACT.phone}</a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
          <div>
            <strong>Find us</strong>
            <p>{CONTACT.address}</p>
            <Link href="/contact">Send an enquiry →</Link>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>
            © {new Date().getFullYear()} Medzwell. All rights reserved.
          </span>
          <span>Prescription products require appropriate verification.</span>
        </div>
      </footer>
    </>
  );
}
