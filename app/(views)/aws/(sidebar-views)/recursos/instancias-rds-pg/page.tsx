import { ResourceViewRdsPgAws } from '@/components/aws/vista-irdspg/ResourceViewRdsPgAws';

export default function ResourcesRdsPgInstancePage() {
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <ResourceViewRdsPgAws />
            </div>
        </div>
    )
}