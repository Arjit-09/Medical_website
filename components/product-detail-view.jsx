"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../data/site";
import { ProductCard } from "./product-card";
import { getRelatedProducts, categorySlug } from "../data/products";

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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

  const whatsappMessage = encodeURIComponent(
    `Hello Medzwall, I want to buy ${product.name}${selectedVariant ? ` (${selectedVariant.title})` : ""} - Quantity: ${quantity} pack(s). Total estimated: $${(currentPriceUSD * quantity).toFixed(2)} USD. Please confirm availability and shipping.`
  );
  const whatsappUrl = `${CONTACT.whatsapp}?text=${whatsappMessage}`;

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

          {/* Quantity + WhatsApp Order Buttons */}
          <div className="detail-order-row">
            <div className="quantity-controls">
              <button type="button" className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">-</button>
              <span className="qty-val">{quantity}</span>
              <button type="button" className="qty-btn" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="detail-whatsapp-btn"
              aria-label={`Buy ${product.name} on WhatsApp`}
            >
              <WhatsAppIcon />
              <span>Buy on WhatsApp</span>
            </a>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}${selectedVariant ? ` (${encodeURIComponent(selectedVariant.title)})` : ""}&qty=${quantity}`}
              className="detail-web-order-btn"
              aria-label="Buy through online order form"
            >
              <span>Buy Online Form →</span>
            </Link>
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
