"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { formatPrice, type Product } from "@/data/products";
import { getDailyIndex, subscribeToDailyRotation } from "@/lib/daily";

export function DailyHero({ products }: { products: Product[] }) {
  const index = useSyncExternalStore(subscribeToDailyRotation, () => getDailyIndex(products.length), () => 0);
  const product = products[index] ?? products[0];
  if (!product) return null;

  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy hero-enter"><p className="eyebrow">Today&apos;s considered find</p><h1 id="hero-title">The good stuff,<br /><em>already found.</em></h1><p className="hero-lede">A handpicked edit of useful, beautiful finds from the shops you already love. Less scrolling, more choosing well.</p><div className="hero-actions"><a className="button button-primary" href="#shop">Shop our picks <ArrowIcon /></a><a className="text-link" href="#how-it-works">How Sift &amp; Shop works</a></div><div className="hero-proof" aria-label="Store benefits"><span><CheckIcon /> Personally curated</span><span><CheckIcon /> Price checked</span><span><CheckIcon /> Direct to trusted shops</span></div></div>
      <div className="hero-visual hero-enter hero-enter-delayed" key={product.slug}>
        <div className="hero-image-wrap"><Image src={product.image} alt={product.imageAlt} fill priority sizes="(max-width: 900px) 92vw, 46vw" /></div>
        <div className="floating-note floating-note-top"><span className="note-icon">✦</span><div><strong>Today&apos;s find</strong><small>{product.shortDescription}</small></div></div>
        <div className="floating-note floating-note-bottom"><span className="platform-dot" /><div><small>Available on {product.platform}</small><strong>From {formatPrice(product.price)}</strong></div></div>
      </div>
    </section>
  );
}

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
function CheckIcon() { return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>; }
