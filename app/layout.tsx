import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f3ea",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header">
          <div className="shell header-inner">
            <Link className="brand" href="/" aria-label="Sift and Shop home">
              <span className="brand-mark">S</span>
              <span>
                Sift <i>&amp;</i> Shop
              </span>
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/#shop">Shop</Link>
              <Link href="/#category-heading">Categories</Link>
              <Link href="/#how-it-works">Our picks</Link>
            </nav>
            <Link className="header-cta" href="/#shop">
              Browse finds{" "}
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </header>
        <div id="main-content">{children}</div>
        <footer className="site-footer">
          <div className="shell footer-top">
            <div>
              <Link className="brand footer-brand" href="/">
                <span className="brand-mark">S</span>
                <span>
                  Sift <i>&amp;</i> Shop
                </span>
              </Link>
              <p>
                Curated finds, well considered.
                <br />
                Made for easier everyday choosing.
              </p>
            </div>
            <div className="footer-links">
              <strong>Explore</strong>
              <Link href="/#shop">All finds</Link>
              <Link href="/#category-heading">Categories</Link>
              <Link href="/#how-it-works">How it works</Link>
            </div>
            <div className="footer-links">
              <strong>Good to know</strong>
              <Link href="/disclosure">Affiliate disclosure</Link>
              <a href="mailto:hello@siftandshop.example">Contact</a>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>© {new Date().getFullYear()} Sift &amp; Shop</span>
            <span>Prices and availability may change on partner sites.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
