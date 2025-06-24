import { ConsumeViewCategorySelectionAws } from '@/components/aws/vista-consumo/ConsumeViewCategorySelectionAws';

export default function ConsumeView (){
    return (
        <div className='mt-[70px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-5 bg-gray-200 p-10 overflow-auto dark:bg-[#111827] md:px-16'>
                <ConsumeViewCategorySelectionAws />
            </div>
        </div>
    )
}
