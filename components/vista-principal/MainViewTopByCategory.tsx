'use client'

import { ArrowDownWideNarrow, Database, DollarSign, Info } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { MainViewTopResources } from './MainViewTopResources'
import { MainViewTopBilling } from './MainViewTopBilling'

export const MainViewTopByCategory = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [showInfo, setShowInfo] = useState(false)
    const [selectedValue, setSelectedValue] = useState('resources');

    const handleCategoryChange = (value: string) => {
        setIsLoading(true)
        setSelectedValue(value)
        setTimeout(() => setIsLoading(false), 800)
    }

    const categories = [
        { value: 'resources', label: 'Cantidad de Recursos', icon: <Database className='mr-2 h-5 w-5' /> },
        { value: 'billing', label: 'Dolares Facturados', icon: <DollarSign className='mr-2 h-5 w-5' /> },
    ];

      const renderIframe = () => {
        switch (selectedValue) {
          case 'resources':
            return <MainViewTopResources />
          case 'billing':
            return <MainViewTopBilling />
          default:
            return null
        }
      }

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
                                <ArrowDownWideNarrow className='h-5 w-5 sm:h-6 sm:w-6 text-white' />
                            </div>
                            <h2 className='text-slate-800 text-xl sm:text-2xl font-bold'>
                                Top Recursos por Categoría
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
                                Esta visualización muestra la cantidad de recursos o los dolares facturados agrupados por distintas categorías.
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
                            <Select onValueChange={handleCategoryChange} defaultValue='resources'>
                                <SelectTrigger
                                    className={cn(
                                        'text-base sm:text-lg font-medium py-3 sm:py-6 px-3 sm:px-4 border border-slate-300 rounded-lg shadow-sm',
                                        'hover:border-slate-400 transition-all duration-200',
                                        'focus:ring-2 focus:ring-slate-200 focus:border-slate-400',
                                        'border-slate-400 bg-slate-50',
                                    )}
                                >
                                    <SelectValue placeholder='Seleccione una categoría...' />
                                </SelectTrigger>
                                <SelectContent className='bg-white rounded-lg shadow-lg border border-slate-200'>
                                    {categories.map((category) => (
                                        <SelectItem
                                            key={category.value}
                                            value={category.value}
                                            className='py-3 px-2 text-base font-medium cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-md my-1 flex items-center'
                                        >
                                            <div className='flex items-center'>
                                                {category.icon}
                                                {category.label}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {renderIframe()}
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