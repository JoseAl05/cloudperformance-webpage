'use client'

import { Separator } from '@/components/ui/separator'

export const MainViewTreemap = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full rounded-md'>
                <iframe title="CloudPerformance_vista_principal_heatmap" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=62633047-8530-4dad-9c8b-6f6321d3fc08&pageName=25dbb1ab967556c0dcc6&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false" frameBorder="0" allowFullScreen={true}></iframe>
                <Separator/>
                <iframe title="CloudPerformance_vista_principal_consumo_no_consumo" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=62633047-8530-4dad-9c8b-6f6321d3fc08&pageName=9167b12a4dec31e606eb&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false" frameBorder="0" allowFullScreen={true}></iframe>
                <Separator/>
                <iframe title="CloudPerformance_vista_recurso" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=13ede75c-d0a1-4b2f-9e28-9469893e793f&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false&pageView=FitToWidth&fullscreen=true" frameBorder="0" allowFullScreen={true}></iframe>
            </div>
        </>
    )
}