import { Computer, Database } from 'lucide-react';
import { CategorySelectionAws } from '../CategorySelectionAws';
import { useState } from 'react';
import { FunctionViewUsageEc2OpenClosedHoursAws } from './FunctionViewUsageEc2OpenClosedHoursAws';
import { FunctionViewUsageRdsPgOpenClosedHoursAws } from './FunctionViewUsageRdsPgOpenClosedHoursAws';
import { FunctionViewUsageRdsMysqlOpenClosedHoursAws } from './FunctionViewUsageRdsMysqlOpenClosedHoursAws';
import { FunctionViewUsageByLocationRdsSqlServerAws } from './FunctionViewUsageByLocationRdsSqlServerAws';
import { FunctionViewUsageByLocationRdsMariaDbAws } from './FunctionViewUsageByLocationRdsMariaDbAws';

export const FunctionViewUsageOpenClosedHoursSelectionAws = () => {
    const [selectedCategory, setSelectedCategory] = useState('iec2');
    const services = [
        { value: 'iec2', label: 'Instancias EC2', icon: <Computer className='mr-2 h-5 w-5' /> },
        { value: 'irdspg', label: 'Instancias RDS PostgreSQL', icon: <Database className='mr-2 h-5 w-5' /> },
        { value: 'irdsmysql', label: 'Instancias RDS Mysql', icon: <Database className='mr-2 h-5 w-5' /> },
        { value: 'irdssqlserver', label: 'Instancias RDS Sql Server', icon: <Database className='mr-2 h-5 w-5' /> },
        { value: 'irdsmariadb', label: 'Instancias RDS MariaDB', icon: <Database className='mr-2 h-5 w-5' /> },
    ];

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case 'iec2':
                return <FunctionViewUsageEc2OpenClosedHoursAws />
            case 'irdspg':
                return <FunctionViewUsageRdsPgOpenClosedHoursAws />
            case 'irdsmysql':
                return <FunctionViewUsageRdsMysqlOpenClosedHoursAws />
            case 'irdsmysql':
                return <FunctionViewUsageByLocationRdsSqlServerAws />
            case 'irdsmysql':
                return <FunctionViewUsageByLocationRdsMariaDbAws />
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
                    categories={services}
                    defaultValue='iec2'
                />
            </div>
            <div className='transition-all duration-300 ease-in-out'>{renderFunctionsIframe()}</div>
        </>
    )

}