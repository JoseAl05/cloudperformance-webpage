'use client'

import { useState, useEffect } from 'react'
import { Database, Info } from 'lucide-react'

export const FunctionViewBlobStorage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='w-full max-w-full sm:max-w-[95vw] mx-auto px-2 py-3 sm:py-6'>
      <div className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'>
        <div className='p-3 sm:p-6 border-b border-slate-200 bg-slate-50'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0'>
            <div className='flex items-center gap-2 sm:gap-3'>
              <div className='bg-slate-800 p-1.5 sm:p-2 rounded-lg'>
                <Database className='h-5 w-5 sm:h-6 sm:w-6 text-white' />
              </div>
              <h2 className='text-slate-800 text-xl sm:text-2xl font-bold'>
                Comparación Storage vs Blob Storage
              </h2>
            </div>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className='self-end sm:self-auto p-1.5 sm:p-2 rounded-full hover:bg-slate-200 transition-colors'
              aria-label='Mostrar información'
            >
              <Info className='h-4 w-4 sm:h-5 sm:w-5 text-slate-600' />
            </button>
          </div>

          {showInfo && (
            <div className='mt-3 sm:mt-4 p-3 sm:p-4 bg-slate-100 rounded-lg border border-slate-200 animate-fadeIn'>
              <p className='text-slate-700 text-xs sm:text-sm leading-relaxed'>
                Esta visualización compara la utilización general de servicios de Storage bajo un Storage Account (File Service, Queue Service, Table Service y Blob Service) vs la utilización de Blob Storage, Queue Service, Table Service y File Service. También se muestra la variación, en porcentaje, de la capacidad de estos servicios en base a la medida actual y la medida de una fecha seleccionada.
              </p>
            </div>
          )}
        </div>

        <div className='p-2 sm:p-4'>
          {isLoading ? (
            <div className='w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200 animate-pulse'>
              <div className='flex flex-col items-center'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 border-4 border-slate-300 border-t-slate-500 rounded-full animate-spin'></div>
                <p className='mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 font-medium'>
                  Cargando visualización...
                </p>
              </div>
            </div>
          ) : (
            <div className='space-y-6'>

              <div>
                <div className='relative w-full rounded-lg overflow-hidden shadow-md border border-slate-200 transition-all duration-300'>
                  <iframe
                    title='Cloudperformance - Vista General'
                    width='1280'
                    height='850'
                    src='https://app.powerbi.com/view?r=eyJrIjoiZGJmMjBlZWQtOGVhNC00YmZhLTliNjktZjU1MmU2YzNmOGVhIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=10f6c43e328a758963f2'
                    className='w-full h-[600px] sm:h-[700px] md:h-[900px]'
                    style={{ clipPath: 'inset(0px 0px 53px 0px)' }}
                    frameBorder='0'
                    allowFullScreen={true}
                  />
                </div>
              </div>
              
              <div>
                <div className='relative w-full rounded-lg overflow-hidden shadow-md border border-slate-200 transition-all duration-300'>
                  <iframe
                    title='Cloudperformance - Vista Detallada'
                    width='1280'
                    height='2450'
                    src='https://app.powerbi.com/view?r=eyJrIjoiZGJmMjBlZWQtOGVhNC00YmZhLTliNjktZjU1MmU2YzNmOGVhIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=ae7f08731b6c59672bde'
                    className='w-full h-[1200px] sm:h-[1800px] md:h-[2600px]'
                    style={{ clipPath: 'inset(0px 0px 53px 0px)' }}
                    frameBorder='0'
                    allowFullScreen={true}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
