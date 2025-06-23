import { Computer, Database } from 'lucide-react';
import { CategorySelection } from './CategorySelection';
import { useState } from 'react';
import { FunctionViewUsageByLocationRdsMysqlAws } from './FunctionViewUsageByLocationRdsMysqlAws';
import { FunctionViewUsageEc2OpenClosedHoursAws } from './FunctionViewUsageEc2OpenClosedHoursAws';
import { FunctionViewUsageRdsPgOpenClosedHoursAws } from './FunctionViewUsageRdsPgOpenClosedHoursAws';

export const FunctionViewUsageOpenClosedHoursSelectionAws = () => {
    const [selectedCategory, setSelectedCategory] = useState('iec2');
    const services = [
        { value: 'iec2', label: 'Instancias EC2', icon: <Computer className='mr-2 h-5 w-5' /> },
        { value: 'irdspg', label: 'Instancias RDS PostgreSQL', icon: <Database className='mr-2 h-5 w-5' /> },
        // { value: 'irdsmysql', label: 'Instancias RDS Mysql', icon: <Database className='mr-2 h-5 w-5' /> },
    ];

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case 'iec2':
                return <FunctionViewUsageEc2OpenClosedHoursAws />
            case 'irdspg':
                return <FunctionViewUsageRdsPgOpenClosedHoursAws />
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
        <>
            <div className='px-10'>
                <CategorySelection
                    handleCategoryChange={handleCategoryChange}
                    categories={services}
                />
            </div>
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
        </>
    )

}