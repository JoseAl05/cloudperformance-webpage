'use client'
import { useState, useEffect, JSX } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { AlarmClock, ArrowDownWideNarrow, ChartBar, ChartColumnBig, Computer, Database, TrendingUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

import { FunctionViewBlobStorage } from './FunctionViewBlobStorage'
import { FunctionViewSpotVm } from './FunctionViewSpotVm'
import { FunctionViewVmUnusedWithResources } from './FunctionViewVmUnusedWithResources'
import { FunctionViewVmssUnusedWithResources } from './FunctionViewVmssUnusedWithResources'
import { FunctionViewTopByCategorySelection } from './FunctionViewTopByCategorySelection'
import { FunctionViewTopResourcesByLocation } from './FunctionViewTopResourcesByLocation'
import { FunctionViewIncrementoUsoRecursos } from './FunctionViewIncrementoUsoRecursos'
import { FunctionViewVmExtensions } from './FunctionViewVmExtensions'
import { FunctionViewTopTenUsageNoUsageResources } from './FunctionViewTopTenUsageNoUsageResources'
import { FunctionViewUsageVmOpenClosedHours } from './FunctionViewUsageVmOpenClosedHours'

export const FunctionViewComponentsAzure = () => {
  const [selectedValue, setSelectedValue] = useState('blobvsstorage');
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    {
      value: 'blobvsstorage',
      label: 'Blob Storage vs Storage',
      icon: <Database className='mr-2 h-5 w-5' />
    },
    {
      value: 'spotvmvsvm',
      label: 'Spot VMs vs VMs',
      icon: <Computer className='mr-2 h-5 w-5' />
    },
    {
      value: 'vmunusedwithresources',
      label: 'Máquinas virtuales no utilizadas con recursos asignados',
      icon: <Computer className='mr-2 h-5 w-5' />,
    },
    {
      value: 'vmssunusedwithresources',
      label: 'Virtual Machine Scale Sets no utilizadas con recursos asignados',
      icon: <Computer className='mr-2 h-5 w-5' />,
    },
    {
      value: 'topresources',
      label: 'Top Recursos por Categoría',
      icon: <ArrowDownWideNarrow className='mr-2 h-5 w-5' />,
    },
    {
      value: 'usagebylocation',
      label: 'Volumen Total de Uso por Localización',
      icon: <ChartColumnBig className='mr-2 h-5 w-5' />,
    },
    {
      value: 'comparitionresourceusage',
      label: 'Comparación utilización de recursos por fecha',
      icon: <ChartBar className='mr-2 h-5 w-5' />,
    },
    {
      value: 'vmextensions',
      label: 'Extensiones Máquinas Virtuales en Desuso',
      icon: <Computer className='mr-2 h-5 w-5' />
    },
    {
      value: 'toptenusageresources',
      label: 'Top 10 Recursos más y menos utilizados',
      icon: <TrendingUpDown className='mr-2 h-5 w-50' />
    },
    {
      value: 'vmusageopenclosedhours',
      label: 'Análisis consumo de VM horario Hábil y No Hábil',
      icon: <AlarmClock className='mr-2 h-5 w-50' />
    }
  ]

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const handleFunctionsChange = (value: string) => {
    setIsLoading(true)
    setSelectedValue(value)
    setTimeout(() => setIsLoading(false), 800)
  }

  const componentMap: Record<string, JSX.Element> = {
    blobvsstorage: <FunctionViewBlobStorage />,
    spotvmvsvm: <FunctionViewSpotVm />,
    vmunusedwithresources: <FunctionViewVmUnusedWithResources />,
    vmssunusedwithresources: <FunctionViewVmssUnusedWithResources />,
    topresources: <FunctionViewTopByCategorySelection />,
    usagebylocation: <FunctionViewTopResourcesByLocation />,
    comparitionresourceusage: <FunctionViewIncrementoUsoRecursos />,
    vmextensions:<FunctionViewVmExtensions />,
    toptenusageresources:<FunctionViewTopTenUsageNoUsageResources />,
    vmusageopenclosedhours: <FunctionViewUsageVmOpenClosedHours />
  }

  const renderFunctionsIframe = () => componentMap[selectedValue] || null

  return (
    <div className='w-full max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-6'>
      <div className='w-full bg-white rounded-xl shadow-sm p-3 sm:p-6 border border-slate-200'>
        <Select onValueChange={handleFunctionsChange} defaultValue='blobvsstorage'>
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
        <div className='mt-6'>
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
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
          )}
        </div>
      </div>
    </div>
  )
}
