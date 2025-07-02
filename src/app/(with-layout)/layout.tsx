import { MenuController } from '@/store/features/menu/MenuController';
import { ActionButton } from '@/store/features/auth/ActionButton';
import { Sidebar } from '@/components/Sidebar';
import { ReportProblem } from '@/store/features/report/ReportProblem';

export default function WithLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <MenuController>
            <ActionButton />
            <Sidebar />
            {children}
            <ReportProblem />
        </MenuController>
    );
}
