## Workflow (from MASTER-SPEC.md)

Every session starts by re-reading `docs/MASTER-SPEC.md`, then:

1. **Project audit** — inspect folder structure, routes, components, pages, SEO, deps, docs, tasks, logs. Never duplicate work.
2. **Read docs** — priority: MASTER-SPEC > DEVELOPMENT-ROUTE > aRCHITECTURE > CONTENT-STRATEGY > README.
3. **Progress detection** — before any edit, determine completion %, completed/in-progress/blocked tasks, next logical task.
4. **Logging** — maintain `docs/PROJECT_STATUS.md` (living state), `docs/DEVELOPMENT_LOG.md` (append-only per session), `docs/TASK_TRACKER.md` (task list with statuses). Create them if absent.
5. **Execute one task at a time.** No scope creep, no architecture drift.
6. **On completion** — update logs, verify `npm run build` (tsc + vite), `npm run lint` (eslint), responsive layout.

End every session with: completion %, completed items, current priority, next task, risks.

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | `tsc -b && vite build` |
| `npm run lint` | `eslint .` (flat config) |
| `npm run preview` | Serve production build |

No test runner configured. No test files exist.

## TypeScript quirks

- `verbatimModuleSyntax: true` → `import type` for type-only imports, never `import { type Foo }`
- `erasableSyntaxOnly: true` → no enums, no namespaces, no parameter properties
- `noUnusedLocals` + `noUnusedParameters` → strict
- `tsconfig.json` is references-only root; real configs are `tsconfig.app.json` (src/) and `tsconfig.node.json` (vite.config.ts)

## Project-specific rules

- **No backend/database/auth/Supabase/CRM in V1.** Forms → Google Forms, scheduling → Calendly, communication → WhatsApp Business.
- **All content in Spanish.** URLs, routes, SEO, blog.
- **Blog**: MDX in `content/blog/` (not yet created). No CMS, no database.
- **Design tokens**: bg `#FAF8F5`, primary `#2E4057`, secondary `#64748B`, white `#FFFFFF`.
- **Intended UI stack** (not yet installed): Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion (sparingly).
- **Routes**: `/`, `/about`, `/services`, `/blog`, `/contact`, plus Spanish SEO landing pages.
- **Schema.org**: Physician, MedicalClinic, LocalBusiness, FAQPage.
- **Lighthouse**: Performance/SEO/Accessibility/Best Practices all > 90.
- **Deployment**: Vercel, auto-deploy from `main`. Branch strategy: `main` + `develop`.
