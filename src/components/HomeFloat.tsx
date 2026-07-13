import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function HomeFloat() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <AnimatePresence>
      {!isHome && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.35, ease: 'easeIn' }}
          className="fixed bottom-6 left-6 z-50"
        >
          <Link
            to="/"
            className="flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Ir al inicio"
          >
            <Home className="size-7" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
