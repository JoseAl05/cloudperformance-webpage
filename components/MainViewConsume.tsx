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
                    <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=97ff25681034e4ee2078" className='w-md md:w-xl lg:w-full' style={{clipPath:"inset(0px 0px 53px 0px)"}} frameBorder="0" allowFullScreen={true}></iframe>
                );
            case 'basesdedatos':
                return(
                    <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=8b5e438e3e249625e92c" className='w-md md:w-xl lg:w-full' style={{clipPath:"inset(0px 0px 53px 0px)"}} frameBorder="0" allowFullScreen={true}></iframe>
                );
            case 'nodos':
                return(
                    <iframe title="Cloudperformance2.0" width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiZTNjOGY4MjYtYjc1Ni00MDNkLTg1ZTMtY2ExMWIyNmU0NTMwIiwidCI6IjdiYjNlMTQ3LWQxZTgtNDQ4Yy05NGE0LTUyNjQyZGQ1ZGQ4ZCIsImMiOjR9&pageName=fccf1ae01c449603b42c" className='w-md md:w-xl lg:w-full' style={{clipPath:"inset(0px 0px 53px 0px)"}} frameBorder="0" allowFullScreen={true}></iframe>
                )
        }
    }
    return (
        <>
            <div className='mx-0 rounded-md'>
                <Select onValueChange={handleCategoryChange}>
                    <SelectTrigger className="w-full flex justify-center text-4xl font-bold my-5">
                        <SelectValue placeholder="Seleccione una categoría..." />
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