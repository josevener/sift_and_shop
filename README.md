# Sift & Shop

A static Next.js affiliate storefront. Products are managed in one typed file and every product page is generated at build time—no database or separate backend required.

## Add a product

1. Add optimized local assets to `public/products/`.
2. Copy a product object in `data/products.ts` and update its values. Keep `image` and `imageAlt` for the catalog card.
3. For a gallery, add `images: [{ src, alt }, ...]`; the primary image should come first.
4. When you have a product video, add `video: { src, poster, title }` with a local MP4 or WebM path. Videos are optional and only render when configured.
5. Paste the real Shopee, TikTok Shop, or other marketplace affiliate URL into `affiliateUrl`.
6. Run `npm run build`; the catalog, detail page, metadata, sitemap, and related products update automatically.

Brand text and the deployed site URL live in `data/site.ts`. Set `NEXT_PUBLIC_SITE_URL` to the public domain in production.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The production build is exported to `out/` and can be deployed on any static host.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
