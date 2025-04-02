'use client'
import Image from 'next/image';
import Link from 'next/link';

import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const monsterrat = Montserrat({ weight: '600', subsets: ['latin'] });

export const LogoComponent = ({ isExpanded }: { isExpanded?: boolean }) => {
    return isExpanded ? (
        <Link href='/' className='flex items-center mb-0 md:pl-3 md:mb-14'>
            <div className='relative w-10 h-10 md:w-20 md:h-20 mr-2 mt-0 md:mt-3'>
                <Image
                    width={100}
                    height={100}
                    alt='Logo Intac'
                    src='/logo.png'
                />
            </div>
            <h1 className={cn('text-base md:text-xl font-bold text-blue-600', monsterrat.className)}>Cloud Performance</h1>
        </Link>
    ) : (
        <div className='relative w-10 h-10 md:w-12 md:h-12 mr-2 mt-0 md:mt-3'>
            <Image
                width={100}
                height={100}
                alt='Logo Intac'
                src='/logo.png'
            />
        </div>
    );
}