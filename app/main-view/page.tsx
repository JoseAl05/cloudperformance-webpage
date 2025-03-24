import { MainCards } from '@/components/MainCards';
import { MainViewConsume } from '@/components/MainViewConsume';
import { MainViewTreemap } from '@/components/MainViewTreemap';
import { Separator } from '@/components/ui/separator';
import { Calendar } from 'lucide-react';



export default function MainPage() {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <div className='flex items-center justify-end gap-2 px-10 text-black dark:text-white'>
                    <div className='flex flex-col items-center gap-2 justify-end mb-8 '>
                        <div className='flex items-center gap-2 px-5 py-3 rounded-xl shadow-sm transition-all duration-300 border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow'>
                            <h1 className='font-medium'>Fecha Observación:</h1>
                            <Calendar className='w-5 h-5 text-blue-500 dark:text-blue-400' />
                            <span className='text-md font-medium text-gray-600 dark:text-gray-300'>18/03/2025</span>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    <MainCards />
                </div>
                <Separator className='bg-slate-800 dark:bg-slate-300'/>
                <h3 className='text-slate-800 text-3xl font-medium dark:text-white'>Treemap</h3>
                <MainViewTreemap />
                <Separator className='bg-slate-800 dark:bg-slate-300'/>
                <h3 className='text-slate-800 text-3xl font-medium dark:text-white'>Consumo / No Consumo Servicios</h3>
                <MainViewConsume/>
            </div>
        </div>
    )
}