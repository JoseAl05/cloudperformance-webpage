'use client'
import { MainCards } from '@/components/MainCards';
import { MainViewTreemap } from '@/components/MainViewTreemap';
import { Separator } from '@/components/ui/separator';



export default function MainPage() {
    return (
        <div className='mt-[70px] md:mt-[120px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <div className='flex items-center justify-end gap-2 px-10 text-black dark:text-white'>
                </div>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    <MainCards />
                </div>
                <Separator className='bg-slate-800 dark:bg-slate-300' />
                <h3 id='treemap' className='text-slate-800 text-3xl font-medium dark:text-white'>Treemap</h3>
                <MainViewTreemap />
            </div>
        </div>
    )
}