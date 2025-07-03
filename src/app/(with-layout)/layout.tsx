import { MenuController } from '@/store/features/menu/MenuController';
import { ActionButton } from '@/store/features/auth/ActionButton';
import { Sidebar } from '@/components/Sidebar';
import { ReportProblem } from '@/store/features/report/ReportProblem';

export default function WithLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <MenuController>
            <div className="fixed top-6 right-6 z-10 hidden lg:flex">
                <ActionButton />
            </div>
            <Sidebar />
            <main className="relative z-0">
                <div className="relative flex flex-col">
                    <div className="flex justify-center">
                        <div className="flex w-full flex-col lg:w-2xl">{children}</div>
                    </div>
                </div>
            </main>
            <ReportProblem />
        </MenuController>
    );
}
