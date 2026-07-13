import { UserCheck, Monitor, Shield, Calendar } from 'lucide-react'
import { StaggerReveal, StaggerItem } from '@/components/ui/reveal'

const INDICATORS = [
  { icon: UserCheck, label: 'Atención personalizada' },
  { icon: Monitor, label: 'Consultas presenciales y virtuales' },
  { icon: Shield, label: 'Atención confidencial' },
  { icon: Calendar, label: 'Turno online' },
]

export default function TrustIndicatorsSection() {
  return (
    <section className="border-y border-border/40 bg-white py-12">
      <StaggerReveal className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {INDICATORS.map(({ icon: Icon, label }) => (
          <StaggerItem key={label} className="flex flex-col items-center gap-3 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
              <Icon className="size-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {label}
            </span>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </section>
  )
}
