import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import BlogPage from '@/pages/BlogPage'
import BlogArticlePage from '@/pages/BlogArticlePage'
import ContactPage from '@/pages/ContactPage'
import ConsultaGinecologicaPage from '@/pages/ConsultaGinecologicaPage'
import ControlGinecologicoPage from '@/pages/ControlGinecologicoPage'
import SaludHormonalPage from '@/pages/SaludHormonalPage'
import FertilidadPage from '@/pages/FertilidadPage'
import AnticoncepcionPage from '@/pages/AnticoncepcionPage'

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
