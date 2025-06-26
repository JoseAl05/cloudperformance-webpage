'use client'
import { Computer } from 'lucide-react';
import { CategorySelectionAws } from '../CategorySelectionAws';
import { useState } from 'react';
import { TreemapViewEc2Aws } from './TreemapViewEc2Aws';

export const TreemapViewServiceSelectionAws = () => {
    const [selectedCategory, setSelectedCategory] = useState('iec2');
    const categories = [
        { value: 'iec2', label: 'Instancias EC2', icon: <Computer className='mr-2 h-5 w-5' /> },
    ];

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case 'iec2':
                return <TreemapViewEc2Aws/>
            default:
                return null
        }
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
    }

    return (
        <>
            <div className='px-2'>
                <CategorySelectionAws
                    handleCategoryChange={handleCategoryChange}
                    categories={categories}
                    defaultValue='iec2'
                />
            </div>
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
        </>
    )

}