import { QuotasViews } from '@/components/vista-quotas/SidebarViewQuotas';



export default function QuotasPage() {
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <div className='flex items-center justify-end gap-2 px-10 text-black dark:text-white'>
                </div>
                <QuotasViews />
            </div>
        </div>
    )
}