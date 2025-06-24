import { ResourceViewEc2Aws } from '@/components/aws/vista-iec2/ResourceViewEc2Aws';

export default function ResourcesEc2InstancePage() {
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <ResourceViewEc2Aws />
            </div>
        </div>
    )
}