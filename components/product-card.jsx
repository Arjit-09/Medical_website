'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { CATEGORY_COLORS, CATEGORY_ICONS } from '../data/products';

export function ProductCard({ product, index = 0 }) {
  const [imgError, setImgError] = useState(false);

  const catStyle = CATEGORY_COLORS[product.category] || {
    bg: '#f1f5f9',
    color: '#475569',
    border: 'rgba(71,85,105,0.2)'
  };
  const catIcon = CATEGORY_ICONS[product.category] || '💊';
  const href = `/products/${product.slug || product.id}`;
  const displayImage = imgError || !product.image ? '/images/product-tablets.jpg' : product.image;

  return (
    <Link
      className="product-card is-visible"
      href={href}
      id={`product-card-${product.slug || product.id || index}`}
      style={{
        animationDelay: `${Math.min(index * 0.05, 0.4)}s`,
        opacity: 1,
        visibility: 'visible'
      }}
    >
      {/* Product Image Frame */}
      <div className="product-card-image" style={{ background: '#f8fafc', position: 'relative' }}>
        <Image
          src={displayImage}
          alt={product.name}
          fill
          style={{ objectFit: 'contain', padding: '12px' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
          onError={() => setImgError(true)}
          priority={index < 4}
        />
        {product.inStock && (
          <span className="product-badge badge-new" style={{ top: '12px', left: '12px', background: 'rgba(255,255,255,0.92)', color: '#047857', border: '1px solid rgba(4,120,87,0.2)' }}>
            ● In Stock
          </span>
        )}
        {product.variants && product.variants.length > 1 && (
          <span style={{
            position: 'absolute',
            bottom: '10px',
            right: '12px',
            fontSize: '11px',
            fontWeight: 600,
            background: 'rgba(15, 23, 42, 0.75)',
            color: '#ffffff',
            padding: '2px 8px',
            borderRadius: '12px',
            backdropFilter: 'blur(4px)'
          }}>
            {product.variants.length} pack sizes
          </span>
        )}
      </div>

      {/* Product Body */}
      <div className="product-card-body">
        <div
          className="product-category-tag"
          style={{
            background: catStyle.bg,
            color: catStyle.color,
            border: `1px solid ${catStyle.border || 'transparent'}`,
            padding: '4px 10px',
            borderRadius: '9999px',
            width: 'fit-content',
            fontSize: '12px',
            fontWeight: 600
          }}
        >
          {catIcon} {product.category}
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '8px 0 6px', color: '#0f172a' }}>
          {product.name}
        </h3>

        <p style={{
          fontSize: '13px',
          lineHeight: 1.5,
          color: '#64748b',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          marginBottom: '14px'
        }}>
          {product.description || 'Authentic pharmaceutical formulation. Confirm dosage, stock and bulk pricing with our pharmacy team.'}
        </p>

        {/* Pricing & CTA */}
        <div className="product-card-footer" style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
          <div className="product-price">
            <span className="price-label" style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              From
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span className="price-value" style={{ fontSize: '19px', fontWeight: 800, color: '#4338ca' }}>
                ${product.priceUSD ? product.priceUSD.toFixed(2) : '0.00'}
              </span>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                (₹{product.priceINR ? product.priceINR.toLocaleString('en-IN') : '0'})
              </span>
            </div>
          </div>
          <span
            className="product-card-action"
            aria-label={`View ${product.name}`}
            style={{
              background: '#4f46e5',
              color: '#ffffff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              transition: 'transform 0.2s ease, background 0.2s ease'
            }}
          >
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
