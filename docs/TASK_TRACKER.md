# TASK_TRACKER.md

## TASK-001 — Project Setup
**Status:** COMPLETED  
Scaffolding complete (Vite + React + TS). Tailwind CSS v4, shadcn/ui, react-router-dom, lucide-react, framer-motion installed. Path alias `@/` configured. Button component verified.

## TASK-002 — Routing Structure
**Status:** COMPLETED  
react-router-dom configured with all spec routes. RootLayout (Header/Footer) created. Page placeholders for all core and SEO landing pages exist.

## TASK-003 — Global Layout
**Status:** COMPLETED  
RootLayout created with Header/Footer. Refined with design tokens. Light theme configured with project colors.

## TASK-004 — Design System
**Status:** COMPLETED  
Tailwind CSS v4 theme configured with project tokens via `@theme inline`. CSS variables for shadcn shadcn components. Radix UI installed.

## TASK-005 — Homepage
**Status:** COMPLETED  
Hero, Trust Indicators, About Doctor, Services Grid, Booking Process, FAQ, Contact sections implemented.

## TASK-006 — About Page
**Status:** COMPLETED  
Full content: professional profile, formation, experience, philosophy, license, clinic info, CTAs.

## TASK-007 — Services Pages
**Status:** COMPLETED  
Services overview page with all 6 services. Individual SEO landing pages updated with full content.

## TASK-008 — Contact Page
**Status:** COMPLETED  
Contact info cards, Calendly inline widget (div + script), Google Maps embed, WhatsApp CTA. No form placeholder.

## TASK-009 — Calendly Integration
**Status:** COMPLETED  
Calendly `dr-pabloeglez/30min` embedded via inline widget and linked from Hero, About, Services, Contact CTAs.

## TASK-010 — WhatsApp Integration
**Status:** COMPLETED  
WhatsApp links in Hero, About, Services, Contact. Floating button in RootLayout.

## TASK-011 — Blog System
**Status:** COMPLETED  
MDX blog with remark-mdx-frontmatter. Blog index and article pages. 3 sample posts.

## TASK-012 — SEO Foundations
**Status:** COMPLETED  
sitemap.xml, robots.txt, canonical, OpenGraph, Twitter Cards in index.html.

## TASK-013 — Schema.org
**Status:** COMPLETED  
Physician, MedicalClinic, LocalBusiness in global schema. FAQPage on homepage FAQ.

## TASK-014 — Analytics
**Status:** COMPLETED  
Google Analytics script in index.html (placeholder ID).

## TASK-015 — Performance Optimization
**Status:** COMPLETED  
System fonts, lazy loaded map iframe, Tailwind CSS purging. Bundle ~112 kB gzip.

## TASK-016 — Mobile Optimization
**Status:** COMPLETED  
Responsive layout with Tailwind responsive classes. All pages tested at mobile breakpoints.

## TASK-017 — Accessibility Review
**Status:** COMPLETED  
All images have alt text (none exist). Icon buttons have aria-labels. Heading hierarchy fixed on ContactPage. No non-semantic interactive elements. Color contrast verified against design tokens.

## TASK-018 — Final QA
**Status:** COMPLETED  
Build (`tsc -b && vite build`) passes. Lint (eslint) passes (1 known shadcn warning). All 13 routes verified. sitemap.xml matches routes. No broken links. Bundle: 112 kB JS gzip, 5 kB CSS gzip.

## Post-V1

| V1.1 Item | Status |
|-----------|--------|
| Mobile navigation menu | ✅ Done |
| Doctor portrait | ✅ Done — hero background + profile circles |
| CTA button variants | ✅ Done — booking (blue) + whatsapp (green) |
| Calendly URL + widget | ✅ Done — `dr-pabloeglez/30min` + inline widget |
| Content polish | ✅ Done — "cirujano ginecólogo", removed "confianza", updated footer |
| Scroll-triggered animations | ✅ Done — Reveal/StaggerReveal on all pages |
| Content refinements | ✅ Done — title, images, wording, types of consulta, surgery mention, annual checkup, contraception |
| Blog content expansion (20 articles + typography + category filter + CTA + related posts) | ✅ Done — 2026-06-30 |
| Hotfix: stray `>` after frontmatter in 14 MDX files | ✅ Done — 2026-06-30 |
| GA placeholder ID | ✅ Done — `G-51S46CPSE9` confirmed |
| Lighthouse audit | ✅ Done — 62→96 (Performance) after hero image + code-split optimization (2026-07-13) |
| Vercel deploy | ✅ Done (2026-07-13) |
| Optimize hero images (PNG→AVIF/WebP) + preload | ✅ Done (2026-07-13) |
| Route-level code-splitting (React.lazy) | ✅ Done (2026-07-13) |
| Fix wrong canonical/OG domain | ✅ Done — `ginecologiamendoza.com.ar` → `www.ginecologopabloeglez.com.ar` (2026-07-13) |
| Search Console setup | ⏳ |
| Google Business Profile | ⏳ |

See [ROADMAP.md](./ROADMAP.md) for the full phased plan (V1.1 → Phase 7).
