import { Computer, Database } from 'lucide-react';
import { FunctionViewUsageByLocationEc2Aws } from './FunctionViewUsageByLocationEC2Aws';
import { FunctionViewUsageByLocationRdsPgAws } from './FunctionViewUsageByLocationRdsPgAws';
import { CategorySelection } from './CategorySelection';
import { useState } from 'react';
import { FunctionViewUsageByLocationRdsMysqlAws } from './FunctionViewUsageByLocationRdsMysqlAws';

export const FunctionViewUsageByLocationSelectionAws = ({
    selectedValue
}: {
    selectedValue: string;
}) => {
    const [selectedCategory, setSelectedCategory] = useState('iec2');
    const services = [
        { value: 'iec2', label: 'Instancias EC2', icon: <Computer className='mr-2 h-5 w-5' /> },
        { value: 'irdspg', label: 'Instancias RDS PostgreSQL', icon: <Database className='mr-2 h-5 w-5' /> },
        { value: 'irdsmysql', label: 'Instancias RDS Mysql', icon: <Database className='mr-2 h-5 w-5' /> },
    ];

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case 'iec2':
                return <FunctionViewUsageByLocationEc2Aws />
            case 'irdspg':
                return <FunctionViewUsageByLocationRdsPgAws />
            case 'irdsmysql':
                return <FunctionViewUsageByLocationRdsMysqlAws />
            default:
                return null
        }
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
    }


    return (
        selectedValue === 'usagebylocation' ? (
            <>
                <div className='px-10'>
                    <CategorySelection
                        handleCategoryChange={handleCategoryChange}
                        categories={services}
                    />
                </div>
                <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
            </>
        ) : (
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
        )
    )

}