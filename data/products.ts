export type Platform = "Shopee" | "TikTok Shop";
export type ProductCategory = "Home & Living" | "Tech & Desk" | "Beauty & Care" | "Everyday Carry";

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  platform: Platform;
  affiliateUrl: string;
  image: string;
  imageAlt: string;
  features: string[];
  featured: boolean;
  badge?: string;
  publishedAt: string;
};

// ADDING A PRODUCT
// 1. Copy one object below and give it a unique slug.
// 2. Place a square WebP/JPG image in public/products and set `image` to its path.
// 3. Paste your real marketplace affiliate URL into `affiliateUrl`.
// The catalog, product page, metadata, related picks, and sitemap update automatically.
export const products: Product[] = [
  {
    slug: "portable-blend-go",
    name: "Blend & Go Portable Blender",
    shortDescription: "Fresh smoothies wherever the day takes you.",
    description: "A compact rechargeable blender made for quick breakfasts and afternoon pick-me-ups. Its travel-friendly cup, simple one-button control, and easy-clean design make healthy habits feel effortless.",
    price: 899,
    originalPrice: 1199,
    category: "Home & Living",
    platform: "Shopee",
    affiliateUrl: "https://shopee.ph/",
    image: "/products/portable-blender.webp",
    imageAlt: "Cream portable blender with strawberries on a warm kitchen counter",
    features: ["USB rechargeable", "Travel-friendly leak-resistant lid", "Easy-rinse removable cup"],
    featured: true,
    badge: "Editor’s pick",
    publishedAt: "2026-09-20",
  },
  {
    slug: "peach-keys-wireless-keyboard",
    name: "Peach Keys Wireless Keyboard",
    shortDescription: "A softer, quieter way to get things done.",
    description: "A compact wireless keyboard with satisfyingly tactile keys and a warm two-tone finish. Designed to keep small desks tidy while making long work sessions a little more pleasant.",
    price: 1499,
    originalPrice: 1799,
    category: "Tech & Desk",
    platform: "TikTok Shop",
    affiliateUrl: "https://shop.tiktok.com/",
    image: "/products/wireless-keyboard.webp",
    imageAlt: "Ivory wireless keyboard with peach keycaps on a warm wooden desk",
    features: ["Multi-device Bluetooth pairing", "Compact space-saving layout", "Long-lasting rechargeable battery"],
    featured: true,
    badge: "Desk favorite",
    publishedAt: "2026-09-18",
  },
  {
    slug: "cloudsound-wireless-headphones",
    name: "CloudSound Wireless Headphones",
    shortDescription: "Comfortable focus with less outside noise.",
    description: "Cushioned over-ear headphones with a clean silhouette, balanced sound, and a comfortable lightweight fit for commutes, deep work, or slow weekend listening.",
    price: 1299,
    originalPrice: 1699,
    category: "Tech & Desk",
    platform: "Shopee",
    affiliateUrl: "https://shopee.ph/",
    image: "/products/wireless-headphones.webp",
    imageAlt: "Minimal sand beige wireless headphones on a cream studio plinth",
    features: ["Soft memory-foam cushions", "Foldable adjustable design", "Up to 30 hours playback"],
    featured: true,
    badge: "Best value",
    publishedAt: "2026-09-16",
  },
  {
    slug: "amber-mist-aroma-diffuser",
    name: "Amber Mist Aroma Diffuser",
    shortDescription: "A calmer corner, in just a few drops.",
    description: "A quietly beautiful ultrasonic diffuser that adds a gentle veil of fragrance to bedrooms and workspaces. The amber vessel and pale wood top blend naturally into warm interiors.",
    price: 749,
    category: "Home & Living",
    platform: "TikTok Shop",
    affiliateUrl: "https://shop.tiktok.com/",
    image: "/products/aroma-diffuser.webp",
    imageAlt: "Amber glass aroma diffuser with pale wood cap on a bedside table",
    features: ["Quiet ultrasonic mist", "Soft ambient night light", "Automatic waterless shutoff"],
    featured: true,
    badge: "Cozy find",
    publishedAt: "2026-09-14",
  },
  {
    slug: "slow-morning-coffee-maker",
    name: "Slow Morning Coffee Maker",
    shortDescription: "A compact ritual for better mornings.",
    description: "A small-footprint drip coffee maker for apartments, dorms, and uncluttered counters. Brew a smooth everyday pot without a complicated setup or oversized machine.",
    price: 1199,
    originalPrice: 1399,
    category: "Home & Living",
    platform: "Shopee",
    affiliateUrl: "https://shopee.ph/",
    image: "/products/coffee-maker.webp",
    imageAlt: "Compact cream drip coffee maker on a pale stone counter",
    features: ["Compact four-cup capacity", "Reusable washable filter", "Keep-warm plate"],
    featured: false,
    badge: "Morning pick",
    publishedAt: "2026-09-12",
  },
  {
    slug: "mellow-glow-table-lamp",
    name: "Mellow Glow Cordless Lamp",
    shortDescription: "Warm, portable light for every little corner.",
    description: "A rechargeable mushroom lamp with three gentle brightness levels. Move it from bedside to balcony or dinner table whenever a softer pool of light is all you need.",
    price: 679,
    category: "Home & Living",
    platform: "TikTok Shop",
    affiliateUrl: "https://shop.tiktok.com/",
    image: "/products/table-lamp.webp",
    imageAlt: "Muted terracotta cordless mushroom lamp glowing on a cream table",
    features: ["Three touch-controlled levels", "Cordless rechargeable design", "Warm eye-friendly light"],
    featured: false,
    badge: "Trending",
    publishedAt: "2026-09-10",
  },
  {
    slug: "day-out-canvas-tote",
    name: "Day Out Canvas Tote",
    shortDescription: "Structured enough for work, easy enough for weekends.",
    description: "A roomy canvas carryall with comfortable contrast handles and enough structure to stand upright. It fits the everyday lineup without feeling bulky.",
    price: 549,
    category: "Everyday Carry",
    platform: "Shopee",
    affiliateUrl: "https://shopee.ph/",
    image: "/products/canvas-tote.webp",
    imageAlt: "Natural oatmeal canvas tote with rust handles on a warm plaster bench",
    features: ["Durable heavyweight canvas", "Interior pocket for small items", "Comfortable shoulder-length handles"],
    featured: false,
    badge: "Everyday essential",
    publishedAt: "2026-09-08",
  },
  {
    slug: "smooth-start-styling-brush",
    name: "Smooth Start Styling Brush",
    shortDescription: "Quick, polished hair without the full routine.",
    description: "A cordless heated styling brush designed for easy touch-ups and gentle smoothing. The compact shape slips neatly into a drawer or travel bag.",
    price: 999,
    originalPrice: 1299,
    category: "Beauty & Care",
    platform: "TikTok Shop",
    affiliateUrl: "https://shop.tiktok.com/",
    image: "/products/styling-brush.webp",
    imageAlt: "Warm ivory cordless hair styling brush on a travertine vanity",
    features: ["Three adjustable heat levels", "Anti-scald comb design", "Cordless USB-C charging"],
    featured: false,
    badge: "Quick routine",
    publishedAt: "2026-09-06",
  },
];

export const productCategories: { name: ProductCategory; symbol: string; description: string }[] = [
  { name: "Home & Living", symbol: "⌂", description: "Small comforts for better spaces" },
  { name: "Tech & Desk", symbol: "⌁", description: "Smart upgrades for focused days" },
  { name: "Beauty & Care", symbol: "◇", description: "Easy rituals that feel good" },
  { name: "Everyday Carry", symbol: "○", description: "Useful companions on the go" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(price);
}
