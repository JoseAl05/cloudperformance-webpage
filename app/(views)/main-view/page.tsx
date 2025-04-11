import { MainViewComponents } from '@/components/MainViewComponents';


export default function MainPage() {
    return (
        <div className='mt-[70px] md:mt-[120px] lg:mt-[95px] flex flex-col gap-5'>
            <div className='flex-1 flex flex-col gap-10 bg-gray-200 p-4 overflow-auto dark:bg-[#111827] md:px-16'>
                {/* <div className='flex items-center justify-end gap-2 px-10 text-black dark:text-white'>
                </div>
                <iframe title="Cloudperformance2.0" width="1280" height="150" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=5236695e7626c351aa10" className='w-md md:w-xl lg:w-full' style={{ clipPath: "inset(0px 0px 53px 0px)" }} frameBorder="0" allowFullScreen={true}></iframe>
                <Separator className='bg-slate-800 dark:bg-slate-300' /> */}
                <MainViewComponents />
            </div>
        </div>
    )
}