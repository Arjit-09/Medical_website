import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '../../components/page-banner';
import ContactForm from '../../components/contact-form';

export const metadata = {
  title: 'Contact Us & Trade RFQ | Care & Cure Pharmaceuticals',
  description: 'Connect with Care & Cure Pharmaceuticals New Delhi support desk. Request wholesale quotes, verify medicine availability, and get cold-chain shipping schedules.'
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent('First Floor, 1/56C, Lalita Park, Lakshmi Nagar, East Delhi, New Delhi 110092');

  return (
    <>
      <PageBanner
        eyebrow="Direct Procurement &amp; Support Desk"
        title="Contact Care &amp; Cure Pharmaceuticals"
        description="Connect with our licensed pharmacy distribution desk for current trade pricing, bulk institution orders, cold-chain schedules, and verified product availability."
        videoSrc="/videos/contact-ambient.mp4"
        bgImage="/images/bg-contact-hq.jpg"
      />

      {/* Main Contact Section with Background Ambient Video */}
      <section className="section contact-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Video Background - Crisply Visible */}
        <div className="section-video-bg" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/bg-contact-hq.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.32 }}
          >
            <source src="/videos/contact-ambient.mp4" type="video/mp4" />
          </video>
          <div className="section-video-overlay" />
        </div>

        {/* Floating Ambient Glowing Orbs */}
        <div className="section-orb section-orb-1" aria-hidden="true" />
        <div className="section-orb section-orb-2" aria-hidden="true" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-main-grid">
            {/* Left Column: Direct Access Channels */}
            <div className="contact-info-col">
              <div className="contact-info-header">
                <span className="section-kicker">Instant Access Channels</span>
                <h2>Talk directly with our pharmaceutical team.</h2>
                <p>
                  We respond promptly to commercial orders, hospital procurement queries, and active pharmaceutical ingredient (API) specifications.
                </p>
              </div>

              {/* Live Status Indicator Card */}
              <div className="status-indicator-card">
                <div className="status-radar-wrap">
                  <span className="radar-circle" />
                  <span className="radar-dot" />
                </div>
                <div>
                  <strong>New Delhi Central Pharmacy Desk Is Active</strong>
                  <span>Operating Hours: 8:00 AM – 9:00 PM IST (Mon – Sat) · Expedited Weekend Response</span>
                </div>
              </div>

              {/* Channel Cards Grid */}
              <div className="contact-cards-stack">
                {/* Phone Lines Card */}
                <article className="contact-channel-card">
                  <div className="channel-card-head">
                    <span className="channel-icon">📞</span>
                    <div>
                      <small>Direct Pharmacy Call Lines</small>
                      <h4>Instant Phone Consultation</h4>
                    </div>
                  </div>
                  <div className="phone-lines-list">
                    <div className="phone-item">
                      <div>
                        <a href="tel:+12272134021" className="phone-link primary-phone">
                          +1 (227) 213-4021
                        </a>
                        <span className="phone-tag">🇺🇸 US &amp; International Desk</span>
                      </div>
                      <a href="tel:+12272134021" className="button button-sm button-outline">Call Now</a>
                    </div>

                    <div className="phone-item">
                      <div>
                        <a href="tel:+917949301717" className="phone-link">
                          +91 79493 01717
                        </a>
                        <span className="phone-tag">🇮🇳 New Delhi Depot</span>
                      </div>
                      <a href="tel:+917949301717" className="button button-sm button-outline">Call Now</a>
                    </div>

                    <div className="phone-item">
                      <div>
                        <a href="tel:+13373372084" className="phone-link">
                          +1 337-337-2084
                        </a>
                        <span className="phone-tag">🌐 Global Toll Support</span>
                      </div>
                      <a href="tel:+13373372084" className="button button-sm button-outline">Call Now</a>
                    </div>
                  </div>
                  <p className="channel-note">
                    Immediate assistance with stock verification, batch release dates, and order confirmations.
                  </p>
                </article>

                {/* WhatsApp Chat Card */}
                <article className="contact-channel-card whatsapp-channel-card">
                  <div className="channel-card-head">
                    <span className="channel-icon wa-icon">💬</span>
                    <div>
                      <small>Fast Response Messaging</small>
                      <h4>Instant WhatsApp Support</h4>
                    </div>
                  </div>
                  <p className="channel-note">
                    Send medicine pictures, prescription specifications, or RFQ lists directly to our verified business account.
                  </p>
                  <a
                    href="https://wa.me/12272134021?text=Hello%20Care%20%26%20Cure%20Pharma%2C%20I%20have%20an%20enquiry%20regarding%20pharmaceutical%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp"
                    id="contact-whatsapp-btn"
                  >
                    <span>Message on WhatsApp &rarr;</span>
                  </a>
                </article>

                {/* Physical Depot Card */}
                <article className="contact-channel-card">
                  <div className="channel-card-head">
                    <span className="channel-icon">📍</span>
                    <div>
                      <small>Central Distribution Depot &amp; Office</small>
                      <h4>Care And Cure Pharmaceuticals</h4>
                    </div>
                  </div>
                  <p className="depot-address">
                    First Floor, 1/56C, Lalita Park,<br />
                    Lakshmi Nagar, East Delhi,<br />
                    New Delhi &ndash; 110092, India
                  </p>
                  <div className="depot-actions">
                    <a
                      className="text-link"
                      href={`https://maps.google.com/?q=${mapQuery}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Google Maps ↗
                    </a>
                    <span className="statutory-pill">MSME Reg: UDYAM-DL-05-0020257</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Right Column: Contact & RFQ Form */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>

          {/* Central Depot Location & Logistics Showcase */}
          <div className="depot-showcase-card">
            <div className="depot-showcase-header">
              <div>
                <span className="section-kicker">Pharmaceutical Facility</span>
                <h3>Central Depot &amp; Staging Center &mdash; New Delhi, India</h3>
                <p>Licensed temperature-regulated staging facility with 24/7 security and cold-chain departure docks.</p>
              </div>
              <a
                href={`https://maps.google.com/?q=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                Get Turn-by-Turn Directions &rarr;
              </a>
            </div>

            <div className="depot-details-grid">
              <div className="depot-image-wrap">
                <Image
                  src="/images/bg-contact-hq.jpg"
                  alt="Care & Cure Distribution Depot and Operations Desk"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="depot-image-tag">
                  <span>🏢 Central Logistics Facility</span>
                </div>
              </div>

              <div className="depot-info-tiles">
                <div className="depot-tile">
                  <span className="tile-icon">❄️</span>
                  <div>
                    <strong>2°C – 8°C Cold Storage</strong>
                    <p>Dedicated thermal staging area for temperature-sensitive biologics and vaccines.</p>
                  </div>
                </div>

                <div className="depot-tile">
                  <span className="tile-icon">✈️</span>
                  <div>
                    <strong>IGI Airport Transit Proximity</strong>
                    <p>Direct rapid highway access to New Delhi Air Cargo Terminal for express global departures.</p>
                  </div>
                </div>

                <div className="depot-tile">
                  <span className="tile-icon">🛡️</span>
                  <div>
                    <strong>WHO-GMP Certified Audit</strong>
                    <p>Full batch reconciliation and Certificate of Analysis (COA) verification before departure.</p>
                  </div>
                </div>

                <div className="depot-tile">
                  <span className="tile-icon">📦</span>
                  <div>
                    <strong>Discreet Thermal Packaging</strong>
                    <p>Calibrated phase-change shippers with calibrated temperature loggers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="contact-faqs-wrap">
            <div className="faqs-header">
              <span className="section-kicker">Helpful Clarifications</span>
              <h3>Frequently Asked Trade Inquiries</h3>
              <p>Common questions from hospitals, clinical distributors, and healthcare procurement managers.</p>
            </div>

            <div className="faqs-grid">
              <article className="faq-card">
                <div className="faq-icon">🔬</div>
                <h4>How are pharmaceutical batches validated?</h4>
                <p>
                  Each batch is sourced directly with its manufacturer Certificate of Analysis (COA) specifying assay levels, dissolution profiles, stability data and moisture limits. We share digital COAs prior to dispatch.
                </p>
              </article>

              <article className="faq-card">
                <div className="faq-icon">⚡</div>
                <h4>What are standard dispatch and shipping times?</h4>
                <p>
                  Standard domestic orders are dispatched within 24 hours. International air consignments depart within 48–72 hours via tracked expedited medical couriers with door-to-door temperature monitoring.
                </p>
              </article>

              <article className="faq-card">
                <div className="faq-icon">❄️</div>
                <h4>How do you safeguard temperature-sensitive shipments?</h4>
                <p>
                  Cold-chain shipments (2°C – 8°C) are packed inside validated polyurethane thermal shippers with conditioned phase-change gel bricks and single-use electronic temperature data loggers.
                </p>
              </article>

              <article className="faq-card">
                <div className="faq-icon">💳</div>
                <h4>What payment and quotation terms are available?</h4>
                <p>
                  We support wire transfers (TT/SWIFT), approved institutional invoicing for hospitals, and digital corporate payments. Formal pro-forma invoices with full statutory details are issued for all orders.
                </p>
              </article>

              <article className="faq-card">
                <div className="faq-icon">📋</div>
                <h4>Can you supply custom export documentation?</h4>
                <p>
                  Yes, our export department prepares custom dossiers including Batch COA, MSDS, packing lists, commercial invoices, and export clearance papers under Indian IEC (AVSPJ6191L).
                </p>
              </article>

              <article className="faq-card">
                <div className="faq-icon">💊</div>
                <h4>What if the required medicine is not in the online catalogue?</h4>
                <p>
                  Our New Delhi sourcing network has access to over 5,000+ active pharmaceutical formulations. Contact our pharmacy desk with your salt name and dosage strength for immediate verification.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Footer with In-Card Ambient Video */}
      <section className="home-cta" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Ambient video nested inside card */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/bg-contact-hq.jpg"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.35,
                  filter: 'saturate(1.3) contrast(1.1)'
                }}
              >
                <source src="/videos/contact-ambient.mp4" type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(80,70,229,0.85) 0%, rgba(67,56,202,0.92) 100%)'
              }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-kicker">Ready to proceed?</span>
              <h2>Explore our complete catalogue of<br /><em>62+ Verified Products.</em></h2>
              <p>
                Browse antibiotics, pain relief, ED therapeutics, smart formulations and institutional compounds now.
              </p>
              <div className="closing-actions">
                <Link className="button button-primary" href="/products">Browse Product Catalogue ↗</Link>
                <a className="button button-glass" href="tel:+12272134021">Call Pharmacy Desk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
