import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  x?: number
  y?: number
  immediate?: boolean
}

export function Reveal({ children, className, delay = 0, x = 0, y = 30, immediate }: RevealProps) {
  const motionProps = immediate
    ? { initial: { opacity: 0, x, y }, animate: { opacity: 1, x: 0, y: 0 } }
    : { initial: { opacity: 0, x, y }, whileInView: { opacity: 1, x: 0, y: 0 }, viewport: { once: true, amount: 0.2 } as const }

  return (
    <motion.div
      className={className}
      {...motionProps}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  immediate?: boolean
}

export function StaggerReveal({ children, className, staggerDelay = 0.1, immediate }: StaggerRevealProps) {
  const motionProps = immediate
    ? { initial: 'hidden', animate: 'visible' }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 } as const }

  return (
    <motion.div
      className={className}
      {...motionProps}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}
