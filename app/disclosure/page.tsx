import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: "How affiliate links support Sift & Shop.",
};

export default function DisclosurePage() {
  return (
    <main className="simple-page shell">
      <p className="eyebrow">Good to know</p>
      <h1>Affiliate disclosure</h1>
      <p>
        Sift &amp; Shop is an independent product-curation website. Some of the
        links on this site are affiliate links. When you follow one of these
        links and complete a purchase on a partner marketplace, we may receive a
        small commission at no additional cost to you.
      </p>
      <h2>Our editorial promise</h2>
      <p>
        Affiliate relationships do not determine which products appear in our
        edit. Our goal is to make discovery easier by presenting products
        clearly and thoughtfully. Product prices, availability, shipping terms,
        warranties, and returns are controlled by the marketplace seller and may
        change after publication.
      </p>
      <h2>Before you buy</h2>
      <p>
        Please confirm the final price, seller rating, product specifications,
        and delivery information on Shopee, TikTok Shop, or the applicable
        partner site before completing your purchase.
      </p>
    </main>
  );
}
