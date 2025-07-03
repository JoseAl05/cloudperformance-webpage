// import { AlertComponent } from '@/components/azure/home/AlertComponent'
// import LogoutButton from '@/components/LogoutButton' // 👈 importa el botón
// import Head from 'next/head'
// import Image from "next/image"
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
//       <Head>
//         <title>Cloud Performance</title>
//         <meta name="description" content="Cloud Performance landing page" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <AlertComponent/>

//       <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
//         <div className="flex flex-col items-center gap-4">
//           <Image
//             src="/cloudperformance-logo.png"
//             alt="Cloud Performance"
//             width={200}
//             height={200}
//             className="rounded-lg shadow-md"
//           />
//           <h1 className="text-4xl font-bold text-gray-800 mt-4">
//             Cloud Performance
//           </h1>

//           <Link href='/azure/main-view' className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition-all'>
//             Dashboards Azure
//           </Link>
//           <Link href='/aws/main-view' className='bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition-all'>
//             Dashboards AWS
//           </Link>

//           {/* 👇 Aquí va el botón de cerrar sesión */}
//           <LogoutButton />
//         </div>
//       </main>
//     </div>
//   )
// }

'use client';

import React, { useState } from 'react';
import { ChevronRight, Cloud, Shield, BarChart3, Users, LogOut } from 'lucide-react';
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image'

const CloudSelector = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCloudSelection = (provider: string) => {
    // Aquí redirigirías a la dashboard correspondiente
    console.log(`Navegando a dashboard de ${provider}`);
    // window.location.href = `/dashboard/${provider.toLowerCase()}`;
  };

  const handleLogout = () => {
    // Lógica de logout
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10">
            <Image
              src="/cloudperformance-logo.png" 
              alt="CloudPerformance Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Cloud Performance</h1>
            <p className="text-gray-400 text-sm">Multi-Cloud Management Platform</p>
          </div>
        </div>
        <LogoutButton className="text-black bg-white hover:bg-gray-100"/>
 
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Welcome Section */}
          <div className="mb-12">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Sesión Iniciada Correctamente</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Selecciona tu
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Plataforma Cloud</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accede a los dashboards de optimización para tus recursos en la nube
            </p>
          </div>

          {/* Cloud Provider Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AWS Card */}
            <div
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 ${
                hoveredCard === 'aws' 
                  ? 'border-orange-500/60 shadow-2xl shadow-orange-500/20' 
                  : 'border-slate-700 hover:border-orange-500/40'
              }`}
              onMouseEnter={() => setHoveredCard('aws')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCloudSelection('AWS')}
            >
              {/* AWS Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* AWS Logo Area */}
                <Link href="/aws/main-view" className="block group">
                  <div className="mb-8 text-center cursor-pointer">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white font-bold text-2xl">AWS</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      Amazon Web Services
                    </h3>
                  </div>
                </Link>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <BarChart3 className="h-4 w-4 mr-3 text-orange-500" />
                    <span className="text-sm">EC2, RDS, Lambda Analytics</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <Cloud className="h-4 w-4 mr-3 text-orange-500" />
                    <span className="text-sm">Cost Optimization</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <Shield className="h-4 w-4 mr-3 text-orange-500" />
                    <span className="text-sm">Security Monitoring</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href="/aws/main-view">
                  <div className="flex items-center justify-center text-orange-500 group-hover:text-orange-400 transition-colors">
                    <span className="font-semibold mr-2">Acceder a Dashboard</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>

            {/* Azure Card */}
            <div
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-2 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 ${
                hoveredCard === 'azure' 
                  ? 'border-blue-500/60 shadow-2xl shadow-blue-500/20' 
                  : 'border-slate-700 hover:border-blue-500/40'
              }`}
              onMouseEnter={() => setHoveredCard('azure')}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCloudSelection('Azure')}
            >
              {/* Azure Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Azure Logo Area */}
                <Link href="/azure/main-view" className="block group">
                  <div className="mb-8 text-center cursor-pointer">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white font-bold text-lg">Azure</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      Microsoft Azure
                    </h3>
                  </div>
                </Link>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <BarChart3 className="h-4 w-4 mr-3 text-blue-500" />
                    <span className="text-sm">VM, Storage, Functions</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <Cloud className="h-4 w-4 mr-3 text-blue-500" />
                    <span className="text-sm">Resource Optimization</span>
                  </div>
                  <div className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                    <Shield className="h-4 w-4 mr-3 text-blue-500" />
                    <span className="text-sm">Compliance Monitoring</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link href="/azure/main-view">
                  <div className="flex items-center justify-center text-blue-500 group-hover:text-blue-400 transition-colors">
                    <span className="font-semibold mr-2">Acceder a Dashboard</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Puedes cambiar entre plataformas en cualquier momento desde el menú principal
            </p>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <footer className="relative z-10 border-t border-slate-700/50 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Garantizado</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Monitoreo Continuo</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">40%</div>
              <div className="text-gray-400 text-sm">Reducción de Costos</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CloudSelector;