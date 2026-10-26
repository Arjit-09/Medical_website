"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ProductCard({ product }) {
  const [failed, setFailed] = useState(false);
  const priceDisplay = product.formattedPrice || (product.priceUSD ? `$${product.priceUSD}.00` : "$120.00");
  const productHref = `/products/${product.slug || product.id}`;

  return (
    <article className="product-card">
      <Link
        href={productHref}
        className="product-image"
        aria-label={`View ${product.name}`}
      >
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
          <Link href={productHref}>
            {product.name}
          </Link>
        </h3>

        <div className="product-price">
          <span className="from">From</span> {priceDisplay}
        </div>

        <Link
          className="product-enquire"
          href={productHref}
          aria-label={`Choose options for ${product.name}`}
        >
          Choose options
        </Link>
      </div>
    </article>
  );
}
