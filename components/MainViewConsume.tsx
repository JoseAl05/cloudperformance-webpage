'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Database, HardDrive, Server } from 'lucide-react'
import { cn } from '@/lib/utils'

export const MainViewConsume = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const categories = [
    { value: 'maquinasvirtuales', label: 'Máquinas Virtuales', icon: <Server className='mr-2 h-5 w-5' /> },
    { value: 'basesdedatos', label: 'Bases de Datos', icon: <Database className='mr-2 h-5 w-5' /> },
    { value: 'nodos', label: 'Nodos', icon: <HardDrive className='mr-2 h-5 w-5' /> },
  ]

  const handleCategoryChange = (value: string) => {
    setIsLoading(true)
    setSelectedValue(value)
    // Simulate loading time for iframe
    setTimeout(() => setIsLoading(false), 800)
  }

  const renderIframe = () => {
    switch (selectedValue) {
      case 'maquinasvirtuales':
        return (
          <iframe
            title='Cloudperformance2.0'
            width='1280'
            height='720'
            src='https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=97ff25681034e4ee2078'
            className='w-full h-[100vh] rounded-lg shadow-lg'
            style={{ clipPath: 'inset(0px 0px 53px 0px)' }}
            frameBorder='0'
            allowFullScreen={true}
          />
        )
      case 'basesdedatos':
        return (
          <iframe
            title='Cloudperformance2.0'
            width='1280'
            height='720'
            src='https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=8b5e438e3e249625e92c'
            className='w-full h-[100vh] rounded-lg shadow-lg'
            style={{ clipPath: 'inset(0px 0px 53px 0px)' }}
            frameBorder='0'
            allowFullScreen={true}
          />
        )
      case 'nodos':
        return (
          <iframe
            title='Cloudperformance2.0'
            width='1280'
            height='720'
            src='https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=fccf1ae01c449603b42c'
            className='w-full h-[100vh] rounded-lg shadow-lg'
            style={{ clipPath: 'inset(0px 0px 53px 0px)' }}
            frameBorder='0'
            allowFullScreen={true}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-6'>
      <div className='w-full bg-white rounded-xl shadow-sm p-6 border border-slate-200'>
        <Select onValueChange={handleCategoryChange}>
          <SelectTrigger
            className={cn(
              'text-lg font-medium py-6 px-4 border border-slate-300 rounded-lg shadow-sm',
              'hover:border-slate-400 transition-all duration-200',
              'focus:ring-2 focus:ring-slate-200 focus:border-slate-400',
              selectedValue && 'border-slate-400 bg-slate-50',
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
            <div className='w-full h-[70vh] flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200 animate-pulse'>
              <div className='flex flex-col items-center'>
                <div className='w-16 h-16 border-4 border-slate-300 border-t-slate-500 rounded-full animate-spin'></div>
                <p className='mt-4 text-slate-500 font-medium'>Cargando visualización...</p>
              </div>
            </div>
          ) : selectedValue ? (
            <div className='transition-all duration-300 ease-in-out'>{renderIframe()}</div>
          ) : (
            <div className='w-full h-[70vh] flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-300'>
              <div className='text-center p-6'>
                <Server className='w-16 h-16 mx-auto text-slate-300 mb-4' />
                <h3 className='text-xl font-medium text-slate-700 mb-2'>No hay datos para mostrar</h3>
                <p className='text-slate-500 max-w-md'>
                  Seleccione una categoría del menú desplegable para visualizar los datos correspondientes.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
