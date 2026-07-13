const WHATSAPP = '+5492616575596'
const SITE_URL = 'https://ginecologiamendoza.com.ar'

const physicianSchema = {
  '@type': 'Physician',
  name: 'Dr. Pablo Eglez',
  description: 'Cirujano Ginecólogo en Mendoza. Atención profesional y personalizada.',
  medicalSpecialty: 'Gynecology',
  url: SITE_URL,
  telephone: WHATSAPP,
  image: `${SITE_URL}/og-image.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Belgrano 1484',
    addressLocality: 'Mendoza',
    addressCountry: 'AR',
  },
  knowsAbout: [
    'Gynecology',
    'Obstetrics',
    'Women\'s Health',
    'Contraception',
    'Fertility',
    'Hormonal Health',
  ],
  sameAs: [
    'https://wa.me/5492616575596',
    'https://calendly.com/dr-pabloeglez',
  ],
}

const clinicSchema = {
  '@type': 'MedicalClinic',
  name: 'Centro Diagnóstico Mendoza',
  description: 'Centro médico donde atiende el Dr. Pablo Eglez.',
  url: SITE_URL,
  telephone: WHATSAPP,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Belgrano 1484',
    addressLocality: 'Mendoza',
    addressCountry: 'AR',
  },
}

const localBusinessSchema = {
  '@type': 'LocalBusiness',
  name: 'Dr. Pablo Eglez — Ginecología Clínica y Quirúrgica',
  description: 'Consultorio ginecológico en Mendoza.',
  url: SITE_URL,
  telephone: WHATSAPP,
  image: `${SITE_URL}/og-image.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Belgrano 1484',
    addressLocality: 'Mendoza',
    addressCountry: 'AR',
  },
}

export function GlobalSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [physicianSchema, clinicSchema, localBusinessSchema],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

export function FAQSchema({ questions }: { questions: { q: string; a: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a.replace('Contactarme por WhatsApp', `Contactarme por WhatsApp al ${WHATSAPP}`),
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
