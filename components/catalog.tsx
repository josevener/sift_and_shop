"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./product-card";
import type { Product } from "@/data/products";

type SortOption = "featured" | "newest" | "price-low" | "price-high";

export function Catalog({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<SortOption>("featured");
  const filters = ["All", ...Array.from(new Set(products.map((product) => product.category))), "Shopee", "TikTok Shop"];

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products
      .filter((product) => {
        const matchesQuery = !normalizedQuery || `${product.name} ${product.shortDescription} ${product.category} ${product.platform}`.toLowerCase().includes(normalizedQuery);
        const matchesFilter = filter === "All" || product.category === filter || product.platform === filter;
        return matchesQuery && matchesFilter;
      })
      .sort((a, b) => {
        if (sort === "newest") return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
        if (sort === "price-low") return (a.price ?? Number.POSITIVE_INFINITY) - (b.price ?? Number.POSITIVE_INFINITY);
        if (sort === "price-high") return (b.price ?? Number.NEGATIVE_INFINITY) - (a.price ?? Number.NEGATIVE_INFINITY);
        return Number(b.featured) - Number(a.featured) || Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
      });
  }, [filter, products, query, sort]);

  function reset() { setQuery(""); setFilter("All"); setSort("featured"); }

  return (
    <div>
      <div className="catalog-toolbar">
        <label className="search-wrap">
          <span className="sr-only">Search products</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 4 4" />
          </svg>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the edit…" type="search" />
        </label>
        <div className="filter-row">
          <div className="filter-pills" aria-label="Filter products">
            {filters.map((item) => <button key={item} type="button" className={`filter-pill ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>)}
          </div>
          <label>
            <span className="sr-only">Sort products</span>
            <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value as SortOption)}>
              <option value="featured">Featured first</option>
              <option value="newest">Newest first</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>
        <p className="results-label" aria-live="polite">Showing {visibleProducts.length} {visibleProducts.length === 1 ? "find" : "finds"}</p>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
        {visibleProducts.length === 0 && 
          <div className="empty-state">
            <h3>No finds matched that search.</h3>
            <p>Try another word or clear your filters.</p>
            <button type="button" onClick={reset}>Reset the catalog</button>
          </div>
        }
      </div>
    </div>
  );
}
