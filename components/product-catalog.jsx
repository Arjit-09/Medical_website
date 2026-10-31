"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CATALOG_CATEGORIES, PRODUCTS } from "../data/products";
import { ProductCard } from "./product-card";
import { Suspense } from "react";

const CATEGORY_COUNTS = CATALOG_CATEGORIES.reduce((acc, cat) => {
  acc[cat] = PRODUCTS.filter((p) => p.category === cat).length;
  return acc;
}, {});

function Catalog({ initialCategory = "All products" }) {
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const [selectedCategories, setSelectedCategories] = useState(
    params.get("category") && CATALOG_CATEGORIES.includes(params.get("category"))
      ? [params.get("category")]
      : initialCategory && CATALOG_CATEGORIES.includes(initialCategory)
      ? [initialCategory]
      : []
  );
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);

  function toggleCategory(cat) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
    setPage(1);
  }

  function resetCategories() {
    setSelectedCategories([]);
    setPage(1);
  }

  const list = useMemo(() => {
    let filtered = PRODUCTS.filter((p) => {
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchSearch =
        !search.trim() ||
        `${p.name} ${p.category}`.toLowerCase().includes(search.trim().toLowerCase());
      return matchCategory && matchSearch;
    });

    if (sort === "price-asc") filtered = [...filtered].sort((a, b) => (a.priceUSD || 0) - (b.priceUSD || 0));
    else if (sort === "price-desc") filtered = [...filtered].sort((a, b) => (b.priceUSD || 0) - (a.priceUSD || 0));
    else if (sort === "name-asc") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [search, selectedCategories, sort]);

  const PER_PAGE = 12;
  const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));

  return (
    <div className="catalog-layout">
      {/* Sidebar */}
      <aside className="catalog-sidebar" aria-label="Filter products">
        <div className="sidebar-section">
          <div className="sidebar-section-header">
            <h3>Categories</h3>
            <button className="sidebar-reset-btn" onClick={resetCategories} aria-label="Reset category filter">Reset</button>
          </div>
          <div className="sidebar-category-list">
            {CATALOG_CATEGORIES.map((cat) => (
              <label key={cat} className="sidebar-category-item">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  aria-label={`Filter by ${cat}`}
                />
                <span className="sidebar-cat-name">{cat}</span>
                <span className="sidebar-cat-count">{CATEGORY_COUNTS[cat] || 0}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="catalog-main">
        {/* Controls Row */}
        <div className="catalog-top-bar">
          <label className="catalog-search-field">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" />
            </svg>
            <input
              aria-label="Search products"
              placeholder="Search by product name…"
              type="search"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </label>
          <div className="catalog-sort-row">
            <p className="results-count" role="status">Showing {list.length} products</p>
            <label className="sort-label">
              Sort:
              <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }} aria-label="Sort products">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A–Z</option>
              </select>
            </label>
          </div>
        </div>

        {list.length ? (
          <div className="product-grid">
            {list.slice((page - 1) * PER_PAGE, page * PER_PAGE).map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No products found</h3>
            <p>Try another name or send us a product request.</p>
            <Link className="button" href={`/contact?type=missing&product=${encodeURIComponent(search)}`}>
              Buy this product
            </Link>
          </div>
        )}

        {pages > 1 && (
          <div className="pagination">
            <button className="button button-outline" disabled={page === 1} onClick={() => setPage(page - 1)}>← Previous</button>
            <span>Page {page} of {pages}</span>
            <button className="button button-outline" disabled={page === pages} onClick={() => setPage(page + 1)}>Next →</button>
          </div>
        )}
        <p className="catalog-note">Availability and pricing are confirmed by our team before an order is placed.</p>
      </div>
    </div>
  );
}

export default function ProductCatalog(props) {
  return (
    <Suspense fallback={<p>Loading catalogue…</p>}>
      <Catalog {...props} />
    </Suspense>
  );
}
