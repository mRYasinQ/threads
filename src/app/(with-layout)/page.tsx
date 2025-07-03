import { makeStore } from '@/store';
import threadApi from '@/store/services/threadsApi';

import { StoreProvider } from '@/components/StoreProvider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Posts } from '@/store/features/post/Posts';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Threads',
    description: 'Threads home page.',
};

export default async function RootPage() {
    const store = makeStore();
    await store.dispatch(threadApi.endpoints.getPosts.initiate(undefined));
    const state = store.getState();

    return (
        <>
            <Header title="Home" />
            <div className="h-full overflow-y-auto border-gray-200 bg-white pt-16 lg:border-r lg:border-b lg:border-l lg:pt-0 dark:border-gray-800 dark:bg-gray-900">
                <StoreProvider preloadedState={state}>
                    <Posts />
                </StoreProvider>
            </div>
            <Footer />
        </>
    );
}
