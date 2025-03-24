import { MainViewSidebar } from '@/components/MainViewSidebar';
import {Navbar} from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-full relative'>
            <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
                <div className='flex items-center h-full dark:bg-slate-900'>
                    <MainViewSidebar/>
                    <Separator className='bg-slate-400 m-5' orientation='vertical'/>
                </div>
            </div>
            <main className='md:pl-72'>
                <Navbar/>
                <Separator className='bg-slate-400'/>
                {children}
            </main>
        </div>
    );
}