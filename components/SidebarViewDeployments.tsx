import { MainViewFilters } from './MainViewFilters'

export const DeploymentsView = () => {
    return (
        <>
            <MainViewFilters />
            <div className='flex items-center justify-center h-dvh bg-blue-400 rounded-md dark:bg-blue-800'>
                <h1 className='text-2xl font-bold'>IFRAME PB DEPLOYMENTS</h1>
            </div>
        </>
    )
}