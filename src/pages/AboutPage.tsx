import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'
import { WHATSAPP_NUMBER, WHATSAPP_MSG, IMAGES } from '@/lib/constants'

export default function AboutPage() {
  return (
    <>
      <PageHelmet
        title="Sobre Mí — Cirujano Ginecólogo"
        description="Conocé al Dr. Pablo Eglez, Cirujano Ginecólogo en Mendoza. Formación, experiencia y filosofía de atención profesional y personalizada."
        canonical="/about"
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal x={-30} className="mx-auto size-64 overflow-hidden rounded-full lg:size-72">
            <img
              src={IMAGES.profileAbout}
              alt="Dr. Pablo Eglez — Cirujano Ginecólogo"
              className="size-full object-cover"
            />
          </Reveal>
          <Reveal x={30} delay={0.1}>
            <h1 className="mb-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Dr. Pablo Eglez
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Cirujano Ginecólogo — Matrícula Profesional 13539
            </p>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Soy cirujano ginecólogo dedicado a la atención integral de la
                salud femenina. Mi formación y experiencia están orientadas a
                brindar una atención basada en la evidencia médica más actual,
                combinada con un trato humano, cercano y respetuoso.
              </p>
              <p>
                Entiendo que cada consulta ginecológica es personal y única. Por
                eso, mi enfoque se centra en escuchar a cada paciente, resolver
                sus dudas con claridad y acompañarla en cada etapa de su salud
                con absoluta confidencialidad.
              </p>
              <p>
                Atiendo en{' '}
                <strong>Centro Diagnóstico Mendoza</strong>, ubicado en Av.
                Belgrano 1484, Mendoza. Ofrezco consultas presenciales y
                virtuales, adaptándome a las necesidades de cada paciente.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
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
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="border-t border-border/40 bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">
              Formación y Trayectoria
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <StaggerReveal staggerDelay={0.08}>
                <StaggerItem>
                  <h3 className="mb-1 font-semibold text-foreground">
                    Formación Académica
                  </h3>
                  <p>
                    Médico graduado con especialización en Ginecología y
                    Obstetricia. Formación continua en salud femenina integral,
                    anticoncepción, salud hormonal y fertilidad.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <h3 className="mb-1 font-semibold text-foreground">
                    Experiencia Profesional
                  </h3>
                  <p>
                    Amplia trayectoria en atención ginecológica general, controles
                    preventivos anuales, asesoramiento anticonceptivo, evaluación
                    hormonal y consultas de fertilidad. Atención tanto en
                    consultorio particular como en Centro Diagnóstico Mendoza.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <h3 className="mb-1 font-semibold text-foreground">
                    Filosofía de Atención
                  </h3>
                  <p>
                    Creo en una medicina preventiva, cercana y personalizada. Mi
                    objetivo es que cada paciente se sienta escuchada, acompañada y
                    segura en cada consulta.
                  </p>
                </StaggerItem>
              </StaggerReveal>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              ¿Querés consultarme?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Reservá tu turno online o contactame por WhatsApp. Estoy aquí para
              ayudarte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="booking" asChild>
                <Link to="/contact#reservar-turno">
                  Solicitar Turno
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Ver Tipos de Consulta</Link>
              </Button>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  )
}
