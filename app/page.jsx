import Link from 'next/link';
import Image from 'next/image';
import { CATALOG_CATEGORIES, PRODUCTS, categorySlug } from '../data/products';
import { ProductCard } from '../components/product-card';

const featured = [
  PRODUCTS.find(p => p.name.includes('Tramadol')),
  PRODUCTS.find(p => p.name.includes('XANAX')),
  PRODUCTS.find(p => p.name.includes('Amoxicillin')),
  PRODUCTS.find(p => p.name.includes('Aurogra')),
  PRODUCTS.find(p => p.name.includes('ADMENTA')),
  PRODUCTS.find(p => p.name.includes('VALIUM')),
].filter(Boolean);

const categoryIcons = ['💊', '⚡', '💪', '🛡️', '🌙', '🧠', '🧪'];

const serviceCards = [
  {
    num: '1',
    title: 'Easy to Source With Us',
    description: 'Share the medicine name, strength and pack details. Our team verifies immediate availability from certified manufacturers across India.'
  },
  {
    num: '2',
    title: 'Communicate With Specialists',
    description: 'Speak directly with our experienced New Delhi team about your specific hospital, pharmacy, or institutional supply requirements.'
  },
  {
    num: '3',
    title: 'Med & Refill Logistics',
    description: 'Dependable scheduling and express dispatch to keep your inventory consistently stocked without supply disruptions.'
  },
  {
    num: '4',
    title: 'Quality & Batch Compliance',
    description: 'Every product is sourced from WHO-GMP and FDA certified pharmaceutical facilities with full regulatory documentation.'
  },
  {
    num: '5',
    title: '24/7 Dedicated Partner Support',
    description: 'Instant response times for urgent enquiries, stock verification, current pricing, and express cold-chain orders.'
  },
  {
    num: '6',
    title: 'Cold-Chain & Safe Dispatch',
    description: 'Temperature-monitored packaging and express freight dispatch from our central New Delhi pharmaceutical facility.'
  }
];

const testimonials = [
  {
    stars: 5,
    quote: "Care & Cure Pharmaceuticals have been a reliable partner for sourcing oncology medicines for our hospital. Fast confirmations and genuine products.",
    name: "Dr. Priya Mehra",
    role: "Oncologist, Apollo Hospitals Delhi"
  },
  {
    stars: 5,
    quote: "Excellent service and transparent pricing. We regularly procure injections and capsules through them and have never faced quality issues.",
    name: "Rajesh Verma",
    role: "Procurement Head, Max Healthcare"
  },
  {
    stars: 5,
    quote: "Highly recommended for anti-cancer medicines. The team is knowledgeable and the response time is outstanding.",
    name: "Sunita Agarwal",
    role: "Senior Pharmacist, Fortis Hospital"
  }
];

const tickerItems = [
  'Antibiotics & Anti-Infectives', 'Pain Relief Formulations', 'ED Therapeutics',
  'Body Building & Wellness', 'Sleep & Restorative Formulations', 'Smart Cognitive Nootropics',
  '2°C - 8°C Cold Chain Supply', 'WHO-GMP Certified Formulations', 'Authentic Batch COAs', 'Tracked Global Courier'
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO WITH VIBRANT HIGH-VISIBILITY VIDEO BACKGROUND ===== */}
      <section className="hero page-width" style={{ width: '100%', maxWidth: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient Video Background - Crisp & Highly Visible */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-pills-light.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.68,
              transform: 'scale(1.03)',
              filter: 'saturate(1.22) contrast(1.08)'
            }}
          >
            <source src="/videos/hero-ambient.mp4" type="video/mp4" />
          </video>
          {/* Subtle blending gradient that lets video show through clearly */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(248,250,253,0.3) 35%, rgba(248,250,253,0.2) 65%, rgba(255,255,255,0.92) 100%)'
          }} />
          <div className="banner-grid-overlay" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="hero-glow-orb glow-1" />
        <div className="hero-glow-orb glow-2" />
        <div className="section-orb section-orb-1" />

        <div className="hero-content hero-glass-card" data-reveal style={{ position: 'relative', zIndex: 1 }}>
          <div className="eyebrow banner-eyebrow">
            <span className="eyebrow-mark">✦</span>
            <span>Pharmaceutical Supply · New Delhi, India</span>
          </div>

          <h1>
            Trusted Medicine
            <em> Supply, </em>
            <span>Today And Tomorrow.</span>
          </h1>

          <p>
            Care &amp; Cure Pharmaceuticals connects healthcare partners with a dependable range
            of pharmaceutical products — from oncology to antivirals — backed by responsive
            service from our New Delhi team.
          </p>

          {/* Search Bar */}
          <form className="hero-search-box" action="/products" method="GET">
            <span className="hero-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              name="q"
              placeholder="Type your pills or medicine name..."
              className="hero-search-input"
              aria-label="Search medicine name"
              id="hero-search-input"
            />
            <button type="submit" className="hero-search-btn" id="hero-search-submit">
              Search
            </button>
          </form>

          <div className="hero-actions">
            <Link className="button button-primary" href="/products" id="hero-browse-products">
              Browse Catalogue <span>↗</span>
            </Link>
            <Link className="button button-glass" href="/contact" id="hero-get-in-touch">
              Get in Touch
            </Link>
          </div>

          <div className="hero-proof">
            <div className="proof-avatars">
              <span>PK</span>
              <span>RM</span>
              <span>SG</span>
            </div>
            <div>
              <div className="proof-stars">★★★★★</div>
              <strong>Happy Customer · 4.9</strong>
              <div>500+ Healthcare partners, clinics &amp; hospitals</div>
            </div>
          </div>

          <div style={{
            display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center',
            marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-light)'
          }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.06em' }}>VERIFIED STANDARDS:</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>🛡️ WHO-GMP Verified</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>⚡ Express Dispatch</span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>❄️ Cold Chain Supply</span>
          </div>
        </div>

        <div className="hero-visual" data-reveal data-reveal-delay="2">
          <div className="hero-image-wrap">
            <Image
              src="/images/hero-pills-light.jpg"
              alt="Premium pharmaceutical products and capsules"
              width={540}
              height={540}
              priority
              style={{ borderRadius: '28px' }}
            />
            <div className="hero-badge hero-badge-1">
              <span className="badge-icon">💊</span>
              <div className="badge-text">
                <strong>250+ Products</strong>
                <span>In catalogue</span>
              </div>
            </div>
            <div className="hero-badge hero-badge-2">
              <span className="badge-icon">🚀</span>
              <div className="badge-text">
                <strong>Fast Dispatch</strong>
                <span>New Delhi Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section">
        <div className="stats-grid">
          {[
            { number: '250', suffix: '+', label: 'Products in Catalogue', icon: '💊' },
            { number: '500', suffix: '+', label: 'Healthcare Partners', icon: '🤝' },
            { number: '15', suffix: '+', label: 'Years of Experience', icon: '🏆' },
            { number: '100', suffix: '%', label: 'Quality Assured', icon: '✅' },
          ].map((stat, i) => (
            <div
              className="stat-item"
              key={i}
              data-reveal
              data-reveal-delay={String(i + 1)}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <div className="stat-number">
                {stat.number}<span>{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div className="ticker-section">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div className="ticker-item" key={i}>
              <span className="dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <section className="category-section" id="categories">
        <div className="page-width">
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Explore the Range</span>
              <h2>Shop by <em>Category</em></h2>
            </div>
            <Link className="text-link" href="/products" id="categories-view-all">
              View all {PRODUCTS.length} listings ↗
            </Link>
          </div>

          <div className="category-grid">
            {CATALOG_CATEGORIES.slice(0, 6).map((category, index) => (
              <Link
                className="category-tile"
                key={category}
                href={`/products/category/${categorySlug(category)}`}
                id={`category-tile-${index}`}
                data-reveal
                data-reveal-delay={String((index % 3) + 1)}
              >
                <span className="category-number">0{index + 1}</span>
                <span className="category-glyph" aria-hidden="true">{categoryIcons[index]}</span>
                <b>{category}</b>
                <small>Explore products ↗</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION with Clearly Visible Background Image ===== */}
      <section
        className="service-section"
        id="services"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Prominently Visible image background */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none'
        }}>
          <Image
            src="/images/pharma-lab.jpg"
            alt="Pharmaceutical laboratory cleanroom"
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.28,
              filter: 'saturate(1.2) contrast(1.05)',
              transform: 'scale(1.02)'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.68) 50%, rgba(255,255,255,0.92) 100%)'
          }} />
        </div>
        {/* Animated orbs */}
        <div className="section-orb section-orb-1" />
        <div className="section-orb section-orb-2" />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Comprehensive Medical Supply</span>
              <h2>All The Service <em>You Will Get</em></h2>
            </div>
            <p className="section-intro">
              It&apos;s important to address your supply conditions with responsive listening, transparent confirmations and dedicated support.
            </p>
          </div>

          <div className="service-grid">
            {serviceCards.map((card, i) => (
              <article
                className="service-card glass-service-card"
                key={card.num}
                data-reveal
                data-reveal-delay={String((i % 3) + 1)}
                id={`service-card-${i}`}
              >
                <span>{card.num}</span>
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <Link href="/about#services" className="text-link" style={{ marginTop: '20px' }}>
                  Learn More <i>↗</i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS with subtle background ===== */}
      <section
        className="featured-section"
        id="products"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div className="section-grid-pattern" />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80,70,229,0.06) 0%, transparent 60%)'
        }} />

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Selected Catalogue Listings</span>
              <h2>Featured <em>Products</em></h2>
            </div>
            <Link className="text-link" href="/products" id="featured-view-all">
              Shop full catalogue ↗
            </Link>
          </div>

          <div className="product-grid featured-grid">
            {featured.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

          <p className="catalog-note">
            Prices shown are reference listings only. Confirm current pricing, pack details and availability with our New Delhi team.
          </p>
        </div>
      </section>

      {/* ===== WHY WE ARE BETTER / ABOUT STRIP WITH VISIBLE VIDEO ===== */}
      <section className="about-strip" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background video for about strip - Prominently Visible */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/pharma-lab.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.36,
              filter: 'saturate(1.25) contrast(1.08)'
            }}
          >
            <source src="/videos/about-ambient.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(248,250,252,0.72) 0%, rgba(241,245,249,0.82) 100%)'
          }} />
        </div>
        <div className="section-orb" style={{
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          bottom: '-10%', right: '5%', filter: 'blur(60px)', animationDelay: '-4s'
        }} />

        <div className="about-strip-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div className="about-strip-image" data-reveal>
            <Image
              src="/images/pharma-lab.jpg"
              alt="Our pharmaceutical laboratory and quality process"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="image-badge">
              <strong>15+ Years</strong>
              <span>In Pharmaceutical Supply</span>
            </div>
          </div>

          <div className="about-strip-content glass-content-card" data-reveal data-reveal-delay="2">
            <span className="section-kicker">Why We Are Better</span>
            <h2>Your trusted pharmaceutical <em>partner</em> in India.</h2>
            <p>
              Based in New Delhi, we work with hospitals, clinics and distributors across India
              to source and supply a comprehensive range of pharmaceutical products with transparency,
              speed and professionalism.
            </p>

            <div className="feature-list">
              {[
                { icon: '🔬', title: 'Quality Verified Products', desc: 'All medicines sourced from certified, regulated WHO-GMP manufacturers.' },
                { icon: '⚡', title: 'Fast Order Processing', desc: 'Quick confirmations and efficient dispatch from our New Delhi hub.' },
                { icon: '🤝', title: 'Dedicated Account Support', desc: 'Direct access to our knowledgeable team for every single enquiry.' },
              ].map((feat, i) => (
                <div className="feature-item" key={i} id={`feature-item-${i}`}>
                  <div className="feature-icon">{feat.icon}</div>
                  <div>
                    <strong>{feat.title}</strong>
                    <span>{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link className="button button-primary" href="/about" id="about-learn-more">
              Learn more about us ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS WITH VISIBLE FACILITY IMAGE ===== */}
      <section className="trust-section" style={{ position: 'relative' }}>
        {/* Background image treatment - Clear & Visible */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden'
        }}>
          <Image
            src="/images/bg-about-facility.jpg"
            alt="Pharmaceutical facility"
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.24,
              filter: 'saturate(1.2)'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.72) 50%, rgba(255,255,255,0.92) 100%)'
          }} />
        </div>

        <div className="page-width" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-heading" data-reveal>
            <div>
              <span className="section-kicker">Partner Testimonials</span>
              <h2>Trusted by <em>Healthcare</em> Professionals.</h2>
            </div>
          </div>

          <div className="trust-grid">
            {testimonials.map((t, i) => (
              <div
                className="trust-card glass-trust-card"
                key={i}
                data-reveal
                data-reveal-delay={String(i + 1)}
                id={`testimonial-${i}`}
              >
                <div className="trust-stars">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="trust-author">
                  <div className="trust-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA WITH IN-CARD AMBIENT VIDEO ===== */}
      <section className="home-cta" style={{ position: 'relative', overflow: 'hidden' }}>
        <div data-reveal style={{ position: 'relative', zIndex: 1 }}>
          <div className="cta-card" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background ambient video running directly inside the card */}
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
              <span className="section-kicker">Fast &amp; Reliable Procurement</span>
              <h2>Make An Order &amp; Get<br /><em>Priority Pan-India Dispatch</em></h2>
              <p>
                Speak with our New Delhi team to check products, confirm current pricing and verify immediate batch availability.
              </p>
              <div className="closing-actions">
                <Link className="button button-primary" href="/contact" id="cta-get-in-touch">
                  Make an Enquiry ↗
                </Link>
                <Link className="button button-glass" href="/products" id="cta-browse-catalogue">
                  Browse Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
