export type Platform = "Shopee" | "TikTok Shop";
export type ProductCategory =
  | "Home & Living"
  | "Tech & Desk"
  | "Beauty & Care"
  | "Everyday Carry"
  | "Sports & Fitness"
  | "Motorcycle Accessories";

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductVideo = {
  src: string;
  poster?: string;
  title: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price?: number;
  originalPrice?: number;
  category: ProductCategory;
  platform: Platform;
  affiliateUrl: string;
  image: string;
  imageAlt: string;
  images?: ProductImage[];
  video?: ProductVideo;
  features: string[];
  featured: boolean;
  badge?: string;
  publishedAt: string;
};

// ADDING A PRODUCT
// 1. Copy one object below and give it a unique slug.
// 2. Put local images in public/products. Keep `image` and `imageAlt` as the primary card image.
// 3. Add `images: [{ src, alt }, ...]` for a product-page gallery (the primary image should be first).
// 4. Add optional `video: { src, poster, title }` later for a self-hosted MP4/WebM product video.
// 5. Paste your real marketplace affiliate URL into `affiliateUrl`.
// The catalog, product page, metadata, related picks, and sitemap update automatically.
export const products: Product[] = [
  {
    slug: "rovers-fiberglass-pickleball-paddle",
    name: "Rovers Fiberglass Pickleball Paddle",
    shortDescription: "A bright paddle built for pickup games, practice, and play with friends.",
    description:
      "A pink Rovers pickleball paddle with a fiberglass face and polypropylene honeycomb core. Its lightweight, low-vibration construction is designed for easy everyday play.",
    category: "Sports & Fitness",
    platform: "Shopee",
    affiliateUrl: "https://s.shopee.ph/3qNItTt0S5",
    image: "/products/rovers/paddle.webp",
    imageAlt: "Pink Rovers pickleball paddle on a white background",
    images: [
      { src: "/products/rovers/paddle.webp", alt: "Pink Rovers pickleball paddle on a white background" },
      { src: "/products/rovers/face.webp", alt: "Rovers paddle diagram showing its fiberglass face and honeycomb core" },
      { src: "/products/rovers/players.webp", alt: "Rovers pickleball paddle shown on a court for social play" },
      { src: "/products/rovers/court.webp", alt: "Rovers pickleball paddle shown for outdoor and indoor play" },
      { src: "/products/rovers/design.webp", alt: "Pink Rovers pickleball paddle with a cat illustration" },
    ],
    features: ["Fiberglass paddle face", "Polypropylene honeycomb core", "Low-vibration construction"],
    featured: true,
    badge: "Active pick",
    publishedAt: "2026-09-22",
  },
  {
    slug: "motoviper-3d-carbon-seat-cover",
    name: "MotoViper 3D Carbon Seat Cover",
    shortDescription: "A 3D carbon-look seat cover for a sharper motorcycle finish.",
    description:
      "A MotoViper motorcycle seat cover with a textured 3D carbon-style finish. Review the listing photos and vehicle fitment on Shopee before ordering.",
    category: "Motorcycle Accessories",
    platform: "Shopee",
    affiliateUrl: "https://s.shopee.ph/3g3shCtFH0",
    image: "/products/smoke-cover/carbon-seat.webp",
    imageAlt: "Black 3D carbon-style MotoViper motorcycle seat cover",
    images: [
      { src: "/products/smoke-cover/carbon-seat.webp", alt: "Black 3D carbon-style MotoViper motorcycle seat cover" },
      { src: "/products/smoke-cover/detail.webp", alt: "Close view of the carbon-style motorcycle seat cover texture" },
      { src: "/products/smoke-cover/angle.webp", alt: "Angled view of the black motorcycle seat cover" },
      { src: "/products/smoke-cover/texture.webp", alt: "Motorcycle seat cover surface detail" },
      { src: "/products/smoke-cover/style.webp", alt: "Black carbon-style motorcycle seat cover product image" },
    ],
    features: ["3D carbon-style finish", "Motorcycle seat-cover design", "Check Shopee for vehicle fitment"],
    featured: false,
    badge: "Moto update",
    publishedAt: "2026-09-22",
  },
  {
    slug: "enflexy-mjolnir-pickleball-paddle",
    name: "Enflexy Mjolnir Pickleball Paddle",
    shortDescription: "A pink-edged carbon-fiber paddle with a unibody design.",
    description:
      "The Enflexy Mjolnir is a 16 mm pickleball paddle with a carbon-fiber construction, thermoformed unibody design, and pink edge guard.",
    category: "Sports & Fitness",
    platform: "Shopee",
    affiliateUrl: "https://s.shopee.ph/3g3shDxJH9",
    image: "/products/enflexy/paddle.webp",
    imageAlt: "Enflexy Mjolnir pickleball paddle with pink edge guard",
    images: [
      { src: "/products/enflexy/paddle.webp", alt: "Enflexy Mjolnir pickleball paddle with pink edge guard" },
      { src: "/products/enflexy/carbon.webp", alt: "Enflexy paddle detail showing carbon-fiber layers" },
      { src: "/products/enflexy/handle.webp", alt: "Enflexy paddle unibody construction detail" },
      { src: "/products/enflexy/specs.webp", alt: "Enflexy Mjolnir paddle dimensions and thickness" },
      { src: "/products/enflexy/cover.webp", alt: "Enflexy pickleball paddle cover with shoulder strap" },
    ],
    features: ["16 mm paddle thickness", "Thermoformed unibody design", "Carbon-fiber construction"],
    featured: true,
    badge: "Court favorite",
    publishedAt: "2026-09-22",
  },
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
    images: [
      { src: "/products/portable-blender.webp", alt: "Cream portable blender with strawberries on a warm kitchen counter" },
      { src: "/products/portable-blender-mango.webp", alt: "Cream and coral portable blender filled with a mango-orange smoothie" },
      { src: "/products/portable-blender-tote.webp", alt: "Cream and coral portable blender packed in a canvas tote for a day out" },
      { src: "/products/portable-blender-smoothie.webp", alt: "Cream and coral portable blender beside a fresh berry smoothie" },
    ],
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

export const additionalProductCategories: { name: ProductCategory; symbol: string; description: string }[] = [
  { name: "Sports & Fitness", symbol: "Sport", description: "Gear for active days" },
  { name: "Motorcycle Accessories", symbol: "Moto", description: "Practical upgrades for the ride" },
];

productCategories.push(...additionalProductCategories);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number | undefined) {
  if (price === undefined) return "See price on Shopee";
  return new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 }).format(price);
}

export function getProductImages(product: Product): ProductImage[] {
  return product.images?.length ? product.images : [{ src: product.image, alt: product.imageAlt }];
}
