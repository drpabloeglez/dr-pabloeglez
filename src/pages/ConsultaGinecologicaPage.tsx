import { Link } from 'react-router-dom'
import { Reveal } from '@/components/ui/reveal'
import { Button } from '@/components/ui/button'
import PageHelmet from '@/components/PageHelmet'

export default function ConsultaGinecologicaPage() {
  return (
    <>
      <PageHelmet
        title="Consulta Ginecológica en Mendoza"
        description="Atención ginecológica profesional en Mendoza. Consultas presenciales y virtuales con el Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/consulta-ginecologica-mendoza"
      />
      <Reveal>
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Consulta Ginecológica en Mendoza
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Atención profesional y personalizada para toda consulta ginecológica en
          Mendoza. Presencial o virtual.
        </p>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            La consulta ginecológica general es el primer paso para el cuidado de
            tu salud íntima. Durante la consulta, realizo una evaluación completa
            de tu estado de salud, escucho tus inquietudes y te brindo la
            orientación médica que necesitás con un trato cercano y confidencial.
          </p>
          <p>
            Atiendo en Centro Diagnóstico Mendoza (Av. Belgrano 1484) y también
            ofrezco consultas virtuales para mayor comodidad.
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
