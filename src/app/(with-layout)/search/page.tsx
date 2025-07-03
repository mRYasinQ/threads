import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Search } from '@/store/features/search/Search';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Search • Threads',
    description: 'Threads search page.',
};

export default function SearchPage() {
    return (
        <>
            <Header title="Search" />
            <div className="h-full overflow-y-auto border-gray-200 bg-white pt-16 lg:border-r lg:border-b lg:border-l lg:pt-0 dark:border-gray-800 dark:bg-gray-900">
                <Search />
            </div>
            <Footer />
        </>
    );
}
