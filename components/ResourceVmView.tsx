'use client'
export const ResourceVmView = () => {
    return(
        <>
            <div className='flex flex-col items-center gap-5 w-full rounded-md'>
                <h3 className='text-slate-800 text-3xl font-medium dark:text-white'>Vista Máquinas Virtuales</h3>
                <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=d201fbd6fcf6c567bd14" className='w-md md:w-xl lg:w-full' style={{ clipPath: "inset(0px 0px 53px 0px)" }} frameBorder="0" allowFullScreen={true}></iframe>
            </div>
        </>
    )
}