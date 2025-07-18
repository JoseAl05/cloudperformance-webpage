'use client'
import { TreemapViewBillingTrendAws } from '@/components/aws/vista-treemap/TreemapViewBillingTrendAws';
// import { TreemapViewServiceSelectionAws } from '@/components/aws/vista-treemap/TreemapViewServiceSelectionAws';
// import { Separator } from '@/components/ui/separator';

export default function AhorroView (){
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex flex-col justify-start gap-2 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                {/* <TreemapViewServiceSelectionAws />
                <Separator className='bg-slate-500 h-5'/> */}
                <TreemapViewBillingTrendAws />
            </div>
        </div>
    )
}
