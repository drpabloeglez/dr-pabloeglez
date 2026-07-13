import { Reveal } from '@/components/ui/reveal'
import { IMAGES } from '@/lib/constants'

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal x={-30} className="mx-auto size-64 overflow-hidden rounded-full lg:size-72">
          <img
            src={IMAGES.profile}
            alt="Dr. Pablo Eglez — Cirujano Ginecólogo"
            className="size-full object-cover"
          />
        </Reveal>
        <Reveal x={30} delay={0.1}>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Dr. Pablo Eglez
          </h2>
          <p className="mb-2 text-sm text-muted-foreground">
            Matrícula Profesional: 13539
          </p>
          <p className="mb-4 text-sm text-muted-foreground">
            Centro Diagnóstico Mendoza — Av. Belgrano 1484, Mendoza
          </p>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Cirujano ginecólogo dedicado a la atención integral de la salud
              femenina. Mi enfoque combina la excelencia médica con un trato humano y
              cercano, priorizando la comodidad y el bienestar de cada paciente.
            </p>
            <p>
              Atiendo consultas ginecológicas generales, controles anuales,
              salud hormonal, anticoncepción, fertilidad, tratamiento quirúrgico
              y urgencias, tanto de forma presencial como virtual.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
