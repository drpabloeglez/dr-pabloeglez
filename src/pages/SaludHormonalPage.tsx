import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'

export default function SaludHormonalPage() {
  return (
    <>
      <PageHelmet
        title="Salud Hormonal Femenina en Mendoza"
        description="Evaluación y tratamiento de desequilibrios hormonales en Mendoza. Recuperá tu bienestar con el Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/salud-hormonal-mendoza"
      />
      <Reveal>
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Salud Hormonal Femenina en Mendoza
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Evaluación y tratamiento de desequilibrios hormonales. Recuperá tu
          bienestar.
        </p>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Los desequilibrios hormonales pueden afectar tu calidad de vida de
            muchas formas. Si experimentás cambios en tu ciclo menstrual,
            alteraciones del estado de ánimo, problemas de peso, fatiga u otros
            síntomas, una evaluación hormonal puede ayudarte a encontrar la causa
            y el tratamiento adecuado.
          </p>
          <p>
            Realizo una evaluación completa para identificar el origen del
            desequilibrio y ofrecerte un plan de tratamiento personalizado.
          </p>
        </div>
        <div className="mt-8">
          <Button size="lg" variant="booking" asChild>
            <Link to="/contact#reservar-turno">
              Solicitar Turno
            </Link>
          </Button>
        </div>
      </section>
    </Reveal>
    </>
  )
}
