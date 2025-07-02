'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, Shield } from 'lucide-react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState('login'); // 'login' | '2fa'
  const [twoFactorCode, setTwoFactorCode] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular llamada a API
    setTimeout(() => {
      setIsLoading(false);
      setStep('2fa'); // Pasar a verificación 2FA
    }, 1500);
  };

  const handleTwoFactorSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular verificación 2FA
    setTimeout(() => {
      setIsLoading(false);
      alert('¡Inicio de sesión exitoso!');
      // Aquí redirigirías al dashboard
    }, 1500);
  };

  if (step === '2fa') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="mx-auto h-16 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verificación en dos pasos
            </h2>
            <p className="text-gray-600">
              Ingresa el código de 6 dígitos enviado a tu dispositivo
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <input
                type="text"
                maxLength={6}
                value={twoFactorCode}
                onChange={(e) => setTwoFactorCode(e.target.value.replace(/\D/g, ''))}
                className="w-full px-4 py-3 text-center text-2xl font-mono bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                placeholder="000000"
                required
              />
            </div>

            <button
              type="button"
              onClick={handleTwoFactorSubmit}
              disabled={isLoading || twoFactorCode.length !== 6}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? 'Verificando...' : 'Verificar código'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep('login')}
                className="text-cyan-600 hover:text-cyan-800 text-sm font-medium"
              >
                Volver al inicio de sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          {/* Logo personalizado */}
          <div className="mx-auto h-16 w-16 mb-4">
            <img 
              src="/cloudperformance-logo.png" 
              alt="CloudPerformance Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            CloudPerformance
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                placeholder="Ingresa tu nombre de usuario"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                placeholder="Ingresa tu contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Recuérdame
              </label>
            </div>

            <div className="text-sm">
              <button className="text-cyan-600 hover:text-cyan-800 font-medium">
                ¿Se te olvidó tu contraseña?
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isLoading ? 'Iniciando sesión...' : 'INICIAR SESIÓN'}
          </button>

          <div className="text-center">
            <button className="text-cyan-600 hover:text-cyan-800 text-sm font-medium">
              ¿No tienes una cuenta?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;