import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FAQSchema } from '@/lib/schema'
import { Reveal, StaggerReveal, StaggerItem } from '@/components/ui/reveal'

const FAQS = [
  {
    q: '¿Cómo solicito un turno?',
    a: 'Podés solicitar un turno online a través de Calendly haciendo clic en "Solicitar Turno", o contactarme directamente por WhatsApp.',
  },
  {
    q: '¿Las consultas pueden ser virtuales?',
    a: 'Sí, ofrezco consultas tanto presenciales como virtuales a través de Google Meet, según tu preferencia.',
  },
  {
    q: '¿Dónde se encuentra el consultorio?',
    a: 'Atiendo en Centro Diagnóstico Mendoza, ubicado en Av. Belgrano 1484, Mendoza.',
  },
  {
    q: '¿Atiende obras sociales?',
    a: 'Sí, trabajo con la mayoría de las obras sociales. Consultame por tu cobertura específica al solicitar el turno.',
  },
  {
    q: '¿Necesito orden médica?',
    a: 'No es necesario. Podés solicitar un turno directamente sin orden médica previa.',
  },
  {
    q: '¿Cuándo debo realizar mi control anual?',
    a: 'Se recomienda realizar el control ginecológico anual, incluso si no tenés síntomas. La prevención es clave para tu salud.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="border-t border-border/40 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Respuestas a las dudas más comunes
          </p>
        </Reveal>
        <StaggerReveal className="space-y-3">
          {FAQS.map((faq, i) => (
            <StaggerItem key={i}>
              <div className="rounded-lg border border-border/40">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-medium transition-colors hover:bg-primary/5"
                >
                  {faq.q}
                  <ChevronDown
                    className={cn(
                      'size-4 shrink-0 text-muted-foreground transition-transform',
                      open === i && 'rotate-180',
                    )}
                  />
                </button>
                {open === i && (
                  <div className="border-t border-border/40 px-5 py-4 text-sm text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
      <FAQSchema questions={FAQS} />
    </section>
  )
}
