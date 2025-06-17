// import { MainViewPayGTrend } from '@/components/treemap/MainViewPayGTrend';
import { MainViewPayGTrendV2 } from '@/components/treemap/MainViewPayGTrendV2';
import { MainViewTreemapV2 } from '@/components/treemap/MainViewTreemapV2';
// import { MainViewTreemap } from '@/components/treemap/MainViewTreemap';
import { Separator } from '@/components/ui/separator';

export default function AhorroView (){
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col items-center gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <MainViewTreemapV2/>
                <Separator className='bg-slate-500 h-5'/>
                <MainViewPayGTrendV2 />
            </div>
        </div>
    )
}
