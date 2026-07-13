import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'

export default function AnticoncepcionPage() {
  return (
    <>
      <PageHelmet
        title="Anticoncepción y Seguimiento en Mendoza"
        description="Asesoramiento personalizado para elegir el método anticonceptivo ideal y seguimiento en Mendoza. Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/anticoncepcion-mendoza"
      />
      <Reveal>
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Anticoncepción y Seguimiento en Mendoza
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Asesoramiento personalizado para elegir el método anticonceptivo ideal
          para vos, con seguimiento continuo.
        </p>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Elegir el método anticonceptivo adecuado es una decisión importante.
            Te ayudo a conocer las opciones disponibles, sus ventajas y
            consideraciones, para que puedas tomar una decisión informada y
            adaptada a tu estilo de vida y necesidades de salud.
          </p>
          <p>
            El asesoramiento es completamente confidencial y sin presiones. Mi
            objetivo es que te sientas segura y acompañada en tu decisión.
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
