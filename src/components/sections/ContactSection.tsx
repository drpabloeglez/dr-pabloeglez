import { Link } from 'react-router-dom'
import { MapPin, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section className="border-t border-border/40 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Contacto
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Estoy aquí para ayudarte
          </p>
        </Reveal>
        <StaggerReveal className="grid gap-8 sm:grid-cols-3">
          <StaggerItem className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="size-5 text-primary" />
            </div>
            <h3 className="font-semibold">Dirección</h3>
            <p className="text-sm text-muted-foreground">
              Av. Belgrano 1484
              <br />
              Mendoza, Argentina
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Phone className="size-5 text-primary" />
            </div>
            <h3 className="font-semibold">Teléfono</h3>
            <p className="text-sm text-muted-foreground">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                261 657-5596
              </a>
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="size-5 text-primary" />
            </div>
            <h3 className="font-semibold">Turno Online</h3>
            <Button size="sm" variant="booking" asChild>
              <Link to="/contact#reservar-turno">
                Reservar Turno
              </Link>
            </Button>
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  )
}
