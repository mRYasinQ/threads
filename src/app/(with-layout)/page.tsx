import { makeStore } from '@/store';
import threadApi from '@/store/services/threadsApi';

import { MainLayout } from '@/components/MainLayout';
import { StoreProvider } from '@/components/StoreProvider';
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
        <MainLayout title="Home">
            <StoreProvider preloadedState={state}>
                <Posts />
            </StoreProvider>
        </MainLayout>
    );
}
