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
                <Button variant='ghost' size='icon' className='md:hidden'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <SheetTitle></SheetTitle>
                <MainViewSidebar />
            </SheetContent>
        </Sheet>
    );
}