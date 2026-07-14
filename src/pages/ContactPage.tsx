import { useEffect, useRef } from 'react'
import { MapPin, Phone, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/lib/constants'

const CALENDLY_URL = 'https://calendly.com/dr-pabloeglez/30min?text_color=1c1c1c&primary_color=5b9bd5'
const MAP_URL = 'https://maps.google.com/maps?q=Av.+Belgrano+1484,+Mendoza,+Argentina&output=embed'

export default function ContactPage() {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current || document.querySelector('script[src*="calendly"]')) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    widgetRef.current.appendChild(script)
  }, [])

  return (
    <>
      <PageHelmet
        title="Contacto"
        description="Reservá tu turno online o consultame por WhatsApp. Dirección: Av. Belgrano 1484, Mendoza. Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/contact"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Contacto
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Reservá tu turno online o consultame por WhatsApp.
            </p>
          </div>
        </Reveal>

        <StaggerReveal className="mb-16 grid gap-6 sm:grid-cols-2">
          <StaggerItem className="flex flex-col items-center gap-3 rounded-lg border border-border/40 bg-white p-6 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="size-5 text-primary" />
            </div>
            <h2 className="text-base font-semibold">Dirección</h2>
            <p className="text-sm text-muted-foreground">
              Av. Belgrano 1484
              <br />
              Mendoza, Argentina
            </p>
            <Button size="sm" variant="outline" asChild>
              <a href="#ubicacion">
                <Map className="size-4" />
                Ver en el mapa
              </a>
            </Button>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center gap-3 rounded-lg border border-border/40 bg-white p-6 text-center">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Phone className="size-5 text-primary" />
            </div>
            <h2 className="text-base font-semibold">WhatsApp</h2>
            <Button size="sm" variant="whatsapp" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactarse
              </a>
            </Button>
          </StaggerItem>
        </StaggerReveal>

        <Reveal>
          <div id="reservar-turno" className="mb-16">
            <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Reservá tu turno online
            </h2>
            <div className="overflow-hidden rounded-lg border border-border/40">
              <div
                ref={widgetRef}
                className="calendly-inline-widget min-w-[320px]"
                data-url={CALENDLY_URL}
                style={{ height: '700px' }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div id="ubicacion" className="mb-16 scroll-mt-20">
            <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              Ubicación
            </h2>
            <div className="overflow-hidden rounded-lg border border-border/40">
              <iframe
                src={MAP_URL}
                width="100%"
                height="400"
                frameBorder="0"
                title="Ubicación"
                className="w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Centro Diagnóstico Mendoza — Av. Belgrano 1484, Mendoza
            </p>
          </div>
        </Reveal>

      </section>
    </>
  )
}
