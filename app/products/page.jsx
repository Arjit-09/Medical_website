import ProductCatalog from "../../components/product-catalog";
import { PRODUCTS } from "../../data/products";
export const metadata = { title: "Shop All Medicines | Medzwall" };

export default function ProductsPage() {
  return (
    <>
      {/* Shop Hero Banner */}
      <div className="shop-hero-banner">
        <div className="page-width shop-hero-inner">
          <p className="eyebrow" style={{ color: "#f59e0b" }}>— COMPLETE MEDICAL INVENTORY</p>
          <h1 style={{ color: "white", fontSize: "clamp(26px, 3.8vw, 40px)" }}>
            Shop All Medicines
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "15px", marginTop: "8px" }}>
            Explore {PRODUCTS.length}+ laboratory-tested prescription formulations and daily wellness solutions.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="page-width">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <a href="/">Home</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Shop</span>
        </nav>
      </div>

      {/* Catalog with Sidebar */}
      <section className="page-width catalog-section">
        <ProductCatalog />
      </section>
    </>
  );
}
