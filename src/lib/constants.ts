import profileSrc from '@/assets/images/pablo-eglez-pictures/profile/ProfilePictureHeadshot.jpg'
import profileAboutSrc from '@/assets/images/pablo-eglez-pictures/profile/ProfilePictureHeadshotv2.jpg'

export const WHATSAPP_NUMBER = '5492616575596'
export const WHATSAPP_MSG = encodeURIComponent('Hola Dr. Eglez, quisiera solicitar información sobre una consulta.')
export const SITE_URL = 'https://www.ginecologopabloeglez.com.ar'

// NAP (Name, Address, Phone) — debe ser IDÉNTICO en schema.org, contenido, footer y Google Business Profile.
export const BUSINESS = {
  name: 'Dr. Pablo Eglez — Ginecología Clínica y Quirúrgica',
  physicianName: 'Dr. Pablo Eglez',
  clinicName: 'Centro Diagnóstico Mendoza',
  streetAddress: 'Av. Belgrano 1484',
  addressLocality: 'Mendoza',
  addressRegion: 'Mendoza',
  postalCode: '5500',
  addressCountry: 'AR',
  // Coordenadas aproximadas del consultorio. DEBEN coincidir EXACTAMENTE con el pin de Google Business Profile.
  geo: { latitude: -32.8908, longitude: -68.8272 },
  // Reemplazar por la URL real del Perfil de Google Business (clave para SEO local). Dejar vacío si no existe todavía.
  googleBusinessProfile: '',
  calendly: 'https://calendly.com/dr-pabloeglez',
  // Horario de atención (lunes a viernes). Usar nombres de día en inglés para schema.org.
  openingHours: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
  ],
} as const

export const IMAGES = {
  profile: profileSrc,
  profileAbout: profileAboutSrc,
} as const
