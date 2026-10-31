"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-context";

export function ProductCard({ product }) {
  const [failed, setFailed] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const priceDisplay = product.formattedPrice || (product.priceUSD ? `$${product.priceUSD}.00` : "$120.00");
  const originalPrice = product.originalPriceUSD ? `$${product.originalPriceUSD}.00` : null;
  const savings = product.originalPriceUSD && product.priceUSD ? product.originalPriceUSD - product.priceUSD : null;
  const productHref = `/products/${product.slug || product.id}`;
  const defaultVariant = product.variants && product.variants.length > 0 ? product.variants[0] : null;

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultVariant, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <article className="product-card">
      <Link href={productHref} className="product-image" aria-label={`View ${product.name}`}>
        {/* Most Selling Badge */}
        <span className="product-badge">⭐ Most Selling</span>
        {failed ? (
          <div className="product-image-fallback">
            <span>📦</span>
            <p>{product.name}</p>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 25vw"
            onError={() => setFailed(true)}
            style={{ objectFit: "contain", padding: "16px" }}
          />
        )}
      </Link>

      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">
          <Link href={productHref}>{product.name}</Link>
        </h3>
        {product.activeSalt && (
          <p className="product-salt">
            <span className="rx-badge">RX</span> {product.activeSalt}
          </p>
        )}
        {defaultVariant && (
          <p className="product-pack-size">{defaultVariant.title}</p>
        )}

        <div className="product-price-row">
          <div>
            <span className="product-price-from">FROM</span>
            <span className="product-price-val">{priceDisplay}</span>
            {originalPrice && <span className="product-price-original">{originalPrice}</span>}
          </div>
          {savings && (
            <span className="product-savings">SAVE ${savings}.00</span>
          )}
        </div>

        <button
          className={`product-add-cart-btn ${added ? "added" : ""}`}
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? "✓ Added!" : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
