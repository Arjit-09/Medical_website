"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../data/site";
import { ProductCard } from "./product-card";
import { getRelatedProducts, categorySlug } from "../data/products";

export default function ProductDetailView({ product }) {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);

  const related = getRelatedProducts(product, 4);

  // Price calculations
  const currentPrice = selectedVariant
    ? (selectedVariant.priceUSD ? `$${selectedVariant.priceUSD}.00` : product.formattedPrice)
    : product.formattedPrice || `$${product.priceUSD || 120}.00`;

  // WhatsApp order message
  const whatsappMsg = encodeURIComponent(
    `Hello Medzwall, I want to order:\nProduct: ${product.name}\nPack/Variant: ${
      selectedVariant ? selectedVariant.title : "Standard"
    }\nQuantity: ${quantity}\nPlease confirm pricing and delivery details.`
  );
  const whatsappUrl = `${CONTACT.whatsapp}?text=${whatsappMsg}`;

  return (
    <div className="product-detail-container">
      {/* ── Breadcrumbs ── */}
      <div className="page-width">
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/products">All Products</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href={`/products/category/${categorySlug(product.category)}`}>
            {product.category}
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{product.name}</span>
        </nav>
      </div>

      {/* ── Main Detail Grid ── */}
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
                  onClick={() => {
                    setSelectedImage(img);
                    setImageFailed(false);
                  }}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    style={{ objectFit: "contain", padding: "4px" }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Ordering */}
        <div className="detail-info">
          <div className="detail-category-badge">
            <span>{product.category}</span>
          </div>

          <h1 className="detail-title">{product.name}</h1>

          <div className="detail-price-box">
            <span className="detail-price-label">Price:</span>
            <span className="detail-price-val">{currentPrice}</span>
            <span className="detail-stock-badge">In Stock · Ready to Dispatch</span>
          </div>

          {product.description && (
            <p className="detail-desc">{product.description}</p>
          )}

          {/* Variants Selector */}
          {product.variants && product.variants.length > 0 && (
            <div className="detail-variants">
              <span className="detail-option-label">Select Pack / Strength:</span>
              <div className="variant-pills">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`variant-pill ${selectedVariant === v ? "active" : ""}`}
                    onClick={() => setSelectedVariant(v)}
                  >
                    <span className="variant-title">{v.title}</span>
                    {v.priceUSD && (
                      <span className="variant-price">${v.priceUSD}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div className="detail-quantity-wrapper">
            <span className="detail-option-label">Quantity:</span>
            <div className="quantity-controls">
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="qty-val">{quantity}</span>
              <button
                type="button"
                className="qty-btn"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="detail-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button detail-whatsapp-btn"
              aria-label="Order via WhatsApp"
            >
              💬 Order via WhatsApp
            </a>
            <Link
              className="button button-outline detail-enquire-btn"
              href={`/contact?product=${encodeURIComponent(
                `${product.name} (${selectedVariant ? selectedVariant.title : "Standard"})`
              )}&qty=${quantity}`}
            >
              Request Product ↗
            </Link>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="detail-trust-box">
            <div className="detail-trust-row">
              <span className="trust-check">✓</span>
              <span><strong>100% Genuine Medicine</strong> — Direct from certified pharmaceutical labs</span>
            </div>
            <div className="detail-trust-row">
              <span className="trust-check">✓</span>
              <span><strong>Discreet Packaging</strong> — Plain packaging with complete privacy</span>
            </div>
            <div className="detail-trust-row">
              <span className="trust-check">✓</span>
              <span><strong>Fast Global Delivery</strong> — Tracked express courier service</span>
            </div>
            <div className="detail-trust-row">
              <span className="trust-check">✓</span>
              <span><strong>Personal Support</strong> — Licensed team available 8 AM to 9 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ── */}
      {related.length > 0 && (
        <section className="page-width related-products-section" aria-labelledby="related-heading">
          <div className="section-header">
            <div>
              <p className="eyebrow">RELATED MEDICATIONS</p>
              <h2 id="related-heading">Similar in {product.category}</h2>
            </div>
            <Link
              href={`/products/category/${categorySlug(product.category)}`}
              className="view-all"
            >
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
