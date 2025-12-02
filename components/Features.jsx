'use client'

import {
  BarChart3,
  Shield,
  Zap,
  Globe,
  Database,
  Bell,
  FileText,
  Users,
} from 'lucide-react'

/**
 * Componente Features - Muestra las características principales
 * de la plataforma con iconos y descripciones
 */
const Features = () => {
  const features = [
    {
      icon: FileText,
      title: 'Estudios de Impacto Ambiental',
      description:
        'Elaboración de EIA y DIA para proyectos de inversión. Asesoría completa en el proceso SEIA, desde la presentación hasta la obtención de la RCA.',
      color: 'bg-primary-600',
    },
    {
      icon: Shield,
      title: 'Seguimiento y Cumplimiento Ambiental',
      description:
        'Acompañamiento continuo para el cumplimiento de condicionantes RCA. Monitoreo de obligaciones ambientales y preparación para fiscalizaciones de la SMA.',
      color: 'bg-accent-600',
    },
    {
      icon: BarChart3,
      title: 'Monitoreo Ambiental',
      description:
        'Monitoreo de calidad de aire, agua, ruido, olores y biodiversidad. Diseño e implementación de programas de monitoreo según normativa vigente.',
      color: 'bg-primary-600',
    },
    {
      icon: Zap,
      title: 'Auditorías Ambientales',
      description:
        'Auditorías internas y externas para verificar cumplimiento normativo. Evaluación de brechas regulatorias y preparación para fiscalizaciones.',
      color: 'bg-accent-600',
    },
    {
      icon: Globe,
      title: 'Líneas de Base Ambientales',
      description:
        'Caracterización ambiental de sitios y áreas de influencia. Estudios de biodiversidad, calidad ambiental y análisis geoespacial.',
      color: 'bg-primary-600',
    },
    {
      icon: Database,
      title: 'Gestión de Obligaciones Ambientales',
      description:
        'Sistema de gestión y seguimiento de todas tus obligaciones ambientales. Alertas y recordatorios para cumplimiento oportuno de compromisos.',
      color: 'bg-accent-600',
    },
    {
      icon: FileText,
      title: 'Reportabilidad Ambiental',
      description:
        'Elaboración y presentación de informes ambientales para SEIA, SMA y organismos sectoriales. Reportes de seguimiento, cumplimiento y cierre de proyectos.',
      color: 'bg-primary-600',
    },
    {
      icon: Users,
      title: 'Asesoría Legal Ambiental',
      description:
        'Asesoría en interpretación normativa, defensa ante la SMA, litigación ambiental y políticas de compliance. Representación ante autoridades ambientales.',
      color: 'bg-accent-600',
    },
    {
      icon: Bell,
      title: 'Permisos Sectoriales',
      description:
        'Gestión de permisos ambientales sectoriales, autorizaciones sanitarias, concesiones y otros trámites requeridos para la operación de proyectos.',
      color: 'bg-primary-600',
    },
    {
      icon: Globe,
      title: 'Relacionamiento Comunitario',
      description:
        'Estrategias de relacionamiento comunitario, participación ciudadana y gestión de conflictos socioambientales. Talleres y capacitaciones.',
      color: 'bg-accent-600',
    },
    {
      icon: Database,
      title: 'Due Diligence Ambiental',
      description:
        'Evaluación de riesgos y pasivos ambientales para transacciones comerciales. Análisis de cumplimiento normativo en procesos de compraventa.',
      color: 'bg-primary-600',
    },
    {
      icon: Users,
      title: 'Capacitación y Consultoría',
      description:
        'Programas de capacitación en gestión ambiental, normativa vigente y mejores prácticas. Consultoría estratégica para políticas de sostenibilidad.',
      color: 'bg-accent-600',
    },
  ]

  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 lg:py-36 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-lg text-neutral-600">
            Ofrecemos una gama completa de servicios profesionales para el seguimiento,
            monitoreo y cumplimiento ambiental en Chile
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              {/* Background Image (opcional) */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <img
                  src={`/images/service-${(index % 6) + 1}.jpg`}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>

              {/* Layout: 40% Icon | 60% Content */}
              <div className="relative z-10 grid grid-cols-5 gap-4 items-center">
                {/* Icon - 40% (2/5 columns) */}
                <div className="col-span-2 flex items-center justify-center w-full h-full min-h-[120px]">
                  <feature.icon className={`w-[50%] h-auto ${feature.color.replace('bg-', 'text-')} group-hover:text-accent-600 transition-colors duration-300`} />
                </div>

                {/* Content - 60% (3/5 columns) */}
                <div className="col-span-3">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="/images/gallery-1.jpg"
              alt="Monitoreo ambiental"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e6f2f7" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2300517A" font-size="20" font-family="Arial"%3EMonitoreo Ambiental%3C/text%3E%3C/svg%3E'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="/images/gallery-2.jpg"
              alt="Consultoría ambiental"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23fef4f0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23F97E3D" font-size="20" font-family="Arial"%3EConsultoría Ambiental%3C/text%3E%3C/svg%3E'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src="/images/gallery-3.jpg"
              alt="Cumplimiento normativo"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23e6f2f7" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%2300517A" font-size="20" font-family="Arial"%3ECumplimiento Normativo%3C/text%3E%3C/svg%3E'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

