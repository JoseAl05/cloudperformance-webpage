
import { Cpu, Globe2, Layers, Layers3, MonitorSmartphone, ReceiptText, ServerCog, ShoppingCart } from 'lucide-react';
import { CategorySelectionAws } from '../CategorySelectionAws';
import { useState } from 'react';
import { FunctionViewTopResourcesAmountAws } from './FunctionViewTopResourcesAmountAws';
import { FunctionViewTopResourcesCostByRegionAws } from './FunctionViewTopResourcesCostByRegionAws';
import { FunctionViewTopResourcesCostBySoAws } from './FunctionViewTopResourcesCostBySoAws';
import { FunctionViewTopResourcesCostByInstanceTypeAws } from './FunctionViewTopResourcesCostByInstanceTypeAws';
import { FunctionViewTopResourcesCostByInstanceFamilyAws } from './FunctionViewTopResourcesCostByInstanceFamilyAws';
import { FunctionViewTopResourcesCostByPurchaseMethodAws } from './FunctionViewTopResourcesCostByPurchaseMethodAws';
import { FunctionViewTopResourcesCostByRecordTypeAws } from './FunctionViewTopResourcesCostByRecordTypeAws';
import { FunctionViewTopResourcesCostByResourceAws } from './FunctionViewTopResourcesCostByResourceAws';

export const FunctionViewTopResourcesByCategorySelectionAws = () => {
    const [selectedCategory, setSelectedCategory] = useState('amountresources');
    const categories = [
        { value: 'amountresources', label: 'Cantidad de Recursos', icon: <Cpu className='mr-2 h-5 w-5' /> },
        { value: 'costbyregion', label: 'Facturación por Región', icon: <Globe2 className='mr-2 h-5 w-5' /> },
        { value: 'costbyso', label: 'Facturación por Sistema Operativo', icon: <MonitorSmartphone className='mr-2 h-5 w-5' /> },
        { value: 'costbyinstancetype', label: 'Facturación por Tipo de Instancia', icon: <ServerCog className='mr-2 h-5 w-5' /> },
        { value: 'costbyinstancefamily', label: 'Facturación por Familia de Instancia', icon: <Layers3 className='mr-2 h-5 w-5' /> },
        { value: 'costbypurchasemethod', label: 'Facturación por Tipo de Compra', icon: <ShoppingCart className='mr-2 h-5 w-5' /> },
        { value: 'costbyrecordtype', label: 'Facturación por Tipo de Cobro', icon: <ReceiptText className='mr-2 h-5 w-5' /> },
        { value: 'costbyresource', label: 'Facturación por Recurso', icon: <Layers className='mr-2 h-5 w-5' /> }
    ];

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case 'amountresources':
                return <FunctionViewTopResourcesAmountAws />
            case 'costbyregion':
                return <FunctionViewTopResourcesCostByRegionAws />
            case 'costbyso':
                return <FunctionViewTopResourcesCostBySoAws />
            case 'costbyinstancetype':
                return <FunctionViewTopResourcesCostByInstanceTypeAws />
            case 'costbyinstancefamily':
                return <FunctionViewTopResourcesCostByInstanceFamilyAws />
            case 'costbypurchasemethod':
                return <FunctionViewTopResourcesCostByPurchaseMethodAws />
            case 'costbyrecordtype':
                return <FunctionViewTopResourcesCostByRecordTypeAws />
            case 'costbyresource':
                return <FunctionViewTopResourcesCostByResourceAws />
            default:
                return null
        }
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
    }

    return (
        <>
            <div className='px-10'>
                <CategorySelectionAws
                    handleCategoryChange={handleCategoryChange}
                    categories={categories}
                    defaultValue='amountresources'
                />
            </div>
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
        </>
    )

}