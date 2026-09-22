import Link from "next/link";
import { Catalog } from "@/components/catalog";
import { DailyHero } from "@/components/daily-hero";
import { DailyShortlist } from "@/components/daily-shortlist";
import { Reveal } from "@/components/reveal";
import { ScrollToTop } from "@/components/scroll-to-top";
import { products, productCategories } from "@/data/products";

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main>
      <DailyHero products={featuredProducts} />

      <section className="marquee" aria-label="Shopping principles">
        <div><span>Useful finds</span><b>✦</b><span>Honest picks</span><b>✦</b><span>Everyday upgrades</span><b>✦</b><span>Worth sharing</span><b>✦</b><span>Useful finds</span><b>✦</b><span>Honest picks</span><b>✦</b></div>
      </section>

      <DailyShortlist products={featuredProducts} />

      <Reveal className="category-section shell">
        <div className="section-heading centered-heading"><div><p className="eyebrow">Find your kind of good</p><h2 id="category-heading">Browse by mood</h2></div></div>
        <div className="category-grid">
          {productCategories.map((category) => (
            <a key={category.name} href="#shop" className="category-card">
              <span className="category-symbol" aria-hidden="true">{category.symbol}</span><strong>{category.name}</strong><small>{category.description}</small><span className="circle-arrow"><ArrowIcon /></span>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal className="section shell catalog-section" id="shop">
        <div className="section-heading catalog-heading"><div><p className="eyebrow">All the good finds</p><h2 id="shop-heading">Shop the edit</h2></div><p>Every pick earns its spot—useful, well-loved, and worth the click.</p></div>
        <Catalog products={products} />
      </Reveal>

      <Reveal className="how-section" id="how-it-works">
        <div className="shell how-grid">
          <div><p className="eyebrow eyebrow-light">A better way to browse</p><h2 id="how-heading">We scroll,<br />so you don&apos;t have to.</h2></div>
          <div className="steps"><div><span>01</span><h3>We spot it</h3><p>We browse trusted marketplaces for products that solve real everyday needs.</p></div><div><span>02</span><h3>We vet it</h3><p>We look for practical design, fair value, and the details that make a find worthwhile.</p></div><div><span>03</span><h3>You choose it</h3><p>See the details here, then shop directly from Shopee or TikTok Shop.</p></div></div>
        </div>
      </Reveal>

      <Reveal className="disclosure shell">
        <span className="disclosure-mark">S</span><div><h2>A small note on affiliate links</h2><p>Some links on Sift &amp; Shop are affiliate links. If you buy through them, we may earn a small commission—at no extra cost to you. It helps us keep finding the good stuff.</p></div><Link className="text-link" href="/disclosure">Learn more <ArrowIcon /></Link>
      </Reveal>
      <ScrollToTop />
    </main>
  );
}

function ArrowIcon() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
