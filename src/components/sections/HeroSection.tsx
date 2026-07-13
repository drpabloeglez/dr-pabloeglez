import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { WHATSAPP_NUMBER, WHATSAPP_MSG, IMAGES } from '@/lib/constants'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
} as const

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
} as const

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 py-32 sm:px-6 lg:py-44">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={IMAGES.hero} />
          <img src={IMAGES.heroMobile} alt="" aria-hidden className="size-full object-cover" />
        </picture>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      <motion.div
        className="relative z-10 mx-auto max-w-2xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-medium text-white sm:text-5xl lg:text-6xl"
          variants={child}
        >
          Ginecología Clínica y Quirúrgica en Mendoza
        </motion.h1>
        <motion.p
          className="mt-4 text-base text-white/80"
          variants={child}
        >
          Atención profesional y personalizada. Consulta presencial y virtual con
          turno online.
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap justify-center gap-4"
          variants={child}
        >
          <Button size="lg" variant="booking" asChild>
            <Link to="/contact#reservar-turno">
              Solicitar Turno
            </Link>
          </Button>
          <Button size="lg" variant="whatsapp" asChild>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.svg
          className="size-5 text-white/50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  )
}
