import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '../../components/page-banner';

export const metadata = {
  title: 'Pharmaceutical Services & Solutions | Care & Cure Pharma',
  description: 'Enterprise healthcare sourcing, cold-chain temperature-monitored logistics, B2B wholesale supply, and international regulatory documentation from Care & Cure.'
};

const fullServices = [
  {
    num: '01',
    icon: '🏥',
    title: 'Hospital & Institutional Formulary Procurement',
    lead: 'Tailored sourcing solutions for private hospitals, public health institutions, and outpatient clinical chains.',
    points: [
      'Multi-year contracts with predictable wholesale pricing',
      'Dedicated formulary matching and generic bio-equivalent substitution advice',
      'Consolidated monthly billing with certified batch release records'
    ]
  },
  {
    num: '02',
    icon: '❄️',
    title: 'Cold-Chain Logistics & Cryogenic Distribution (2°C - 8°C)',
    lead: 'Temperature-monitored delivery maintaining biological and thermal stability of injectables and temperature-sensitive APIs.',
    points: [
      'Certified phase-change shippers with calibrated electronic data loggers',
      'Real-time temperature telemetry and transit alarms',
      'Express priority dispatch to prevent transit bottlenecks'
    ]
  },
  {
    num: '03',
    icon: '📋',
    title: 'Cross-Border Regulatory Compliance & Export Dossiers',
    lead: 'Seamless customs documentation and batch verification for international healthcare trade.',
    points: [
      'Original Manufacturer Certificate of Analysis (COA) for every batch',
      'Material Safety Data Sheets (MSDS) and Stability Study data on demand',
      'Licensed under Indian Import-Export Code (AVSPJ6191L)'
    ]
  },
  {
    num: '04',
    icon: '💊',
    title: 'Critical Care & Specialized Formulations Supply',
    lead: 'Expedited availability for acute therapeutic needs, oncology injectables, and antiviral regimens.',
    points: [
      'Emergency procurement channel with direct manufacturer priority',
      'Comprehensive verification of dosage strengths and packaging seals',
      'Discreet packaging to protect shipment confidentiality'
    ]
  },
  {
    num: '05',
    icon: '📦',
    title: 'Discreet B2B Contract Packaging & Fulfillment',
    lead: 'Engineered protective packaging compliant with international aviation and express courier protocols.',
    points: [
      'Double-walled impact-absorbing protective cartons',
      'Desiccant and moisture-barrier protective wrapping',
      'Encrypted door-to-door tracking with instant courier milestone updates'
    ]
  },
  {
    num: '06',
    icon: '👨‍⚕️',
    title: 'Pharmacist Support Desk & Custom RFQs',
    lead: 'Personalized technical consultation directly from our experienced pharmaceutical dispatch specialists.',
    points: [
      'Fast 2-hour response window for price quotations and stock inquiries',
      'Active pharmaceutical ingredient (API) dosage consultations',
      'Dedicated WhatsApp hotline (+1 227 213-4021) and direct phone line'
    ]
  }
];

const workflowSteps = [
  {
    step: '01',
    title: 'RFQ & Batch Verification',
    desc: 'You specify required chemical compounds, pack sizes, and dosage strengths. Our New Delhi desk verifies immediate stock and batch COAs.'
  },
  {
    step: '02',
    title: 'Thermal Staging & Inspection',
    desc: 'Medicines undergo tamper verification and are staged in calibrated 2°C–8°C thermal shippers with electronic data loggers.'
  },
  {
    step: '03',
    title: 'Regulatory & Customs Clearance',
    desc: 'Complete documentation packs (COA, MSDS, statutory invoices) are finalized for rapid customs and aviation passage.'
  },
  {
    step: '04',
    title: 'Express Doorstep Handover',
    desc: 'Consignments arrive via tracked express couriers with temperature telemetry audit reports for complete peace of mind.'
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Enterprise Healthcare Capabilities"
        title="Pharmaceutical Supply & Specialized Logistics"
        description="End-to-end solutions engineered for medical institutions, clinics, and wholesale distributors worldwide. Guaranteed batch authenticity and temperature integrity."
        videoSrc="/videos/services-ambient.mp4"
        bgImage="/images/bg-services-logistics.jpg"
      />

      {/* Services Grid with Ambient Video Background */}
      <section className="section section-light" style={{ position: 'relative', overflow: 'hidden' }}>
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

        <div className="section-orb section-orb-1" aria-hidden="true" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading text-center">
            <div>
              <span className="section-kicker">Our Service Ecosystem</span>
              <h2>Precision Sourcing &amp; Cold-Chain Execution</h2>
            </div>
            <p className="section-intro">
              Care &amp; Cure Pharmaceuticals ensures healthcare organizations receive verified, temperature-stable pharmaceuticals with complete regulatory backing.
            </p>
          </div>

          <div className="services-catalogue-grid">
            {fullServices.map((svc) => (
              <div key={svc.num} className="service-feature-card">
                <div className="service-card-top">
                  <div className="service-card-header">
                    <span className="service-feature-icon">{svc.icon}</span>
                    <span className="service-feature-badge">{svc.num}</span>
                  </div>
                  <h3>{svc.title}</h3>
                  <p className="service-feature-lead">{svc.lead}</p>
                  <ul className="service-points-list">
                    {svc.points.map((pt, i) => (
                      <li key={i}>
                        <span className="check-icon">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-card-action">
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="service-link"
                  >
                    <span>Enquire for this service</span>
                    <i>&rarr;</i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Sourcing & Logistics Workflow */}
      <section className="section workflow-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="section-grid-pattern" aria-hidden="true" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading text-center">
            <div>
              <span className="section-kicker">Transparent Execution</span>
              <h2>How Our Pharmaceutical Sourcing Operates</h2>
            </div>
            <p className="section-intro">
              From inquiry receipt to validated delivery, every consignment follows rigorous pharmaceutical quality protocols.
            </p>
          </div>

          <div className="workflow-grid">
            {workflowSteps.map((wf) => (
              <div key={wf.step} className="workflow-card">
                <span className="workflow-step-num">{wf.step}</span>
                <h4>{wf.title}</h4>
                <p>{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Cold-Chain Visual Banner */}
      <section className="coldchain-showcase-section">
        <div className="page-width">
          <div className="coldchain-grid">
            <div className="coldchain-image-wrap">
              <Image
                src="/images/bg-services-logistics.jpg"
                alt="Automated Cold-Chain Packaging"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="coldchain-content">
              <span className="coldchain-kicker">Cold-Chain Standard</span>
              <h2>Temperature Controlled Global Distribution</h2>
              <p>
                From our New Delhi temperature-regulated depot to final delivery, we maintain an unbroken cold chain for temperature-sensitive injectables, biologics, and specialized antibiotics.
              </p>
              <div className="coldchain-actions">
                <Link className="button button-primary" href="/contact">
                  Request Trade Consultation &rarr;
                </Link>
                <Link className="button button-glass" href="/products">
                  View Pharmaceutical Listings
                </Link>
              </div>
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
              <span className="section-kicker">Enterprise Supply Agreements</span>
              <h2>Secure your medical supply<br /><em>with trusted batch verification.</em></h2>
              <p>
                Contact our New Delhi distribution desk to discuss institutional formulary supply, hospital contracts, or custom export dossiers.
              </p>
              <div className="closing-actions">
                <Link className="button button-primary" href="/contact">Enquire Today ↗</Link>
                <a className="button button-glass" href="tel:+12272134021">Call Pharmacy Desk</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
