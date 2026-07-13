import { BUSINESS, SITE_URL, WHATSAPP_NUMBER } from '@/lib/constants'

const WHATSAPP = `+${WHATSAPP_NUMBER}`
const OG_IMAGE = `${SITE_URL}/og-image.png`

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.addressLocality,
  addressRegion: BUSINESS.addressRegion,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.addressCountry,
}

// Señal geográfica clave para el paquete local de Google y Google Maps.
const GEO = {
  '@type': 'GeoCoordinates',
  latitude: BUSINESS.geo.latitude,
  longitude: BUSINESS.geo.longitude,
}

// Área de servicio: Mendoza (ciudad + provincia) y Argentina.
const AREA_SERVED = [
  { '@type': 'City', name: 'Mendoza' },
  { '@type': 'AdministrativeArea', name: 'Mendoza' },
  { '@type': 'Country', name: 'Argentina' },
]

// sameAs: perfiles verificables. El Perfil de Google Business es el factor #1 de SEO local.
const sameAs = [
  'https://wa.me/5492616575596',
  BUSINESS.calendly,
  BUSINESS.googleBusinessProfile,
].filter((value): value is string => Boolean(value))

const OPENING_HOURS = BUSINESS.openingHours.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: h.dayOfWeek,
  opens: h.opens,
  closes: h.closes,
}))

const physicianSchema = {
  '@type': 'Physician',
  '@id': `${SITE_URL}/#physician`,
  name: BUSINESS.physicianName,
  description: 'Cirujano Ginecólogo en Mendoza. Atención profesional y personalizada.',
  medicalSpecialty: 'Gynecology',
  url: SITE_URL,
  telephone: WHATSAPP,
  image: OG_IMAGE,
  address: ADDRESS,
  geo: GEO,
  areaServed: AREA_SERVED,
  priceRange: '$$',
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Médico Especialista en Ginecología y Obstetricia (Argentina)',
    credentialCategory: 'medical license',
  },
  knowsAbout: [
    'Ginecología',
    'Obstetricia',
    'Salud de la mujer',
    'Anticoncepción',
    'Fertilidad',
    'Salud hormonal',
    'Gynecology',
    'Obstetrics',
    "Women's Health",
    'Contraception',
    'Fertility',
    'Hormonal Health',
  ],
  sameAs,
}

const clinicSchema = {
  '@type': 'MedicalClinic',
  '@id': `${SITE_URL}/#clinic`,
  name: BUSINESS.clinicName,
  description: 'Centro médico donde atiende el Dr. Pablo Eglez en Mendoza.',
  url: SITE_URL,
  telephone: WHATSAPP,
  address: ADDRESS,
  geo: GEO,
  areaServed: AREA_SERVED,
  openingHoursSpecification: OPENING_HOURS,
  priceRange: '$$',
  sameAs,
}

const localBusinessSchema = {
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: BUSINESS.name,
  description: 'Consultorio ginecológico en Mendoza, Argentina.',
  url: SITE_URL,
  telephone: WHATSAPP,
  image: OG_IMAGE,
  address: ADDRESS,
  geo: GEO,
  areaServed: AREA_SERVED,
  priceRange: '$$',
  founder: { '@type': 'Person', name: BUSINESS.physicianName },
  sameAs,
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
