import React from 'react'
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react'

/**
 * Componente CTA - Call to Action final
 * Incluye formulario de contacto y múltiples opciones de contacto
 */
const CTA = () => {
  return (
    <section
      id="contacto"
      className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/images/cta-background.jpg"
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-8">
              Contacta con nosotros y descubre cómo podemos ayudarte a
              cumplir con todas tus obligaciones ambientales
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Solicita Información
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Email corporativo
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="juan@empresa.cl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Mi Empresa S.A."
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tus necesidades..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Enviar Solicitud
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contacto@seguimientoambiental.cl"
                      className="text-primary-100 hover:text-white transition-colors"
                    >
                      contacto@seguimientoambiental.cl
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+56912345678"
                      className="text-primary-100 hover:text-white transition-colors"
                    >
                      +56 9 1234 5678
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Agenda una llamada
                    </h3>
                    <p className="text-primary-100 text-sm mb-2">
                      Disponible de lunes a viernes, 9:00 - 18:00
                    </p>
                    <a
                      href="#"
                      className="text-white font-semibold hover:underline inline-flex items-center gap-2"
                    >
                      Agendar ahora
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

