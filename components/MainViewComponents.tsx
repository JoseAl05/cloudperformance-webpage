'use client'
import { MainViewBlobStorage } from './MainViewBlobStorage'
import { MainViewSpotVm } from './MainViewSpotVm'
import { Separator } from '@/components/ui/separator'
import { MainViewVmUnusedWithResources } from './MainViewVmUnusedWithResources'
import { MainViewVmssUnusedWithResources } from './MainViewVmssUnusedWithResources'

export const MainViewComponents = () => {
    return(
        <>
            <MainViewBlobStorage/>
            <Separator className='bg-slate-800 dark:bg-slate-300' />
            <MainViewSpotVm/>
            <Separator className='bg-slate-800 dark:bg-slate-300' />
            <MainViewVmUnusedWithResources/>
            <Separator className='bg-slate-800 dark:bg-slate-300' />
            <MainViewVmssUnusedWithResources/>
        </>
    )
}