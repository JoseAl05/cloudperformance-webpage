'use client'

import { Grid2X2, Info } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'

export const MainViewTreemap = () => {
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
                                <Grid2X2 className='h-5 w-5 sm:h-6 sm:w-6 text-white' />
                            </div>
                            <h2 className='text-slate-800 text-xl sm:text-2xl font-bold'>
                                Heatmap
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
                                Esta visualización compara la utilización general de servicios de Storage bajo un Storage Account (File Service, Queue Service, Table Service) vs la utilización de Blob Storage
                            </p>
                        </div>
                    )}
                </div>

                <div className='p-2 sm:p-4'>
                    {isLoading ? (
                        <div className='w-full h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200 animate-pulse'>
                            <div className='flex flex-col items-center'>
                                <div className='w-12 h-12 sm:w-16 sm:h-16 border-4 border-slate-300 border-t-slate-500 rounded-full animate-spin'></div>
                                <p className='mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 font-medium'>
                                    Cargando visualización...
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className='relative w-full rounded-lg overflow-hidden shadow-md border border-slate-200 transition-all duration-300'>
                            <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=f168ae4960ce7c382b5a" style={{ clipPath: "inset(0px 0px 53px 0px)" }} frameBorder="0" allowFullScreen={true} className='w-md md:w-xl lg:w-full'></iframe>
                            <Separator className='bg-slate-600'/>
                            <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=07da3c9ce4a04eb45d08" className='w-md md:w-xl lg:w-full' style={{ clipPath: "inset(0px 0px 53px 0px)" }} frameBorder="0" allowFullScreen={true}></iframe>
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
    // return (
    //     <>
    //         <div className='flex flex-col items-center gap-5 w-full rounded-md'>
    //             <h3 id='treemap' className='text-slate-800 text-3xl font-medium dark:text-white'>Heatmap Posibilidad de Ahorro</h3>

    //             <h3 id='paygtrend' className='text-slate-800 text-3xl font-medium dark:text-white'>Tendencia Pago por Uso</h3>

    //         </div>
    //     </>
    // )
}