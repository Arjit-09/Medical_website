import Link from "next/link";
import ProductCatalog from "../components/product-catalog";
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="page-width hero-inner">
          <div>
            <p className="eyebrow">WELCOME TO MEDZWELL</p>
            <h1>
              Find your product.
              <br />
              <span>We’ll take it from here.</span>
            </h1>
            <p className="hero-description">
              Browse our catalogue and tell us what you need.
              <br className="desktop-break" /> Our team will help with
              availability, pricing and your order.
            </p>
            <div className="hero-actions">
              <a className="button" href="#products">
                Browse products <span>↓</span>
              </a>
              <Link className="text-link" href="/contact">
                Contact our team ↗
              </Link>
            </div>
          </div>
          <div className="hero-note">
            <span className="small-cross" aria-hidden="true">
              +
            </span>
            <p>
              A simpler way
              <br />
              to get in touch.
            </p>
            <span>
              Choose a product. Send an enquiry.
              <br />
              Speak directly with our team.
            </span>
          </div>
        </div>
      </section>
      <section id="products" className="page-width catalog-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR CATALOGUE</p>
            <h2>Explore products</h2>
          </div>
          <p>Find what you need, then enquire directly.</p>
        </div>
        <ProductCatalog />
      </section>
      <section className="page-width missing-strip">
        <div>
          <h2>Can’t find your product?</h2>
          <p>Tell us the name and details. We’ll check availability for you.</p>
        </div>
        <Link className="button button-outline" href="/contact?type=missing">
          Request a product <span>→</span>
        </Link>
      </section>
    </>
  );
}
