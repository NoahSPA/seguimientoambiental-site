'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

/**
 * Componente Footer - Pie de página con información de contacto
 * y enlaces importantes
 */
const Footer = () => {
  const footerLinks = {
    empresa: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreras', href: '#' },
    ],
    legal: [
      { label: 'Términos de servicio', href: '#' },
      { label: 'Política de privacidad', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  }
  

  const hasReference = (link) => link?.href && link.href !== '#'
  const companyLinks = footerLinks.empresa.filter(hasReference)
  const legalLinks = footerLinks.legal.filter(hasReference)

  const sections = [
    { title: 'Empresa', links: companyLinks },
    { title: 'Legal', links: legalLinks },
  ].filter((section) => section.links.length > 0)

  const gridClassName =
    sections.length === 2
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'
      : sections.length === 1
        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className={`${gridClassName} gap-8 lg:gap-12`}>
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Seguimiento Ambiental"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-neutral-400 mb-6 max-w-md">
              Servicios profesionales de consultoría y acompañamiento para el seguimiento y cumplimiento ambiental.
              Garantizamos el cumplimiento normativo a través de expertos en materias ambientales, constructivas y operacionales.
            </p>
            <a
              href="https://www.seguimientoambiental.cl"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors mb-6"
            >
              www.seguimientoambiental.cl
            </a>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-primary-600 font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:mirellamarin@gmail.com"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                mirellamarin@gmail.com
              </a>
              <a
                href="tel:+56990826131"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +56 9 9082 6131
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin className="w-4 h-4" />
                Santiago, Chile
              </div>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-primary-600 font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Seguimiento Ambiental. Todos los
              derechos reservados.
            </p>
            <div />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

