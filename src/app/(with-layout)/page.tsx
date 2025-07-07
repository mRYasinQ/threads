import { unstable_noStore } from 'next/cache';

import { makeStore } from '@/store';
import postApi from '@/store/services/post';

import { MainLayout } from '@/components/MainLayout';
import { Posts } from '@/store/features/post/Posts';

import type { Metadata } from 'next';
import type { IPost } from '@/shared/types';

export const metadata: Metadata = {
    title: 'Threads',
    description: 'Threads home page.',
};

export default async function RootPage() {
    unstable_noStore();

    const store = makeStore();
    const data = await store.dispatch(postApi.endpoints.getPosts.initiate({ page: 1 })).unwrap();

    const initialPost: IPost[] = data?.body?.data ?? [];
    const initialHasNextPage: boolean = data?.body?.pagination?.hasNextPage ?? false;

    return (
        <MainLayout title="Home">
            <Posts initialData={{ initialPost, initialHasNextPage }} />
        </MainLayout>
    );
}
