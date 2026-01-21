import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.seguimientoambiental.cl'),
  title: {
    default: 'Seguimiento Ambiental | Consultoría y Cumplimiento Ambiental',
    template: '%s | Seguimiento Ambiental',
  },
  description:
    'Consultoría ambiental integral en Chile: estudios de impacto, seguimiento RCA, reportabilidad, monitoreo y cumplimiento normativo con equipos expertos.',
  keywords: [
    'consultoría ambiental',
    'seguimiento ambiental',
    'cumplimiento ambiental',
    'monitoreo ambiental',
    'RCA',
    'SEIA',
    'SMA',
    'Chile',
  ],
  authors: [{ name: 'Seguimiento Ambiental' }],
  creator: 'Seguimiento Ambiental',
  publisher: 'Seguimiento Ambiental',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: '/',
    title: 'Seguimiento Ambiental | Consultoría y Cumplimiento Ambiental',
    description:
      'Consultoría ambiental integral en Chile: estudios de impacto, seguimiento RCA, reportabilidad, monitoreo y cumplimiento normativo con equipos expertos.',
    siteName: 'Seguimiento Ambiental',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguimiento Ambiental | Consultoría y Cumplimiento Ambiental',
    description:
      'Consultoría ambiental integral en Chile: estudios de impacto, seguimiento RCA, reportabilidad, monitoreo y cumplimiento normativo con equipos expertos.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

