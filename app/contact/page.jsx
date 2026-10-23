import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '../../components/page-banner';
import ContactForm from '../../components/contact-form';

export const metadata = {
  title: 'Contact Us & Trade RFQ | Care & Cure Pharmaceuticals',
  description: 'Connect with Care & Cure Pharmaceuticals Florida support desk at 5200 NW 4th Ave, Pompano Beach, FL 33064. Request medicine quotes, verify availability, and get tracked shipping schedules.'
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent('5200 NW 4th Ave, Pompano Beach, FL 33064');

  return (
    <>
      <PageBanner
        eyebrow="Direct Procurement &amp; Support Desk"
        title="Contact Care &amp; Cure Pharmaceuticals"
        description="Connect with our licensed pharmacy distribution desk for current trade pricing, prescription orders, cold-chain schedules, and verified product availability."
        videoSrc="/videos/contact-ambient.mp4"
        bgImage="/images/bg-contact-hq.jpg"
      />

      {/* Main Contact Section — Clean White Background */}
      <section className="section contact-section" style={{ background: '#ffffff' }}>
        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-main-grid">
            {/* Left Column: Direct Access Channels */}
            <div className="contact-info-col">
              <div className="contact-info-header">
                <span className="section-kicker">Instant Access Channels</span>
                <h2>Talk directly with our pharmaceutical team.</h2>
                <p>
                  We respond promptly to commercial orders, prescription requests, clinic procurement queries, and medicine sourcing.
                </p>
              </div>

              {/* Live Status Indicator Card */}
              <div className="status-indicator-card">
                <div className="status-radar-wrap">
                  <span className="radar-circle" />
                  <span className="radar-dot" />
                </div>
                <div>
                  <strong>Florida Pharmacy &amp; Order Desk Is Active</strong>
                  <span>Operating Hours: 8:00 AM – 8:00 PM EST (Mon – Sat) · Direct Email &amp; Phone Response</span>
                </div>
              </div>

              {/* Channel Cards Grid */}
              <div className="contact-cards-stack">
                {/* Phone Lines Card */}
                <article className="contact-channel-card">
                  <div className="channel-card-head">
                    <span className="channel-icon">📞</span>
                    <div>
                      <small>Direct Pharmacy Call Line</small>
                      <h4>Instant Phone Consultation</h4>
                    </div>
                  </div>
                  <div className="phone-lines-list">
                    <div className="phone-item">
                      <div>
                        <a href="tel:+18046341990" className="phone-link primary-phone">
                          +1 8046341990
                        </a>
                        <span className="phone-tag">🇺🇸 US Direct &amp; Toll Support</span>
                      </div>
                      <a href="tel:+18046341990" className="button button-sm button-outline">Call Now</a>
                    </div>
                  </div>
                  <p className="channel-note">
                    Immediate assistance with stock verification, batch release dates, and order confirmations.
                  </p>
                </article>

                {/* Direct Email Card */}
                <article className="contact-channel-card">
                  <div className="channel-card-head">
                    <span className="channel-icon">✉️</span>
                    <div>
                      <small>Direct Order &amp; Inquiries Email</small>
                      <h4>Usonlinemedshop247@gmail.com</h4>
                    </div>
                  </div>
                  <p className="channel-note">
                    Submit your enquiry via the form on this page or email directly for wholesale RFQs, quotes, and missing medicine requests.
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
                    Send medicine pictures, prescription specifications, or RFQ lists directly to our verified business line.
                  </p>
                  <a
                    href="https://wa.me/18046341990?text=Hello%20Care%20%26%20Cure%20Pharma%2C%20I%20have%20an%20enquiry%20regarding%20pharmaceutical%20products."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-whatsapp"
                    id="contact-whatsapp-btn"
                  >
                    <span>Message on WhatsApp (+1 8046341990) &rarr;</span>
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
                    5200 NW 4th Ave<br />
                    Pompano Beach, FL 33064<br />
                    United States
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
                <h3>Central Depot &amp; Logistics Hub &mdash; Pompano Beach, FL</h3>
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
                  src="/images/hero-facility.jpg"
                  alt="Care &amp; Cure Distribution Depot and Operations Desk"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="depot-image-tag">
                  <span>🏢 Florida Distribution Hub</span>
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
                    <strong>Express Freight &amp; Air Transit</strong>
                    <p>Direct rapid highway access to South Florida air freight logistics hubs for fast tracked dispatch.</p>
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
              <p>Common questions from hospitals, clinical distributors, pharmacies, and patients.</p>
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
                  Standard domestic orders are dispatched within 24 hours. Consignments depart via tracked expedited medical couriers with door-to-door temperature monitoring.
                </p>
              </article>

              <article className="faq-card">
                <div className="faq-icon">💼</div>
                <h4>Can you source products not listed in the catalogue?</h4>
                <p>
                  Yes. Our extensive sourcing network has access to over 5,000+ active pharmaceutical formulations. Use the missing medicine form or email Usonlinemedshop247@gmail.com for immediate stock verification.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
