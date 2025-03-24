import Image from 'next/image';
import Link from 'next/link';

import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const monsterrat = Montserrat({ weight: '600', subsets: ['latin'] });

export const LogoComponent = () => {
    return (
        <Link href='/dashboard' className='flex items-center pl-3 mb-0 md:mb-14'>
            <div className='relative w-20 h-20 mr-2 mt-3'>
                <Image
                    width={100}
                    height={100}
                    alt='Logo'
                    src='/logo.png'
                />
            </div>
            <h1 className={cn('text-xl font-bold text-blue-600', monsterrat.className)}>Cloud Performance</h1>
        </Link>
    )
}