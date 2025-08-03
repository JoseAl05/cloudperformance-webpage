"use client"
import { Computer, Database } from "lucide-react"
import { CategorySelectionAws } from "../CategorySelectionAws"
import { useState } from "react"
import { ConsumeViewEc2InstancesAws } from "./ConsumeViewEc2InstancesAws"
import { ConsumeViewRdsPostgresqlAws } from "./ConsumeViewRdsPostgresqlAws"
import { ConsumeViewRdsMysqlAws } from "./ConsumeViewRdsMysqlAws"
import { ConsumeViewRdsMariadbAws } from "./ConsumeViewRdsMariadbAws"
import { ConsumeViewRdsSqlServerAws } from "./ConsumeViewRdsSqlServerAws"
import { ConsumeViewEc2AutoscalingAws } from './ConsumeViewEc2AutoscalingAws'
import { ConsumeViewNodesEksAws } from './ConsumeViewNodesEksAws'

export const ConsumeViewCategorySelectionAws = () => {
    const [selectedCategory, setSelectedCategory] = useState("iec2")

    const services = [
        { value: "iec2", label: "Instancias EC2", icon: <Computer className="mr-2 h-5 w-5" /> },
        { value: "asgiec2", label: "Instancias EC2 de Autoscaling Groups", icon: <Computer className="mr-2 h-5 w-5" /> },
        { value: "irdspg", label: "Instancias RDS PostgreSQL", icon: <Database className="mr-2 h-5 w-5" /> },
        { value: "irdsmysql", label: "Instancias RDS Mysql", icon: <Database className="mr-2 h-5 w-5" /> },
        // { value: "irdsmariadb", label: "Instancias RDS MariaDB", icon: <Database className="mr-2 h-5 w-5" /> },
        { value: "irdssqlserver", label: "Instancias RDS SQL Server", icon: <Database className="mr-2 h-5 w-5" /> },
        // { value: "eksnodes", label: "Nodos EKS", icon: <Computer className="mr-2 h-5 w-5" /> },
    ]

    const renderFunctionsIframe = () => {
        switch (selectedCategory) {
            case "iec2":
                return <ConsumeViewEc2InstancesAws />
            case "asgiec2":
                return <ConsumeViewEc2AutoscalingAws />
            case "eksnodes":
                return <ConsumeViewNodesEksAws />
            case "irdspg":
                return <ConsumeViewRdsPostgresqlAws />
            case "irdsmysql":
                return <ConsumeViewRdsMysqlAws />
            case "irdsmariadb":
                return <ConsumeViewRdsMariadbAws />
            case "irdssqlserver":
                return <ConsumeViewRdsSqlServerAws />
            default:
                return null
        }
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
    }

    return (
        <div className="w-full bg-white dark:bg-slate-900 rounded-xl shadow-sm p-6 border border-slate-200 dark:border-slate-800">
            <div className="mb-6">
                <CategorySelectionAws handleCategoryChange={handleCategoryChange} categories={services} defaultValue="iec2" />
            </div>
            <div className="transition-all duration-300 ease-in-out">{renderFunctionsIframe()}</div>
        </div>
    )
}
