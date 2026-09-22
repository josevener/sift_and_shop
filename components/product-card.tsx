import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <article className="product-card">
      <Link className="product-image-link" href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 620px) 46vw, (max-width: 900px) 45vw, 24vw" priority={priority} />
      </Link>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span>•</span>
          <span className={`platform-pill ${product.platform === "TikTok Shop" ? "tiktok" : ""}`}>{product.platform}</span>
        </div>
        <h3>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="product-price-row">
          <div>
            <span className="price">{formatPrice(product.price)}</span>
            {product.originalPrice && <span className="old-price">{formatPrice(product.originalPrice)}</span>}
          </div>
          <a className="shop-icon" href={product.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer" aria-label={`Shop ${product.name} on ${product.platform}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </div>
    </article>
  );
}
