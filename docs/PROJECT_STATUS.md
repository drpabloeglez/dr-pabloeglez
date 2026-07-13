# Project Status

**Last Updated:** 2026-07-13

## Completion: ~100% (V1 Complete) + V1.1 Polish + Content Refinements

All 18 V1 tasks complete. React 19 + TS 6 + Vite 8 + Tailwind v4 + shadcn/ui. No backend. 13 routes, MDX blog (19 articles), Schema.org, SEO, Calendly, WhatsApp. V1.1 polish items complete. Content refinements applied per physician feedback. Runtime error fixed: blank line before closing `---` in frontmatter of 14 MDX files was breaking `remark-mdx-frontmatter`.

## Completed

- Vite + React + TypeScript project scaffolded
- Project spec docs written (`MASTER-SPEC.md`, `DEVELOPMENT-ROUTE.md`, `aRCHITECTURE.md`, `CONTENT-STRATEGY.md`)
- `AGENTS.md` created with workflow and conventions
- Logging files created (`PROJECT_STATUS.md`, `TASK_TRACKER.md`, `DEVELOPMENT_LOG.md`)
- **TASK-01**: Tailwind CSS v4 + @tailwindcss/vite installed and configured
- **TASK-01**: shadcn/ui initialized with Button component verified
- **TASK-01**: react-router-dom, lucide-react, framer-motion installed
- **TASK-01**: Path alias `@/` configured in both Vite and tsconfig
- Directory structure created: `src/lib/`, `src/components/ui/`, `src/hooks/`, `src/pages/`, `src/layouts/`, `content/blog/`
- **TASK-02**: Routing structure — `react-router-dom` with BrowserRouter, 5 core routes + 5 SEO landing routes, RootLayout with Header/Footer
- Page placeholders created for all routes
- **TASK-03**: Global layout refined with design tokens (Header/Footer)
- **TASK-04**: Design system — Tailwind CSS v4 theme with `@theme inline`, CSS variables for shadcn, project colors as HSL tokens
- `index.html` language set to `es`, title updated
- Old Vite template files removed (App.tsx, App.css, assets)
- **TASK-05**: Full homepage with all sections — Hero, Trust Indicators, About Doctor, Services Grid, Booking Process, FAQ, Contact
- **TASK-08**: Contact page with Calendly inline widget, Google Maps, contact info cards
- **TASK-09**: Calendly integrated across all pages (Hero, About, Services, Contact) with correct `dr-pabloeglez/30min` link
- **TASK-10**: WhatsApp links across all pages
- **TASK-11**: Blog system — MDX with remark-mdx-frontmatter, blog index + article pages, 3 sample posts
- **TASK-12**: SEO foundations — sitemap.xml, robots.txt, canonical, OpenGraph, Twitter Cards
- **TASK-13**: Schema.org — Physician, MedicalClinic, LocalBusiness (global), FAQPage (homepage FAQ)
- **TASK-10**: WhatsApp floating button (fixed position, visible on all pages)
- **TASK-14**: Google Analytics script in index.html
- **TASK-15**: Performance optimization — system fonts, lazy loading, Tailwind purging
- **TASK-16**: Mobile optimization — responsive breakpoints throughout
- **TASK-17**: Accessibility review — headings, alt text, ARIA, focus, semantic HTML
- **TASK-18**: Final QA — build, lint, routes, links, bundle size audit
- Images reorganized into subdirectories under `src/assets/images/pablo-eglez-pictures/`
- HeroSection: full-bleed background image with gradient overlay
- AboutSection + AboutPage: profile photos added as circular crops
- Updated professional title to "Cirujano Ginecólogo" throughout
- Removed "de confianza" from all user-facing content
- Added `booking` (blue `#5B9BD5`) and `whatsapp` (green `#25D366`) button variants
- Updated Calendly URL to `dr-pabloeglez/30min` with matching color
- ContactPage: replaced iframe embed with Calendly inline widget (div + script)
- ContactPage: removed "formulario próximamente" placeholder section
- Footer enhanced with direct Calendly + WhatsApp links
- Schema.org: updated description to "Cirujano Ginecólogo"
- Created `src/components/ui/reveal.tsx` — `Reveal`, `StaggerReveal`, `StaggerItem` scroll animations
- Applied scroll-triggered entrance animations to every page (homepage sections + all subpages)

## Post-V1 Progress

| V1.1 Item | Status |
|-----------|--------|
| Mobile navigation menu | ✅ Done |
| Add doctor portrait | ✅ Done — Hero (background) + AboutSection (profile circle) + AboutPage (profile circle) |
| CTA button styling | ✅ Done — booking (blue) + whatsapp (green) variants |
| Calendly URL + widget | ✅ Done — correct link + inline widget |
| Update footer contacts | ✅ Done — added Calendly, WhatsApp, Contact links |
| Remove "de confianza" wording | ✅ Done — replaced throughout |
| "Cirujano Ginecólogo" title | ✅ Done — added to About, Schema, Footer |
| Scroll-triggered entrance animations | ✅ Done — Reveal/StaggerReveal on all pages |
| Content refinements (title, images, wording, serivices→consulta, surgery mention) | ✅ Done — 2026-06-30 |
| Blog content (20 new articles + typography + category filter + CTA + related posts) | ✅ Done — 2026-06-30 |
| Replace GA placeholder ID | ✅ Done — Measurement ID `G-51S46CPSE9` confirmed in index.html (2026-07-13); `15250766439` is the internal Stream ID, not used in the gtag snippet |
| Confirm Schema.org `MedicalClinic` name + `Physician.telephone` | ⏳ Pending (needs doctor confirmation) |
| Production Lighthouse audit | ✅ Done — 2026-07-13. Initial live run: Performance **62**, A11y 95, BP 100, SEO 100. After optimization (hero AVIF/WebP + preload, route code-splitting, canonical www redirect): local preview Performance **96** (FCP 1.8s, LCP 2.2s, SI 1.8s, TTI 3.5s, CLS 0). Re-run on live www after deploy. |
| Optimize bundle size (HeroImage PNG ~660–702KB, JS 681KB/197KB gzip) | ✅ Done — 2026-07-13. Hero → AVIF (26–27KB) / WebP (31–34KB) in `public/images/` + `<link rel=preload>`; JS initial bundle 339KB/108KB gzip; 10 secondary routes lazy-split into separate chunks. |
| Fix canonical/OG/sitemap/robots domain | ✅ Done — 2026-07-13. Site referenced wrong domain `ginecologiamendoza.com.ar` in index.html, PageHelmet, sitemap.xml, robots.txt, constants. Replaced with canonical `https://www.ginecologopabloeglez.com.ar` (SEO-correctness fix; Lighthouse SEO only validates syntax so it stayed 100). |
| Deploy to Vercel | ✅ Done (user-deployed 2026-07-13) |
| **Local SEO enrichment** — schema: `areaServed` (Mendoza/AR), `geo`, `openingHours`, `priceRange`, `hasCredential`, ES/EN `knowsAbout`; index.html: `x-default` hreflang, meta `geo.*`/`ICBM`, `theme-color`, `robots` | ✅ Done — 2026-07-13 |
| Add Google Business Profile URL to `sameAs` (factor #1 de SEO local) | ⏳ Pending (needs real GBP URL) |
| Verify `geo` coords match exact GBP pin | ⏳ Pending (verify -32.8908, -68.8272) |
| Prerender SPA meta tags for faster indexing | ⏳ Pending (build-time, sin backend) |

See [ROADMAP.md](./ROADMAP.md) for the full phased plan (V1.1 → Phase 7).
