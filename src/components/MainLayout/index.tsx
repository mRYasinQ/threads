import { Header } from '../Header';
import { Footer } from '../Footer';

import type { IMainLayoutProps } from './types';

export const MainLayout = ({ title, children }: IMainLayoutProps) => {
    return (
        <>
            <Header title={title} />
            <div className="h-full overflow-y-auto border-gray-200 bg-white pt-16 lg:border-r lg:border-b lg:border-l lg:pt-0 dark:border-gray-800 dark:bg-gray-900">
                {children}
            </div>
            <Footer />
        </>
    );
};
