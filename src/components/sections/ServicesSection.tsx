import { Link } from 'react-router-dom'
import { Stethoscope, CalendarCheck, Activity, Pill, Baby, Ambulance } from 'lucide-react'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Consulta Ginecológica',
    desc: 'Atención integral para toda consulta ginecológica general, incluyendo evaluación y tratamiento quirúrgico.',
    href: '/consulta-ginecologica-mendoza',
  },
  {
    icon: CalendarCheck,
    title: 'Control Anual (PAP y Colposcopía)',
    desc: 'Chequeo ginecológico preventivo con estudios recomendados.',
    href: '/control-ginecologico-mendoza',
  },
  {
    icon: Activity,
    title: 'Salud Hormonal',
    desc: 'Evaluación y tratamiento de desequilibrios hormonales.',
    href: '/salud-hormonal-mendoza',
  },
  {
    icon: Pill,
    title: 'Anticoncepción y Seguimiento',
    desc: 'Asesoramiento personalizado sobre métodos anticonceptivos y seguimiento.',
    href: '/anticoncepcion-mendoza',
  },
  {
    icon: Baby,
    title: 'Fertilidad',
    desc: 'Primeras consultas y estudios iniciales de fertilidad.',
    href: '/fertilidad-mendoza',
  },
  {
    icon: Ambulance,
    title: 'Urgencias',
    desc: 'Atención para urgencias y consultas específicas.',
    href: '/contact',
  },
]

export default function ServicesSection() {
  return (
    <section className="border-t border-border/40 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Tipos de Consulta
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Atención integral para tu salud ginecológica
          </p>
        </Reveal>
        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc, href }) => (
            <StaggerItem key={title}>
              <Link
                to={href}
                className="group block rounded-lg border border-border/40 p-6 transition-colors hover:border-primary/20 hover:bg-primary/5"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
