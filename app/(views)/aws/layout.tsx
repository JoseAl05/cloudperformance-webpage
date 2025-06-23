import { CollapseSidebarAWS } from '@/components/aws/sidebar/CollapseSidebarAws';
import { Navbar } from '@/components/navbar/Navbar';
import { Separator } from '@/components/ui/separator';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full relative">
            <CollapseSidebarAWS />
            <main className="w-full pl-16 transition-all duration-300">
                <Navbar />
                <Separator className="bg-slate-200 dark:bg-slate-800" />
                {children}
            </main>
        </div>
    );
}