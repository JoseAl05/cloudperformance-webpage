import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10">
                <Image
                  src="/cloudperformance-logo.png"
                  alt="CloudPerformance Logo"
                  width={200}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-xl font-bold">Cloud Performance</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {/* <button
                className="text-gray-300 hover:text-white transition-colors"
              >
                Características
              </button>
              <button
                className="text-gray-300 hover:text-white transition-colors"
              >
                Beneficios
              </button>
              <button
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </button> */}
              <a
                href="/login"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Iniciar Sesión
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <a
                href="/login"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-0">
            {/* <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Optimización en Tiempo Real</span>
            </div> */}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Optimiza tu
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Infraestructura Cloud</span>
          </h1>
          {/* <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Monitorea, analiza y optimiza tus recursos de AWS y Azure con nuestra plataforma
            inteligente. Reduce costos hasta un 40% mientras mejoras el rendimiento.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/login"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <button
              onClick={() => scrollToSection('demo')}
              className="border border-gray-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Ver Demo
            </button> */}
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <button>
              <ChevronDown className="h-6 w-6 text-gray-400 mx-auto" />
            </button>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Todo lo que necesitas en una plataforma
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Herramientas avanzadas para optimizar tu infraestructura cloud y maximizar tu ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Multi-Cloud</h3>
              <p className="text-gray-300">
                Gestiona recursos de AWS y Azure desde una sola plataforma unificada
              </p>
            </div>

            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Análisis Avanzado</h3>
              <p className="text-gray-300">
                Dashboards inteligentes con métricas en tiempo real y predicciones
              </p>
            </div>

            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Seguridad Total</h3>
              <p className="text-gray-300">
                Autenticación 2FA y encriptación end-to-end para proteger tus datos
              </p>
            </div>

            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Optimización IA</h3>
              <p className="text-gray-300">
                Algoritmos de machine learning para optimizar automáticamente tus recursos
              </p>
            </div>

            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Colaboración</h3>
              <p className="text-gray-300">
                Espacios de trabajo compartidos para equipos DevOps y administradores
              </p>
            </div>

            <div className="group bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-12 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Reportes</h3>
              <p className="text-gray-300">
                Informes detallados de costos, rendimiento y recomendaciones de optimización
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      {/* <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Resultados que transforman tu negocio
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">40%</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Reducción de Costos</h3>
                    <p className="text-gray-300">Optimización inteligente que reduce gastos operativos significativamente</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">90%</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Mejor Rendimiento</h3>
                    <p className="text-gray-300">Mejora en la velocidad de respuesta y disponibilidad de servicios</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">24/7</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Monitoreo Continuo</h3>
                    <p className="text-gray-300">Supervisión constante con alertas proactivas y recomendaciones</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-4">$120K+</div>
                  <div className="text-xl text-cyan-400 mb-2">Ahorros Promedio Anual</div>
                  <div className="text-gray-300">Por cada empresa que usa nuestra plataforma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para optimizar tu infraestructura?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a cientos de empresas que ya están ahorrando tiempo y dinero con CloudPerformance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Comenzar Prueba Gratuita
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contactar Ventas
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-900 px-4 sm:px-6 lg:px-8 pt-16 pb-8 mt-32 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8">
                <Image
                  src="/cloudperformance-logo.png"
                  alt="CloudPerformance Logo"
                  width={200}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-lg font-semibold">Cloud Performance</span>
            </div>

            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2025 CloudPerformance. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;