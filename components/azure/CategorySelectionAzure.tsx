import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils';
import { JSX } from 'react';

export const CategorySelectionAzure = ({
    handleCategoryChange,
    categories,
    defaultValue
}:{
    handleCategoryChange: (value:string) => void;
    categories:{
        value:string;
        label:string;
        icon:JSX.Element
    }[];
    defaultValue: string;
}) => {
    return (
        <Select onValueChange={handleCategoryChange} defaultValue={defaultValue}>
            <SelectTrigger
                className={cn(
                    'text-base sm:text-lg font-medium py-3 sm:py-6 px-3 sm:px-4 border border-slate-300 rounded-lg shadow-sm',
                    'hover:border-slate-400 transition-all duration-200',
                    'focus:ring-2 focus:ring-slate-200 focus:border-slate-400',
                    'border-slate-400 bg-slate-50',
                )}
            >
                <SelectValue placeholder='Seleccione una categoría...' />
            </SelectTrigger>
            <SelectContent className='bg-white rounded-lg shadow-lg border border-slate-200'>
                {categories.map((category) => (
                    <SelectItem
                        key={category.value}
                        value={category.value}
                        className='py-3 px-2 text-base font-medium cursor-pointer hover:bg-slate-50 focus:bg-slate-50 rounded-md my-1 flex items-center'
                    >
                        <div className='flex items-center'>
                            {category.icon}
                            {category.label}
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}