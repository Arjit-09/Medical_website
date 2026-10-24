"use client";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CATALOG_CATEGORIES, PRODUCTS } from "../data/products";
import { ProductCard } from "./product-card";
import { Suspense } from "react";
function Catalog({ initialCategory = "All products" }) {
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("q") || "");
  const [category, setCategory] = useState(
    CATALOG_CATEGORIES.includes(params.get("category"))
      ? params.get("category")
      : initialCategory,
  );
  const [page, setPage] = useState(1);
  const list = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (category === "All products" || p.category === category) &&
          `${p.name} ${p.category}`
            .toLowerCase()
            .includes(search.trim().toLowerCase()),
      ),
    [search, category],
  );
  const pages = Math.max(1, Math.ceil(list.length / 12));
  return (
    <>
      <div className="catalog-controls">
        <label className="search-field">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            aria-label="Search products"
            placeholder="Search by product name…"
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </label>
        <label className="category-select">
          <span>Category</span>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            {["All products", ...CATALOG_CATEGORIES].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="results-count" role="status">
        {list.length} products{search && ` matching “${search}”`}
      </p>
      {list.length ? (
        <div className="product-grid">
          {list.slice((page - 1) * 12, page * 12).map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try another name or send us a product request.</p>
          <Link
            className="button"
            href={`/contact?type=missing&product=${encodeURIComponent(search)}`}
          >
            Request this product
          </Link>
        </div>
      )}
      {pages > 1 && (
        <div className="pagination">
          <button
            className="button button-outline"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            ← Previous
          </button>
          <span>
            Page {page} of {pages}
          </span>
          <button
            className="button button-outline"
            disabled={page === pages}
            onClick={() => setPage(page + 1)}
          >
            Next →
          </button>
        </div>
      )}
      <p className="catalog-note">
        Availability and pricing are confirmed by our team before an order is
        placed.
      </p>
    </>
  );
}
export default function ProductCatalog(props) {
  return (
    <Suspense fallback={<p>Loading catalogue…</p>}>
      <Catalog {...props} />
    </Suspense>
  );
}
