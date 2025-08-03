import { ChevronRight, Cloud, Shield, BarChart3 } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link'
import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image'
import { cookies } from 'next/headers';

type DecodedToken = {
  id: string
  is_aws?: boolean
  is_azure?: boolean
  exp?: number
}

export default async function CloudSelector() {
  const cookieStore = await cookies();
  const user = cookieStore.get('token');
  let userDecoded: DecodedToken | undefined = undefined;
  if (user?.value) {
    try {
      userDecoded = jwtDecode<DecodedToken>(user.value);
    } catch (err) {
      console.error('Error decoding token:', err);
    }
  }



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
              width={150}
              height={50}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Cloud Performance</h1>
            <p className="text-gray-400 text-sm">Multi-Cloud Management Platform</p>
          </div>
        </div>
        <LogoutButton className="text-black bg-white hover:bg-gray-100" />

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
          <div
            className={`
    grid gap-8 max-w-4xl mx-auto
    ${userDecoded?.is_aws && userDecoded?.is_azure ? 'md:grid-cols-2' : 'grid-cols-1 justify-center'}
  `}
          >
            {/* AWS Card */}
            {userDecoded?.is_aws && (
              <Link href="/aws/main-view" className="group relative rounded-3xl p-8 backdrop-blur-md border border-orange-500/20 bg-white/5 hover:bg-orange-500/10 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 ring-1 ring-white/5">
                <div className="mb-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center text-white text-2xl font-extrabold shadow-md group-hover:scale-105 transition-transform duration-300">
                    AWS
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    Amazon Web Services
                  </h3>
                </div>

                <div className="space-y-3 mb-6 text-sm text-gray-300 group-hover:text-white transition-colors">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-3 text-orange-400" />
                    EC2, RDS, AutoScaling, EKS, Cost Explorer, etc...
                  </div>
                </div>

                <div className="flex items-center justify-center text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="font-semibold mr-2">Acceder a Dashboard</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )}

            {/* Azure Card */}
            {userDecoded?.is_azure && (
              <Link href="/azure/main-view" className="group relative rounded-3xl p-8 backdrop-blur-md border border-blue-500/20 bg-white/5 hover:bg-blue-500/10 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 ring-1 ring-white/5">
                <div className="mb-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg font-extrabold shadow-md group-hover:scale-105 transition-transform duration-300">
                    Azure
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Microsoft Azure
                  </h3>
                </div>

                <div className="space-y-3 mb-6 text-sm text-gray-300 group-hover:text-white transition-colors">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-3 text-blue-400" />
                    VM, Storage, Functions
                  </div>
                  <div className="flex items-center">
                    <Cloud className="h-4 w-4 mr-3 text-blue-400" />
                    Resource Optimization
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-3 text-blue-400" />
                    Compliance Monitoring
                  </div>
                </div>

                <div className="flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="font-semibold mr-2">Acceder a Dashboard</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};