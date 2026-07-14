// Genera public/sitemap.xml a partir de las rutas estáticas (router.tsx)
// y de los slugs/date de los posts MDX (content/blog/*.mdx).
// Se ejecuta en `prebuild` para que el sitemap nunca quede desactualizado
// al publicar nuevo contenido de blog.
//
// Arquitectura de referencia: SPA sin SSR, indexación descubierta vía sitemap.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')

// Única fuente de verdad para la URL del sitio (espejo de src/lib/constants.ts).
function getSiteUrl() {
  try {
    const constants = readFileSync(resolve(ROOT, 'src/lib/constants.ts'), 'utf8')
    const match = constants.match(/export const SITE_URL\s*=\s*['"]([^'"]+)['"]/)
    if (match) return match[1].replace(/\/+$/, '')
  } catch {
    // fallthrough
  }
  return 'https://www.ginecologopabloeglez.com.ar'
}

const SITE_URL = getSiteUrl()

// Fecha base para páginas estáticas. Subirla cuando cambie contenido principal
// de las páginas fijas (no afecta a los posts, que usan su propia `date`).
const SITE_LASTMOD = '2026-07-14'

// Rutas estáticas + landing pages de SEO local (deben coincidir con router.tsx).
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/consulta-ginecologica-mendoza', priority: '0.9', changefreq: 'monthly' },
  { path: '/control-ginecologico-mendoza', priority: '0.9', changefreq: 'monthly' },
  { path: '/salud-hormonal-mendoza', priority: '0.9', changefreq: 'monthly' },
  { path: '/fertilidad-mendoza', priority: '0.9', changefreq: 'monthly' },
  { path: '/anticoncepcion-mendoza', priority: '0.9', changefreq: 'monthly' },
]

// Parsea el frontmatter YAML mínimo de un archivo MDX (solo necesitamos
// `slug` y `date`, ambos strings entre comillas).
function parseFrontmatter(text) {
  const match = text.match(/^---\s*\n([\s\S]*?)\n---/)
  if (!match) return {}
  const data = {}
  for (const line of match[1].split('\n')) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (!m) continue
    let value = m[2].trim()
    if (
      (value.startsWith("'") && value.endsWith("'")) ||
      (value.startsWith('"') && value.endsWith('"'))
    ) {
      value = value.slice(1, -1)
    }
    data[m[1]] = value
  }
  return data
}

const blogDir = resolve(ROOT, 'content/blog')
const blogFiles = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

const blogRoutes = blogFiles.map((file) => {
  const text = readFileSync(resolve(blogDir, file), 'utf8')
  const fm = parseFrontmatter(text)
  const slug = fm.slug || file.replace(/\.mdx$/, '')
  return {
    path: `/blog/${slug}`,
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: fm.date || SITE_LASTMOD,
  }
})

const allRoutes = [
  ...staticRoutes.map((r) => ({ ...r, lastmod: SITE_LASTMOD })),
  ...blogRoutes,
]

const urlEntry = ({ path, lastmod, changefreq, priority }) =>
  `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allRoutes.map(urlEntry).join('\n') +
  `\n</urlset>\n`

writeFileSync(resolve(ROOT, 'public/sitemap.xml'), xml)

console.log(
  `✓ sitemap.xml generado: ${allRoutes.length} URLs ` +
    `(${staticRoutes.length} estáticas + ${blogRoutes.length} posts)`,
)
