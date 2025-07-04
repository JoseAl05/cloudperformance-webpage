import { Computer, Database } from 'lucide-react';
import { FunctionViewUsageByLocationEc2Aws } from './FunctionViewUsageByLocationEC2Aws';
import { FunctionViewUsageByLocationRdsPgAws } from './FunctionViewUsageByLocationRdsPgAws';
import { CategorySelectionAws } from '../CategorySelectionAws';
import { useState } from 'react';
import { FunctionViewUsageByLocationRdsMysqlAws } from './FunctionViewUsageByLocationRdsMysqlAws';
import { FunctionViewUsageByLocationRdsSqlServerAws } from './FunctionViewUsageByLocationRdsSqlServerAws';
import { FunctionViewUsageByLocationRdsMariaDbAws } from './FunctionViewUsageByLocationRdsMariaDbAws';

export const FunctionViewUsageByLocationSelectionAws = () => {
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
                return <FunctionViewUsageByLocationEc2Aws />
            case 'irdspg':
                return <FunctionViewUsageByLocationRdsPgAws />
            case 'irdsmysql':
                return <FunctionViewUsageByLocationRdsMysqlAws />
            case 'irdssqlserver':
                return <FunctionViewUsageByLocationRdsSqlServerAws />
            case 'irdsmariadb':
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