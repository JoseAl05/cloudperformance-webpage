import { CollapseSidebar } from '@/components/sidebar/CollapseSidebar';
import { Navbar } from '@/components/navbar/Navbar';
import { Separator } from '@/components/ui/separator';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full relative">
            <CollapseSidebar />
            <main className="w-full pl-16 transition-all duration-300">
                <Navbar />
                <Separator className="bg-slate-200 dark:bg-slate-800" />
                {children}
            </main>
        </div>
        // <div className='h-full relative'>
        //     <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0'>
        //         <div className='flex items-center h-full dark:bg-slate-900'>
        //             <MainViewSidebar/>
        //             <Separator className='bg-slate-400 m-5' orientation='vertical'/>
        //         </div>
        //     </div>
        //     <main className='md:pl-72'>
        //         <Navbar/>
        //         <Separator className='bg-slate-400'/>
        //         {children}
        //     </main>
        // </div>
    );
}