import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'

export default function FertilidadPage() {
  return (
    <>
      <PageHelmet
        title="Fertilidad en Mendoza"
        description="Primera consulta y estudios iniciales de fertilidad en Mendoza. Acompañamiento profesional del Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/fertilidad-mendoza"
      />
      <Reveal>
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Fertilidad en Mendoza
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Primera consulta y estudios iniciales de fertilidad. Acompañamiento
          profesional.
        </p>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Si estás buscando un embarazo y pasó el tiempo recomendado sin
            resultados, o simplemente querés resolver dudas sobre tu fertilidad,
            realizo una evaluación inicial completa para identificar factores que
            puedan estar influyendo.
          </p>
          <p>
            La primera consulta de fertilidad es un espacio para resolver todas
            tus dudas, conocer los estudios recomendados y establecer un plan
            personalizado.
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
