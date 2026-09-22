import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { formatPrice, getProduct, products } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductPage({params,}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  
  if (!product) notFound();

  const related = products
    .filter(
      (item) =>
        item.slug !== product.slug &&
        (item.category === product.category || item.featured),
    )
    .slice(0, 4);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${siteConfig.url}${product.image}`,
    description: product.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "PHP",
      price: product.price,
      url: product.affiliateUrl,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <main className="product-page shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/#shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>
      <div className="product-detail">
        <div className="product-main-image">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 92vw, 52vw"
          />
        </div>
        <div className="product-copy">
          <div className="product-meta">
            <span>{product.category}</span>
            <span>•</span>
            <span
              className={`platform-pill ${product.platform === "TikTok Shop" ? "tiktok" : ""}`}
            >
              {product.platform}
            </span>
          </div>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-tagline">{product.shortDescription}</p>
          <div className="detail-price">
            {formatPrice(product.price)}
            {product.originalPrice && (
              <span className="old-price">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <a
            className="button button-primary affiliate-button"
            href={product.affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            Shop on {product.platform}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <p className="micro-disclosure">
            Affiliate link · You won&apos;t pay extra, but we may earn a small
            commission.
          </p>
          <p className="product-description">{product.description}</p>
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <section className="related" aria-labelledby="related-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">You might also like</p>
            <h2 id="related-heading">More good finds</h2>
          </div>
        </div>
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
