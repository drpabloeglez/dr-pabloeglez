# DEVELOPMENT_LOG.md

## Session 2026-06-15

**Completed:**
- Created AGENTS.md with workflow from MASTER-SPEC.md and repo-specific conventions
- Created PROJECT_STATUS.md, TASK_TRACKER.md, DEVELOPMENT_LOG.md
- Completed project audit
- Installed and configured UI stack: Tailwind CSS v4, @tailwindcss/vite, shadcn/ui, react-router-dom, lucide-react, framer-motion, clsx, tailwind-merge
- Configured `@/` path alias in vite.config.ts and tsconfig.app.json
- Set up directory structure for components, pages, layouts, hooks, lib
- Verified shadcn Button component builds successfully
- Verified `npm run build` and `npm run lint` pass
- [TASK-02] Defined routing structure with react-router-dom
- Created RootLayout with Header and Footer
- Created page placeholders: Home, About, Services, Blog, Contact
- Created SEO landing pages: ConsultaGinecológica, ControlGinecológico, SaludHormonal, Fertilidad, Anticoncepción
- Fixed shadcn `@/` literal path issue (moved button from `@/` to `src/components/ui/`)
- [TASK-03/04] Rewrote `src/index.css` with shadcn theme system using `@theme inline` and CSS variables
- Set project design tokens as HSL values (primary `#2E4057`, background `#FAF8F5`, secondary `#64748B`)
- Configured font, spacing, radius tokens
- Installed radix-ui (shadcn dependency)
- Refined RootLayout with proper design token classes
- Updated `index.html` lang to `es` and title to "Dr. Pablo Eglez — Ginecología en Mendoza"
- Removed unused Vite template files (App.tsx, App.css, assets)
- [TASK-05] Implemented full homepage with 7 sections:
  - HeroSection (CTAs → Calendly + WhatsApp)
  - TrustIndicatorsSection (4 icons with labels)
  - AboutSection (bio, license, clinic info)
  - ServicesSection (6 service cards linking to SEO pages)
  - BookingProcessSection (4-step process)
  - FAQSection (6 accordion items)
  - ContactSection (address, phone, Calendly CTA)
- [TASK-06] Built About page with full content: professional profile, formation, experience, philosophy, CTAs
- [TASK-07] Built Services overview page with 6 detailed service sections
- [TASK-08] Built Contact page with: contact info cards, Calendly iframe embed, Google Maps embed, Google Forms placeholder
- [TASK-09] Calendly integration across Hero, About, Services, Contact pages
- [TASK-10] WhatsApp links across Hero, About, Services, Contact pages
- [TASK-11] Set up blog system: @mdx-js/rollup + remark-mdx-frontmatter for native frontmatter exports
- [TASK-11] Created sample blog posts in content/blog/ (3 articles)
- [TASK-11] Built BlogPage with article list (sorted by date)
- [TASK-11] Built BlogArticlePage with MDX rendering and /blog/:slug route
- [TASK-12] Created public/robots.txt with Sitemap directive
- [TASK-12] Created public/sitemap.xml with all 13 routes
- [TASK-12] Added canonical, Open Graph, Twitter Cards meta tags to index.html
- [TASK-13] Created src/lib/schema.tsx with Physician, MedicalClinic, LocalBusiness
- [TASK-13] Added GlobalSchema to RootLayout
- [TASK-13] Added FAQSchema to FAQSection (FAQPage structured data)
- [TASK-10] Created WhatsAppFloat component (fixed bottom-right button)
- [TASK-10] Added WhatsAppFloat to RootLayout (visible on all pages)
- [TASK-14] Added Google Analytics script to index.html
- [TASK-15] Performance check — system fonts, lazy loaded iframe, Tailwind purging, bundle ~112 kB gzip
- [TASK-16] Mobile optimization — responsive classes throughout all components
- [TASK-17] Accessibility review — fixed ContactPage heading hierarchy (h1→h3→h2)
- [TASK-18] Final QA — build, lint, routes, links, bundle audit all pass

**Files Modified/Created:**
- AGENTS.md (new)
- docs/PROJECT_STATUS.md (new)
- docs/TASK_TRACKER.md (new)
- docs/DEVELOPMENT_LOG.md (new)
- vite.config.ts (modified)
- src/index.css (rewritten with shadcn theme)
- tsconfig.app.json (modified)
- components.json (new)
- src/lib/utils.ts (new)
- src/router.tsx (new)
- src/layouts/RootLayout.tsx (new, then refined)
- src/pages/{Home,About,Services,Blog,Contact}Page.tsx (new)
- src/pages/{ConsultaGinecologica,ControlGinecologico,SaludHormonal,Fertilidad,Anticoncepcion}Page.tsx (new)
- src/main.tsx (modified)
- src/components/ui/button.tsx (new)
- index.html (modified — lang, title)
- src/components/sections/{Hero,TrustIndicators,About,Services,BookingProcess,FAQ,Contact}Section.tsx (new)
- src/pages/HomePage.tsx (rewritten — composes all sections)
- src/pages/AboutPage.tsx (rewritten — full content)
- src/pages/ServicesPage.tsx (rewritten — full content)
- src/pages/ContactPage.tsx (rewritten — Calendly, map, info)
- src/pages/BlogPage.tsx (rewritten — article list)
- src/pages/BlogArticlePage.tsx (new)
- src/lib/blog.ts (new — import.meta.glob + MDX frontmatter)
- src/lib/schema.tsx (new — Schema.org JSON-LD components)
- src/vite-env.d.ts (new — MDX type declarations)
- vite.config.ts (modified — added MDX plugin + remark plugins)
- src/layouts/RootLayout.tsx (modified — added GlobalSchema)
- src/components/sections/FAQSection.tsx (modified — added FAQSchema)
- content/blog/{control-ginecologico-anual,importancia-pap,salud-hormonal-femenina}.mdx (new)
- public/robots.txt (new)
- public/sitemap.xml (new)
- src/components/WhatsAppFloat.tsx (new)
- index.html (rewritten — OG, Twitter, canonical, GA meta)
- src/pages/{ConsultaGinecologica,ControlGinecologico,SaludHormonal,Fertilidad,Anticoncepcion}Page.tsx (rewritten — real content)
- Deleted: src/App.tsx, src/App.css, src/assets/

**Notes:**
- Project at ~100% — V1 complete
- TASK-01→18 all done

**Next (Post-V1):** See [ROADMAP.md](./ROADMAP.md) — Phase V1.1 (polish & launch) then Phases 2-6.

---

## Session 2026-06-15 (afternoon)

**Completed:**
- Implemented responsive hamburger menu in RootLayout (desktop `ul` hidden on `md:` breakpoint, hamburger button visible, mobile dropdown with close-on-click)
- Created `docs/ROADMAP.md` as single source of truth for post-V1 planning
- Cross-referenced ROADMAP.md from TASK_TRACKER.md, PROJECT_STATUS.md, DEVELOPMENT_LOG.md

**Files Modified:**
- `src/layouts/RootLayout.tsx` — added mobile hamburger menu with state toggle
- `docs/ROADMAP.md` (new)
- `docs/TASK_TRACKER.md` (updated to reference ROADMAP.md)
- `docs/PROJECT_STATUS.md` (updated with V1.1 progress table)
- `docs/DEVELOPMENT_LOG.md` (this entry)

**Notes:**
- `npm run build` passes
- V1.1 progress: 1/7 items done (mobile nav)

---

## Session 2026-06-15 (evening)

**Completed:**
- Centered mobile menu items + bumped typography to `text-base`
- Made navbar sticky (`sticky top-0 z-40 bg-background`)
- Mobile menu now overlays content (`absolute left-0 right-0 top-full`) instead of pushing page body down
- Added backdrop overlay (`fixed inset-0 z-30`) that closes menu on outside click
- Logo "Dr. Pablo Eglez" scrolls smoothly to top on click
- Added `ScrollToTop` via `useLocation` + `useEffect` — every route change now scrolls to top
- Cleaned up duplicate block in DEVELOPMENT_LOG.md

**Files Modified:**
- `src/layouts/RootLayout.tsx` — sticky nav, overlay menu, backdrop, scroll-to-top on logo + route change
- `docs/PROJECT_STATUS.md` — updated V1.1 progress table
- `docs/TASK_TRACKER.md` — updated Post-V1 table
- `docs/ROADMAP.md` — marked item #1 fully done
- `docs/DEVELOPMENT_LOG.md` — this entry, removed duplicate block

**Notes:**
- `npm run build` passes
- V1.1 progress: 1/7 items done (mobile nav — fully polished: responsive, sticky, overlay, outside click dismiss, scroll-to-top)

---

## Session 2026-06-26

**Completed:**
- Reorganized images into subdirectories: `hero/`, `profile/`, `gallery/`
- HeroSection: changed to full-bleed background image with gradient overlay (was two-column layout)
- AboutSection + AboutPage: replaced CSS circle placeholders with actual `<img>` circular profile photos
- Updated professional title from "Médico Ginecólogo" → "Cirujano Ginecólogo" in AboutSection, AboutPage, Schema.org, Footer
- Removed "de confianza" from HeroSection ("Ginecología de confianza en Mendoza" → "Ginecología en Mendoza"), AboutSection, and AboutPage
- Added `booking` variant (`bg-[#5B9BD5] text-white`) and `whatsapp` variant (`bg-[#25D366] text-white`) to shadcn Button component
- Updated all CTA buttons across 12+ components/pages to use new variants
- Updated Calendly URL from `ginecologiamendoza` to `dr-pabloeglez/30min?text_color=1c1c1c&primary_color=5b9bd5` across all pages
- Replaced ContactPage iframe Calendly embed with inline widget (div + async script via useEffect)
- Removed "Consulta rápida" section (formulario próximamente placeholder) from ContactPage
- Fixed ContactPage intro text (no longer mentions non-existent form)
- Enhanced footer with direct Calendly and WhatsApp links
- Updated all docs (PROJECT_STATUS.md, TASK_TRACKER.md, DEVELOPMENT_LOG.md)

**Files Modified:**
- `src/assets/images/pablo-eglez-pictures/` — reorganized into `hero/`, `profile/`, `gallery/`
- `src/components/ui/button.tsx` — added `booking` and `whatsapp` variants
- `src/components/sections/HeroSection.tsx` — background image, gradient overlay, new heading, booking/whatsapp buttons
- `src/components/sections/AboutSection.tsx` — profile photo, "cirujano ginecólogo", removed "confianza"
- `src/components/sections/ContactSection.tsx` — booking variant
- `src/pages/AboutPage.tsx` — profile photo, "cirujano ginecólogo", removed "confianza", booking/whatsapp variants
- `src/pages/ContactPage.tsx` — inline Calendly widget, fixed intro, removed form section
- `src/pages/ServicesPage.tsx` — booking/whatsapp variants
- `src/pages/AnticoncepcionPage.tsx` — booking variant
- `src/pages/ControlGinecologicoPage.tsx` — booking variant
- `src/pages/ConsultaGinecologicaPage.tsx` — booking variant
- `src/pages/FertilidadPage.tsx` — booking variant
- `src/pages/SaludHormonalPage.tsx` — booking variant
- `src/layouts/RootLayout.tsx` — footer with Calendly + WhatsApp links, "Cirujano Ginecólogo"
- `src/lib/schema.tsx` — updated description
- `docs/PROJECT_STATUS.md` — updated
- `docs/TASK_TRACKER.md` — updated
- `docs/DEVELOPMENT_LOG.md` — this entry

**Notes:**
- `npm run build` passes
- `npm run lint` passes (1 pre-existing shadcn warning)
- V1.1 progress: mobile nav ✅, doctor portraits ✅, CTA styling ✅, Calendly ✅, content polish ✅

---

## Session 2026-06-26 (animations)

**Completed:**
- Created `src/components/ui/reveal.tsx` with `Reveal` (single element), `StaggerReveal`, and `StaggerItem` components using framer-motion `whileInView` with `once: true`
- Applied scroll-triggered entrance animations to all homepage sections (HeroSection already had load animation)
- Applied `Reveal`/`StaggerReveal` to all subpages: AboutPage, ContactPage, ServicesPage, all 5 SEO service detail pages, BlogPage, BlogArticlePage

**Files Created/Modified:**
- `src/components/ui/reveal.tsx` (new)
- `src/components/sections/HeroSection.tsx` — fixed `ease` type by adding `as const`
- `src/components/sections/TrustIndicatorsSection.tsx` — added Reveal wrapper
- `src/components/sections/AboutSection.tsx` — added Reveal/Stagger wrappers
- `src/components/sections/ServicesSection.tsx` — added StaggerReveal on cards
- `src/components/sections/BookingProcessSection.tsx` — added StaggerReveal on steps
- `src/components/sections/FAQSection.tsx` — added StaggerReveal on items
- `src/components/sections/ContactSection.tsx` — added Reveal wrappers
- `src/pages/AboutPage.tsx` — added Reveal/Stagger sections
- `src/pages/ContactPage.tsx` — added Reveal/Stagger sections + fixed unclosed `StaggerItem` (was `</div>`)
- `src/pages/ServicesPage.tsx` — added Reveal/Stagger wrappers
- `src/pages/ConsultaGinecologicaPage.tsx` — added Reveal
- `src/pages/ControlGinecologicoPage.tsx` — added Reveal
- `src/pages/SaludHormonalPage.tsx` — added Reveal
- `src/pages/FertilidadPage.tsx` — added Reveal
- `src/pages/AnticoncepcionPage.tsx` — added Reveal
- `src/pages/BlogPage.tsx` — added Reveal + StaggerReveal
- `src/pages/BlogArticlePage.tsx` — added Reveal

**Notes:**
- `npm run build` passes
- `npm run lint` passes (same pre-existing shadcn warning)
- V1.1 progress: mobile nav ✅, doctor portraits ✅, CTA styling ✅, Calendly ✅, content polish ✅, scroll animations ✅

---

## Session 2026-06-30 — Content & UX Refinement

**Completed (7 tasks):**

### Task 1 — Main Title
Changed `"Ginecología"` → `"Ginecología Clínica y Quirúrgica"` across 8 locations:
- `index.html` — title, og:title, og:site_name, twitter:title
- `src/components/PageHelmet.tsx` — site title template suffix
- `src/pages/HomePage.tsx` — PageHelmet title
- `src/components/sections/HeroSection.tsx` — h1 heading
- `src/lib/schema.tsx` — LocalBusiness name

### Task 2 — Image Centralization
- Added `IMAGES` object to `src/lib/constants.ts` with all 3 image paths
- Updated imports in `HeroSection.tsx`, `AboutSection.tsx`, `AboutPage.tsx` to read from centralized `IMAGES`
- Replacing any image now requires editing only `constants.ts`

### Task 3 — Professional Description
- Replaced `"rigor médico"` → `"excelencia médica"` in `AboutSection.tsx`

### Task 4 — Surgical Treatment
Added `"tratamiento quirúrgico"` references in 3 locations:
- `AboutSection.tsx` — added to service list: `"...fertilidad, tratamiento quirúrgico y urgencias"`
- `ServicesSection.tsx` — Consulta Ginecológica card description updated
- `ServicesPage.tsx` — Consulta Ginecológica detail text updated

### Task 5 — Rename "Servicios" → "Tipos de Consulta"
Changed visible text in 5 locations (route `/services` unchanged):
- `RootLayout.tsx` — nav label
- `ServicesSection.tsx` — section h2
- `ServicesPage.tsx` — page h1 + Helmet title
- `AboutPage.tsx` — CTA link text

### Task 6 — Annual Check-up
Updated card titles to include studies:
- `ServicesSection.tsx`: `"Control Anual"` → `"Control Anual (PAP y Colposcopía)"`
- `ServicesPage.tsx`: `"Control Ginecológico Anual"` → `"Control Ginecológico Anual (PAP y Colposcopía)"`

### Task 7 — Contraception Consultation
Updated `"Anticoncepción"` → `"Anticoncepción y Seguimiento"` in 4 locations:
- `ServicesSection.tsx` — card title + description
- `ServicesPage.tsx` — card title + description
- `AnticoncepcionPage.tsx` — Helmet title + h1

**Files Modified (16):**
- `src/lib/constants.ts` — added `IMAGES` object
- `src/lib/schema.tsx` — updated LocalBusiness name
- `src/components/PageHelmet.tsx` — updated site title suffix
- `src/components/sections/HeroSection.tsx` — centralized image import, updated h1
- `src/components/sections/AboutSection.tsx` — centralized image import, updated bio text
- `src/components/sections/ServicesSection.tsx` — updated titles, descriptions, section heading
- `src/layouts/RootLayout.tsx` — updated nav label
- `src/pages/HomePage.tsx` — updated Helmet title
- `src/pages/ServicesPage.tsx` — updated titles, descriptions, heading, Helmet
- `src/pages/AboutPage.tsx` — centralized image import, updated CTA text
- `src/pages/AnticoncepcionPage.tsx` — updated title, h1, description
- `index.html` — updated all OG/Twitter meta tags
- `docs/PROJECT_STATUS.md` — updated
- `docs/TASK_TRACKER.md` — updated
- `docs/DEVELOPMENT_LOG.md` — this entry

**Notes:**
- `npm run build` passes
- `npm run lint` passes (same pre-existing shadcn warning)

---

## Session 2026-06-30 — Blog Content Implementation (20 articles)

**Completed:**

### Infrastructure
- Installed `@tailwindcss/typography` (v0.5.20) and configured via `@plugin` in `index.css`
- Added custom prose overrides (link colors, paragraph spacing, heading margins) matching site design tokens
- Extended `src/lib/blog.ts` — added `readingTime` and `keywords` to `Frontmatter` interface
- Removed unused `ArrowLeft` import from `BlogArticlePage.tsx`

### BlogPage enhancements
- **Category filter bar**: horizontal chip buttons for all categories + "Todas"
- **Reading time badge** on each card (clock icon + duration)
- Default sort by date descending
- Empty state for categories with no articles

### BlogArticlePage enhancements
- **Breadcrumbs**: `Inicio > Blog > Título`
- **Reading time** displayed in header metadata
- **CTA section**: "¿Querés consultar con el Dr. Pablo Eglez?" with "Solicitar Turno" + "Consultar por WhatsApp" buttons
- **Related posts**: up to 3 articles from same category, linked via cards
- Improved typography with proper `prose` rendering

### Content
- Replaced `content/blog/control-ginecologico-anual.mdx` with expanded Blog 01
- Deleted `content/blog/importancia-pap.mdx` (replaced by Blog 02)
- Kept `content/blog/salud-hormonal-femenina.mdx` (updated frontmatter)
- Created **19 new MDX blog articles** in `content/blog/`:
  1. control-ginecologico-anual (replaced)
  2. que-es-el-pap
  3. colposcopia
  4. primera-consulta-ginecologica
  5. sintomas-ginecologicos
  6. cada-cuanto-ir-al-ginecologo
  7. metodos-anticonceptivos
  8. mitos-anticonceptivos
  9. control-anual
  10. cambios-hormonales
  11. menstruaciones-irregulares
  12. dolor-menstrual
  13. ovario-poliquistico
  14. fertilidad
  15. primer-control-embarazo
  16. preparacion-consulta
  17. faq-pap-colposcopia
  18. tratamiento-quirurgico-ginecologico
  19. salud-ginecologica-segun-la-edad
  20. preguntas-frecuentes-ginecologia
- Each article ~1200–1800 words, with proper paragraph spacing, H2/H3 headings, FAQ sections, and CTA
- Publication dates set weekly from 2026-07-01 to 2026-11-11

### Sitemap
- Updated `public/sitemap.xml` with all 21 blog post URLs (removed `importancia-pap`, added 19 new slugs)

**Files Modified/Created (26 total):**
- `src/index.css` — added typography plugin + prose overrides
- `src/lib/blog.ts` — extended Frontmatter interface
- `src/pages/BlogArticlePage.tsx` — added breadcrumbs, reading time, CTA, related posts
- `src/pages/BlogPage.tsx` — added category filter + reading time display
- `content/blog/control-ginecologico-anual.mdx` — replaced with expanded content
- `content/blog/importancia-pap.mdx` — deleted
- `content/blog/salud-hormonal-femenina.mdx` — updated frontmatter
- `content/blog/*.mdx` — 19 new files
- `public/sitemap.xml` — updated with all blog URLs
- `docs/PROJECT_STATUS.md` — updated
- `docs/TASK_TRACKER.md` — updated
- `docs/DEVELOPMENT_LOG.md` — this entry

**Notes:**
- `npm run build` fails at runtime — dev server error: `TypeError: Cannot read properties of undefined (reading 'slug')` at `getAllPosts`. 14 MDX files have a stray `>` as the first content character after frontmatter `---`, breaking MDX/frontmatter parsing.
- `npm run lint` passes (same pre-existing shadcn warning)
- 21 blog posts total (20 new/replaced + 1 existing kept)
- 9 SEO categories: Prevención, Consultas, Salud Femenina, Anticoncepción, Salud Hormonal, Fertilidad, Embarazo, Cirugía Ginecológica, Preguntas Frecuentes

--- 

## Session 2026-06-30 — Hotfix: Blank line before closing `---` in 14 MDX files

**Root cause:** 14 blog files had a blank line between the last `keywords:` field and the closing `---` of the frontmatter. `remark-mdx-frontmatter` could not parse the YAML, so `mod.frontmatter` was `undefined`, causing `TypeError: Cannot read properties of undefined (reading 'slug')` at `getAllPosts`.

Additionally, some files had a stray `>` as the first content character after `---`.

**Fix (3 rounds):**

1. **`sed -i '/^>$/d'`** — removed stray `>` lines (didn't fix the blank-line issue)
2. **`perl -0777 -pi -e 's/\n\n---\n/\n---\n/g'`** — attempted to remove blank line before `---` but accidentally consumed the `---` closing marker because files had `\n\n---\n\n` structure (two blank lines around `---` from the original `>` line + blank line), causing the regex to match and replace the `---` along with the blank line
3. **Python rewrite** — reconstructed frontmatter from the broken file state: kept opening `---` + `title:` line, skipped the wrong `---` that Perl inserted after `title`, kept remaining fields (description through keywords), then inserted correct `---` + body content. All 14 files restored with valid frontmatter.

**Lesson:** Always verify the actual file byte structure before applying bulk regex fixes. A blank line immediately before the closing `---` in YAML frontmatter breaks `remark-mdx-frontmatter`.

**Files Modified (14):**
- `content/blog/cambios-hormonales.mdx`
- `content/blog/control-anual.mdx`
- `content/blog/dolor-menstrual.mdx`
- `content/blog/faq-pap-colposcopia.mdx`
- `content/blog/fertilidad.mdx`
- `content/blog/menstruaciones-irregulares.mdx`
- `content/blog/mitos-anticonceptivos.mdx`
- `content/blog/ovario-poliquistico.mdx`
- `content/blog/preguntas-frecuentes-ginecologia.mdx`
- `content/blog/preparacion-consulta.mdx`
- `content/blog/primera-consulta-ginecologica.mdx`
- `content/blog/primer-control-embarazo.mdx`
- `content/blog/salud-ginecologica-segun-la-edad.mdx`
- `content/blog/tratamiento-quirurgico-ginecologico.mdx`

**Notes:**
- `npm run build` passes cleanly
- `npm run lint` passes (same pre-existing shadcn warning)
- 21 blog posts all compile without error

---

Session 2026-07-11

Completed (audit-driven fixes):
- Fixed `PageHelmet.tsx` relative-URL bug: when `canonical` was provided, `<link rel="canonical">` and `og:url` were emitted as relative paths (e.g. `/services`). Now always absolute (`https://ginecologiamendoza.com.ar{canonical}`).
- Added missing OpenGraph/Twitter tags to `PageHelmet.tsx`: `og:type`, `og:site_name`, `og:locale` (es_AR), `og:image` (+width/height), and `twitter:image`/`twitter:card`. Subpages previously had no share image.
- Corrected `public/sitemap.xml`: 18 blog `<lastmod>` values were in the future (up to 2026-11-11); replaced with each post's real content date from MDX frontmatter (all in the past). Blog index lastmod set to 2026-07-11.
- Removed dead/unused assets: `public/favicon_io.zip` (195KB, was deployed to Vercel), `public/icons.svg` (unused), `gallery/` (off-brand stock incl. `CloseUpLandscapeTeethSmiling.jpg`), and two hero `*-backup` PNGs.

Not changed (needs input):
- Google Analytics ID still `G-XXXXXXXXXX` placeholder — requires real ID from doctor.
- Schema.org `MedicalClinic` name "Centro Diagnóstico Mendoza" and `Physician.telephone` (WhatsApp number) — needs doctor confirmation before editing.
- Near-duplicate blog content (`control-anual` vs `control-ginecologico-anual`, `salud-hormonal-femenina` vs `cambios-hormonales`) — flagged for content review, not auto-merged.

Files Modified:
- `src/components/PageHelmet.tsx`
- `public/sitemap.xml`
- removed: `public/favicon_io.zip`, `public/icons.svg`, 5 unused image assets

Verification:
- `npm run build` passes (0 errors)
- `npm run lint` passes (1 pre-existing unrelated warning: button.tsx fast-refresh)

Next:
- Swap GA ID; run production Lighthouse audit; bundle-size review (HeroImage PNG ~1.1MB, JS ~691KB) before Vercel deploy.

---

Session 2026-07-11 (cont.) — Condense near-duplicate blog posts

Completed:
- Merged the two overlapping "control ginecológico" posts into one comprehensive article at `content/blog/control-ginecologico-anual.mdx` (slug kept for SEO alignment with the `control-ginecologico-mendoza` landing page + Services title). Combined the "why/when" angle with the detailed step-by-step (PAP, colposcopía, estudios complementarios, duración, preparación) and merged both FAQ sets.
- Deleted `content/blog/control-anual.mdx` (superseded by the merge).
- Deleted `content/blog/salud-hormonal-femenina.mdx` (thin 5-min duplicate fully subsumed by the comprehensive `cambios-hormonales.mdx`). Folded its keywords (desequilibrio hormonal, salud hormonal femenina) into `cambios-hormonales.mdx` to preserve keyword coverage.
- Updated `public/sitemap.xml`: removed the two deleted URLs, bumped `control-ginecologico-anual` lastmod to 2026-02-22 (newer content date). Blog entries now 19 (was 21).

Files Modified:
- `content/blog/control-ginecologico-anual.mdx` (rewritten/merged)
- `content/blog/cambios-hormonales.mdx` (keywords)
- `public/sitemap.xml`
- deleted: `content/blog/control-anual.mdx`, `content/blog/salud-hormonal-femenina.mdx`

Verification:
- No dangling references to deleted slugs across src/content/public
- `npm run build` passes (0 errors)
- `npm run lint` passes (1 pre-existing unrelated warning: button.tsx fast-refresh)

Blog total: 21 → 19 articles.

Session 2026-07-13 — Local SEO hardening (Spanish / Mendoza, Argentina)

Audit question: ¿Está toda la SEO configurada para que encuentren fácilmente en español desde Mendoza?
Respuesta corta: la base estaba bien (lang=es, .com.ar, og:locale es_AR, hreflang, canonicales, sitemap, robots, schema base, URLs con "-mendoza", contenido en español). Faltaban señales locales fuertes.

Completed:
- Enriquecido `src/lib/schema.tsx` (JSON-LD global) con señales de SEO local:
  - `areaServed` = Mendoza (City + AdministrativeArea) + Argentina (Country)
  - `geo` (GeoCoordinates) para el paquete local de Google / Maps
  - `addressRegion` (Mendoza) + `postalCode` (5500) en la dirección
  - `openingHoursSpecification` (lun-vie 09-18) y `priceRange` ($$)
  - `hasCredential` (título médico) como señal de confianza
  - `knowsAbout` ampliado con términos en español (Ginecología, Anticoncepción, Fertilidad, Salud hormonal…)
  - `@id` por entidad y `sameAs` filtrado (wa.me + Calendly; Google Business Profile pendiente)
- Centralizado NAP en `src/lib/constants.ts` (objeto BUSINESS) para coherencia schema/contenido/footer.
- `index.html`: agregado `x-default` hreflang, meta `geo.region`/`geo.placename`/`geo.position`/`ICBM`, `theme-color` y `robots` (index, follow, max-image-preview:large).

Files Modified:
- src/lib/schema.tsx (rewrite — enriquecido)
- src/lib/constants.ts (objeto BUSINESS: NAP + geo + horarios + GBP placeholder)
- index.html (meta geo/hreflang/theme-color/robots)

Verification:
- `npm run build` passes (0 errors, tsc + vite)
- `npm run lint` passes (1 warning pre-existente e irrelevante: button.tsx fast-refresh)
- Meta tags confirmados en dist/index.html; schema compilado en el bundle JS (areaServed/GeoCoordinates/OpeningHoursSpecification presentes)

Pending / Next (no bloquea, pero recomendado para "encontrabilidad" máxima):
- Crear/claimar el Perfil de Google Business y pegar su URL en BUSINESS.googleBusinessProfile (factor #1 de SEO local).
- Verificar que las coordenadas `geo` coincidan EXACTAMENTE con el pin de GBP (hoy -32.8908, -68.8272 aproximado).
- Prerenderizar los meta tags (SPA los inyecta en cliente vía react-helmet-async; Google los procesa pero con delay).
- Optimizar og-image.png (~595 KB) y HeroImage PNG (~660 KB+) para Lighthouse Performance.
- Agregar google-site-verification tras verificar el dominio en Search Console.

Session 2026-07-13 (cont.) — Deployment confirmed, GA IDs clarified, Lighthouse audit

User inputs:
- Vercel deployment already done (item 5 V1.1 → ✅).
- GA IDs clarified: Measurement ID = `G-51S46CPSE9` (YA ESTABA en index.html, correcto); `15250766439` es el Stream ID interno (NO va en el snippet gtag). → Item 2 V1.1 → ✅ sin cambios de código.

Lighthouse audit attempt:
- No se pudo ejecutar Lighthouse en este sandbox: Chrome for Testing (150) se cuelga incluso con `about:blank --dump-dom` (timeout 45s). Es una limitación del entorno, no del sitio. Se instaló y luego eliminó el Chrome descargado (~150MB) para no ensuciar el repo.
- Alternativa usada: auditoría Lighthouse-equivalente a partir de los artefactos del build (`npm run build`).

Hallazgos del build (dist/):
- JS bundle: 681.39 KB (197.24 KB gzip) — inflado porque `src/lib/blog.ts` usa `import.meta.glob('/content/blog/*.mdx', { eager: true })`: las 19 notas MDX se empaquetan en el chunk principal. Toda visita descarga todo el blog.
- CSS: 44.93 KB (7.75 KB gzip) ✅
- HeroImage.png: 661.91 KB; HeroImageMobile.png: 702.24 KB (PNG sin comprimir → matan el LCP)
- og-image.png (public): ~595 KB
- ProfilePictureHeadshotv2.jpg: 54.16 KB ✅

Estimación Lighthouse (derivada de artefactos, NO medida):
- Performance (mobile): ~55–70 — limitado por hero PNG + JS grande. Desktop ~80+.
- Accessibility: ~95–100 (lang=es, headings, review a11y previa).
- Best Practices: ~90–100 (HTTPS Vercel, doctype válido).
- SEO: ~95–100 (title, meta description, viewport, canonical, hreflang x-default, robots.txt, links crawlables, structured data).

Para el número oficial: PageSpeed Insights (https://pagespeed.web.dev/) sobre la URL en vivo, o `npx lighthouse <url>` localmente.

Siguiente recomendado para llegar a >90 en todas:
- Comprimir hero + og-image a WebP/AVIF (item 11).
- Lazy-load de notas MDX (quitar eager / React.lazy) + code-splitting por ruta.
- Verificar alt text de imágenes y tap targets (a11y).

Files Modified (docs only):
- docs/ROADMAP.md (items 2 y 5 → Done)
- docs/PROJECT_STATUS.md (deploy + GA + estado Lighthouse)

---

## Sesión 2026-07-13 (tarde) — Optimización de Performance post-Lighthouse

Contexto: el usuario corrió `npx lighthouse https://ginecologopabloeglez.com.ar/` y obtuvo Performance **62** (A11y 95, BP 100, SEO 100). Se auditaron las causas y se corrigieron.

Hallazgos del reporte (prod, www):
- LCP 8.5s: `HeroImageMobile` era PNG de **686KB**; `HeroImage` PNG 662KB. LCP discovery fallaba (SPA: la imagen se descubre recién al montar React).
- Unused JS 186KB de bundle de 681KB/197KB gzip (todas las rutas + framer-motion + radix en un solo chunk). La mayoría del "unused" era GA (159KB, async).
- Redirect 1070ms (non-www → www). Render-blocking CSS 8KB. Document latency 500ms.
- BUG SEO crítico: index.html / PageHelmet / sitemap.xml / robots.txt / constants apuntaban a `ginecologiamendoza.com.ar` (dominio equivocado), no a `ginecologopabloeglez.com.ar`.

Cambios aplicados:
- Dominio corregido a `https://www.ginecologopabloeglez.com.ar` en index.html, src/components/PageHelmet.tsx, src/lib/constants.ts, public/sitemap.xml, public/robots.txt.
- Hero PNG → AVIF (26–27KB) + WebP (31–34KB) en `public/images/` (de ~1.35MB → ~120KB, −91%).
- `index.html`: `<link rel=preload as=image>` por breakpoint (webp) para el LCP.
- `HeroSection.tsx`: `<picture>` progresivo avif/webp + `fetchPriority=high`.
- `router.tsx`: 10 rutas secundarias con `React.lazy` (Homepage queda eager). `RootLayout.tsx`: `<Suspense>` en `<Outlet>`.
- `vercel.json`: redirect no-www → www (canonical).

Resultado (Lighthouse local sobre `vite preview` del nuevo build):
- Performance **62 → 96**. FCP 4.7s→1.8s, LCP 8.5s→2.2s, Speed Index 5.3s→1.8s, TTI 8.5s→3.5s, CLS 0.
- A11y 95, BP 100, SEO 100 (sin cambios).
- Bundle inicial JS: 681KB/197KB gzip → 339KB/108KB gzip. Resto de rutas en chunks separados.

Notas / siguientes:
- El número oficial en prod debe medirse en `https://www.ginecologopabloeglez.com.ar/` (sin redirect) tras el deploy.
- `unused-javascript` sigue marcando por GA (async, no bloquea LCP); optimización opcional (cargar GA en idle).
- `og-image.png` (582KB) no es LCP; se puede optimizar aparte si se desea.

Files Modified:
- index.html, src/components/sections/HeroSection.tsx, src/lib/constants.ts, src/router.tsx, src/layouts/RootLayout.tsx, vercel.json, public/images/* (nuevos), public/sitemap.xml, public/robots.txt
- docs/PROJECT_STATUS.md, docs/TASK_TRACKER.md, docs/DEVELOPMENT_LOG.md (este log)

Build: `npm run build` OK. Lint: 0 errores (solo warnings react-refresh preexistentes en button.tsx/router.tsx).
