export type Platform = "Shopee" | "TikTok Shop";
export type ProductCategory = "Sports & Fitness" | "Motorcycle Accessories";

export type ProductImage = { src: string; alt: string };
export type ProductVideo = { src: string; poster?: string; title: string };

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
];

export const productCategories: { name: ProductCategory; symbol: string; description: string }[] = [
  { name: "Sports & Fitness", symbol: "●", description: "Gear for active days" },
  { name: "Motorcycle Accessories", symbol: "◆", description: "Practical upgrades for the ride" },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number | undefined) {
  if (price === undefined) return "See price on Shopee";
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductImages(product: Product): ProductImage[] {
  return product.images?.length ? product.images : [{ src: product.image, alt: product.imageAlt }];
}
