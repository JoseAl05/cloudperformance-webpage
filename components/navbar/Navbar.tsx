'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MobileSidebar } from '../azure/sidebar/MainViewMobileSidebar';
import { cn } from '@/lib/utils';
import { BellIcon, Menu, Settings2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Montserrat } from "next/font/google";
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { ModeToggle } from './TogglerMode';
import LogoutButton from '@/components/LogoutButton';

interface NavLink {
    name: string;
    href: string;
}

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname() ?? '';
    const { theme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    if (!isMounted) return null;

    // Detectar proveedor según la ruta
    const provider = pathname.includes('aws')
        ? 'aws'
        : pathname.includes('azure')
        ? 'azure'
        : 'default';

    // Logo dinámico según proveedor
    const logoSrc =
        provider === 'aws'
            ? '/aws.png'
            : provider === 'azure'
            ? '/azure.png'
            : '/logo.png';

    const navLinksMapping: Record<string, NavLink[]> = {
        '/main-view': [
            { name: 'Heatmap', href: '#treemap' },
            { name: 'Tendencia PayG', href: '#paygtrend' }
        ],
        '/consumo': [
            { name: 'Consumo', href: '#consumo' }
        ],
        '/deployments': [
            { name: 'Deployments', href: '#deployments' }
        ],
        '/quotas': [
            { name: 'Quotas', href: '#quotas' }
        ],
        '/recursos/maquinas-virtuales': [
            { name: 'VMs', href: '#vms' }
        ]
    };

    const navLinks: NavLink[] = navLinksMapping[pathname] || [
        { name: 'Default Link 1', href: '#default1' },
        { name: 'Default Link 2', href: '#default2' },
    ];

    return (
        <div className='fixed z-50 w-full bg-white shadow-md dark:bg-slate-900'>
            {/* Desktop Navigation */}
            <nav className='hidden justify-between items-center max-w-[1600px] md:flex md:flex-col md:mr-24 lg:flex-row lg:pl-12'>
                <div className='h-24 flex justify-center items-center gap-2 lg:gap-4'>
                    <Link href="/home" className="flex items-center gap-3">
                        <h1
                            className={cn(
                                "text-base font-bold truncate transition-all flex items-center",
                                montserrat.className,
                                theme === "dark" ? "text-white" : "text-blue-600",
                            )}
                        >
                            Cloud Performance |
                        </h1>
                        <div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
                            <Image
                                width={80}
                                height={80}
                                alt="Logo Cloud Provider"
                                src={logoSrc}
                                className="object-contain"
                            />
                        </div>
                    </Link>
                </div>

                <div className='flex gap-3 z-50 justify-center items-center lg:gap-5'>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <BellIcon size={20} />
                    </div>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <Settings2 size={20} />
                    </div>
                    <ModeToggle />
                    <LogoutButton />
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className='flex justify-between items-center p-4 md:hidden'>
                <div className='flex items-center'>
                    <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                        <Image
                            width={48}
                            height={48}
                            alt="Logo Cloud Provider"
                            src={logoSrc}
                            className="object-contain"
                        />
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <BellIcon size={20} />
                    </div>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <Settings2 size={20} />
                    </div>
                    <ModeToggle />
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={toggleMenu}
                        className='text-slate-400 hover:bg-blue-600 hover:text-white'
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top md:hidden'>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                `block px-6 py-3
                                transition-all
                                hover:bg-blue-50
                                dark:hover:bg-slate-700`,
                                pathname === link.href
                                    ? 'bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-white font-medium'
                                    : 'text-gray-800 dark:text-gray-200',
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className='border-t border-gray-200 dark:border-gray-700 py-2'>
                        <MobileSidebar />
                    </div>
                </div>
            )}
        </div>
    );
};