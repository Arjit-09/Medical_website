"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export function ProductCard({ product }) {
  const [failed, setFailed] = useState(false);
  return (
    <article className="product-card">
      <Link
        href={`/products/${product.slug || product.id}`}
        className="product-image"
        aria-label={`View ${product.name}`}
      >
        {failed ? (
          <span>Product image unavailable</span>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 540px) 50vw, (max-width: 900px) 33vw, 25vw"
            onError={() => setFailed(true)}
          />
        )}
      </Link>
      <div className="product-body">
        <p className="product-category">{product.category}</p>
        <h3>
          <Link href={`/products/${product.slug || product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="product-pack">
          {product.dosage !== "Standard"
            ? product.dosage
            : "Contact us for product details"}
        </p>
        <Link
          className="product-enquire"
          href={`/contact?product=${encodeURIComponent(product.name)}`}
        >
          Enquire now <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
