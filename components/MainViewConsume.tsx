'use client'

export const MainViewConsume = () => {
    return (
        <>
            <div className='mx-0 rounded-md'>
                {/* <h1 className='text-2xl font-bold'>IFRAME PB CONSUMO/NO CONSUMO SERVICIOS</h1> */}
                <iframe title="CloudPerformance_vista_recurso" width="1300" height="1024" src="https://app.powerbi.com/reportEmbed?reportId=13ede75c-d0a1-4b2f-9e28-9469893e793f&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false&pageView=FitToWidth&fullscreen=true" frameBorder="0" allowFullScreen={true}></iframe>
            </div>
        </>
    )
}