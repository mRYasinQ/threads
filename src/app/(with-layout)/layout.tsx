import { MenuController } from '@/lib/features/menu/MenuController';
import { Sidebar } from '@/components/Sidebar';
import { ReportProblem } from '@/lib/features/report/ReportProblem';

export default function WithLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <MenuController>
            <Sidebar />
            {children}
            <ReportProblem />
        </MenuController>
    );
}
