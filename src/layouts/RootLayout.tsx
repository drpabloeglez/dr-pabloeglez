import { Link, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { GlobalSchema } from '@/lib/schema'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/lib/constants'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import HomeFloat from '@/components/HomeFloat'
import { useState, useEffect, Suspense } from 'react'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio' },
  { to: '/about', label: 'Sobre Mí' },
  { to: '/services', label: 'Tipos de Consulta' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contacto' },
]

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-svh flex-col bg-background text-foreground">
      <GlobalSchema />

      <header className="sticky top-0 z-40 border-border/40 border-b bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-primary"
            onClick={() => {
              setMenuOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Dr. Pablo Eglez
          </Link>

          {/* Desktop nav */}
          <ul className="hidden gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile menu backdrop */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="fixed inset-0 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full z-40 overflow-hidden border-border/40 border-t bg-white md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ul className="mx-auto flex max-w-6xl flex-col items-center overflow-hidden px-4 pb-4 sm:px-6 lg:px-8">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.to}
                    className="w-full"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2, delay: i * 0.06 }}
                  >
                    <Link
                      to={item.to}
                      className="text-muted-foreground hover:text-foreground block py-2 text-center text-base transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <main className="flex-1">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="border-border/40 border-t py-8 text-center text-sm text-muted-foreground">
        <p>Dr. Pablo Eglez — Cirujano Ginecólogo — Mendoza, Argentina</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link
            to="/contact#reservar-turno"
            className="hover:text-foreground transition-colors"
          >
            Turno online
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            WhatsApp
          </a>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contacto
          </Link>
        </div>
      </footer>
      <HomeFloat />
      <WhatsAppFloat />
    </div>
  )
}
