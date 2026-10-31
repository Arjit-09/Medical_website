"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CONTACT } from "../data/site";
import { useCart } from "./cart-context";

/* ── Brand Logo ── */
export function Brand({ className = "" }) {
  return (
    <Link href="/" className={`brand ${className}`} aria-label="Medzwall home">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true" className="brand-icon-svg">
        <rect width="40" height="40" rx="9" fill="#22c55e" />
        <path d="M10 27V13l10 10 10-10v14" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8v7m-3.5-3.5h7" stroke="#bbf7d0" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="brand-text">medzwall<span className="brand-dot">.</span></span>
    </Link>
  );
}

/* ── Cart Sidebar ── */
function CartSidebar() {
  const { items, cartOpen, setCartOpen, updateQty, removeItem, subtotal } = useCart();
  const router = useRouter();

  if (!cartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setCartOpen(false)} />
      <aside className="cart-sidebar" aria-label="Your Cart">
        <div className="cart-sidebar-header">
          <h2>Your Cart ({items.length})</h2>
          <button className="cart-close-btn" onClick={() => setCartOpen(false)} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span>🛒</span>
            <p>Your cart is empty</p>
            <Link href="/products" className="button" onClick={() => setCartOpen(false)}>Browse Products</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.key}>
                  <div className="cart-item-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} width={60} height={60} style={{ objectFit: "contain" }} onError={(e) => { e.target.style.display = 'none'; }} />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    {item.variant && <p className="cart-item-variant">{item.variant}</p>}
                    <p className="cart-item-price">${item.priceUSD.toFixed(2)}</p>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQty(item.key, -1)} aria-label="Decrease">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQty(item.key, 1)} aria-label="Increase">+</button>
                    </div>
                  </div>
                  <button className="cart-item-remove" onClick={() => removeItem(item.key)} aria-label="Remove item">✕</button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="cart-subtotal">
                <span>Subtotal:</span>
                <strong>${subtotal.toFixed(2)} USD</strong>
              </div>
              <button
                className="button cart-checkout-btn"
                onClick={() => {
                  setCartOpen(false);
                  router.push("/checkout");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

/* ── Icons ── */
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
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

function TrackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 4v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

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

/* ── Main Shell ── */
export default function SiteShell({ children }) {
  const path = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems, setCartOpen } = useCart();

  const navLinks = [
    ["/", "Home"],
    ["/about", "About Us"],
    ["/products", "All Product"],
    ["/contact", "Contact"],
  ];

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }

  return (
    <>
      {/* Top Promo Bar */}
      <div className="promo-bar" role="banner">
        <span>🎁 10% OFF your first order · Use code <strong>MED10</strong></span>
        <a href={`tel:${CONTACT.telephone}`} className="promo-support-link">
          🎧 Help &amp; Support
        </a>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="page-width header-inner">
          <Brand />

          {/* Search Bar */}
          <form className="header-search-form" onSubmit={handleSearch} role="search">
            <input
              id="header-search"
              className="header-search-input"
              type="search"
              placeholder="Search products, generic salts, and wellness essentials…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            <button type="submit" className="header-search-btn" aria-label="Search">
              <SearchIcon />
            </button>
          </form>

          {/* Header Right Actions */}
          <div className="header-actions">
            <a href={`tel:${CONTACT.telephone}`} className="header-action-link" aria-label={`Call ${CONTACT.phone}`}>
              <PhoneIcon /> <span className="header-action-label">Account</span>
            </a>
            <button
              className="header-cart-btn"
              onClick={() => setCartOpen(true)}
              aria-label={`Open cart, ${totalItems} items`}
            >
              <CartIcon />
              <span>Cart</span>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>
            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="page-width desktop-nav-row">
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map(([href, label]) => {
              const isActive = href === "/" ? path === "/" : href === "/products" ? path.startsWith("/products") : path === href;
              return (
                <Link key={href} href={href} aria-current={isActive ? "page" : undefined}>
                  {label}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="track-order-btn">
            <TrackIcon /> Track Order
          </Link>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav id="mobile-navigation" className="mobile-nav-drawer" aria-label="Mobile Navigation">
            {navLinks.map(([href, label]) => (
              <Link key={href} href={href} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <div className="mobile-nav-divider" />
            <a href={`tel:${CONTACT.telephone}`} className="button mobile-nav-call-btn" onClick={() => setMobileMenuOpen(false)}>
              <PhoneIcon /> Call {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-outline mobile-nav-whatsapp-btn" onClick={() => setMobileMenuOpen(false)}>
              💬 Chat on WhatsApp
            </a>
          </nav>
        )}
      </header>

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Main Content */}
      <main id="main">{children}</main>

      {/* WhatsApp Floating Button */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>

      {/* Trust Strip */}
      <div className="trust-strip" role="complementary" aria-label="Why choose us">
        <div className="page-width trust-strip-inner">
          <div className="trust-item"><ShieldIcon /><span>100% Genuine Products</span></div>
          <div className="trust-item"><TruckIcon /><span>Fast &amp; Discreet Shipping</span></div>
          <div className="trust-item"><StarIcon /><span>Trusted Online Pharmacy</span></div>
          <div className="trust-item"><LockIcon /><span>Secure &amp; Confidential</span></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div className="page-width footer-grid">
          <div>
            <Brand className="footer-brand" />
            <p className="footer-tagline">Your trusted online pharmacy. Authentic medicines delivered fast and discreetly to your door.</p>
            <div style={{ marginTop: "12px" }}>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="button footer-whatsapp-btn" aria-label="Chat on WhatsApp">
                💬 WhatsApp Us
              </a>
            </div>
          </div>
          <div>
            <p className="footer-heading">Quick Links</p>
            <Link href="/">Home</Link>
            <Link href="/products">All Products</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact">Buy a Product</Link>
          </div>
          <div>
            <p className="footer-heading">Contact Pharmacy</p>
            <div className="footer-contact-item"><strong>Support Hours</strong>8:00 AM – 9:00 PM (Mon–Sat)</div>
            <div className="footer-contact-item"><strong>Direct Phone</strong><a href={`tel:${CONTACT.telephone}`}>{CONTACT.phone}</a></div>
            <div className="footer-contact-item"><strong>Email</strong><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
            <div className="footer-contact-item"><strong>Pharmacy Address</strong>{CONTACT.address}</div>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {new Date().getFullYear()} Medzwall. All rights reserved.</span>
          <span>Prescription products require appropriate clinical verification.</span>
        </div>
      </footer>
    </>
  );
}
