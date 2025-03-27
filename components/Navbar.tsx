'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoComponent } from './LogoComponent';
import { MobileSidebar } from './MainViewMobileSidebar';
import { cn } from '@/lib/utils';
import { BellIcon, Menu, Settings2, X } from 'lucide-react';
import { ModeToggle } from './TogglerMode';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [activeHash, setActiveHash] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== 'undefined') {
            setActiveHash(window.location.hash);
        }

        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    if (!isMounted) return null

    const handleNavLinkClick = (href) => {
        setActiveHash(href);
        if (isOpen) {
            setIsOpen(false);
        }
    };


    const navLinks = [
        { name: 'Treemap', href: '#treemap' },
        { name: 'Consumo/No Consumo', href: '#consumo' },
        { name: 'Recursos por agrupación', href: '#recursos' },
        { name: 'Tabla de Items', href: '#items' }
    ]

    return (
        <div className='fixed z-50 w-full bg-white shadow-md dark:bg-slate-900'>
            <nav className='hidden justify-between items-center max-w-[1600px] md:flex md:flex-col md:mr-72 lg:flex-row lg:mr-80 lg:pl-12'>
                <div className='h-24 flex justify-center items-center gap-2 lg:gap-4'>
                    {navLinks.map((link) => (
                        typeof window &&
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => handleNavLinkClick(link.href)}
                            className={cn(
                                `
                                    p-2
                                    text-sm
                                    rounded-md
                                    whitespace-nowrap
                                    lg:text-base
                                    lg:p-3
                                    hover:shadow-xl
                                    hover:border-white
                                    hover:bg-blue-600
                                    hover:text-white
                                    hover:scale-105
                                    transition-all`,
                                    activeHash === link.href
                                    ? 'bg-blue-600 text-white font-medium'
                                    : 'bg-white text-black dark:bg-slate-900 dark:text-white font-normal',
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className='flex gap-3 z-50 justify-center items-center lg:gap-5'>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <BellIcon size={20} />
                    </div>
                    <div className='text-slate-400 cursor-pointer rounded-md p-1 hover:bg-blue-600 hover:text-white transition-all'>
                        <Settings2 size={20} />
                    </div>
                    <ModeToggle />
                </div>
            </nav>
            {/* Mobile Navigation */}
            <nav className='flex justify-between items-center p-4 md:hidden'>
                <div className='flex items-center'>
                    <LogoComponent />
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
                                `
                                block px-6 py-3
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
}