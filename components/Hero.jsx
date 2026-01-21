'use client'

import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap } from 'lucide-react'

/**
 * Componente Hero - Sección principal de la landing page
 * Presenta el valor principal y llamados a la acción
 */
const Hero = () => {
  const benefits = [
    'Monitoreo en tiempo real',
    'Cumplimiento normativo garantizado',
  ]

  const stats = [
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Shield, value: '100%', label: 'Cumplimiento' },
    { icon: Zap, value: '24/7', label: 'Monitoreo' },
  ]

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,81,122,0.1),transparent_50%)] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-600 mb-6 text-balance animate-slide-up">
            Seguimiento Ambiental{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Multidisciplinario
            </span>
          </h1>

          {/* Subheading */}
          <div className="mb-8 max-w-2xl mx-auto text-balance animate-slide-up">
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600">
              Servicios profesionales de consultoría y acompañamiento para el seguimiento y cumplimiento ambiental.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mt-3">
              Garantizamos el cumplimiento normativo a través de expertos en materias ambientales, constructivas y operacionales.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Información
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
            >
              Ver Servicios
            </a>
          </div>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-neutral-700"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto lg:mx-0 mb-2" />
                <div className="text-3xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
          </div>

          {/* Image Column */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-image.jpg"
                alt="Seguimiento ambiental profesional"
                className="w-full h-[600px] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
              {/* Placeholder si no hay imagen */}
              <div className="hidden w-full h-[600px] bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <img
                    src="/isotipo.png"
                    alt="Seguimiento Ambiental"
                    className="w-48 h-48 mx-auto mb-4 object-contain"
                  />
                  <p className="text-neutral-600 font-medium text-lg">Seguimiento Ambiental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

