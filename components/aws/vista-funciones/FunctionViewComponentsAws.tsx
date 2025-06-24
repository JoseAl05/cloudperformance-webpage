'use client'
import { useState, useEffect, JSX } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

import { AlarmClock, ArrowDownWideNarrow, Computer, Database, HardDrive } from 'lucide-react'
import { FunctionViewUsageByLocationSelectionAws } from './FunctionViewUsageByLocationSelectionAws'
import { FunctionViewUsageOpenClosedHoursSelectionAws } from './FunctionViewUsageOpenClosedHoursSelectionAws'
import { FunctionViewSpotVmAws } from './FunctionViewSpotVmAws'
import { FunctionViewEc2UnusedWithResources } from './FunctionViewEc2UnusedWithResources'
import { FunctionViewEbsVolumesUnusedAws } from './FunctionViewEbsVolumesUnusedAws'
import { FunctionViewTopS3BucketsAws } from './FunctionViewTopS3BucketsAws'
import { FunctionViewTopResourcesByCategorySelectionAws } from './FunctionViewTopResourcesByCategorySelectionAws'


export const FunctionViewComponentsAws = () => {
  const [selectedValue, setSelectedValue] = useState('usagebylocation');
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    {
      value: 'usagebylocation',
      label: 'Volumen Total de Uso por Localización',
      icon: <Database className='mr-2 h-5 w-5' />
    },
    {
      value: 'usageopenclosedhours',
      label: 'Análisis consumo de VM horario Hábil y No Hábil',
      icon: <AlarmClock className='mr-2 h-5 w-50' />
    },
    {
      value: 'spotec2vsec2',
      label: 'Instancias EC2 Spot vs Instancias EC2',
      icon: <Computer className='mr-2 h-5 w-5' />
    },
    {
      value: 'ec2unusedwithresources',
      label: 'Instancias EC2 no utilizadas con recursos asignados',
      icon: <Computer className='mr-2 h-5 w-5' />,
    },
    {
      value: 'ebsvolumesunused',
      label: 'Volúmenes EBS No Utilizados',
      icon: <HardDrive className='mr-2 h-5 w-5' />,
    },
    {
      value: 'tops3buckets',
      label: 'Top S3 Buckets',
      icon: <Database className='mr-2 h-5 w-5' />,
    },
    {
      value: 'topresources',
      label: 'Top Recursos por Categoría',
      icon: <ArrowDownWideNarrow className='mr-2 h-5 w-5' />
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

  // const handleCategoryChange = (value: string) => {
  //   setSelectedCategory(value);
  // }
  const componentMap: Record<string, JSX.Element> = {
    usagebylocation: <FunctionViewUsageByLocationSelectionAws />,
    usageopenclosedhours: <FunctionViewUsageOpenClosedHoursSelectionAws />,
    spotec2vsec2: <FunctionViewSpotVmAws/>,
    ec2unusedwithresources: <FunctionViewEc2UnusedWithResources/>,
    ebsvolumesunused: <FunctionViewEbsVolumesUnusedAws />,
    tops3buckets: <FunctionViewTopS3BucketsAws />,
    topresources: <FunctionViewTopResourcesByCategorySelectionAws />
  }

  const renderFunctionsIframe = () => componentMap[selectedValue] || null

  return (
    <div className='w-full max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4 py-3 sm:py-6'>
      <div className='w-full bg-white rounded-xl shadow-sm p-3 sm:p-6 border border-slate-200'>
        <Select onValueChange={handleFunctionsChange} defaultValue='usagebylocation'>
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
