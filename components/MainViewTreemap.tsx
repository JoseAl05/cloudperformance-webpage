'use client'

export const MainViewTreemap = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-5 w-full rounded-md'>
                <h3 id='treemap' className='text-slate-800 text-3xl font-medium dark:text-white'>Heatmap Posibilidad de Ahorro</h3>
                <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=f168ae4960ce7c382b5a" style={{ clipPath: "inset(0px 0px 53px 0px)" }} frameBorder="0" allowFullScreen={true} className='w-md md:w-xl lg:w-full'></iframe>
                <h3 id='paygtrend' className='text-slate-800 text-3xl font-medium dark:text-white'>Tendencia Pago por Uso</h3>
                <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=07da3c9ce4a04eb45d08" className='w-md md:w-xl lg:w-full' style={{ clipPath: "inset(0px 0px 53px 0px)" }} frameBorder="0" allowFullScreen={true}></iframe>
            </div>
        </>
    )
}