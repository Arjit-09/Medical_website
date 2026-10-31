import Link from "next/link";
import { CONTACT } from "../../data/site";
import { PRODUCTS } from "../../data/products";

export const metadata = {
  title: "About Us | Medzwall Pharmacy",
  description: "Learn about Medzwall — your trusted online pharmacy dedicated to certified pharmaceutical authenticity, patient privacy, and discreet delivery.",
};

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="page-width about-hero-inner">
          <span className="eyebrow">— ABOUT MEDZWALL</span>
          <h1>Committed to Safe, Genuine &amp; Discreet Healthcare</h1>
          <p className="about-hero-sub">
            We provide patients nationwide with verified laboratory-tested prescription formulations,
            unmatched privacy, and direct pharmacist support every step of the way.
          </p>
          <div className="about-hero-actions">
            <Link href="/products" className="button">
              Browse All Products ({PRODUCTS.length}) →
            </Link>
            <a href={`tel:${CONTACT.telephone}`} className="button button-outline">
              📞 Speak with Pharmacy: {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Key Highlights / Stats Strip ── */}
      <section className="about-stats-section">
        <div className="page-width about-stats-grid">
          <div className="about-stat-item">
            <span className="about-stat-num">100%</span>
            <span className="about-stat-label">Certified Authentic Medicines</span>
          </div>
          <div className="about-stat-item">
            <span className="about-stat-num">{PRODUCTS.length}+</span>
            <span className="about-stat-label">Lab-Tested Formulations</span>
          </div>
          <div className="about-stat-item">
            <span className="about-stat-num">3–5</span>
            <span className="about-stat-label">Business Days Express Delivery</span>
          </div>
          <div className="about-stat-item">
            <span className="about-stat-num">10k+</span>
            <span className="about-stat-label">Patients Served Nationwide</span>
          </div>
        </div>
      </section>

      {/* ── Mission & Pillars ── */}
      <section className="page-width about-pillars-section">
        <div className="section-header-center">
          <span className="eyebrow">OUR CORE PILLARS</span>
          <h2>The Standards Behind Every Delivery</h2>
          <p className="section-subtitle">
            Medzwall was founded on the belief that acquiring essential healthcare should be straightforward,
            confidential, and held to the highest medical safety standards.
          </p>
        </div>

        <div className="about-pillars-grid">
          <div className="about-pillar-card">
            <div className="about-pillar-icon">🔬</div>
            <h3>Certified Laboratory Sourcing</h3>
            <p>
              Every medication in our catalogue is sourced exclusively from licensed, WHO-GMP certified
              manufacturers. Each batch is verified for chemical purity, correct active salts, and therapeutic efficacy.
            </p>
          </div>

          <div className="about-pillar-card">
            <div className="about-pillar-icon">📦</div>
            <h3>100% Discreet Packaging</h3>
            <p>
              Your personal health is completely private. All orders are packed in plain, unbranded boxes
              with zero external medical labels or indicators of the contents inside.
            </p>
          </div>

          <div className="about-pillar-card">
            <div className="about-pillar-icon">🛡️</div>
            <h3>Licensed Pharmacist Oversight</h3>
            <p>
              Our dedicated pharmacy team reviews all orders and is directly reachable via telephone and
              WhatsApp to answer questions about dosage, directions, and interactions.
            </p>
          </div>

          <div className="about-pillar-card">
            <div className="about-pillar-icon">⚡</div>
            <h3>Tracked Priority Dispatch</h3>
            <p>
              We prioritize fast fulfillment with USPS express priority shipping. You receive real-time tracking
              numbers to follow your package from dispatch to your door.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works Strip ── */}
      <section className="about-process-section">
        <div className="page-width">
          <div className="section-header-center">
            <span className="eyebrow">SIMPLE &amp; SECURE</span>
            <h2>How Ordering Works</h2>
            <p className="section-subtitle">A seamless 3-step ordering process designed for your convenience.</p>
          </div>

          <div className="about-steps-grid">
            <div className="about-step-card">
              <span className="about-step-number">01</span>
              <h3>Select Your Medication</h3>
              <p>Explore our catalogue of over {PRODUCTS.length} medications. Select your desired pack size and quantity.</p>
            </div>
            <div className="about-step-card">
              <span className="about-step-number">02</span>
              <h3>Secure Checkout</h3>
              <p>Provide your shipping destination with 256-bit SSL encryption. Zero hidden fees or surprises.</p>
            </div>
            <div className="about-step-card">
              <span className="about-step-number">03</span>
              <h3>Discreet Delivery</h3>
              <p>Your order is checked, packed in plain packaging, and shipped with express end-to-end tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Contact & Facility Card ── */}
      <section className="page-width about-contact-cta">
        <div className="about-contact-card">
          <div className="about-contact-info">
            <span className="eyebrow">DIRECT PHARMACY ACCESS</span>
            <h2>Need Personal Guidance on Your Order?</h2>
            <p>
              Our pharmacy support specialists are available Monday through Saturday, from 8:00 AM to 9:00 PM EST.
            </p>
            <div className="about-contact-details">
              <div><strong>Direct Telephone:</strong> <a href={`tel:${CONTACT.telephone}`}>{CONTACT.phone}</a></div>
              <div><strong>Email Support:</strong> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
              <div><strong>Operating Facility:</strong> {CONTACT.address}</div>
            </div>
          </div>
          <div className="about-contact-btns">
            <a href={`tel:${CONTACT.telephone}`} className="button">
              📞 Call: {CONTACT.phone}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="button button-outline">
              💬 WhatsApp Support
            </a>
            <Link href="/contact" className="button button-outline">
              Buy a Product Form →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
