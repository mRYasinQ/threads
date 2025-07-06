import { notFound } from 'next/navigation';

import { makeStore } from '@/store';
import threadApi from '@/store/services/threadsApi';

import { MainLayout } from '@/components/MainLayout';
import { PostItem } from '@/store/features/post/PostItem';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Post • Threads',
    description: 'Threads post page.',
};

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;

    const store = makeStore();
    const { data: post } = await store.dispatch(threadApi.endpoints.getPost.initiate(postId));

    if (!post?.ok || !post?.body.data) notFound();

    return (
        <MainLayout title='Post'>
            <PostItem post={post?.body.data} />
        </MainLayout>
    );
}
