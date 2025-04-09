import { DeploymentsView } from '@/components/SidebarViewDeployments';

export default function DeploymentsPage() {
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <h3 className='text-slate-800 text-3xl font-medium dark:text-white'>Deployments</h3>
                <DeploymentsView/>
            </div>
        </div>
    )
}