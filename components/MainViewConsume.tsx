'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';

export const MainViewConsume = () => {
    const [selectedValue,setSelectedValue] = useState('');

    const handleCategoryChange = (value:string) => {
        setSelectedValue(value);
    }

    const renderIframe = () => {
        switch(selectedValue){
            case 'maquinasvirtuales':
                return(
                    <iframe title="CloudPerformance_vista_principal_top_recursos" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=62633047-8530-4dad-9c8b-6f6321d3fc08&pageName=2442ecae00a0949c9812&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false" frameBorder="0" allowFullScreen={true}></iframe>
                );
            case 'basesdedatos':
                return(
                    <iframe title="CloudPerformance_vista_principal_heatmap" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=62633047-8530-4dad-9c8b-6f6321d3fc08&pageName=25dbb1ab967556c0dcc6&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false" frameBorder="0" allowFullScreen={true}></iframe>
                );
            case 'nodos':
                return(
                    <iframe title="CloudPerformance_vista_recurso" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=13ede75c-d0a1-4b2f-9e28-9469893e793f&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false&pageView=FitToWidth&fullscreen=true" frameBorder="0" allowFullScreen={true}></iframe>
                )
        }
    }
    return (
        <>
            <div className='mx-0 rounded-md'>
                <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="maquinasvirtuales">Máquinas Virtuales</SelectItem>
                        <SelectItem value="basesdedatos">Bases de Datos</SelectItem>
                        <SelectItem value="nodos">Nodos</SelectItem>
                    </SelectContent>
                </Select>
                {/* <h1 className='text-2xl font-bold'>IFRAME PB CONSUMO/NO CONSUMO SERVICIOS</h1> */}
                {renderIframe()}
                {/* <iframe title="CloudPerformance_vista_principal_top_recursos" width="1280" height="720" src="https://app.powerbi.com/reportEmbed?reportId=62633047-8530-4dad-9c8b-6f6321d3fc08&pageName=2442ecae00a0949c9812&autoAuth=true&ctid=7bb3e147-d1e8-448c-94a4-52642dd5dd8d&filterPaneEnabled=false&navContentPaneEnabled=false" frameBorder="0" allowFullScreen={true}></iframe> */}
            </div>
        </>
    )
}