"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CONTACT } from "../data/site";
import { ProductCard } from "./product-card";
import { getRelatedProducts, categorySlug } from "../data/products";
import { useCart } from "./cart-context";

function StarRating({ rating = 4.9, count = 148 }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="star-rating" aria-label={`${rating} out of 5, ${count} verified reviews`}>
      {[...Array(full)].map((_, i) => (
        <span key={i} className="star filled">★</span>
      ))}
      {half && <span className="star half">★</span>}
      {[...Array(5 - full - (half ? 1 : 0))].map((_, i) => (
        <span key={`e${i}`} className="star empty">☆</span>
      ))}
      <span className="star-count">{rating}/5 ({count}+ Verified Reviews)</span>
    </div>
  );
}

export default function ProductDetailView({ product }) {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const related = getRelatedProducts(product, 4);

  const currentPriceUSD = selectedVariant?.priceUSD ?? product.priceUSD ?? 120;
  const perUnit = selectedVariant?.title
    ? (() => {
        const match = selectedVariant.title.match(/(\d+)\s*(?:Tablets|Tabs|Pills|Capsules)?$/i);
        if (match) {
          const qty = parseInt(match[1]);
          if (qty > 0) return `$${(currentPriceUSD / qty).toFixed(2)} per tablet`;
        }
        return null;
      })()
    : null;

  function handleAddToCart() {
    addToCart(product, selectedVariant, quantity);
  }

  function handleBuyNow() {
    addToCart(product, selectedVariant, quantity);
    router.push("/checkout");
  }

  return (
    <div className="product-detail-container">
      {/* Breadcrumbs */}
      <div className="page-width">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/products">Shop</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>
      </div>

      {/* Main Detail Grid */}
      <section className="page-width product-detail">
        {/* Left: Gallery */}
        <div className="detail-gallery">
          <div className="detail-main-image">
            {imageFailed ? (
              <div className="detail-fallback-box">
                <span style={{ fontSize: "48px" }}>💊</span>
                <p>{product.name}</p>
              </div>
            ) : (
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImageFailed(true)}
                style={{ objectFit: "contain", padding: "24px" }}
              />
            )}
          </div>
          {images.length > 1 && (
            <div className="detail-thumbs" role="tablist" aria-label="Product thumbnails">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`detail-thumb ${selectedImage === img ? "active" : ""}`}
                  onClick={() => { setSelectedImage(img); setImageFailed(false); }}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${idx + 1}`} fill sizes="80px" style={{ objectFit: "contain", padding: "4px" }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="detail-info">
          <div className="detail-category-badge"><span>{product.category}</span></div>
          <h1 className="detail-title">Buy {product.name} Online</h1>
          {product.description && <p className="detail-desc">{product.description}</p>}

          <StarRating />

          <div className="detail-stock-row">
            <span className="detail-stock-badge">● In Stock · Batch Tested &amp; Ready to Ship</span>
          </div>

          {product.activeSalt && (
            <div className="detail-salt-box">
              Active Salt / Generic Formulation: <strong>{product.activeSalt}</strong>
            </div>
          )}

          {/* Price */}
          <div className="detail-price-section">
            <div className="detail-price-main">
              <span className="detail-price-usd">${currentPriceUSD.toFixed(2)} USD</span>
              {perUnit && <span className="detail-price-per">{perUnit}</span>}
            </div>
            <div className="detail-shipping-badge">
              <strong>FREE USPS Priority Shipping</strong>
              <span>Estimated arrival in 3–5 business days</span>
            </div>
          </div>

          {/* Pack Size Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="detail-pack-selector">
              <p className="detail-option-label">— SELECT QUANTITY &amp; DISCOUNTS</p>
              <p className="detail-pack-title">Choose Pack Size (Tablets)</p>
              <select
                className="detail-pack-select"
                value={selectedVariant ? selectedVariant.title : ""}
                onChange={(e) => {
                  const v = product.variants.find((v) => v.title === e.target.value);
                  if (v) setSelectedVariant(v);
                }}
                aria-label="Choose pack size"
              >
                {product.variants.map((v, i) => (
                  <option key={i} value={v.title}>
                    {v.title}{v.priceUSD ? ` — $${v.priceUSD.toFixed(2)} each` : ""}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity + Action Buttons */}
          <div className="detail-order-row">
            <div className="quantity-controls">
              <button type="button" className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">-</button>
              <span className="qty-val">{quantity}</span>
              <button type="button" className="qty-btn" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <button className="detail-add-cart-btn" onClick={handleAddToCart} aria-label="Add to cart">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </button>
            <button className="detail-buy-now-btn" onClick={handleBuyNow} aria-label="Buy now">
              ⚡ Buy Now
            </button>
          </div>

          {/* Trust Box */}
          <div className="detail-trust-box">
            <div className="detail-trust-row"><span className="trust-check">✓</span><span>100% Plain Discreet Box (Zero medical label outside)</span></div>
            <div className="detail-trust-row"><span className="trust-check">✓</span><span>Tracked USPS Express Delivery (3–5 Business Days)</span></div>
            <div className="detail-trust-row"><span className="trust-check">✓</span><span>Instant Order Confirmation on Email &amp; WhatsApp</span></div>
          </div>
        </div>
      </section>

      {/* Description & Clinical Info Section */}
      {product.description && (
        <section className="page-width product-desc-section" aria-labelledby="desc-heading">
          <h2 id="desc-heading">Description &amp; Clinical Information</h2>
          <div className="product-desc-content">
            <p>{product.description}</p>
            <p style={{ marginTop: "16px", color: "#64748b" }}>
              This medication is supplied in batch-tested, WHO-GMP certified formulation.
              Always consult a healthcare professional before use.
            </p>
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="page-width related-products-section" aria-labelledby="related-heading">
          <div className="section-header">
            <div>
              <p className="eyebrow">RELATED MEDICATIONS</p>
              <h2 id="related-heading">Similar in {product.category}</h2>
            </div>
            <Link href={`/products/category/${categorySlug(product.category)}`} className="view-all">
              View More in {product.category} <span>→</span>
            </Link>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
