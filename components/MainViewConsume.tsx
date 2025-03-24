'use client'

import { MainViewFilters } from './MainViewFilters'

export const MainViewConsume = () => {
    return (
        <>
            <MainViewFilters />
            <div className='flex justify-center items-center h-dvh bg-indigo-500 rounded-md dark:bg-indigo-800'>
                <h1 className='text-2xl font-bold'>IFRAME PB CONSUMO/NO CONSUMO SERVICIOS</h1>
            </div>
        </>
    )
}