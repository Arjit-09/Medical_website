"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CONTACT } from "../data/site";

/* ── Medzwall Official Brand Logo (Royal Sapphire & Crisp Navy) ── */
export function Brand({ className = "" }) {
  return (
    <Link href="/" className={`brand ${className}`} aria-label="Medzwall home">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="brand-icon-svg"
      >
        <rect width="40" height="40" rx="9" fill="#2563eb" />
        <path
          d="M10 27V13l10 10 10-10v14"
          stroke="white"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8v7m-3.5-3.5h7"
          stroke="#93c5fd"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-text">
        medzwall<span className="brand-dot">.</span>
      </span>
    </Link>
  );
}

/* ── Trust icons ─────────────────────────── */
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 4v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.34 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.72a16 16 0 0 0 6.29 6.29l1.82-1.84a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ── Floating Customer Support Widget ── */
function CustomerSupportWidget() {
  const [minimized, setMinimized] = useState(false);

  return (
    <aside className="support-widget" aria-label="Customer Support">
      {!minimized ? (
        <div className="support-card">
          <button
            className="support-close-btn"
            onClick={() => setMinimized(true)}
            aria-label="Close support popup"
            title="Minimize"
          >
            ✕
          </button>
          <div className="support-header">
            <div className="support-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <p className="support-name">Customer Care</p>
              <p className="support-role">PHARMACY SPECIALIST</p>
            </div>
          </div>
          <p className="support-text">Need help with your order? Call our team.</p>
          <a
            href={`tel:${CONTACT.telephone}`}
            className="support-call-btn"
            aria-label={`Call customer care at ${CONTACT.phone}`}
          >
            <PhoneIcon />
            {CONTACT.phone}
          </a>
        </div>
      ) : (
        <a
          href={`tel:${CONTACT.telephone}`}
          className="support-trigger-btn"
          aria-label="Call customer support directly"
          title={`Call us directly at ${CONTACT.phone}`}
        >
          <PhoneIcon />
        </a>
      )}
    </aside>
  );
}

export default function SiteShell({ children }) {
  const path = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simple, basic navigation links
  const navLinks = [
    ["/", "Home"],
    ["/products", "All Products"],
    ["/contact", "Contact Us"],
  ];

  return (
    <>
      {/* Top Announcement Bar (Matched Royal Cobalt `#1e40af`) */}
      <div className="announcement-bar" role="banner">
        <span>Questions? Call Our Pharmacy Team:</span>
        <a href={`tel:${CONTACT.telephone}`}>{CONTACT.phone} →</a>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="page-width header-inner">
          <Brand />

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(([href, label]) => {
              const isActive =
                href === "/"
                  ? path === "/"
                  : href === "/products"
                  ? path.startsWith("/products")
                  : path === "/contact";

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Clean, Simple Header Actions */}
          <div className="header-actions">
            <Link
              href="/products"
              className="header-search-link"
              aria-label="Search all products"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span>Search</span>
            </Link>

            {/* Desktop Direct Call Button */}
            <a
              className="header-phone-btn"
              href={`tel:${CONTACT.telephone}`}
              aria-label={`Call pharmacy team at ${CONTACT.phone}`}
            >
              <PhoneIcon />
              <span>{CONTACT.phone}</span>
            </a>

            {/* Mobile Call Icon (direct dial on mobile tap) */}
            <a
              className="mobile-header-call-btn"
              href={`tel:${CONTACT.telephone}`}
              aria-label={`Call us directly at ${CONTACT.phone}`}
              title="Call Us"
            >
              <PhoneIcon />
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="mobile-nav-drawer" aria-label="Mobile Navigation">
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="mobile-nav-divider" />
            <a
              href={`tel:${CONTACT.telephone}`}
              className="button mobile-nav-call-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneIcon /> Call {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline mobile-nav-whatsapp-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              💬 Chat on WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main id="main">{children}</main>

      {/* Floating Support Widget */}
      <CustomerSupportWidget />

      {/* Newsletter / Discount Strip */}
      <section className="newsletter-section" aria-labelledby="newsletter-heading">
        <div className="page-width" style={{ maxWidth: "600px" }}>
          <h2 id="newsletter-heading">Get 33% Off Your First Order</h2>
          <p>Sign up to save 33% and receive exclusive pharmacy offers.</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your 33% discount code has been sent.");
            }}
            aria-label="Newsletter signup"
          >
            <input
              id="newsletter-email"
              className="newsletter-input"
              type="email"
              placeholder="Enter your email"
              required
              aria-label="Your email address"
            />
            <button type="submit" className="newsletter-submit" aria-label="Subscribe">
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      {/* Trust Strip (Deep Midnight Navy `#0b192c`) */}
      <div className="trust-strip" role="complementary" aria-label="Why choose us">
        <div className="page-width trust-strip-inner">
          <div className="trust-item">
            <ShieldIcon />
            <span>100% Genuine Products</span>
          </div>
          <div className="trust-item">
            <TruckIcon />
            <span>Fast & Discreet Shipping</span>
          </div>
          <div className="trust-item">
            <StarIcon />
            <span>Trusted Online Pharmacy</span>
          </div>
          <div className="trust-item">
            <LockIcon />
            <span>Secure & Confidential</span>
          </div>
        </div>
      </div>

      {/* Cohesive Footer (Matching Deep Midnight Navy `#0b192c`) */}
      <footer className="footer" role="contentinfo">
        <div className="page-width footer-grid">
          {/* Brand & WhatsApp */}
          <div>
            <Brand className="footer-brand" />
            <p className="footer-tagline">
              Your trusted online pharmacy. Authentic medicines delivered fast
              and discreetly to your door.
            </p>
            <div style={{ marginTop: "12px" }}>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="button footer-whatsapp-btn"
                aria-label="Chat on WhatsApp"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="footer-heading">Quick Links</p>
            <Link href="/">Home</Link>
            <Link href="/products">All Products</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact?type=missing">Request Medicine</Link>
          </div>

          {/* Contact Details */}
          <div>
            <p className="footer-heading">Contact Pharmacy</p>
            <div className="footer-contact-item">
              <strong>Support Hours</strong>
              8:00 AM – 9:00 PM (Mon–Sat)
            </div>
            <div className="footer-contact-item">
              <strong>Direct Phone</strong>
              <a href={`tel:${CONTACT.telephone}`}>{CONTACT.phone}</a>
            </div>
            <div className="footer-contact-item">
              <strong>Email</strong>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div className="footer-contact-item">
              <strong>Pharmacy Address</strong>
              {CONTACT.address}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Medzwall. All rights reserved.</span>
          <span>Prescription products require appropriate clinical verification.</span>
        </div>
      </footer>
    </>
  );
}
