import Link from "next/link";
import HeroSection from "../components/hero-slider";
import ProductCatalog from "../components/product-catalog";
import { CATALOG_CATEGORIES, categorySlug, CATEGORY_ICONS, PRODUCTS } from "../data/products";

export default function HomePage() {
  return (
    <>
      {/* ── Clean, Bright Medical Hero Section ── */}
      <HeroSection />

      {/* ── Category Quick Navigation Bar ── */}
      <section className="category-strip-section" aria-label="Browse by Treatment Category">
        <div className="page-width">
          <div className="category-strip-header">
            <span className="eyebrow">EXPLORE TREATMENTS</span>
            <h2>Shop by Category</h2>
          </div>
          <div className="category-pills-grid">
            {CATALOG_CATEGORIES.map((category) => {
              const icon = CATEGORY_ICONS[category] || "💊";
              const slug = categorySlug(category);
              return (
                <Link
                  key={category}
                  href={`/products/category/${slug}`}
                  className="category-pill-card"
                >
                  <span className="category-pill-icon">{icon}</span>
                  <span className="category-pill-name">{category}</span>
                  <span className="category-pill-arrow">→</span>
                </Link>
              );
            })}
            <Link href="/products" className="category-pill-card view-all-card">
              <span className="category-pill-icon">🧪</span>
              <span className="category-pill-name">All Products ({PRODUCTS.length})</span>
              <span className="category-pill-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us / Trust Badges ── */}
      <section className="why-us-section" aria-label="Why Choose Medzwell">
        <div className="page-width">
          <div className="section-header-center">
            <p className="eyebrow">OUR COMMITMENT</p>
            <h2>Safe, Certified & Discreet Healthcare</h2>
            <p className="section-subtitle">
              We provide genuine medications with unmatched convenience, safety, and personal pharmacist care.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>100% Genuine Medicines</h3>
              <p>Direct sourcing from certified manufacturers, ensuring maximum purity and therapeutic efficacy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Discreet & Tracked Shipping</h3>
              <p>Plain unbranded packaging with express dispatch and end-to-end tracking for your privacy.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>Dedicated Pharmacy Support</h3>
              <p>Experienced specialists available by phone and WhatsApp from 8:00 AM to 9:00 PM Mon–Sat.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Confidential & Secure</h3>
              <p>Strict patient confidentiality protocols and secure order processing every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Missing Medication Request Strip ── */}
      <section className="page-width missing-strip-wrapper">
        <div className="missing-strip">
          <div>
            <p className="eyebrow">CAN’T FIND YOUR PRODUCT?</p>
            <h2>Looking for a Specific Medication?</h2>
            <p>Tell us the medicine name, strength, and quantity. Our pharmacy team will check stock and source it for you.</p>
          </div>
          <Link className="button" href="/contact?type=missing">
            Request a Product <span>→</span>
          </Link>
        </div>
      </section>

      {/* ── Single Product Section: Browse All Products (No Duplicate) ── */}
      <section id="catalogue" className="page-width catalog-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">OUR COMPLETE CATALOGUE</p>
            <h2>Browse All Products</h2>
          </div>
          <p className="catalog-subtitle">Search or filter across our authentic inventory ({PRODUCTS.length} products).</p>
        </div>
        <ProductCatalog />
      </section>
    </>
  );
}
