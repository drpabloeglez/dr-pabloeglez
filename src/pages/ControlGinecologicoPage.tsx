import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'

export default function ControlGinecologicoPage() {
  return (
    <>
      <PageHelmet
        title="Control Ginecológico Anual en Mendoza"
        description="Control ginecológico anual completo en Mendoza. PAP, colposcopía y evaluación integral. Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/control-ginecologico-mendoza"
      />
      <Reveal>
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Control Ginecológico Anual en Mendoza
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          La prevención es la mejor herramienta para tu salud. Control anual
          completo en Mendoza.
        </p>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            El control ginecológico anual es fundamental para detectar
            tempranamente cualquier alteración y mantener tu salud en óptimas
            condiciones. Incluye examen clínico, PAP, colposcopía según
            indicación, y evaluación integral.
          </p>
          <p>
            Se recomienda realizar el control una vez al año, incluso si no tenés
            síntomas ni molestias.
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
