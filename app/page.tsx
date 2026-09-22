import Link from "next/link";
import Image from "next/image";
import { Catalog } from "@/components/catalog";
import { ProductCard } from "@/components/product-card";
import { products, productCategories } from "@/data/products";

export default function Home() {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);

  return (
    <main>
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Thoughtful finds, one easy place</p>
          <h1 id="hero-title">
            The good stuff,
            <br />
            <em>already found.</em>
          </h1>
          <p className="hero-lede">
            A handpicked edit of useful, beautiful finds from the shops you
            already love. Less scrolling, more choosing well.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#shop">
              Shop our picks <ArrowIcon />
            </a>
            <a className="text-link" href="#how-it-works">
              How Sift &amp; Shop works
            </a>
          </div>
          <div className="hero-proof" aria-label="Store benefits">
            <span>
              <CheckIcon /> Personally curated
            </span>
            <span>
              <CheckIcon /> Price checked
            </span>
            <span>
              <CheckIcon /> Direct to trusted shops
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              src="/products/portable-blender.webp"
              alt="A cream portable blender filled with strawberries"
              fill
              priority
              sizes="(max-width: 900px) 92vw, 46vw"
            />
          </div>
          <div className="floating-note floating-note-top">
            <span className="note-icon">✦</span>
            <div>
              <strong>Editor&apos;s pick</strong>
              <small>Small but mighty</small>
            </div>
          </div>
          <div className="floating-note floating-note-bottom">
            <span className="platform-dot" />
            <div>
              <small>Available on Shopee</small>
              <strong>From ₱899</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Shopping principles">
        <div>
          <span>Useful finds</span>
          <b>✦</b>
          <span>Honest picks</span>
          <b>✦</b>
          <span>Everyday upgrades</span>
          <b>✦</b>
          <span>Worth sharing</span>
          <b>✦</b>
          <span>Useful finds</span>
          <b>✦</b>
          <span>Honest picks</span>
          <b>✦</b>
        </div>
      </section>

      <section className="section shell" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The shortlist</p>
            <h2 id="featured-heading">Currently loving</h2>
          </div>
          <a className="text-link desktop-link" href="#shop">
            See all finds <ArrowIcon />
          </a>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <section
        className="category-section shell"
        aria-labelledby="category-heading"
      >
        <div className="section-heading centered-heading">
          <div>
            <p className="eyebrow">Find your kind of good</p>
            <h2 id="category-heading">Browse by mood</h2>
          </div>
        </div>
        <div className="category-grid">
          {productCategories.map((category) => (
            <a key={category.name} href="#shop" className="category-card">
              <span className="category-symbol" aria-hidden="true">
                {category.symbol}
              </span>
              <strong>{category.name}</strong>
              <small>{category.description}</small>
              <span className="circle-arrow">
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        className="section shell catalog-section"
        id="shop"
        aria-labelledby="shop-heading"
      >
        <div className="section-heading catalog-heading">
          <div>
            <p className="eyebrow">All the good finds</p>
            <h2 id="shop-heading">Shop the edit</h2>
          </div>
          <p>
            Every pick earns its spot—useful, well-loved, and worth the click.
          </p>
        </div>
        <Catalog products={products} />
      </section>

      <section
        className="how-section"
        id="how-it-works"
        aria-labelledby="how-heading"
      >
        <div className="shell how-grid">
          <div>
            <p className="eyebrow eyebrow-light">A better way to browse</p>
            <h2 id="how-heading">
              We scroll,
              <br />
              so you don&apos;t have to.
            </h2>
          </div>
          <div className="steps">
            <div>
              <span>01</span>
              <h3>We spot it</h3>
              <p>
                We browse trusted marketplaces for products that solve real
                everyday needs.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>We vet it</h3>
              <p>
                We look for practical design, fair value, and the details that
                make a find worthwhile.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>You choose it</h3>
              <p>
                See the details here, then shop directly from Shopee or TikTok
                Shop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="disclosure shell">
        <span className="disclosure-mark">P</span>
        <div>
          <h2>A small note on affiliate links</h2>
          <p>
            Some links on Sift &amp; Shop are affiliate links. If you buy
            through them, we may earn a small commission—at no extra cost to
            you. It helps us keep finding the good stuff.
          </p>
        </div>
        <Link className="text-link" href="/disclosure">
          Learn more <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m5 10 3 3 7-7" />
    </svg>
  );
}
