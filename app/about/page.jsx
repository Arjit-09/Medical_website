import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '../../components/page-banner';

export const metadata = {
  title: 'About Us | Care & Cure Pharmaceuticals',
  description: 'Learn about Care & Cure Pharmaceuticals — certified pharmaceutical distributor, wholesaler, and global healthcare sourcing partner based in New Delhi.'
};

const facts = [
  { label: 'Core Business', value: 'Authorized Trader · Wholesaler · Exporter' },
  { label: 'Therapeutic Range', value: 'Antibiotics, Pain Relief, ED, Wellness & Smart Formulations' },
  { label: 'Registered Entity', value: 'Care And Cure Pharmaceuticals' },
  { label: 'Headquarters', value: 'Lalita Park, Lakshmi Nagar, New Delhi, India' },
  { label: 'Active Product Listings', value: '62+ Verified Formulations' },
  { label: 'Quality Standards', value: 'WHO-GMP Compliant Sourcing & COA Verification' },
  { label: 'Logistics Capability', value: 'Cold-Chain (2°C - 8°C) & Worldwide Tracked Dispatch' },
  { label: 'Support Window', value: 'Mon - Sat: 8:00 AM - 9:00 PM IST' }
];

const pillars = [
  {
    icon: '🔬',
    title: 'Certified Batch Quality',
    desc: 'Every pharmaceutical product listed is sourced directly from licensed, audited manufacturers complying with WHO-GMP and international pharmacopeial standards.'
  },
  {
    icon: '❄️',
    title: 'Cold-Chain Integrity',
    desc: 'Temperature-sensitive injectables and biologicals are preserved using calibrated thermal packaging and continuous temperature data monitors during transit.'
  },
  {
    icon: '⚡',
    title: 'Rapid & Discreet Dispatch',
    desc: 'Orders are processed with precision within 24–48 hours, packed in tamper-evident discreet cartons with live tracking from dispatch to delivery.'
  },
  {
    icon: '🤝',
    title: 'Transparent Pricing & B2B RFQ',
    desc: 'Clear baseline trade pricing with bulk tiering for healthcare providers, clinical institutions, and wholesale partners worldwide.'
  }
];

const services = [
  {
    num: '01',
    icon: '🏥',
    title: 'Hospital & Formulary Sourcing',
    desc: 'Comprehensive procurement solutions for hospital pharmacies, clinics, and government health institutions with tailored bulk pricing and scheduled contract deliveries.'
  },
  {
    num: '02',
    icon: '❄️',
    title: 'Cold-Chain Specialized Logistics',
    desc: 'End-to-end refrigerated distribution maintaining 2°C to 8°C integrity. Includes temperature logging, insulated shippers, and expedited routing for thermal-sensitive APIs.'
  },
  {
    num: '03',
    icon: '📋',
    title: 'Regulatory & Export Documentation',
    desc: 'Complete documentation packs supplied for cross-border transit: Batch Certificates of Analysis (COA), Material Safety Data Sheets (MSDS), commercial invoices, and import clearance guidance.'
  },
  {
    num: '04',
    icon: '💊',
    title: 'Institutional Wholesale Distribution',
    desc: 'High-volume supply of essential antibiotics, critical care injections, pain relief therapies, and specialized wellness medications from premier licensed labs.'
  },
  {
    num: '05',
    icon: '📦',
    title: 'Discreet Contract Packaging & Dispatch',
    desc: 'Secure, shock-resistant and moisture-barrier packaging engineered for international air express transit with full door-to-door consignment tracking.'
  },
  {
    num: '06',
    icon: '👨‍⚕️',
    title: 'Pharmacy Desk Consultation & RFQs',
    desc: 'Direct consultation with our dedicated pharmaceutical logistics specialists. Get instant verification of dosage strengths, salt formulations, and alternative generics.'
  }
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Care & Cure Pharmaceuticals Profile"
        title="Dedicated to Global Healthcare Sourcing"
        description="Care & Cure Pharmaceuticals bridges healthcare providers, clinical networks, and international buyers with certified, high-grade pharmaceutical formulations from New Delhi."
        videoSrc="/videos/about-ambient.mp4"
        bgImage="/images/bg-about-facility.jpg"
      />

      {/* Main Narrative with Facility Image & Background Treatment */}
      <section className="section section-light about-story" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-grid-pattern" aria-hidden="true" />
        <div className="section-orb section-orb-1" aria-hidden="true" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-grid-layout">
            <div className="about-narrative-content">
              <span className="section-kicker">Our Mission &amp; Heritage</span>
              <h2>Built on clinical integrity, meticulous quality and uncompromising trust.</h2>
              <div className="about-text-body">
                <p>
                  Established as an authorized pharmaceutical trading and wholesale distributor in New Delhi, <b>Care And Cure Pharmaceuticals</b> operates with a singular focus: delivering verified, therapeutic-grade medications to institutions, clinics, and medical partners worldwide.
                </p>
                <p>
                  Our comprehensive product catalogue spans critical therapeutic categories including advanced antibiotics, pain management regimens, erectile dysfunction therapeutics, wellness compounds, and cognitive formulations. We ensure all products are acquired directly from licensed manufacturers operating under strict Good Manufacturing Practice (GMP) standards.
                </p>
                <p>
                  Through transparent pricing, rigorous chain-of-custody tracking, and responsive technical support, we remove the uncertainty from pharmaceutical sourcing.
                </p>
              </div>

              <div className="about-actions-row">
                <Link className="button button-primary" href="/products">
                  Browse Product Catalogue &rarr;
                </Link>
                <Link className="button button-outline" href="/contact">
                  Speak With Our Team
                </Link>
              </div>
            </div>

            {/* Facility Showcase Visual */}
            <div className="about-visual-wrap">
              <div className="about-image-card">
                <Image
                  src="/images/bg-about-facility.jpg"
                  alt="Care & Cure Pharmaceutical Cleanroom and Logistics Hub"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="about-image-overlay" />
                <div className="about-image-caption">
                  <span className="caption-badge">Operations &amp; Compliance Hub</span>
                  <h4>Care &amp; Cure Logistics &amp; Quality Control</h4>
                  <p>Temperature-controlled staging area and batch verification desk in New Delhi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="section pillars-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-orb section-orb-2" aria-hidden="true" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading text-center">
            <div>
              <span className="section-kicker">Why Healthcare Partners Choose Us</span>
              <h2>Built for Safety, Speed and Reliability</h2>
            </div>
            <p className="section-intro">
              From initial chemical verification to temperature-sensitive delivery, our operational standards ensure zero compromise.
            </p>
          </div>

          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div className="pillar-card" key={i}>
                <div className="pillar-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts & Statutory Details with Ambient Treatment */}
      <section className="section facts-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-grid-pattern" aria-hidden="true" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading">
            <div>
              <span className="section-kicker">Corporate Verification</span>
              <h2>Company Credentials &amp; Key Facts</h2>
            </div>
            <span className="profile-badge">
              ● Verified Indian Pharmaceutical Enterprise
            </span>
          </div>

          <div className="facts-grid">
            {facts.map((item, index) => (
              <div className="fact-card" key={item.label}>
                <span className="fact-num">0{index + 1}</span>
                <small>{item.label}</small>
                <b>{item.value}</b>
              </div>
            ))}
          </div>

          {/* Statutory Registration Badges */}
          <div className="statutory-row">
            <div>
              <small>GST Registration</small>
              <b>07AVSPJ6191L2ZR</b>
            </div>
            <div>
              <small>Import Export Code (IEC)</small>
              <b>AVSPJ6191L</b>
            </div>
            <div>
              <small>UDYAM MSME Registration</small>
              <b>UDYAM-DL-05-0020257</b>
            </div>
            <div>
              <small>Jurisdiction</small>
              <b>Delhi, India</b>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section with Background Video */}
      <section className="section why-section" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background ambient video - Crisply Visible */}
        <div className="section-video-bg" aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/bg-services-logistics.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.32 }}
          >
            <source src="/videos/services-ambient.mp4" type="video/mp4" />
          </video>
          <div className="section-video-overlay" />
        </div>

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading text-center">
            <div>
              <span className="section-kicker">Full Service Capabilities</span>
              <h2>Comprehensive Sourcing &amp; Cold-Chain Solutions</h2>
            </div>
            <p className="section-intro">
              Whether you require hospital supply contracts, temperature-validated transport, or international regulatory paperwork, we provide end-to-end execution.
            </p>
          </div>

          <div className="services-grid-cards">
            {services.map((svc) => (
              <article key={svc.num} className="service-detail-card">
                <div className="service-detail-head">
                  <span className="service-detail-icon">{svc.icon}</span>
                  <span className="service-detail-num">{svc.num}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Chain Logistics Feature Showcase (Dark high-impact band) */}
      <section className="coldchain-showcase-section">
        <div className="page-width">
          <div className="coldchain-grid">
            <div className="coldchain-content">
              <span className="coldchain-kicker">Cold-Chain Validation</span>
              <h2>2°C – 8°C Certified Temperature Monitored Network</h2>
              <p>
                Thermal deviations can compromise medicinal efficacy. Our supply chain utilizes phase-change materials, vacuum-insulated panels, and real-time electronic data loggers to guarantee product viability from our facility to your doorstep.
              </p>
              <div className="coldchain-stats-row">
                <div className="coldchain-stat">
                  <span>99.8%</span>
                  <p>Thermal compliance rate across 10,000+ shipments</p>
                </div>
                <div className="coldchain-stat">
                  <span>24/7</span>
                  <p>Live temperature data logger telemetry tracking</p>
                </div>
              </div>
              <Link className="button button-primary" href="/contact">
                Enquire for Cold-Chain Shipment &rarr;
              </Link>
            </div>

            <div className="coldchain-image-wrap">
              <Image
                src="/images/bg-services-logistics.jpg"
                alt="Automated cold storage facility"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Closing CTA with In-Card Ambient Video */}
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
              <span className="section-kicker">Partner With Us</span>
              <h2>Connect with our<br /><em>procurement desk.</em></h2>
              <p>
                Whether you need a dedicated quotation for your healthcare facility or guidance on specific active ingredients, our team is ready to assist.
              </p>
              <div className="closing-actions">
                <Link className="button button-primary" href="/contact">Contact Our Team ↗</Link>
                <Link className="button button-glass" href="/products">Browse 62+ Products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
