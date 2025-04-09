'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LogoComponent } from './LogoComponent';
import { MobileSidebar } from './MainViewMobileSidebar';
import { cn } from '@/lib/utils';
import { BellIcon, Menu, Settings2, X } from 'lucide-react';
import { ModeToggle } from './TogglerMode';
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
        setIsOpen(!isOpen);
    };

    if (!isMounted) return null;

    const handleNavLinkClick = (href: string) => {
        setActiveHash(href);
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const navLinksMapping = {
        '/main-view': [
            { name: 'Heatmap', href: '#treemap' },
            { name: 'Tendencia PayG', href: '#paygtrend' },
            { name: 'Storage vs BlobStorage', href: '#storagevsblob' },
            { name: 'Spot VM vs VM', href: '#spotvmvsvm' },
            { name: 'VM no Utilizadas', href: '#vmunused' },
            { name: 'VMSS no Utilizadas', href: '#vmssunused' },
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

    const navLinks = navLinksMapping[pathname] || [
        { name: 'Default Link 1', href: '#default1' },
        { name: 'Default Link 2', href: '#default2' },
    ];

    return (
        <div className='fixed z-50 w-full bg-white shadow-md dark:bg-slate-900'>
            <nav className='hidden justify-between items-center max-w-[1600px] md:flex md:flex-col md:mr-48 lg:flex-row lg:pl-12'>
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
                                cursor-pointer
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
