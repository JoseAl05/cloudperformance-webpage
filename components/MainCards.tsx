'use client'
import { ArrowUp, CreditCard, Database, DollarSign, Receipt } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const MainCards = () => {
    return (
        <>
            <Card className='relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800'>
                <CardHeader className='pb-2 pt-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-red-500 md:text-nowrap dark:text-red-400'>Ahorro Potencial</h3>
                        <div className='p-2 bg-red-50 dark:bg-red-900/20 rounded-lg'>
                            <DollarSign className='w-5 h-5 text-red-500 dark:text-red-400' />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className='flex-grow'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='text-2xl font-bold text-red-600 dark:text-red-400'>USD 1,500</span>
                        </div>
                        <div className='inline-flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                            <span className='text-sm font-medium text-green-600 dark:text-green-400'>+12.25%</span>
                            <ArrowUp className='w-4 h-4 text-green-500 dark:text-green-400' />
                        </div>
                    </div>
                </CardContent>
                <div className='h-2 bg-gradient-to-r from-red-400 to-red-500'></div>
            </Card>
            <Card className='relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800'>
                <CardHeader className='pb-2 pt-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-blue-500 md:text-nowrap dark:text-blue-400'>Recursos Totales</h3>
                        <div className='p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                            <Database className='w-5 h-5 text-blue-500 dark:text-blue-400' />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className='flex-grow'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>1,000</span>
                        </div>
                        <div className='inline-flex items-center gap-1 px-2 py-1 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                            <span className='text-sm font-medium text-green-600 dark:text-green-400'>+8.13%</span>
                            <ArrowUp className='w-4 h-4 text-green-500 dark:text-green-400' />
                        </div>
                    </div>
                </CardContent>
                <div className='h-2 bg-gradient-to-r from-blue-400 to-blue-500'></div>
            </Card>
            <Card className='relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800'>
                <CardHeader className='pb-2 pt-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-blue-500 md:text-nowrap dark:text-blue-400'>Suscripciones</h3>
                        <div className='p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                            <CreditCard className='w-5 h-5 text-blue-500 dark:text-blue-400' />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className='flex-grow'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>5</span>
                        </div>
                        <div className='inline-flex items-center gap-1 px-2 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg'>
                            <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>0%</span>
                            <ArrowUp className='w-4 h-4 text-gray-500 dark:text-gray-400' />
                        </div>
                    </div>
                </CardContent>
                <div className='h-2 bg-gradient-to-r from-blue-400 to-blue-500'></div>
            </Card>
            <Card className='overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 relative flex flex-col'>
                <CardHeader className='pb-2 pt-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-lg font-semibold text-blue-500 md:text-nowrap dark:text-blue-400'>Cuentas de Facturación</h3>
                        <div className='p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg'>
                            <Receipt className='w-5 h-5 text-blue-500 dark:text-blue-400' />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className='flex-grow'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <span className='text-2xl font-bold text-blue-600 dark:text-blue-400'>5</span>
                        </div>
                        <div className='inline-flex items-center gap-1 px-2 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-lg'>
                            <span className='text-sm font-medium text-gray-600 dark:text-gray-400'>0%</span>
                            <ArrowUp className='w-4 h-4 text-gray-500 dark:text-gray-400' />
                        </div>
                    </div>
                </CardContent>
                <div className='h-2 bg-gradient-to-r from-blue-400 to-blue-500 mt-auto'></div>
            </Card>
        </>
    )
}