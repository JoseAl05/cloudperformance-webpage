import { MainViewConsume } from '@/components/MainViewConsume'

export default function ConsumeView (){
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col items-center gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <h3 className='text-slate-800 text-3xl font-medium dark:text-white'>Consumo / No Consumo Servicios</h3>
                <MainViewConsume/>
            </div>
        </div>
    )
}