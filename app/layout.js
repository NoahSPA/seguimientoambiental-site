import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seguimiento Ambiental - Monitoreo y Cumplimiento Ambiental en Chile',
  description: 'Servicios profesionales de consultoría y acompañamiento para monitoreo, seguimiento y cumplimiento ambiental en Chile.',
  keywords: 'seguimiento ambiental, monitoreo ambiental, cumplimiento ambiental, Chile, SEIA, RCA',
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

