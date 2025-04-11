'use client'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BarChart2, Box, Cloud, Home, PieChart, Zap, Computer, Database,DollarSign,TrendingDown,Repeat, ChartLine, Grid2X2 } from 'lucide-react';
import { LogoComponent } from './LogoComponent';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

const routes = [
    {
        label: 'Azure',
        icon: Cloud,
        href: '#',
        color: 'text-blue-600'
    },
    {
        label: 'Inicio',
        icon: Home,
        href: '/main-view',
        color: 'text-sky-500',
    },
    {
        label: 'Heatmap Costos y Tendencia PayG',
        icon: Grid2X2,
        href: '/ahorro',
        color: 'text-teal-500',
    },
    {
        label: 'Consumo',
        icon: ChartLine,
        href: '/consumo',
        color: 'text-green-700',
    },
    {
        label: 'Quotas',
        icon: PieChart,
        href: '/quotas',
        color: 'text-violet-500',
    },
    {
        label: 'Deployments',
        icon: Zap,
        href: '/deployments',
        color: 'text-pink-500',
    },
    {
        label: 'Recursos',
        icon: Box,
        href: '/recursos',
        color: 'text-orange-700',
    },
    {
        label: 'Funciones',
        icon: BarChart2,
        href: '/music',
        color: 'text-emerald-500',
    }
]

const functionRoutes = [
    {
        label:'Consumo VMs',
        icon: Computer,
        href: '/functions/consumo-vms',
        color: 'text-blue-500'
    },
    {
        label:'Blob Storage',
        icon: Database,
        href: '/functions/blobstorage',
        color: 'text-teal-500'
    },
    {
        label:'Spot VMs',
        icon: Computer,
        href: '/functions/spot-vms',
        color: 'text-violet-500'
    },
    {
        label:'Facturación de Recursos',
        icon: DollarSign,
        href: '/functions/facturacion-recursos',
        color: 'text-green-500'
    },
    {
        label:'Recursos no utilizados',
        icon: TrendingDown,
        href: '/functions/recursos-no-utilizados',
        color: 'text-red-500'
    },
    {
        label:'VMSS Autoscalling',
        icon: Repeat,
        href: '/functions/autoscaling-vmss',
        color: 'text-indigo-500'
    },
]


export const MainViewSidebar = () => {

    const pathname = usePathname();

    return (
        <>
            <div className='flex flex-col h-full p-4 space-y-4 text-black dark:text-white'>
                <div className='py-2 flex-1 text-xl'>
                    <LogoComponent />
                    <div className='space-y-2'>
                        {routes.map(route => (
                            route.label === 'Azure' ? (
                                <span
                                    key={route.href}
                                    className={cn(`
                                        flex
                                        justify-center
                                        p-3
                                        w-full
                                        text-xl
                                        font-medium
                                        rounded-lg
                                        `,
                                        pathname === route.href ? 'dark:text-white dark:bg-white/10' : 'text-slate-800 dark:text-slate-400'
                                    )}
                                >
                                    <div className='flex items-center flex-1'>
                                        <route.icon className={cn('h-10 w-10 mr-3', route.color)} />
                                        {route.label}
                                    </div>
                                </span>
                            ) : route.label === 'Funciones' ? (
                                <Accordion
                                    className={cn(`
                                        flex
                                        justify-start
                                        p-3
                                        w-full
                                        text-sm
                                        font-medium
                                        rounded-lg
                                        group
                                    `,
                                        pathname === route.href ? 'dark:text-white dark:bg-white/10' : 'text-slate-800 dark:text-slate-400'
                                    )}
                                    type="single"
                                    collapsible
                                    key={route.href}
                                >
                                    <AccordionItem value={route.label}>
                                        <AccordionTrigger
                                            className='cursor-pointer items-center justify-baseline py-0'
                                        >
                                            <div className='flex items-center'>
                                                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                                                {route.label}
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className='h-56 overflow-y-scroll'>
                                            {
                                                functionRoutes.map(fRoute => (
                                                    <Link
                                                        key={fRoute.href}
                                                        href={fRoute.href}
                                                        className={cn(`
                                                            flex
                                                            justify-start
                                                            p-3
                                                            w-full
                                                            text-sm
                                                            font-medium
                                                            rounded-lg
                                                            cursor-pointer
                                                            group
                                                            transition
                                                            hover:text-blue-600
                                                            dark:hover:text-white
                                                            dark:hover:bg-white/10
                                                            hover:bg-black/20
                                                        `,
                                                            pathname === fRoute.href ? 'dark:text-white dark:bg-white/10' : 'text-slate-800 dark:text-slate-400'
                                                        )}
                                                    >
                                                        <div className='flex items-center'>
                                                            <fRoute.icon className={cn('h-5 w-5 mr-3', fRoute.color)} />
                                                            {fRoute.label}
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ) : (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={cn(`
                                            flex
                                            justify-start
                                            p-3
                                            w-full
                                            text-sm
                                            font-medium
                                            rounded-lg
                                            cursor-pointer
                                            group
                                            transition
                                            hover:text-blue-600
                                            dark:hover:text-white
                                            dark:hover:bg-white/10
                                            hover:bg-black/20
                                        `,
                                        pathname === route.href ? 'dark:text-white dark:bg-white/10' : 'text-slate-800 dark:text-slate-400'
                                    )}
                                >
                                    <div className='flex items-center flex-1'>
                                        <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                                        {route.label}
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}