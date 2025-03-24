import { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export const MainViewFilters = () => {

    const [selectedTagKey, setSelectedTagKey] = useState('');

    const onChangeTagKey = (value: string) => {
        setSelectedTagKey(value);
        console.log(value);
    }

    const tagValues = (tagKey: string) => {
        switch (tagKey) {
            case 'scope':
                return (
                    <>
                        <SelectItem value='rendimiento'>rendimiento</SelectItem>
                        <SelectItem value='control'>control</SelectItem>
                        <SelectItem value='debug'>debug</SelectItem>
                    </>
                )
                break;
            case 'environment':
                return (
                    <>
                        <SelectItem value='development'>development</SelectItem>
                        <SelectItem value='production'>production</SelectItem>
                    </>
                )
                break;
            case 'client':
                return (
                    <>
                        <SelectItem value='Retail'>Retail</SelectItem>
                        <SelectItem value='Banco'>Banco</SelectItem>
                        <SelectItem value='Seguros'>Seguros</SelectItem>
                    </>
                );
                break;
            case 'service':
                return (
                    <>
                        <SelectItem value='consulta-usuarios'>consulta-usuarios</SelectItem>
                        <SelectItem value='consulta-saldo'>consulta-saldo</SelectItem>
                        <SelectItem value='ofertas-productos'>ofertas-productos</SelectItem>
                    </>
                );
                break;
            case 'type':
                return (
                    <>
                        <SelectItem value='microservicios'>microservicios</SelectItem>
                        <SelectItem value='base-de-datos'>base-de-datos</SelectItem>
                        <SelectItem value='aplicacion-web'>aplicacion-web</SelectItem>
                    </>
                );
                break;
            default:
                return (
                    <>
                        <SelectLabel className='text-red-500 font-medium'>Seleccione un Tag Key primero...</SelectLabel>
                    </>
                );
                break;
        }
    }


    return (
        <div className='flex items-center gap-3 flex-wrap lg:flex-row lg:flex-nowrap'>
            <Select>
                <SelectTrigger className='w-[280px] bg-white'>
                    <SelectValue placeholder='Suscripciones' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Suscripciones</SelectLabel>
                        <SelectItem value='sub1'>Suscripción 1</SelectItem>
                        <SelectItem value='sub2'>Suscripción 2</SelectItem>
                        <SelectItem value='sub3'>Suscripción 3</SelectItem>
                        <SelectItem value='sub4'>Suscripción 4</SelectItem>
                        <SelectItem value='sub5'>Suscripción 5</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className='w-[280px] bg-white'>
                    <SelectValue placeholder='Localizaciones' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Localización</SelectLabel>
                        <SelectItem value='brazilsouth'>Brazil</SelectItem>
                        <SelectItem value='uswest'>US West</SelectItem>
                        <SelectItem value='uswest2'>US West 2</SelectItem>
                        <SelectItem value='useast'>US East</SelectItem>
                        <SelectItem value='useast2'>US East 2</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select onValueChange={onChangeTagKey}>
                <SelectTrigger className='w-[280px] bg-white'>
                    <SelectValue placeholder='Tag Keys' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tag Key</SelectLabel>
                        <SelectItem value='scope'>scope</SelectItem>
                        <SelectItem value='environment'>environment</SelectItem>
                        <SelectItem value='client'>client</SelectItem>
                        <SelectItem value='service'>service</SelectItem>
                        <SelectItem value='type'>type</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className='w-[280px] bg-white'>
                    <SelectValue placeholder='Valor Tag' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Valor Tag</SelectLabel>
                        {tagValues(selectedTagKey)}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className='w-[280px] bg-white'>
                    <SelectValue placeholder='Grupos de Recursos' />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Grupos de Recursos</SelectLabel>
                        <SelectItem value='grupo1'>Grupo 1</SelectItem>
                        <SelectItem value='grupo2'>Grupo 2</SelectItem>
                        <SelectItem value='grupo3'>Grupo 3</SelectItem>
                        <SelectItem value='grupo4'>Grupo 4</SelectItem>
                        <SelectItem value='grupo5'>Grupo 5</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}