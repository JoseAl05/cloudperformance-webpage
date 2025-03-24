'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoComponent } from './LogoComponent';
import {MobileSidebar} from './MainViewMobileSidebar';
import { cn } from '@/lib/utils';
import { BellIcon, Settings2 } from 'lucide-react';
import { ModeToggle } from './TogglerMode';

export const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className='bg-white dark:bg-slate-900'>
            <nav className='flex justify-between items-center pl-20'>
                <div className='hidden md:h-20 md:justify-center md:items-center md:gap-4 md:flex'>
                    <Link
                        href='#'
                        className={cn(`
                            p-3
                            rounded-md
                            hover:shadow-xl
                            hover:border-white
                            hover:bg-blue-600
                            hover:text-white
                            hover:scale-110
                            transition-all`,
                            pathname === '/main-view' ? 'bg-blue-600 text-white font-medium' : 'bg-white text-black font-normal'
                        )}
                    >
                        Treemap
                    </Link>
                    <Link
                        href='#'
                        className='p-3 rounded-md hover:shadow-xl hover:border-white hover:bg-blue-600 hover:text-white hover:scale-110 transition-all'
                    >
                        Consumo/No Consumo
                    </Link>
                    <Link
                        href='#'
                        className='p-3 rounded-md hover:shadow-xl hover:border-white hover:bg-blue-600 hover:text-white hover:scale-110 transition-all'
                    >
                        Recursos por agrupación
                    </Link>
                    <Link
                        href='#'
                        className='p-3 rounded-md hover:shadow-xl hover:border-white hover:bg-blue-600 hover:text-white hover:scale-110 transition-all'
                    >
                        Quotas
                    </Link>
                    <Link
                        href='#'
                        className='p-3 rounded-md hover:shadow-xl hover:border-white hover:bg-blue-600 hover:text-white hover:scale-110 transition-all'
                    >
                        Tabla de Items
                    </Link>
                </div>
                <div className='hidden gap-5 px-10 md:flex md:items-center'>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <BellIcon size={20}/>
                    </div>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <Settings2 size={20}/>
                    </div>
                    <ModeToggle />
                </div>
            </nav>
            <nav className='flex items-center p-4 md:hidden'>
                <LogoComponent/>
                <MobileSidebar/>
            </nav>
        </div>
    );
}