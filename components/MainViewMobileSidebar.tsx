'use client'

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MainViewSidebar } from './MainViewSidebar';
import { useEffect, useState } from 'react';


export const MobileSidebar = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className='flex items-center gap-2 w-full justify-start px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700'>
                    <Menu className="h-5 w-5" />
                    <span>Vistas</span>
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <SheetTitle></SheetTitle>
                <MainViewSidebar />
            </SheetContent>
        </Sheet>
    );
}