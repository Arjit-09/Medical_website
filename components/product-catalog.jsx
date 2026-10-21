'use client';

import { useMemo, useState, useEffect } from 'react';
import { CATALOG_CATEGORIES, CATEGORY_ICONS, PRODUCTS } from '../data/products';
import { ProductCard } from './product-card';

const PAGE_SIZE = 12;

export default function ProductCatalog({ initialCategory = 'All Products' }) {
  const [category, setCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const query = params.get('q') || params.get('search');
      const cat = params.get('category');
      if (query) setSearchTerm(query);
      if (cat && (cat === 'All Products' || CATALOG_CATEGORIES.includes(cat))) {
        setCategory(cat);
      }
    }
  }, []);

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter(p => {
      const matchesCat = category === 'All Products' || p.category === category;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch = !term ||
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        (p.description && p.description.toLowerCase().includes(term));
      return matchesCat && matchesSearch;
    });

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (sortBy === 'name-az') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [category, searchTerm, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visibleProducts = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function updateCategory(value) {
    setCategory(value);
    setPage(1);
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    setPage(1);
  }

  return (
    <>
      {/* Search & Sort Controls */}
      <div className="catalog-controls-top" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {/* Search Input Box */}
        <div className="hero-search-box" style={{ maxWidth: '440px', margin: 0, flex: 1, minWidth: '280px' }}>
          <span className="hero-search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search medicine name, salt or indication..."
            className="hero-search-input"
            aria-label="Filter products"
            id="catalog-search-input"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setPage(1); }}
              style={{ padding: '6px 12px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600, background: 'transparent', border: 'none', cursor: 'pointer' }}
              aria-label="Clear search"
            >
              ✕ Clear
            </button>
          )}
        </div>

        {/* Sort Dropdown & Results Counter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f8fafc', padding: '6px 14px', borderRadius: '9999px', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              id="catalog-sort-select"
              style={{
                border: 'none',
                background: 'transparent',
                fontSize: '13px',
                fontWeight: 600,
                color: '#0f172a',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured / All</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
            </select>
          </div>

          <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>
            Showing <b style={{ color: '#0f172a' }}>{filtered.length}</b> of {PRODUCTS.length} listings
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="catalog-tabs-wrap">
        <div className="catalog-tabs" role="group" aria-label="Filter products by category">
          <button
            type="button"
            id="filter-all"
            aria-pressed={category === 'All Products'}
            className={`catalog-filter-btn${category === 'All Products' ? ' active' : ''}`}
            onClick={() => updateCategory('All Products')}
          >
            All Products
          </button>
          {CATALOG_CATEGORIES.map(item => (
            <button
              key={item}
              type="button"
              id={`filter-${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
              aria-pressed={category === item}
              className={`catalog-filter-btn${category === item ? ' active' : ''}`}
              onClick={() => updateCategory(item)}
            >
              <span>{CATEGORY_ICONS[item] || '💊'}</span> {item}
            </button>
          ))}
        </div>
      </div>

      {/* Results Subheading */}
      <div className="catalog-results" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', margin: '20px 0 16px' }}>
        <span style={{ fontSize: '14px', color: '#475569' }}>
          <b>{filtered.length}</b> product listings
          {category !== 'All Products' && <> in <em style={{ color: '#4338ca', fontStyle: 'normal', fontWeight: 600 }}>{category}</em></>}
          {searchTerm && <> matching &ldquo;<b>{searchTerm}</b>&rdquo;</>}
        </span>
        <span style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          Verified Care &amp; Cure authentic pharmaceutical catalogue
        </span>
      </div>

      {/* Product Grid */}
      {visibleProducts.length > 0 ? (
        <div className="product-grid catalog-grid" style={{ minHeight: '380px' }}>
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.slug || product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="empty-state" style={{ padding: '60px 20px', textAlign: 'center', background: '#f8fafc', borderRadius: '24px', border: '1px dashed #cbd5e1', margin: '30px 0' }}>
          <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🔍</span>
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>No matching medicines found</h2>
          <p style={{ color: '#64748b', maxWidth: '480px', margin: '0 auto 20px' }}>
            {searchTerm
              ? `No products matching "${searchTerm}". Try checking the salt name, active dosage, or browse all categories.`
              : 'Try selecting another category or speak with our pharmacy team directly.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {searchTerm && (
              <button
                type="button"
                className="button button-outline"
                onClick={() => { setSearchTerm(''); setPage(1); }}
                id="catalog-clear-search"
              >
                Clear Search
              </button>
            )}
            <button
              type="button"
              className="button button-primary"
              onClick={() => { updateCategory('All Products'); setSearchTerm(''); }}
              id="catalog-show-all"
            >
              View all products
            </button>
          </div>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '36px', padding: '16px 0', borderTop: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>
            Page <b style={{ color: '#0f172a' }}>{page}</b> of {totalPages} ({filtered.length} items)
          </span>
          <div className="pagination-buttons" style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              disabled={page === 1}
              onClick={() => {
                setPage(v => v - 1);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              aria-label="Previous page"
              id="pagination-prev"
              className="button button-glass"
              style={{
                height: '42px',
                minHeight: '42px',
                padding: '0 20px',
                borderRadius: '9999px',
                opacity: page === 1 ? 0.45 : 1,
                cursor: page === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              ← Prev
            </button>
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => {
                setPage(v => v + 1);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              aria-label="Next page"
              id="pagination-next"
              className="button button-primary"
              style={{
                height: '42px',
                minHeight: '42px',
                padding: '0 20px',
                borderRadius: '9999px',
                opacity: page === totalPages ? 0.45 : 1,
                cursor: page === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      <p className="catalog-note" style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', marginTop: '24px' }}>
        Prices shown are reference listings from Care &amp; Cure Pharmaceuticals. All prescription medications require validation and confirmation before order dispatch.
      </p>
    </>
  );
}
