import { MainLayout } from '@/components/MainLayout';
import { Search } from '@/store/features/search/Search';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Search • Threads',
    description: 'Threads search page.',
};

export default function SearchPage() {
    return (
        <MainLayout title="Search">
            <Search />
        </MainLayout>
    );
}
