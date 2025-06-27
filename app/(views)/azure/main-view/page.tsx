import { MainViewPayGTrend } from '@/components/azure/treemap/MainViewPayGTrend';
import { MainViewTreemap } from '@/components/azure/treemap/MainViewTreemap';
import { Separator } from '@/components/ui/separator';

export default function AhorroView (){
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col items-center gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                {/* <MainViewTreemap/>
                <Separator className='bg-slate-500 h-5'/> */}
                <MainViewPayGTrend />
            </div>
        </div>
    )
}
