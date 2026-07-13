import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'
import { Stethoscope, CalendarCheck, Activity, Pill, Baby, Ambulance } from 'lucide-react'
import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/lib/constants'

const SERVICES = [
  {
    icon: Stethoscope,
    title: 'Consulta Ginecológica',
    desc: 'Atención integral para toda consulta ginecológica general, incluyendo evaluación y tratamiento quirúrgico.',
    detail:
      'La consulta ginecológica general es el punto de partida para el cuidado de tu salud. Incluye evaluación clínica, historia médica completa y, de ser necesario, solicitud de estudios complementarios o tratamiento quirúrgico.',
    href: '/consulta-ginecologica-mendoza',
  },
  {
    icon: CalendarCheck,
    title: 'Control Ginecológico Anual (PAP y Colposcopía)',
    desc: 'Chequeo preventivo completo con los estudios recomendados según tu edad y antecedentes.',
    detail:
      'El control anual es la mejor herramienta de prevención. Incluye examen clínico, PAP, colposcopía según indicación y evaluación integral de tu salud ginecológica.',
    href: '/control-ginecologico-mendoza',
  },
  {
    icon: Activity,
    title: 'Salud Hormonal',
    desc: 'Evaluación y tratamiento de desequilibrios hormonales que afectan tu calidad de vida.',
    detail:
      'Los desequilibrios hormonales pueden manifestarse con síntomas como cambios en el ciclo menstrual, alteraciones del estado de ánimo, problemas de peso o fatiga. Realizamos una evaluación completa para identificar la causa y ofrecer el tratamiento adecuado.',
    href: '/salud-hormonal-mendoza',
  },
  {
    icon: Pill,
    title: 'Anticoncepción y Seguimiento',
    desc: 'Asesoramiento personalizado para elegir el método anticonceptivo que mejor se adapte a vos y seguimiento continuo.',
    detail:
      'Te ayudamos a elegir el método anticonceptivo más adecuado según tu salud, estilo de vida y necesidades. Evaluamos opciones, beneficios y consideraciones de cada método, con seguimiento periódico.',
    href: '/anticoncepcion-mendoza',
  },
  {
    icon: Baby,
    title: 'Fertilidad',
    desc: 'Primeras consultas y estudios iniciales para quien está buscando un embarazo.',
    detail:
      'Si estás buscando un embarazo y tenés dudas o pasó el tiempo recomendado sin resultados, realizamos una evaluación inicial de fertilidad para identificar factores que puedan estar influyendo.',
    href: '/fertilidad-mendoza',
  },
  {
    icon: Ambulance,
    title: 'Urgencias',
    desc: 'Atención para urgencias ginecológicas y consultas que no pueden esperar.',
    detail:
      'Ante cualquier síntoma urgente, comunicate por WhatsApp para recibir orientación inmediata y coordinar la atención lo antes posible.',
    href: '/contact',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHelmet
        title="Tipos de Consulta Ginecológica"
        description="Ofrezco consulta ginecológica, control anual, salud hormonal, fertilidad, anticoncepción y obstetricia en Mendoza. Conocé los tipos de consulta disponibles."
        canonical="/services"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tipos de Consulta
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Atención ginecológica integral con un enfoque profesional, humano y
              personalizado. Consultá presencial o virtual según tu preferencia.
            </p>
          </div>
        </Reveal>
        <StaggerReveal className="space-y-10">
          {SERVICES.map(({ icon: Icon, title, desc, detail, href }, i) => (
            <StaggerItem key={title}>
              <div className="rounded-lg border border-border/40 bg-white p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h2 className="mb-2 text-2xl font-semibold tracking-tight">
                    {title}
                  </h2>
                  <p className="mb-3 text-muted-foreground">{desc}</p>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button size="sm" asChild>
                      <Link to={href}>Más información</Link>
                    </Button>
                    {i < 5 && (
                      <Button size="sm" variant="booking" asChild>
                        <Link to="/contact#reservar-turno">
                          Solicitar Turno
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
      </section>

      <Reveal>
        <section className="border-t border-border/40 bg-white py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Tenés alguna duda?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Consultame directamente por WhatsApp y te responderé a la brevedad.
          </p>
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
      </section>
      </Reveal>
    </>
  )
}
