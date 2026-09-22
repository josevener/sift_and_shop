<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Formatting

This repository uses Prettier as its source-formatting standard.

- Format every changed TypeScript, JavaScript, JSON, CSS, Markdown, and configuration file with the repository's Prettier settings before handing work off.
- Prefer the project-local Prettier command and configuration when they are present; do not introduce a different formatter or formatting rules without approval.
- Limit formatting to files touched by the task. Do not create unrelated whole-repository formatting diffs.
- Verify formatting with Prettier's check mode when available, then run the relevant lint and build checks.

## Project Principles

- This is a static Next.js affiliate storefront. Keep it deployable with `output: "export"`; do not add a database, API routes, server actions, authentication, checkout, or a separate backend unless the user explicitly asks.
- Preserve the existing TypeScript, App Router, and Tailwind CSS 4 stack. Prefer native platform and framework features over adding dependencies.
- Make the smallest complete change that solves the request. Preserve user changes and avoid unrelated refactors.

## Syntax and Code Conventions

- Use TypeScript for application code. Prefer explicit types for public component props, product data, shared utilities, and external data boundaries.
- Use the `@/` import alias for project modules. Keep imports ordered: framework, external packages, then project modules.
- Name React components in PascalCase, files in kebab-case, hooks with a `use` prefix, and data/helpers with descriptive camelCase names.
- Prefer small, focused components. Put reusable UI in `components/`, static content/data in `data/`, and framework routes/metadata in `app/`.
- Keep Server Components as the default. Add `"use client"` only for browser state, event handlers, browser APIs, or animation observers; isolate that boundary to the smallest component possible.
- Do not use `any`, suppress TypeScript errors, or leave dead code, debug logging, placeholder TODOs, or unused imports in completed work.
- Keep product data centralized in `data/products.ts`; avoid duplicating product facts, pricing, links, or image paths across pages.

## Static Export and Content Rules

- Every dynamic product page must be generated from local product data with `generateStaticParams`; reject unknown product paths with a static 404.
- Do not use cookies, request headers, runtime-only route handlers, server mutations, ISR, or default Next.js image optimization. These conflict with static export.
- Store product images under `public/products/` and reference local paths. Use appropriately sized WebP or AVIF assets where possible.
- When adding a product, confirm its slug is unique, image path exists, price is accurate, descriptive alt text is present, and the affiliate URL is complete.
- Keep site identity, public URL, and global copy in `data/site.ts`; never hard-code a production domain in arbitrary components.

## Security and Affiliate Links

- Treat all affiliate URLs as untrusted input. Use only `https:` URLs from approved marketplace domains before publishing.
- Every external marketplace link must use `target="_blank"` and `rel="sponsored noopener noreferrer"`.
- Never expose API keys, tokens, personal information, hidden affiliate identifiers, or private configuration in client code, static data, screenshots, logs, or commits.
- Do not add third-party scripts, trackers, fonts, embeds, or analytics without explicit user approval. Prefer privacy-preserving, local solutions.
- Keep affiliate disclosures visible near outbound purchase actions and maintain the dedicated disclosure page.

## UI/UX and Accessibility

- Keep the Sift & Shop visual language: editorial layout, cream neutrals, primary teal/green, balanced contrast, and restrained motion.
- Design mobile-first. Test at narrow mobile, tablet, and desktop widths; card content must not overflow, overlap, or make primary actions hard to tap.
- Use semantic landmarks, heading order, descriptive image alt text, visible keyboard focus, labeled controls, and accessible names for icon-only buttons.
- Interactive controls require clear hover, focus, disabled, and empty states. Do not rely on color alone to communicate state.
- Motion must be purposeful and lightweight. Respect `prefers-reduced-motion`; avoid autoplaying, distracting, or layout-shifting animation.
- Keep primary actions obvious: internal links navigate with `next/link`, while affiliate CTAs clearly identify the marketplace and open externally.

## Performance

- Optimize for fast static delivery: minimize client components, JavaScript, dependencies, image weight, and blocking third-party resources.
- Reserve image space with `width`/`height` or `fill` inside an aspect-ratio container to prevent layout shift. Set accurate `sizes` for responsive images.
- Use `priority` only for the above-the-fold hero image and truly critical content; lazy-load the rest by default.
- Prefer CSS transitions and native browser APIs to animation libraries. Avoid expensive scroll handlers; use passive listeners or `IntersectionObserver` and clean up subscriptions.
- Preserve metadata, canonical URLs, sitemap entries, robots rules, and product JSON-LD whenever product or route behavior changes.

## Development Flow and Verification

1. Inspect relevant routes, components, data, and current configuration before editing. Read the applicable local Next.js 16 documentation before introducing framework APIs.
2. Implement the smallest cohesive change, keeping static-export compatibility and responsive behavior intact.
3. Format only changed files with Prettier when available.
4. Run `npm run lint` and `npm run build` using Node.js 20.9 or newer. The current environment may require selecting the installed Node 24 runtime first.
5. Verify affected routes, external-link attributes, empty states, and mobile behavior. Report commands run and any limits or follow-up configuration the user needs.
