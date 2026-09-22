"use client";

import { useSyncExternalStore } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/data/products";
import { getDailyIndex, subscribeToDailyRotation } from "@/lib/daily";

export function DailyShortlist({ products }: { products: Product[] }) {
  const startingAt = useSyncExternalStore(subscribeToDailyRotation, () => getDailyIndex(products.length), () => 0);
  const shortlist = [...products.slice(startingAt), ...products.slice(0, startingAt)];

  return (
    <section className="section shell shortlist-section" aria-labelledby="featured-heading">
      <div className="section-heading"><div><p className="eyebrow">The shortlist</p><h2 id="featured-heading">Currently loving</h2></div><a className="text-link desktop-link" href="#shop">See all finds <ArrowIcon /></a></div>
      <div className="featured-grid daily-shortlist-grid">{shortlist.map((product, index) => <div className="shortlist-card" key={product.slug}><ProductCard product={product} priority={index < 2} /></div>)}</div>
    </section>
  );
}

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
