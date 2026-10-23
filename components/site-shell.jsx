'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Shop Catalogue' },
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
    let observer;
    const timer = setTimeout(() => {
      const nodes = document.querySelectorAll('[data-reveal]');
      if (!('IntersectionObserver' in window)) {
        nodes.forEach(node => node.classList.add('is-visible'));
        return;
      }
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      nodes.forEach(node => observer.observe(node));
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
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
        <div className="header-inner page-width">
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
                  <a href="tel:+18046341990">+1 8046341990</a>
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
            <a href="tel:+18046341990" className="header-phone-link" id="header-phone" aria-label="Call direct pharmacy desk">
              <span className="header-phone-icon">📞</span>
              <span className="header-phone-number">+1 8046341990</span>
            </a>
            <Link className="header-cta" href="/contact" id="header-cta">
              Get in Touch
            </Link>
          </div>
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
              Connecting healthcare partners, clinics and patients with a dependable range of
              certified pharmaceutical products. Fast, secure US shipping and nationwide support. Trade enquiries welcome.
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
              <Link href="/contact" id="footer-contact">Get in Touch</Link>
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
              <span style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.5 }}>
                📍 5200 NW 4th Ave<br />Pompano Beach, FL 33064
              </span>
              <a href="tel:+18046341990" id="footer-phone-us">📞 +1 8046341990</a>
              <a href="https://wa.me/18046341990" target="_blank" rel="noopener noreferrer" id="footer-wa">💬 WhatsApp Support</a>
              <a href="mailto:Usonlinemedshop247@gmail.com" id="footer-email">✉️ Usonlinemedshop247@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom page-width">
          <span>© {new Date().getFullYear()} Care And Cure Pharmaceuticals · 5200 NW 4th Ave, Pompano Beach, FL 33064. All rights reserved.</span>
          <span>Trade &amp; Healthcare Inquiries · Always follow a qualified physician&apos;s guidance.</span>
        </div>
      </footer>
    </>
  );
}
