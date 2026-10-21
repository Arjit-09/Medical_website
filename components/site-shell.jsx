'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Shop Catalogue' },
  { href: '/contact', label: 'Contact & RFQ' }
];

function Brand({ footer = false }) {
  return (
    <Link
      className={`brand${footer ? ' footer-brand' : ''}`}
      href="/"
      aria-label="Care and Cure Pharmaceuticals home"
      id={footer ? 'footer-brand' : 'header-brand'}
    >
      <span className="brand-mark" aria-hidden="true"><span /><span /></span>
      <span className="brand-copy">
        <b>Care<span>&amp;</span>Cure</b>
        <small>PHARMACEUTICALS</small>
      </span>
    </Link>
  );
}

function CatalogueIcon() {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" focusable="false">
      <path d="M3 5h3l2.1 12.4a2 2 0 0 0 2 1.6h10.4a2 2 0 0 0 1.9-1.5L25 9H7" />
      <circle cx="11" cy="23" r="1.6" />
      <circle cx="20" cy="23" r="1.6" />
    </svg>
  );
}

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      {/* Backdrop */}
      <div className="site-backdrop" aria-hidden="true">
        <div className="backdrop-shade" />
        <div className="backdrop-grain" />
      </div>

      {/* Announcement Bar */}
      <div className="announcement" role="status" aria-label="Site announcement">
        <span className="announcement-dot" aria-hidden="true" />
        <span>New catalogue listings available &mdash; Oncology &amp; Anti-Viral medicines</span>
        <Link href="/products" id="announcement-link">
          View now &rarr;
        </Link>
      </div>

      {/* Header */}
      <header
        className={`header${scrolled ? ' header-scrolled' : ''}`}
      >
        <Brand />

        <button
          className={`menu-toggle${menuOpen ? ' menu-open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`nav${menuOpen ? ' nav-open' : ''}`}
          id="main-nav"
          aria-label="Main navigation"
        >
          {navItems.map((item, i) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href.split('#')[0]);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={active ? 'active' : ''}
                id={`nav-item-${i}`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile-only contact & info panel */}
          <div className="nav-mobile-footer">
            <div className="nav-mobile-phone">
              <span className="mobile-phone-icon">📞</span>
              <div>
                <small>Direct Pharmacy Desk</small>
                <a href="tel:+12272134021">+1 (227) 213-4021</a>
              </div>
            </div>
            <Link
              className="button button-primary nav-mobile-cta"
              href="/contact"
              onClick={() => setMenuOpen(false)}
              id="nav-mobile-cta"
            >
              Request Trade Quotation &rarr;
            </Link>
          </div>
        </nav>

        {/* Mobile menu backdrop blur */}
        {menuOpen && (
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <div className="header-actions">
          <Link
            className="header-catalogue"
            href="/products"
            aria-label="Browse product catalogue"
            id="header-catalogue-btn"
          >
            <span className="catalogue-icon"><CatalogueIcon /></span>
            <span className="catalogue-count">62+</span>
          </Link>

          <Link className="header-cta" href="/contact" id="header-cta">
            Get in Touch
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main page-width">
          <div>
            <Brand footer />
            <p className="footer-description">
              Connecting healthcare partners, clinics and hospitals with a dependable range of
              certified pharmaceutical products from New Delhi, India. Trade enquiries welcome.
            </p>
            <div className="footer-cert-badges">
              <span className="badge-pill">🛡️ WHO-GMP Sourced</span>
              <span className="badge-pill">❄️ 2°C - 8°C Cold Chain</span>
              <span className="badge-pill">📜 COA Verified</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <div className="footer-links">
              <Link href="/" id="footer-home">Home</Link>
              <Link href="/about" id="footer-about">About Us</Link>
              <Link href="/services" id="footer-services">Services &amp; Logistics</Link>
              <Link href="/products" id="footer-products">Shop Catalogue</Link>
              <Link href="/contact" id="footer-contact">Contact &amp; RFQ</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <div className="footer-links">
              <Link href="/products/category/antibiotics" id="footer-cat-antibiotics">Antibiotics</Link>
              <Link href="/products/category/ed-medication" id="footer-cat-ed">ED Medication</Link>
              <Link href="/products/category/pain-relief" id="footer-cat-pain">Pain Relief</Link>
              <Link href="/products/category/body-building-wellness" id="footer-cat-wellness">Body Building &amp; Wellness</Link>
              <Link href="/products/category/smart-pills" id="footer-cat-smart">Smart Pills</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4>Pharmacy Desk</h4>
            <div className="footer-links">
              <span style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                📍 Lalita Park, Lakshmi Nagar, New Delhi, India
              </span>
              <a href="tel:+12272134021" id="footer-phone-us">📞 +1 (227) 213-4021 (Int’l)</a>
              <a href="tel:+917949301717" id="footer-phone-in">📞 +91 79493 01717 (Delhi)</a>
              <a href="https://wa.me/12272134021" target="_blank" rel="noopener noreferrer" id="footer-wa">💬 WhatsApp Support</a>
              <a href="mailto:support@careandcurepharma.com" id="footer-email">✉️ support@careandcurepharma.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom page-width">
          <span>© {new Date().getFullYear()} Care And Cure Pharmaceuticals. All rights reserved. Registered Indian MSME Enterprise.</span>
          <span>Trade enquiries only · Always follow a qualified healthcare professional&apos;s advice.</span>
        </div>
      </footer>
    </>
  );
}
