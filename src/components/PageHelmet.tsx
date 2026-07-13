import { Helmet } from 'react-helmet-async'

interface PageHelmetProps {
  title: string
  description: string
  canonical?: string
}

const SITE_URL = 'https://ginecologiamendoza.com.ar'
const OG_IMAGE = `${SITE_URL}/og-image.png`
const SITE_NAME = 'Dr. Pablo Eglez — Ginecología Clínica y Quirúrgica en Mendoza'

export default function PageHelmet({ title, description, canonical }: PageHelmetProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = canonical
    ? `${SITE_URL}${canonical}`
    : SITE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
