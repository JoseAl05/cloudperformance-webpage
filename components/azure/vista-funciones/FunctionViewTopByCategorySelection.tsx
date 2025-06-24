'use client'

import { Database, DollarSign} from 'lucide-react'
import {  useState } from 'react'
import { FunctionViewTopResources } from './FunctionViewTopResources'
import { FunctionViewTopBilling } from './FunctionViewTopBilling'
import { CategorySelectionAzure } from '../CategorySelectionAzure'

export const FunctionViewTopByCategorySelection = () => {

    const [selectedCategory, setSelectedCategory] = useState('resources');

    const topCategories = [
        { value: 'resources', label: 'Cantidad de Recursos', icon: <Database className='mr-2 h-5 w-5' /> },
        { value: 'billing', label: 'Dolares Facturados', icon: <DollarSign className='mr-2 h-5 w-5' /> },
    ];

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case 'resources':
                return <FunctionViewTopResources />
            case 'billing':
                return <FunctionViewTopBilling />
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
                <CategorySelectionAzure
                    handleCategoryChange={handleCategoryChange}
                    categories={topCategories}
                    defaultValue='resources'
                />
            </div>
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
        </>
    )
}