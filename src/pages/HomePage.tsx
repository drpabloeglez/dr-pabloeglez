import PageHelmet from '@/components/PageHelmet'
import HeroSection from '@/components/sections/HeroSection'
import TrustIndicatorsSection from '@/components/sections/TrustIndicatorsSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import BookingProcessSection from '@/components/sections/BookingProcessSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <PageHelmet
        title="Ginecología Clínica y Quirúrgica en Mendoza"
        description="Atención ginecológica profesional y personalizada en Mendoza. Consultas presenciales y virtuales con turno online. Dr. Pablo Eglez, Cirujano Ginecólogo."
        canonical="/"
      />
      <HeroSection />
      <TrustIndicatorsSection />
      <AboutSection />
      <ServicesSection />
      <BookingProcessSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
