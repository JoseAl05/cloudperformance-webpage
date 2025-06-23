import { FunctionViewComponentsAws } from '@/components/aws/vista-funciones/FunctionViewComponentsAws';


export default function MainPage() {
    return (
        <div className='mt-[70px] md:mt-[120px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                <FunctionViewComponentsAws />
            </div>
        </div>
    )
}
