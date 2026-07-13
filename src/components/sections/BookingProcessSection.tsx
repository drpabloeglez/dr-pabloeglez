import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'

const STEPS = [
  { step: 1, title: 'Elegí el tipo de consulta', desc: 'Seleccioná si querés atención presencial o virtual.' },
  { step: 2, title: 'Seleccioná fecha y horario', desc: 'Elegí el turno que mejor se adapte a tu agenda.' },
  { step: 3, title: 'Completá tus datos', desc: 'Ingresá tu información de contacto y motivo de consulta.' },
  { step: 4, title: 'Recibí la confirmación', desc: 'Te llegará la confirmación con todos los detalles del turno.' },
]

export default function BookingProcessSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Cómo solicitar un turno?
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Reservá tu consulta en simples pasos
          </p>
        </Reveal>
        <StaggerReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ step, title, desc }) => (
            <StaggerItem key={step} className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {step}
              </div>
              <h3 className="mb-1 font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
