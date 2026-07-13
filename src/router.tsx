import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'

// Code-split every route except the home page (the LCP/initial view) so their
// code is fetched only when navigated to, shrinking the initial JS payload.
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogArticlePage = lazy(() => import('@/pages/BlogArticlePage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const ConsultaGinecologicaPage = lazy(() => import('@/pages/ConsultaGinecologicaPage'))
const ControlGinecologicoPage = lazy(() => import('@/pages/ControlGinecologicoPage'))
const SaludHormonalPage = lazy(() => import('@/pages/SaludHormonalPage'))
const FertilidadPage = lazy(() => import('@/pages/FertilidadPage'))
const AnticoncepcionPage = lazy(() => import('@/pages/AnticoncepcionPage'))

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:slug', element: <BlogArticlePage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'consulta-ginecologica-mendoza', element: <ConsultaGinecologicaPage /> },
      { path: 'control-ginecologico-mendoza', element: <ControlGinecologicoPage /> },
      { path: 'salud-hormonal-mendoza', element: <SaludHormonalPage /> },
      { path: 'fertilidad-mendoza', element: <FertilidadPage /> },
      { path: 'anticoncepcion-mendoza', element: <AnticoncepcionPage /> },
    ],
  },
])
