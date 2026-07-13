import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/lib/constants'

export function CTA({ children }: { children?: ReactNode }) {
  return (
    <div className="not-prose mt-10 rounded-lg border border-primary/20 bg-primary/5 p-6 sm:p-8">
      {children && (
        <div className="mb-4 text-muted-foreground">{children}</div>
      )}
      <div className="flex flex-wrap gap-4">
        <Button size="lg" variant="booking" asChild>
          <Link to="/contact#reservar-turno">Solicitar Turno</Link>
        </Button>
        <Button size="lg" variant="whatsapp" asChild>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}
